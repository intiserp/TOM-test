import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Image,
  Text,
  Dimensions,
  TextInput,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useEffect } from "react/cjs/react.development";
import Header from "./Header";
import { useSteps } from "./StepsContext";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

function TextBoxPageNew({ route, navigation }) {
  const { updateStep, getStep } = useSteps();
  const { id } = route.params;
  const [currentStep, setCurrentStep] = useState(getStep(id));

  const backHandler = () => {
    updateStep(id, currentStep);
    navigation.goBack();
    return;
  };

  return (
    <SafeAreaView style={{ flex: 1, flexDirection: "column" }}>
      <View style={{ position: "absolute", top: 10, left: 10 }}>
        <Header backHandler={backHandler} hasBack={true} />
      </View>
      <View>
        <Text
          style={{
            textAlign: "center",
            fontSize: 25,
            fontWeight: "bold",
          }}
        >
          Step Details
        </Text>

        <View style={styles.thinBar}></View>
      </View>
      <View>
        <TextInput
          style={{
            fontSize: 22,
            marginTop: 20,
            marginBottom: 20,
            textAlign: "center",
            fontWeight: "bold",
          }}
          placeholder="Enter step name"
          onChangeText={(text) =>
            setCurrentStep({ ...currentStep, name: text })
          }
          value={currentStep.name}
        />

        <TextInput
          style={styles.textInputStyle}
          multiline={true}
          placeholder="Enter step description"
          onChangeText={(text) =>
            setCurrentStep({ ...currentStep, description: text })
          }
          value={currentStep.description}
        />
      </View>
    </SafeAreaView>
  );
}

export default TextBoxPageNew;

const styles = StyleSheet.create({
  textInputStyle: {
    fontSize: 18,
    marginTop: 20,
    marginBottom: 20,
    marginLeft: 20,
    marginRight: 20,
    height: windowHeight * 0.3,
    borderColor: "grey",
    borderWidth: 1,
    borderRadius: 10,
    padding: 15,
    paddingTop: 10,
    paddingBottom: 10,
  },

  pageStyle: {
    flex: 1,
  },

  bottomStyle: {
    bottom: 0,
  },

  thinBar: {
    backgroundColor: "#f15d31",
    width: "88%",
    height: windowWidth * 0.0045,
    left: windowWidth * 0.055,
    marginTop: 15,
  },
});
