import React from "react";
import * as Location from "expo-location";
import Style from "../Style";
import { useNavigation } from "@react-navigation/native";
import {
  View,
  Text,
  StyleSheet,
  Image,
  Alert,
  ActivityIndicator,
} from "react-native";
import MapView, { Marker } from "react-native-maps";
import { useMutation, useQuery, useQueryClient } from "react-query";
import axios from "axios";
import { Avatar } from "react-native-paper";
import FloatButton from "../components/FloatButton";

export default function AfficheMapp(props) {
  const [location, setLocation] = React.useState(null);
  const navigation = useNavigation();
  const style = Style;
  React.useEffect(() => {
    const getCoordonnees = async () => {
      const { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        return;
      }
      const userLocation = await Location.getCurrentPositionAsync();
      setLocation(userLocation);
    };
    getCoordonnees();
  }, []);

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

  const LesLieux = [
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
  ];

  if (!location) {
    return (
      <View>
        <Text style={style.text}>En attente de localisation </Text>
      </View>
    );
  } else {
    const detail = location.coords;
    return (
      <View style={style.containerLogin}>
        <MapView
          style={StyleSheet.absoluteFill}
          initialRegion={{
            latitude: detail.latitude,
            longitude: detail.longitude,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
        >
          <Marker
            onPress={() =>
              Alert.alert(
                "Latitude" + detail.latitude,
                "Longitude" + detail.longitude
              )
            }
            icon={<Avatar.Icon size={24} icon="folder" />}
            coordinate={{
              latitude: detail.latitude,
              longitude: detail.longitude,
            }}
            title={"Je suis ici"}
            description={"FinanceOne Abidjan"}
          />

          {VueData.isSuccess &&
            VueData.data.infos.map((lieu, key) => (
              <Marker
                key={key}
                onPress={() =>
                  Alert.alert(
                    "Latitude" + parseFloat(lieu.latitude_place),
                    "Longitude" + parseFloat(lieu.longitude_place)
                  )
                }
                coordinate={{
                  latitude: parseFloat(lieu.latitude_place),
                  longitude: parseFloat(lieu.longitude_place),
                }}
                title={lieu.nom_place}
                description={lieu.description_place}
                pinColor={lieu.color_place}
              >
                <Image
                  source={{
                    uri: "https://cdn-s-www.leprogres.fr/images/A90445F2-F0E7-4AA9-96E4-A4F57851E9F3/NW_raw/photo-mikhail-klimentyev-afp-1646580473.jpg",
                  }}
                  style={{ height: 35, width: 35 }}
                />
              </Marker>
            ))}
          <Marker
            onPress={() =>
              Alert.alert(
                "Latitude" + parseFloat(5.34758331),
                "Longitude" + parseFloat(4.0150043)
              )
            }
            coordinate={{
              latitude: 5.318513708824165,
              longitude: -4.104512872976062,
            }}
            title={"lieu.nom_place"}
            description={"lieu.description_place"}
            pinColor="chocolate"
          >
            <Image
              source={{
                uri: "https://cdn-s-www.leprogres.fr/images/A90445F2-F0E7-4AA9-96E4-A4F57851E9F3/NW_raw/photo-mikhail-klimentyev-afp-1646580473.jpg",
              }}
              style={{ height: 35, width: 35 }}
            />
          </Marker>
        </MapView>
        <FloatButton />
      </View>
    );
  }
}
