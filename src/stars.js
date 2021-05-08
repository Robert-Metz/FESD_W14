import React from 'react';

export default class Stars extends React.Component {

    constructor(props) {
        super(props)
    }

    render() {
        return (
            
            <select name="ratings" onChange={this.props.setRating}>
                <option value='1'>
                    1 Star
                </option>
                <option value='2'>
                    2 StarsS
                </option>
                <option value='3'>
                    3 Stars
                </option>
                <option value='4'>
                    4 Stars
                </option>
                <option value='5'>
                    5 Stars
                </option>
             </select>
        )
    }
}