import React from 'react';
import Movies from './Movies';
import axios from 'axios';
class Read extends React.Component {
    state = { movies: [] }
    componentDidMount() {
        axios.get('https://jsonblob.com/api/jsonblob/090d3cd5-e03d-11e9-a2ce-89c479f14772')
            .then(response => {
                this.setState({ movies: response.data.Search });
            })
            .catch(function (error) {
                console.log(error);
            })
    }
    render() {
        return (
            <div className="App">
                <Movies movies={this.state.movies}></Movies>
            </div>
        );
    }
}
export default Read;