import React, { useEffect, useState } from "react";
import { View, TouchableOpacity, StyleSheet } from "react-native";
import Style from "../Style";
import colors from "../Couleur";
import { useMutation, useQuery, useQueryClient } from "react-query";
import { Text, Avatar, Icon } from "react-native-elements";
import { useNavigation } from "@react-navigation/native";
import BarStatus from "../components/BarStatus";
import Toast from "react-native-toast-message";
import Loader from "../components/Loader";
import axios from "../constantes/axios";

function Profil(props) {
  const navigation = useNavigation();
  const style = Style;
  // Récupérer les informations de l"utilisateur
  const fetchData = async () => {
    const headers = {
      authorization: props.jeton,
    };
    let response = await axios(`user/UserInfo.php?id=${props.userId}`, {
      headers,
    });
    return response.data;
  };

  const VueData = useQuery(["userinfo"], fetchData, {
    onSuccess: (data) => {
      data.reponse == "error" &&
        Toast.show({
          type: data.reponse,
          text1: data.titre,
          text2: data.message,
          visibilityTime: 4000,
        });
    },
    onError: () => {
      Toast.show({
        type: "error",
        text1: "Connexion",
        text2: "Erreur de connexion",
        visibilityTime: 4000,
      });
    },
    cacheTime: 1 * 60 * 1000,
  });

  return (
    <>
      {VueData.isLoading ? (
        <Loader />
      ) : (
        <View style={styleProfil.containerProfil}>
          <BarStatus />
          <View style={styleProfil.headerProfil}>
            <Avatar
              size={100}
              rounded
              source={require("../assets/image/profil.jpg")}
            />
            <Text h4 style={style.textUser}>
              {VueData.data.donnee[0].user_nom_complet}
            </Text>
            <Text h5 style={style.textUserInfo}>
              {VueData.data.donnee[0].user_poste}
            </Text>
            <Text h6 style={style.textUserInfo}>
              {VueData.data.donnee[0].user_mobile}
            </Text>
            <View style={{ alignSelf: "flex-end" }}>
              <TouchableOpacity
                activeOpacity={0.6}
                onPress={() => navigation.navigate("Register")}
              >
                <Icon
                  reverse
                  name="edit"
                  type="material"
                  color={colors.color1}
                />
              </TouchableOpacity>
            </View>
          </View>
          <View style={styleProfil.BodyProfil}>
            <Text style={style.textInfoTitle}>Email</Text>
            <Text style={style.textInfo}>
              {VueData.data.donnee[0].user_mail}
            </Text>
            <Text style={style.textInfoTitle}>Catégorie</Text>
            <Text style={style.textInfo}>
              {VueData.data.donnee[0].typeuser_typeuser_id}
            </Text>
          </View>
          <Toast />
        </View>
      )}
    </>
  );
}

const styleProfil = StyleSheet.create({
  containerProfil: {
    backgroundColor: colors.color4,
    flex: 1,
    justifyContent: "flex-start",
    flexDirection: "column",
    alignItems: "center",
  },
  headerProfil: {
    paddingTop: 10,
    minWidth: "100%",
    minHeight: "40%",
    backgroundColor: colors.color1,
    borderBottomLeftRadius: 40,
    borderBottomRightRadius: 40,
    alignItems: "center",
    elevation: 30,
  },
  BodyProfil: {
    paddingLeft: 20,
    paddingRight: 20,
    paddingBottom: 20,
    marginTop: 30,
    minWidth: "100%",
    paddingTop: 10,
    alignItems: "flex-start",
  },
});

export default Profil;
