import React, {Component} from "react";
import {Vendor} from "./Vendors";
import {Dimensions, Image, ImageStyle, StyleSheet, Text, View, ViewStyle} from "react-native";
import StarRating from "react-native-star-rating";

interface Props {
    vendor: Vendor;
    cardSize: CardSize;
}

export enum CardSize {
    HALF,
    FULL
}

export default class VendorCard extends Component<Props> {

    constructor(props: Props) {
        super(props);
    }

    render() {

        const cardStyle: ViewStyle = this.props.cardSize === CardSize.HALF ? styles.vendorHalf : styles.vendorFull;

        return (
            <View style={[styles.vendorCard, cardStyle]}>
                <Image source={this.props.vendor.imageUriSource} style={styles.vendorImage}/>
                <View style={styles.vendorCardDetails}>
                    <Text numberOfLines={1} style={{paddingBottom: 3}}>{this.props.vendor.name}</Text>
                    <Text numberOfLines={1} style={{paddingBottom: 3}}>{this.props.vendor.city}</Text>
                    <StarRating
                        maxStars={5}
                        starSize={10}
                        disabled={true}
                        rating={this.props.vendor.rating}
                        containerStyle={{paddingBottom: 3}}/>
                </View>
            </View>
        );
    }
}


interface Style {
    vendorCard: ViewStyle;
    vendorImage: ImageStyle;
    vendorCardDetails: ViewStyle;
    vendorHalf: ViewStyle;
    vendorFull: ViewStyle;
}

const styles = StyleSheet.create<Style>({
    vendorCard: {
        borderColor: "#DDDDDD",
        borderWidth: 1,
        marginVertical: 10
    },
    vendorHalf: {
        width: Dimensions.get("window").width / 2 - 25
    },
    vendorFull: {
        width: "100%"
    },
    vendorImage: {
        height: 100,
        resizeMode: "cover"
    },
    vendorCardDetails: {
        margin: 5,
        justifyContent: "space-between",
        alignItems: "flex-start"
    }
});

