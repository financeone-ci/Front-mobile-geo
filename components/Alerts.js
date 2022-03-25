import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Toast from "react-native-toast-message";

const Alerts = (props) => {
  const showToast = () => {
    Toast.show({
      type: props.typa,
      text1: props.titre,
      text2: props.message,
    });
  };
  return <>{showToast()}</>;
};

export default Alerts;
