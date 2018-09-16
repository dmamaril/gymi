import React from "react";
import Explore from "./src/views/Explore";
import Favorites from "./src/views/Favorites";
import Profile from "./src/views/Profile";
import Offers from "./src/views/Offers";
import {createBottomTabNavigator} from "react-navigation";
import Icon from "react-native-vector-icons/Ionicons";

export default createBottomTabNavigator({
    Explore: {
        screen: Explore,
        navigationOptions: {
            tabBarLabel: "EXPLORE",
            tabBarIcon: (options: {tintColor: string}) => (
                <Icon name="ios-search" color={options.tintColor} size={24}/>
            )
        },
        screenProps: {
            firstName: "Don"
        }
    },
    Profile: {
        screen: Profile,
        navigationOptions: {
            tabBarLabel: "PROFILE",
            tabBarIcon: (options: {tintColor: string}) => (
                <Icon name="ios-contact" color={options.tintColor} size={24}/>
            )
        }
    },
    Favorites: {
        screen: Favorites,
        navigationOptions: {
            tabBarLabel: "FAVORITES",
            tabBarIcon: (options: {tintColor: string}) => (
                <Icon name="ios-heart" color={options.tintColor} size={24}/>
            )
        }
    },
    Offers: {
        screen: Offers,
        navigationOptions: {
            tabBarLabel: "OFFERS",
            tabBarIcon: (options: {tintColor: string}) => (
                <Icon name="ios-bookmark" color={options.tintColor} size={24}/>
            )
        }
    }
});
