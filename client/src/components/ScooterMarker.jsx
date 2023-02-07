import React, { useEffect, useState } from "react";
import { View } from "react-native";
import { Marker } from "react-native-maps";

const ScooterMarker = ({ onScooterPress }) => {
  const [scooters, setScooters] = useState([]);

  useEffect(() => {
    // Fetch the scooter locations from your server here
    const sampleScooters = [
      {
        id: 1,
        latitude: 32.296837061050326,
        longitude: -9.233435209598039,
      },
      {
        id: 2,
        latitude: 32.296354608864156,
        longitude: -9.235852508063292,
      },
      {
        id: 3,
        latitude: 32.29453829525067,
        longitude: -9.233300915238857,
      },
      {
        id: 4,
        latitude: 32.29439639421696,
        longitude: -9.234526351266382,
      },
      {
        id: 5,
        latitude: 32.29496475761959,
        longitude: -9.234702467931514,
      },
    ];
    setScooters(sampleScooters);
  }, []);
  return (
    <View>
      {scooters.map((scooter) => (
        <Marker
          key={scooter.id}
          coordinate={{
            latitude: scooter.latitude,
            longitude: scooter.longitude,
          }}
          onPress={() => onScooterPress(scooter)}
        />
      ))}
    </View>
  );
};

export default ScooterMarker;
