import React from "react";
import "./App.css";
import axios from "axios";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Login from "./auth/Login";
import Register from "./auth/Register";
import { axiosWithAuth } from "./auth/axiosWithAuth";
import Home from "./components/Home";
import AddMovies from "./components/AddMovies";
import Edit from "./components/Edit";
import Land from "./components/Land";
// import PrivateRoute from "./components/PrivateRoute";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      movies: [
        {
          id: 1,
          name: ''
        }
      ]
    };
  }

  componentDidMount() {
    const endpoint = "https://top9-the2nd.herokuapp.com/api/movies";
    axios
      .get(endpoint, {
        headers: { authorization: localStorage.getItem("token") },
      })
      .then((res) => {
        this.setState({
          movies: res.data,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  addMovie = (movie) => {
    // created an authorization component with headers/baseURL that is passed into axiosWithAuth()
    axiosWithAuth()
      .post()
      .then(() => {
        const movieName = {
          id: Date.now(),
          name: movie.name
        }
        const newMovie = [...this.state.movies, movieName]
        this.setState({
         movies: newMovie
        });
        window.location.href = "/home";
      })
      .catch((error) => console.log(error));
  };

  updateMovie = (e, id, updatedMovie) => {
    e.preventDefault();
    const endpoint = `https://top9-the2nd.herokuapp.com/api/movies/${id}`;
    
    axios
      .put(endpoint, updatedMovie, {
        headers: { Authorization: localStorage.getItem("token") },
      })
      .then((res) => {
        console.log(res)
        window.location.href = "/home";
      })
      .catch((error) => {
        console.log(error);
      });
  };

  deleteMovie = (id) => {
    const endpoint = `https://top9-the2nd.herokuapp.com/api/movies/${id}`;
    axios
      .delete(endpoint, {
        headers: { Authorization: localStorage.getItem("token") },
      })
      .then((response) => {
        const movie = response.data;
        this.setState({ movie }); 
        window.location.href = "/home";
      })
      .catch((error) => {
        console.log(error);
      });
  };

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  render() {
    return (
      <div className="App">
        <Router>
          <Route exact path="/" component={Land} />
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
          <Route path="/home" render={(props) => (<Home {...props} mount={this.componentDidMount} movies={this.state.movies} delete={this.deleteMovie} /> )} />
          <Route path="/movie"render={(props) => ( <AddMovies {...props} addMovie={this.addMovie} /> )} />
          <Route path="/edit/:id" render={(props) => ( <Edit {...props} movies={this.state.movies} updateMovie={this.updateMovie} value={this.state.name} /> )} />
        </Router>
      </div>
    );
  }
}

export default App;
