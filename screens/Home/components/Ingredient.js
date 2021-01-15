import React from 'react'
import { View, Text, Image, StyleSheet } from 'react-native'
import { colors, icons } from '../../../constants'


const Ingredient = ({steps}) => {
    return (
        <View style={styles.container} >
            
            <View
                style={{
                    borderRadius : 90,
                    marginHorizontal : 6,
                    width : 10,
                    height : 10,
                    backgroundColor : colors.primary
                }}
            >

            </View>
            <Text
                style={{marginLeft : 5, fontSize:15, color:colors.lightBlack}}
            >
                {steps.quantity} {steps.ingredients}
            </Text>
        </View>
    )
}

export default Ingredient

const styles = StyleSheet.create({
    container : {
        flexDirection : 'row', 
        alignItems:'center', 
        paddingHorizontal : 20,
        paddingVertical : 5
    },
    dots : {
        width : 10,
        height : 10,
        tintColor : colors.primary
    }
})
