import React, { useEffect, useState } from "react";
import { Alert, View, SafeAreaView, StatusBar } from "react-native";
import { Text, Avatar } from "react-native-elements";
import ButtonValide from "../components/ButtonValide";
import TextInput from "../components/TextInput";
import { useNavigation, route, navigation } from "@react-navigation/native";
import colors from "../Couleur";
import Style from "../Style";
import { Formik, Field } from "formik";
import * as yup from "yup";
import { useMutation } from "react-query";
import Loader from "../components/Loader";
import Toast from "react-native-toast-message";
import axios from "../constantes/axios";
import asyncSetItem from "../functions/asyncSetItem";
import BarStatus from "../components/BarStatus";
import asyncClear from "../functions/asyncClear";

export default function Login(props) {
  const navigation = useNavigation();
  const styles = Style;

  const [initialValues, setInitialValues] = useState({
    user: "",
    password: "",
  });

  // Schema de validation du formulaire
  const schema = yup.object().shape({
    user: yup.string().required("Utilisateur obligatoire"),
    password: yup.string().required("Password obligatoire"),
  });

  // Recherche de l'utilisateur
  const fetchLogin = async (values) => {
    let response = "";
    response = await axios.post("user/UserLogin.php", { values });
    return response.data;
  };

  const login = useMutation(fetchLogin, {
    onSuccess: (data) => {
      if (data.reponse === "success") {
        // Enregistrer des données dans asyncstorage
        const info = [
          ["@storage_token", data.jeton],
          ["@storage_id", data.donnee.user],
        ];
        asyncClear().then(() => {
          asyncSetItem(info).then(() => {
            // Redirection vers accueil
            navigation.replace("Accueil", {
              userId: data.donnee.user,
              jeton: data.jeton,
            });
          });
        });
      }
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
        text1: "Connexion",
        text2: "Erreur de connexion",
        visibilityTime: 4000,
      });
    },
  });

  return (
    <View>
      <BarStatus />
      {login.isLoading || login.isSuccess ? (
        <Loader />
      ) : (
        <Formik
          validationSchema={schema}
          initialValues={initialValues}
          onSubmit={(values, onSubmitProps) => {
            login.mutate(values, {
              onSuccess: (data) => {
                data.reponse == "success" && onSubmitProps.resetForm();
              },
            });
          }}
        >
          {({
            handleChange,
            handleBlur,
            handleSubmit,
            values,
            errors,
            isValid,
            touched,
          }) => (
            <>
              {/* <StatusBar barStyle="" /> */}
              <SafeAreaView>
                <View style={styles.containerLogin}>
                  <Avatar
                    size={150}
                    rounded
                    source={require("../assets/image/logo.png")}
                  />
                  <Text style={styles.text}>Connexion</Text>
                  <TextInput
                    placeholder="Utilisateur"
                    name="user"
                    label="Utilisateur"
                    icon={{
                      type: "material",
                      name: "person",
                      color: colors.color1,
                      size: 30,
                    }}
                    error={(touched.user && errors.user) || ""}
                    value={values.user}
                    onChangeText={handleChange("user")}
                    onBlur={handleBlur("user")}
                  />
                  <TextInput
                    placeholder="Password"
                    name="password"
                    label="Password"
                    icon={{
                      type: "material",
                      name: "lock",
                      color: colors.color1,
                      size: 30,
                    }}
                    secureTextEntry={true}
                    error={(touched.password && errors.password) || ""}
                    value={values.password}
                    onChangeText={handleChange("password")}
                    onBlur={handleBlur("password")}
                  />
                  <View
                    style={{
                      flexDirection: "row",
                      justifyContent: "space-between",
                    }}
                  >
                    <ButtonValide
                      title={"Nouveau compte"}
                      type="clear"
                      titleStyle={{ color: colors.color1, fontSize: 17 }}
                      onPress={() => navigation.navigate("Register")}
                    />
                    <ButtonValide
                      title={"Connexion"}
                      icon={{
                        name: "arrow-right",
                        type: "font-awesome",
                        size: 20,
                        color: "white",
                        paddingLeft: 10,
                      }}
                      buttonStyle={{
                        backgroundColor: colors.color1,
                        borderRadius: 5,
                      }}
                      iconRight
                      onPress={handleSubmit}
                    />
                  </View>
                </View>
              </SafeAreaView>
            </>
          )}
        </Formik>
      )}
      <Toast />
    </View>
  );
}
