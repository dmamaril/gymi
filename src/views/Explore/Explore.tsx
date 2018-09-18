import React, {Component} from "react";
import {ImageStyle, ImageURISource, SafeAreaView, StyleSheet, TextStyle, View, ViewStyle} from "react-native";
import SearchBox from "../../components/SearchBox/SearchBox";
import {User} from "../Profile";
import ExploreHomeScreen from "./ExploreHomeScreen";
import ExploreVendorScreen from "./ExploreVendorScreen";
import ExploreActivityScreen from "./ExploreActivityScreen";

interface State {
    navigationStack: ExplorePage[];
    currentPage: ExplorePage;
    query: string;
}

export enum ExplorePage {
    HOME,
    VENDOR,
    ACTIVITY
}

export interface ExploreProps {
    navigateTo: (path: ExplorePage) => void;
}

export default class Explore extends Component<void, State> {

    private referImgSrc: string = "http://www.themomcreative.com/wp-content/uploads/2015/05/oo5SJJsYIHfRNzK-X411UmqMQhzJbQDeSThzFVlh_Ij-WzswrlViaTmoiDtORCmur2B0LjBuaD_xlQiVG5zwvoH14K-bK5NLVC1mTBws0-d-e1-ft.jpg"

    constructor(props: void, state: State) {
        super(props);
        this.state = {
            navigationStack: [],
            currentPage: ExplorePage.HOME,
            query: "",
        };
    }

    onSearch(query: string): void {
        this.setState({
            query
        });
    }

    navigateBack(): void {
        this.state.navigationStack.pop();
        this.setState({
            navigationStack: this.state.navigationStack,
            currentPage: this.state.navigationStack[this.state.navigationStack.length -1]
        });
    }

    onNavigate(currentPage: ExplorePage): void {
        this.state.navigationStack.push(currentPage);
        this.setState({
            currentPage,
            navigationStack: this.state.navigationStack
        });
    }

    renderView(page?: ExplorePage): JSX.Element {
        switch (this.state.currentPage) {
            case(ExplorePage.VENDOR):
                return (<ExploreVendorScreen navigateTo={this.onNavigate.bind(this)}/>);
            case(ExplorePage.ACTIVITY):
                return (<ExploreActivityScreen navigateTo={this.onNavigate.bind(this)}/>);
            default:
                return (<ExploreHomeScreen navigateTo={this.onNavigate.bind(this)}/>)
        }
    }

    render() {
        const navStackLen: number = this.state.navigationStack.length;
        const icon = navStackLen ? "ios-arrow-back" : "ios-search";
        const onIconPress = navStackLen ? this.navigateBack : this.onSearch;

        const view: JSX.Element = this.renderView();

        return (
            <SafeAreaView style={{flex: 1, marginBottom: 20}}>
                <View style={styles.searchContainer}>
                    <SearchBox
                        icon={icon}
                        value={this.state.query}
                        onIconPress={onIconPress.bind(this)}
                        onSubmit={this.onSearch.bind(this)}/>
                </View>

                {view}
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
