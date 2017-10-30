import React, { Component } from 'react';

class TemperatureComponent extends Component {

  constructor(props) {
    super(props);
    console.log('PROPS:', props);
    this.state = {
      nameOfCompany: this.props.data,
   };
   this.showMe = this.showMe.bind(this);
 }

 showMe(value, event){
   console.log('SHOW Me:', value, event.currentTarget);
   event.currentTarget.style.fontSize = "50px";
   event.currentTarget.style.animationName = 'App-logo-spin';
   event.currentTarget.style.animationDuration = '5s';
 }

  render(){
    console.log('TemperatureComponent is Rendering Now');
    console.log('data is:', this.state.nameOfCompany);
    return(
      <div className='temperatureClass'>
       Temperature component
        {
          this.state.nameOfCompany.map((el,i)=>{
           let unit = <h2 onClick={this.showMe.bind(this, el)} key={i} >{el}</h2>
           return unit;
          })
        }
      <div>
      <fieldset>
      <legend>Enter Temperature in :</legend>
      <input type='number'/>
      </fieldset>
      </div>
      </div>
    );
  }
}
export default TemperatureComponent;
