import { Navigate } from "react-router-dom";
import { useEffect, useState } from "react";
import swal from "@sweetalert/with-react";
import axios from "axios";

function Detail() {

  const [movieDetail, setMovieDetail] = useState(null);

  let token = sessionStorage.getItem("token");
  let query = new URLSearchParams(window.location.search);
  let movieID = query.get("movieID");
  
  useEffect(() => {
    console.log(movieID)
    const endPoint = `https://api.themoviedb.org/3/movie/${movieID}?api_key=e71ca31b971843d659b2f5abf6795fd5&language=es-ES`;
    axios.get(endPoint)
      .then(res => {
        const movieData = res.data;
        setMovieDetail(movieData);
      })
      .catch(err => {
        swal({
          title: "Hubo errores intentando mostrar los detalles.",
          text: `Hubo errores en la API -> ${err}`,
          icon: "info",
          button: "OK",
        });
      })
  }, [movieID])

  return(
    <>
      {!token && <Navigate replace to="/"/>}
      {!movieDetail && <p>Cargando...</p>}
      {movieDetail && 
        <>
        <h2>Titulo: {movieDetail.title}</h2> 
        <div className="row">
          <div className="col-4">
            <img className="card-img-top" src={`https://image.tmdb.org/t/p/w500/${movieDetail.poster_path}`} alt="detalle" />
          </div>
          <div className="col-8">
            <h5>Fecha estreno {movieDetail.release_date}</h5>
            <h5>Reseña</h5>
            <p>{movieDetail.overview}</p>
            <h5>Rating {movieDetail.vote_average}</h5>
            <h5>Generos</h5>
            <ul>
              {movieDetail.genres.map(oneGenre => <li key={oneGenre.id}>{oneGenre.name}</li>)}
            </ul>
          </div>
        </div>
        </>
      }
    </>
    
  );
}

export default Detail;