import React, { Component } from 'react'
import './App.css';

export class Question extends Component {

    state = {
        response: "",
        count: this.props.count,
        isCorrect: null
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        if (this.state.response === this.props.answer) {
            alert("correct")
        } else {
            alert(`incorrect the answer was ${this.props.answer}` )
        }
        this.setState({response: "", count: this.state.count + 1})
    }


    render() {
        const {num1, num2, questionType } = this.props
        if (this.state.count === 10) {
            return <h1>You have reached your question limit</h1>
        } else {
            return (
                <div className="App">
                    {questionType === "subtraction" ? <h3>Evaluate: {num1} - {num2}</h3> : null}
                    <form onChange={this.handleChange} onSubmit={this.handleSubmit}>
                        <label htmlFor="response">Response </label>
                        <input type="text" name="response"/>
                        <button className="App-button"> Submit </button>
                    </form>
                </div>
            )
        }
        
    }
}

export default Question
