import React, { Component } from 'react';

class MainPageComponent extends Component {

  constructor(props) {
    super(props);
    this.state = {
      value: '',
      isGoing: true,
      numberOfGuests: 2
    };

    // this.handleChange = this.handleChange.bind(this);
    // this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange = (event) =>{
    this.setState({value: event.target.value.toUpperCase()});
    console.log('sss', this.state.value);
  }

  handleSubmit = (event) =>{
    console.log('Submitted Input:',this.state.value );
    event.preventDefault();
  }

  handleChangeSelect = (event) =>{
    console.log('Selected Value:', event.target.value);
    event.preventDefault();
  }

  handleInputChange = (event) => {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name] : value
    });
  }



  render(){
    return(
      <div>
      This is Main Component
      <form onSubmit={this.handleSubmit}>
      <label>
      Name:
      </label>
      <input type="text" value={this.state.value} onChange={this.handleChange} />
      <input type="submit" value="Submit" /><br/>
      <textarea>
      Hello there, this is some text in a text area
      </textarea><br/>
      <select onChange={this.handleChangeSelect}>
      <option value="grapefruit">Grapefruit</option>
      <option value="lime">Lime</option>
      <option selected value="coconut">Coconut</option>
      <option value="mango">Mango</option>
      </select><br/>
      <select multiple={true}>
      <option value="lime">Lime</option>
      <option selected value="coconut">Coconut</option>
      <option value="mango">Mango</option>
      </select><br/>
      <label>
      Is going:
      <input
      name="isGoing"
      type="checkbox"
      checked={this.state.isGoing}
      onChange={this.handleInputChange} />
      </label>
      <br />
      <label>
      Number of guests:
      <input
      name="numberOfGuests"
      type="number"
      value={this.state.numberOfGuests}
      onChange={this.handleInputChange} />
      </label><br/>
      <label>
      Uncontrolled Input:
      <input type="text" ref={(input) => this.input = input} />
      </label>
      </form>
      </div>
    )
  }
}

export default MainPageComponent;
