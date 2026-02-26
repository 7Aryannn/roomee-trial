import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import Home from './pages/Home';
import SearchListings from './pages/SearchListings';
import PropertyDetail from './pages/PropertyDetail';
import Dashboard from './pages/Dashboard';
import { LanguageProvider } from './contexts/LanguageContext';

function App() {
    return (
        <LanguageProvider>
            <Router>
                <Routes>
                    <Route path="/" element={<MainLayout />}>
                        <Route index element={<Home />} />
                        <Route path="search" element={<SearchListings />} />
                        <Route path="property/:id" element={<PropertyDetail />} />
                        <Route path="dashboard" element={<Dashboard />} />
                    </Route>
                </Routes>
            </Router>
        </LanguageProvider>
    );
}

export default App;
