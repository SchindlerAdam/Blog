import React from "react";
import { StyleSheet, TouchableOpacity } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Ionicons, MaterialIcons } from '@expo/vector-icons'; 

import { Provider as BlogProvider } from "./src/context/BlogContext";

import IndexScreen from "./src/screens/indexScreen";
import ShowBlogPostScreen from "./src/screens/showBlogPostScreen";
import CreateBlogScreen from "./src/screens/createBlogScreen";
import EditScreen from "./src/screens/editScreen";


const Stack = createNativeStackNavigator();

const App = () => {

  return (
      <NavigationContainer>

        <Stack.Navigator initialRouteName="indexScreen">
          
          <Stack.Screen
            name="indexScreen"
            component={IndexScreen}
            options = {({navigation}) => (
              {
                title: "Blogs", 
                headerRight: () => <TouchableOpacity onPress={() => navigation.navigate("createBlogScreen")}><Ionicons style = {styles.headerIcon} name="add" /></TouchableOpacity>,
                headerTintColor: "white",
                headerStyle: {
                  backgroundColor: "orange"
                },
                headerTitleStyle: {
                  fontWeight: "bold",
                },
                headerTitleAlign: "center"
              }
            )}
          />


          <Stack.Screen 
            name = "showBlogPostScreen"
            component = {ShowBlogPostScreen}
            options = {{
              title: "Blog Post",
              headerStyle: {
                backgroundColor: "orange"
              },
              headerTintColor: "white",
              headerTitleStyle: {
                fontWeight: "bold"
              },
              headerTitleAlign: "center"
            }}
          />

          <Stack.Screen 
            name = "createBlogScreen"
            component = {CreateBlogScreen}
            options = {{
              title: "Create",
              headerStyle: {
                backgroundColor: "orange"
              },
              headerTintColor: "white",
              headerTitleStyle: {
                fontWeight: "bold"
              },
              headerTitleAlign: "center"
            }}
          />

          <Stack.Screen 
            name = "editScreen"
            component = {EditScreen}
            options = {{
              title: "Edit",
              headerStyle: {
                backgroundColor: "orange"
              },
              headerTintColor: "white",
              headerTitleStyle: {
                fontWeight: "bold"
              },
              headerTitleAlign: "center"
            }}
          />

        </Stack.Navigator>

      </NavigationContainer>

  )

};

const styles = StyleSheet.create({
  headerIcon: {
    fontSize: 30,
    color: "white"
  }
})

export default () => {

  return (
    <BlogProvider>
      <App />
    </BlogProvider>
  )
}