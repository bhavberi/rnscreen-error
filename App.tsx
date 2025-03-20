import React from "react";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { StatusBar, LogBox } from "react-native";
import Navigation from "./src/Navigation";

LogBox.ignoreLogs(["Reanimated"]);
const backup = console.warn;
console.warn = function filterWarning(...args: unknown[]) {
  const [message] = args;
  if (typeof message === "string" && message.includes("[Reanimated]")) {
    return;
  }
  backup.apply(console, args as unknown[]);
};

const App: React.FC = () => {
  return (
      <SafeAreaProvider style={{ backgroundColor: "#231542", flex: 1 }}>
        <StatusBar barStyle="light-content" backgroundColor="#231542" />
        <SafeAreaView
          style={{
            flex: 1,
            padding: 0,
            margin: 0,
          }}
          edges={["top", "right", "bottom", "left"]}
        >
          <Navigation />
        </SafeAreaView>
      </SafeAreaProvider>
  );
};

export default App;
