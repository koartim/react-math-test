import React, { Component } from 'react'
import './App.css';

export class Question extends Component {

    state = {
        answer: "",
        response: "",
        isCorrect: null,
        questionCount: this.props.count,
        num1: Math.floor(Math.random(Math.ceil()) * Math.random() * 10 + 3 ).toString(),
        num2: Math.floor(Math.random(Math.ceil()) * Math.random() * 10 + 1).toString() 
    }

    componentDidMount() {
        fetch(`http://api.mathjs.org/v4/?expr=${this.state.num1}${this.props.questionType}${this.state.num2}`)
          .then(rsp => rsp.json())
          .then(data => {
            this.setState({
              answer: data.toString()
            })
          })
      }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit = (e) => {
        if (this.state.response === this.state.answer) {
            this.setState({response: ""}, alert("correct"))
            localStorage.setItem(Math.random(), JSON.stringify(localStorage.length + 1))
        } else {
            alert(`incorrect the answer was ${this.props.answer}` )
            this.setState({})
        }
    }

    render() {
        const {num1, num2} = this.state
        if (localStorage.length === 10) {
            localStorage.clear()
            return <h1>You have reached your question limit</h1>
            
        } else {
            return (
                <div className="App">
                   <h3>Evaluate: {num1} {this.props.questionType} {num2}</h3> 
                    <form onChange={this.handleChange} onSubmit={this.handleSubmit}>
                        <label htmlFor="response">Response </label>
                        <input type="text" name="response" value={this.state.response}/>
                        <button className="App-button"> Submit </button>
                    </form>
                    <h3>{localStorage.length} / 10</h3>
                </div>
            )
        }
        
    }
}

export default Question
