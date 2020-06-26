import React, { Component } from 'react';
import { StyleSheet, View, Text, Dimensions } from 'react-native';
import { Dropdown } from 'react-native-material-dropdown';

import SearchItemButton from '../component/SubmitItemButton';

export default class FoundItemFilterContainer extends Component {

    state = {
        categorySelectedValue: 1,
        colorSelectedValue: 1,
        locationSelectedValue: 1
    }

    setCategoryStateValue = (ddlValue) => {
        this.setState({
            categorySelectedValue: ddlValue
        });
    }

    setColorStateValue = (ddlValue) => {
        this.setState({
            colorSelectedValue: ddlValue
        });
    }

    setLocationStateValue = (ddlValue) => {
        this.setState({
            locationSelectedValue: ddlValue
        });
    }

    render() {

        const categories = [
            {
                label: 'stationery',
                value: 1
            }, {
                label: 'valuables',
                value: 2
            }, {
                label: 'academic',
                value: 3
            }, {
                label: 'personal identification',
                value: 4
            }, {
                label: 'others',
                value: 5
            }
        ]

        const color = [
            {
                label: 'red',
                value: 1
            }, {
                label: 'blue',
                value: 2
            }, {
                label: 'brown',
                value: 3
            }, {
                label: 'pink',
                value: 4
            }, {
                label: 'purple',
                value: 5
            }, {
                label: 'turquoise',
                value: 6
            }, {
                label: 'green',
                value: 7
            }, {
                label: 'orange',
                value: 8
            }, {
                label: 'yellow',
                value: 9
            }, {
                label: 'gray',
                value: 10
            }, {
                label: 'white',
                value: 11
            }, {
                label: 'black',
                value: 12
            }
        ]

        const location = [
            {
                label: 'Faculty of Science',
                value: 1
            }, {
                label: 'Medicine',
                value: 2
            }, {
                label: 'Yusof Ishak House',
                value: 3
            }, {
                label: 'Central Library',
                value: 4
            }, {
                label: 'Faculty of Arts and Social Science',
                value: 5
            }, {
                label: 'School of Computing',
                value: 6
            }, {
                label: 'Business School',
                value: 7
            }, {
                label: 'School of Design and Environment',
                value: 8
            }, {
                label: 'Faculty of Engineering',
                value: 9
            }, {
                label: 'University Town',
                value: 10
            }, {
                label: 'NUS Museum',
                value: 11
            }
        ]

        return (
            <View style = {styles.container}>
                <Dropdown
                    containerStyle = {styles.dropdown}
                    data = {categories}
                    value = {this.state.categorySelectedValue}
                    label = 'Category'
                    itemColor = 'blue'
                    useNativeDriver = {true}
                    onChangeText = {(value, data, index) => {
                        this.setCategoryStateValue(value)
                    }}
                />

                <Dropdown
                    containerStyle = {styles.dropdown}
                    data = {color}
                    value = {this.state.colorSelectedValue}
                    label = 'Colour'
                    itemColor = 'blue'
                    useNativeDriver = {true}
                    onChangeText = {(value, data, index) => {
                        this.setColorStateValue(value)
                    }}
                />

                <Dropdown
                    containerStyle = {styles.dropdown}
                    data = {location}
                    value = {this.state.locationSelectedValue}
                    label = 'Where item was found'
                    itemColor = 'blue'
                    useNativeDriver = {true}
                    onChangeText = {(value, data, index) => {
                        this.setLocationStateValue(value)
                    }}
                />

                <SearchItemButton/>
            </View>
        )
    }
}

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#b9d6eb',
        justifyContent: 'center',
        alignItems: 'center'
    },
    dropdown: {
        width: width / 1.2,
        marginHorizontal: 20,
        marginBottom: 5
    }
})