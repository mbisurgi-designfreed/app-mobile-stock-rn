import React from 'react';
import { FlatList } from 'react-native';
import { List } from 'react-native-elements';

export default CustomList = ({ data, extraData, renderItem, keyExtractor }) => (
    <List containerStyle={{ marginTop: 0 }}>
        <FlatList data={data} extraData={extraData ? extraData : undefined} renderItem={renderItem} keyExtractor={keyExtractor} />
    </List>
);
