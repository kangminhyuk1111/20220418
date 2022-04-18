import React , {Component} from 'react';
import { Button } from 'react-bootstrap';
import '../css/pagination.css';

export default class Pagenation extends Component{
    constructor(props){
        super(props);
        this.state={

        }
    }

    pageClick=(page)=>{
        alert("page! : "+page)
        this.props.currentPage(page)
    }

    render() {
        const pageNumbers = [];

        for(let i=1;i<=Math.ceil(this.props.items.length/this.props.postPerPage);i++){
            pageNumbers.push(i);
        }
        console.log(pageNumbers)
        const pageButton = pageNumbers.map((page,index)=>(<Button className="pageButton"variant="primary" key={index}onClick={()=>this.pageClick(page)}>{page}</Button>))
        return (
             <div className='paginaiton'>
                 {pageButton}
             </div>
        );
    }
}