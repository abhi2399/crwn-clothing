import React from 'react';
import { Route, Switch } from 'react-router-dom';

import './pages/homepage/homepage.styles.scss';
import './App.css';

import ShopPage from './pages/shop/shop.component';
import Homepage from './pages/homepage/homepage.component';
import Header from './components/header/header.component';

import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component'
 import {auth } from './firebase/firebase.utils';

class App extends React.Component {

    constructor()
    {
        super();

        this.state= {
            currentUser: null
        }
    }
    unsubscribeFromAuth= null
    componentDidMount() {
       this.unsubscribeFromAuth = auth.onAuthStateChanged( user => {
            this.setState({currentUser:user});
            console.log(user);
        })
    }
    componentWillUnmount() {
        this.unsubscribeFromAuth();
    }

    render()
  {
      return (
          <div>

              <Header currentUser={this.state.currentUser}/>
              <Switch>
                  <Route exact path='/' component={Homepage}   />
                  <Route path='/shop' component={ShopPage}   />
                  <Route path='/signin' component={SignInAndSignUpPage} />

              </Switch>
          </div>
      );
  }

}

export default App;
