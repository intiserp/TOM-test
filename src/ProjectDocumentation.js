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
import { useSteps } from "./StepsContext";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const ProjectDocumentation = ({ navigation }) => {
  const { addStep, getSteps, setAllSteps } = useSteps();
  let emptyStep = {
    id: Date.now(),
    order: 1,
    name: "",
    instructions: "",
  };
  const [name, setName] = useState("");
  const [purpose, setPurpose] = useState("");
  const [description, setDescription] = useState("");
  const [history, setHistory] = useState("");
  const [feedback, setFeedback] = useState("");
  const [steps, setSteps] = useState(getSteps());

  useEffect(() => {
    setSteps(getSteps());
  });

  // adding new steps -- this works
  const individualStepAddition = () => {
    emptyStep.order = steps.length + 1;
    emptyStep.id = Date.now();
    const newSteps = [...steps, emptyStep];
    setSteps(newSteps);
    setAllSteps(newSteps);
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
    setAllSteps(newSteps);
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
    setAllSteps(newSteps);
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
    setAllSteps(newSteps);
  };

  return (
    <SafeAreaView style={{ flex: 1, flexDirection: "column" }}>
      <View style={{ top: 15 }}>
        <Text style={styles.header}>
          Vanderbilt TOM Makeathon Project Documentation
        </Text>
        <TextInput
          placeholder="Project Name"
          style={styles.projectName}
          onChangeText={(text) => setName(text)}
          value={name}
        />
      </View>
      <View style={{ top: 25, bottom: 25 }}></View>

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
              width: 60,
              height: 60,
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

      <View style={{ flex: 1 }}>
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
                    padding: 12,
                  }}
                >
                  <Text
                    style={{
                      fontSize: 17,
                      color: "black",
                      marginBottom: 10,
                    }}
                  >
                    Step {item.order} :{" "}
                    {item.name ? item.name : "Untitled step"}
                  </Text>
                  <View style={styles.thinBar}></View>
                  {/* put the four icons on a seperate line and space them evenly horizontally */}
                  <View
                    style={{
                      flexDirection: "row",
                      justifyContent: "space-evenly",
                      marginTop: 10,
                    }}
                  >
                    <TouchableOpacity
                      onPress={() =>
                        navigation.navigate("TextBoxPageNew", {
                          id: item.id,
                        })
                      }
                    >
                      <Image
                        style={styles.icons}
                        source={require("../assets/projects-11/edit.png")}
                      />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => decrementOrder(item.id)}>
                      <Image
                        style={styles.icons}
                        source={require("../assets/projects-11/arrow-up.png")}
                      />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => incrementOrder(item.id)}>
                      <Image
                        style={styles.icons}
                        source={require("../assets/projects-11/arrow-down.png")}
                      />
                    </TouchableOpacity>
                    <TouchableOpacity
                      onPress={() => individualStepRemoval(item.id)}
                    >
                      <Image
                        style={styles.icons}
                        source={require("../assets/projects-11/delete.png")}
                      />
                    </TouchableOpacity>
                  </View>
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
  header: {
    fontSize: 15,
    fontWeight: "bold",
    textAlign: "center",
    color: "#00a2d3",
    marginTop: 10,
    marginBottom: 20,
  },

  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },

  projectName: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
  },

  logo: {
    width: windowWidth * 0.18,
    height: windowHeight * 0.04,
    left: windowWidth * 0.412,
    top: -windowHeight * 0.45,
    position: "relative",
    flexDirection: "row",
  },

  plusBox: {
    position: "relative",
    right: 0,
    bottom: 0,
  },

  plus: {
    width: 23,
    height: 23,
  },

  icons: {
    // make the icon red
    tintColor: "#f15d31",
    width: 20,
    height: 20,
  },

  stepName: {
    width: "88%",
    height: "30%",
    left: windowWidth * 0.05,
    top: -windowHeight * 0.128,
  },

  thinBar: {
    backgroundColor: `rgba(112, 112, 112, 0.3)`,
    height: 1,
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
