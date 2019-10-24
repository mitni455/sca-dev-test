import * as React from "react";
import * as ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch, DefaultRoute } from 'react-router-dom';

import HomePage from './HomePage';
import CheersPage from './CheersPage';

const classes = {
    header: {
        background: 'linear-gradient(180deg, #474d54, #2d3034)',
        borderBottom: '1px solid #1d1f22',
        margin: '0px',
        lineHeight: '50px',
        boxShadow: '1px 1px 3px rgba(0,0,0,.1)',
        fontSize: '1.2em',
        padding: '0px 5%',
        color: '#c7c2bc',
        fontWeight: 400
    }
}

const App = (props) => {
    
    return (
        <React.Fragment>
            <h1 style={classes.header}>
                Subscribe
            </h1>
            <BrowserRouter basename="/#">
                <Switch>
                    <Route exact path="/" render={props => (
                        <HomePage />
                    )}/>
                    <Route exact path="/cheers" render={props => (
                        <CheersPage />
                    )}/>
                </Switch>
            </BrowserRouter>
        </React.Fragment>
    )
}

ReactDOM.render(<App />, document.getElementById('root'));