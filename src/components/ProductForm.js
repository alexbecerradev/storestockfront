import React, { useState } from 'react';
import { useProductContext } from './ProductContext';
import './ProductForm.css';

const ProductForm = () => {
    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    const [stock, setStock] = useState('');
    const { addProduct } = useProductContext();

    const handleSubmit = async (e) => {
        e.preventDefault();
        await addProduct({ name, price, stock });
        setName('');
        setPrice('');
        setStock('');
    };

    return (
        <div>
            <h3>Agregar productos</h3>
            <form className='form-container' onSubmit={handleSubmit}>
                <div className='form-group'>
                    <label>Nombre</label>
                    <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
                </div>
                <div className='form-group'>
                    <label>Precio/Uni.</label>
                    <input type="number" value={price} onChange={(e) => setPrice(e.target.value)} />
                </div>
                <div className='form-group'>
                    <label>Stock</label>
                    <input type="number" value={stock} onChange={(e) => setStock(e.target.value)} />
                </div>
                <button type="submit">Agregar</button>
            </form>
        </div>
    );
};

export default ProductForm;
