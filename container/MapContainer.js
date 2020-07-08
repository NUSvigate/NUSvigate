import React, { Component } from "react";
import { StyleSheet, Text, View, Image, Dimensions } from "react-native";

import MapView, { PROVIDER_GOOGLE, Marker } from "react-native-maps";
import * as Permissions from "expo-permissions";
import Polyline from "@mapbox/polyline";

import MapPlaceList from "../component/MapPlaceList";
import { GOOGLE_API_KEY } from "react-native-dotenv";

const faculties = require("../faculties.json");
const accommodations = require("../accommodations.json");
const food = require("../f&b.json");
const lecture = require("../lecture.json");
const tutorials = require("../tutorials.json");
const fitness = require("../fitness.json");
const others = require("../others.json");
const retail = require("../retail.json");
const seminar = require("../seminar.json");
const study = require("../study.json");
const auditoriums = require("../auditoriums.json");

const { width, height } = Dimensions.get("screen");

export default class MapContainer extends Component {
  state = {
    latitude: null,
    longitude: null,
    locations: faculties,
    isLoading: false,
    name: null,
    color: null,
    image: null,
  };

  async componentDidMount() {
    const placeType = this.props.route.params.locations;
    if (placeType === "accommodations") {
      this.setState({ locations: accommodations, color: "blue" });
    }
    if (placeType === "food") {
      this.setState({ locations: food, color: "red" });
    }
    if (placeType === "lecture") {
      this.setState({ locations: lecture, color: "navy" });
    }
    if (placeType === "tutorials") {
      this.setState({ locations: tutorials, color: "turquoise" });
    }
    if (placeType === "faculties") {
      this.setState({ locations: faculties, color: "gold" });
    }
    if (placeType === "others") {
      this.setState({ locations: others, color: "green" });
    }
    if (placeType === "retail") {
      this.setState({ locations: retail, color: "tomato" });
    }
    if (placeType === "audi") {
      this.setState({ locations: audi, color: "orange" });
    }
    if (placeType === "lecture") {
      this.setState({ locations: lecture, color: "navy" });
    }
    if (placeType === "seminar") {
      this.setState({ locations: seminar, color: "purple" });
    }
    if (placeType === "study") {
      this.setState({ locations: study, color: "plum" });
    }
    if (placeType === "tutorials") {
      this.setState({ locations: tutorials, color: "turquoise" });
    }
    if (placeType === "fitness") {
      this.setState({ locations: fitness, color: "tan" });
    }

    const { status } = await Permissions.getAsync(Permissions.LOCATION);

    if (status !== "granted") {
      const response = await Permissions.askAsync(Permissions.LOCATION);
    }
    navigator.geolocation.getCurrentPosition(
      ({ coords: { latitude, longitude } }) =>
        this.setState({ latitude, longitude }, this.mergeCoords),
      (error) => console.log("Error:", error)
    );

    const {
      locations: [sampleLocation],
    } = this.state;

    this.setState(
      {
        desLatitude: sampleLocation.coords.latitude,
        desLongitude: sampleLocation.coords.longitude,
      },
      this.mergeCoords
    );
  }

  mergeCoords = () => {
    const { latitude, longitude, desLatitude, desLongitude } = this.state;

    const hasStartAndEnd = latitude !== null && desLatitude !== null;

    if (hasStartAndEnd) {
      const concatStart = `${latitude},${longitude}`;
      const concatEnd = `${desLatitude},${desLongitude}`;
      this.getDirections(concatStart, concatEnd);
    }
  };

  async getDirections(startLoc, desLoc) {
    try {
      const resp = await fetch(
        `https://maps.googleapis.com/maps/api/directions/json?origin=${startLoc}&destination=${desLoc}&mode=walking&key=AIzaSyDvMevOCENhN4DLzaT_bn60NqB2bOnLau0`
      );
      const respJson = await resp.json();
      const response = respJson.routes[0];
      const distanceTime = response.legs[0];
      const distance = distanceTime.distance.text;
      const time = distanceTime.duration.text;
      const address = distanceTime.end_address;
      const points = Polyline.decode(
        respJson.routes[0].overview_polyline.points
      );
      const coords = points.map((point) => {
        return {
          latitude: point[0],
          longitude: point[1],
        };
      });
      this.setState({ coords, distance, time, address });
    } catch (error) {
      console.log("Error: ", error);
    }
  }

  onMarkerPress = (location) => () => {
    const {
      coords: { latitude, longitude },
    } = location;
    this.setState(
      {
        name: location.name,
        image: location.image_url,
        destination: location,
        desLatitude: latitude,
        desLongitude: longitude,
      },
      this.mergeCoords
    );
    console.log(this.state.image);
  };

  renderMarkers = () => {
    const { locations } = this.state;
    return (
      <View>
        {locations.map((location, idx) => {
          const {
            coords: { latitude, longitude },
          } = location;
          return (
            <Marker
              key={idx}
              coordinate={{ latitude, longitude }}
              onPress={this.onMarkerPress(location)}
              pinColor={location.color}
            />
          );
        })}
      </View>
    );
  };

  render() {
    const {
      time,
      name,
      image,
      coords,
      places,
      address,
      distance,
      latitude,
      longitude,
      destination,
    } = this.state;

    if (latitude) {
      return (
        <View style={{ flex: 1 }}>
          <View style={{ flex: 5 }}>
            <View
              style={{
                width,
                paddingTop: 10,
                alignSelf: "center",
                height: height * 0.15,
                backgroundColor: "white",
                justifyContent: "center",
              }}
            >
              <Text style={{ fontWeight: "bold" }}> Name: {name} </Text>
              <Text style={{ fontWeight: "bold" }}>
                {" "}
                Estimated Time: {time}{" "}
              </Text>
              <Text style={{ fontWeight: "bold" }}>
                {" "}
                Estimated Distance: {distance}{" "}
              </Text>
              <Text style={{ fontWeight: "bold" }}> Address: {address} </Text>
            </View>

            <MapView
              showsUserLocation
              style={{ flex: 1 }}
              initialRegion={{
                latitude,
                longitude,
                latitudeDelta: 0.0922,
                longitudeDelta: 0.0421,
              }}
            >
              {this.renderMarkers()}
              <MapView.Polyline
                strokeWidth={2}
                strokeColor="red"
                coordinates={coords}
              />
            </MapView>
          </View>

          <View style={{ flex: 1 }}>
            <Image
              source={{ uri: image }}
              style={{
                flex: 1,
                width: width * 0.95,
                alignSelf: "center",
                height: height * 0.2,
                position: "absolute",
                bottom: height * 0.05,
              }}
            />
          </View>
        </View>
      );
    }

    return (
      <View
        styles={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text>We need your permission!</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
  mapView: {
    flex: 1,
    justifyContent: "center",
    height: "50%",
    width: "100%",
  },
  placeList: {
    flex: 1,
    justifyContent: "center",
  },
});
