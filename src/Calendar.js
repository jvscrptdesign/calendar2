import React, { Component } from 'react';
import './App.css';

class Calendar extends Component {
  constructor(){
    super();
    this.daysInMonth = this.daysInMonth.bind(this);
    this.buildCalendar = this.buildCalendar.bind(this);
  }

  daysInMonth() {
    return new Date(this.props.year, this.props.month, 0).getDate();
  }

  buildCalendar() {
    let ul = document.getElementById("days");
    //empty previous list
    for (var i = 1; i <= this.daysInMonth(); i++){
        let li = document.createElement("li");
        let date = new Date(this.props.year, this.props.month, i);
        let dStr = date.toLocaleDateString('en-EN', { weekday: 'long'});
        if(dStr == "Saturday" || dStr == "Sunday"){
          li.className = "weekend";
        }
        if(date.getDate()==new Date().getDate()){
          li.className = "active";
        }
        let getdate = date.getDate();
        let textnode = document.createTextNode(getdate);
        li.appendChild(textnode);
        ul.appendChild(li);
    }
  }

  componentDidMount(){
    this.buildCalendar();
  }

  componentDidUpdate(prevProps, prevState){
    if(this.props.day!==prevProps.day||this.props.month!==prevProps.month||this.props.year!==prevProps.year){

    }
  }

  render() {
    return (
      <div>
        <div className="month"> 
          <ul>
            <li className="prev">&#10094;</li>
            <li className="next">&#10095;</li>
            <li>{this.props.monthNames}<br/><span style={{fontSize:18}}>{this.props.year}</span></li>
          </ul>
        </div>

        <ul className="weekdays">
          <li>Mo</li>
          <li>Tu</li>
          <li>We</li>
          <li>Th</li>
          <li>Fr</li>
          <li>Sa</li>
          <li>Su</li>
        </ul>

        <ul className="days" id="days">

        </ul>
      </div>
    )
  }
}

export default Calendar;
