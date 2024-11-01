import React from "react";
import { Image, StyleSheet } from "react-native";

export default function Logo() {
  return (
    <Image
      source={require("../../assets/items/pawnplaces_logo.svg")}
      style={styles.image}
    />
  );
}

const styles = StyleSheet.create({
  image: {
    width: 200,
    height: 220,
    alignSelf: 'center',
    marginBottom: 8,
  },
});
