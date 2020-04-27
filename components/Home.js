import React from 'react';
import { Text, TextInput, View, Button, StyleSheet, Header } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';
import { chatActions } from '../actions';

@connect(() => ({})) 

export class Home extends React.Component {

    state = {
        user: "",
        room: ""
    }
    handleUserChange = user => {
        this.setState({user})
    }
    handleRoomChange = room => {
        this.setState({room})
    }
    handleChatPress = e => {
        const { dispatch } = this.props;
        const { user, room } = this.state;
        dispatch(chatActions.join(user, room));
        Actions.chat({title: `Salon "${room}"` });
    }

    render() {
        const { user, room } = this.state;

        return (
            
            <View style={styles.container}>
                
                <Text style={styles.h1}>Bienvenue !</Text>
                <Text style={styles.label}>
                    Nom d'utilisateur :
                </Text>
                <TextInput
                    value={user}
                    onChangeText={this.handleUserChange}
                    style={styles.input}
                    placeholder="Nom d'utilisateur"
                />
                <Text style={styles.label}>
                    Salon :
                </Text>
                <TextInput
                    value={room}
                    onChangeText={this.handleRoomChange}
                    style={styles.input}
                    placeholder="Salon de chat"
                />
                <Button
                title="Let's chat !"
                onPress={this.handleChatPress}
                color="#f50057"
                overrides={{backgroundColor: "3fffff"}}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#333',
      alignItems: 'center',
      justifyContent: 'center'
    },
    h1 : {
        color: '#dd33fa',
        fontSize: 30,
        
    },
    label: {
        alignSelf: 'flex-start',
        marginTop: 16,
        marginLeft: 35,
        textAlign: 'center',
        color: 'white',
        
    },
    big: {
        fontSize: 20,
        color: '#155fa0'
    },
    input : {
        backgroundColor: "white",
        borderStyle: "solid",
        borderWidth: 2,
        borderColor: "#dd33fa",
        borderRadius: 20,
        margin : 8,
        padding: 4,
        width: '90%'
    },
    button: {
        
    }
  });