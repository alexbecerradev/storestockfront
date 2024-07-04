import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ProductsPage from './pages/ProductsPage';
import UsersPage from './pages/UsersPage';
import SalesPage from './pages/SalesPage';

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/products" element={<ProductsPage />} />
                <Route path="/users" element={<UsersPage />} />
                <Route path="/sales" element={<SalesPage />} />
                {/* Ruta predeterminada */}
                <Route path="/" element={<ProductsPage />} />
            </Routes>
        </Router>
    );
};

export default App;
