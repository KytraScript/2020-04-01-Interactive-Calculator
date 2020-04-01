import React, {useState, useEffect, useMemo} from 'react';
import ReactDOM from 'react-dom';
import {HashRouter, Route, Switch, Link} from 'react-router-dom';
import Home from './components/Home.jsx';
import StalkCalculator from './components/StalkCalculator.jsx';

const App = () => {

    //uses React-Router to switch between components for display in the content-container <div>
    return (
        <div className={'main-container'}>
            <div className={'navigation'}>
                <div className={'nav-wrapper'}>
                    <div className={'main-title'}>Interactive Calculator || Mintbean Hackathon</div>
                    <div className={'nav-links'}>
                        <Link to={'/'}>Home</Link>
                        <Link to={'/stalks'}>Stalk Profits Calculator</Link>
                    </div>
                </div>
            </div>
            <div className={'content-container'}>
                <Switch>
                    <Route exact path={'/'}>
                        <Home/>
                    </Route>
                    <Route path={'/stalks'}>
                        <StalkCalculator/>
                    </Route>
                </Switch>
            </div>
        </div>
    );

};

ReactDOM.render(<HashRouter><App/></HashRouter>, document.getElementById('root'));
