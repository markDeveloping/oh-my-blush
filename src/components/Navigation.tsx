import * as React from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => (
<nav>
	<ul>
		<li><Link to='/'>Home</Link></li>
		<li><Link to='/about'>About</Link></li>
		<li><Link to='/testimonials'>Testimonials</Link></li>
	</ul>
</nav>
	)

export default Navigation;