import React, { lazy, Suspense } from 'react';
import './Content.css'
import { Switch, Route, useRouteMatch } from 'react-router-dom'

function Content() {
    let match = useRouteMatch();

    const Home = lazy(() => import('./ContentPage/Home'));
    const MyPinterest = lazy(() => import('./ContentPage/MyPinterest'));
    const ApiTest = lazy(() => import('./ContentPage/ApiTest'));
    return (
        <main id="content">
            <Suspense fallback={<div>Loading...</div>}>
                <Switch>
                    <Route path={`${match.path}/myPinterest`}>
                        <MyPinterest />
                    </Route>
                    <Route path={`${match.path}/ApiTest`}>
                        <ApiTest />
                    </Route>
                    <Route path={match.path}>
                        <Home />
                    </Route>
                </Switch>
            </Suspense>
        </main >
    )
}

export default React.memo(Content);