import logo from './logo.svg';
import './App.css';
import React from 'react';
import ProductsList from './ProductsList';

function App() {
  return (
    <div className="App">
      <header className="bg-blue-500 text-white p-6">
        <h1 className="text-3xl">YFW Data App</h1>
      </header>
      <main className="p-8">
        <p>Welcome to your product management app!</p>
        <ProductsList />
      </main>
    </div>
  );
}

export default App;

