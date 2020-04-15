import React, { useState } from "react";
import { View, Text, StyleSheet, TextInput, Button } from "react-native";

const BlogPostForm = ({ onSubmit, initialValues }) => {
  const [title, setTitle] = useState(initialValues.title);
  const [content, setContent] = useState(initialValues.content);

  return (
    <View style={styles.viewStyle}>
      <Text style={styles.titleStyle}>Enter title: </Text>
      <TextInput
        style={styles.textInputStyle}
        value={title}
        onChangeText={(text) => setTitle(text)}
      />
      <Text style={styles.titleStyle}>Enter content: </Text>
      <TextInput
        style={styles.textInputStyle}
        value={content}
        onChangeText={(text) => setContent(text)}
      />
      <Text style={styles.empty}></Text>
      <Button title="Save blog post" onPress={() => onSubmit(title, content)} />
    </View>
  );
};

BlogPostForm.defaultProps = {
  initialValues: {
    title: "",
    content: "",
  },
};

const styles = StyleSheet.create({
  viewStyle: {
    marginHorizontal: 15,
  },
  textInputStyle: {
    backgroundColor: "ivory",
    borderRadius: 10,
    paddingHorizontal: 12,
    paddingVertical: 5,
    fontSize: 18,
    marginBottom: 5,
  },
  titleStyle: {
    fontSize: 20,
    marginTop: 15,
    marginBottom: 5,
    fontWeight: "bold",
  },
  empty: {
    marginVertical: 2,
  },
});

export default BlogPostForm;
