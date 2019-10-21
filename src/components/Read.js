//imports
import React from 'react';
import Movies from './Movies';
import axios from 'axios';


class Read extends React.Component {


    state = { movies: [] }
    componentDidMount() {
        axios.get('http://localhost:4000/api/movies')
            .then(response => {
                this.setState({ movies: response.data.GMovies});
            })
            .catch(function (error) {
                console.log(error);
            })
    }

    render() {
        return (
            //div class
            <div className="App">
                <h1> Hello from Read</h1>
                <Movies movies={this.state.movies}></Movies>
            </div>
        );

    }
}
export default Read;