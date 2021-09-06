import React from "react";

import { Navbar, Button } from "reactstrap";

const Home = (props) => {
  return (
    <div className="home">
      <Navbar className="landNav">
        <h2>Top 3</h2>
        <Button color="primary" href="/login">Sign Out</Button>
      </Navbar>
      
      <div className="homePage">
        <Button className="btnAdd" color="primary" href="/movie">Add Movie</Button>    
        <h3 className="title">Movies</h3>
        {props.movies && props.movies.map((movie) => {
            return (
              <div key={movie.id} className="movie-card">
                <h3>{movie.name}</h3>
                {/* <p>{movie.description}</p> */}
                <Button color="primary" className="hmbtn" href={`/edit/${movie.id}`}>Edit</Button>
                <Button color="danger" className="hmbtn2" onClick={() => props.delete(movie.id)}>X</Button>
              </div>
              );
            })}
      </div>
    </div>
  );
};

export default Home;
