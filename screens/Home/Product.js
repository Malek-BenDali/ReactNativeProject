import React, {useState, useEffect} from 'react'
import { View, Text, StyleSheet, ScrollView, Image, Animated } from 'react-native'
import { colors, icons } from '../../constants'
import {Products} from '../../Data/Products'
import { ProductBanner, PoductImages } from './components'



const Product = (props) => {
    const [item, setItem] = useState(null)
    const scrollX = new Animated.Value(0);

    useEffect(() => {
        let {item} = props.route.params   
        setItem(item) 
    }, [])

    
    

    return (
        <ScrollView
            style={styles.container}
        >
            <PoductImages 
                images={item?.images}
                scrollX={scrollX}
            />
            {console.log(item)}
            <ProductBanner
                images={item?.images}
                scrollX={scrollX}
                item={item}
            />

        </ScrollView>
    )
}

export default Product

const styles = StyleSheet.create({
    container : {
        flex : 1,
        backgroundColor : colors.white
    },
    headerTitle : {
        flex : 1,
        paddingVertical : 15,
        alignItems : 'center'
    },
    headerTitleText : {
        fontSize : 25,
        fontWeight : '500'
    },
    itemImage : {
        width: '100%',
        height : 250,
        borderRadius : 10
    }
})
//{"id": 1, "image": 22, "likedBy": 25, "price": 25, "quantity": "Piece", "sale": false, "starts": 3.5, "title": "Muffin", "top": false}
