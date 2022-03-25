import { StyleSheet, Text, View, FlatList, Alert } from "react-native";
import React, { useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { useMutation, useQuery, useQueryClient } from "react-query";
import axios from "../constantes/axios";
import Style from "../Style";
import Liste from "../components/Liste";
import RechercheBar from "../components/RechercheBar";
import Loader from "../components/Loader";
import FloatButton from "../components/FloatButton";
import BarStatus from "../components/BarStatus";
import Toast from "react-native-toast-message";

const ListTeam = (props) => {
  const navigation = useNavigation();

  const [listUser, setListUser] = useState("");

  // Navigation vers la liste des users
  const handlePress = () => {
    navigation.navigate("ListUsers", {
      id: id,
      jeton: jeton,
    });
  };

  // Chargement des données
  const jeton = props.route.params.jeton;
  const id = props.route.params.id;

  const fetchData = async () => {
    const headers = {
      authorization: jeton,
    };
    let response = await axios(`Team/UserList.php?type=team&login=${id}`, {
      headers,
    });
    // console.log(response.data);
    return response.data;
  };

  const VueData = useQuery(["listeam"], fetchData, {
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
      {VueData.isLoading ? (
        <Loader />
      ) : (
        <View>
          <RechercheBar />
          <FlatList
            data={VueData.isSuccess && listUser}
            renderItem={renderItem}
            keyExtractor={(item) => item.id}
          />
        </View>
      )}
      <FloatButton onPress={handlePress} />
      <Toast />
    </View>
  );
};

export default ListTeam;
