import React from "react";
import { StyleSheet, Text, View, Dimensions, Image } from "react-native";
import { Appbar } from "react-native-paper";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

/**
 * Display Header
 */
const Header = (props) => {
  return (
    <Appbar.Header style={styles.headerContainer}>
      {props.hasBack && <Appbar.BackAction onPress={props.backHandler} />}

      {props.hasCancel && (
        <Appbar.Action icon="close" onPress={props.cancelHandler} />
      )}
    </Appbar.Header>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    width: "100%",
    backgroundColor: "rgba(52, 52, 52, 0.0)", // the last paratmer is set to 0.0 for transpaerency
    justifyContent: "flex-start",
  },
});

export default Header;
