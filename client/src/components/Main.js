import React from 'react';
import { Switch, Route } from 'react-router-dom';
import About from './About'
import DicePage from './Dice/DicePage';
import SplashScreen from './SplashScreen';
import DND5eStats from './StatGenerator/DND5eStats';

const Main = () => (
    <main style={{height: '100%'}} >
        <Switch>
            <Route exact path ='/' component={SplashScreen}/>
            <Route exact path ='/dice' component={DicePage}/>
            <Route exact path ='/about' component={About}/>
            <Route exact path ='/generate/dnd' component={DND5eStats}/>
        </Switch>
    </main>
)

export default Main;