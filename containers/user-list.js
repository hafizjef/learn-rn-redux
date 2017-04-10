import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { selectUser } from '../actions/index';
import { View, TouchableHighlight, Text } from 'react-native';

const UserList = (props) => ({
    renderList() {
        return props.users.map((user) => {
            return (
                <View key={user.id}>
                    <TouchableHighlight onPress={() => props.selectUser(user)}>
                        <Text>{user.first} {user.last}</Text>
                    </TouchableHighlight>
                </View>
            )
        })
    },
    render() {
        return (
            <View>
                {this.renderList()}
            </View>
        )
    }
})

function mapStateToProps(state) {
    return {
        users: state.users
    };
}

function matchDispatchToProps(dispatch) {
    return bindActionCreators({selectUser: selectUser}, dispatch)
}

export default connect(mapStateToProps, matchDispatchToProps)(UserList);