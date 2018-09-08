import * as React from 'react';

interface IProps {
	contact_label: string;
	email: string;
	telephone: string;
	street: string;
	town: string;
	postcode: string;
}

export default class Footer extends React.Component<IProps> {
	public render() {
		const {contact_label} = this.props;
		const {email} = this.props;
		const {telephone} = this.props;
		const {street} = this.props;
		const {town} = this.props;
		const {postcode} = this.props;

		return (
			<footer>
				<div className="footer--grid">
					<div className="footer--contact">
					<h3>{contact_label}</h3>
					<address>
						<ul>
						<li><a href="mailto:ohmyblush.eventhire@hotmail.com">{email}</a></li>
						<li><a href="tel:07496539219">{telephone}</a></li>
						</ul>
						{street},<br/>
						{town},<br/>
						{postcode}
					</address>
					</div>
					<div className="footer--privacy">
						<h3>How we use your data</h3>
						<ul>
							<li><a href="#">Privacy notice</a></li>
							<li><a href="cookies">Cookies</a></li>
						</ul>	
					</div>
				</div>
			</footer>
		);
	}
}