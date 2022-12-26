import { Navigate } from "react-router-dom";

export default function Favourite(props){

  let token = sessionStorage.getItem("token");

  return(
    <>
    {!token && <Navigate replace to="/"/>}
    <h2>Seccion favoritos</h2>
    <div className="row">
      {!props.favourites.length && <div className="col-12 text-danger">No tenés nada en favoritos</div>}
      {
        props.favourites.map((oneMovie, index) => {
          return (
            <div className="col-3" key={index}>
              <div className="card my-4">
                <img className="card-img-top" src={oneMovie.imageUrl} alt="Movie cartel" />
                <button 
                  className="favourite-btn"
                  onClick={props.addOrRemoveFromFavs}
                  data-movie-id={oneMovie.id}
                >🖤</button>
                <div className="card-body">
                  <h5 className="card-title">{oneMovie.title.substring(0, 30)}...</h5>
                  <p className="card-text">{oneMovie.overView.substring(0, 100)}...</p>
                </div>
              </div>
            </div>
          )
        })
      }
    </div>
    </>
  );
}

