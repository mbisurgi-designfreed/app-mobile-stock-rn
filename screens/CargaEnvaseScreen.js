import React from 'react';
import { StyleSheet, FlatList, View } from 'react-native';
import { List, ListItem } from 'react-native-elements'

const ENVASES = [
    { id: 1, envaseNombre: 'Garrafa 10kg' },
    { id: 2, envaseNombre: 'Garrafa 10kg CTR' },
    { id: 3, envaseNombre: 'Garrafa 15kg' },
    { id: 4, envaseNombre: 'Garrafa 15kg ME' },
    { id: 5, envaseNombre: 'Garrafa 30kg' },
    { id: 6, envaseNombre: 'Garrafa 45kg' },
]

export default class CargaEnvaseScreen extends React.Component {
    static navigationOptions = {
        title: 'Envases',
        headerBackTitle: null
    };

    onItemPress = (item) => {
        this.props.navigation.navigate('Form', { envase: item });
    };

    renderItem = ({ item }) => {
        return (
            <ListItem title={item.envaseNombre} onPress={() => this.onItemPress(item)} />
        )
    };

    render() {
        return (
            <View style={styles.container}>
                <List containerStyle={{ marginTop: 0 }}>
                    <FlatList data={ENVASES} renderItem={this.renderItem} keyExtractor={item => item.id.toString()} />
                </List>
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