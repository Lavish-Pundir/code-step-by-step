import logo from './logo.svg';
import './App.css';
import { Button } from 'react-bootstrap'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Header from './Header';
import Login from './Login';
import Register from './Register';
import AddProduct from './AddProduct';
import UpdateProduct from './UpdateProduct';



function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <h1>E-Comm-Project</h1>

        <Routes>
          <Route path="/login" element={<Login />} />
        </Routes>

        <Routes>
          <Route path="/register" element={<Register />} />
        </Routes>

        <Routes>
          <Route path="/add" element={<AddProduct />} />
        </Routes>

        <Routes>
          <Route path="/update" element={<UpdateProduct />} />
        </Routes>

      </BrowserRouter>
    </div>
  );
}

export default App;
