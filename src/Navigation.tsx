import React from "react";
import { TouchableOpacity, Image } from "react-native";
import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Header } from "@react-navigation/elements";
import * as types from "./custom-types";
import { otherIcons, IconSet } from "./constants/Icons";

import About from "./screens/About";

const Stack = createNativeStackNavigator<types.RootStackParamList>();
const MyTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: "white",
  },
};

const darkIcons: IconSet = otherIcons.dark;
const backIcon = darkIcons.back;

function Navigation(): React.JSX.Element {
  return (
    <NavigationContainer theme={MyTheme}>
      <Stack.Navigator
        screenOptions={{
          // headerBackImageSource: backIcon,
          headerTitleAlign: "center",
          headerShadowVisible: false,
          headerTitleStyle: {
            fontSize: 17,
            fontWeight: "bold",
            color: "white",
          },
          header: ({ navigation, options, route }) => {
            return (
              <Header
                {...options}
                headerStyle={{
                  height: 60,
                  backgroundColor: "#231542",
                }}
                headerLeft={() => (
                  <TouchableOpacity
                    onPress={() => navigation.goBack()}
                    style={{ padding: 10 }}
                  >
                    <Image
                      source={backIcon}
                      style={{ width: 30, height: 30 }}
                    />
                  </TouchableOpacity>
                )}
              />
            );
          },
        }}
      >
        <Stack.Screen name="About" component={About} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Navigation;
