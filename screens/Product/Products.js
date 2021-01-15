import React, {useState} from 'react'
import { View, ScrollView, StyleSheet } from 'react-native'
import { colors } from '../../constants'
import {SearchBar} from '../../shared'
import ChoiceBar from './components/ChoiceBar'
import ProductsList from './components/ProductsList'

const Products = (props) => {
    const [isEnabled, setIsEnabled] = useState(false);
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);

    return (
        <ScrollView style={styles.container}>
            <SearchBar 
                {...props}
            />

            <ChoiceBar 
                isEnabled={isEnabled} 
                toggleSwitch={toggleSwitch}
                {...props}
            />

            <ProductsList {...props} />

        </ScrollView>
    )
}

export default Products

const styles = StyleSheet.create({
    container : {
        flex : 1,
        backgroundColor : colors.white
    }
})
