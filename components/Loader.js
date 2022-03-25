import { StyleSheet, View, ActivityIndicator } from "react-native";
import React from "react";
import colors from "../Couleur";

const Loader = () => {
  return (
    <View style={styles.container}>
      <ActivityIndicator size={80} color={colors.color1} />
    </View>
  );
};

export default Loader;

const styles = StyleSheet.create({
  container: {
    minWidth: "100%",
    minHeight: "100%",
    backgroundColor: colors.color4,
    justifyContent: "center",
    flexDirection: "column",
    alignItems: "center",
  },
});
