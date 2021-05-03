import React, { useState, useEffect } from "react";
import "./App.css";
import Header from "./components/Header";
import Movie from "./components/Movie";
import Search from "./components/Search";

const MOVIE_API_URL = "https://www.omdbapi.com/?s=man&apikey=fddf39f1"; // you should replace this with yours


// want Header, then Search, below Search we want section for nominations and then search results
const App = () => {
  return (<div>
    <Header/>
    <Search />

    <Movie />
  </div>);
};

export default App;
