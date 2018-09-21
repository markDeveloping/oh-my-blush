import * as React from 'react';
import Contact from './Contact';

// image

import mikeandmel from '../img/mikeandmel.jpeg';

	const About = () => (
			<div>
			<div className="about--grid" >

				<div className="about--img">
					<img src={mikeandmel} alt="Picture of Oh My Blush owners Mike and Millie." />
				</div>

				<div className="about--heading">
				<h1>About us</h1>
				</div>

				<div className="about--body">
				<p>We are Mike and Millie Cox, a husband and wife team. We setup Oh My Blush in 2018, the year of our wedding.</p>
				<p>Having found ourselves in the exciting world of weddings we quickly realised it was the little extras that made the day feel very special.</p>
				<p>We loved planning and decided that we wanted to help other couples.</p>
				<p>Our friendly, down to earth approach and our attention to detail makes us stand out from the crowd.</p>
				<p>We look forward to hearing from you and if you hav any spcial requests let us know, we’ll do all we can to help.</p>
				</div>
			</div>
			<Contact contactHeading="Contact us" />
			</div>
		)

	export default About;