import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import './App.css';

// components
import HomePage from './pages/homepage/homepage';
import ShopPage from './pages/shop/shop';
import Header from './components/header/header';
import SignInAndSignUp from './pages/signin-signup/signin-signup';
import { auth, createUserProfileDocument } from './firebase/firebase';
import { setCurrentUser } from './redux/user/user-actions';

class App extends Component {
  unsubscribeFromAuth = null;

  componentDidMount() {
    // this listens for authentication state changes on the firebase backend
    // when a user signs in, the onAuthStateChanged method records info about the user logging in or out
    // that "user" data is then being stored in the redux store's state for authentication use throughout the app
    // by using this method inside of a componentDidMount() function at the App component level, the sign-in status of the current user is consistently tracked during app usage
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot((snapshot) => {
          // whenever the user snapshot updates, the user-reducer value is set with this new object
          this.props.setCurrentUser({
            id: snapshot.id,
            ...snapshot.data(),
          });
        });
      }

      // if userAuth is null, then set the redux store's "user" property (inside root-reducer.js) to null
      this.props.setCurrentUser(userAuth);
    });
  }

  componentWillUnmount() {
    // this helps prevent memory leaks in the application
    // when the App component unmounts (signing out, switching browser tabs, closing the browser, etc.), this closes the communication between the app itself and the firebase app
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/shop" component={ShopPage} />
          <Route
            exact
            path="/signin"
            render={() =>
              this.props.currentUser ? <Redirect to="/" /> : <SignInAndSignUp />
            }
          />
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  currentUser: state.user.currentUser,
});

// dispatch will equal the prop name we want to dispatch to the actions
const mapDispatchToProps = (dispatch) => ({
  setCurrentUser: (user) => dispatch(setCurrentUser(user)),
});

// App doesn't need any state from the reducer, therefore the first argument of connect() is null because that's where mapStateToProps would go if App needed state
export default connect(mapStateToProps, mapDispatchToProps)(App);
