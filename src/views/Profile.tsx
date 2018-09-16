import React, {Component} from "react";
import {Text, View} from "react-native";

export interface User {
    firstName: string;
    lastName?: string;
}

export default class Profile extends Component {

    render() {
        return (
            <View style={{flex: 1}}>
                <Text>Profile</Text>
            </View>
        );
    }
}
