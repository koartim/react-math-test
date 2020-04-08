import React from 'react'

export class Multiplication extends React.Component {

  state = {
    answer: ""
  }

  componentDidMount() {
    fetch('http://api.mathjs.org/v4/?expr=2*(7-3)')
      .then(rsp => rsp.json())
      .then(data => {
        this.setState({
          answer: data.toString()
        })
      })
  }

    render() {
      const answer = this.state.answer
        return (
            <div>
                <h1>Multiplication</h1>
                  <p>{answer}</p>
            </div>
        )
    }
}

export default Multiplication
