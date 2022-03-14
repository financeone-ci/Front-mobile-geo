import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
//import { createDrawerNavigator } from "@react-navigation/drawer";
import Login from "../screens/Login";
import Register from "../screens/Register";
import Accueil from "../screens/Accueil";
import EventDetail from "../screens/EventDetail";
import Events from "../screens/Events";
import ListUsers from "../screens/ListUsers";
import MenuMap from "../screens/MenuMap";
import Profil from "../screens/Profil";

const Stack = createNativeStackNavigator();
// const Drawer = createDrawerNavigator();

export default function Route(props) {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          gestureEnabled: true,
          headerTitleAlign: "center",
        }}
        initialRouteName="Login"
      >
        <Stack.Screen
          name="Login"
          options={{
            headerShown: false,
          }}
        >
          {(props) => <Login {...props} />}
        </Stack.Screen>
        <Stack.Screen
          name="Accueil"
          options={{
            headerLeft: () => null,
          }}
        >
          {(props) => <Accueil {...props} />}
        </Stack.Screen>
        <Stack.Screen
          name="Register"
          options={{
            headerShown: false,
          }}
        >
          {(props) => <Register {...props} />}
        </Stack.Screen>
        <Stack.Screen name="Events">
          {(props) => <Events {...props} />}
        </Stack.Screen>
        <Stack.Screen name="EventDetail">
          {(props) => <EventDetail {...props} />}
        </Stack.Screen>
        <Stack.Screen name="ListUsers">
          {(props) => <ListUsers {...props} />}
        </Stack.Screen>
        <Stack.Screen name="MenuMap">
          {(props) => <MenuMap {...props} />}
        </Stack.Screen>
        <Stack.Screen name="Profil">
          {(props) => <Profil {...props} />}
        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
