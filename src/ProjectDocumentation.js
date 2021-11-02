import React, { useState, useEffect } from "react";
import { SafeAreaView } from "react-native";
import { useSelector } from 'react-redux'
import {
  StyleSheet,
  View,
  Image,
  Text,
  Dimensions,
  TouchableOpacity,
  TextInput,
  FlatList,
} from "react-native";

// components
import BottomBar from "./components/BottomBar_Documentation";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const ProjectDocumentation = ({ navigation }) => {
  const [name, setName] = useState(useSelector((state) => state.project.name));
  const [description, setDescription] = useState(
    useSelector((state) => state.project.description)
  );
  const [problem, setProblem] = useState(
    useSelector((state) => state.project.problem)
  );
  const [solution, setSolution] = useState(
    useSelector((state) => state.project.solution)
  );
  const [history, setHistory] = useState(
    useSelector((state) => state.project.history)
  );
  const [steps, setSteps] = useState(
    useSelector((state) => state.project.steps)
  );
  const [developers, setDevelopers] = useState(
    useSelector((state) => state.project.developers)
  );
  const [billOfMaterials, setBillOfMaterials] = useState(
    useSelector((state) => state.project.billOfMaterials)
  );
  const [lastUpdated, setLastUpdated] = useState(new Date());

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

      <TouchableOpacity style={styles.addPictureBox} onPress={cameraHandler}>
        {imageDisplay}
      </TouchableOpacity>

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
          onPress={() => navigation.navigate("PurposeOfDevicePage")}
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
          onPress={() => navigation.navigate("PhysicalDescriptionPage")}
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
          onPress={() => navigation.navigate("HistoryOfDevelopmentPage")}
        >
          <Text style={{ fontSize: 17, color: "#C0C0C0" }}>
            History Of Development
          </Text>
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
          BrainStorming & Ideation Notes
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

        {/* <Image style={styles.stepName} source={require("../../assets/projects-11/stepname.png")} /> */}
        {/* {projStepsDisplay} */}

        {steps.length > 0 ? (
          <View
            style={{
              left: windowWidth * 0.07,
              top: -windowHeight * 0.125,
              width: windowWidth,
              height: windowHeight,
            }}
          >
            <FlatList
              data={projSteps}
              renderItem={({ item }) => {
                return (
                  <TouchableOpacity onPress={individualStepAddition}>
                    <Text
                      style={{
                        fontSize: 18,
                        color: "black",
                        fontWeight: "bold",
                      }}
                    >
                      {item.name} {item.description}
                    </Text>
                  </TouchableOpacity>
                );
              }}
              extraData={projSteps}
            />
          </View>
        ) : (
          <View
            style={{
              left: windowWidth * 0.07,
              top: -windowHeight * 0.125,
              width: windowWidth,
              height: windowHeight,
            }}
          ></View>
        )}
      </View>
      <View style={styles.bottombar}>
        <BottomBar />
      </View>
    </SafeAreaView>
  );
};

export default ProjectDocumentation;

const styles = StyleSheet.create({
  bottombar: {
    bottom: -20,
    width: "100%",
  },

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
    height: windowHeight * 0.4,
    left: 0,
    top: -windowHeight * 0.034,
    position: "relative",
    flexDirection: "row",
  },

  logo: {
    width: windowWidth * 0.18,
    height: windowHeight * 0.04,
    left: windowWidth * 0.412,
    top: -windowHeight * 0.38,
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
    top: -windowHeight * 0.055,
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
    height: windowHeight * 0.57,
    left: 0,
    top: -windowHeight * 0.275,
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
});
