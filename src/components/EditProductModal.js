import React, { useState, useEffect } from 'react';
import { useProductContext } from './ProductContext';
import './EditProductModal.css';

const EditProductModal = () => {
    const { selectedProduct, isModalOpen, setIsModalOpen, handleUpdateProduct } = useProductContext();
    const [name, setName] = useState(selectedProduct?.name || '');
    const [price, setPrice] = useState(selectedProduct?.price || '');
    const [stock, setStock] = useState(selectedProduct?.stock || '');

    useEffect(() => {
        if (selectedProduct) {
            setName(selectedProduct.name);
            setPrice(selectedProduct.price);
            setStock(selectedProduct.stock);
        }
    }, [selectedProduct]);

    const handleSave = async (e) => {
        e.preventDefault();
        await handleUpdateProduct({ ...selectedProduct, name, price, stock });
        setIsModalOpen(false); // Cerrar el modal después de guardar
    };

    if (!isModalOpen) return null;

    return (
        <div className="modal">
            <div className="modal-content">
                <h3>Editar producto</h3>
                <form onSubmit={handleSave}>
                    <div className="form-group">
                        <label>Nombre</label>
                        <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
                    </div>
                    <div className="form-group">
                        <label>Precio/Uni.</label>
                        <input type="text" value={price} onChange={(e) => setPrice(e.target.value)} />
                    </div>
                    <div className="form-group">
                        <label>Stock</label>
                        <input type="text" value={stock} onChange={(e) => setStock(e.target.value)} />
                    </div>
                    <button type="submit">Guardar</button>
                    <button type="button" onClick={() => setIsModalOpen(false)}>Cerrar</button>
                </form>
            </div>
        </div>
    );
};

export default EditProductModal;
