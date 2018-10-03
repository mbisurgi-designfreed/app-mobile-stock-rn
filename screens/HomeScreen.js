import React from 'react';
import { StyleSheet, View, ActivityIndicator } from 'react-native';
import { ListItem } from 'react-native-elements'
import axios from 'axios';

import CustomList from '../components/CustomList';
import Spinner from '../components/Spinner';

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
                <Spinner />
            )
        }
    };

    onItemPress = (item) => {
        this.props.navigation.navigate('Tipo', { hoja: item });
    };

    renderItem = ({ item }) => (
        <ListItem title={`${item.chofer.apellido}, ${item.chofer.nombre}`} onPress={() => this.onItemPress(item)} />
    );

    render() {
        return (
            <View style={styles.container}>
                <CustomList data={this.state.hojas} renderItem={this.renderItem} keyExtractor={item => item.id.toString()} />
                {this.isLoading(this.state.loading)}
            </View>
        )
    };
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff'
    }
});