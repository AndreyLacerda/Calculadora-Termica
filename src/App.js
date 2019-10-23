import React from 'react';
import AppCelsius from './AppCelsius.js';
import AppFahrenheit from './AppFahrenheit.js';
import AppKelvin from './AppKelvin.js';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      valorFahrenheit: 32,
      valorCelsius: 0,
      valorKelvin: 273.1
    };
    this.updateValorCelsius = this.updateValorCelsius.bind(this);
    this.updateValorFahrenheit = this.updateValorFahrenheit.bind(this);
    this.updateValorKelvin = this.updateValorKelvin.bind(this);
  }

  updateValorCelsius(valor){
    this.setState({valorCelsius: valor})
  };

  updateValorFahrenheit(valor){
    this.setState({valorFahrenheit: valor})
  };

  updateValorKelvin(valor){
    this.setState({valorKelvin: valor})
  };

  render(){
    return (
      <div className="App">
        <h1>Conversor de Unidades de Medida Térmica</h1>
        <AppCelsius valorFahrenheit = {this.state.valorFahrenheit}
                    parentCallback ={this.updateValorCelsius}
        />
        <AppFahrenheit valorCelsius = {this.state.valorCelsius} 
                       parentCallback ={this.updateValorFahrenheit}
        />
        <AppKelvin valorCelsius = {this.state.valorCelsius}
                    parentCallback ={this.updateValorKelvin}
        />
      </div>
    );
  }
}

export default App;
