import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import colors from "../../assets/colors";
import CustomActionButton from "../../components/CustomActionButton.js";

const WelcomeScreen = (props) => {
  return (
    <View style={{ flex: 1, backgroundColor: colors.bgMain }}>
      <View
        style={{
          flex: 1,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Ionicons name="ios-bookmark" size={150} color={colors.logoColor} />
        <Text style={{ fontSize: 50, fontWeight: "100", color: "#fff" }}>
          Book Worm
        </Text>
      </View>
      <View
        style={{
          flex: 1,
          alignItems: "center",
        }}
      >
        <CustomActionButton
          style={{
            width: 200,
            backgroundColor: "transparent",
            borderWidth: 1,
            borderColor: colors.bgPrimary,
            marginBottom: 10,
          }}
          onPress={() => props.navigation.navigate("HomeScreen")}
        >
          <Text style={{ fontWeight: "100", color: "#fff" }}>Log In</Text>
        </CustomActionButton>
        <CustomActionButton
          style={{
            width: 200,
            backgroundColor: "transparent",
            borderWidth: 1,
            borderColor: colors.bgError,
          }}
          onPress={() => props.navigation.navigate("SignUpScreen")}
        >
          <Text style={{ fontWeight: "100", color: "#fff" }}>Sign Up</Text>
        </CustomActionButton>
      </View>
    </View>
  );
};

export default WelcomeScreen;

const styles = StyleSheet.create({});
