import React from 'react';
import ProductList from './ProductList';
import ProductForm from './ProductForm';
import EditProductModal from './EditProductModal';
import { ProductProvider } from './ProductContext';

const ProductManager = () => {
    return (
        <ProductProvider>
            <div>
                <ProductForm />
                <ProductList />
                <EditProductModal />
            </div>
        </ProductProvider>
    );
};

export default ProductManager;
