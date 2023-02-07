import React, { useEffect, useState } from "react";
import MapView, { Marker } from "react-native-maps";
import {
  Dimensions,
  StyleSheet,
  View,
  Modal,
  Text,
  Button,
} from "react-native";
import ScooterMarker from "../components/ScooterMarker";

const { width, height } = Dimensions.get("window");

const ASPECT_RATIO = width / height;
const LATITUDE_DELTA = 0.02;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;

const initial_location = {
  latitude: 32.29496475761959,
  longitude: -9.234702467931514,
  latitudeDelta: LATITUDE_DELTA,
  longitudeDelta: LONGITUDE_DELTA,
};

export default function App() {
  const [selectedScooter, setSelectedScooter] = useState(null);
  console.log(selectedScooter);

  return (
    <View style={styles.container}>
      <MapView style={styles.map} initialRegion={initial_location}>
        <ScooterMarker onScooterPress={setSelectedScooter} />
      </MapView>
      <View style={styles.centeredView}>
        <Modal animationType={"fade"} visible={selectedScooter !== null}>
          {selectedScooter !== null && (
            <View style={styles.centeredView}>
              <Text style={styles.modalText}>
                Scooter ID: {selectedScooter.id}
              </Text>
              <Text style={styles.modalText}>
                Latitude: {selectedScooter.latitude}
              </Text>
              <Text style={styles.modalText}>
                Longitude: {selectedScooter.longitude}
              </Text>
              <Button
                style={[styles.button, styles.buttonClose]}
                title="Close"
                onPress={() => setSelectedScooter(null)}
              />
            </View>
          )}
        </Modal>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    width: "100%",
    height: "100%",
  },
  // modals:{
  //   justifyContent: 'center',  
  //   alignItems: 'center',   
  //   backgroundColor : "#00BCD4",   
  //   height: 300 ,  
  //   width: '80%',  
  //   borderRadius:10,  
  //   borderWidth: 1,  
  //   borderColor: '#fff',    
  //   marginTop: 80,  
  //   marginLeft: 40,  
  // },
  marker: {
    width: 20,
    height: 20,
    borderRadius: 10,
    backgroundColor: "red",
  },
  // scooterInfo: {
  //   backgroundColor: "white",
  //   padding: 20,
  //   borderRadius: 10,
  //   margin: 20,
  // },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: "#F194FF",
  },
  buttonClose: {
    backgroundColor: "#2196F3",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
  },
});
