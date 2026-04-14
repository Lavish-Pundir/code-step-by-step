import React, { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [data, setData] = useState([])
  const [todo, setTodo] = useState('')

  const [editingId, setEditingId] = useState(null)
  const [editText, setEditText] = useState("")


  // GET API 

  useEffect(() => {
    fetch('https://dummyjson.com/todos')
      .then((result) => result.json())
      .then((resp) => {
        setData(resp.todos)
      })
  }, [])

  // POST API 

  const addTodo = async () => {
    if (!todo) return;

    const response = await fetch('https://dummyjson.com/todos/add', {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        todo: todo,
        completed: false,
        userId: 1
      })
    });

    const result = await response.json();

    setData([result, ...data])
    setTodo('')
  }

  // Delete API 

  const deleteTodo = async (id) => {
    await fetch(`https://dummyjson.com/todos/${id}`, {
      method: "DELETE",
    });

    const updatedData = data.filter((item) => item.id !== id);
    setData(updatedData);
  };

  //  Edit API Data

  const startEdit = (item) => {
    setEditingId(item.id)
    setEditText(item.todo)
  }

  //  Update API

  const updateTodo = async (id) => {
    const response = await fetch(`https://dummyjson.com/todos/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        todo: editText,
      }),
    });

    const result = await response.json();

    const updatedData = data.map((item) =>
      item.id === id ? { ...item, todo: result.todo } : item
    );

    setData(updatedData)
    setEditingId(null)
  }

  return (
    <>
      <h1>API Fetching + POST</h1>

      <div style={{ marginBottom: "20px" }}>
        <input
          type="text"
          value={todo}
          onChange={(e) => setTodo(e.target.value)}
          placeholder="Enter todo"      //  add post frontend code
          style={{ padding: "8px", marginRight: "10px" }}
        />

        <button onClick={addTodo} style={{ padding: "8px 15px" }}>
          Add Todo
        </button>

      </div>

      <table border="1">
        <thead>
          <tr>
            <td>ID</td>
            <td>Todo</td>
            <td>Completed</td>
            <td>User ID</td>
            <td>Action</td>
          </tr>
        </thead>

        <tbody>
          {
            data.map((item) => (
              <tr key={item.id}>
                <td>{item.id}</td>
                {/* <td>{item.todo}</td> */}
                <td>
                  {
                    editingId === item.id ? (
                      <input
                        value={editText}
                        onChange={(e) => setEditText(e.target.value)}
                      />
                    ) : (item.todo)
                  }
                </td>

                <td>{item.completed ? "Yes" : "No"}</td>
                <td>{item.userId}</td>
                {/* <td>
                  <button onClick={() => deleteTodo(item.id)}>
                    Delete
                  </button>
                </td> */}
                <td>
                  {
                    editingId === item.id ? (
                      <button onClick={() => updateTodo(item.id)}>
                        Save
                      </button>
                    ) : (
                      <>
                        <button style={{ marginRight: "10px" }}
                          onClick={() => startEdit(item)}>
                          Edit
                        </button>
                        <button onClick={() => deleteTodo(item.id)}>
                          Delete
                        </button>
                      </>
                    )
                  }
                </td>
              </tr>
            ))
          }
        </tbody>
      </table>
    </>
  )
}

export default App