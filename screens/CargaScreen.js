import React from 'react';
import { StyleSheet, View, ActivityIndicator } from 'react-native';
import { ListItem } from 'react-native-elements'
import { connect } from 'react-redux';

import CustomList from '../components/CustomList';
import Spinner from '../components/Spinner';

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
                <Spinner />
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

    renderItem = ({ item }) => (
        <ListItem title={item.sigla} onPress={() => this.onItemPress(item)} />
    );

    render() {
        return (
            <View style={styles.container}>
                <CustomList data={TIPOS} renderItem={this.renderItem} keyExtractor={item => item.id.toString()} />
                {this.isLoading(this.props.loading)}
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

const mapStateToProps = (state) => ({ loading: state.cargas.loading, cargas: state.cargas.cargas });

export default connect(mapStateToProps, { list, add, select })(CargaScreen);