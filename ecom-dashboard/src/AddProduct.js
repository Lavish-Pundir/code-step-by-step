import React, { useState } from 'react'

function AddProduct() {
    const [name, setName] = useState('');
    const [file, setFile] = useState('');
    const [price, setPrice] = useState('');
    const [description, setDiscription] = useState('');

    async function addProduct() {
        // console.log(name, file, price, description);

        if (!name || !file || !price || !description) {
            alert("All fields are required");
            return;
        }

        const user = JSON.parse(localStorage.getItem('user-info'));
        const token = user?.token;

        if (!token) {
            alert("Please login first");
            return;
        }

        const formData = new FormData();
        formData.append('name', name)
        formData.append('file', file)
        formData.append('price', price)
        formData.append('description', description)

        try {
            let response = await fetch("http://localhost:5400/api/products/add", {
                method: "POST",
                headers: {
                    Authorization: `Bearer ${token}`
                },
                body: formData
            });

            let result = await response.json();

            console.log("API Response:", result);

            if (response.ok) {
                alert("Product added successfully");
            } else {
                alert(result.message || "Something went wrong");
            }

        } catch (error) {
            console.log("Error:", error);
            alert("Server error");
        }
    }

    return (
        <div className='col-sm-6 offset-sm-3'>
            <br />
            <input
                type='text'
                className='form-control'
                placeholder='name'
                onChange={(e) => setName(e.target.value)}
            /> <br />

            <input
                type='file'
                className='form-control'
                placeholder='file'
                onChange={(e) => setFile(e.target.files[0])}
            /> <br />

            <input
                type='text'
                className='form-control'
                placeholder='price'
                onChange={(e) => setPrice(e.target.value)}
            /> <br />

            <input
                type='text'
                className='form-control'
                placeholder='description'
                onChange={(e) => setDiscription(e.target.value)}
            /> <br />

            <button onClick={addProduct}>Add Product</button>
        </div>
    )
}

export default AddProduct
