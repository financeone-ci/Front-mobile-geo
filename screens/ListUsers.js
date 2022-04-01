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
import AlertModal from "../components/AlertModal";
import ButtonValide from "../components/ButtonValide";
import colors from "../Couleur";

const ListUser = (props) => {
  const navigation = useNavigation();

  const [listUser, setListUser] = useState("");
  const [modalVisible, setModalVisible] = useState(false);
  const [user, setUser] = useState("");

  // Chargement des données
  const jeton = props.route.params.jeton;
  const id = props.route.params.id;
  // Mise à jour de la liste des retraits après mutation
  const queryClient = useQueryClient();

  // Etat du modal
  const toggleDialog = () => {
    setModalVisible(!modalVisible);
  };

  // Ajouter à l'équipe
  const addToTeam = (e) => {
    setUser(e);
    toggleDialog();
  };

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
    cacheTime: 1 * 1 * 1000,
  });

  // Mise à jour de la liste des membres de l'équipe
  const addUser = async () => {
    const headers = {
      authorization: jeton,
    };
    let response = await axios(`Team/AddToTeam.php?login=${id}&user=${user}`, {
      headers,
    });
    return response.data;
  };

  // Ajout d'un nouvel utilisateur à l'équipe
  const userAdd = useMutation(addUser, {
    onSuccess: (data) => {
      if (data.reponse === "success") {
        queryClient.invalidateQueries("listuser");
        toggleDialog();
      }
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
        text1: "Nouveau compte",
        text2: "Erreur de connexion",
        visibilityTime: 4000,
      });
    },
  });

  const style = Style;

  const renderItem = ({ item }) => (
    <Liste
      onPress={() => addToTeam(item.id)}
      iconName="add"
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
      <AlertModal
        titre="Ajouter à mon équipe"
        text="Confirmer l'ajout de cet utilisateur à votre équipe."
        visible={modalVisible}
        toggleDialog={toggleDialog}
      >
        <ButtonValide
          title={"Comfirmer"}
          buttonStyle={{
            backgroundColor: colors.color1,
            borderRadius: 5,
          }}
          container={{
            width: 100,
            margin: 10,
          }}
          // Ajout de l'utilisateur dans l'équipe
          onPress={() => userAdd.mutate()}
        />
        <ButtonValide
          title={"Annuler"}
          titleStyle={{ color: colors.color1, fontSize: 17 }}
          buttonStyle={{
            backgroundColor: colors.color3,
            borderRadius: 5,
          }}
          container={{
            width: 100,
            margin: 10,
          }}
          // Fermeture du modal
          onPress={toggleDialog}
        />
      </AlertModal>
      <Toast />
    </View>
  );
};

export default ListUser;
