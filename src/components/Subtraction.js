import React, { Component } from 'react'
import Question from '.././Question';

export class Subtraction extends Component {

    state = {
        questionType: "-",
        count: 0
      }

    upDateCount = () => {
        this.setState({
            count: {...this.state.count + 1}
        })
    }

    render() {
        const {num1, num2, questionType, count} = this.state
        return (
            <div>
                <h1>Subtraction</h1>
        <h3>{count}</h3>
                 <Question upDateCount={this.updateCount} count={count} questionType={questionType} num1={num1} num2={num2}/>
            </div>
        )
    }
}

export default Subtraction
