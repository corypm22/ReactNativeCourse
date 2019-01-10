import React, { Component } from 'react';
import {View } from 'react-native';
import firebase from 'firebase';
import { Header, Button, CardSection, Spinner} from './components/common';
import LoginForm from './components/LoginForm'


class App extends Component{
    state = { loggedIn: null };
    componentWillMount(){
        firebase.initializeApp({
            apiKey: 'AIzaSyBktoMUK0eVMQvIyb765jhVsiUgFm7E73M',
            authDomain: 'auth-66c4f.firebaseapp.com',
            databaseURL: 'https://auth-66c4f.firebaseio.com',
            projectId: 'auth-66c4f',
            storageBucket: 'auth-66c4f.appspot.com',
            messagingSenderId: '287945174010'  
        });

        firebase.auth().onAuthStateChanged((user) => {
            if (user) {
                this.setState({ loggedIn: true});
            } else {
                this.setState({ loggedIn : false});
            }
        });
    }

    renderContent() {
        switch (this.state.loggedIn){
            case true:
                return <CardSection><Button>Log Out</Button></CardSection>; 
            case false:
            return <LoginForm/>;
            default:
                return <Spinner size="large"/>;
        }
    }

    render() {
        return (
            <View>
                <Header headerText='Authentication'/>
                {this.renderContent()}
            </View>
        );
    }
}

export default App;