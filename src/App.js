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
        // try {
        //     const API_CALL = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}&units=imperial`);
        //     if (API_CALL.ok) {
        //         const jsonResponse = await API_CALL.json();
        //         console.log(jsonResponse);
        //     }
        //     throw new Error('Request Failed!');
        // } catch (error) {
        //     console.log(error);
        // }

        const API_CALL = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}&units=metric`);
        const jsonResponse = await API_CALL.json();
        console.log(jsonResponse);

        this.setState({
            temperature: jsonResponse.main.temp,
            city: jsonResponse.name,
            country: jsonResponse.sys.country,
            humidity: jsonResponse.main.humidity,
            description: jsonResponse.weather[0].description,
            error: ""
        })

    }

    render() {
        return(
            <div>
                Hello
                <Title />
                <Form getWeather={this.getWeather}/>
                <Weather
                    temperature={this.state.temperature}
                    city={this.state.city}
                    country={this.state.country}
                    humidity={this.state.humidity}
                    description={this.state.description}
                    error={this.state.error}
                />
            </div>

        );
    }
}

export default App;
