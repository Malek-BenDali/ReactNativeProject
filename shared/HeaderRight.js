import React from 'react'
import {TouchableOpacity, Image, StyleSheet } from 'react-native'
import { icons } from '../constants'

const HeaderRight = ({navigation}) => {
    return (
        <TouchableOpacity
            style={styles.container}
            onPress={()=>navigation.navigate('Basket')}
        >
            <Image 
                source={icons.tresorBox}
                style={styles.icon}
            />
            
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container : {
        flex : 1,
        justifyContent : 'center',
        alignItems : 'center',
        marginRight : 10
    },
    icon:{
        width:30,
        height:30
    }
})

export default HeaderRight
