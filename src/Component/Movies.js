import React , {Component} from 'react';
import '../css/Movies.css';

class Movies extends Component{
    constructor(props){
        super(props);
        this.state={

        }
    }
    render() {
        const replace_htmltg = this.props.title.replace(/<[^>]*>?/g, '')
        console.log()
        return (
             <div className='Movie'>
                 <img src={this.props.image}/>
                 <p>{replace_htmltg}</p>
                 <p>{this.props.director}</p>
                 <p>{this.props.pubDate}</p>
                 <p>{this.props.userRating}</p>
                 <a href={this.props.link}>LINK</a>
             </div>
        );
    }
}

export default Movies;