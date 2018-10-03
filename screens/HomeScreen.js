import React from 'react';
import { StyleSheet, View } from 'react-native';
import { ListItem } from 'react-native-elements'
import moment from 'moment';
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
        const date = moment(new Date()).hour(0).minute(0).second(0).millisecond(0).valueOf();

        axios.get(`http://bybgas.dyndns.org:8080/distribuidoras-backend/hojaRuta/findByFecha/${date}`)
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