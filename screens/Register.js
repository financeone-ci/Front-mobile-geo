import React from "react";
import { Button, Surface, Snackbar, TextInput, Text } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";
import { Avatar } from "react-native-rapi-ui";
import Style from "../Style";
import Formulaire from "../components/Formulaire";
import { ScrollView } from "react-native";

export default function Login(props) {
  const navigation = useNavigation();
  const style = Style;

  return (
    <ScrollView overScrollMode="never">
      <Surface style={style.container}>
        <Avatar
          source={{
            uri: "http://assets.stickpng.com/thumbs/5a10a7f29642de34b6b65d03.png",
          }}
          size="xl"
        />
        <Text style={style.text}>Création de compte</Text>
        <Formulaire
          elts={[
            {
              style: style.textinput,
              placeholder: "Utilisateur",
            },
            {
              style: style.textinput,
              placeholder: "Nom",
            },
            {
              style: style.textinput,
              placeholder: "Prénoms",
            },
            {
              style: style.textinput,
              placeholder: "Poste",
            },
            {
              style: style.textinput,
              placeholder: "Matricule",
            },
            {
              style: style.textinput,
              placeholder: "Mobile",
            },
            /*{
                  style: style.textinput,
                  placeholder: "Photo",
                  right: <TextInput.Icon name="image-plus" />,
              },
              {
                  style: style.textinput,
                  placeholder: "Couleur",
              },*/
          ]}
        />

        <Button
          icon="login"
          mode="contained"
          style={style.button}
          onPress={() => navigation.replace("Events")}
        >
          Valider
        </Button>

        <Button
          style={style.button}
          onPress={() => navigation.navigate("Login")}
        >
          Connexion
        </Button>
      </Surface>
    </ScrollView>
  );
}
