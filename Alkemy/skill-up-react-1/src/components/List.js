import { Link, Navigate } from "react-router-dom";
import { useEffect, useState } from "react";
import swal from "@sweetalert/with-react";
import axios from "axios";

function List(props) {
  let token = sessionStorage.getItem("token");

  const [ moviesList, setMoviesList ] = useState([]);

  useEffect(() => {
    const endPoint = "https://api.themoviedb.org/3/discover/movie?api_key=e71ca31b971843d659b2f5abf6795fd5&language=es-ES&sort_by=popularity.desc&include_adult=false";
    axios.get(endPoint)
      .then(res => {
        const apiData = res.data;
        setMoviesList(apiData.results);
      })
      .catch(error => {
        swal({
          title: "Hubo errores intenta de nuevo mas tarde",
          text: `Hubo errores en la API -> ${error}`,
          icon: "error",
          button: "Volver",
        });
      })
  }, [setMoviesList]);

  return(
    <>
      {!token && <Navigate replace to="/"/>}
      <div className="row">
        {
          moviesList.map((oneMovie, index) => {
            return (
              <div className="col-3" key={index}>
                <div className="card my-4">
                  <img className="card-img-top" src={`https://image.tmdb.org/t/p/w500/${oneMovie.poster_path}`} alt="Movie cartel" />
                  <button 
                    className="favourite-btn"
                    onClick={props.addOrRemoveFromFavs}
                    data-movie-id={oneMovie.id}
                  >🖤</button>
                  <div className="card-body">
                    <h5 className="card-title">{oneMovie.title.substring(0, 30)}...</h5>
                    <p className="card-text">{oneMovie.overview.substring(0, 100)}...</p>
                    <Link to={`/Detail?movieID=${oneMovie.id}`} className="btn btn-primary">Ver detalles</Link>
                  </div>
                </div>
              </div>
            );
          })
        }
      </div>
    </>
  );
}

export default List;