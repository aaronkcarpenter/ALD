import React from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Navigation from './components/Navigation';
import NavStatic from './components/NavStatic';
import SignUp from './components/SignUp';
import Footer from './components/Footer';
import useAuth from './auth/UseAuth';
import SignInForm from './auth/SignInForm';
import SignOutButton from './auth/SignOutButton';
import ShopAll from './auth/ShopAll';
import ProductPage from './auth/ProductPage';
import ProtectedRoute from './auth/ProtectedRoute'
import Home from './components/Home'
import { auth,  createUserProfileDocument } from './firebase/firebase.utils';

// const {isLoading, user } = useAuth();

class App extends React.Component {
  constructor() {
    super()

    this.state = {
      currentUser: null
    }
  }

  unsubscribeFromAuth = null

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if(userAuth){
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot => {
          this.setState({
            currentUser: {
              id: snapShot.id,
              ...snapShot.data()
            }
          });
        });    
      }

      this.setState({ currentUser: userAuth });
    });
  };

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }
  
  render(){
    return (
      <BrowserRouter>
        <NavStatic currentUser={this.state.currentUser} />
        <Switch>
          <Route exact path='/' component={SignInForm} />
          <Route path='/signup' component={SignUp} />
          <Route path='/subscribe' />
          {/* <Route path='/home' component={Home} /> */}
          <Route path='/logout' component={SignOutButton}/>
          <Route path='/home' component={Home} />
          <Route path='/shop-all' component={ShopAll} />
          <Route exact path='/profile/:id' />
          <Route path='/news' />
          <Route path='/about' />
          <Route path='/store' />
          <Route path='/inspiration' />
          <Route exact path='/collections/:id' />
          <Route exact path='prior/collections/:id' />
          <Route exact path='/shop/:id' component={ProductPage} />
          <Route exact path='/lookbook/:id' />
          <Route path='/checkout' />
          {/* <ProtectedRoute isAuthed={!!user} isLoading={isLoading} path='/home' component={Home} />
          <ProtectedRoute isAuthed={!!user} isLoading={isLoading} path='/shop-all' component={ShopAll} />
          <ProtectedRoute isAuthed={!!user} isLoading={isLoading} exact path='/profile/:id' />
          <ProtectedRoute isAuthed={!!user} isLoading={isLoading} path='/news' />
          <ProtectedRoute isAuthed={!!user} isLoading={isLoading} path='/about' />
          <ProtectedRoute isAuthed={!!user} isLoading={isLoading} path='/store' />
          <ProtectedRoute isAuthed={!!user} isLoading={isLoading} path='/inspiration' />
          <ProtectedRoute isAuthed={!!user} isLoading={isLoading} exact path='/collections/:id' />
          <ProtectedRoute isAuthed={!!user} isLoading={isLoading} exact path='prior/collections/:id' />
          <ProtectedRoute isAuthed={!!user} isLoading={isLoading} exact path='/shop/:id' component={ProductPage} />
          <ProtectedRoute isAuthed={!!user} isLoading={isLoading} exact path='/lookbook/:id' />
          <ProtectedRoute isAuthed={!!user} isLoading={isLoading} path='/checkout' /> */}
          {/* <ProtectedRoute path='/logout' component={SignOutButton}/> */}
        </Switch>
        <Footer />
      </BrowserRouter>
    );

  }
}

export default App;


