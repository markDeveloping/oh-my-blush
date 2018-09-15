import * as React from 'react';

interface IProps {
	contactHeading: string;
}

export default class Contact extends React.Component<IProps> {
	public render() {
		const {contactHeading} = this.props;

		return (

<div className="contact--grid">


	<div className="contact--heading">
		<h2>{contactHeading}</h2>
	</div>


	<form id="contact-form">
		<div className="contact--key-info">

			<legend>Contact form</legend>
				<label htmlFor="from_name">Name</label>
				<input type="text" id="from_name" name="from_name" />



				<label htmlFor="reply_to">Email</label>
				<input type="email" id="reply_to" name="reply_to" />



				<label htmlFor="tel_no">Tel</label>
				<input type="text" id="tel_no" name="tel_no" />


		</div>
		<div className="contact--message">

				<label htmlFor="message_body">Your message</label>
				<textarea id="message_body" name="message_body"/>
			
		</div>
		<div className="contact--button">
			<input type="submit" value="Send" />
		</div>
	</form>

</div>

		);
	}
}