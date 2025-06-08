import { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"

const EventDetailsPage = () => {
  const {id} = useParams()

  const [event, setEvent] = useState({})

  const getEvents = async () => {
    const res = await fetch(`https://eventservices-cmbydhd0htc4gtak.swedencentral-01.azurewebsites.net/api/Events/${id}`)
  
    if (res.ok) {
      const response = await res.json()
      setEvent(response.result)
    }
  }

  useEffect(() => {
    getEvents()
  }, [])

  return (
    <div className="event-details">
      <h1>
        {event.title}
      </h1>
      <div className="">{event.eventDate} {event.location}</div>
      <div className="">{event.description}</div>
      <Link to ={`/events/booking/${id}`}>
        Boka Evanemang
      </Link>
      <Link to ={`/`}>
        Evanemang
      </Link>
    </div>
  )
}
export default EventDetailsPage