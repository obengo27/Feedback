import React, {Component} from 'react';

export default class Footer extends Component{
    render(){
        return(
            <footer class="footer">
            <div id="navbarBasicExample" class="navbar-menu">
                <div class="navbar-start">
                

                <a class="navbar-item" href="/contact">
                    Contact Us 
                </a>

                <a class="navbar-item" href="/About">
                     About Us
                </a>

                <a class="navbar-item" href="/tc">
                  Terms & Conditions
                </a>
                
                <a class="navbar-item" href="/privacypolicy">
                    Privacy Pollicy
                </a>


                <a class="navbar-item" href="/catalogue">
                    Catalogue
                </a>

            

                
                </div>
            </div>
            </footer>
        )
    }
}