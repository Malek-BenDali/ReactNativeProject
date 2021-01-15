import React from 'react'
import { View, Text, ImageBackground, StyleSheet } from 'react-native'
import { colors, icons } from '../../../constants'

const Preparation = ({steps}) => {
    return (
        <View style={styles.container} >
            
            <View
                style={{
                    borderRadius : 90,
                    marginHorizontal : 6,
                    width : 20,
                    height : 20,
                    backgroundColor : colors.primary,
                    justifyContent :'center',
                    alignItems : 'center'
                }}
            >
                <Text style={{color:colors.white}} >{steps.stepNumber}</Text>
            </View>
            <Text
                style={{marginLeft : 5, fontSize:13, color:colors.lightBlack}}
            >
                {steps.todo}
            </Text>
        </View>
    )
}

export default Preparation

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
        backgroundColor : colors.primary
    }
})