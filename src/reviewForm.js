import React,{useState} from 'react';

const ReviewForm = (props) => {
    
    const [reviewText,setReview] = useState('');

    const handleChange=(e) => {
        setReview(e.target.value);
    }

    return(
        <form onSubmit={props.handleSubmit}>
            <label>ADD YOUR REVIEW</label>
            <textarea value={reviewText} onChange={handleChange}></textarea>
            <button type="submit">SUBMIT</button>
        </form>
    )
    
}
export default ReviewForm;