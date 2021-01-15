import React from 'react'
import { View, Text, Switch , StyleSheet, Image } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { colors, icons } from '../../../constants'

const ChoiceBar = ({toggleSwitch,isEnabled,navigation}) => {
    return (
        <View style={styles.container}>
            <View style={styles.pickUpButton} >
                <Text style={styles.pickUpText}>
                    Pickup
                </Text>
                <Switch
                    trackColor={{ false: colors.gray, true: colors.gold }}
                    thumbColor={colors.gold }
                    ios_backgroundColor="#3e3e3e"
                    onValueChange={toggleSwitch}
                    value={isEnabled}
                />
            </View>

            <TouchableOpacity
                style={{marginRight : 40}}
            >
                <Image 
                    source={icons.map}
                    style={styles.icons}
                />
            </TouchableOpacity>
            <TouchableOpacity
                
            >
                <Image 
                    source={icons.sort}
                    style={styles.icons}
                />
            </TouchableOpacity>
        </View>
    )
}

export default ChoiceBar

const styles = StyleSheet.create({
    container : {
        flex : 1,
        paddingTop  : 20 ,
        alignItems : 'center',
        justifyContent : 'space-between',
        flexDirection : 'row',
        borderBottomColor : colors.gold,
        borderBottomWidth : 1,
        marginHorizontal : 20,
        paddingBottom : 15
    },
    pickUpButton : {
        flexDirection : 'row',
        borderWidth : 1, 
        borderColor : colors.gold, 
        borderRadius : 20, 
        alignItems : 'center', 
        justifyContent : 'center',
        paddingLeft : 5,
    },
    pickUpText : {
        color: colors.gold
    },
    icons : {
        width:35,
        height : 35,
        tintColor: colors.gold
    }
})
