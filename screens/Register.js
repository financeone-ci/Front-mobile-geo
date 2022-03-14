import React, { useState } from "react";
import { Text, Avatar } from "react-native-elements";
import ButtonValide from "../components/ButtonValide";
import { Surface } from "react-native-paper";
import TextInput from "../components/TextInput";
import { useNavigation } from "@react-navigation/native";
import Style from "../Style";
import { ScrollView, View } from "react-native";

export default function Login(props) {
  const navigation = useNavigation();
  const style = Style;

  const [selectedIndex, setSelectedIndex] = useState(0);
  const [selectedIndexes, setSelectedIndexes] = useState([0, 1]);

  return (
    <ScrollView overScrollMode="never">
      <Surface style={style.containerRegister}>
        <Avatar
          size={80}
          rounded
          source={{
            uri: "http://assets.stickpng.com/thumbs/5a10a7f29642de34b6b65d03.png",
          }}
        />
        <Text style={style.text}>Nouveau compte</Text>
        <TextInput placeholder="Utilisateur" />
        <TextInput placeholder="Nom Prénoms" />
        <TextInput placeholder="Poste" />
        <TextInput
          placeholder="Tél."
          icon={{
            type: "material",
            name: "phone",
            color: "#bebdbf",
          }}
        />
        <TextInput
          placeholder="E-mail"
          icon={{
            type: "material",
            name: "alternate-email",
            color: "#bebdbf",
          }}
        />
        <TextInput
          placeholder="Mot de passe"
          icon={{ type: "material", name: "lock", color: "#bebdbf" }}
          type="text"
          secureTextEntry={true}
        />
        <TextInput
          placeholder="Répéter mot de passe"
          icon={{ type: "material", name: "lock", color: "#bebdbf" }}
          type="text"
          secureTextEntry={true}
        />
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <ButtonValide
            title={"Connexion"}
            type="clear"
            titleStyle={{ color: "#e75e56", fontSize: 20 }}
            onPress={() => navigation.navigate("Login")}
          />
          <ButtonValide
            title={"Enregistrer"}
            icon={{
              name: "check",
              type: "font-awesome",
              size: 20,
              color: "white",
              paddingLeft: 10,
            }}
            iconRight
            buttonStyle={{
              backgroundColor: "#e75e56",
              borderRadius: 5,
            }}
            onPress={() => navigation.navigate("Profil")}
          />
        </View>
      </Surface>
    </ScrollView>
  );
}
