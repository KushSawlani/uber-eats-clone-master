import React from "react";
import { Text, TouchableOpacity, View } from "react-native";

const Headertabs = (props) => {
  return (
    <View style={{ flexDirection: "row", alignSelf: "center" }}>
      <HeaderButton
        text="Delivery"
        activeTab={props.activeTab}
        setActiveTab={props.setActiveTab}
      />
      <HeaderButton
        text="PickUp"
        activeTab={props.activeTab}
        setActiveTab={props.setActiveTab}
      />
    </View>
  );
};

const HeaderButton = (props) => (
  <TouchableOpacity
    style={{
      backgroundColor: props.activeTab === props.text ? "black" : "white",
      paddingVertical: 6,
      paddingHorizontal: 16,
      borderRadius: 30,
      marginTop: 25,
    }}
    onPress={() => props.setActiveTab(props.text)}
  >
    <Text style={{ color: props.activeTab === props.text ? "white" : "black" }}>
      {props.text}
    </Text>
  </TouchableOpacity>
);

export default Headertabs;
