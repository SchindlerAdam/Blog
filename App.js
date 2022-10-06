import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { Provider as BlogProvider } from "./src/context/BlogContext";

import IndexScreen from "./src/screens/indexScreen";
import DetailsScreen from "./src/screens/detailsScreen";


const Stack = createNativeStackNavigator();

const App = () => {

  return (
      <NavigationContainer>

        <Stack.Navigator initialRouteName="indexScreen">
          
          <Stack.Screen
            name="indexScreen"
            component={IndexScreen}
            options = {{title: "Blogs"}}
          />

          <Stack.Screen
            name = "detailsScreen"
            component = {DetailsScreen}
            options = {{title: "Details"}}
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