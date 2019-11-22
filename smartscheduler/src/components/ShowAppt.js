//This code is incomplete. We need to decide what we want the user to see. Recommendations: The show page is the complete record / details of what is shown on mouseover. It should contain all of the details of the appointment. Additional features could include options to print, show map of location with option of entering starting point, add to personal calendar (cal api link on how to do this was Slacked). Questions for consideration: should edit and delete be options too? View for patient and doctor should be different - for example, the doctor does not need a map.  

import React from "react";

class ShowAppt extends React.Component {
  render() {
    return (
      <>
        <div className="details">
          <h3>Appointment Details: </h3>
          <hr />
          <h4> {this.props.appointment.name} </h4>
          <h5>
            <span>time, date</span> {this.props.appointment.   }
          </h5>
          <h5>
            <span>Description:</span> {this.props.appointment.description}
          </h5>
        </div>
      </>
    );
  }
}
export default Show;
