import React, { Component } from "react";
import axios from "axios";

//Note: name, dob, email, phone, doctor, and visited are not needed right now and are therefore commented. 
class NewAppt extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // name: "",
      // dob: "",
      // email: "",
      // phone: "",
      date: "",
      time: "",
      visitType: "",
      comments: "",
      // doctor: "",
      // visited: ""
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(event) {
    this.setState({
      [event.currentTarget.name]: event.currentTarget.value
    });
  }

  async handleSubmit(event) {
    event.preventDefault();
    console.log("test");
    const baseURL = this.props.baseURL;
    const response = await axios.post(`${baseURL}/appointment`, {
      date: this.state.date,
      time: this.state.time,
      visitType: this.state.visitType,
      comments: this.state.comments,
    });
    this.setState({
      date: "",
      time: "",
      visitType: "",
      comments: "",
    });
    this.props.getAppointments();
  }

  render() {
    return (
      <div className="card-content">
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="date">Date</label>
          <input className="inputData"
            type="date"
            id="date"
            name="date"
            onChange={this.handleChange}
            value={this.state.date}
            placeholder="Enter Date"
          />
          <label htmlFor="time">Time</label>
          <input className="inputData"
            type="time"
            id="time"
            name="time"
            onChange={this.handleChange}
            value={this.state.time}
            placeholder="Enter Appointment Time"
          />
          <label htmlFor="visitType">Appointment Type</label>
          <input className="inputData"
            type="text"
            id="visitType"
            name="visitType"
            onChange={this.handleChange}
            value={this.state.visitType}
            placeholder="Enter Reason for Visit"
          />
          <label htmlFor="coments">Comments / Additional Information</label>
          <textarea className="inputData"
            id="comments"
            name="comments"
            onChange={this.handleChange}
            value={this.state.comments}
            placeholder="Enter Comments / Additional Information"
          />
          <input 
          className="submitBtn" 
          type="submit" 
          value="SUBMIT" 
          />
        </form>
      </div>
    );
  }
}

export default NewAppt;
