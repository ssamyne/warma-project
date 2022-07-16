import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Card from './components/ui/Card';
import Home from './components/home/Home';
import LanguageProvider from './store/LanguageProvider';

function App() {
  const notFoundPage = (
    <div>
      <h1>Why you here.. 404!!</h1>
    </div>
  );
  return (
    <LanguageProvider>
      <Card>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='*' element={notFoundPage} />
        </Routes>
      </Card>
    </LanguageProvider>
  );
}

export default App;
