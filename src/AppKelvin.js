import React from 'react';

class AppKelvin extends React.Component {

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
            valor = Math.round((parseFloat(this.props.valorCelsius) + 273.1)*10)/10;
        return (
            <div className="AppKelvin">
                <label>
                    Kelvin: 
                    <input type="number" value={valor} onChange={this.handleChange}></input>
                </label>
            </div>
        );
    }
}

export default AppKelvin;