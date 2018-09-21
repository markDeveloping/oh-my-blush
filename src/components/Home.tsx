import * as React from 'react';
import Contact from './Contact';
import Product from './Product';
import Welcome from './Welcome';

// images

import love from '../img/love.jpeg';
import pinkwall from '../img/pinkwall.jpg';
import whitewall from '../img/whitewall.jpg';

const Home = () => (
			<div>
	        <Welcome welcomeLabel="Welcome" para="At Oh My Blush, we aim to bring that little extra sparkle to your big day."/>
	        <div className="product--heading">
         	<h2>Products</h2>
	        </div>
	        <div className="product-grid--container">
	        <Product name="Ellie" metaDescription="Pretty floral letters filled with high quality artificial roses, peonies and greenery" cost={150} img={love} imgAlt="Picture of our love letters at a wedding" colour="pink" />
	        <Product name="Maddie" metaDescription="A beautiful blend of pale pink, blush and nude flowers - 2.5 X 2.5m" cost={200} img={pinkwall} imgAlt="Picture of our pale pink and nutural flower wall" colour="blue" />
	        <Product name="Gracie" metaDescription="A perfect contrast between rich foliage and classic white flowers - 2.5 x 2.5m" cost={200} img={whitewall} imgAlt="Picture of our white flower wall" colour="pink" />        
	        </div>
	        <Contact contactHeading="Contact us" />
	        </div>
	)

export default Home;