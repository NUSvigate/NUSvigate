import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import MapView from 'react-native-maps';
import * as Permissions from 'expo-permissions';
import Polyline from '@mapbox/polyline'

const locations = require('../locations.json');

export default class MapContainer extends React.Component {

    state = {
        latitude: null,
        longitude: null,
        locations: locations
    }

    async componentDidMount() {
        const { status } = await Permissions.getAsync(Permissions.LOCATION);

        if ( status !== 'granted' ) {
            const response = await Permissions.askAsync(Permissions.LOCATION);
        }
        navigator.geolocation.getCurrentPosition(
            ({ coords: { latitude, longitude } }) => this.setState({ latitude, longitude }, this.mergeCoords),
            (error) => console.log('Error:', error)
        )

        const { locations: [ sampleLocation ]} = this.state

        this.setState({
            desLatitude: sampleLocation.coords.latitude,
            desLongitude: sampleLocation.coords.longitude
        }, this.mergeCoords)
    }

    mergeCoords = () => {
        const {
            latitude,
            longitude,
            desLatitude,
            desLongitude
        } = this.state

        const hasStartAndEnd = latitude !== null && desLatitude !== null

        if (hasStartAndEnd) {
            const concatStart = `${latitude},${longitude}`
            const concatEnd = `${desLatitude},${desLongitude}`
            this.getDirections(concatStart, concatEnd)
        }
    }

    async getDirections(startLoc, desLoc) {
        try {
            const resp = await fetch (`https://maps.googleapis.com/maps/api/directions/json?origin=${startLoc}&destination=${desLoc}&key=AIzaSyCQ4-BaArdW5sd6bcStHnNNtZjnqUyBAEI`)
            const respJson = await resp.json();
            console.log(JSON.stringify(respJson));
            const points = Polyline.decode(respJson.routes[0].overview_polyline.points)
            const coords = points.map(point => {
                return {
                    latitude: point[0],
                    longitude: point[1]
                }
            })
            this.setState({ coords })
        } catch (error) {
            console.log('Error: ', error)
        }
    }

    render() {

        const { latitude, longitude, coords } = this.state;

        if (latitude) {
            return (
                <MapView
                    showsUserLocation
                    style={{ flex: 1 }}
                    initialRegion={{
                        latitude,
                        longitude,
                        latitudeDelta: 0.0922,
                        longitudeDelta: 0.0421
                    }}
                >
                    <MapView.Polyline
                        strokeWidth={2}
                        strokeColor='red'
                        coordinates={coords}
                    />
                </MapView>
            )
        }

        return (
            <View styles={{
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center'
            }}>
                <Text>We need your permission!</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
})