import React, { useState, useEffect } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import SearchContainer from "./components/Search/SearchContainer/SearchContainer";

const MOVIE_API_URL = "https://www.omdbapi.com/?s=man&apikey=fddf39f1"; // you should replace this with yours

// want Header, then Search, below Search we want section for nominations and then search results
const App = () => {
  return (
    <div>
      <Header />
      <SearchContainer />
    </div>
  );
};

export default App;
