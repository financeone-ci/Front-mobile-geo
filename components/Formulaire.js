import React from "react";
import { View, Text } from "react-native";
import { Input } from "react-native-elements";
import Style from "../Style";

export default function TextInput(props) {
  return (
    <>
      <Input
        placeholder={props.placeholder}
        leftIcon={props.icon}
        type={props.type || "text"}
        secureTextEntry={props.secureTextEntry || false}
        inputStyle={{
          paddingLeft: 10,
        }}
      />
    </>
  );
}
