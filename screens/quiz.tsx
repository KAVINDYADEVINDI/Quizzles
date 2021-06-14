import React from "react";
import { StyleSheet, Text, TouchableOpacity, View, Image } from "react-native";
import  {LinearGradient}  from "expo-linear-gradient";

const Quiz = ({navigation}) => {
  return (
    <View style={{ width: "100%", height: "100%" }}>
      <LinearGradient
        colors={["rgba(101, 48, 186,1)", "rgba(160, 57, 219,1)"]}
        start={{ x: 1, y: 0 }}
        end={{ x: 0, y: 0 }}
        style={styles.gradient}
      >
        <View style={styles.container}>
          <View style={styles.bannerContainer}>
            <Image
              source={require("../assets/images/wel.png")}
              style={styles.banner}
              resizeMode="contain"
            />
          </View>

          <View style={styles.top}>
            <Text>Question 1</Text>
          </View>

          <View style={styles.options}>
            <TouchableOpacity>
              <Text>Option 1</Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Text>Option 2</Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Text>Option 3</Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Text>Option 4</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.bottom}>
            <TouchableOpacity>
              <Text>SKIP</Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Text>NEXT</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate("Result")}>
              <Text>END</Text>
            </TouchableOpacity>
          </View>
        </View>
      </LinearGradient>
    </View>
  );
};

export default Quiz;

const styles = StyleSheet.create({
  container: {
    paddingTop:40,
    padding: 12,
  },
  banner: {
    height: 300,
    width: 300,
  },
  bannerContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
  top: {
    marginVertical: 16,
  },
  options: {
    marginVertical: 16,
   
  },
  bottom: {
    marginBottom: 12,
    paddingVertical: 16,
    justifyContent: "space-between",
    flexDirection: "row",
  },
});
