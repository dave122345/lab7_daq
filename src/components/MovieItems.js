import React from 'react';
import '../App.css';
import Card from 'react-bootstrap/Card'
class MovieItems extends React.Component {
        render() {
                return (
                        <div>
                                <h4>{this.props.movie.Title}</h4>
                                <p>{this.props.movie.Year}</p>
                                <img src={this.props.movie.Poster} width="200" height="200"></img>
                        </div>
                );
        }
}

export default MovieItems;