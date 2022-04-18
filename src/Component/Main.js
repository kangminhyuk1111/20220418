import React, { Component } from 'react';
import axios from 'axios';
import Pagenation from './Pagenation';
import MovieList from './MovieList';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Button } from 'react-bootstrap';
import '../css/Main.css';

export default class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            searchText: '',
            items: [],
            postPerPage: 3,
            currentPage: 1,
        }
    }

    componentDidMount() {
        var params = new URLSearchParams(window.location.search)
        const queryObj = params.get('searchText')
        console.log(queryObj);

        this.getLocals(queryObj);
    }
    getLocals = async (searchText) => {
        // const res=await axios.get()
        // const res=await axios.post()
        const res = await axios({
            method: 'get',
            url: `/v1/search/movie.json?query=${searchText}`,
            dataType: 'json',
            headers: {
                "X-Naver-Client-Id": "YWkydNQrivBmUg9wtwm_",
                "X-Naver-Client-Secret": "iYzY1ltXzW"
            }
        })
        console.log(res)
        console.log(res.data.items)
        if (res.data.items.length === 0) {
            alert("검색된 정보가 없습니다!")
        }
        this.setState({
            items: res.data.items
        })
        console.log(this.state.items)
    }


    inputChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    searchText = () => {
        alert("searchText!")
        console.log(window.location)
        console.log(window.location.href)
        window.location.href = '/search?searchText=' + this.state.searchText;
        var params = new URLSearchParams(window.location.search)
        const queryObj = params.get('searchText')
        console.log(queryObj);
        if (queryObj === null) {
            this.setState({
                movieSearchText: ''
            })
        } else {
            this.setState({
                movieSearchText: queryObj
            })
        }
        // const queryObj = queryString.parse(window.location.search);
        // console.log(queryObj);
    }

    reset = () => {
        window.location.href = '/';
    }

    currentPage = (page) => {
        alert("app.js page : " + page)
        this.setState({
            currentPage: page
        })
    }

    viewPosts = (posts) => {
        const indexOfLast = (this.state.postPerPage * this.state.currentPage)
        const indexOfFirst = indexOfLast - this.state.postPerPage
        const slicePosts = posts.slice(indexOfFirst, indexOfLast);

        return slicePosts;
    }

    render() {
        return (
            <div className='App'>
                <Container>
                    <Row id="header">
                        <h1>영화 검색</h1>
                    </Row>
                    <Row id="inputForm">
                        <Col xs={10}>
                            <input id="movie_input" onChange={this.inputChange} type='text' name='searchText'
                            placeholder='검색어 입력'></input>
                        </Col>
                        <Col xs={1}>
                            <Button onClick={this.searchText}>Search</Button>
                        </Col>
                        <Col xs={1}>
                            <Button onClick={this.reset}>Back</Button>
                        </Col>
                    </Row>
                    <Row>
                        <Col><h1>{this.state.movieSearchText}</h1></Col>
                    </Row>
                    <Row>
                        <Col id="movie_List_Block">
                            <MovieList items={this.viewPosts(this.state.items)}></MovieList>
                        </Col>
                    </Row>
                    <Row>
                        <Col id="paginations_block">
                            <Pagenation items={this.state.items}
                                postPerPage={this.state.postPerPage}
                                currentPage={this.currentPage}></Pagenation>
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}