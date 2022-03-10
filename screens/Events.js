import React from "react";
import { View, Text, ActivityIndicator, FlatList, Alert } from "react-native";
import { Button, Card, Title, Paragraph } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";
import { useMutation, useQuery, useQueryClient } from "react-query";
import axios from "axios";
import Style from "../Style";
import Position from "../components/Position";

export default function Events(props) {
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

  const renderItem = (lieu) => (
    <Card key={lieu.item.id} style={style.text}>
      <Card.Content>
        <Title>{lieu.item.nom_place}</Title>
        <Paragraph>{lieu.item.description_place}</Paragraph>
      </Card.Content>

      <Card.Actions>
        <Button onPress={() => Alert.alert(lieu.item.nom_place)}>Cancel</Button>
        <Button onPress={() => navigation.navigate("EventDetail", lieu.item)}>
          Ok
        </Button>
      </Card.Actions>
    </Card>
  );
  return (
    <View style={style.container}>
      {VueData.isLoading ? (
        <ActivityIndicator size="large" color="#0000ff" />
      ) : (
        <>
          <Position />
          <FlatList
            data={VueData.data.infos}
            renderItem={renderItem}
            keyExtractor={(item) => item.id}
          />
        </>
      )}
    </View>
  );
}
