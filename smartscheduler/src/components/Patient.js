//Notes:
//Patient Dashboard needs patient name and details at top. States have fields but other code needs to be written to display them.
//nav bar on left
//add box with "No Appointments Scheduled" & Button below that stating "Schedule Appointment"
import React, { Component } from "react";
import jwt_decode from "jwt-decode";
import "../App2.css";
import axios from "axios";
import NewAppt from "./NewAppt.js";
import ShowAppt from "./ShowAppt.js";
import UpdateAppt from "./UpdateAppt.js";
import Sidebar from "./Sidebar.js";
import OfficeInfo from "./OfficeInfo.js";
import Map from "./Map.js";

// import CurrentAppointments from ".CurrentAppointments.js";

let baseURL = process.env.REACT_APP_BASEURL;

if (process.env.NODE_ENV === "development") {
  baseURL = "http://localhost:3003";
} else {
  baseURL = "heroku or other backend url here";
}

class Patient extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: "",
      lastName: "",
      dob: "",
      email: "",
      user: {},
      phone: "",
      comments: "",
      visitType: "",
      time: "",
      appointments: [],
      appointment: {},
      selectedAppointment: {},
      loggedInUser: "",
      editButton: false
    };
    this.logOut = this.logOut.bind(this);
    this.getAppointments = this.getAppointments.bind(this);
    this.deleteAppointments = this.deleteAppointments.bind(this);
    this.toggleVisited = this.toggleVisited.bind(this);
    this.editAppointments = this.editAppointments.bind(this);
  }

  componentDidMount() {
    this.getAppointments();
    const token = localStorage.usertoken;
    const decoded = jwt_decode(token);
    this.setState({
      firstName: decoded.firstName,
      lastName: decoded.lastName,
      dob: decoded.dob,
      email: decoded.email,
      password: decoded.password
    });
    console.log(this.state);
  }
  logOut(e) {
    e.preventDefault();
    localStorage.removeItem("usertoken");
    this.props.history.push(`/auth`);
  }

  async testLogin() {
    const response = await axios.post(`${baseURL}/session`, {
      username: "",
      password: "",
      category: ""
    });
    const user = response.data;

    this.setState({ loggedInUser: user });
  }

  async getAppointments() {
    const response = await axios(`${baseURL}/appointment`);
    const appointments = response.data;

    this.setState({ appointments: appointments });
  }

  async editAppointments(clickedAppointment) {
    console.log("Clicked Edit Button");
    await this.setState({
      editButton: !this.state.editButton,
      selectedAppointment: clickedAppointment
    });
    console.log("Current Appointment: ", this.state.selectedAppointment);
  }

  async getPatients() {}
  async deleteAppointments(id) {
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

  //note: may not be needed as written - TBD
  async toggleVisited(selectedAppointment, selectedAppointmentId) {
    console.log(selectedAppointment);
    const updatedAppointments = this.state.appointments.map(appointment => {
      if (appointment._id === selectedAppointmentId) {
        const updatedAppointment = {
          ...selectedAppointment,
          visited: !selectedAppointment.visited
        };
        return updatedAppointment;
      } else {
        return appointment;
      }
    });
    this.setState({
      appointments: updatedAppointments
    });
  }

  render() {
    const showUpdateAppt = this.state.editButton ? (
      <UpdateAppt
        appointment={this.state.selectedAppointment}
        getAppointments={this.getAppointments}
      />
    ) : null;
    return (
      <div>
        <div className="dashboard-header">
          <span className="banner">mediCal</span>
          <button className="logout" onClick={this.logOut}>
            Logout
          </button>
        </div>
        <div className="container">
          <div className="container-sidebar">
            <Sidebar />
          </div>
          <div className="container-mainContent">
            <h2>Schedule An Appointment {this.state.firstName} </h2>
            <NewAppt getAppointments={this.getAppointments} baseURL={baseURL} />
            <h2>Current Appointments</h2>

            <div className="card-content">
              <table className="table">
                <tbody>
                  {this.state.appointments.map(appointment => {
                    const date = new Date(appointment.date);
                    const formatDate = date.toDateString();
                    return (
                      <tr
                        className="bordered"
                        onMouseOver={() => this.getAppointment(appointment)}
                        key={appointment._id}
                      >
                        <td>
                          <a href={appointment} target="_blank">
                            {formatDate}
                          </a>
                        </td>
                        <td>{appointment.time}</td>
                        {/* note: toggle may not be needed as written - TBD */}
                        {
                          /* <td
                        className={ appointment.visited ? "visited" : null}
                        onDoubleClick={() =>
                          this.toggleVisited(appointment, appointment._id) }>
                        {" "}
                        {appointment.url}
                      </td>*/
                          <td>
                            <button
                              className="patient-button"
                              onClick={() => this.editAppointments(appointment)}
                            >
                              Edit
                            </button>
                          </td>
                        }
                        <td>
                          {" "}
                          <button
                            className="patient-button"
                            onClick={() =>
                              this.deleteAppointments(appointment._id)
                            }
                          >
                            Delete{" "}
                          </button>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
            <div> {showUpdateAppt} </div>
            <br />
            <br />
            <br />
            {this.state.appointment && (
              <ShowAppt appointment={this.state.appointment} />
            )}
          </div>
          {/* <div className="container-office-info"> */}
          <div className="container-officeHours">
            <OfficeInfo />
            <Map />
          </div>
          {/* </div> */}
        </div>
      </div>
    );
  }
}

export default Patient;
