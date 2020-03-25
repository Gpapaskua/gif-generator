import React from 'react';
import { useState, useEffect } from 'react'
import classes from './App.module.css';
import Gyph from './components/Gyph'

const App = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [gifs, setGifs] = useState([]);
  const [search, setSearch] = useState('');
  const [query, setQuery] = useState('');
  const [param, setParam] = useState("trending")
  const key = "t3YpMqTFvwj4ciNjGxOhiprmA11ym3zG";
  const url = "https://api.giphy.com/v1/gifs/";

  useEffect(() => {
    fetch(`${url}${param}?api_key=${key}&q=${query}&limit=12`)
      .then(res => res.json())
      .then(data => {
        setGifs(data.data)
        setIsLoaded(true)
      })



  }, [query]);

  const onChangeHandler = (e) => {
    setSearch(e.target.value)
  }

  const onSubmitHandler = (e) => {
    e.preventDefault();
    setQuery(search);
    setParam("search")
    setSearch("");


  }

  const spinnerStyle = {
    width: "3rem",
    height: "3rem"
  }

  console.log(gifs)
  return (
    <div className={classes.Wrapper}>
      <div className={classes.searchBar}>
        <h1 className={classes.header}>Giphy Generator</h1>
        <form onSubmit={onSubmitHandler}>
          <input type="text" onChange={onChangeHandler} className={classes.input} placeholder="Search Gyphs" value={search} />
          <button type="submit" className={classes.submit}>Search</button>
        </form>
      </div>
      {
        !isLoaded ? <div className={classes.spinner}>
          <div class="spinner-grow text-primary" role="status">
            <span class="sr-only">Loading...</span>
          </div>
          <div class="spinner-grow text-secondary" role="status">
            <span class="sr-only">Loading...</span>
          </div>
          <div class="spinner-grow text-success" role="status">
            <span class="sr-only">Loading...</span>
          </div>
          <div class="spinner-grow text-danger" role="status">
            <span class="sr-only">Loading...</span>
          </div>
          <div class="spinner-grow text-warning" role="status">
            <span class="sr-only">Loading...</span>
          </div>
          <div class="spinner-grow text-info" role="status">
            <span class="sr-only">Loading...</span>
          </div>
          <div class="spinner-grow text-light" role="status">
            <span class="sr-only">Loading...</span>
          </div>
          <div class="spinner-grow text-dark" role="status">
            <span class="sr-only">Loading...</span>
          </div>
        </div>
          :
          <div className={classes.content}>
            {
              gifs.map((gif => {
                return <Gyph key={gif.id} gif={gif} />
              }))
            }
          </div>
      }
    </div>
  )
}

export default App;
