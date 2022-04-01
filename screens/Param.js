import React, { useState, useEffect } from "react";
import { Text, Image } from "react-native-elements";
import { useNavigation } from "@react-navigation/native";
import { ScrollView, View, StyleSheet } from "react-native";
import * as yup from "yup";
import colors from "../Couleur";
import Toast from "react-native-toast-message";
import DataCombo from "../components/DataCombo";

export default function Param(props) {
  const navigation = useNavigation();
  const [initialValues, setInitialValues] = useState({
    relaod: "",
  });
  const reload = [
    { label: "1 seconde", value: "1" },
    { label: "5 secondes", value: "5" },
    { label: "10 secondes", value: "10" },
    { label: "15 secondes", value: "15" },
    { label: "20 secondes", value: "20" },
    { label: "25 secondes", value: "25" },
    { label: "30 secondes", value: "30" },
    { label: "1 minute", value: "60" },
  ];
  const jeton = props.jeton;

  // Schema de validation du formulaire
  const schema = yup.object().shape({
    relaod: yup
      .number("Nombre obligatoire")
      .required("Temps en seconde obligatoire")
      .min("Valeur minimum 1")
      .integer("Entier obligatoire")
      .positive("Nombre positif obligatoire"),
  });

  return (
    <View style={styles.containerParam}>
      <ScrollView overScrollMode="never">
        <View style={styles.containeImg}>
          <Image
            size={150}
            containerStyle={styles.formBody}
            source={require("../assets/image/settings.png")}
          />
        </View>
        <DataCombo
          data={reload}
          http={"param/ReadParams.php?param=reload"}
          jeton={jeton}
          tyParam={"reload"}
          title={"Période de rechargement"}
        />
      </ScrollView>
      <Toast />
    </View>
  );
}

const styles = StyleSheet.create({
  containerParam: {
    paddingTop: 5,
    backgroundColor: colors.color4,
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
  },
  formBody: {
    aspectRatio: 1,
    width: "40%",
  },
  containeImg: {
    alignItems: "center",
  },
  inputStyle: {
    borderRadius: 3,
    // alignContent: "center",
  },
});
