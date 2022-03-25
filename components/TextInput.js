import React from "react";
import { View, Text } from "react-native";
import { Input } from "react-native-elements";
import Style from "../Style";
import colors from "../Couleur";

export default function TextInput(props) {
  return (
    <>
      <Input
        name={props.name}
        label={props.label || ""}
        placeholder={props.placeholder}
        leftIcon={props.icon}
        type={props.type || "text"}
        secureTextEntry={props.secureTextEntry || false}
        errorStyle={{ color: "red" }}
        errorMessage={props.error || ""}
        labelStyle={{
          color: colors.color1,
          fontSize: 18,
        }}
        {...props}
        // inputStyle={{
        //   borderBottomColor: "#e75e56",
        // }}
      />
    </>
  );
}
