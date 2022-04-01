import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import { useMutation, useQuery } from "react-query";
import { Dropdown } from "react-native-element-dropdown";
import axios from "../constantes/axios";
import colors from "../Couleur";

const DataCombo = (props) => {
  const [value, setValue] = useState(null);
  const [isFocus, setIsFocus] = useState(false);

  // Récupération du paramètre temps de rechargement
  useEffect(() => {
    const LoadData = async () => {
      const headers = {
        authorization: props.jeton,
      };
      const response = await axios(props.http, {
        headers,
      });
      const postData = response.data.data[0].relaod_time;
      setValue(postData);
    };
    LoadData();
  }, []);

  // Mise à jour des paramètres
  const updateReload = async (params) => {
    const headers = {
      authorization: props.jeton,
    };
    const response = await axios(
      `param/UpdateParams.php?param=${params.type}&time=${params.time}`,
      {
        headers,
      }
    );
    return response.data;
  };

  // Création d'un nouvel utilisateur
  const param = useMutation(updateReload, {
    onSuccess: (data) => {
      data.reponse === "error" &&
        Toast.show({
          type: data.reponse,
          text1: data.titre,
          text2: data.message,
          visibilityTime: 4000,
        });
    },
    onError: () => {
      Toast.show({
        type: "error",
        text1: "Nouveau compte",
        text2: "Erreur de connexion",
        visibilityTime: 4000,
      });
    },
  });

  const renderLabel = () => {
    if (value || isFocus) {
      return (
        <Text
          style={[
            styles.label,
            isFocus
              ? { color: colors.color1, fontWeight: "bold" }
              : { color: colors.color1, fontWeight: "bold" },
          ]}
        >
          {props.title}
        </Text>
      );
    }
    return null;
  };

  return (
    <View style={styles.container}>
      {renderLabel()}
      <Dropdown
        style={[styles.dropdown, isFocus && { borderColor: colors.color1 }]}
        placeholderStyle={styles.placeholderStyle}
        selectedTextStyle={styles.selectedTextStyle}
        inputSearchStyle={styles.inputSearchStyle}
        iconStyle={styles.iconStyle}
        data={props.data}
        search
        maxHeight={300}
        labelField="label"
        valueField="value"
        placeholder={!isFocus ? "Sélectionner" : "..."}
        searchPlaceholder="Recherche..."
        value={value}
        onFocus={() => setIsFocus(true)}
        onBlur={() => setIsFocus(false)}
        onChange={(item) => {
          setValue(item.value);
          setIsFocus(false);
          param.mutate({ time: item.value, type: "reload" });
        }}
      />
    </View>
  );
};

export default DataCombo;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    padding: 16,
  },
  dropdown: {
    height: 50,
    borderColor: "gray",
    borderWidth: 0.5,
    borderRadius: 8,
    paddingHorizontal: 8,
  },
  icon: {
    marginRight: 5,
  },
  label: {
    position: "absolute",
    backgroundColor: "white",
    left: 22,
    top: 8,
    zIndex: 999,
    paddingHorizontal: 8,
    fontSize: 15,
  },
  placeholderStyle: {
    fontSize: 16,
  },
  selectedTextStyle: {
    fontSize: 16,
  },
  iconStyle: {
    width: 20,
    height: 20,
  },
  inputSearchStyle: {
    height: 40,
    fontSize: 16,
  },
});
