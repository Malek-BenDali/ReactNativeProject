import React,{useState} from 'react'
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native'
import { colors, icons } from '../../../constants'
import {Productstemp, Products} from '../../../Data/Products'

const RenderItem = ({item,navigation})=> (
    <TouchableOpacity 
        onPress={()=>navigation.navigate('ProductDetail',{item})}
        style={{margin : 20}}
    >
        <Image 
            source={item.image}
            style={{
                width:150,
                height:150
            }}
        />
        <View style={{flexDirection:'row', alignItems:'center'}}>
            <Image
                source={icons.star}
                style={{
                    width:20,
                    height:20
                }}
            />
            <Text> {item.starts} ({item.likedBy}) </Text>
        </View>
        <View style={{flexDirection:'row', alignItems:'center', justifyContent : 'space-between'}}>
            <Text> {item.title} </Text>
            <Text style={{color:colors.gray}}> {item.price}{item.currency} / {item.units} </Text>
        </View>
        
    </TouchableOpacity>
)

const ProductsList = (props) => {
    const data1 = Productstemp
    const data2 = Products
    return (
        <View
            style={{flexDirection: 'row',flex :1,
        justifyContent:'space-evenly',alignItems:'center'}}
        >
           <View>
            {data1?.map(item=><RenderItem key={item.id} item={item} {...props} />)}
           </View>
           <View>
            {data2?.map(item=><RenderItem key ={item.id} item={item} {...props}/>)}
           </View>

        </View>
    )
}

export default ProductsList

const styles = StyleSheet.create({
    container: {
      flex : 1
    },
    item: {
      backgroundColor: '#f9c2ff',
      padding: 20,
      marginVertical: 8,
      marginHorizontal: 16,
    },
    title: {
      fontSize: 32,
    },
  });
