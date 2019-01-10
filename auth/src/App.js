import React, { Component } from 'react';
import {View } from 'react-native';
import firebase from 'firebase';
import { Header, Button, CardSection} from './components/common';
import LoginForm from './components/LoginForm'


class App extends Component{
    state = { loggedIn: false };
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
                this.setState({ loggedIn:true});
            } else {
                this.setState({ loggedIn : false});
            }
        });
    }

    renderContent() {
        if(this.state.loggedIn) {
            return (
                <CardSection>
                    <Button>
                        Log Out
                    </Button>
                </CardSection> 
            );
        }

        return <LoginForm/>;
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