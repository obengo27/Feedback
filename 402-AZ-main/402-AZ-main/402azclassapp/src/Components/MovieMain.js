import {useEffect, useState} from 'react';

function Movies() { 

  const [movies, setMovies] = useState();
  const baseUrl = "https://d8zczkov06.execute-api.us-east-1.amazonaws.com/movies"
  var dynamicUrl = "";

  
  //request options to delete movie
  const deleteRequestOptions = { 
    method: 'DELETE',
    headers:{'Content-Type':' application/json'}
  }

   // network operation to delete movie.
  const deletemovie = () => {
    try{
        fetch(dynamicUrl,deleteRequestOptions)
        .then ((res) => {
          res.json();
          
        })
        .then((data) => {
          console.log(data); 
          //Reload Movies
          window.location.reload();
        })
    

  }catch(err){
      console.log(err);
  }
  }

  
  const removeThisMovie  = (gId) => {
    dynamicUrl = "https://d8zczkov06.execute-api.us-east-1.amazonaws.com/movies/"+gId;
    deletemovie();
  }
  
  const getMovie = () => {
    fetch(baseUrl)
    .then((res) => res.json())
    .then((res) => { setMovies(res.Items)});
  }

  useEffect(() => {
    getMovie()
  }, [])

  return(
    <>
    <section className="section">
      <h1 className="title">Movies</h1>
    </section>
    <section className="container">
      <div className="columns is-multiline">
        {
          movies && movies.length > 0
          ? movies.map(movie=>
            <div className="column is-one-third">
              <div className='card'>
                <div className='card-content'>
                  <div className='content'>
                    <img src={movie.moviesImgUrl} alt="Movie Poster"/>
                    <p className='subtitle'>{movie.moviesTitle}</p>
                    <p>{movie.moviesDescription}</p>
                    <div className="buttons">
                    <a target="_blank" className="button is-black" href={movie.moviesLink}>
                        <strong>Watch Movie</strong>
                    </a>
                    <a className="button is-danger" onClick={() => removeThisMovie(movie.id)}>
                        <strong>Remove Movie</strong>
                    </a></div>
                  </div>
                </div>
              </div>
            </div>
            ) 
          : <h1> Loading Movies... </h1>
          }
      </div>
    </section>
    </>
    )
    }


export default Movies;