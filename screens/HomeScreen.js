import React from 'react';
import { StyleSheet, FlatList, View } from 'react-native';
import { List, ListItem } from 'react-native-elements'

const hojas = [
    { id: 1, chofer: 'Maximiliano Bisurgi' },
    { id: 2, chofer: 'Jorge Perez' },
    { id: 3, chofer: 'Manolo Espinola' },
    { id: 4, chofer: 'Carlos Gutierrez' },
    { id: 5, chofer: 'Esteban Jauri' },
    { id: 6, chofer: 'Claudio Sabella' },
]

export default class HomeScreen extends React.Component {
    static navigationOptions = {
        title: 'Hojas de Ruta',
        headerBackTitle: null
    };

    onItemPress = (item) => {
        this.props.navigation.navigate('Tipo');
    };

    renderItem = ({ item }) => {
        return (
            <ListItem title={item.chofer} onPress={() => this.onItemPress(item)} />
        )
    };

    render() {
        return (
            <View style={styles.container}>
                <List containerStyle={{ marginTop: 0 }}>
                    <FlatList data={hojas} renderItem={this.renderItem} keyExtractor={item => item.id.toString()} />
                </List>
            </View>
        )
    };
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    }
});