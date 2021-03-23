import React, { useState, useEffect } from 'react';
import './App.css';
import Recepie from "./Recipe";



const App = () => {
  const App_ID = "10e2d782";
  const App_key = "838cc71826e0af53a3246a9645ed1ace";


  const [recepies, setRecepies] = useState([]);

  //for storing search results
  const [searchResult, setSearchresult] = useState("");

  //for searchig
  const [query, setQuery] = useState("cake");



  useEffect(() => {
    getRecepies();
  }, [query]);


  //for having recepie from the API
  const getRecepies = async () => {
    const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${App_ID}&app_key=${App_key}`);
    const data = await response.json();
    setRecepies(data.hits);
    // console.log(data.hits);
  }


  //for update the search value through the input box
  const updateSearch = (e) => {
    setSearchresult(e.target.value);
    //console.log(searchResult);
  }


  //for getting the search value from the form and set it the query value
  const getSearch = (e) => {
    e.preventDefault();
    setQuery(searchResult);
    setSearchresult("");

  }

  return (

    <div className="App">
      <form onSubmit={getSearch} className="search-form">
        <input className="search-bar" type="text" value={searchResult} onChange={updateSearch} placeholder="Enter a Dish" />
        <button className="search-button" type="submit">Search</button>
      </form>
      <div className="recipe">
        {recepies.map((recipe) => (
          <Recepie
            key={recipe.recipe.label}
            title={recipe.recipe.label}
            calories={recipe.recipe.calories}
            image={recipe.recipe.image}
            ingredients={recipe.recipe.ingredients}
          />
        ))}
      </div>


    </div>

  )
}


export default App;
