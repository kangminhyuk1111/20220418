import React, { Component } from 'react';

class LoginPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id : ''
        }
    }

    inputIdChange=(e)=>{
        this.setState({
            [e.target.name] : e.target.value
        })
    }

    login=()=>{
        alert("접속1")
        this.props.login(this.state.id)
    }


    render() {
        return (
            <div className='App'>
                <input onChange={this.inputIdChange} type='text' placeholder='input your NAME' name="id"/>
                <button onClick={this.login}>접속</button>
            </div>
        )
    }
}

export default LoginPage;