import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const Title=()=>{
    return (
        <View style={styles.text}>
            <Text style={styles.text}>Quizzora</Text>
        </View>
        
    );
};

export default Title;

const styles= StyleSheet.create({
    text:{
        justifyContent:'center',
        alignItems:'center',
        fontSize:40,
        fontWeight:"400"
    }
});