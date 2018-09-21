import * as React from 'react';


// compiled css file
import './App.css';


// react modules
import Footer from './components/Footer';
import Header from './components/Header';
import Main from './components/Main';
import Navigation from './components/Navigation';

const App = () => (
      <div className="App">
        <Header/>
        <Navigation/>
        <Main/>
        <Footer email="ohmyblush.eventhire@hotmail.com" contactLabel="Contact us" telephone="0749 6539 219" street="Tintern Close" town="Bristol" postcode="BS30 7XH"/>
      </div>
    )



export default App;
