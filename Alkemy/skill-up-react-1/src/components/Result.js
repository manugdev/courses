import { useEffect, useState } from "react";
import axios from "axios";
import swal from "@sweetalert/with-react";
import { Link } from "react-router-dom";

export default function Result(){

  let query = new URLSearchParams(window.location.search);
  let keyboard = query.get("keyboard");
  

  const [moviesResult, setMoviesResult] = useState([]);

  useEffect(() => {
    const endPoint = `https://api.themoviedb.org/3/search/movie?api_key=e71ca31b971843d659b2f5abf6795fd5&language=en-US&page=1&include_adult=false&query=${keyboard}`
    axios.get(endPoint)
    .then(res => {
      const moviesArray = res.data.results;
      if(moviesArray.length === 0){
        swal({
          title: "No se encontraron coincidencias",
          icon: "info",
          button: "OK",
        });
      }
      setMoviesResult(moviesArray);
    })
    .catch(err => console.log(err))
  }, [keyboard])

  return(
    <>
    {moviesResult.length === 0 && <h3>No hay resultados</h3>}
    <div className="row">
        {
          moviesResult.map((oneMovie, index) => {
            return (
              <div className="col-3" key={index}>
                <div className="card my-4">
                  <img className="card-img-top" src={`https://image.tmdb.org/t/p/w500/${oneMovie.poster_path}`} alt="Movie cartel" />
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