import React from 'react';

class Weather extends React.Component {
	render() {
		return (
			<div>
				<p>city: {this.props.city}</p>
				<p>country: {this.props.country}</p>
				<p>temperature: {this.props.temperature}</p>
				<p>humidity: {this.props.humidity}</p>
				<p>description: {this.props.description}</p>
			</div>
		);
	}
}

export default Weather;
