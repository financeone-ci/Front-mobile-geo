import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import { SearchBar } from "react-native-elements";
import colors from "../Couleur";

const RechercheBar = (props) => {
  //   const [search, setSearch] = useState("");

  //   const updateSearch = (search) => {
  //     setSearch(search);
  //   };

  return (
    <View style={styles.view}>
      <SearchBar
        placeholder="Recherche..."
        onChangeText={props.updateSearch}
        value={props.value}
        lightTheme="true"
        round="true"
        showCancel="true"
        showLoading="true"
        containerStyle={{
          backgroundColor: colors.color4,
          borderBottomColor: colors.color4,
          marginBottom: 5,
        }}
        inputContainerStyle={{ backgroundColor: "#f9f9f9" }}
      />
    </View>
  );
};

export default RechercheBar;

const styles = StyleSheet.create({});
