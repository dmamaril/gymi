import React, {Component} from "react";
import {Text} from "react-native";
import {Container} from "native-base";
import {ExploreProps} from "./Explore";

export default class ExploreActivityScreen extends Component<ExploreProps> {

    render() {
        return (
            <Container>
                <Text>Activities!</Text>
            </Container>
        );
    }
}
