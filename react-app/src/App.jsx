import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout.jsx';
import Home from './pages/Home.jsx';
import About from './pages/About.jsx';
import Services from './pages/Services.jsx';
import Blogs from './pages/Blogs.jsx';
import BlogPost from './pages/BlogPost.jsx';

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/blog/:slug" element={<BlogPost />} />
      </Routes>
    </Layout>
  );
}


export default App;

