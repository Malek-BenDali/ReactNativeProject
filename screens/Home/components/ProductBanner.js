import React,{useState} from 'react'
import { StyleSheet, Text,Image, View, Dimensions, Animated, TouchableOpacity } from 'react-native'
import { colors, icons } from '../../../constants';
import {Picker} from '@react-native-picker/picker';


const ProductBanner = ({scrollX, images, item}) => {
    const { width, height } = Dimensions.get("window");
    const [ quantity, setQuantity] = useState(1);

    const renderDots = () =>{
        const dotPosition = Animated.divide(scrollX, width)
        return (
            <View>  
                <View
                    style={styles.dots}
                >
                    {images?.map((item, index)=>{
                       
                       const opacity = dotPosition.interpolate({
                            inputRange : [ index-1, index, index+1],
                            outputRange : [0.3, 1 ,0.3],
                            extrapolate : "clamp"
                        })

                        const dotSize = dotPosition.interpolate({
                            inputRange : [index -1, index, index +1],
                            outputRange: [5, 7, 5],
                            extrapolate : "clamp"
                        }) 
                        const dotColor = dotPosition.interpolate({
                            inputRange : [index -1, index, index +1],
                            outputRange: [colors.gray , colors.primary, colors.gray],
                            extrapolate : "clamp"
                        })
                        
                        return(
                            <Animated.View
                                key={`dot-${index}`}
                                opacity={opacity}
                                style={{
                                    borderRadius : 30,
                                    marginHorizontal : 6,
                                    width : dotSize,
                                    height : dotSize,
                                    backgroundColor : dotColor
                                }}

                            >
                                
                            </Animated.View>
                        )


                    })}
                </View>  
            </View>
        )
        
    }

    return (
        <View style={styles.container} >
            { renderDots() }

            <View style={styles.banner}>
                {/* banner left */}
                <View style={styles.section}>
                    <View style={styles.bannerBody}>
                        <Text style={styles.likeNumber}>
                            {item?.starts} 
                        </Text>
                        <Image 
                            source={icons.star}
                            style={styles.stars}
                        />
                        <Text style={styles.likeText} >
                            ({item?.likedBy})
                        </Text>
                    </View>
                    <Text>
                        {item?.title}
                    </Text>
                    <Text style={styles.fontGray}>
                        {item?.price}{item?.currency}/ {item?.units}
                    </Text>
                </View>

                {/* banner mid */}
                <View style={styles.section}>
                    <Image 
                        source={icons.livraison}
                        style={styles.icon}
                    />
                    <Text>quantity</Text>
                    <Picker
                        selectedValue={quantity}
                        style={{height: 50, width: 100}}
                        onValueChange={(itemValue, itemIndex) =>
                           setQuantity(itemValue)
                        }>
                        <Picker.Item label={`1 ${item?.units}`} value={1} />
                        <Picker.Item label={`2 ${item?.units}`} value= {2} />
                        <Picker.Item label={`3 ${item?.units}`} value= {3} />
                        <Picker.Item label={`4 ${item?.units}`} value= {4} />
                        <Picker.Item label={`5 ${item?.units}`} value= {5} />
                    </Picker>
                </View>

                {/* banner righ */}
                <View style={styles.section}>
                    <Image 
                        source={item?.shop.image}
                        style={styles.shopImage}
                    />
                    <TouchableOpacity style={{backgroundColor: colors.primary,
                    borderWidth : 2,
                    borderColor : colors.primary,
                    borderRadius : 10,
                    marginTop : 3 }}>
                        <Text style={{color:colors.white}}>
                            Visit Shop
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

export default ProductBanner

const styles = StyleSheet.create({
    container : {
        marginHorizontal : 15,
    },
    banner : {
        justifyContent : 'space-between',
        flexDirection : 'row',
        alignItems : 'center'
    },
    bannerBody : {
        flexDirection : 'row', 
        alignItems:'center' 
    },
    dots : {
        flexDirection : 'row',
        alignItems : 'center',
        justifyContent : 'center',
        height  : 20
    },
    stars : {
        height : 20,
        width : 20,
        marginRight : 6,
        marginLeft : 3
    },
    likeText : {
        fontSize : 15,
        color : colors.primary
    },
    likeNumber : {
        fontSize : 20,
        color : colors.gold
    },
    fontGray : {
        color : colors.gray
    },
    icon : {
        height : 30,
        width : 30,
        tintColor : colors.gold
    },
    section : {
        alignItems : 'center'
    },
    shopImage : {
        borderRadius : 90,
        borderWidth : 2,
        borderColor : colors.primary,
        height : 50,
        width : 50,
    }
})
