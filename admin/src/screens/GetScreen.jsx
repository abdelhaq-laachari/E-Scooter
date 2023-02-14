import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  ScrollView,
  Button,
} from "react-native";
import axios from "axios";
import Constants from "expo-constants";

const GetScreen = () => {
  const [scooter, setScooter] = useState([]);
  const apiUrl = Constants.expoConfig.extra.apiUrl;

  useEffect(() => {
    axios
      .get(`${apiUrl}/user/allScooters`)
      .then((response) => {
        setScooter(response.data);
      })
      .catch((error) => console.log("error " + error));
  }, []);

  const deleteScooter = (id) => {
    axios
      .delete(`${apiUrl}/admin/scooter/${id}`)
      .then((response) => {
        alert("Scooter deleted successfully");
        setScooter(scooter.filter((scooter) => scooter._id !== id));
      })
      .catch((error) => console.log("error " + error));
  };

  return (
    <SafeAreaView
      style={{
        flex: 1,
        justifyContent: "center",
        backgroundColor: "#F8F8F8",
        padding: 20,
      }}
    >
      <ScrollView>
        {scooter.map((scooter) => (
          <View key={scooter._id} style={styles.container}>
            <View style={styles.line}>
              <Text style={styles.title}>latitude</Text>
              <Text style={styles.secondTitle}>{scooter.latitude}</Text>
            </View>
            <View style={styles.line}>
              <Text style={styles.title}>longitude</Text>
              <Text style={styles.secondTitle}>{scooter.longitude}</Text>
            </View>
            <View style={styles.line}>
              <Text style={styles.title}>Model</Text>
              <Text style={styles.secondTitle}>{scooter.model}</Text>
            </View>
            <View style={styles.line}>
              <Text style={styles.title}>Battery</Text>
              <Text style={styles.secondTitle}>{scooter.battery}</Text>
            </View>
            <View style={styles.line}>
              <Text style={styles.title}>Price</Text>
              <Text style={styles.secondTitle}>{scooter.price}</Text>
            </View>
            <View style={styles.line}>
              <Text style={styles.title}>Status</Text>
              <Text style={styles.secondTitle}>{scooter.isRented}</Text>
            </View>
            <View style={styles.buttonContainer}>
              <Button
                title="Delete"
                color="#841584"
                onPress={() => deleteScooter(scooter._id)}
              />
            </View>
          </View>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "#F8F8F8",
    padding: 20,
    margin: 10,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    borderWidth: 1,
  },
  line: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  title: {
    fontSize: 15,
    fontWeight: "bold",
    color: "#333",
  },
  secondTitle: {
    fontSize: 15,
    color: "#555",
  },
  buttonContainer: {
    paddingTop: 10,
  },
});

export default GetScreen;
