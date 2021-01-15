import React from 'react'
import { View, Text, FlatList, TouchableOpacity, 
    SafeAreaView, StyleSheet, ImageBackground } from 'react-native'
import { colors } from '../../../constants'
import { Recipes } from '../../../Data/Recipes'


const TopRecipies = (props) => {

  const renderItem = ({item}) =>(
    <View>
      <TouchableOpacity
        style={styles.item}
        onPress={()=>props.navigation.navigate("Recipe",{item})}
      >
        <ImageBackground
          source={item.image}
          style={styles.itemImage}
        />
      </TouchableOpacity>
    </View>
  )

    return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text
          style={styles.sectionText}
        >
          Top Recipies

        </Text>
      </View>
      <FlatList
          data={Recipes}
          horizontal
          renderItem={renderItem}
          showsHorizontalScrollIndicator={false}
          keyExtractor={item => item.id.toString()}
      />
    </SafeAreaView>
    )
}

export default TopRecipies

const styles = StyleSheet.create({
    container: {
        padding : 20,
        flex: 1,
    },
    item: {
        paddingTop : 6,
        marginVertical: 8,
        marginRight: 30,
    },
    itemImage: {
      width : 250,
      height : 250,
    },
    sectionText : {
      fontSize : 30,
      color : colors.black
    }
  });

