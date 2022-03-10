import React from "react";
import { Button, Surface, Snackbar, TextInput, Text } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";
import { Avatar } from "react-native-rapi-ui";
import Style from "../Style";
import Formulaire from "../components/Formulaire";
import AppBarBottom from "../components/AppBarBottom";

export default function Login(props) {
  const navigation = useNavigation();
  const style = Style;

  return (
    <Surface style={style.container}>
      <Avatar
        source={{
          uri: "http://assets.stickpng.com/thumbs/5a10a7f29642de34b6b65d03.png",
        }}
        size="xl"
      />

      <Text style={style.text}>Connexion</Text>
      <Formulaire
        elts={[
          {
            style: style.textinput,
            placeholder: "Utilisateur",
            right: <TextInput.Icon name="account" />,
          },
          {
            style: style.textinput,
            placeholder: "Mot de passe",
            secureTextEntry: true,
            right: <TextInput.Icon name="lock" />,
          },
        ]}
      />

      <Button
        icon="account-key"
        mode="contained"
        style={style.button}
        onPress={() => navigation.replace("Accueil")}
      >
        Connexion
      </Button>

      <Button
        style={style.buttonText}
        color="#fff"
        icon="account-plus"
        onPress={() => navigation.navigate("Register")}
      >
        Nouveau compte
      </Button>
    </Surface>
  );
}
