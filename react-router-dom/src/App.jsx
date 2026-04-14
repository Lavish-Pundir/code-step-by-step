import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import './App.css'
import Home from './component/Home';
import About from './component/About';
import NavBar from './component/NavBar';
import Page404 from './component/Page404';
import User from './component/User';
import Filter from './component/Filter';
import Contact from './component/Contact';
import Company from './component/Company';
import Channel from './component/Channel';
import Other from './component/Other';
import Login from './component/Login';
import Protected from './component/Protected';

function App() {

  return (
    <>
      <BrowserRouter>
        {/* <h1>React Router Dom 6</h1> */}
        <NavBar />
        <Routes>
          < Route path="/" element={<Protected Component={Home} />} />
          < Route path="/login" element={<Login />} />
          < Route path="/about" element={<Protected Component={About} />} />
          < Route path="/user/:name" element={<User />} />
          < Route path="/filter" element={<Protected Component={Filter}/>} />
          {/* < Route path="/*" element={<Page404 />} /> */}
          < Route path="/*" element={<Navigate to="/" />} />
          {/* Navigate khud sai render kr daita hai joo bhi url hm set krtai hai ager url glat hoo jai */}

          <Route path='/contact' element={<Contact />}>
            <Route path='company' element={<Company />} />
            <Route path='channel' element={<Channel />} />
            <Route path='other' element={<Other />} />
          </Route>

        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
