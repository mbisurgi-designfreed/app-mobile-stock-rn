import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createStackNavigator } from 'react-navigation';
import { Provider } from 'react-redux'

import store from './redux/store/store';

import HomeScreen from './screens/HomeScreen';
import CargaScreen from './screens/CargaScreen';
import CargaDetalleScreen from './screens/CargaDetalleScreen';
import CargaEnvaseScreen from './screens/CargaEnvaseScreen';
import CargaFormScreen from './screens/CargaFormScreen';

export default class App extends React.Component {
    render() {
        return (
            <Provider store={store}>
                <AppStackNavigator />
            </Provider>
        );
    }
}

const AppStackNavigator = createStackNavigator({
    Home: {
        screen: HomeScreen
    },
    Tipo: {
        screen: CargaScreen
    },
    Detalle: {
        screen: CargaDetalleScreen
    },
    Envases: {
        screen: CargaEnvaseScreen
    },
    Form: {
        screen: CargaFormScreen
    }
})

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
