// extend to other types if necessary
// and then set the userType variable in Login.tsx according to the API fields.
enum UserTypes {
  Default, // if user is not of a known type: should not happen
  Student,
  Faculty,
  Staff,
}

// source: https://reactnavigation.org/docs/typescript/
// modify as and when nav stack gets more screens
type RootStackParamList = {
  About: undefined;
};

// add more props types if and when needed
// add 'id' prop here if more than one nav stack is used
// type BottomTabProps = NativeStackScreenProps<RootStackParamList, "BottomTab">;

export type {
  // BottomTabProps,
  RootStackParamList,
};

export { UserTypes };
