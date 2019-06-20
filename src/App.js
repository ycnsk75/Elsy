import React from "react";
import Water from "./components/Water";
import Person from "./components/Person";
import Sun from "./components/Sun";
import Heart from "./components/Heart";

// const MIN_TEMPERATURE = -20;
// const MAX_TEMPERATURE = 40;
// const MIN_HEART = 80;
// const MAX_HEART = 180;
// const MIN_STEPS = 0;
// const MAX_STEPS = 50000;

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      water: 1.5,
      heart: 120,
      temperature: 0,
      steps: 0
    };
  }

  calculateWater = (heart, temperature, steps) => {
    var water = this.state.water;
    if(heart > 120) {
      water = water + (0.0008*(heart-120))
    }
    if(temperature > 20){
      water = water + (0.08*(temperature-20))
    }
    if(steps > 10000){
      water = water + (0.00002*(steps-10000))
    }
    return Math.round(water * 100) / 100;
  }
 
  onChangeHeart = (value) => {
    console.log('HeartRate slider: ', value);
    this.setState({heart : value});
  }

  onChangeTemperature = (value) => {
    console.log('Temperature slider: ', value);
    this.setState({temperature : value});
  }

  onChangeSteps = (value) => {
    console.log('Number of steps: ', value);
    this.setState({steps : value});
  }

  buttonPlus(value) {
    console.log('App#onChangeSteps Plus', value);
    this.setState({
      steps: value+1000
    })
  }

  render() {
    return (
      <div className="container-fluid">
        <div style={{textAlign:"center"}}>
        <h3>ELSY APP </h3>
        <p>Have a Walk</p> 
        <p>Choose the Temperature</p> 
        <p>Choose the Heart Rate...</p> 
        <p>Get your Need of Water!</p>
        </div>
        <div className="row">
          <Water water={this.state.water}
          waterFn = {this.calculateWater(this.state.heart, this.state.temperature, this.state.steps)} 
          />
          <Person
            steps={this.state.steps}
            onChangeFn = {this.onChangeSteps}
          />
          <Heart
            heart={this.state.heart}
            onChangeFn = {this.onChangeHeart}
          />
          <Sun
            temperature={this.state.temperature}
            onChangeFn = {this.onChangeTemperature}
          />
        </div>
      </div>
    );
  }
}

export default App;
