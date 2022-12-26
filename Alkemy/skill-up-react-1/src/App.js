import { Routes ,Route } from 'react-router-dom';
import { useState, useEffect } from 'react';

import Login from "./components/Login";
import List from "./components/List";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Detail from "./components/Detail";
import Result from "./components/Result";
import Favourite from './components/Favourite';

import "./css/bootstrap.min.css";
import "./css/app.css"


function App() {
  const [favourites, setFavourites] = useState([]);

  useEffect(() => {
    const favsInLocal = localStorage.getItem("favs");

    if(favsInLocal !== null){
      const favsArray = JSON.parse(favsInLocal);
      setFavourites(favsArray);
    }
  }, []);


  const favMovies = localStorage.getItem("favs");
  let tempMoviesInFavs;
  if(favMovies === null){
    tempMoviesInFavs = [];
  } else {
    tempMoviesInFavs = JSON.parse(favMovies);
  }

  const addOrRemoveFromFavs = (e) => {
    const btn = e.currentTarget;
    const parent = btn.parentElement;
    const imageUrl = parent.querySelector("img").getAttribute("src");
    const title = parent.querySelector("h5").innerText;
    const overView = parent.querySelector("p").innerText;
    
    const movieData = {
      imageUrl,
      title,
      overView,
      id: btn.dataset.movieId
    }

    let movieIsInArr = tempMoviesInFavs.find(oneMovie => {
      return oneMovie.id === movieData.id
    })

    if (!movieIsInArr){
      tempMoviesInFavs.push(movieData);
      localStorage.setItem("favs", JSON.stringify(tempMoviesInFavs));
      setFavourites(tempMoviesInFavs);
      console.log("Se agrego");
    } else {
      let moviesLeft = tempMoviesInFavs.filter(oneMovie => {
        return oneMovie.id !== movieData.id;
      });
      localStorage.setItem("favs", JSON.stringify(moviesLeft));
      setFavourites(moviesLeft);
      console.log("Se quito");
    }
  }

  return (
    <section className='container mt-3'>
      <Header favourites={favourites} />
      <Routes>
        <Route exact path="/" element={<Login />} />
        <Route exact path="/List" element={<List addOrRemoveFromFavs={addOrRemoveFromFavs} />} />
        <Route exact path="/Detail" element={<Detail addOrRemoveFromFavs={addOrRemoveFromFavs} />} />
        <Route exact path="/Result" element={<Result />} />
        <Route exact path="/Favourite" element={<Favourite favourites={favourites} addOrRemoveFromFavs={addOrRemoveFromFavs} />} />
      </Routes>
      <Footer />
    </section>

  );
}

export default App;
