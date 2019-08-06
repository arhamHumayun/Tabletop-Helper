import React from 'react';
import { Switch, Route } from 'react-router-dom';
import About from './About'
import DicePage from './Dice/DicePage';
import SplashScreen from './SplashScreen';
import DND5eStats from './StatGenerator/DND5eStats';
import CoCStats from './StatGenerator/CoCStats';
import Curations from './Curations'

const Main = () => (
    <main style={{height: '100%'}} >
        <Switch>
            <Route exact path ='/' component={SplashScreen}/>
            <Route exact path ='/dice' component={DicePage}/>
            <Route exact path ='/about' component={About}/>
            <Route exact path ='/generate/dnd' component={DND5eStats}/>
            <Route exact path ='/generate/coc' component={CoCStats}/>
            <Route exact path ='/curations' component={Curations}/>
        </Switch>
    </main>
)

export default Main;