import { StyleSheet, View } from "react-native";
import React, { useState } from "react";
import colors from "../Couleur";
import { SCLAlert, SCLAlertButton } from "react-native-scl-alert";

const Pop = (props) => {
  return (
    <View style={styles.container}>
      <SCLAlert
        theme={props.type}
        show={props.show}
        title={props.titre}
        subtitle={props.soustitre}
      >
        <SCLAlertButton theme={props.type} onPress={props.handleClose}>
          {props.boutton}
        </SCLAlertButton>
      </SCLAlert>
    </View>
  );
};

export default Pop;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
