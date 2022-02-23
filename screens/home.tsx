import React from "react";
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  TouchableOpacity,
  Modal,
} from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { globalStyles } from "../styles/globals";
import Card from "../shared/card";

const Home = ({ navigation }: any) => {
  const [modalOpen, setModalOpen] = React.useState(false);
  const [reviews, setReviews] = React.useState([
    {
      title: "title #1",
      rating: 5,
      body: "lorem ipsum dolor",
      key: "1",
    },
    {
      title: "title #2",
      rating: 4,
      body: "lorem ipsum dolor",
      key: "2",
    },
    {
      title: "title #3",
      rating: 3,
      body: "lorem ipsum dolor",
      key: "3",
    },
  ]);

  return (
    <View style={globalStyles.container}>
      <Modal visible={modalOpen} animationType="slide">
        <View style={styles.modalContent}>
          <MaterialIcons
            name="close"
            size={24}
            style={{ ...styles.modalToggle, ...styles.modalClose }}
            onPress={() => setModalOpen(false)}
          />
          <Text>Hello from the modal :)</Text>
        </View>
      </Modal>

      <MaterialIcons
        name="add"
        size={24}
        style={styles.modalToggle}
        onPress={() => setModalOpen(true)}
      />
      <FlatList
        data={reviews}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity
              onPress={() => navigation.navigate("review", { ...item })}
            >
              <Card>
                <Text style={globalStyles.titleText}>{item.title}</Text>
              </Card>
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  modalToggle: {
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 10,
    borderWidth: 1,
    borderColor: "#f2f2f2",
    padding: 10,
    borderRadius: 10,
    alignSelf: "center",
  },
  modalClose: {
    marginTop: 20,
    marginBottom: 0,
  },
  modalContent: {
    flex: 1,
  },
});

export default Home;
