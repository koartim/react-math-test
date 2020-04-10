import React, { Component } from 'react'
import Question from '.././Question';

export class Division extends Component {
    state = {
        num1: Math.floor(Math.random(Math.ceil()) * Math.random() * 10 ).toString(),
        num2: Math.floor(Math.random(Math.ceil()) * Math.random() * 10 + 1).toString(),
        questionType: "/"
      }
    
    

    render() {
        const {num1, num2, questionType} = this.state
        return (
            <div>
                <h1>Division</h1>
              <Question questionType={questionType} num1={num1} num2={num2}/>
            </div>
        )
    }
}

export default Division
