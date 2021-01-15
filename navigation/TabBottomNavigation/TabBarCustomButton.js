import React from 'react'
import { View, TouchableOpacity, StyleSheet } from 'react-native'
import { colors } from '../../constants'


const TabBarCustomButton = ({ accessibilityState, children, onPress }) => {

    var isSelected = accessibilityState.selected

    if (isSelected) {
        return (
            <View style={{ flex: 1, alignItems: "center" }}>

                <TouchableOpacity
                    style={styles.Icon}
                    onPress={onPress}
                    
                >
                    {children}
                </TouchableOpacity>
            </View>
        )
    } else {
        return (
            <TouchableOpacity
                style={{
                    flex: 1,
                    backgroundColor: colors.white
                }}
                
                onPress={onPress}
            >
                {children}
            </TouchableOpacity>
        )
    }
}

export default TabBarCustomButton

const styles = StyleSheet.create({
    Icon : {                       
                        
        height: 50,
        borderBottomColor : colors.primary,
        borderBottomWidth : 4,
        backgroundColor: colors.white
    }
})
