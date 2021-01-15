import React from 'react'
import { StyleSheet, View, Animated, Dimensions, Image } from 'react-native'
import { colors } from '../../../constants';

const PoductImages = ({scrollX, images}) => {
    const { width, height } = Dimensions.get("window");
    return (
        <Animated.ScrollView
            horizontal
            pagingEnabled
            scrollEventThrottle={16}
            snapToAlignment="center"
            showsVerticalScrollIndicator={false}
            showsHorizontalScrollIndicator={false}
            onScroll={Animated.event([
                { nativeEvent: { contentOffset: { x: scrollX } } }
            ], { useNativeDriver: false })}
        >
        
        {
            images?.map((image,index)=>(
                <View
                    key={`image-${index}`}
                >
                    <View
                        style={{width:width, height : height *0.25}}
                    >
                        <Image 
                            source={image}
                            resizeMode="cover"
                            style={{
                                width : '100%',
                                height : "100%"
                            }}
                        />
                    </View>
                </View>
            ))
        }
        
    </Animated.ScrollView>
    )
}

export default PoductImages

const styles = StyleSheet.create({})
