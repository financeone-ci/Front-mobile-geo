import { StyleSheet, Alert, View } from "react-native";
import React, { useState, useEffect } from "react";
import { Avatar, Icon } from "react-native-elements";
import colors from "../Couleur";
import asyncGetItemStr from "../functions/asyncGetItemStr";
import { useNavigation } from "@react-navigation/native";

const LoadingPage = () => {
  const navigation = useNavigation();
  // Rechecher l'ID et le jeton de l'utilisateur
  const [jeton, setJeton] = useState("");
  const [login, setLogin] = useState("");

  useEffect(() => {
    setTimeout(() => {
      const keys = ["@storage_id", "@storage_token"];
      asyncGetItemStr(keys)
        .then((data) => data)
        .then((value) => {
          const id = value[0][1];
          const jeton = value[1][1];
          if (value[1][1] != "" && value[0][1] != "") {
            navigation.replace("Accueil", {
              userId: id,
              jeton: jeton,
            });
          } else {
            navigation.replace("Login");
          }
        })
        .catch((err) => Alert(err));
    }, 5000);
  }, []);

  // Récupérer asyncstorage

  return (
    <View style={styles.container}>
      <Avatar
        size={200}
        rounded
        source={require("../assets/image/profil.jpg")}
      />
    </View>
  );
};

export default LoadingPage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.color1,
    justifyContent: "space-around",
    alignItems: "center",
  },
});
