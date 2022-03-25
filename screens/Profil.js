import React, { useEffect } from "react";
import { View, TouchableOpacity, StyleSheet } from "react-native";
import Style from "../Style";
import colors from "../Couleur";
import { Text, Avatar, Icon } from "react-native-elements";
import { useNavigation } from "@react-navigation/native";
import BarStatus from "../components/BarStatus";

function Profil(props) {
  const navigation = useNavigation();
  const style = Style;

  return (
    <>
      <View style={styleProfil.containerProfil}>
        <View style={styleProfil.headerProfil}>
          <Avatar
            size={100}
            rounded
            source={require("../assets/image/profil.jpg")}
          />
          <Text h4 style={style.textUser}>
            Nom & Prénoms
          </Text>
          <Text h5 style={style.textUserInfo}>
            Poste
          </Text>
          <Text h6 style={style.textUserInfo}>
            Contact
          </Text>
          <View style={{ alignSelf: "flex-end" }}>
            <TouchableOpacity
              activeOpacity={0.6}
              onPress={() => navigation.navigate("Register")}
            >
              <Icon reverse name="edit" type="material" color={colors.color1} />
            </TouchableOpacity>
          </View>
        </View>
        <View style={styleProfil.BodyProfil}>
          <Text style={style.textInfoTitle}>Utilisateur</Text>
          <Text style={style.textInfo}>Utilisateur</Text>
          <Text style={style.textInfoTitle}>Email</Text>
          <Text style={style.textInfo}>Email</Text>
        </View>
      </View>
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
