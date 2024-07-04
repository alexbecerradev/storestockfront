import axios from 'axios';

const API_URL = 'http://localhost:8081/api/sales';

export const getSales = async () => {
    return await axios.get(API_URL);
};

export const createSale = async (sale) => {
    return await axios.post(API_URL, sale);
};
