import { StyleSheet, Text } from "react-native";
import React from "react";
import { Dialog } from "react-native-elements";

const AlertModal = (props) => {
  return (
    <>
      <Dialog
        isVisible={props.visible}
        onBackdropPress={props.toggleDialog}
        overlayStyle={{ alignItems: "center", justifyContent: "center" }}
      >
        <Dialog.Title title={props.titre} />
        <Text>{props.text}</Text>
        <Dialog.Actions>{props.children}</Dialog.Actions>
      </Dialog>
    </>
  );
};

export default AlertModal;

const styles = StyleSheet.create({});
