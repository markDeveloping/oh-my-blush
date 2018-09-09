import * as React from 'react';
import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Product from './components/Product';
import Welcome from './components/Welcome';

// import for images 
import love from './img/love.jpg';
import pinkwall from './img/pinkwall.jpg';
import whitewall from './img/whitewall.jpg';


class App extends React.Component {
  public render() {
    return (
      <div className="App">
        <Header/>
        <Welcome welcomeLabel="Welcome" para="At Oh My Blush, we aim to bring that little extra sparkle to your big day."/>       
        <div className="product--heading">
          <h2>Products</h2>
        </div>
        <Product name="Ellie" metaDescription="Pretty floral letters filled with high quality artificial roses, peonies and greenery" cost={150} img={love} imgAlt="Picture of our love letters at a wedding" colour="pink" />
        <Product name="Maddie" metaDescription="A beautiful blend of pale pink, blush and nude flowers - 2.5 X 2.5m" cost={200} img={pinkwall} imgAlt="Picture of our pale pink and nutural flower wall" colour="blue" />
        <Product name="Gracie" metaDescription="A perfect contrast between rich foliage and classic white flowers - 2.5 x 2.5m" cost={200} img={whitewall} imgAlt="Picture of our white flower wall" colour="pink" />        
        <Footer email="ohmyblush.eventhire@hotmail.com" contactLabel="Contact us" telephone="0749 6539 219" street="Tintern Close" town="Bristol" postcode="BS30 7XH"/>
      </div>
    );
  }
}

export default App;
