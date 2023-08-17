// Write your code here
import {Component} from 'react'

import AppointmentItem from '../AppointmentItem'

import './index.css'

class Appointments extends Component {
  onAddAppointment = event => {
    event.preventDefault()
  }

  render() {
    return (
      <div className="container">
        <div className="card">
          <h1 className="head">Add Appointment</h1>
          <div className="body">
            <form className="formelements" onSubmit={this.onAddAppointment}>
              <label className="labelele" htmlFor="title">
                TITLE
              </label>
              <input
                type="text"
                placeholder="Title"
                id="title"
                className="textinput"
              />
              <label className="labelele" htmlFor="date">
                DATE
              </label>
              <input
                type="date"
                placeholder="dd/mm/yy"
                id="date"
                className="dateinput"
              />
              <button className="addbutt" type="button">
                Add
              </button>
            </form>
            <img
              src="https://assets.ccbp.in/frontend/react-js/appointments-app/appointments-img.png"
              alt="appointments"
              className="appointmentimg"
            />
          </div>
          <hr className="line" />
          <div className="appointmentssection">
            <h1 className="apphead">Appointments</h1>
            <button className="starredbutton" type="button">
              Starred
            </button>
          </div>
          <ul className="applistcontainer">
            <AppointmentItem />
          </ul>
        </div>
      </div>
    )
  }
}

export default Appointments
