import React from "react";
import {
  Button,
  Surface,
  Snackbar,
  TextInput,
  Text,
  Card,
  Title,
  Paragraph,
} from "react-native-paper";
import { Image, Alert, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Avatar } from "react-native-rapi-ui";
import Style from "../Style";
import { string } from "yup";
import FloatButton from "../components/FloatButton";
//import MapIcon from "../assets/flat/";

export default function Accueil(props) {
  const navigation = useNavigation();
  const style = Style;
  // const DEFAULT_IMAGE = Image.resolveAssetSource(MapIcon).uri;
  const onPressFunction = (value) => {
    if (value == "Carte") {
      navigation.navigate("MenuMap");
    } else if (value == "ListUsers") {
      navigation.navigate("ListUsers");
    } else Alert.alert("Alerte", value);
  };

  return (
    <Surface style={style.containerAccueil}>
      <Pressable onPress={() => onPressFunction("Carte")} style={style.row2}>
        <Card style={style.menuBloc}>
          <Card.Content style={style.menuLogo}>
            <Avatar
              style={style.menuLogo}
              source={require("./001-map.png")}
              size="xl"
            />

            <Paragraph>Carte</Paragraph>
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
              style={style.menuLogo}
              source={require("./002-team.png")}
              size="xl"
            />

            <Paragraph>Equipe</Paragraph>
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
              style={style.menuLogo}
              source={require("./courbe.png")}
              size="xl"
            />

            <Paragraph>Données</Paragraph>
          </Card.Content>
        </Card>
      </Pressable>
      <FloatButton />
    </Surface>
  );
}
