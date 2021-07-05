import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Header, Center, Footer } from './components/routes';
import './App.css';

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Header />
        <Center />
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
