import React from 'react';
import { StyleSheet, View } from 'react-native';
import { FormLabel, FormInput, Button } from 'react-native-elements';
import { connect } from 'react-redux';

import { addItem, editItem } from '../redux/actions/cargas.actions';

class CargaFormScreen extends React.Component {
    state = {
        lleno: '0',
        vacio: '0',
        averiado: '0',
        retiro: '0',
        entrega: '0',
        cambio: '0'
    };

    static navigationOptions = {
        title: 'Carga',
        headerBackTitle: null
    };

    componentDidMount() {
        const item = this.props.navigation.getParam('item', null);

        if (item) {
            this.setState({ lleno: item.lleno.toString(), vacio: item.vacio.toString(), averiado: item.averiado.toString() });
        }
    };

    onAgregarPress = () => {
        const item = this.props.navigation.getParam('item', null);

        if (item) {
            this.props.editItem(this.createItem(item));
        } else {
            this.props.addItem(this.createItem());
        }

        this.props.navigation.navigate('Detalle');
    };

    createItem = (item = null) => {
        const envase = this.props.navigation.getParam('envase');

        if (item) {
            item.lleno = isNaN(parseInt(this.state.lleno, 10)) ? 0 : parseInt(this.state.lleno, 10);
            item.vacio = isNaN(parseInt(this.state.vacio, 10)) ? 0 : parseInt(this.state.vacio, 10);
            item.averiado = isNaN(parseInt(this.state.averiado, 10)) ? 0 : parseInt(this.state.averiado, 10);
            item.retiro = isNaN(parseInt(this.state.retiro, 10)) ? 0 : parseInt(this.state.retiro, 10);
            item.entrega = isNaN(parseInt(this.state.entrega, 10)) ? 0 : parseInt(this.state.entrega, 10);
            item.cambio = isNaN(parseInt(this.state.cambio, 10)) ? 0 : parseInt(this.state.cambio, 10);
        } else {
            item = {
                envase,
                lleno: isNaN(parseInt(this.state.lleno, 10)) ? 0 : parseInt(this.state.lleno, 10),
                vacio: isNaN(parseInt(this.state.vacio, 10)) ? 0 : parseInt(this.state.vacio, 10),
                averiado: isNaN(parseInt(this.state.averiado, 10)) ? 0 : parseInt(this.state.averiado, 10),
                retiro: isNaN(parseInt(this.state.retiro, 10)) ? 0 : parseInt(this.state.retiro, 10),
                entrega: isNaN(parseInt(this.state.entrega, 10)) ? 0 : parseInt(this.state.entrega, 10),
                cambio: isNaN(parseInt(this.state.cambio, 10)) ? 0 : parseInt(this.state.cambio, 10)
            };
        }

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
                <FormLabel labelStyle={styles.label}>Retiro</FormLabel>
                <FormInput onChangeText={(text) => this.setState({ retiro: text })} keyboardType='numeric' defaultValue={this.state.retiro} value={this.state.retiro} />
                <FormLabel labelStyle={styles.label}>Entrega</FormLabel>
                <FormInput onChangeText={(text) => this.setState({ entrega: text })} keyboardType='numeric' defaultValue={this.state.entrega} value={this.state.entrega} />
                <FormLabel labelStyle={styles.label}>Cambio</FormLabel>
                <FormInput onChangeText={(text) => this.setState({ cambio: text })} keyboardType='numeric' defaultValue={this.state.cambio} value={this.state.cambio} />
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

export default connect(null, { addItem, editItem })(CargaFormScreen);