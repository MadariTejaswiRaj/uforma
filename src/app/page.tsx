import React from 'react';

const LandingPage = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <header className="bg-white shadow-md">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <div className="text-3xl font-bold text-gray-800">uforma</div>
          <nav className="space-x-4">
            <a href="#explore" className="text-gray-800 hover:text-gray-600">Explore</a>
            <a href="#ask" className="text-gray-800 hover:text-gray-600">Ask</a>
            <a href="#features" className="text-gray-800 hover:text-gray-600">Features</a>
            <a href="#testimonials" className="text-gray-800 hover:text-gray-600">Testimonials</a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-cover bg-center h-screen" style={{ backgroundImage: "url('https://source.unsplash.com/random')" }}>
        <div className="bg-black bg-opacity-50 h-full flex flex-col justify-center items-center text-center text-white">
          <h1 className="text-5xl font-bold mb-4">Welcome to uforma</h1>
          <p className="text-xl mb-8">Connect, explore, and ask anything.</p>
          <a href="#explore" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Get Started</a>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-16 bg-gray-100">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-12">Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <h3 className="text-2xl font-bold mb-4">Feature 1</h3>
              <p className="text-gray-600">Description of feature 1.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <h3 className="text-2xl font-bold mb-4">Feature 2</h3>
              <p className="text-gray-600">Description of feature 2.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <h3 className="text-2xl font-bold mb-4">Feature 3</h3>
              <p className="text-gray-600">Description of feature 3.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-12">Testimonials</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gray-100 p-6 rounded-lg shadow-md text-center">
              <p className="text-gray-600 mb-4">"uforma has changed the way I connect with others."</p>
              <h3 className="text-xl font-bold">User 1</h3>
            </div>
            <div className="bg-gray-100 p-6 rounded-lg shadow-md text-center">
              <p className="text-gray-600 mb-4">"A fantastic platform for exploring new ideas."</p>
              <h3 className="text-xl font-bold">User 2</h3>
            </div>
            <div className="bg-gray-100 p-6 rounded-lg shadow-md text-center">
              <p className="text-gray-600 mb-4">"I love asking questions and getting insightful answers."</p>
              <h3 className="text-xl font-bold">User 3</h3>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-6">
        <div className="container mx-auto px-6 text-center">
          <p>&copy; 2023 uforma. All rights reserved.</p>
          <div className="mt-4 space-x-4">
            <a href="#" className="hover:text-gray-400">Facebook</a>
            <a href="#" className="hover:text-gray-400">Twitter</a>
            <a href="#" className="hover:text-gray-400">Instagram</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;