import { StyleSheet, Text, View, StatusBar } from "react-native";
import React from "react";
import colors from "../Couleur";

const BarStatus = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" backgroundColor={colors.color4} />
    </>
  );
};

export default BarStatus;
