// Write your code here
import './index.css'

const AppointmentItem = props => {
  const {appointmentDetails} = props
  const {title, date, isStarred} = appointmentDetails
  const imgUrl = isStarred
    ? 'https://assets.ccbp.in/frontend/react-js/appointments-app/filled-star-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/appointments-app/star-img.png'
  return (
    <li className="appointmentlistitem">
      <div className="first">
        <h1 className="title">{title}</h1>
        <button className="butt" type="button" data-testid="star">
          <img src={imgUrl} alt="star" className="star" />
        </button>
      </div>
      <p className="date">Date: {date}</p>
    </li>
  )
}

export default AppointmentItem
