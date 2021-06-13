import React from 'react';
import './Content.css'
import Home from './ContentPage/Home'
import MyPinterest from './ContentPage/MyPinterest'
import { Switch, Route } from 'react-router-dom'

function Content() {
    return (
        <main id="content">
            <Switch>
                <Route path="/myPinterest">
                    <MyPinterest />
                </Route>
                <Route path="/">
                    <Home />
                </Route>
            </Switch>

        </main >
    )
}

export default React.memo(Content);