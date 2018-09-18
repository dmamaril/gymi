import {ImageStyle, Platform, StyleSheet, TextInput, TextStyle, View, ViewStyle} from "react-native";
import React, {Component} from "react";
import Icon from "react-native-vector-icons/Ionicons";

interface Props {
    icon: string;
    value: string;
    onIconPress?: () => void;
    onSubmit: (text: string) => void;
}

export default class SearchBox extends Component<Props> {

    constructor(props: Props) {
        super(props);
    }

    render() {
        return (
            <View style={styles.searchBox}>
                <Icon name={this.props.icon} onPress={this.props.onIconPress} size={20} style={{marginRight: 10}}/>
                <TextInput
                    placeholder={`Try "Tel Aviv"`}
                    placeholderTextColor="grey"
                    style={styles.textInput}
                    value={this.props.value}
                    onChangeText={this.props.onSubmit}/>
            </View>
        );
    }
}

interface Style {
    textInput: TextStyle;
    searchBox: ViewStyle;
}

const styles = StyleSheet.create<Style>({
    textInput: {
        flex: 1,
        fontWeight: "700",
        backgroundColor: "white"
    },
    searchBox: {
        flexDirection: "row",
        padding: 10,
        backgroundColor: "white",
        marginHorizontal: 20,
        shadowOffset: {
            width: 0,
            height: 0
        },
        shadowOpacity: 0.2,
        elevation: 1,
        marginTop: (Platform.OS === 'android' ? 30 : 0)
    }
});
