import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App';
import Home from './pages/Home';
import FileShare from './pages/FileShare';
import PublicChat from './pages/PublicChat';
import About from './pages/About';
import Contact from './pages/Contact';
import Other from './pages/Other';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/home" element={<Home />} />
      <Route path="/file-share" element={<FileShare />} />
      <Route path="/public-chat" element={<PublicChat />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="*" element={<Other />} />
    </Routes>
  </BrowserRouter>
);

