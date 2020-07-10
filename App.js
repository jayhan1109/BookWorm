import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  TextInput,
  FlatList,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import BookCount from "./components/BookCount";

export default function App() {
  const [totalCount, setTotalCount] = useState(0);
  const [readingCount, setReadingCount] = useState(0);
  const [readCount, setReadCount] = useState(0);
  const [isBookVisible, setIsBookVisible] = useState(false);
  const [textInputData, setTextInputData] = useState("");
  const [books, setBooks] = useState([]);

  const showAddNewBook = () => {
    setIsBookVisible(true);
  };

  const hideAddNewBook = () => {
    setIsBookVisible(false);
  };

  const addBook = (book) => {
    setBooks([book, ...books]);
    setTotalCount(totalCount + 1);
    setReadingCount(readingCount + 1);
    setTextInputData("");
  };

  const markAsRead = (selectedBook, index) => {
    let newList = books.filter((book) => book !== selectedBook);

    setBooks(newList);
    setReadingCount(readingCount - 1);
    setReadCount(readCount + 1);
  };

  const renderItem = (item, index) => (
    <View style={{ height: 50, flexDirection: "row" }}>
      <View style={{ flex: 1, justifyContent: "center", paddingLeft: 5 }}>
        <Text>{item}</Text>
      </View>
      <TouchableOpacity onPress={() => markAsRead(item, index)}>
        <View
          style={{
            width: 100,
            height: 50,
            backgroundColor: "#a5deba",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Text style={{ fontWeight: "bold", color: "#fff" }}>
            Mark as Read
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
  return (
    <View style={{ flex: 1 }}>
      <SafeAreaView />
      <View
        style={{
          height: 70,
          borderBottomWidth: 0.5,
          borderBottomColor: "#E9E9E9",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Text style={{ fontSize: 24 }}>Book Worm</Text>
      </View>
      <View style={{ flex: 1 }}>
        {isBookVisible && (
          <View style={{ height: 50, flexDirection: "row" }}>
            <TextInput
              style={{ flex: 1, backgroundColor: "#ececec", paddingLeft: 5 }}
              placeholder="Enter Book Name"
              placeholderTextColor="grey"
              onChangeText={(text) => setTextInputData(text)}
              value={textInputData}
            />
            <TouchableOpacity onPress={() => addBook(textInputData)}>
              <View
                style={{
                  width: 50,
                  height: 50,
                  backgroundColor: "#a5deba",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Ionicons name="ios-checkmark" color="#fff" size={40} />
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={hideAddNewBook}>
              <View
                style={{
                  width: 50,
                  height: 50,
                  backgroundColor: "#deada5",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Ionicons name="ios-close" color="#fff" size={40} />
              </View>
            </TouchableOpacity>
          </View>
        )}

        <FlatList
          keyExtractor={(item, index) => index.toString()}
          data={books}
          renderItem={({ item }, index) => renderItem(item, index)}
          ListEmptyComponent={
            <View style={{ marginTop: 50, alignItems: "center" }}>
              <Text style={{ fontWeight: "bold" }}>Not Reading Any Books.</Text>
            </View>
          }
        />

        <TouchableOpacity
          style={{ position: "absolute", bottom: 20, right: 20 }}
          onPress={showAddNewBook}
        >
          <View style={styles.plusBtn}>
            <Text style={styles.plus}>+</Text>
          </View>
        </TouchableOpacity>
      </View>
      <View style={styles.countContainer}>
        <BookCount count={totalCount} title="Total" />
        <BookCount count={readingCount} title="Reading" />
        <BookCount count={readCount} title="Read" />
      </View>
      <SafeAreaView />
    </View>
  );
}

const styles = StyleSheet.create({
  countContainer: {
    height: 70,
    borderTopWidth: 0.5,
    borderTopColor: "#E9E9E9",
    flexDirection: "row",
  },
  plusBtn: {
    width: 50,
    height: 50,
    borderRadius: 50,
    backgroundColor: "#AAD1E6",
    alignItems: "center",
    justifyContent: "center",
  },
  plus: {
    color: "#fff",
    fontSize: 30,
  },
});
