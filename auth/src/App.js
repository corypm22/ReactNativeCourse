import React, { Component } from 'react';
import {View, Text } from 'react-native';
import firebase from 'firebase';
import { Header} from './components/common';


class App extends Component{
    componentWillMount(){
        firebase.initializeApp({
            apiKey: 'AIzaSyBktoMUK0eVMQvIyb765jhVsiUgFm7E73M',
            authDomain: 'auth-66c4f.firebaseapp.com',
            databaseURL: 'https://auth-66c4f.firebaseio.com',
            projectId: 'auth-66c4f',
            storageBucket: 'auth-66c4f.appspot.com',
            messagingSenderId: '287945174010'  
        });
    }

    render() {
        return (
            <View>
                <Header headerText='Authentication' />
                <Text>An App</Text>
            </View>
        );
    }
}

export default App;