import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import AntDesign from "react-native-vector-icons/AntDesign";

const SearchBar = ({ cityHandler }) => {
  const [cityName, setCityName] = useState("");

  const cityHandlerButton = () => {
    cityHandler(cityName);
  };

  return (
    <View style={{ marginTop: 15, flexDirection: "row" }}>
      <View style={styles.searchInput}>
        <View style={{ marginLeft: 10 }}>
          <Ionicons name="location-sharp" style={{ padding: 5 }} size={24} />
        </View>
        <TextInput
          style={styles.input}
          onChangeText={setCityName}
          placeholder="Search"
          value={cityName}
          onSubmitEditing={cityHandlerButton}
        />
        <TouchableOpacity onPress={cityHandlerButton}>
          <View style={styles.searchButton}>
            <AntDesign
              name="clockcircle"
              size={11}
              style={{ marginRight: 10 }}
            />
            <Text>Search</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default SearchBar;

const styles = StyleSheet.create({
  input: {
    flex: 1,
    height: 50,
    padding: 13,
    fontWeight: "700",
    fontSize: 18,
  },
  searchInput: {
    borderRadius: 20,
    backgroundColor: "#eee",
    width: "100%",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  searchButton: {
    flexDirection: "row",
    marginRight: 8,
    backgroundColor: "white",
    padding: 9,
    borderRadius: 30,
    justifyContent: "center",
    alignItems: "center",
  },
});
