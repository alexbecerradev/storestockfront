import React from 'react';
import { ProductProvider } from '../components/ProductContext';
import ProductList from '../components/ProductList';
import ProductForm from '../components/ProductForm';
import Header from '../components/subcomponents/Header';
const ProductsPage = () => {
    return (
        <ProductProvider>
            <div>
            <Header/>
                <ProductForm />
                <ProductList />
            </div>
        </ProductProvider>
    );
};

export default ProductsPage;
