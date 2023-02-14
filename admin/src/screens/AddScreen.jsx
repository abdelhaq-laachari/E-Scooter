import React, { useEffect, useState } from "react";
import {
  ActivityIndicator,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import axios from "axios";
import Constants from "expo-constants";

const AddScreen = () => {
  const apiUrl = Constants.expoConfig.extra.apiUrl;
  const [longitude, setLongitude] = useState("");
  const [latitude, setLatitude] = useState("");
  const [model, setModel] = useState("");
  const [battery, setBattery] = useState("");
  const [price, setPrice] = useState("");
  const [loading, setLoading] = useState(false);

  const addScooter = () => {
    setLoading(true);
    axios
      .post(`${apiUrl}/admin/scooter`, {
        longitude,
        latitude,
        model,
        battery,
        price,
      })
      .then((response) => {
        setLoading(false);
        alert("Scooter added successfully");
        console.log(response.data);
      })
      .catch((error) => {
        setLoading(false);
        console.log("error " + error);
      });
  };
  return (
    <View style={styles.container}>
      <View style={styles.wrapper}>
        <TextInput
          style={styles.input}
          onChangeText={(text) => setLongitude(text)}
          // value={fullName}
          placeholder="Longitud"
        />
        <TextInput
          style={styles.input}
          onChangeText={(text) => setLatitude(text)}
          placeholder="Latitud"
        />
        <TextInput
          style={styles.input}
          placeholder="Model"
          onChangeText={(text) => setModel(text)}
        />
        <TextInput
          style={styles.input}
          placeholder="Battery"
          onChangeText={(text) => setBattery(text)}
        />
        <TextInput
          style={styles.input}
          placeholder="Price"
          onChangeText={(text) => setPrice(text)}
        />
        {loading ? (
          <ActivityIndicator size="large" color="#1E90FF" />
        ) : (
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText} onPress={addScooter}>
              Add
            </Text>
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  wrapper: {
    width: "80%",
    alignItems: "center",
  },
  input: {
    marginVertical: 12,
    width: "100%",
    padding: 14,
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 6,
    fontSize: 16,
    shadowColor: "#000",
  },
  link: {
    color: "#1E90FF",
    fontWeight: "bold",
    marginLeft: 5,
  },
  button: {
    marginTop: 24,
    width: "100%",
    padding: 14,
    backgroundColor: "#1E90FF",
    borderRadius: 6,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
    textAlign: "center",
  },
});

export default AddScreen;
