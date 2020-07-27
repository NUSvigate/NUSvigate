import React, { Component, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  Dimensions,
  ActivityIndicator,
} from "react-native";

import MapView, { PROVIDER_GOOGLE, Marker } from "react-native-maps";
import * as Permissions from "expo-permissions";
import Polyline from "@mapbox/polyline";
import MapPlaceList from "../component/MapPlaceList";
import { GOOGLE_API_KEY } from "react-native-dotenv";

const faculties = require("../locations/locations.json");
const accommodations = require("../locations/accommodations.json");
const food = require("../locations/f&b.json");
const lectures = require("../locations/lecture.json");
const tutorials = require("../locations/tutorials.json");
const study = require("../locations/study.json");
const auditoriums = require("../locations/auditoriums.json");
const seminarRooms = require("../locations/seminar.json");
const others = require("../locations/others.json");
const busStops = require("../locations/busStops.json");

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
    busStopCode: null,
    busArrival1: null,
    busArrival2: null,
    busArrival3: null,
  };

  async componentDidMount() {
    const placeType = this.props.route.params.locations;
    if (placeType === "accommodations") {
      this.setState({ locations: accommodations });
    }
    if (placeType === "food") {
      this.setState({ locations: food });
    }
    if (placeType === "lectures") {
      this.setState({ locations: lectures });
    }
    if (placeType === "tutorials") {
      this.setState({ locations: tutorials });
    }
    if (placeType === "study") {
      this.setState({ locations: study });
    }
    if (placeType === "auditoriums") {
      this.setState({ locations: auditoriums });
    }
    if (placeType === "seminarRooms") {
      this.setState({ locations: seminarRooms });
    }
    if (placeType === "others") {
      this.setState({ locations: others });
    }
    if (placeType === "busStops") {
      this.setState({ locations: busStops });
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

    const url =
        "http://datamall2.mytransport.sg/ltaodataservice/BusArrivalv2?BusStopCode=" +
        this.state.busStopCode;

        const xhr = new XMLHttpRequest();

        xhr.open("GET", url);
        xhr.setRequestHeader("AccountKey", "V5OA2L1rRBSCReQl4uMvyA==");
        xhr.send();

        let busArrival = [];

        xhr.onload = () => {

          if (xhr.status === 200) {
              console.log("status 200");

              console.log("================= RESULTS =====================\n");

              const obj = JSON.parse(xhr.responseText);
              const services = obj.Services;

              for (let i = 0; i < services.length; i++) {
                  busArrival =
                      [
                          services[i].ServiceNo,
                          services[i].NextBus.EstimatedArrival,
                          services[i].NextBus2.EstimatedArrival
                      ]
              }
          } else {
              console.log(`error ${xhr.status} ${xhr.statusText}`);
          }
        }

        this.setState({ busArrival1: busArrival })
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

  getDirections = async (startLoc, desLoc) => {
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

    const placeType = this.props.route.params.locations;
    if (placeType === "busStops") {
      this.setState({ busStopCode: location.busStopCode })
    }

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
  };

  getBusTimes = () => {


      return (<Text style={styles.busArrival}> { this.state.busArrival1 } </Text>)
  }

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
      busStopCode,
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

          <ScrollView style={{ flex: 1 }}>
            {!this.state.busStopCode && (
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
            )}

            { this.state.busStopCode && this.getBusTimes() }

          </ScrollView>
        </View>
      );
    }

    return (
      <View styles={styles.container}>
        <ActivityIndicator size={150} />
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
  busArrival: {
    textAlign: 'justify'
  }
});
