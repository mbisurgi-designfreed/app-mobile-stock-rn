import React from 'react';
import { StyleSheet, FlatList, View } from 'react-native';
import { List, ListItem } from 'react-native-elements'

const TIPOS = [
    { id: 1, sigla: 'CI' },
    { id: 2, sigla: 'REP' },
    { id: 3, sigla: 'REN1' },
    { id: 4, sigla: 'REN2' },
]

export default class CargaScreen extends React.Component {
    static navigationOptions = {
        title: 'Tipo de Cargas',
        headerBackTitle: null
    };

    onItemPress = (item) => {
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
            </View>
        )
    };
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff'
    },
});