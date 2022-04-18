import React, { Component } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LoginPage from './Component/LoginPage';
import Main from './Component/Main';
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id : ''
    }
  }

  searchText = () => {
    alert("searchText!")
    console.log(window.location)
    console.log(window.location.href)
    window.location.href = '/search?searchText=' + this.state.searchText;
    // const queryObj = queryString.parse(window.location.search);
    // console.log(queryObj);
  }

  login=(id)=>{
    alert(`환영합니다 ${id}님`)
    this.setState({
      id : id
    })
    window.location.href = '/search/'
  }

  render() {
    return (
      <div className='App'>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<LoginPage login={this.login}/>} />
            <Route path='/search/' element={<Main id={this.state.id}/>} />
          </Routes>
        </BrowserRouter>
      </div>
    )
  }
}

export default App;

