import * as React from 'react';

interface IProps {
	name: string;
	metaDescription: string;
	cost: number;
	img: string;
	imgAlt: string;
	colour: string;
}

export default class Product extends React.Component<IProps> {
	public render() {
		const {name} = this.props;
		const {metaDescription} = this.props;
		const {cost} = this.props;
		const {img} = this.props;
		const {imgAlt} = this.props;
		const {colour} =  this.props;

		return (
			<div className="product--grid" >
				<div className="product--img">
				<img src={img} alt={imgAlt} />
				</div>

				<div className="product--info">
				<h3>{name}</h3>
				<p>{metaDescription}</p>
				</div>
				<div className="product--cost">
				<span className={colour}>£{cost}</span>
				</div>

			</div>
		);
	}
}

