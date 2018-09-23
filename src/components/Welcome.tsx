import * as React from 'react';
import sparks from '../img/sparks.jpeg';


interface IProps {
	welcomeLabel: string;
	para: string;
}

export default class Welcome extends React.Component<IProps> {
	public render() {
		const {welcomeLabel} = this.props;
		const {para} = this.props;
		return (
			<div className="welcome--grid">
			<div className="welcome--heading">
			<h1>{welcomeLabel}</h1>
			</div>
			<div className="welcome--para">
			<p>{para}</p>
			</div>
			<div className="welcome--img__container">
			<img className="welcome--img" src={sparks} alt="picture of a sparkler."/>
			</div>
			</div>
		);
	}
}