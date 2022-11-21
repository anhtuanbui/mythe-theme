import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Layout from "./pages/Layout";
// import Blogs from "./pages/Blogs";
// import NoPage from "./pages/NoPage";
// import App from './App';

import './shared/mutual.scss';
import Layout from './router/layout';
import Home from './pages/home';
import Contact from './pages/contact/contact';
// import Home from './pages/home/home';
// import Contact from './pages/contact/contact';

export default function Index() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          {/* <Route path="blogs" element={<Blogs />} /> */}
          <Route path="contact" element={<Contact />} />
          {/* <Route path="*" element={<NoPage />} /> */}
        </Route>
      </Routes>
    </BrowserRouter>
  )
}


ReactDOM.render(<Index/>, document.getElementById("root"))