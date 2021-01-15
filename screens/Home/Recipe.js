import React, {useState, useEffect} from 'react'
import { View, Text, StyleSheet, Image, StatusBar,TouchableOpacity, Platform } from 'react-native'
import { colors, icons } from '../../constants'
import { ImageHeaderScrollView, TriggeringView } from 'react-native-image-header-scroll-view';
import * as Animatable from 'react-native-animatable';
import Ingredient from './components/Ingredient'
import Preparation from './components/Preparation'



const Recipe = (props) => {
    const [item, setItem] = useState(null)
    const [liked, setLiked] = useState(false)
    const MIN_HEIGHT = Platform.OS === 'ios' ? 90 : 50
    const MAX_HEIGHT = 350
    
    useEffect(() => {
        let {item} = props.route.params   
        setItem(item)
    }, [])
    

    return (
        <View style={styles.container}>
            <StatusBar barStyle='light-content' />
            <ImageHeaderScrollView
                maxHeight={MAX_HEIGHT}
                minHeight={MIN_HEIGHT}
                headerImage={item?.image}
                maxOverlayOpacity={0.6}
                minOverlayOpacity={0.3}
                renderFixedForeground={()=><View
                    style={styles.HeaderContainer}
                >
                    <TouchableOpacity
                        style={styles.LikeButton}
                        onPress={()=>setLiked(()=>!liked)}
                    >
                        <Image 
                            source={icons.like}
                            style={liked? styles.HeaderLikedImage : styles.HeaderNonLikedImage}
                        />
                    </TouchableOpacity>
                </View>}
            >
                <View style={styles.container}>
                    <View
                        style={styles.headerTitle}
                    >
                        <Animatable.Text
                            style={styles.headerTitleText}
                            animation="zoomInUp"
                        > 
                            {item?.title} 
                        </Animatable.Text>
                    </View>
                    <View
                        style={styles.ItemDescription}
                    >
                        <Animatable.View 
                            style={styles.ItemDescriptionParts} 
                            animation="bounceInLeft" 
                        >
                            <Image 
                                source={icons.timer}
                                style={styles.ItemIcon}
                            />
                            <Text style={styles.ItemDescriptionText} >
                                {item?.time.duration} {item?.time.units}
                            </Text>
                        </Animatable.View>
                        <Animatable.View 
                            style={styles.ItemDescriptionParts} 
                            animation="tada"     
                        >
                            <Image 
                                source={icons.menu}
                                style={styles.ItemIcon}
                            />
                            <Text style={styles.ItemDescriptionText} >
                                {item?.difficulty}
                            </Text>
                        </Animatable.View>
                        <Animatable.View 
                            style={styles.ItemDescriptionParts}
                            animation='bounceInRight'
                        >
                            <Image 
                                source={icons.restaurant}
                                style={styles.ItemIcon}
                            />
                            <Text style={styles.ItemDescriptionText}>
                                {item?.people} 
                            </Text>
                        </Animatable.View>
                    </View>
                    <View style={styles.recipeDetails}>
                        {item?.ingredients.map((step,index)=>(
                            <Ingredient key={index} steps={step} />
                        ))}
                    </View>
                    <View style={styles.recipeDetails}>
                        {item?.preparation.map((step,index)=>(
                            <Preparation key={index} steps={step} />
                        ))}
                    </View>
                </View>
            </ImageHeaderScrollView>
        </View>
    )
}
// {"difficulty": "Easy", "id": 1, "image": 31, "ingredient": [{"cup green onion, sliced": 0.25, "cup lemon juice concentrate": 0.25, "cups lettuce, thinly sliced": 4, "mayonnaise/ salad dresssing": 1, "parge tomato, seeded and chopped": 1, "slices bacon, cooked and crumbled": 8, "teaspoons chicken flavor instant bouillon": 2, "teaspoons sugar": 2}], "likedBy": 25, "people": 6, "preparation": ["Combine mayonnaise, lemon juice, sugar and bouillon for the dressing", "Combine rotini, bacon, tomato, and green onion", "Combine all ingredients with lettuce"], "starts": 3, 


export default Recipe

const styles = StyleSheet.create({
    container : {
        flex : 1,
        backgroundColor : colors.darkWhite
    },
    headerTitle : {
        flex : 1,
        paddingVertical : 15,
        alignItems : 'center',
        
    },
    headerTitleText : {
        fontSize : 25,
        fontWeight : 'bold'
    },
    LikeButton : {
        width : 60,
        height : 60,
        alignItems :'center', 
        justifyContent : 'center',
    },
    HeaderContainer : {
        flex:1,
        alignItems : 'flex-end',
        justifyContent : 'space-between',
    },
    HeaderLikedImage : {
        width : 30,
        height : 30,
        tintColor:  colors.primary
    },
    HeaderNonLikedImage : {
        width : 30,
        height : 30,
        tintColor:  colors.white
    },
    ItemIcon : {
        width : 22,
        height : 22,
        tintColor : colors.gray
    },
    ItemDescription : {
        marginVertical : 15,
        flexDirection : 'row',
        justifyContent : 'space-evenly',
        alignItems : 'center'
    },
    ItemDescriptionParts : {
        flexDirection : 'row'
    },
    ItemDescriptionText : {
        color : colors.gray,
        fontSize : 15,
        paddingLeft : 5
    },
    recipeContainer : {
        backgroundColor : colors.white

    },
    recipeDetails : {
        marginVertical : 20,
        paddingVertical : 20,
        backgroundColor : colors.white
    }
})
//{"id": 1, "image": 22, "likedBy": 25, "price": 25, "quantity": "Piece", "sale": false, "starts": 3.5, "title": "Muffin", "top": false}
 