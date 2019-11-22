import React, { Component } from "react";
import axios from "axios";

class UpdateAppt extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      do: "",
      email: "",
      phone: "",
      date: "",
      time: "",
      vistType: "",
      comments: "",
      doctor: "",
    };
    this.handleOnChange = this.handleOnChange.bind(this);
    this.handleEditSubmit = this.handleEditSubmit.bind(this);
  }

  componentDidMount() {
    console.log("edited");
    this.setState({
      name: this.props.user.name,
      do: this.props.user.do,
      email: this.props.user.email,
      phone: this.props.user.phone,
      date: this.props.appointment.date,
      time: this.props.appointment.time,
      visitType: this.props.appointment.visitType,
      doctor: this.props.user.doctor,
    });
  }

  handleOnChange(event) {
    const { key, value } = event.target;
    this.setState({
      [key]: value
    });
  }

  async handleEditSubmit(event) {
    try {
      event.preventDefault();
      const appointmentID = this.props.appointment._id;
      const url = `http://localhost:3003/bookmarks/${appointmentID}`;
      const payload = {
        name: this.state.name,
        dob: this.state.dob,
        email: this.state.appointment.email,
        phone: this.state.appointment.phone,
        date: this.state.appointment.date,
        time: this.state.appointment.time,
        visitType: this.state.appointment.visitType,
        };
      const updatedAppointment = await axios.put(url, payload);
      this.props.getAppointments();
      this.setState({
        name: "",
        dob: "",
        email: "",
        phone: "",
        date: "",
        time: "",
        vistType: "",
      });
    } catch (err) {
      console.log(err);
    }
  }

  render() {
    return (
      <p>
        <form onSubmit={this.handleEditSubmit}>
        <div className="row">
          <label htmlFor="name">Title</label>
          <input type="text" id="name" name="name" value={ this.state.name } onChange={ this.handleOnChange }/>
          <label htmlFor="dob
">Date of Birth</label>
          <input type="text" id="dob
" name="dob
" value={ this.state.dob
 } onChange={ this.handleOnChange } />
          <input type="text" id="email" name="Email" value={ this.state.email } onChange={ this.handleOnChange } />
          <input type="text" id="phone" name="phone" value={ this.state.phone } onChange={ this.handleOnChange } />
          <input type="text" id="date" name="date" value={ this.state.date } onChange={ this.handleOnChange } />
          <input type="text" id="time" name="time" value={ this.state.time } onChange={ this.handleOnChange } />
          <input type="text" id="visitType" name="visitType" value={ this.state.visitType } onChange={ this.handleOnChange } />
          <label htmlFor="comments">Comments / Reason for Visit</label>
          <textarea className="u-full-width" id="comments" name="comments" value={ this.state.comments } />
          <input type="submit" value="Update Appointment" />
        </div>
      </form>
      </p>

    );
  }
}

export default UpdateAppt;
