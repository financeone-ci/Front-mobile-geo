import React from "react";
import { StyleSheet } from "react-native";

export default StyleSheet.create({
  containerLogin: {
    backgroundColor: "rgb(255, 255, 255)",
    flex: 1,
    justifyContent: "center",
    flexDirection: "column",
    alignItems: "center",
  },
  containerRegister: {
    backgroundColor: "rgb(255, 255, 255)",
    flex: 1,
    justifyContent: "center",
    flexDirection: "column",
    alignItems: "center",
  },
  containerButtonAction: {
    justifyContent: "space-between",
    // color: "yellow",
    flex: 1,
    flexDirection: "column",

    // alignItems: "center",
  },
  text: {
    margin: 40,
    color: "#e75e56",
    fontSize: 22,
    fontWeight: "bold",
  },
  textinput: {
    margin: 12,
    backgroundColor: "#fff",
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
    flexGrow: 2,
    alignItems: "center",
  },
  menuBloc: {
    marginTop: 20,
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
    elevation: 20,
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
    color: "#e75e56",
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
