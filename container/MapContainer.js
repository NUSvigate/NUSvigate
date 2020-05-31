import React, { Component } from 'react';
import { NativeEventEmitter, NativeModules } from 'react-native';
import { StyleSheet, View, Text, Button, Image, Alert, Platform } from 'react-native';
import MapView, { PROVIDER_GOOGLE, Marker, Callout, Polygon, Circle } from 'react-native-maps';
import Geolocation from 'react-native-geolocation-service';
import * as Permissions from 'expo';

export default class MapContainer extends Component {

    state = {

        latitude: null,
        longitude: null,
        coordinates: [
            { name: '1', latitude: 37.802529, longitude: -122.4351431 },
            { name: '2', latitude: 37.7896386, longitude: -122.421646 },
            { name: '3', latitude: 37.7665248, longitude: -122.4161628},
            { name: '4', latitude: 37.7734153, longitude: -122.4577787 },
            { name: '5', latitude: 37.8025259, longitude: -122.4351431}
        ]
    }

    componentDidMount() {
        this.requestLocationPermission();
    }


    showWelcomeMessage = () => {
        Alert.alert(
            'Welcome to San Francisco',
            'The food is amazing',
            [
                {
                    text: 'Cancel',
                    style: 'cancel'
                },
                {
                    text: 'Ok'
                }
            ]
        )
    }

    requestLocationPermission = async () => {
        const { status } = await Permissions.getAsync(Permissions.LOCATION);

        if (status === 'granted') {
            this.locateCurrentPosition();
        } else {
            const response = await Permissions.askAsync(Permissions.LOCATION);
        }
    }

    locateCurrentPosition = () => {
        Geolocation.getCurrentPosition(
            position => {
                console.log(JSON.stringify(position));
            }
        )
    }

    render() {
        return(
            <MapView
                provider={ PROVIDER_GOOGLE }
                showsUserLocation={true}
                style={styles.map}
                initialRegion= {{
                    latitude: 37.78825,
                    longitude: -122.4324,
                    latitudeDelta: 0.09,
                    longitudeDelta: 0.035
                }}>

                <Polygon
                    coordinates={this.state.coordinates}
                    fillColor={'rgba(100, 100, 200, 0.6)'}
                />

                <Circle
                    center={{ latitude: 37.8025259, longitude: -122.4351431 }}
                    radius={500}
                    fillColor={'rgba(100,100,100,0.5)'}
                />

                <Marker
                    coordinate={{ latitude: 37.7825259, longitude: -122.44 }}
                    image={require('../assets/Main.png')}
                >

                    <Callout onPress={this.showWelcomeMessage}>

                        <Image source={require('../assets/Main.png')}/>
                        <Text>An Interesting City</Text>

                    </Callout>
                </Marker>

                {
                    this.state.coordinates.map(marker => (
                        <Marker
                            key={marker.name}
                            coordinate={{latitude: marker.latitude, longitude: marker.longitude}}
                        >
                            <Callout>
                                <Image
                                    style={{width: 50, height: 50}}
                                    source={require('../assets/Main3.png')}
                                />
                                <Text>{marker.name}</Text>
                            </Callout>

                        </Marker>
                    ))
                }
            </MapView>
        );
    }
};

const styles = StyleSheet.create({
  map: {
    ...StyleSheet.absoluteFillObject
  },
})