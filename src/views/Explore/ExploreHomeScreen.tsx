import React, {Component} from "react";
import {
    Image,
    ImageStyle,
    ImageURISource,
    ScrollView,
    StyleSheet,
    Text,
    TextStyle,
    TouchableOpacity,
    View,
    ViewStyle
} from "react-native";
import Activities from "../../components/Activities/Activities";
import Vendors from "../../components/Vendors/Vendors";
import {CardSize} from "../../components/Vendors/VendorCard";
import VendorMock from "../../mocks/vendors.mock";
import {User} from "../Profile";
import {ExplorePage, ExploreProps} from "./Explore";

interface State {
    user: User;
    searchQuery: string;
    topRatedVendorCount: number;
}

export interface Activity {
    id: number;
    name: string;
    imageUriSource: ImageURISource
}

export default class ExploreHomeScreen extends Component<ExploreProps, State> {

    private referImgSrc: string = "http://www.themomcreative.com/wp-content/uploads/2015/05/oo5SJJsYIHfRNzK-X411UmqMQhzJbQDeSThzFVlh_Ij-WzswrlViaTmoiDtORCmur2B0LjBuaD_xlQiVG5zwvoH14K-bK5NLVC1mTBws0-d-e1-ft.jpg"

    constructor(props: ExploreProps, state: State) {
        super(props);
        this.state = {
            user: {
                firstName: "Tiana"
            },
            searchQuery: "",
            topRatedVendorCount: 365
        };
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

    navigateTo(page: ExplorePage): ()=> void {
        return () => {
            this.props.navigateTo(page);
        }
    }

    render() {

        return (
            <ScrollView style={{flex: 1}}>
                <View>
                    <Text style={styles.header}>
                        What can we help you find, {this.state.user.firstName}?
                    </Text>
                    <Activities onPress={this.navigateTo(ExplorePage.ACTIVITY)}/>
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
                        onCardPress={this.navigateTo(ExplorePage.VENDOR)}
                        onButtonPress={this.navigateTo(ExplorePage.VENDOR)}
                        buttonText={`View ${this.state.topRatedVendorCount} more`}/>
                </View>

                <View>
                    <Text style={styles.header}>
                        Newest Studios
                    </Text>

                    <Vendors
                        cardSize={CardSize.HALF}
                        vendors={VendorMock.getNewVendors()}
                        onCardPress={this.navigateTo(ExplorePage.VENDOR)}
                        onButtonPress={this.onNewVendorsClick.bind(this)}
                        buttonText={"See what else is new in town"}/>
                </View>

                <TouchableOpacity onPress={this.onReferralPress.bind(this)}>
                    <Image source={{uri: this.referImgSrc}} style={styles.referralImage}/>
                </TouchableOpacity>
            </ScrollView>
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
