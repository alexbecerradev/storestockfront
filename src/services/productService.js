import axios from 'axios';

const API_URL = 'http://localhost:8081/api/products';

export const getProducts = async () => {
    try {
        const response = await axios.get(API_URL);
        return response.data || []; // Asegúrate de que siempre se devuelve un array
    } catch (error) {
        console.error('Error fetching products:', error);
        return []; // Devuelve un array vacío en caso de error
    }
};

export const createProduct = async (product) => {
    try {
        const response = await axios.post(API_URL, product);
        return response.data;
    } catch (error) {
        console.error('Error creating product:', error);
        throw error;
    }
};

export const updateProduct = async (id, product) => {
    try {
        const response = await axios.put(`${API_URL}/${id}`, product);
        return response.data;
    } catch (error) {
        console.error('Error updating product:', error);
        throw error;
    }
};

export const deleteProduct = async (id) => {
    try {
        const response = await axios.delete(`${API_URL}/${id}`);
        return response.data;
    } catch (error) {
        console.error('Error deleting product:', error);
        throw error;
    }
};
