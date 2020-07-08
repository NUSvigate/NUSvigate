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
          {this.getItem(
            "flag",
            "All Markers",
            60,
            "#000000",
            "material",
            "locations"
          )}

          {this.getItem(
            "place",
            "Faculties",
            60,
            "#ffd700",
            "font-awesome",
            "Faculties"
          )}

          {this.getItem(
            "home",
            "Halls & RCs",
            60,
            "#4169e1",
            "font-awesome",
            "accommodations"
          )}

          {this.getItem(
            "restaurant",
            "F & B",
            60,
            "#ff0000",
            "material",
            "f&b"
          )}

          {this.getItem(
            "slideshare",
            "Lecture Theatres",
            60,
            "#000080",
            "font-awesome",
            "lecture"
          )}

          {this.getItem(
            "list-alt",
            "Tutorial Rooms",
            60,
            "#40e0d0",
            "font-awesome",
            "tutorials"
          )}

          {this.getItem(
            "book",
            "Study Venues",
            60,
            "#dda0dd",
            "font-awesome",
            "study"
          )}

          {this.getItem(
            "university",
            "Auditorium",
            60,
            "#ffa500",
            "font-awesome",
            "lecture"
          )}

          {this.getItem(
            "shopping-cart",
            "Retail",
            60,
            "#fa8072",
            "font-awesome",
            "retail"
          )}

          {this.getItem(
            "heart",
            "Fitness",
            60,
            "#d2b48c",
            "font-awesome",
            "fitness"
          )}

          {this.getItem(
            "group",
            "Seminar Rooms",
            60,
            "#800080",
            "font-awesome",
            "lectures"
          )}

          {this.getItem(
            "plus",
            "Others",
            60,
            "#3cb371",
            "font-awesome",
            "lectures"
          )}
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
