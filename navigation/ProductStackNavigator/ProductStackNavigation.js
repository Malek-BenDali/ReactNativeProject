import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import { Products} from '../../screens/Product'
import { Search, Header, Basket } from '../../shared'
import {
    Product,
    } from '../../screens/Home'
import { colors } from '../../constants';
import {HeaderRight} from '../../shared'


const Stack = createStackNavigator();

const HomeStackNavigator = (props) => {
    return (
        <Stack.Navigator
        >
            <Stack.Screen name="Product" component={Products} options={{
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
                name="ProductDetail" 
                component={Product} 
                options={ ({route}) => ({
                    title : route.params.item.title,
                    headerTitle : false,
                    headerStyle: {
                        backgroundColor: colors.red,
                      },
                    headerTintColor : colors.gold,
                    headerRight : ()=><HeaderRight {...props} />
                }) }   
            />
   
            
        
        </Stack.Navigator>
    )
}

export default HomeStackNavigator
