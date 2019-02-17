import React, { Component } from 'react';
import HomeComponent from './components/HomeComponent/home.component';
import AddGoodComponent from './components/AddGoodComponent/add.component';
import DetailsComponent from './components/GoodDetailsComponent/details.component';
import HeaderComponent from './components/include/HeaderComponent/header.component';
import SuccessComponent from './components/SuccessComponent/success.component';
import NotFoundComponent from './components/NotFoundComponent/notfound.component';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
class App extends Component {
    state = {
        username: 'protocall',
        password: 'hafizferanmi'
    }

    render() {
        return (
            <React.Fragment>
            <Router>
            <div>
                <HeaderComponent />
                <Switch>
                    <Route path='/' component={ HomeComponent } exact />
                    <Route path='/add' component={ AddGoodComponent } />
                    <Route path='/details/:goodsId' component={ DetailsComponent } />
                    <Route path='/success' component={ SuccessComponent } />
                    <Route component={ NotFoundComponent } />
                </Switch>
            </div>
            </Router> 
        </React.Fragment>

        

        );
    }
}

export default App;