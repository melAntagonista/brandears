import React, { Component } from 'react';
// import '../design/App.css';
import { Route, BrowserRouter, Switch } from 'react-router-dom';
import { SecureRoute, ImplicitCallback } from '@okta/okta-react';
import Navigation from './shared/Navigation';
import RegistrationForm from './auth/RegistrationForm';
import config from './app.config';
import LoginPage from './auth/LoginPage';
import ProfilePage from './auth/ProfilePage';
import LoginForm from './auth/LoginForm';

export default class AppLogin extends Component {
    render() {
        return (
            <div className="AppLogin">
                <BrowserRouter>
                    <Navigation />
                    <Switch>

                        <Route path="/login/form" component={LoginForm} />
                        <Route path="/login/page" render={() => <LoginPage baseUrl={config.url} />} />
                        <Route path="/implicit/callback" component={ImplicitCallback} />
                        <Route path="/register" component={RegistrationForm} />
                        <SecureRoute path="/profile" component={ProfilePage} />
                    </Switch>
                </BrowserRouter>
            </div>
        );
    }
}