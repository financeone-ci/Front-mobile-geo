import { StyleSheet, Text, View, FlatList, StatusBar } from "react-native";
import React, { useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { useMutation, useQuery, useQueryClient } from "react-query";
import axios from "../constantes/axios";
import Style from "../Style";
import Liste from "../components/Liste";
import RechercheBar from "../components/RechercheBar";
import Loader from "../components/Loader";
import BarStatus from "../components/BarStatus";
import Toast from "react-native-toast-message";

const ListUser = (props) => {
  const navigation = useNavigation();

  const [listUser, setListUser] = useState("");

  // Chargement des données
  const jeton = props.route.params.jeton;
  const id = props.route.params.id;

  const fetchData = async () => {
    const headers = {
      authorization: jeton,
    };
    let response = await axios(`Team/UserList.php?type=user&login=${id}`, {
      headers,
    });
    return response.data;
  };

  const VueData = useQuery(["listuser"], fetchData, {
    onSuccess: (data) => {
      data.reponse == "success" && setListUser(data.data);
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

  const style = Style;
  const renderItem = ({ item }) => (
    <Liste
      key={item.id}
      titre={item.user_nom_complet}
      soustitre={item.user_poste}
      source={require("../assets/image/profil.jpg")}
    />
  );
  return (
    <View style={style.container}>
      <BarStatus />
      <RechercheBar />
      {VueData.isLoading ? (
        <Loader />
      ) : (
        <FlatList
          data={VueData.isSuccess && listUser}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
        />
      )}
      <Toast />
    </View>
  );
};

export default ListUser;
