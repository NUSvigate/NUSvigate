import React from 'react';
import { StyleSheet, SafeAreaView } from 'react-native';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunkMiddleware from 'redux-thunk';
import reducer from './reducers';
import AppNavigator from './navigation/AppNavigator';

const middleware = applyMiddleware(thunkMiddleware)
const store = createStore(reducer, middleware)
console.disableYellowBox = true;

export default function App() {
    return(
        <Provider store={store}>
            <AppNavigator />
        </Provider>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    }
});