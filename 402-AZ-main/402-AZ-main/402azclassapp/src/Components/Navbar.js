import React, {Component} from 'react';
import logo from '../logo.png';
export default class NavBar extends Component{
    render(){
        return(
            <nav className="navbar is-link" role="navigation" aria-label="main navigation">
            <div className="navbar-brand">
                <a classn="navbar-item" href="/">
                <img src={logo} width="80" height="80"/>
                </a>

                <a role="button" className="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
                </a>
            </div>
            <div id="navbarBasicExample" className="navbar-menu">
                <div className="navbar-start">

                

                <a className="navbar-item" href="/movies">
                    <strong>Movies</strong>
                </a>

                <a className="navbar-item" href="/Reviews">
                <strong>Reviews</strong>
                </a>
                <a className="navbar-item" href="/tvshows">
                <strong>TVShows</strong>
                </a>

                <a className="navbar-item" href="/MoviesAdmin">
                <strong>MoviesAdmin</strong>
                </a>
                
                </div>
             
                <div className="navbar-end">
                <div className="navbar-item">
                    <div className="buttons">
                    <a className="button is-warning">
                        <strong>Sign up</strong>
                    </a>
                    <a className="button is-light">
                        Log in
                    </a>
                    </div>
                </div>
                </div>
            </div>
            </nav>
        )
    }
}