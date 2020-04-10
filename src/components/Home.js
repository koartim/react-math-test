import React, { Component } from 'react'


export class Home extends Component {

    componentDidMount() {
       const TOKEN = "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIxIiwianRpIjoiZDliMjQ0OTQxOWMwZmE5OTVjYTAyNGM2ZmM1NzI0NDk1YTEyZjVkYmJlMWVmOTYwMjYzNGE4OGRiYTAzMDJjMDBjZTIwMDU5ZTUxYTYwZTYiLCJpYXQiOjE1ODY0NDg4NzYsIm5iZiI6MTU4NjQ0ODg3NiwiZXhwIjoxNjE3OTg0ODc2LCJzdWIiOiI2NzciLCJzY29wZXMiOltdfQ.Dfmpv9c_pFOMHzqLIlqb_LJ-_SS6ua5fOWKutqqM1w5NeQP4mlAiyQWRgOIzQpL4lhRupaoZ0_zlvYyJdccp6RqFjm18mXOU5wqpX39C7upsIdllyHtxjAucInNLp5Kk6xXSXH9WtncBOs7akvyZxUcSu2B4A6wDeIRWbvJGfbDXcoG7wyK0tEQUiBkm099yK9nn8yQqYUqjtYCnn6ku9lm09BCidzSCB2e134KDAPanr_3-3R2IIB6n9INtheZiNJcCaFiAlr6Z5I-zdZzVFLYOvJZrtelEtMH_GCAUslj26VDDC2HKCRSm5MwjwRgBFQ3cQNH42Zt0AXBZvu785PtK3EHbjHGurk_ztU2XGY8ZVYJ2lB5haaWcrxVFI7rjMJJeQSKea-wapxWM7h0s2jVtPFJCefwS-xSAhXtN5rFsuAfyQGjypnC_jKg_TxkCV0ar5OcPCsqeg_KEmSHHBLNVpjHX27kRV1_7nYYUgbHYhxg2ejrU92AEaTtu-fH61WjEEd9bQdhoqMszsmskuNJqLmcbJagFjzDu6HddAaGR3KMfWr3hLHthJurn5j4nLybDksCiABwOrDKfNTESYZRTEGjXEQJhtFa-2ErCQeGOJbI3e4wUzFMF6LBfLYdPKh5TI5bTqJRm7Uv1rn29mgFLWoJqPmw9O-hBiJmIPE0"
       const ID = "7"
       const SECRET = "JGgendqyuM08grOHcr19zakQt8vrmrr4QAtz089Z"
        
       fetch('http://127.0.0.1:8887/src/problems.json')
        .then(rsp => rsp.json())
        .then(data => console.log(data))
       
        
    }
    render() {
        
        return (
            <div>
                <h1>Speed Math</h1>
                <h3>A React Math Quiz App</h3>
            </div>
        )
    }
}

export default Home
