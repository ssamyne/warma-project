import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Card from './components/ui/Card';

import Home from './pages/Home';
import AboutMe from './pages/AboutMe';
import ContactMe from './pages/ContactMe';

function App() {
  const notFoundPage = (
    <div>
      <h1>Why you get here.. 404!!</h1>
    </div>
  );
  return (
    <Card>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about-me' element={<AboutMe />} />
        <Route path='/contact-me' element={<ContactMe />} />
        <Route path='*' element={notFoundPage} />
      </Routes>
    </Card>
  );
}

export default App;
