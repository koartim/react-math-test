import React, { Component } from 'react'
import Question from '.././Question';

export class Addition extends Component {
    state = {
        answer: "",
        num1: Math.floor(Math.random(Math.ceil()) * Math.random() * 10 ).toString(),
        num2: Math.floor(Math.random(Math.ceil()) * Math.random() * 10 + 1).toString(),
        questionType: "addition"
      }
    
      componentDidMount() {
        fetch(`http://api.mathjs.org/v4/?expr=${this.state.num1}%2B${this.state.num2}`)
          .then(rsp => rsp.json())
          .then(data => this.setState({answer: data.toString()}))
      }
    
    
    render() {        
    
      const { answer, num1, num2, questionType} = this.state
      console.log(answer);
      
        return (
            <div>
                <h1>Addition</h1>
                {questionType === "addition" ? <h3>Evaluate: {num1} + {num2}</h3> : null}
                <Question questionType={questionType} answer={answer} num1={num1} num2={num2}/>
            </div>
        )
    }
}

export default Addition
