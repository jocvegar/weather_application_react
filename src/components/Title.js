import React from 'react';

// class Title extends React.Component {
// 	render() {
// 		return (
// 			<div>
// 				<h1>Weather Finder</h1>
// 			</div>
// 		);
// 	}
// }

// when returning a single div we can get rid of the return statement!

const Title = () => (
	<div>
		<h1 className="title-container__title">Weather Finder</h1>
		<p className="title-container__subtitle">
			Please enter a city and a country
		</p>
	</div>
);

export default Title;
