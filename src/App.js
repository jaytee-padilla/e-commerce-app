import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';

// components
import HomePage from './pages/homepage/homepage';
import ShopPage from './pages/shop/shop';
import Header from './components/header/header';
import SignInAndSignUp from './pages/signin-signup/signin-signup';
import { auth, createUserProfileDocument } from './firebase/firebase';

class App extends Component {
  constructor() {
    super()
  
    this.state = {
      currentUser: null
    }
  }

  unsubscribeFromAuth = null;

  componentDidMount() {
    // this listens for authentication state changes on the firebase backend
    // when a user signs in, the onAuthStateChanged method records info about the user logging in or out
    // that "user" data is then being stored in the App components state for authentication use throughout the app
    // by using this method inside of a componentDidMount() function at the App component level, the sign-in status of the current user is consistently tracked during app usage
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async user => {
      createUserProfileDocument(user);

      // console.log(user)
    });
  }

  componentWillUnmount() {
    // this helps prevent memory leaks in the application
    // when the App component unmounts (signing out, switching browser tabs, closing the browser, etc.), this closes the communication between the app itself and the firebase app
    this.unsubscribeFromAuth();
  }

  render () {
    return (
      <div>
        <Header currentUser={this.state.currentUser} />
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route exact path='/shop' component={ShopPage} />
          <Route exact path='/signin' component={SignInAndSignUp} />
        </Switch>
      </div>
    );
  }
}

export default App;