import React from "react";
import { StyleSheet, Text, View } from "react-native";

const BookCount = ({ count, title }) => {
  return (
    <View style={styles.tab}>
      <Text style={styles.tabText}>{title}</Text>
      <Text>{count}</Text>
    </View>
  );
};

export default BookCount;

const styles = StyleSheet.create({
  tab: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  tabText: {
    fontSize: 20,
  },
});
