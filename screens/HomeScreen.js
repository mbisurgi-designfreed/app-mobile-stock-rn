import React from 'react';
import { StyleSheet, FlatList, View, ActivityIndicator } from 'react-native';
import { List, ListItem } from 'react-native-elements'
import axios from 'axios';

const hojas = [
    { id: 1, chofer: 'Maximiliano Bisurgi' },
    { id: 2, chofer: 'Jorge Perez' },
    { id: 3, chofer: 'Manolo Espinola' },
    { id: 4, chofer: 'Carlos Gutierrez' },
    { id: 5, chofer: 'Esteban Jauri' },
    { id: 6, chofer: 'Claudio Sabella' }
]

export default class HomeScreen extends React.Component {
    state = {
        hojas: [],
        loading: true
    }

    static navigationOptions = {
        title: 'Hojas de Ruta',
        headerBackTitle: null
    };

    componentDidMount() {
        axios.get('http://bybgas.dyndns.org:8080/distribuidoras-backend/hojaRuta/findByFecha/1538449200000')
            .then((res) => {
                this.setState({ hojas: res.data, loading: false });
            });
    };

    isLoading = (loading) => {
        if (loading) {
            return (
                <View style={styles.spinner}>
                    <ActivityIndicator size="large" color="#0067AC" />
                </View>
            )
        }
    };

    onItemPress = (item) => {
        this.props.navigation.navigate('Tipo', { hoja: item });
    };

    renderItem = ({ item }) => {
        return (
            <ListItem title={`${item.chofer.apellido}, ${item.chofer.nombre}`} onPress={() => this.onItemPress(item)} />
        )
    };

    render() {
        return (
            <View style={styles.container}>
                <List containerStyle={{ marginTop: 0 }}>
                    <FlatList data={this.state.hojas} renderItem={this.renderItem} keyExtractor={item => item.id.toString()} />
                </List>
                {this.isLoading(this.state.loading)}
            </View>
        )
    };
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff'
    },
    spinner: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        opacity: 0.5,
        backgroundColor: 'black',
        justifyContent: 'center',
        alignItems: 'center'
    }
});