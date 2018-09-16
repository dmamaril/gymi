import React, {Component} from "react";
import {SafeAreaView, ScrollView, StyleSheet, ViewStyle} from "react-native";
import VendorMock from "../mocks/vendors.mock";
import {Vendor} from "../components/Vendors/Vendors";
import VendorCard from "../components/Vendors/VendorCard";

export default class Favorites extends Component {

    render() {

        const vendorCards = VendorMock.getVendors().map((vendor: Vendor) => (
            <VendorCard vendor={vendor} width={"100%"} key={vendor.id}/>
        ));

        return (
            <SafeAreaView style={{flex: 1}}>
                <ScrollView contentContainerStyle={styles.scrollContainer}>
                    {vendorCards}
                </ScrollView>
            </SafeAreaView>
        );
    }
}

interface Style {
    scrollContainer: ViewStyle;
}

const styles = StyleSheet.create<Style>({
    scrollContainer: {
        flexGrow: 1,
        justifyContent: "space-between"
    }
});