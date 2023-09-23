import { useEffect } from "react";

import './App.css'
import searchIcon from './search.svg'

const API_URL = "http://www.omdbapi.com/?i=tt3896198&apikey=c16883c6";

const App = () => {

  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();

    console.log(data.Search)
  }

  useEffect(() =>{
    searchMovies('Spiderman');
  }, []);

  return (
    <div className="App">
      <h1>MovieBOlds</h1>
    </div>
  );
};

export default App;
