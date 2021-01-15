import React from 'react'
import { View, StyleSheet, TouchableOpacity, Image } from 'react-native'
import { colors, icons } from '../constants'


const Header = ({navigation}) => {
    return (
        <View style={styles.container} >

            <TouchableOpacity style={styles.headerIconContainer}
                onPress={() => navigation.openDrawer()}
            > 

                <Image 
                    source={icons.menu}
                    style={styles.HeaderIcon} 
                />

            </TouchableOpacity>
                
            <Image 
                source={icons.logoGold}
                style={styles.HeaderLogo}
            />

            <TouchableOpacity style={styles.headerIconContainer}
                onPress={() => navigation.navigate('Basket')}
            >  
                <Image 
                    source={icons.tresorBox}
                    style={styles.HeaderIcon}
                />
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        paddingVertical:10,
        paddingHorizontal :10,
        height : 70,
        alignItems : 'center',
        justifyContent : 'space-between',
        flexDirection : 'row',
        backgroundColor : colors.red
    },
    HeaderIcon : {
        width:'100%', 
        height : "100%", 
        tintColor : colors.gold
    },
    headerIconContainer: {
        width: 30,
        height : 30, 
    },
    HeaderLogo : {
        width: 80,
        height:80

    }
})

export default Header
