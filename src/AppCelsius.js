import React from 'react';

class AppCelsius extends React.Component {

    constructor(props){
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e){
        this.props.parentCallback(e.target.value);          
    }

    render(){
        var valor = Math.round(((this.props.valorFahrenheit - 32) * 5 / 9)*10)/10;
        return (
            <div className="AppCelsius">
                <label>
                    Celsius: 
                    <input type="number" onChange={this.handleChange}></input>
                </label>
            </div>
        );
    }
}

export default AppCelsius;