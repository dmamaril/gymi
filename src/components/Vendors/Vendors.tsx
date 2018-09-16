import React, {Component} from "react";
import {
    Dimensions,
    ImageURISource,
    ScrollView,
    StyleSheet,
    Text,
    TouchableHighlight,
    View,
    ViewStyle
} from "react-native";
import VendorMock from "../../mocks/vendors.mock";
import VendorCard, {CardSize} from "./VendorCard";

export interface Vendor {
    id: number;
    name: string;
    imageUriSource: ImageURISource;
    rating?: number;
    city: string;
    activities?: string[]
}

interface Props {
    onButtonClick?: () => void;
    buttonText?: string
    cardSize: CardSize;
    containerHeight?: number | string;
    vendors: Vendor[]
}

export default class Vendors extends Component<Props> {

    constructor(props: Props) {
        super(props);
    }

    render() {
        const vendorCards = this.props.vendors.map((vendor: Vendor) => (
            <VendorCard vendor={vendor} cardSize={this.props.cardSize} key={vendor.id}/>
        ));

        let button = null;

        if (this.props.buttonText && this.props.onButtonClick) {
            button = (
                <TouchableHighlight onPress={this.props.onButtonClick} style={styles.centerButton}>
                    <Text>{this.props.buttonText}</Text>
                </TouchableHighlight>
            );
        }

        return (
            <View style={{flex: 1, height: this.props.containerHeight || "100%"}}>
                <ScrollView contentContainerStyle={styles.container} showsVerticalScrollIndicator={false}>
                    {vendorCards}
                </ScrollView>

                {button}
            </View>
        );
    }
}

interface Style {
    container: ViewStyle;
    centerButton: ViewStyle;
}

const styles = StyleSheet.create<Style>({
    container: {
        flexGrow: 1,
        flexDirection: "row",
        margin: 10,
        alignItems: "flex-start",
        flexWrap: "wrap",
        justifyContent: "space-between"
    },
    centerButton: {
        alignSelf: "center",
        marginTop: 10,
        paddingHorizontal: 25,
        paddingVertical: 10,
        borderWidth: 0.5,
        borderColor: "#DDDDDD",
        borderRadius: 10
    }
});
