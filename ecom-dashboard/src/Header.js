import React from 'react'
import { Navbar, Nav, NavDropdown } from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom'

function Header() {
    const storedData = JSON.parse(localStorage.getItem('user-info'));
    const user = storedData?.user;
    // console.log(user);                 

    const navigate = useNavigate();
    function logout() {
        localStorage.clear();
        navigate('/login');
    }

    return (
        <div>
            <Navbar bg="dark" variant="dark">
                <Navbar.Brand>Navbar</Navbar.Brand>

                <Nav className="me-auto nav-bar-wrapper">
                    {
                        localStorage.getItem('user-info') ?
                            <>
                                <Link to="/add" >Add Product</Link>
                                <Link to="/productList" > Product List</Link>
                                <Link to="/update" >Update Product</Link>
                            </>
                            :
                            <>
                                <Link to="/login" >Login</Link>
                                <Link to="/register" >Register</Link>
                            </>
                    }
                </Nav>
                {
                    localStorage.getItem('user-info') ?
                        <Nav>
                            <NavDropdown title={user.name}>
                                <NavDropdown.Item onClick={logout}>
                                    Logout
                                </NavDropdown.Item>
                                <NavDropdown.Item>Profile</NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                        : null
                }

            </Navbar>
        </div>
    )
}

export default Header
