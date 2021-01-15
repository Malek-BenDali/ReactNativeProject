import React from 'react'
import { SafeAreaView, StyleSheet } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import { colors } from '../../constants'
import SearchBar from '../../shared/SearchBar'
import {
    TopProduct,
    TopRecipies
} from './components'

const Home = (props) => {
    return (
        <SafeAreaView style={styles.container} >
            <ScrollView>
                <SearchBar 
                    {...props}
                />
                <TopProduct 
                    {...props}
                />
                <TopRecipies 
                    {...props}
                />

            </ScrollView>
        </SafeAreaView>
    )
}

export default Home

const styles = StyleSheet.create({
    container : {
        flex: 1,
        backgroundColor : colors.white,
    },
    shadow: {
        shadowColor: "#000",
        shadowOffset : {
            width : 0,
            height : 3
        },
        shadowOpacity: 0.1,
        shadowRadius:3,
        elevation: 1
    }
  
})



/*import React, {useState} from 'react'
import { SafeAreaView, View, Text, TouchableOpacity, Image, FlatList, StyleSheet } from 'react-native'
import {Category, HeaderHome, RestaurantList} from './components'

const Home = (props) => {

    const initialLocatin = {
        streetName :"Sousse",
        gps : {
            latitude : 35.82556,
            longitude : 10.64111
        }
    }

    return (
        <SafeAreaView style={styles.container} >
            <HeaderHome
                currentLocation={currentLocation}
            />
            <Category 
                onSelectCategory={onSelectCategory} 
                selectedCategory={selectedCategory}
                shadow={styles.shadow}
            />
            <RestaurantList
                restaurants={restaurants}
                getCategoryNameById={getCategoryNameById}
                shadow={styles.shadow}
                currentLocation={currentLocation}
                {...props} 
            />
        </SafeAreaView>
    )
}



export default Home*/
