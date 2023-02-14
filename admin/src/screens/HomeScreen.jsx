import React from "react";
import { Text, View, Button, StyleSheet } from "react-native";

const HomeScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Dashboard</Text>
      <View style={styles.buttonsContainer}>
        <Button
          title="Get Scooters"
          onPress={() => navigation.navigate("GetScooter")}
        />
        <Button
          title="Add Scooter"
          onPress={() => navigation.navigate("AddScooter")}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontSize: 30,
    marginBottom: 20,
  },
  buttonsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "60%",
  },
});

export default HomeScreen;
