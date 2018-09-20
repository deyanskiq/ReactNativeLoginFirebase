import React, {Component} from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import { Header, Button, Spinner, CardSection } from './components/common';
import LoginForm from './components/LoginForm';

class App extends Component {
  state = {loggedIn: null};


  componentWillMount() {
    firebase.initializeApp({
      apiKey: 'AIzaSyDhcdBmSg2u5idLkNK_u-qesURumgluxD8',
      authDomain: 'reactnativeapp-3c821.firebaseapp.com',
      databaseURL: 'https://reactnativeapp-3c821.firebaseio.com',
      projectId: 'reactnativeapp-3c821',
      storageBucket: 'reactnativeapp-3c821.appspot.com',
      messagingSenderId: '205161479114'
    });

    firebase.auth().onAuthStateChanged((user) => {
      if(user) {
        this.setState({loggedIn: true});
      }
      else {
        this.setState({loggedIn: false});
      }
    });
  }

  renderContent() {
      switch(this.state.loggedIn) {
        case true:
          return (
            <CardSection>
              <Button onPress={() => firebase.auth().signOut()}>Log out</Button>
            </CardSection>
          );
          case false:
          return <LoginForm />
        default:
          return (
          <View style={styles.spinnerStyle}>
            <Spinner size="large" />
          </View>
          );
      }
  }
  render() {
    return (
      <View>
        <Header headerText="Authentication"></Header>
          {this.renderContent()}
      </View>
    );
  }
}

const styles = {
  spinnerStyle: {
    alignSelf: 'center'
  }
}

export default App;