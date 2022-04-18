import React, { Component } from 'react';
import Movies from './Movies';
class MovieList extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }
    render() {
        const movieList = this.props.items
        console.log(movieList)
        const result = movieList.map(
            (data,index) => (<Movies key={index} title={data.title}
                director={data.director}
                image={data.image}
                pubDate={data.pubDate}
                userRating={data.userRating}
                link={data.link}></Movies>)
        )
        return (
            <div className='Movies'>
                {result}
            </div>
        );
    }
}

export default MovieList;