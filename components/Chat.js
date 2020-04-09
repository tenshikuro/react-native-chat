import React from 'react';
import { connect } from 'react-redux';
import { FlatList, View, StyleSheet, TextInput, Button } from 'react-native';
import { MessageItem } from './';
const messages = [
    {
        content: 'Message 1',
        author: 'robert',
        created_at: new Date()
    }, {
        content: 'Message 2',
        author: 'amelie',
        created_at: new Date()
    }, {
        content: 'Message 3',
        author: 'robert',
        created_at: new Date()
    }
];

@connect(({ 
    chat: {
        user,
        room,
        messages
    }
}) => ({ user, room , messages }))

export class Chat extends React.Component {

    render() {
        const { user } = this.props;
        
        return (
            <View style={styles.container}>
                <FlatList
                    data={messages.map((message, i) => ({ ...message, key: 'message_${i}'}) )}
                    renderItem={({ item: message}) =>
                        <MessageItem user={user} message={message} /> 
                    }
                />  
                <View style={styles.composerContainer}>
                <TextInput
                    style={styles.composerInput}
                    />
                <Button title="Send"
                    />
                </View> 
            </View>
            
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: '#DDD'
    },
    composerContainer: {
        flex: 1,
        flexDirection: 'row',
        
    },
    composerInput: {
        flex: 1,
        backgroundColor: '#FFF',

    }
});