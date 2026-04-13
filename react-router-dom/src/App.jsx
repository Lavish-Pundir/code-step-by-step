import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import './App.css'
import Home from './component/Home';
import About from './component/About';
import NavBar from './component/NavBar';
import Page404 from './component/Page404';

function App() {

  return (
    <>
      <BrowserRouter>
        {/* <h1>React Router Dom 6</h1> */}
        <NavBar />
        <Routes>
          < Route path="/" element={<Home />} />
          < Route path="/about" element={<About />} />
          {/* < Route path="/*" element={<Page404 />} /> */}
          < Route path="/*" element={<Navigate to="/" />}  /> 
          {/* Navigate khud sai render kr daita hai joo bhi url hm set krtai hai ager url glat hoo jai */}
          
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
