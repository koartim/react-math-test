import React, { Component } from 'react'
import Question from '.././Question';

export class Subtraction extends Component {

    state = {
        answer: "",
        input: "",
        num1: Math.floor(Math.random(Math.ceil()) * Math.random() * 10 ).toString(),
        num2: Math.floor(Math.random(Math.ceil()) * Math.random() * 10 + 1).toString(),
        questionType: "subtraction"
      }

    componentDidMount() {
        fetch(`http://api.mathjs.org/v4/?expr=${this.state.num1}-${this.state.num2}`)
        .then(rsp => rsp.json())
        .then(data => {
          this.setState({
            answer: data.toString()
          })
        })
    }

    render() {
        return (
            <div>
                <h1>Subtraction</h1>
                 <Question questionType={this.state.questionType} answer={this.state.answer} num1={this.state.num1} num2={this.state.num2}/>
            </div>
        )
    }
}

export default Subtraction
