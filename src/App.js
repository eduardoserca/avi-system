import React, { useEffect, useState } from 'react';
import { HashRouter, Switch } from 'react-router-dom';
import './scss/style.scss';

import { useDispatch } from 'react-redux';
import { firebase } from './firebase/firebase-config';
import { PrivateRoute } from './routers/PrivateRoute';
import { PublicRoute } from './routers/PublicRoute';
import { login } from './action/auth';
import Spinner from './components/spinner/Spinner';

const loading = (
  <div className="pt-3 text-center">
    <div className="sk-spinner sk-spinner-pulse"></div>
  </div>
)

// Containers
const TheLayout = React.lazy(() => import('./containers/TheLayout'));

// Pages
const LoginScreen = React.lazy(() => import('./components/auth/Login'));
const RegisterScreen = React.lazy(() => import('./components/auth/Register'));
{
  /** NO OLVIDAR DE BORRAR
  const Register = React.lazy(() => import('./views/pages/register/Register'));
const Page404 = React.lazy(() => import('./views/pages/page404/Page404'));
const Page500 = React.lazy(() => import('./views/pages/page500/Page500'));

***/
}

const App = () =>  {
  
  const dispatch = useDispatch();

    const [checking, setChecking] = useState(true);
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(()=>{
        firebase.auth().onAuthStateChanged( async (user) => {
            if(user?.uid){
                dispatch(login(user.uid, user.displayName));
                setIsLoggedIn(true);                
                //dispatch(startLoadingNotes(user.uid));
            }else{
                setIsLoggedIn(false);
            }

            setChecking(false);

        })

    },[dispatch, setChecking, setIsLoggedIn]);

    if(checking){
        return (
            <Spinner/>
        )
    }   
    
    return (
      <HashRouter>
          <React.Suspense fallback={loading}>
         
            <Switch>
              {/**
              <Route exact path="/login" name="Login Page" render={props => <LoginScreen {...props}/>} />
              <Route exact path="/register" name="Register Page" render={props => <Register {...props}/>} />
              <Route exact path="/404" name="Page 404" render={props => <Page404 {...props}/>} />
              <Route exact path="/500" name="Page 500" render={props => <Page500 {...props}/>} />
              
              <Route path="/" name="Home" render={props => <TheLayout {...props}/>} />
                **/}

                  <PublicRoute
                        exact
                        isAuthenticated={isLoggedIn}
                        path="/login"
                        component={LoginScreen}
                    />
                    <PublicRoute
                        exact
                        isAuthenticated={isLoggedIn}
                        path="/register"
                        component={RegisterScreen}
                    />
                    <PrivateRoute                        
                        isAuthenticated={isLoggedIn}
                        path="/"
                        component={TheLayout}
                    />

                    
            </Switch>
          </React.Suspense>
      </HashRouter>
    );
  
}

export default App;
