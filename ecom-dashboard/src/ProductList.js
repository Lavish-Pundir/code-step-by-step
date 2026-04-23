import React, { useEffect, useState } from 'react'
import Table from 'react-bootstrap/Table';

function ProductList() {
    const [data, setData] = useState([]);

    useEffect(() => {
        getProducts();
    }, []);

    async function getProducts() {
        try {
            const user = JSON.parse(localStorage.getItem('user-info'));
            const token = user?.token;

            let response = await fetch("http://localhost:5400/api/products", {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });

            let result = await response.json();
            console.log("API Data:", result);

            if (response.ok) {
                setData(result.data);
            }

        } catch (error) {
            console.log("Error:", error);
        }
    }

    async function deleteOperation(id) {
        const user = JSON.parse(localStorage.getItem('user-info'));
        const token = user?.token;
        try {
            let response = await fetch(`http://localhost:5400/api/products/delete/${id}`, {
                method: "DELETE",
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            if (response.ok) {
                alert("Product deleted successfully")
                getProducts();
            }

        } catch (err) {
            console.log("Error", err);
        }
    }
    return (
        <div>
            {/* <h1>Add New Product</h1> */}

            <Table striped bordered hover variant="dark">
                <thead>
                    <tr>
                        <th>#</th>
                        <th> Name</th>
                        <th>Price</th>
                        <th>Discription</th>
                        <th>Image</th>
                        <th>Operations</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        data.map((item, index) => (
                            <tr key={item._id}>
                                <td>{index + 1}</td>
                                <td>{item.name}</td>
                                <td>{item.price}</td>
                                <td>{item.description}</td>
                                <td>
                                    <img
                                        src={`http://localhost:5400/uploads/${item.image}`}
                                        width="60"
                                        alt="product"
                                    />
                                </td>
                                <td>
                                    <span
                                        onClick={() => deleteOperation(item._id)}
                                        className='delete'>
                                        Delete
                                    </span>
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </Table>
        </div>
    )
}

export default ProductList


//  "Authorization": `Bearer ${localStorage.getItem("token")}`