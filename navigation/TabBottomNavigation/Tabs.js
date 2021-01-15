import React from 'react'
import {Image, StyleSheet} from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {Home, Products} from '../../screens/'

import HomeStackNavigator from '../HomeStackNavigation/HomeStackNavigator'
import ProductStackNavigator from '../ProductStackNavigator/ProductStackNavigation'
import {icons, colors} from '../../constants'
import TabBarCustomButton from './TabBarCustomButton'

const Tab = createBottomTabNavigator();

const Tabs = () => {
    return (
        <Tab.Navigator
            tabBarOptions={{
                showLabel: false
            }}
        >
            <Tab.Screen 
                name="Home" 
                component={HomeStackNavigator} 
                options={{
                    tabBarIcon : ({focused}) => (
                        <Image
                            source={icons.home}
                            resizeMode="contain"
                            style={focused ? styles.TabIconFocused : styles.TabIcon}
                        />
                    ),
                    tabBarButton : props =>(
                        <TabBarCustomButton 
                            {...props}
                        />
                    )
                }}
            />
            <Tab.Screen 
            name="Chef" 
            component={ProductStackNavigator}
            options={{
                tabBarIcon : ({focused}) => (
                    <Image
                        source={icons.chef}
                        resizeMode="contain"
                        style={focused ? styles.TabIconFocused : styles.TabIcon}
                    />
                ),
                tabBarButton : props =>(
                    <TabBarCustomButton 
                        {...props}
                    />
                )
            }} 
            />
            <Tab.Screen 
            name="Book" 
            component={ProductStackNavigator}
            options={{
                tabBarIcon : ({focused}) => (
                    <Image
                        source={icons.book}
                        resizeMode="contain"
                        style={focused ? styles.TabIconFocused : styles.TabIcon}
                    />
                ),
                tabBarButton : props =>(
                    <TabBarCustomButton 
                        {...props}
                    />
                )
            }} 
            />
        </Tab.Navigator>
    )
}

export default Tabs

const styles = StyleSheet.create({
    TabIconFocused : {
        width : 25,
        height : 25,
        tintColor: colors.primary
    },
    TabIcon : {
        width : 25,
        height : 25,
        tintColor: colors.gray
    }
})
