import React, { useRef } from 'react'
import "./App.css"

function UnControlled() {
    let inputRef = useRef(null)
    let inputRef1 = useRef(null)

    function submitForm(e) {
        e.preventDefault()
        console.log("input field 1 value : ", inputRef.current.value)
        console.log("input field 2 value : ", inputRef1.current.value)
        let input3 = document.getElementById("input3").value
        console.log("input field 3 value : ", input3)
    }

    return (
        <div className='App'>
            <form onSubmit={submitForm}>
                <h1>UnControlled component</h1>
                <input ref={inputRef} type="text" /> <br /> <br />
                <input ref={inputRef1} type="text" /> <br /> <br />
                <input id='input3' type="text" /> <br /> <br />
                <button>Submit</button>
            </form>
        </div>
    )
}

export default UnControlled
