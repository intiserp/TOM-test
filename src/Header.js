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
    // bg color should be white with full transparent
    backgroundColor: `rgba(255,255,255,0)`,
    justifyContent: "flex-start",
  },
});

export default Header;
