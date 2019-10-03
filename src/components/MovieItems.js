import React from 'react';

class MovieItem extends React.Component{

    render(){
            return (
                <div>
        {   <h4>(this.props.movie.title)</h4>
                <p>(this.props.movie.year)</p>
                <img>(this.props.movie.poster)</img>       
        }
     
            
            
            
            
                </div>
            )




    }






}