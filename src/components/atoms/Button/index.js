import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity} from 'react-native';

const Button = ({title, color = '#0079E9', textColor = '#020202', onPress}) => {
    return (
        <TouchableOpacity onPress={onPress} activeOpacity={0.5}>
            <View style={styles.container(color)}>
            <Text style={styles.text(textColor)}>{title}</Text>
        </View>
        </TouchableOpacity>
    );
};

export default Button;

const styles = StyleSheet.create({
    container: color => ({
        height: 45,
        backgroundColor: color,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 8,  
    }),
    text: (textColor) => ({
        fontSize: 14,
        fontFamily: 'Offside-Regular',
        color: textColor,
    }),
});