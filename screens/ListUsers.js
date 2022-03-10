import React from "react";
import {
  View,
  ActivityIndicator,
  FlatList,
  Alert,
  Pressable,
} from "react-native";
import { Card, Avatar, IconButton } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";
import { useMutation, useQuery, useQueryClient } from "react-query";
import axios from "axios";
import Style from "../Style";

export default function Events(props) {
  const Maliste = [
    {
      id_place: "1",
      nom_place: "Chez louis",
      description_place: "description",
      latitude_place: "5.34157681",
      longitude_place: "-4.0303453",
      color_place: "#FF00FF",
    },
    {
      id_place: "2",
      nom_place: "Chez Oscar",
      description_place: "test",
      latitude_place: "5.34758331",
      longitude_place: "-4.0150043",
      color_place: "#FFFFFF",
    },
    {
      id_place: "3",
      nom_place: "test",
      description_place: "qdy;",
      latitude_place: "-3.9879226191333395",
      longitude_place: "5.37279517280304",
      color_place: null,
    },
    {
      id_place: "4",
      nom_place: "Bonjour",
      description_place: "Salut;",
      latitude_place: "-3.9879226191333395",
      longitude_place: "5.37279517280304",
      color_place: null,
    },
  ];
  // Chargement des données
  const fetchData = async () => {
    const headers = {
      Authorization: props.Authorization,
    };
    let response = await axios(
      "http://DESKTOP-N3TD752:8080/api_test/sources/lieux/ReadLieux.php?"
    );
    return response.data;
  };
  const VueData = useQuery(["categories"], fetchData, {
    cacheTime: 1 * 60 * 1000,
  });
  const navigation = useNavigation();
  const style = Style;

  const renderItem = (user, key) => (
    <View style={style.row1} key={key}>
      {
        // console.log(user)
      }
      <Card style={style.menuBlocList}>
        <Card.Title
          style={style.menuLogo}
          title={user.item.nom_place}
          subtitle={user.item.description_place}
          left={(props) => <Avatar.Icon {...props} icon="account" size={50} />}
          right={(props) => (
            <View>
              <IconButton
                {...props}
                icon="google-maps"
                // color="blue"
                size={25}
                onPress={() => Alert.alert("Position")}
              />

              <IconButton
                {...props}
                icon="account-details"
                // color="blue"
                size={25}
                onPress={() => Alert.alert("Détails")}
              />
            </View>
          )}
        />
      </Card>
    </View>
  );
  return (
    <View style={style.container}>
      {
        /*VueData.isLoading ?
         (
          <ActivityIndicator size="large" color="#0000ff" />
        ) : 
        */
        <>
          <FlatList
            data={Maliste}
            // data={VueData.data.infos}
            renderItem={renderItem}
            keyExtractor={(item) => item.id_place}
          />
        </>
      }
    </View>
  );
}
