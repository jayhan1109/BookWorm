import React from "react";
import { StyleSheet, View, TouchableOpacity } from "react-native";

const CustomActionButton = ({ onPress, children, style }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={[styles.btn, style]}>{children}</View>
    </TouchableOpacity>
  );
};

export default CustomActionButton;

const styles = StyleSheet.create({
  btn: {
    width: 50,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
  },
});
