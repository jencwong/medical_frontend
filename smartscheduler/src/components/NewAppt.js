import React, { Component } from "react";
import axios from "axios";

class NewAppt extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      dob: "",
      email: "",
      phone: "",
      date: "",
      time: "",
      vistType: "",
      doctor: "",
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
    const response = await axios.post(`${baseURL}/appointments`, {
      name: this.state.name,
      dob: this.state.dob,
      email: this.state.email,
      phone: this.state.phone,
      visitType: this.state.visitType,
      doctor: this.state.doctor,
    });
    this.setState({
      firstName: "",
      lastName: "",
      dob: "",
      email: "",
      phone: "",
      visitType: "",
      comments: "",
      doctor: "",
    });
    this.props.getAppointments();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label htmlFor="name"></label>
        <input
          type="text"
          id="name"
          name="name"
          onChange={this.handleChange}
          value={this.state.name}
          placeholder="Enter Your Name"
        />
        <label htmlFor="dob"></label>
        <input
          type="text"
          id="dob"
          name="dob"
          onChange={this.handleChange}
          value={this.state.dob}
          placeholder="Date of Birth"
        />
        <label htmlFor="email"></label>
        <input
          type="text"
          id="email"
          name="email"
          onChange={this.handleChange}
          value={this.state.email}
          placeholder="Email"
        />
        <label htmlFor="phone"></label>
        <input
          type="text"
          id="phone"
          name="phone"
          onChange={this.handleChange}
          value={this.state.phone}
          placeholder="Phone Number"
        />
        <input
          type="text"
          id="visitType"
          name="visitType"
          onChange={this.handleChange}
          value={this.state.visitType}
          placeholder="Reason for Visit"
        />
         <textarea
          id="comments"
          name="comments"
          onChange={this.handleChange}
          value={this.state.comments}
          placeholder="Comments / Reason for Visit"
        />
        <input
          type="text"
          id="doctor"
          name="visitType"
          onChange={this.handleChange}
          value={this.state.visitType}
          placeholder="Reason for Visit"
        />
        <input type="submit" value="SUBMIT" />
      </form>
    );
  }
}

export default NewAppt;
