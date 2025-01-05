import { Routes, Route } from 'react-router-dom';
import React from 'react';

import Trending from "./Components/Trending"
import Home from "./Components/Home"
import Popular from "./Components/Popular"
import Movie from "./Components/Movie"
import Tvshows from './Components/Tvshows';
import People from './Components/People';
      
import Moviedetails from './Components/MovieDetails';
import TvDetails from './Components/TvDetails';
import PersonDetails from './Components/PersonDetails';
import Trailer from './Components/partials/Trailer';
import Notfound from './Components/Notfound';

import About from "./Components/About";
import Contact from "./Components/Contact";

const App = () => {
  return <div className="bg-[#1F1E24] w-screen min-h-screen flex">

    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/trending' element={<Trending />} />
      <Route path='/popular' element={<Popular />} />

      <Route path='/movie' element={<Movie />} />
      <Route path="/movie/details/:id" element={<Moviedetails />} >
        <Route path="/movie/details/:id/trailer" element={<Trailer />} />
      </Route>

      <Route path='/tv' element={<Tvshows />} />
      <Route path="/tv/details/:id" element={<TvDetails />} >
        <Route path="/tv/details/:id/trailer" element={<Trailer />} />

      </Route>

      <Route path='/person' element={<People />} />
      <Route path="/person/details/:id" element={<PersonDetails />} />
      <Route path="*" element={<Notfound />} />

      <Route path='/about' element={<About />} />
      <Route path='/contact' element={<Contact />} />
    </Routes>
  </div>
}
export default App;  