import React, { Component } from 'react'
import Question from '.././Question';


export class Addition extends Component {
    state = {
        num1: Math.floor(Math.random(Math.ceil()) * Math.random() * 10 ).toString(),
        num2: Math.floor(Math.random(Math.ceil()) * Math.random() * 10 + 1).toString(),
        questionType: '%2B',
        count: 0
      }
    
      componentDidMount() {
        fetch(`http://api.mathjs.org/v4/?expr=${this.state.num1}${this.props.questionType}${this.state.num2}`)
          .then(rsp => rsp.json())
          .then(data => this.setState({answer: data.toString()}))
      }
    
    
    render() {        
  
      const {  num1, num2, questionType, count} = this.state
      
        return (
            <div>
                <h1>Addition</h1>
                <Question count={count} questionType={questionType} num1={num1} num2={num2}/>
            </div>
        )
    }
}

export default Addition
