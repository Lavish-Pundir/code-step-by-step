import React, { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [data, setData] = useState([])

  useEffect(() => {
    fetch('https://dummyjson.com/todos')
      .then((result) => result.json())
      .then((resp) => {
        setData(resp.todos)  
      })
  }, [])

  return (
    <>
      <h1>API Fetching</h1>

      <table border="1">
        <thead>
          <tr>
            <td>ID</td>
            <td>Todo</td>
            <td>Completed</td>
            <td>User ID</td>
          </tr>
        </thead>

        <tbody>
          {
            data.map((item) => (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.todo}</td>
                <td>{item.completed ? "Yes" : "No"}</td>
                <td>{item.userId}</td>
              </tr>
            ))
          }
        </tbody>
      </table>
    </>
  )
}

export default App