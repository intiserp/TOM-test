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

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;
var randomWords = require("random-words");

const ProjectDocumentation = ({ navigation }) => {
  let emptyStep = {
    id: Date.now(),
    instructions: "",
    order: 1,
  };
  const [name, setName] = useState("");
  const [purpose, setPurpose] = useState("");
  const [description, setDescription] = useState("");
  const [history, setHistory] = useState("");
  const [feedback, setFeedback] = useState("");
  const [steps, setSteps] = useState([]);

  // adding new steps -- this works
  const individualStepAddition = () => {
    emptyStep.order = steps.length + 1;
    emptyStep.id = Date.now();
    emptyStep.instructions = randomWords({ exactly: 2, join: " " });
    setSteps([...steps, emptyStep]);
  };

  // removing steps -- this works
  const individualStepRemoval = (id) => {
    const currentOrder = steps.find((step) => step.id === id).order;
    let newSteps = steps.map((step) => {
      if (step.order > currentOrder) {
        step.order--;
      }
      return step;
    });
    newSteps = newSteps.filter((step) => step.id !== id);
    setSteps(newSteps);
  };

  // incrementing the order of the steps
  const incrementOrder = (id) => {
    const currentOrder = steps.find((step) => step.id === id).order;
    const newOrder = currentOrder + 1;
    if (newOrder > steps.length) {
      return;
    }
    const newSteps = steps.map((step) => {
      if (step.id === id) {
        return { ...step, order: newOrder };
      } else if (step.order === newOrder) {
        return { ...step, order: currentOrder };
      } else {
        return step;
      }
    });
    setSteps(newSteps);
  };

  // decrementing the order of the steps
  const decrementOrder = (id) => {
    // switch the order of the steps
    const currentOrder = steps.find((step) => step.id === id).order;
    const newOrder = currentOrder - 1;
    if (newOrder < 1) {
      return;
    }
    const newSteps = steps.map((step) => {
      if (step.id === id) {
        return { ...step, order: newOrder };
      } else if (step.order === newOrder) {
        return { ...step, order: currentOrder };
      } else {
        return step;
      }
    });
    setSteps(newSteps);
  };

  return (
    <SafeAreaView style={{ flex: 1, flexDirection: "column" }}>
      <View style={{ top: 15 }}>
        <TextInput
          placeholder="Project Name"
          style={styles.projectName}
          onChangeText={(text) => setName(text)}
          value={name}
        />
      </View>
      <View style={{ top: 25, bottom: 25 }}>
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
        <View style={{ marginBottom: 17 }}>
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
        <View style={{ marginBottom: 17 }}>
          <View style={styles.thinBar}></View>
        </View>
      </View>

      <Text
        style={{
          left: windowWidth * 0.07,
          fontSize: 18,
          color: "black",
          fontWeight: "bold",
          marginTop: 40,
        }}
      >
        Instructions
      </Text>
      <View
        style={{
          position: "absolute",
          bottom: 80,
          right: 60,
          border: "25%",
          color: "blue",
          zIndex: 1,
        }}
      >
        <TouchableOpacity
          style={styles.plusBox}
          onPress={individualStepAddition}
        >
          <View
            style={{
              borderRadius: 50,
              backgroundColor: "#f15d31",
              width: 50,
              height: 50,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Image
              style={styles.plus}
              source={require("../assets/projects-11/plus.png")}
            />
          </View>
        </TouchableOpacity>
      </View>

      <View>
        <FlatList
          scrollsToTop={true}
          data={steps.sort((a, b) => a.order - b.order)}
          contentContainerStyle={{
            marginTop: 5,
            paddingBottom: 5,
          }}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => {
            return (
              // make a nice box for each step
              <View
                style={{
                  flexDirection: "row",
                  marginTop: 10,
                  marginBottom: 10,
                }}
              >
                <View
                  style={{
                    flex: 1,
                    marginLeft: 20,
                    marginRight: 20,
                    borderWidth: 1,
                    borderColor: "#C0C0C0",
                    borderRadius: 10,
                  }}
                >
                  <Text style={{ fontSize: 17, color: "black", padding: 10 }}>
                    Step {item.order}: {item.instructions}
                  </Text>
                  <TouchableOpacity
                    style={{ position: "absolute", right: 10, top: 10 }}
                    onPress={() => individualStepRemoval(item.id)}
                  >
                    <Image
                      style={styles.plus}
                      source={require("../assets/projects-11/delete.png")}
                    />
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={{ position: "absolute", right: 90, top: 10 }}
                    onPress={() => decrementOrder(item.id)}
                  >
                    <Image
                      style={styles.plus}
                      source={require("../assets/projects-11/arrow-up.png")}
                    />
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={{ position: "absolute", right: 50, top: 10 }}
                    onPress={() => incrementOrder(item.id)}
                  >
                    <Image
                      style={styles.plus}
                      source={require("../assets/projects-11/arrow-down.png")}
                    />
                  </TouchableOpacity>
                </View>
              </View>
            );
          }}
        />
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
    fontSize: 17,
    padding: 2.5,
    width: windowWidth * 0.86,
  },
  projectName: {
    left: windowWidth * 0.07,
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
    // left: 0,
    top: -windowHeight * 0.03,
    // position: "relative",
    // flexDirection: "row",
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
    // width: windowWidth * 0.044,
    // left: windowWidth * 0.896,
    position: "relative",
    right: 0,
    bottom: 0,
  },

  plus: {
    width: windowWidth * 0.044,
    height: windowHeight * 0.021,
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
    height: 1,
    left: windowWidth * 0.055,
    top: 5,
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
