import React, {Component} from "react";
import {Image, ImageSourcePropType, ScrollView, StyleSheet, Text, TouchableHighlight, ViewStyle} from "react-native";

interface Props {
    items: MultiSelectItem[]
}

export interface MultiSelectItem {
    name: string;
    imgSrc?: string;
}

export default class MultiSelect extends Component<Props> {

    onPress(): void {
        console.log('clicked');
    }

    constructor(props: Props) {
        super(props);
    }

    render() {

        const selections = this.props.items.map((item: MultiSelectItem) => {
            return (
                <TouchableHighlight key={item.name} style={styles.item}>
                    <Text style={{fontSize: 20}}>{item.name}</Text>
                </TouchableHighlight>
            );
        });

        return (
            <ScrollView contentContainerStyle={styles.container}>
                {selections}
            </ScrollView>
        );
    }
}

interface Style {
    container: ViewStyle,
    item: ViewStyle
}

const styles = StyleSheet.create<Style>({
    container: {
        alignItems: "center",
        backgroundColor: "yellow",
        width: "60%",
        marginLeft: "auto",
        marginRight: "auto",
        borderRadius: 1
    },
    item: {
        margin: 10,
    }
});