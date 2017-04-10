import React from 'react';
import UserList from '../containers/user-list';
import UserDetails from '../containers/user-detail';
import { View, Text, TextInput } from 'react-native';

function handleClick(event) {
    console.log(event.text)
}

const App = () => (
    <View>
        <View>
            <Text>User List</Text>
            <TextInput 
                style={{height: 40, borderColor: 'gray', borderWidth: 1}}
                onChangeText={(text) => handleClick({text})}
            />
            <UserList />
        </View>
        <View>
            <UserDetails />
        </View>
    </View>
);

export default App;
