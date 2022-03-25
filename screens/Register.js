import React, { useState, useEffect } from "react";
import { Text, Avatar } from "react-native-elements";
import ButtonValide from "../components/ButtonValide";
import TextInput from "../components/TextInput";
import { useNavigation } from "@react-navigation/native";
import Style from "../Style";
import { ScrollView, View, SafeAreaView } from "react-native";
import { Formik, Field } from "formik";
import * as yup from "yup";
import axios from "../constantes/axios";
import { useMutation } from "react-query";
import colors from "../Couleur";
import Loader from "../components/Loader";
import Toast from "react-native-toast-message";
import BarStatus from "../components/BarStatus";

export default function Login(props) {
  const navigation = useNavigation();
  const style = Style;

  const [initialValues, setInitialValues] = useState({
    user: "",
    nom: "",
    mobile: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  // Schema de validation du formulaire
  const schema = yup.object().shape({
    user: yup.string().required("Utilisateur obligatoire"),
    nom: yup.string().required("Nom et prénom obligatoire"),
    poste: yup.string().required("Poste obligatoire"),
    mobile: yup.number("N° mobile invalide").required("N° mobile obligatoire"),
    email: yup.string().email("Email invalide").required("Email obligatoire"),
    password: yup
      .string()
      .min(4, "4 caractères minimum")
      .required("Password obligatoire"),
    confirmPassword: yup
      .string()
      .oneOf([yup.ref("password"), null], "Password différent")
      .required("Confirmation obligatoire"),
  });

  const submitUser = async (values) => {
    let response = "";
    // const headers = {
    //   Authorization: cookieInfo,
    // };

    response = await axios.post(
      "user/UserRegister.php",
      { values }
      // { headers }
    );
    // else {
    //   // Modification societe
    //   response = await axios.post(
    //     `comptes/UpdateCompte.php?id=${values.id}`,
    //     { values },
    //     { headers }
    //   );
    // }
    return response.data;
  };

  // Création d'un nouvel utilisateur
  const user = useMutation(submitUser, {
    onSuccess: (data) => {
      data.reponse === "success" && navigation.replace("Login");
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

  return (
    <View>
      {user.isLoading ? (
        <Loader />
      ) : (
        <ScrollView overScrollMode="never">
          <Formik
            validationSchema={schema}
            initialValues={initialValues}
            onSubmit={(values, onSubmitProps) => {
              user.mutate(values, {
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
                <BarStatus />
                <SafeAreaView>
                  <View style={style.containerRegister}>
                    <Avatar
                      size={150}
                      rounded
                      source={require("../assets/image/logo.png")}
                    />
                    <Text style={style.text}>Nouveau compte</Text>
                    <TextInput
                      placeholder="Utilisateur"
                      name="user"
                      label="Utilisateur"
                      error={(touched.user && errors.user) || ""}
                      value={values.user}
                      onChangeText={handleChange("user")}
                      onBlur={handleBlur("user")}
                    />
                    <TextInput
                      placeholder="Nom Prénoms"
                      name="nom"
                      label="Nom Prénoms"
                      error={(touched.nom && errors.nom) || ""}
                      value={values.nom}
                      onChangeText={handleChange("nom")}
                      onBlur={handleBlur("nom")}
                    />
                    <TextInput
                      placeholder="Poste"
                      name="poste"
                      label="Poste"
                      error={(touched.poste && errors.poste) || ""}
                      value={values.poste}
                      onChangeText={handleChange("poste")}
                      onBlur={handleBlur("poste")}
                    />
                    <TextInput
                      placeholder="Tél. mobile"
                      name="mobile"
                      label="Mobile"
                      icon={{
                        type: "material",
                        name: "phone",
                        color: colors.color1,
                        size: 30,
                      }}
                      keyboardType="numeric"
                      error={(touched.mobile && errors.mobile) || ""}
                      value={values.mobile}
                      onChangeText={handleChange("mobile")}
                      onBlur={handleBlur("mobile")}
                    />
                    <TextInput
                      placeholder="Adresse mail"
                      name="email"
                      label="Email"
                      icon={{
                        type: "material",
                        name: "alternate-email",
                        color: colors.color1,
                        size: 30,
                      }}
                      keyboardType="email-address"
                      error={(touched.email && errors.email) || ""}
                      value={values.email}
                      onChangeText={handleChange("email")}
                      onBlur={handleBlur("email")}
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
                      type="text"
                      secureTextEntry={true}
                      error={(touched.password && errors.password) || ""}
                      value={values.password}
                      onChangeText={handleChange("password")}
                      onBlur={handleBlur("password")}
                    />
                    <TextInput
                      placeholder="Confirmer password"
                      name="confirmPassword"
                      label="Confirmer password"
                      icon={{
                        type: "material",
                        name: "lock",
                        color: colors.color1,
                        size: 30,
                      }}
                      type="text"
                      secureTextEntry={true}
                      error={
                        (touched.confirmPassword && errors.confirmPassword) ||
                        ""
                      }
                      value={values.confirmPassword}
                      onChangeText={handleChange("confirmPassword")}
                      onBlur={handleBlur("confirmPassword")}
                    />
                    <View
                      style={{
                        flexDirection: "row",
                        justifyContent: "space-between",
                      }}
                    >
                      <ButtonValide
                        title={"Connexion"}
                        type="clear"
                        titleStyle={{ color: colors.color1, fontSize: 17 }}
                        onPress={() => navigation.replace("Login")}
                      />
                      <ButtonValide
                        title={"Enregistrer"}
                        icon={{
                          name: "check",
                          type: "font-awesome",
                          size: 20,
                          color: "white",
                          paddingLeft: 10,
                        }}
                        iconRight
                        buttonStyle={{
                          backgroundColor: colors.color1,
                          borderRadius: 5,
                        }}
                        onPress={handleSubmit}
                      />
                    </View>
                  </View>
                </SafeAreaView>
              </>
            )}
          </Formik>
        </ScrollView>
      )}
      <Toast />
    </View>
  );
}
