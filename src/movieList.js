import React from 'react';
import Movie from './movie.js';
import 'bootstrap/dist/css/bootstrap.css'

export default class MovieList extends React.Component {
    
    constructor(props) {
        super(props)
        this.state = 
                    {movies:[{
                        movieName:'The Revenant',
                        director: 'Alejandro Gonzalaz Inarritu',
                        rating: '5 stars',
                        },
                        {
                        movieName:'Movie 43',
                        director: 'Seth McFarland',
                        rating: '1 star',
                        },
                        {
                        movieName:'Iron Man 10',
                        director: 'Bo Burnham',
                        rating: '4 stars',
                        }
                    ]}
    }

    render() {
        return (
            <div className="container"> 
                
                {this.state.movies.map(movie => {
                    return <Movie  movieName={movie.movieName}
                                   director={movie.director}
                                   rating={movie.rating}
                                />
                })} 

            </div>
        )
    }
}