import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import {
    Home,
    Search, 
    Product,
    Recipe} from '../../screens/Home'
import {Basket, Header} from '../../shared'


const Stack = createStackNavigator();

const HomeStackNavigator = (props) => {
    return (
        <Stack.Navigator
            initialRouteName='Home'
        >
            <Stack.Screen name="Home" component={Home} options={{
                header : ()=><Header {...props} />
            }} />


            <Stack.Screen 
                name="Search" 
                component={Search} 
            />
            <Stack.Screen 
                name="Basket" 
                component={Basket} 
            />

            <Stack.Screen 
                name="Product" 
                component={Product} 
                options={ ({route}) => ({
                    title : route.params.item.title,
                }) }
            />

            <Stack.Screen 
                name="Recipe" 
                component={Recipe} 
                options={ ({route}) => ({
                    title : route.params.item.title,
                    headerTitle : false,
                    headerTransparent : true,
                    headerTintColor : "#fff",
                }) }    
            />
            
             
            
        
        </Stack.Navigator>
    )
}

export default HomeStackNavigator
