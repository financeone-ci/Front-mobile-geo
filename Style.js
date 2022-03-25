import React from "react";
import { StyleSheet } from "react-native";
import colors from "./Couleur";

export default StyleSheet.create({
  container: {
    backgroundColor: colors.color4,
    flex: 1,
  },
  containerLogin: {
    backgroundColor: colors.color4,
    justifyContent: "center",
    flexDirection: "column",
    alignItems: "center",
    minHeight: "100%",
    minWidth: "100%",
  },
  containerAccueil: {
    backgroundColor: colors.color4,
    flex: 1,
    justifyContent: "center",
    flexWrap: "wrap",
    flexDirection: "row",
    alignItems: "flex-start",
  },
  containerRegister: {
    minHeight: "100%",
    minWidth: "100%",
    paddingTop: 40,
    backgroundColor: colors.color4,
    // flex: 1,
    justifyContent: "center",
    flexDirection: "column",
    alignItems: "center",
  },

  containerButtonAction: {
    justifyContent: "space-between",
    flex: 1,
    flexDirection: "column",
  },
  text: {
    margin: 25,
    color: colors.color2,
    fontSize: 25,
    fontWeight: "bold",
  },
  textUser: {
    marginTop: 10,
    color: colors.color4,
  },
  textUserInfo: {
    color: colors.color4,
  },
  textInfoTitle: {
    color: colors.color1,
    fontSize: 20,
    fontWeight: "bold",
  },
  textInfo: {
    color: colors.color2,
    fontSize: 17,
    marginBottom: 10,
  },
  textinput: {
    margin: 12,
    backgroundColor: colors.color4,
    width: 340,
    height: 30,
    //  borderRadius: 10,
    padding: 10,
  },
  row1: {
    minWidth: "100%",
    maxWidth: "100%",
    flexGrow: 2,
    alignItems: "center",
  },
  row2: {
    minWidth: "50%",
    maxWidth: "50%",
    flexGrow: 1,
    alignItems: "center",
  },
  menuBloc: {
    marginTop: 15,
    width: "90%",
    padding: 10,
    height: 150,
    borderColor: "black",
    borderStyle: "solid",
    borderRadius: 10,
    shadowColor: "black",
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.51,
    shadowRadius: 25,
    elevation: 3,
  },
  menuBlocList: {
    marginTop: 10,
    width: "90%",
    padding: 10,
    height: 90,
    borderColor: "black",
    borderStyle: "solid",
    borderRadius: 10,
    shadowColor: "black",
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.51,
    shadowRadius: 25,
    elevation: 20,
    justifyContent: "center",
  },
  menuLogo: {
    justifyContent: "center",
    margin: "auto",
    flex: 1,
    alignItems: "center",
  },
  button: {
    margin: 25,
    borderRadius: 100,
    width: 250,
  },
  buttonText: {
    margin: 25,
    borderRadius: 100,
    width: 250,
    color: colors.color1,
  },
  scrollView: {
    width: "100%",
    marginHorizontal: 2,
  },
  appbar: {
    height: 2,
    width: "100%",
  },
});
