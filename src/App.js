
import React, { Component } from 'react';
import Header from '../src/componentes/header/header';
import About from '../src/componentes/about/about';
import Resume from '../src/componentes/resume/resume';
import Portfolio from '../src/componentes/portfolio/portfolio';
import ContactUs from '../src/componentes/contact/contact';
import Footer from '../src/componentes/footer/footer';
class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <About />
        <Resume />
        <Portfolio />
        <ContactUs />
        <Footer />
      </div>
    );
  }
}export default App;
