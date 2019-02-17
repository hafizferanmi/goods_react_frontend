import React from 'react';
import { NavLink } from 'react-router-dom';

export default class Header extends React.Component {
    state = {
      name: '',
    }

    render(){
        return(
            <div className="header">
            <nav className="navbar navbar-default main-navigation" role="navigation">
                <div className="container">
                <div className="navbar-header">
                    <button type="button" className="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
                    <span className="sr-only">Toggle navigation</span>
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                    </button>
                    <NavLink to='/' className="navbar-brand logo" style = {{ marginTop: 10, color: 'red', fontSize: 20, fontWeight: 'bold' }}>STORE</NavLink>
                </div>
                <div className="collapse navbar-collapse" id="navbar">
                    <ul className="nav navbar-nav navbar-right">
                    
                    <li><NavLink to='/'><i className="lnr lnr-enter"></i>Home</NavLink></li>
                    <li><NavLink to='/add'><i className="lnr lnr-enter"></i>Add Item</NavLink></li>
                    </ul>
                </div>
                </div>
            </nav>
        </div>
        )
    }
}