import React, {Component} from "react";
import {
    Image,
    ImageStyle,
    ImageURISource,
    SafeAreaView,
    ScrollView,
    StyleSheet,
    Text,
    TextStyle, TouchableOpacity, TouchableOpacityComponent,
    View,
    ViewStyle
} from "react-native";
import Activities from "../components/Activities/Activities";
import SearchBox from "../components/SearchBox/SearchBox";
import Vendors from "../components/Vendors/Vendors";
import {User} from "./Profile";
import {CardSize} from "../components/Vendors/VendorCard";
import VendorMock from "../mocks/vendors.mock";

interface State {
    searchQuery: string;
    topRatedVendorCount: number;
}

export interface Activity {
    id: number;
    name: string;
    imageUriSource: ImageURISource
}

export default class Explore extends Component<User, State> {

    private referImgSrc: string = "http://www.themomcreative.com/wp-content/uploads/2015/05/oo5SJJsYIHfRNzK-X411UmqMQhzJbQDeSThzFVlh_Ij-WzswrlViaTmoiDtORCmur2B0LjBuaD_xlQiVG5zwvoH14K-bK5NLVC1mTBws0-d-e1-ft.jpg"

    constructor(props: User, state: State) {
        super(props);
        this.state = {} as State;
    }

    componentDidMount(): void {
        this.setState({
            searchQuery: "",
            topRatedVendorCount: 365
        });
    }

    onChangeText(text: string): void {
        this.setState(() => {
            text
        });
    }

    onTopVendorsClick(): void {

    }

    onNewVendorsClick(): void {

    }

    onReferralPress(): void {

    }

    openClasses(): void {

    }

    openDatePicker(): void {

    }

    render() {
        const firstName: string = this.props.firstName ? this.props.firstName : "Tiana";

        return (
            <SafeAreaView style={{flex: 1, marginBottom: 20}}>
                <View style={styles.searchContainer}>
                    <SearchBox text={this.state.searchQuery} onChangeText={this.onChangeText.bind(this)}/>
                </View>

                <ScrollView style={{flex: 1}}>
                    <View>
                        <Text style={styles.header}>
                            What can we help you find, {firstName}?
                        </Text>
                        <Activities/>
                    </View>

                    <View>
                        <Text style={styles.header}>
                            Top-Rated Studios & Gyms Nearby
                        </Text>
                        <Text style={styles.subHeader}>
                            Highly reviewed by locals and athletes worldwide
                        </Text>

                        <Vendors
                            containerHeight={500}
                            cardSize={CardSize.FULL}
                            vendors={VendorMock.getVendors()}
                            onButtonClick={this.onTopVendorsClick.bind(this)}
                            buttonText={`View ${this.state.topRatedVendorCount} more`}/>
                    </View>

                    <View>
                        <Text style={styles.header}>
                            Newest Studios
                        </Text>

                        <Vendors
                            cardSize={CardSize.HALF}
                            vendors={VendorMock.getNewVendors()}
                            onButtonClick={this.onNewVendorsClick.bind(this)}
                            buttonText={"See what else is new in town"}/>
                    </View>

                    <TouchableOpacity onPress={this.onReferralPress.bind(this)}>
                        <Image source={{uri: this.referImgSrc}} style={styles.referralImage}/>
                    </TouchableOpacity>
                </ScrollView>
            </SafeAreaView>
        );
    }
}

interface Style {
    header: TextStyle;
    subHeader: TextStyle;
    searchContainer: ViewStyle;
    referralImage: ImageStyle;
}

const styles = StyleSheet.create<Style>({
    header: {
        width: "80%",
        padding: 20,
        fontSize: 24,
        fontWeight: "700"
    },
    subHeader: {
        width: "80%",
        paddingHorizontal: 20,
        fontSize: 18,
        position: "relative",
        top: -20
    },
    searchContainer: {
        height: 60,
        backgroundColor: "white",
        borderBottomWidth: 1,
        borderBottomColor: "#DDDDDD"
    },
    referralImage: {
        marginTop: 20,
        marginHorizontal: 10,
        height: 200
    }
});
