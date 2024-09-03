import React from 'react';
import Header from './components/Header';
import Banner from './components/Banner';
import Services from './components/Services';
import Footer from './components/Footer';
import Login from './components/Login';
import Register from './components/Register';

const App = () => {
  return (
    <div className="App">
      <Header />
      <Login/>
      <Register/>
      <Banner />
      <Services />
      <Footer />
    </div>
  );
}

export default App;
