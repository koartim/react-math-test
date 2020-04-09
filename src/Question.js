import React, { Component } from 'react'

export class Question extends Component {

    state = {
        response: ""
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
        this.setState({response: ""})
    }


    render() {
        const {num1, num2, questionType } = this.props
        return (
            <div>
                {questionType === "subtraction" ? <h3>Evaluate: {num1} - {num2}</h3> : null}
                <form onChange={this.handleChange} onSubmit={this.handleSubmit}>
                    <label htmlFor="response">Response </label>
                    <input type="text" name="response"/>
                    <button> Submit </button>
                </form>
            </div>
        )
    }
}

export default Question
