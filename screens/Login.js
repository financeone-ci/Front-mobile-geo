import React from "react";
import { View } from "react-native";
import { Surface } from "react-native-paper";
import { Input, Icon, Button, Text } from "react-native-elements";
import TextInput from "../components/Formulaire";
import { useNavigation } from "@react-navigation/native";
import { Avatar } from "react-native-rapi-ui";
import Style from "../Style";
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
      <TextInput
        placeholder="Utilisateur"
        icon={{ type: "font-awesome", name: "user" }}
      />
      <TextInput
        placeholder="Mot de passe"
        icon={{ type: "font-awesome", name: "lock" }}
        type="text"
        secureTextEntry={true}
      />
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <Button
          title={"Nouveau compte"}
          containerStyle={{
            width: 169,
            margin: 10,
          }}
          type="clear"
          titleStyle={{ color: "#e75e56", fontSize: 20 }}
          onPress={() => navigation.navigate("Register")}
        />
        <Button
          title={"Connexion"}
          icon={{
            name: "arrow-right",
            type: "font-awesome",
            size: 20,
            color: "white",
            paddingLeft: 10,
          }}
          iconRight
          containerStyle={{
            width: 150,
            margin: 10,
          }}
          buttonStyle={{
            backgroundColor: "#e75e56",
            borderRadius: 10,
          }}
          onPress={() => navigation.navigate("Accueil")}
        />
      </View>
    </Surface>
  );
}
