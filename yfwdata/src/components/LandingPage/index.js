import React from 'react';
import { useNavigate } from 'react-router-dom';
import heroImage from './assets/hero-image.jpg';

function LandingPage() {
  let navigate = useNavigate();

  const handleLogin = () => {
    navigate('/products');
  };

  return (
    <div className="text-center">
      <header className="bg-blue-600 p-6 flex justify-between items-center shadow-md">
        <h2 className="text-xl text-white font-bold">YFW Content Manager</h2>
        <button onClick={handleLogin} className="text-white bg-blue-700 hover:bg-blue-800 py-2 px-4 rounded transition duration-300 ease-in-out">
          Login
        </button>
      </header>
      <main className="p-8">
        <div className="max-w-4xl mx-auto">
          <img src={heroImage} alt="Digital Content Management" className="rounded-lg shadow-lg mb-8"/>
          <h1 className="text-4xl font-bold mb-4">Welcome to YFW Content Manager App</h1>
          <p className="text-xl mb-8">Your go-to app for managing your digital content efficiently. Streamline your workflow with our intuitive interface and powerful features.</p>
        </div>
      </main>
    </div>
  );
}

export default LandingPage;
