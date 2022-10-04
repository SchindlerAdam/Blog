import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { BlogProvider } from "./src/context/BlogContext";

import IndexScreen from "./src/screens/indexScreen";


const Stack = createNativeStackNavigator();

const App = () => {

  return (
      <NavigationContainer>

        <Stack.Navigator>
          <Stack.Screen
            name="indexScreen"
            component={IndexScreen}
            options = {{title: "Index"}}
          />

        </Stack.Navigator>

      </NavigationContainer>

  )

};

export default () => {

  return (
    <BlogProvider>
      <App />
    </BlogProvider>
  )
}