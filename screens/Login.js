import React from "react";
import { View } from "react-native";
import { Surface, Snackbar, TextInput, Text } from "react-native-paper";
import { Input, Icon, Button } from "react-native-elements";
import { useNavigation } from "@react-navigation/native";
import { Avatar } from "react-native-rapi-ui";
import Style from "../Style";
import Formulaire from "../components/Formulaire";
import AppBarBottom from "../components/AppBarBottom";

export default function Login(props) {
  const navigation = useNavigation();
  const style = Style;

  return (
    <Surface style={style.containerLogin}>
      <Avatar
        source={{
          uri: "http://assets.stickpng.com/thumbs/5a10a7f29642de34b6b65d03.png",
        }}
        size="xl"
      />

      <Text style={style.text}>Connexion</Text>
      <Input
        placeholder="Utilisateur"
        leftIcon={{ type: "font-awesome", name: "chevron-left" }}
      />
      <Input
        placeholder="Mot de passe"
        leftIcon={{ type: "font-awesome", name: "chevron-left" }}
      />
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-around",
        }}
      >
        <Button
          title={"Connexion"}
          containerStyle={{
            width: 150,
            marginHorizontal: 50,
            marginVertical: 10,
          }}
          buttonStyle={{
            backgroundColor: "#e75e56",
            borderRadius: 3,
          }}
        />
        <Button
          title={"Nouveau compte"}
          containerStyle={{
            width: 200,
            marginHorizontal: 50,
            marginVertical: 10,
          }}
          type="clear"
          titleStyle={{ color: "#e75e56" }}
        />
      </View>
    </Surface>
  );
}
