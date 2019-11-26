//This code is incomplete. We need to decide what we want the user to see. Recommendations: The show page is the complete record / details of what is shown on mouseover. It should contain all of the details of the appointment.
//Additional features could include: options to print, show map of location with option of entering starting point, add to personal calendar (cal api link on how to do this was Slacked). Questions for consideration: should edit and delete be options too? View for patient and doctor should be different - for example, the doctor does not need a map.

import React from "react";
import axios from "axios";
// import NewAppt from "./NewAppt";
let baseURL = process.env.REACT_APP_BASEURL;
if (process.env.NODE_ENV === "development") {
  baseURL = "http://localhost:3003";
} else {
  baseURL = "heroku or other backend url here";
}
class ShowAppt extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      appointments: [],
      appointment: {}
    };
    this.handleAddAppointment = this.handleAddAppointment.bind(this);
    this.deleteAppointment = this.deleteAppointment.bind(this);
    this.getAppointment = this.getAppointment.bind(this);
  }
  componentDidMount() {
    this.getAppointment();
  }
  //Get appt
  async getAppointment() {
    const response = await axios.get(`${baseURL}/appointment`);
    const appointment = response.data;
    this.setState({ appointment: appointment });
  }
  //Add Appt
  handleAddAppointment(appointment) {
    this.setState({
      appointments: [...this.state.appointments, appointment]
    });
  }
  //Delete appt
  async deleteAppointment(id) {
    await axios.delete(`${baseURL}/appointment/${id}`);
    const filteredAppointments = this.state.appointments.filter(appointment => {
      return appointment._id !== id;
    });
    this.setState({
      appointments: filteredAppointments
    });
  }
  getAppointment(appointment) {
    this.setState({ appointment: appointment });
  }
  render() {
    const date = new Date(this.props.appointment.date);
    const formatDate = date.toDateString();
    return (
      <div className="card">
        <hr></hr>
        <hr></hr>
        <br></br>
        <h2>Appointment Details</h2>
        <div className="card-content">
          <br />
          <h5>
            <span>Date:</span> {formatDate}
            <br />
            <span>Time:{this.props.appointment.time}</span>
          </h5>
          <h5>
            <span>Visit Type:</span> {this.props.appointment.visitType}
          </h5>
          <h5>
            <span>Comments:</span> {this.props.appointment.comments}
          </h5>
          {/* <button onClick={() => this.deleteAppointments(appointment._id)}>
                          DELETE{" "}
                        </button> */}
        </div>
      </div>
    );
  }
}
export default ShowAppt;
