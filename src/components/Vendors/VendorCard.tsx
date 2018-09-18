import React, {Component} from "react";
import {Vendor} from "./Vendors";
import {Dimensions, Image, ImageStyle, StyleSheet, Text, TouchableOpacity, View, ViewStyle} from "react-native";
import StarRating from "react-native-star-rating";
import {Card, CardItem} from "native-base";

interface Props {
    vendor: Vendor;
    cardSize: CardSize;
    onPress: () => void;
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
            <TouchableOpacity style={[styles.vendorCard, cardStyle]} onPress={this.props.onPress}>
                <CardItem cardBody>
                    <Image source={this.props.vendor.imageUriSource} style={styles.vendorImage}/>
                </CardItem>
                <CardItem footer style={styles.vendorCardDetails}>
                    <Text numberOfLines={1} style={{paddingBottom: 3}}>{this.props.vendor.name}</Text>
                    <Text numberOfLines={1} style={{paddingBottom: 3}}>{this.props.vendor.city}</Text>
                    <StarRating
                        maxStars={5}
                        starSize={10}
                        disabled={true}
                        rating={this.props.vendor.rating}
                        containerStyle={{paddingBottom: 3}}/>
                </CardItem>
            </TouchableOpacity>
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
        flex: 1,
        height: 100,
        resizeMode: "cover"
    },
    vendorCardDetails: {
        flexDirection: "column",
        alignItems: "flex-start"
    }
});

