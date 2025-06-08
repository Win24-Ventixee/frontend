import { Link } from "react-router-dom"

const EventItem = ({item}) => {
  return (
    <div className="event-card">
      <div className="title">{item.title}</div>
      <div className="date-loc-desc">{item.eventDate} {item.location}</div>
      <div className="date-loc-desc">{item.description}</div>
      <Link to={`/events/${item.id}`}>
        <div>Evanemangsdetaljer</div>
      </Link>
   </div>
  )
}
export default EventItem