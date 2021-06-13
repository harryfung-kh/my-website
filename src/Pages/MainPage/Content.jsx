import React from 'react';
import './Content.css'
import Home from './ContentPage/Home'
import MyPinterest from './ContentPage/MyPinterest'
import { Switch, Route, useRouteMatch } from 'react-router-dom'

function Content() {
    let match = useRouteMatch();
    return (
        <main id="content">
            <Switch>
                <Route path={`${match.path}myPinterest`}>
                    <MyPinterest />
                </Route>
                <Route path={match.path}>
                    <Home />
                </Route>
            </Switch>

        </main >
    )
}

export default React.memo(Content);