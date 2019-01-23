import React from 'react';

class Weather extends React.Component {
	render() {
		return (
			<div className="weather__info">
				{
					this.props.city && this.props.country &&
					<p className="weather__key">Location:
						<span className="weather__value"> {this.props.city}, {this.props.country}</span>
					</p>
				}
				{
					this.props.temperature &&
					<p className="weather__key">Temperature:
						<span className="weather__value"> {this.props.temperature}&#176; C</span>
					</p>
				}
				{
					this.props.humidity &&
					<p className="weather__key">Humidity:
						<span className="weather__value"> {this.props.humidity}%</span>
					</p>
				}
				{
					this.props.description &&
					<div>
						<p className="weather__key">Conditions:
							<span className="weather__value"> {this.props.description}</span>
						</p>
						<div className="row">
						    <div className="col-xs-offset-8 col-xs-4">
						        <button onClick={this.props.handleClick}>Reset</button>
						    </div>
						</div>
					</div>
				}
				{
					this.props.error && <p className="weather__error">{this.props.error}</p>
				}
			</div>
		);
	}
}

// I could clean this code because we are not using states here, but I will leave
// it to show to 3 types of writting stateless functions :)

export default Weather;
