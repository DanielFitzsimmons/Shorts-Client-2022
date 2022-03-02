//React
import React, { useEffect, useState } from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
//Components
import { ToastContainer } from 'react-toastify';
import AddShortcut from './components/pages/addShortcut';
import Register from './components/pages/register';
import Login from './components/pages/login';
import Logout from './components/pages/logout';
import PageNotFound from './components/pages/pageNotFound';
import About from './components/pages/about';
import Shortcuts from './components/pages/shortcuts';

//Layout
import Header from './components/layout/header';
import Footer from './components/layout/footer';
//CSS
import 'react-toastify/dist/ReactToastify.css';


function App() {
  const [user, setUser] = useState('');

  return (
    <div className="App">
      <ToastContainer />
      <Header user={user} />
      <Routes>
        <Route path="/edit/:id" element={<AddShortcut />} />
        <Route path="/add" element={<AddShortcut />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/logout" element={<Logout />} />
        <Route path="/about" element={<About twitterName="shorts" />} />
        <Route path="/" exact element={<Shortcuts user={user} />} />
        <Route path="/pagenotfound" element={<PageNotFound />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
      <Footer />
    </div>
  );
}
export default App;