import React, { useEffect, useState } from "react";
import { Card, Paragraph } from "react-native-paper";
import { View, Alert, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
// import { Avatar } from "react-native-rapi-ui";
import { Avatar } from "react-native-elements";
import Style from "../Style";
import BarStatus from "../components/BarStatus";

export default function Accueil(props) {
  const navigation = useNavigation();
  const style = Style;

  // Redirection
  const onPressFunction = (value) => {
    if (value == "Carte") {
      navigation.navigate("MenuMap");
    } else if (value == "ListTeam") {
      navigation.navigate("ListTeam", {
        id: props.userId,
        jeton: props.jeton,
      });
    } else Alert.alert("Alerte", value);
  };

  return (
    <View style={style.containerAccueil}>
      <BarStatus />
      <Pressable onPress={() => onPressFunction("Carte")} style={style.row2}>
        <Card style={style.menuBloc}>
          <Card.Content style={style.menuLogo}>
            <Avatar
              source={require("../assets/image/001-map.png")}
              size={100}
              rounded
            />
            <Paragraph>Localisation</Paragraph>
          </Card.Content>
        </Card>
      </Pressable>
      <Pressable onPress={() => onPressFunction("ListTeam")} style={style.row2}>
        <Card style={style.menuBloc}>
          <Card.Content style={style.menuLogo}>
            <Avatar
              source={require("../assets/image/002-team.png")}
              size={100}
              rounded
            />
            <Paragraph>Mon équipe</Paragraph>
          </Card.Content>
        </Card>
      </Pressable>
      <Pressable
        onPress={() => onPressFunction("Droits insuffisants")}
        style={style.row2}
      >
        <Card style={style.menuBloc}>
          <Card.Content style={style.menuLogo}>
            <Avatar
              source={require("../assets/image/courbe.png")}
              size={100}
              rounded
            />
            <Paragraph>Données</Paragraph>
          </Card.Content>
        </Card>
      </Pressable>
      <Pressable
        onPress={() => onPressFunction("ListUsers")}
        style={style.row2}
      >
        <Card style={style.menuBloc}>
          <Card.Content style={style.menuLogo}>
            <Avatar
              source={require("../assets/image/001-help.png")}
              size={100}
              rounded
            />
            <Paragraph>Aide</Paragraph>
          </Card.Content>
        </Card>
      </Pressable>
    </View>
  );
}
