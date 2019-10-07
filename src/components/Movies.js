import React from 'react';
import '../App.css';
import Movieitems from './MovieItems.js';
class Movies extends React.Component {
    render() {
        return this.props.movies.map((movie) => {
            // console.log({movie})
            return <Movieitems movie={movie}></Movieitems>
        });
    }
}
export default Movies;