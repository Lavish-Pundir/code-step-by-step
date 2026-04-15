import React, { useState } from 'react'
import User from './user'
import './App.css'

function App() {
  return (
    <div className='App'>
      {/* <h1>React Readux</h1> */}
      <User data={{ name: "Lavish", age: 23 }} />
    </div>
  )
}

export default App
