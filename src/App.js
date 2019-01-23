import React from 'react';
import Title from './components/Title';
import Form from './components/Form';
import Weather from './components/Weather';

const API_KEY = '225859804d219ba70be8cb32d527eb9c';

class App extends React.Component {

    state = {
        temperature: undefined,
        city: undefined,
        country: undefined,
        humidity: undefined,
        description: undefined,
        error: undefined
    }

    getWeather = async (e) => {
        e.preventDefault();
        const city = e.target.elements.city.value;
        const country = e.target.elements.country.value;
        try {
            const API_CALL = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}&units=imperial`);
            if (API_CALL.ok) {
                const jsonResponse = await API_CALL.json();

                this.setState({
                    temperature: jsonResponse.main.temp,
                    city: jsonResponse.name,
                    country: jsonResponse.sys.country,
                    humidity: jsonResponse.main.humidity,
                    description: jsonResponse.weather[0].description,
                    error: ""
                })
            } else {
                throw new Error('Request Failed!');
            }
        }   catch (error) {
            // console.log(error);
            this.setState({
                temperature: undefined,
                city: undefined,
                country: undefined,
                humidity: undefined,
                description: undefined,
                error: "Please enter a value!"
            })
        }
        // const API_CALL = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}&units=imperial`);
        // const jsonResponse = await API_CALL.json();
        // console.log(jsonResponse);
    }

    handleClick = e => {
        document.getElementById("formId").reset();
        this.setState({
            temperature: undefined,
            city: undefined,
            country: undefined,
            humidity: undefined,
            description: undefined,
            error: undefined
        })
    }

    render() {
        return(
            <div>
                <div className="wrapper">
                    <div className="main">
                        <div className="container">
                            <div className="row">
                                <div className="col-xs-5 title-container">
                                    <Title />
                                </div>
                                <div className="col-xs-7 form-container">
                                    <Form getWeather={this.getWeather}/>
                                    <Weather
                                        temperature={this.state.temperature}
                                        city={this.state.city}
                                        country={this.state.country}
                                        humidity={this.state.humidity}
                                        description={this.state.description}
                                        error={this.state.error}
                                        handleClick={this.handleClick}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        );
    }
}

export default App;
