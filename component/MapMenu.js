import React, { Component } from "react";
import { Text, View, TouchableOpacity, StyleSheet } from "react-native";
import { Icon } from "react-native-elements";

export default class MapMenu extends Component {
  getItem = (name, text, size, color, type, placeType) => (
    <TouchableOpacity
      onPress={() => {
        this.props.navigation.navigate("Map Container", {
          locations: placeType,
        });
      }}
    >
      <View style={styles.iconStyle}>
        <Icon
          name={name}
          size={size}
          reverse
          color={color}
          type={type}
          raised
        />
        <Text style={styles.textStyle}>{text}</Text>
      </View>
    </TouchableOpacity>
  );

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.iconContainer}>
          {this.getItem("flag", "All Locations", 60, "#daa520", "material", "all")}

          {this.getItem("bus", "Bus Stops", 60, "#20b2aa", "font-awesome", "busStops")}

          {this.getItem("home", "Halls & RCs", 60, "#4169e1", "font-awesome", "accommodations")}

          {this.getItem("restaurant", "F & B", 60, "#ff0000", "material", "food")}

          {this.getItem("slideshare", "Lecture Theatres", 60, "#000080", "font-awesome", "lectures")}

          {this.getItem("list-alt", "Tutorial Rooms", 60, "#40e0d0", "font-awesome", "tutorials")}

          {this.getItem("book", "Study Venues", 60, "#dda0dd", "font-awesome", "study")}

          {this.getItem("university", "Auditoriums", 60, "#ffa500", "font-awesome", "auditoriums")}

          {this.getItem("group", "Seminar Rooms", 60, "#800080", "font-awesome", "seminarRooms")}

          {this.getItem("plus", "Others", 60, "#3cb371", "font-awesome", "others")}
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  iconContainer: {
    marginTop: 40,
    width: "100%",
    flexDirection: "row",
    flexWrap: "wrap",
  },
  iconStyle: {
    flexDirection: "column",
    alignItems: "center",
    padding: 5,
  },
  textStyle: {
    fontSize: 18,
  },
});
