import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const ClothesDetailScreen = () => {
return (
    <View style={styles.container}>
    <Text style={styles.title}>Clothes Category</Text>
    </View>
)
}

export default ClothesDetailScreen

const styles = StyleSheet.create({
container: {
    flex: 1,
    backgroundColor: "#FDBF50",
    alignItems: "center",
    justifyContent: "center",
},
title: {
    fontFamily: "Tillana",
},
})