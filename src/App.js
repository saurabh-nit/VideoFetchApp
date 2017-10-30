import React, { Component } from 'react';
import MainPageComponent from './components/mainPageComponent';
import Youtube from './components/youtube.js';
import TemperatureComponent from './components/temperature';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import RaisedButton from 'material-ui/RaisedButton';
import AutoComplete from 'material-ui/AutoComplete';
import './App.css';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      array : ['Delcius', 'Farenheit', 'Kelvin'],
      dataSource: ['Delcius', 'Farenheit', 'Kelvin'],
    }
  }
  handleUpdateInput = ()=>{
    console.log('KKKKKk');
  }
  render() {
    return (
      <MuiThemeProvider>
      <div className="App">
        <MainPageComponent></MainPageComponent>
        <RaisedButton label="HELOO"></RaisedButton><br/>
        <div>
          <AutoComplete floatingLabelText="Full width"  hintText="Type anything" dataSource={this.state.dataSource} onUpdateInput={this.handleUpdateInput} />
        </div>
        <TemperatureComponent data={this.state.array}></TemperatureComponent>
        <Youtube></Youtube>
      </div>
      // </MuiThemeProvider>
    );
  }
}

export default App;
