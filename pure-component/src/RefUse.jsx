import React, { createRef } from 'react'
import "./App.css"

class RefUse extends React.Component {

    constructor() {
        super();
        this.inputRef = createRef();
    }

    componentDidMount() {
        // console.log(this.inputRef.current.value = "1000")
    }
    getVal() {
        console.log(this.inputRef.current.value)
    }

    render() {
        return (
            <div className='App'>
                <h1>Ref in react</h1>
                <input type="text" ref={this.inputRef} />  {/* placeholder="Enter your value" */}
                <button onClick={() => this.getVal()}>Check Ref</button>
            </div>
        )

    }
}

export default RefUse
