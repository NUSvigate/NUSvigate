import React, { Component } from 'react';
import { Container, Content } from 'native-base';
import { StyleSheet } from 'react-native';

import MapSearchBar from '../component/MapSearchBar';
import MapMenu from '../component/MapMenu';

export default class MapDashboardContainer extends Component {

    render() {

        const { navigation } = this.props;
        return (
            <Container style = {styles.container}>
                <Content>
                    <MapMenu navigation = { navigation } />
                </Content>
            </Container>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        flexWrap: 'wrap',
        alignContent: 'center',
        paddingHorizontal: 20,
        paddingVertical: 20
    }
});