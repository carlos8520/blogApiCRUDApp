import React, { useContext } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Context } from "../context/blogContext";
import { EvilIcons } from "@expo/vector-icons";

const ShowScreen = ({ navigation }) => {
  const { state } = useContext(Context);

  const blogPost = state.find(
    blogPost => blogPost.id === navigation.getParam("id")
  );

  return (
    <View style={styles.viewStyle}>
      <Text style={styles.titleStyle}>{blogPost.title}</Text>
      <Text style={styles.contentStyle}>{blogPost.content}</Text>
    </View>
  );
};

ShowScreen.navigationOptions = ({ navigation }) => {
  return {
    headerRight: (
      <TouchableOpacity
        onPress={() =>
          navigation.navigate("Edit", { id: navigation.getParam("id") })
        }
      >
        <EvilIcons name="pencil" size={35} />
      </TouchableOpacity>
    )
  };
};

const styles = StyleSheet.create({
  viewStyle: {
    paddingHorizontal: 35,
    paddingVertical: 35
  },
  titleStyle: {
    fontSize: 32,
    fontWeight: "bold",
    marginBottom: 15
  },
  contentStyle: {
    fontSize: 22,
    textAlign: "justify",
    color: "grey"
  }
});

export default ShowScreen;
