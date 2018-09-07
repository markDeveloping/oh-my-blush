import * as React from 'react';
import logo from '../img/logo.png';

export default class Header extends React.Component{
		public render() {
		return (
			<header>
			<div className="grid-container">
				<div className="logo">
				<img className="responsive" src={logo} alt="Oh my blush logo, light pink background with curly font." />
				</div>
				<div className="header__line-break" />
			</div>
			</header>
		);
	}
}