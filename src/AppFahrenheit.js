import React from 'react';

class AppFahrenheit extends React.Component {
    
    constructor(props){
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e){
        this.props.parentCallback(e.target.value);          
    }

    render(){
        var valor;
        if (!this.props.valorCelsius)
            valor = null;
        else
            valor = Math.round((this.props.valorCelsius * 9 / 5 + 32)*10)/10;
        return (
            <div className="AppFahrenheit">
                <label>
                    Fahrenheit:
                    <input type="number" value={valor} onChange={this.handleChange}></input>
                </label>
            </div>
        );
    }
}

export default AppFahrenheit;