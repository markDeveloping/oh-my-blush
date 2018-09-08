import * as React from 'react';
import sparks from '../img/sparks.jpeg';


interface IProps {
	welcome_label: string;
	para: string;
}

export default class Welcome extends React.Component<IProps> {
	public render() {
		const {welcome_label} = this.props;
		const {para} = this.props;
		return (
			<div className="welcome--grid">
			<div className="welcome--heading">
			<h1>{welcome_label}</h1>
			</div>
			<div className="welcome--para">
			<p>{para}</p>
			</div>
			<div>
			<img className="welcome--img" src={sparks} alt="picture of a sparkler."/>
			</div>
			</div>
		);
	}
}