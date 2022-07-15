import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Card from './components/ui/Card';
import Home from './components/home/Home';

function App() {
  const notFoundPage = (
    <div>
      <h1>Why you here.. 404!!</h1>
    </div>
  );
  return (
    <Card>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='*' element={notFoundPage} />
      </Routes>
    </Card>
  );
}

export default App;
