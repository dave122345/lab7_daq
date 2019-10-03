import React from 'react';
import '../App.css';
import MovieItems from './movieItem';
class Movies extends React.Component {
    render() {
        return this.props.movies.map((movie) => {
            // console.log({movie})
            return <MovieItems movie={movie}></MovieItems>
        });
    }
}
export default Movies;