import React from 'react';
import { StyleSheet, View } from 'react-native';
import { FormLabel, FormInput, Button } from 'react-native-elements';
import { connect } from 'react-redux';

import { addItem } from '../redux/actions/cargas.actions';

const hojas = [
    { id: 1, chofer: 'Maximiliano Bisurgi' },
    { id: 2, chofer: 'Jorge Perez' },
    { id: 3, chofer: 'Manolo Espinola' },
    { id: 4, chofer: 'Carlos Gutierrez' },
    { id: 5, chofer: 'Esteban Jauri' },
    { id: 6, chofer: 'Claudio Sabella' },
]

class CargaFormScreen extends React.Component {
    state = {
        lleno: '0',
        vacio: '0',
        averiado: '0'
    };

    static navigationOptions = {
        title: 'Carga',
        headerBackTitle: null
    };

    onAgregarPress = () => {
        this.props.addItem(this.createItem());
        this.props.navigation.navigate('Detalle');
    };

    createItem = () => {
        const envase = this.props.navigation.getParam('envase');
        const item = {
            envase,
            lleno: isNaN(parseInt(this.state.lleno, 10)) ? 0 : parseInt(this.state.lleno, 10),
            vacio: isNaN(parseInt(this.state.vacio, 10)) ? 0 : parseInt(this.state.vacio, 10),
            averiado: isNaN(parseInt(this.state.averiado, 10)) ? 0 : parseInt(this.state.averiado, 10),
            retiro: 0,
            entrega: 0,
            cambio: 0
        };

        return item;
    };

    render() {
        return (
            <View style={styles.container}>
                <FormLabel labelStyle={styles.label}>Lleno</FormLabel>
                <FormInput onChangeText={(text) => this.setState({ lleno: text })} keyboardType='numeric' defaultValue={this.state.lleno} value={this.state.lleno} />
                <FormLabel labelStyle={styles.label}>Vacio</FormLabel>
                <FormInput onChangeText={(text) => this.setState({ vacio: text })} keyboardType='numeric' defaultValue={this.state.vacio} value={this.state.vacio} />
                <FormLabel labelStyle={styles.label}>Averiado</FormLabel>
                <FormInput onChangeText={(text) => this.setState({ averiado: text })} keyboardType='numeric' defaultValue={this.state.averiado} value={this.state.averiado} />
                <Button title='Agregar' containerViewStyle={{ marginTop: 20, width: '50%', alignSelf: 'center' }} backgroundColor='#0067AC' borderRadius={5} onPress={this.onAgregarPress} />
            </View>
        )
    };
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff'
    },
    label: {
        color: '#0067AC',
        fontWeight: 'bold'
    }
});

export default connect(null, { addItem })(CargaFormScreen);