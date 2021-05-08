import React from 'react';
import Stars from './stars.js';
import ReviewList from './reviewList.js';
import ReviewForm from './reviewForm.js';

export default class Movie extends React.Component {
    
    constructor(props) {
        super(props)
        this.state = {
            movieName: this.props.movieName,
            director: this.props.director,
            rating: 0,
            reviews:[]
        }
    }

    setRating=(e) => {
        console.log(e); 
        this.setState({rating:e.target.value}) 
    }

    handleSubmit=(e) => {
        this.setState(preState => ({reviews:[...preState.reviews,{review:e.target[0].value}]}));
        e.preventDefault();
        
    }
    
    render() {
        return(
            <>

                <div>
                {this.state.movieName}
                </div>
                <div>
                {this.state.director}
                </div>
                <div>
                {this.state.rating} star rating!
                </div>
                <Stars setRating={this.setRating}/>
                <ReviewList reviews={this.state.reviews}/>
                <ReviewForm handleSubmit={this.handleSubmit}/>
            
            </>
        )
    }
}