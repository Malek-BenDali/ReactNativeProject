import React from 'react'
import { View, Text, StyleSheet, TouchableWithoutFeedback , Image } from 'react-native'
import { colors, icons } from '../constants'

const SearchBar = (props) => {
    return (

        <View
            style={styles.container}
        >
            <TouchableWithoutFeedback 
                onPress={()=>props.navigation.navigate('Search')}
            >
                <View style={styles.SearchInput}>
                    <View 
                        style={styles.SearchInputPlace}
                    >
                        <Text
                            style={styles.SearchInputText}
                        >
                            SEARCH
                        </Text>
                    </View>
                    <Image 
                        source={icons.search}
                        style={styles.searchIcon}
                    />
                </View>
            </TouchableWithoutFeedback >
        </View>
    

    )
}

export default SearchBar

const styles = StyleSheet.create({
    container : {
        flex : 1,
        paddingTop  : 20 ,
        alignItems : 'center',
    },
    SearchInput : {
        width : '70%',
        paddingVertical : 5,
        borderRadius : 30,
        justifyContent : 'space-between',
        alignItems : 'center',
        flexDirection : 'row',
        backgroundColor : colors.lightgray
    },  
    SearchInputPlace : {
        flex: 1,
        alignItems : 'center',
        justifyContent : 'center',
    },
    SearchInputText: {
        fontSize : 20,
        color : colors.gray,
        fontWeight : 'bold',
    } ,
    searchIcon : {
        width: 20,
        height : 20,
        marginRight: 5
    }
})
