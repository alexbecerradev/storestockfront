import React, { createContext, useContext, useState, useEffect } from 'react';
import { getProducts, createProduct, updateProduct, deleteProduct } from '../services/productService';

const ProductContext = createContext();

export const useProductContext = () => useContext(ProductContext);

export const ProductProvider = ({ children }) => {
    const [products, setProducts] = useState([]);
    const [selectedProduct, setSelectedProduct] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    useEffect(() => {
        const fetchProducts = async () => {
            const data = await getProducts();
            setProducts(data);
        };
        fetchProducts();
    }, []);

    const addProduct = async (product) => {
        const newProduct = await createProduct(product);
        setProducts([...products, newProduct]);
    };

    const handleUpdateProduct = async (updatedProduct) => {
        await updateProduct(updatedProduct.id, updatedProduct);
        setProducts(products.map(product => (product.id === updatedProduct.id ? updatedProduct : product)));
    };

    const removeProduct = async (id) => {
        await deleteProduct(id);
        setProducts(products.filter(product => product.id !== id));
    };

    return (
        <ProductContext.Provider
            value={{
                products,
                addProduct,
                handleUpdateProduct,
                removeProduct,
                selectedProduct,
                setSelectedProduct,
                isModalOpen,
                setIsModalOpen,
            }}
        >
            {children}
        </ProductContext.Provider>
    );
};
