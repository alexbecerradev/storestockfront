import React from 'react';
import { useProductContext } from './ProductContext';
import EditProductModal from './EditProductModal';
import './ProductList.css';

const ProductList = () => {
    const { products, removeProduct, setSelectedProduct, isModalOpen, setIsModalOpen } = useProductContext();

    const handleEdit = (product) => {
        setSelectedProduct(product);
        setIsModalOpen(true);
    };

    // Verificación adicional para asegurarse de que products es un array
    if (!Array.isArray(products)) {
        return <div>Error: Products is not a valid array</div>;
    }

    return (
        <div>
            <h3>Listado de Productos</h3>
            <table className='product-table'>
                <thead>
                    <tr>
                        <th>Nombre</th>
                        <th>Stock</th>
                        <th>Precio</th>
                        <th>Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    {products.map(product => (
                        <tr>
                            <td key="{product.name}">{product.name}</td>
                            <td>{product.stock} Uni.</td>
                            <td>${product.price}</td>
                            <td>
                                <button onClick={() => removeProduct(product.id)}>Eliminar</button>
                                <button onClick={() => handleEdit(product)}>Editar</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            {isModalOpen && <EditProductModal />}
        </div>
    );
};

export default ProductList;
