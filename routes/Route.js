import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
//import { createDrawerNavigator } from "@react-navigation/drawer";
import Login from "../screens/Login";
import Register from "../screens/Register";
// import Accueil from "../screens/Accueil";
import MenuBas from "../components/MenuBas";
import EventDetail from "../screens/EventDetail";
import Events from "../screens/Events";
import ListUsers from "../screens/ListUsers";
import Param from "../screens/Param";
import Profil from "../screens/Profil";
import LoadingPage from "../screens/LoadingPage";
import ListTeam from "../screens/ListTeam";

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
        initialRouteName="LoadingPage"
      >
        <Stack.Screen
          name="LoadingPage"
          options={{
            headerShown: false,
          }}
        >
          {(props) => <LoadingPage {...props} />}
        </Stack.Screen>
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
          {(props) => <MenuBas {...props} />}
        </Stack.Screen>
        <Stack.Screen
          name="Param"
          title="Paramètres"
          options={{
            headerLeft: () => null,
          }}
        >
          {(props) => <Param {...props} />}
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
        <Stack.Screen
          name="ListTeam"
          options={{
            title: "Mon équipe",
          }}
        >
          {(props) => <ListTeam {...props} />}
        </Stack.Screen>
        <Stack.Screen
          name="ListUsers"
          options={{
            title: "Commerciaux",
          }}
        >
          {(props) => <ListUsers {...props} />}
        </Stack.Screen>
        <Stack.Screen name="Profil">
          {(props) => <Profil {...props} />}
        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
