import React from "react";
import { View, Text, StyleSheet, Image, Alert } from "react-native";
import Style from "../Style";
import { BottomNavigation } from "react-native-paper";
import AfficheMapp from "../components/AfficheMap";
import Events from "../screens/Events";

const style = Style;
//const detail =  route.params
const MappRoute = () => <AfficheMapp />;
const Equipe = () => <AfficheMapp />;

const AlbumsRoute = () => <Events />;

const MenuMapp = (props) => {
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: "music", title: "Carte", icon: "map" },
    { key: "Equipe", title: "Equipe", icon: "account" },
    { key: "recents", title: "profil", icon: "flag" },
  ]);

  const renderScene = BottomNavigation.SceneMap({
    music: MappRoute,
    recents: AlbumsRoute,
    Equipe: Equipe,
  });

  return (
    <BottomNavigation
      style={style.appbar}
      navigationState={{ index, routes }}
      onIndexChange={setIndex}
      renderScene={renderScene}
    />
  );
};

export default MenuMapp;
