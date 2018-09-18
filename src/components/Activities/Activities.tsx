import {Image, ImageStyle, ScrollView, StyleSheet, Text, TouchableOpacity, View, ViewStyle} from "react-native";
import React, {Component} from "react";
import ActivityMock from "../../mocks/activities.mock";
import {Button} from "native-base";

interface Props {
    onPress: () => void;
}

export default class Activities extends Component<Props> {

    render() {
        const activities = ActivityMock.getActivities().map((activity) => (
            <TouchableOpacity onPress={this.props.onPress} style={styles.activity} key={activity.id}>
                <Image source={activity.imageUriSource} style={styles.activityImage}/>
                <Text style={{paddingLeft: 5, paddingTop: 5}}>{activity.name}</Text>
            </TouchableOpacity>
        ));

        return (
            <ScrollView
                horizontal={true}
                style={styles.container}
                showsHorizontalScrollIndicator={false}>
                {activities}
            </ScrollView>
        );
    }
}

interface Style {
    container: ViewStyle,
    activity: ViewStyle,
    activityImage: ImageStyle
}

const styles = StyleSheet.create<Style>({
    container: {
        flex: 1,
        height: 120,
        marginHorizontal: 10
    },
    activity: {
        borderColor: "#DDDDDD",
        borderWidth: 1,
        margin: 5,
        width: 150
    },
    activityImage: {
        height: 70,
        width: "100%"
    }
});
