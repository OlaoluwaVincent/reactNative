import {StyleSheet, Text, View} from 'react-native'
import React, {PureComponent} from 'react'
import {Link} from "expo-router";

export default class About extends PureComponent {
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.text}>About</Text>
                <Link href={'/'} style={styles.button}>Return to homepage</Link>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#25292e',
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        color: '#fff',
    },
    button: {
        fontSize: 20,
        textDecorationLine: 'underline',
        color: '#fff',
    },
});
