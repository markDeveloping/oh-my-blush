import * as React from 'react';


interface IProps {
	welcome_label: string;
	para: string;
}

export default class Welcome extends React.Component<IProps> {
	public render() {
		const {welcome_label} = this.props;
		const {para} = this.props;

		return (
			<div>
			<div>{welcome_label}</div>
			<div/>
			<div>
			{para}
			</div>
			</div>
		);
	}
}