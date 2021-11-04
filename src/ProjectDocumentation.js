import React, { useState, useEffect, useCallback } from "react";
import { SafeAreaView, Touchable } from "react-native";
import {
  StyleSheet,
  View,
  Image,
  Text,
  Dimensions,
  TouchableOpacity,
  TextInput,
  FlatList,
  Button,
} from "react-native";
import { ScrollView } from "react-native-gesture-handler";

import DraggableFlatList, {
  RenderItemParams,
} from "react-native-draggable-flatlist";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const ProjectDocumentation = ({ navigation }) => {
  const [name, setName] = useState("");
  const [purpose, setPurpose] = useState("");
  const [description, setDescription] = useState("");
  const [history, setHistory] = useState("");
  const [feedback, setFeedback] = useState("");
  const [steps, setSteps] = useState([]);
  const [billOfMaterials, setBillOfMaterials] = useState([]);
  const [indStep, setIndStep] = useState("");

  // adding NEW STEPS!
  const individualStepAddition = () => {
    console.log("new step");
    setSteps(
      steps.concat(
        <View style={{ flexDirection: "row" }}>
          {/* <View
            style={{
              backgroundColor: "black",
              width: 400,
              height: 40,
              top: -windowHeight * 0.18,
              left: 15,
              fontSize: 20,
            }}
          ></View> */}

          {/* 'DRAG' must be pressed to move around the step */}

          <Text style={{ top: -windowHeight * 0.18, left: 15, fontSize: 17 }}>
            DRAG
          </Text>
          <TouchableOpacity
            onPress={navigate.navigate("IndividualStepAddition")}
          >
            <Text>Step haha</Text>
          </TouchableOpacity >
        </View>
      )
    );
    return;
  };

  // rendering each step and making them touchable
  // already tried using useCallback
  const renderItem = ({ item, index, drag, isActive }) => {
    // onLongPress={drag}
    return (
      <TouchableOpacity onPressIn={drag} style={{ marginTop: 10 }}>
        {item}
      </TouchableOpacity>
    );
  };

  return (
    <SafeAreaView
      style={{ flex: 1, flexDirection: "column", justifyContent: "center" }}
    >
      <View style={{ flexDirection: "column", top: -5 }}>
        <Image
          style={styles.greenBackground}
          source={require("../assets/IndividualStepAddition_Images/green_background.png")}
        />
      </View>

      <View style={{ flexDirection: "column" }}>
        <Image
          style={styles.logo}
          source={require("../assets/IndividualStepAddition_Images/tomlogo.png")}
        />
      </View>

      <View style={{ flexDirection: "column" }}>
        <View style={styles.whiteBackground} />
      </View>

      <View style={styles.projectNameAndEtc}>
        <TextInput
          placeholder="Project Name"
          style={styles.projectName}
          onChangeText={(text) => setName(text)}
          value={name}
        />

        <TouchableOpacity
          style={styles.purposeInput}
          onPress={() =>
            navigation.navigate("TextBoxPage", {
              fieldName: "Purpose of the device",
              placeholder: "Explain the purpose of the device here",
              value: purpose,
              setValue: setPurpose,
            })
          }
        >
          <Text style={{ fontSize: 17, color: "#C0C0C0" }}>
            Purpose of Device
          </Text>
        </TouchableOpacity>
        <View style={{ top: -windowHeight * 0.16, marginBottom: 17 }}>
          <View style={styles.thinBar}></View>
        </View>

        <TouchableOpacity
          style={styles.purposeInput}
          onPress={() =>
            navigation.navigate("TextBoxPage", {
              fieldName: "Physical Description",
              placeholder:
                "Explain the physical description of the device here",
              value: description,
              setValue: setDescription,
            })
          }
        >
          <Text style={{ fontSize: 17, color: "#C0C0C0" }}>
            Physical Description
          </Text>
        </TouchableOpacity>
        <View style={{ top: -windowHeight * 0.16, marginBottom: 17 }}>
          <View style={styles.thinBar}></View>
        </View>

        <TouchableOpacity
          style={styles.purposeInput}
          onPress={() =>
            navigation.navigate("TextBoxPage", {
              fieldName: "History of Development",
              placeholder: "Enter the history of development here",
              value: history,
              setValue: setHistory,
            })
          }
        >
          <Text style={{ fontSize: 17, color: "#C0C0C0" }}>
            History Of Development
          </Text>
        </TouchableOpacity>
        <View style={{ top: -windowHeight * 0.16, marginBottom: 17 }}>
          <View style={styles.thinBar}></View>
        </View>

        <TouchableOpacity
          style={styles.purposeInput}
          onPress={() =>
            navigation.navigate("TextBoxPage", {
              fieldName: "User Feedback",
              placeholder: "Enter the user feedback here",
              value: feedback,
              setValue: setFeedback,
            })
          }
        >
          <Text style={{ fontSize: 17, color: "#C0C0C0" }}>User Feedback</Text>
        </TouchableOpacity>
        <View style={{ top: -windowHeight * 0.16, marginBottom: 17 }}>
          <View style={styles.thinBar}></View>
        </View>

        <TouchableOpacity
          style={styles.addMaterialsBox}
          onPress={() => {
            navigation.navigate("Materials");
          }}
        >
          <Image
            style={styles.addMaterials}
            source={require("../assets/projects-11/addmaterials.png")}
          />
        </TouchableOpacity>

        <Text
          style={{
            left: windowWidth * 0.07,
            top: -windowHeight * 0.125,
            fontSize: 18,
            color: "black",
            fontWeight: "bold",
          }}
        >
          Instructions
        </Text>

        <TouchableOpacity
          style={styles.plusBox}
          onPress={individualStepAddition}
        >
          <Image
            style={styles.plus}
            source={require("../assets/projects-11/plus.png")}
          />
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.purposeInput}
          onPress={() =>
            navigation.navigate("TextBoxPage", {
              fieldName: "Individual Step Addition",
              placeholder: "Add Step",
              value: indStep,
              setValue: setIndStep,
            })
          }
        >
          <Text style={{ fontSize: 17, color: "#C0C0C0" }}>Individual Step Addition</Text>
        </TouchableOpacity>
        <View style={{ top: -windowHeight * 0.16, marginBottom: 17 }}>
          <View style={styles.thinBar}></View>
        </View>

        <View
          style={{
            // left: windowWidth * 0.07,
            top: -windowHeight * 0.14,
            width: windowWidth,
            height: windowHeight * 0.3,
          }}
        >
          <View style={{ flex: 1 }}>
            {/* <FlatList
                scrollsToTop={true}
                data={steps}
                contentContainerStyle={{ marginTop: 170, paddingBottom: 10 }}
                renderItem={({ item }) => {
                  return <View style={{ marginTop: 10 }}>{item}</View>;
                }}
              /> */}
            {/* Draggable flat list here  */}
            <DraggableFlatList
              scrollsToTop={true}
              contentContainerStyle={{ marginTop: 170, paddingBottom: 10 }}
              data={steps}
              renderItem={renderItem}
              keyExtractor={(item, index) => index.toString()}
              // this is where the steps array is updated....
              onDragEnd={({ steps }) => setSteps(steps)}
            />
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default ProjectDocumentation;

const styles = StyleSheet.create({
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },

  purposeInput: {
    left: windowWidth * 0.07,
    top: -windowHeight * 0.17,
    fontSize: 17,
    padding: 2.5,
    width: windowWidth * 0.86,
  },
  projectName: {
    left: windowWidth * 0.07,
    top: -windowHeight * 0.19,
    width: windowWidth * 0.86,
    fontSize: 24,
    color: "black",
    fontWeight: "bold",
  },
  addToolsBox: {
    width: windowWidth * 0.044,
    height: windowHeight * 0.021,
    top: -windowHeight * 0.15,
    left: windowWidth * 0.896,
  },

  addTools: {
    height: windowHeight * 0.02,
    width: windowWidth * 0.86,
    left: -windowWidth * 0.826,
  },

  addPictureBox: {
    width: windowWidth * 0.25,
    height: windowHeight * 0.125,
    left: windowWidth * 0.38,
    top: -windowHeight * 0.35,
  },

  addMaterialsBox: {
    width: windowWidth * 0.044,
    height: windowHeight * 0.021,
    top: -windowHeight * 0.14,
    left: windowWidth * 0.896,
  },

  addMaterials: {
    height: windowHeight * 0.02,
    width: windowWidth * 0.86,
    left: -windowWidth * 0.826,
  },

  greenBackground: {
    width: windowWidth,
    height: windowHeight * 0.5,
    left: 0,
    top: -windowHeight * 0.03,
    position: "relative",
    flexDirection: "row",
  },

  logo: {
    width: windowWidth * 0.18,
    height: windowHeight * 0.04,
    left: windowWidth * 0.412,
    top: -windowHeight * 0.45,
    position: "relative",
    flexDirection: "row",
  },

  pencil: {
    width: windowWidth * 0.041,
    height: windowHeight * 0.02,
    left: windowWidth * 0.895,
    top: -windowHeight * 0.2145,
    position: "relative",
    flexDirection: "row",
  },

  plusBox: {
    width: windowWidth * 0.044,
    height: windowHeight * 0.021,
    left: windowWidth * 0.896,
    top: -windowHeight * 0.145,
  },

  plus: {
    width: windowWidth * 0.044,
    height: windowHeight * 0.021,
  },

  projectNameAndEtc: {
    left: 0,
    top: -windowHeight * 0.17,
    height: windowHeight * 0.27,
  },

  stepName: {
    width: "88%",
    height: "30%",
    left: windowWidth * 0.05,
    top: -windowHeight * 0.128,
  },

  thinBar: {
    backgroundColor: `rgba(112, 112, 112, 0.3)`,
    width: "88%",
    height: windowWidth * 0.0045,
    left: windowWidth * 0.055,
    // marginTop: 25,
  },

  thinBar2: {
    backgroundColor: `rgba(112, 112, 112, 0.3)`,
    width: "88%",
    height: windowWidth * 0.0045,
    left: windowWidth * 0.07,
    top: -windowHeight * 0.21,
  },

  uploadImage: {
    width: windowWidth * 0.25,
    height: windowHeight * 0.125,

    position: "relative",
    flexDirection: "row",
  },

  whiteBackground: {
    width: windowWidth,
    height: windowHeight * 0.78,
    left: 0,
    top: -windowHeight * 0.4,
    position: "absolute",
    flexDirection: "row",
    backgroundColor: "white",
    borderTopLeftRadius: 60,
    borderTopRightRadius: 60,
  },

  saveProject: {
    width: windowWidth * 0.37,
    height: windowHeight * 0.043,
    backgroundColor: "#f15d31",
    borderRadius: 25,
    left: windowWidth * 0.32,
    top: windowHeight * 0.08,
    alignItems: "center",
    justifyContent: "center",
  },

  stepDescription: {
    left: windowWidth * 0.07,
    top: -windowHeight * 0.19,
    width: windowWidth * 0.86,
    fontSize: 18,
    color: "black",
    borderColor: "#DBDBDB",
    borderWidth: 1,
    borderRadius: 10,
    padding: 10,
  },
});
