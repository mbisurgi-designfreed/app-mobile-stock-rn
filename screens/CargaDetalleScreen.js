import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Icon, ListItem, Button } from 'react-native-elements'
import { connect } from 'react-redux';

import CustomList from '../components/CustomList';

class CargaDetalleScreen extends React.Component {
    static navigationOptions = ({ navigation }) => {
        return {
            title: `Detalle - ${navigation.getParam('tipo').sigla}`,
            headerBackTitle: null,
            headerRight: (
                <Icon name='ios-checkmark-circle-outline' type='ionicon' color='#0067AC' size={26} containerStyle={{ marginRight: 20 }} onPress={() => console.log('hello')} />
            )
        };
    };

    onAgregarPress = () => {
        this.props.navigation.navigate('Envases');
    };

    onItemPress = (item) => {
        console.log(item);
    };

    renderItem = ({ item }) => (
        <ListItem hideChevron title={
            <View>
                <View>
                    <Text style={styles.title}>{item.envase.envaseNombre}</Text>
                </View>
                <View style={styles.list}>
                    <Text style={styles.label}>Lleno: <Text style={styles.amount}>{item.lleno}</Text></Text>
                    <Text style={styles.label}>Vacio: <Text style={styles.amount}>{item.vacio}</Text></Text>
                    <Text style={styles.label}>Averiado: <Text style={styles.amount}>{item.averiado}</Text></Text>
                </View>
            </View>
        } onPress={() => this.onItemPress(item)}
        />
    );

    render() {
        return (
            <View style={styles.container}>
                <CustomList data={this.props.carga.items} extraData={this.props.carga} renderItem={this.renderItem} keyExtractor={item => item.envase.id.toString()} />
                <Button icon={{ name: 'ios-add-circle-outline', type: 'ionicon', size: 26 }} containerViewStyle={{ marginBottom: 20 }} backgroundColor='#0067AC' borderRadius={5} onPress={this.onAgregarPress} />
            </View>
        )
    };
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        justifyContent: 'space-between'
    },
    title: {
        fontWeight: 'bold'
    },
    list: {
        flex: 1,
        flexDirection: 'row',
        backgroundColor: '#fff',
        paddingLeft: 10,
        marginTop: 5
    },
    label: {
        flex: 1,
        fontSize: 12,
        color: '#0067AC',
        fontWeight: 'bold',
        marginRight: 15,
    },
    amount: {
        color: '#2f3640',
        fontWeight: 'normal',
    }
});

const mapStateToProps = (state) => ({ carga: state.carga });

export default connect(mapStateToProps)(CargaDetalleScreen);