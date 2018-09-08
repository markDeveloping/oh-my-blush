import * as React from 'react';
import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Product from './components/Product';
import Welcome from './components/Welcome';

// import background from './img/background.jpeg'

class App extends React.Component {
  public render() {
    return (
      <div className="App">
        <Header/>
        <Welcome welcome_label="Welcome" para="At Oh My Blush, we aim to bring that little extra sparkle to your big day."/>       
        <Product/>
        <Footer email="ohmyblush.eventhire@hotmail.com" contact_label="Contact us" telephone="0749 6539 219" street="Tintern Close" town="Bristol" postcode="BS30 7XH"/>
      </div>
    );
  }
}

export default App;
