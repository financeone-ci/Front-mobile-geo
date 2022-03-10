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

const Stack = createNativeStackNavigator();
// const Drawer = createDrawerNavigator();

export default function Route(props) {
  return (
    <NavigationContainer>
      {/* <Drawer.Navigator initialRouteName="Login">
        <Drawer.Screen name="Login" component={Login} />
        <Drawer.Screen name="Register" component={Register} />
      </Drawer.Navigator>
*/}
      <Stack.Navigator
        screenOptions={{
          gestureEnabled: true,
        }}
        initialRouteName="Login"
      >
        <Stack.Screen name="Login">
          {(props) => <Login {...props} />}
        </Stack.Screen>
        <Stack.Screen name="Accueil">
          {(props) => <Accueil {...props} />}
        </Stack.Screen>
        <Stack.Screen name="Register">
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
      </Stack.Navigator>
    </NavigationContainer>
  );
}
