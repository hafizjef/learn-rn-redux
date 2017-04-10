import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, Image, Text } from 'react-native';

class UserDetail extends Component {
    render() {
        if (!this.props.user) {
            return (
                <View>
                <Text>Select a user...</Text>
                </View>
            )
        }
        return (
            <View>
                <Image 
                    source={{ uri: this.props.user.thumbnail}}
                    style={{width: 50, height: 50}}
                 />
                <Text>{this.props.user.first} {this.props.user.last}</Text>
                <Text>Age: {this.props.user.age}</Text>
            </View>
        );
    }
}

function mapStateToProps(state) {
    return {
        user: state.activeUser
    };
}

export default connect(mapStateToProps)(UserDetail);
