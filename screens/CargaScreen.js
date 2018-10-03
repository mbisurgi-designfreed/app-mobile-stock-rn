import React from 'react';
import { StyleSheet, FlatList, View, ActivityIndicator } from 'react-native';
import { List, ListItem } from 'react-native-elements'
import { connect } from 'react-redux';

import { list, add, select } from '../redux/actions/cargas.actions';

const TIPOS = [
    { id: 1, sigla: 'CI' },
    { id: 2, sigla: 'REP' },
    { id: 3, sigla: 'REN1' },
    { id: 4, sigla: 'REN2' },
]

class CargaScreen extends React.Component {
    static navigationOptions = {
        title: 'Tipo de Cargas',
        headerBackTitle: null
    };

    componentDidMount() {
        const hojaId = this.props.navigation.getParam('hoja').id;
        this.props.list(hojaId);
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
        const hoja = this.props.navigation.getParam('hoja');
        const carga = this.props.cargas.find((carga) => carga.tipo.id === item.id);

        if (carga) {
            this.props.select(carga);
        } else {
            this.props.add(item, hoja);
        }

        this.props.navigation.navigate('Detalle', { tipo: item });
    };

    renderItem = ({ item }) => {
        return (
            <ListItem title={item.sigla} onPress={() => this.onItemPress(item)} />
        )
    };

    render() {
        return (
            <View style={styles.container}>
                <List containerStyle={{ marginTop: 0 }}>
                    <FlatList data={TIPOS} renderItem={this.renderItem} keyExtractor={item => item.id.toString()} />
                </List>
                {this.isLoading(this.props.loading)}
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

const mapStateToProps = (state) => ({ loading: state.cargas.loading, cargas: state.cargas.cargas });

export default connect(mapStateToProps, { list, add, select })(CargaScreen);