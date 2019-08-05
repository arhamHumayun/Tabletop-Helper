import React from 'react';
import { Switch, Route } from 'react-router-dom';
import About from './About'
import DicePage from './DicePage';
import SplashScreen from './SplashScreen';

const Main = () => (
    <main style={{border: '2px solid red', height: '100%'}} >
        <Switch>
            <Route exact path ='/' component={SplashScreen}/>
            <Route exact path ='/dice' component={DicePage}/>
            <Route exact path ='/about' component={About}/>
        </Switch>
    </main>
)

export default Main;