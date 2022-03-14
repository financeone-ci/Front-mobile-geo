import React from "react";
import { View } from "react-native";
import { Surface } from "react-native-paper";
import { Text } from "react-native-elements";
import ButtonValide from "../components/ButtonValide";
import TextInput from "../components/TextInput";
import { useNavigation } from "@react-navigation/native";
import { Avatar } from "react-native-rapi-ui";
import Style from "../Style";

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
        icon={{ type: "material", name: "person", color: "#bebdbf" }}
      />
      <TextInput
        placeholder="Mot de passe"
        icon={{ type: "material", name: "lock", color: "#bebdbf" }}
        secureTextEntry={true}
      />
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <ButtonValide
          title={"Nouveau compte"}
          type="clear"
          titleStyle={{ color: "#e75e56", fontSize: 20 }}
          onPress={() => navigation.navigate("Register")}
        />
        <ButtonValide
          title={"Connexion"}
          icon={{
            name: "arrow-right",
            type: "font-awesome",
            size: 20,
            color: "white",
            paddingLeft: 10,
          }}
          buttonStyle={{
            backgroundColor: "#e75e56",
            borderRadius: 5,
          }}
          iconRight
          onPress={() => navigation.navigate("Accueil")}
        />
      </View>
    </Surface>
  );
}
