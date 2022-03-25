import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Avatar, Icon } from "react-native-elements";
import colors from "../Couleur";
import { useNavigation } from "@react-navigation/native";

const LoadingPage = () => {
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
