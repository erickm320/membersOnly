import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Authentication from './components/Authentication/Authentication';
import Dashboard from './components/Dashboard/Dashboard';
import Songs from './components/Songs/Songs';
import Posts from './components/Posts/Posts';

export default (
    <Switch>
        <Route exact path = '/' component={Authentication}/>
        <Route path = '/dashboard' component={Dashboard}/>
        <Route path = '/song' component={Songs}/>
        <Route path = '/posts/:songid' component={Posts}/>
    </Switch>
)