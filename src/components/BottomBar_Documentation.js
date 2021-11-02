import React from 'react';
import { StyleSheet, TouchableOpacity, View, Dimensions, Image, Text } from "react-native";
import { useNavigation } from '@react-navigation/native';
import { TouchableHighlight } from 'react-native-gesture-handler';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

function BottomBar(props){
    const navigation = useNavigation();

    return(
        <View style={styles.container}>
            <View style={styles.thinBar}></View>

            <View style={{flexDirection: 'column'}}>
                <TouchableOpacity style={styles.myProjectsBox} onPress={() => {navigation.navigate('My Projects')}}>
                <Image style={styles.myProjects} source={require("../../assets/profile_icon.png")} />
                </TouchableOpacity>
            </View>

            <View style={{flexDirection: 'column'}}>
                <TouchableOpacity style={styles.plusBox} onPress={() => {navigation.navigate('New Project')}}>
                <Image style={styles.plus} source={require("../../assets/plus_icon_colored.png")} />
                </TouchableOpacity>
            </View>

             <View style={{flexDirection: 'column'}}>
                <TouchableOpacity style={styles.searchBox} onPress={() => {navigation.navigate('Search Redesign')}}>
                <Image style={styles.search} source={require("../../assets/search_icon.png")} />
                </TouchableOpacity>
            </View>
         </View>
    );
}

export default BottomBar;

const styles = StyleSheet.create({
    thinBar:{
        position: "absolute",
        backgroundColor: `rgba(112, 112, 112, 0.3)`,
        width: "100%",
        height: 2,
    },

    container:{
        backgroundColor: "white",
        justifyContent: "center",
        flexDirection: "row",
        width: "100%",
        height: 55,
    },

    myProjectsBox:{
        position: "relative",
        left: -windowWidth * 0.2,
        top: windowHeight * 0.017,
        width: windowWidth * 0.08,
        height: windowHeight * 0.045,
    },

    myProjects:{
        position: "relative",
        width: windowWidth * 0.08,
        height: windowHeight * 0.045,
    },

    plusBox:{
        position: "relative",
        left: windowWidth * 0.02,
        top: windowHeight * 0.014,
        width: windowWidth * 0.105, 
        height: windowHeight * 0.049,
    },

    plus:{
        position: "relative",
        width: windowWidth * 0.105, 
        height: windowHeight * 0.049,
    },

    searchBox:{
        position: "relative", 
        left: windowWidth * 0.20,
        top: windowHeight * 0.012,
        width: windowWidth * 0.1078, 
        height: windowHeight * 0.05,
    },

    search:{
        position: "relative", 
        width: windowWidth * 0.1078, 
        height: windowHeight * 0.05,
    },
});