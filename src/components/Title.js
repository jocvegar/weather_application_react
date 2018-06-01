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

// when returning a single div we can get rid of the return statement!s

const Title = () => (
	<div>
		<h1>Weather Finder</h1>
		<p>Please enter a city and a country</p>
	</div>
);

export default Title;
