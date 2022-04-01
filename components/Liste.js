import {
  StyleSheet,
  View,
  Image,
  FlatList,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import { ListItem, Avatar, Icon } from "react-native-elements";
import colors from "../Couleur";
import { useNavigation } from "@react-navigation/native";

const Liste = (props) => {
  const navigation = useNavigation();
  return (
    <>
      <ListItem bottomDivider>
        <Avatar source={props.source} size={40} />
        <ListItem.Content>
          <ListItem.Title>{props.titre}</ListItem.Title>
          <ListItem.Subtitle>{props.soustitre}</ListItem.Subtitle>
        </ListItem.Content>
        <View style={{ flexDirection: "column", alignItems: "center" }}>
          <TouchableOpacity activeOpacity={0.6} onPress={props.onPress}>
            <Icon
              type="material"
              name={props.iconName}
              color={colors.color1}
              size={25}
            />
          </TouchableOpacity>
        </View>
      </ListItem>
    </>
  );
};
export default Liste;

const styles = StyleSheet.create({
  liste: {
    maxHeight: 150,
  },
});
