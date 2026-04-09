import { useState } from 'react'
import './App.css'

function App() {
  // const students = ["Anil", "sidhu", "anubhav", "anu"]
  const students = [
    {
      name: "Lavish kumar",
      email: "lavi@gmail.com",
      contact: "0000"
    },
    {
      name: "Gaurav kumar",
      email: "gaurav@gmail.com",
      contact: "123"
    },
    {
      name: "Ajeet kumar",
      email: "ajeet@gmail.com",
      contact: "1234"
    },
  ]

  // //map looping
  // students.map((item) => {
  //   console.log("my name is :", item);

  // })

  // // for loop use
  // for(let i = 0; i<students.length; i++) {
  //   console.log("in for loop my name", students[i])
  // }

  return (
    <div className='App'>
      <h1>Handle Array With Listing</h1>
      <table border='1'>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Contact</th>
          </tr>
        </thead>

        <tbody>
          {
            students.map((data, index) => (   // key index ka use react kai leya kiya hai 
              <tr key={index}>
                <td>{data.name}</td>
                <td>{data.email}</td>
                <td>{data.contact}</td>
              </tr>
            ))
          }
        </tbody>
      </table>
    </div>
  )
}

export default App
