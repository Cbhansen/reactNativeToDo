import React from 'react';

import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
} from 'react-native';

const Notes = (props) => {
    return (
        <View key={props.keyval} style={styles.note}>
            
            <Text style={styles.noteText}>{props.val.date}</Text>
            <Text style={styles.noteText}>{props.val.note}</Text>

            <TouchableOpacity style={styles.noteDelete} onPress={props.deleteMethod}>
                <Text style={styles.noteDeleteText}>X</Text>
            </TouchableOpacity>
            
        </View>
    )
}

const styles = new StyleSheet.create({
    note: {
        position: 'relative',
        padding: 20,
        paddingRight: 100,
        borderBottomWidth: 2,
        borderBottomColor: '#ededed',
    },
    noteText: {
        paddingLeft: 20,
        borderLeftColor: '#e91363',
        borderLeftWidth: 10,
        color: 'red'
    },
    noteDelete: {
        position: 'absolute',
        alignItems: 'center',
        backgroundColor: '#2980b9',
        padding: 15,
        bottom: 10,
        right: 10
    },
    noteDeleteText: {
        color: 'white',
        position: 'absolute',
        justifyContent: 'center',
        alignItems: 'center',
        bottom: 5,
        right: 10
    }
})

export default Notes;