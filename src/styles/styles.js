import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    gap: 15,
  },

  titulo: {
    fontSize: 25,
    fontWeight: "bold",
    color: "white",
    bottom: 90,
  },

  subTitulo: {
    fontSize: 15,
    color: "white",
    fontStyle: "italic",
    textAlign: "center",
    bottom: 80,
  },

  btn: {
    backgroundColor: "#44704a",
    width: 280,
    height: 40,
    borderRadius: 30,
    top: 160,
    alignItems: 'center',
    justifyContent: 'center',
  },

  login: {
    color: "black",
    fontSize: 15,
  },

  containerSI: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    gap: 10,
  },

  tituloSI: {
    color: "rgb(130, 0, 0)",
    backgroundColor: "white",
    fontSize: 27,
    fontWeight: "bold",
    bottom: 100,
  },

  subTituloSI: {
    color: "rgb(130, 0, 0)",
    backgroundColor: "white",
    fontSize: 20,
    fontStyle: "italic",
    bottom: 100,
  },

  campo: {
    gap: 15,
  },

  input: {
    backgroundColor: "rgba(221, 221, 221, 0.64)",
    width: 300,
    height: 40,
    borderRadius: 30,
    bottom: 40,
  },

  btnSI: {
    backgroundColor: "rgb(130, 0, 0)",
    width: 280,
    height: 40,
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },

  cadastroSI: {
    color: "white",
    fontStyle: "italic",
  },

  div: {
    flexDirection: "row",
    color: "white",
    top: 160,
  },

  details: {
    color: "white",

  },

  details_singUP: {
    bottom: 40,
    color: "white"
  },

  resetBTN: {
    backgroundColor: "gray",
    width: 280,
    height: 40,
    borderRadius: 30,
    top: 100,
    alignItems: 'center',
    justifyContent: 'center',
  },

  galleryBTN: {
    backgroundColor: "gray",
    width: 280,
    height: 40,
    borderRadius: 30,
    top: 100,
    alignItems: 'center',
    justifyContent: 'center',
  }

});
