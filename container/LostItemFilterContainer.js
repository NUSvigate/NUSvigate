import React, { Component } from 'react';
import { StyleSheet, View, Text, Dimensions, FlatList, Image } from 'react-native';
import { Dropdown } from 'react-native-material-dropdown';
import firebaseDb from '../firebaseDb'

import SearchItemButton from '../component/SearchItemButton';

export default class FoundItemFilterContainer extends Component {

    state = {
        categorySelectedValue: 1,
        locationSelectedValue: 1,
        items: null,
        filteredItems: [],
        filtered: false
    }

    componentDidMount() {
        firebaseDb.firestore().collection('lost items').get().then(querySnapshot => {
            const results = []
            querySnapshot.docs.map(documentSnapshot => results.push(documentSnapshot.data()))
            this.setState({ items: results })
        }).catch(err => console.error(err))
    }

    setCategoryStateValue = (ddlValue) => {
        this.setState({
            categorySelectedValue: ddlValue
        });
    }

    setLocationStateValue = (ddlValue) => {
        this.setState({
            locationSelectedValue: ddlValue
        });
    }

    searchItems = () => {
        const items = [];
        this.state.items.forEach(item => this.compareItems(item) ? items.push(item) : null)

        this.setState({ filteredItems: items, filtered: true })
    }

    compareItems = (item) => {
        if (item.categoryValue === this.state.categorySelectedValue
        && item.locationValue === this.state.locationSelectedValue) {
            return true;
        } else {
            return false;
        }
    }



    render() {

        const { items, filteredItems, filtered } = this.state;

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
                <View style = {styles.dropdownContainer}>
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
                        data = {location}
                        value = {this.state.locationSelectedValue}
                        label = 'Where item was found'
                        itemColor = 'blue'
                        useNativeDriver = {true}
                        onChangeText = {(value, data, index) => {
                            this.setLocationStateValue(value)
                        }}
                    />

                    <SearchItemButton
                        onPress = { this.searchItems }
                    />
                </View>

                <View style = {styles.flatListContainer}>

                    { filteredItems && (
                        <FlatList
                            data = { filteredItems }
                            renderItem = {({ item }) => (
                                <View style={styles.itemContainer}>
                                    <Text> { item.description } </Text>
                                    <Text> { item.email } </Text>
                                    <Image
                                        source = {{ uri: item.image_url }}
                                        style = {styles.image}
                                    />
                                </View>
                            )}
                            style = { styles.flatList }
                            keyExtractor = { item => item.email }
                        />
                    )}

                    { filteredItems.length === 0 && filtered && (
                        <Text> No items in the inventory match the item you are looking for! </Text>
                    )}
                </View>
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
        justifyContent: 'flex-start',
        alignItems: 'center',
    },
    dropdownContainer: {
        width: width / 1.2,
        marginHorizontal: 20,
        marginVertical: 5,
    },
    flatListContainer: {
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        width: width / 1.2,
    },
    flatList: {
        marginTop: 20,
    },
    itemContainer: {
        justifyContent: 'flex-start',
        alignItems: 'flex-start'
    },
    image: {
        width: width / 1.2,
        height: height / 5,
        marginBottom: 20
    }
})