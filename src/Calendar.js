import React, { Component } from 'react';
import './App.css';

class Calendar extends Component {
  constructor(){
    super();
    this.daysInMonth = this.daysInMonth.bind(this);
    this.buildCalendar = this.buildCalendar.bind(this);
  }

  daysInMonth() {
    return new Date(this.props.year, this.props.month+1, 0).getDate();
  }

  buildCalendar() {
    let ul = document.getElementById("days");
    let offset = new Date(this.props.year, this.props.month, 1).toLocaleDateString('en-EN', { weekday: 'short'});
    switch(offset){
      case "Mon": 
        offset = 0;
        break;
      case "Tue":
        offset = 1;
        break;
      case "Wed":
        offset = 2;
        break;
      case "Thu":
        offset = 3;
        break;
      case "Fri":
        offset = 4;
        break;
      case "Sat":
        offset = 5;
        break;
      case "Sun":
        offset = 6;
        break;
    }
    for (let j=0; j<offset; j++){
      let li = document.createElement("li");
      let textnode = document.createTextNode("");
      li.appendChild(textnode);
      ul.appendChild(li);
    }
    for (let i = 1; i <= this.daysInMonth(); i++){
      console.log("i: "+i);
        let li = document.createElement("li");
        let date = new Date(this.props.year, this.props.month, i);
        let dStr = date.toLocaleDateString('en-EN', { weekday: 'long'});
        if(dStr === "Saturday" || dStr === "Sunday"){
          li.className = "weekend";
        }
        if(date.getDate()===new Date().getDate()){
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
      var myNode = document.getElementById("days");
      myNode.innerHTML = '';
      this.buildCalendar();
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
