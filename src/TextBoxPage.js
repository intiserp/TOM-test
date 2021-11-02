import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Image,
  Text,
  Dimensions,
  TextInput,
  Button,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Header from "./Header";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

function TextBoxPage({ route, navigation }) {
  const [text, setText] = useState(value);
  const { fieldName, placeholder, value, setValue } = route.params;

  const backHandler = () => {
    setValue(text);
    navigation.goBack();
    return;
  };

  return (
    <SafeAreaView
      style={{ flex: 1, flexDirection: "column", justifyContent: "center" }}
    >
      <View style={{ flexDirection: "column", position: "absolute", top: 0 }}>
        <Image
          style={styles.greenBackground}
          source={require("../assets/IndividualStepAddition_Images/green_background.png")}
        />
      </View>
      <View style={{ position: "absolute", top: 10, left: 10 }}>
        <Header backHandler={backHandler} hasBack={true} />
      </View>

      <View
        style={{
          position: "relative",
          top: windowHeight * 0.37,
          flexDirection: "column",
        }}
      >
        <View style={styles.whiteBackground}>
          <Text
            style={{
              fontSize: 25,
              fontWeight: "bold",
              marginLeft: windowWidth / 5 + 20,
              marginTop: 20,
            }}
          >
            {fieldName}
          </Text>

          <View style={styles.thinBar}></View>

          <TextInput
            style={styles.textInputStyle}
            onChangeText={(text) => setText(text)}
            placeholder={placeholder}
            value={text}
          />
        </View>
      </View>
    </SafeAreaView>
  );
}

export default TextBoxPage;

const styles = StyleSheet.create({
  textInputStyle: {
    height: windowHeight * 0.4,
    margin: 20,
    borderWidth: 0.4,
    borderRadius: 10,
    padding: 10,
  },

  pageStyle: {
    flex: 1,
  },

  bottomStyle: {
    bottom: 0,
  },

  greenBackground: {
    width: windowWidth,
    height: windowHeight * 0.4,
  },

  whiteBackground: {
    width: windowWidth,
    height: windowHeight * 0.88,
    left: 0,
    top: -windowHeight * 0.275,
    backgroundColor: "white",
    borderTopLeftRadius: 60,
    borderTopRightRadius: 60,
    flexDirection: "column",
    // alignContent: "center",
    // justifyContent: "center",
  },

  thinBar: {
    backgroundColor: `rgba(112, 112, 112, 0.3)`,
    width: "88%",
    height: windowWidth * 0.0045,
    left: windowWidth * 0.055,
    marginTop: 15,
  },
});
