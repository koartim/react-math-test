import React from 'react'

export class Multiplication extends React.Component {

  state = {
    answer: "",
    input: "",
    num1: Math.floor(Math.random(Math.ceil()) * Math.random() * 10 ).toString(),
    num2: Math.floor(Math.random(Math.ceil()) * Math.random() * 10).toString(),
  }

  componentDidMount() {
    fetch(`http://api.mathjs.org/v4/?expr=2*(${this.state.num1}*${this.state.num2})`)
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
                <h1>Multiplication</h1>

            </div>
        )
    }
}

export default Multiplication
