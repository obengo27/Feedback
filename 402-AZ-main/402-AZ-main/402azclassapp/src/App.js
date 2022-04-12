import './App.css';
import React, {Component} from 'react';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import NavBar from './Components/Navbar';
import Footer from './Components/Footer';
import Home from './Components/Home';
import MovieMain from './Components/MovieMain';
import Reviews from './Components/Reviews';
import TVShows from './Components/TV Shows';
import MoviesAdmin from'./Components/MoviesAdmin';
import Contact from './Components/Contact';
import TermsConditions from './Components/TermsConditions ';
import Catalogue from './Components/Catalogue';
import PrivacyPolicy from './Components/PrivacyPolicy';


class App extends Component{
  render(){
    return(
      <div>
        <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/Reviews" element={<Reviews/>}/>
          <Route path="/movies" element={<MovieMain/>}/>
          <Route path="/tvshows" element={<TVShows/>}/>
          <Route path="/contact" element={<Contact/>}/>
          <Route path ="/MoviesAdmin" element={<MoviesAdmin/>}/>
          <Route path='/tc' element={<TermsConditions/>}/>
          <Route path='/catalogue' element={<Catalogue/>}/>
          <Route path="/privacypolicy" element={<PrivacyPolicy/>}/>
        
        </Routes>
      <Footer/>
      </Router>
      </div>
    );
  }
}

export default App;
