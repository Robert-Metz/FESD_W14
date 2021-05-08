import React from 'react';
import Review from './review.js';

const ReviewList = (props) => {
   
        return(
            <>
                {props.reviews.map((review, i) => {
                    return(
                        <Review review={review.review}key={i}/>
                    )
                })}
            </>
        )   
}
export default ReviewList;