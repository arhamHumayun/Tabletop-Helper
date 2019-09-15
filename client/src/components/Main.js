import React from 'react';
import { Switch, Route } from 'react-router-dom';
import About from './About'
import DicePage from './Dice/DicePage';
import SplashScreen from './SplashScreen';
import DnD5eStats from './StatGenerator/DND5eStats';
import CoCStats from './StatGenerator/CoCStats';
import Curations from './Curations'
import CyberpunkWrapper from './Combat/CyberpunkWrapper'
import PFstats from './StatGenerator/PFstats';

const Main = () => (
    <main style={{height: '100%'}} >
        <Switch>
            <Route exact path ='/' component={SplashScreen}/>
            <Route exact path ='/dice' component={DicePage}/>
            <Route exact path ='/about' component={About}/>
            <Route exact path ='/generate/dnd' component={DnD5eStats}/>
            <Route exact path ='/generate/coc' component={CoCStats}/>
            <Route exact path ='/generate/pf' component={PFstats}/>
            <Route exact path ='/curations' component={Curations}/>
            <Route exact path ='/combat/cp' component={CyberpunkWrapper}/>
        </Switch>
    </main>
)

export default Main;