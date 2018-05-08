import React, { Component } from 'react';
import Calendar from './Calendar.js';
import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state = {
      day: 1,
      month: 0,
      year: 2018,
      monthNames: ["January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
      ]
    };
    this.handleClickToday = this.handleClickToday.bind(this);
    this.populateOptions = this.populateOptions.bind(this);
  }

  handleClickToday() {
    let today = new Date();
    this.setState({
      day: today.getDate(),
      month: today.getMonth(),
      year: today.getFullYear(),
    });
  }

  componentDidMount(){
    console.log("mount");
  }

  componentDidUpdate(prevProps, prevState){
    console.log("componentDidUpdate");
    if(this.state.day!==prevState.day||this.state.month!==prevState.month||this.state.year!==prevState.year){
      this.setState({ 
        day: this.state.day,
        month: this.state.month,
        year: this.state.year,
      });
    }
  }

  populateOptions(options) {
    return options.map((option, index) => (
      <option key={index} value={option}>{option}</option>
    ));
  }

  render() {
    return (
      <div>
        <span>day:&nbsp;<input type="number" min="1" max="31"  value={this.state.day} onChange={e=>this.setState({day: e.target.value})} />&nbsp;

        month:&nbsp;<select value={this.state.monthNames[this.state.month]} onChange={
          e=>this.setState({month: e.target.selectedIndex})
        }>{this.populateOptions((this.state.monthNames))}</select>&nbsp;

        year:&nbsp;<input type="number" min="0" value={this.state.year} onChange={e=>this.setState({year: e.target.value})}/>&nbsp;</span>

        <button onClick={e=>{
          this.handleClickToday(e)
        }}>today</button><br/><br/>

        <Calendar
          monthNames={this.state.monthNames[this.state.month]}
          day={this.state.day}
          month={this.state.month}
          year={this.state.year}
        />
        </div>
    );
  }
}

export default App;
