import { useEffect, useState } from "react"
import EventItem from "../components/EventItem"

const EventList = () => {
 
  const [events, setEvents] = useState([])

  const getEvents = async () => {
    const res = await fetch("https://eventservices-cmbydhd0htc4gtak.swedencentral-01.azurewebsites.net/api/Events")
  
    if (res.ok) {
      const response = await res.json()
      setEvents(response.result)
    }
  }

  useEffect(() => {
    getEvents()
  }, [])

  return (
    <section id="events-id">
      {
        events.map(event => (<EventItem key={event.id} item={event} />))
      }
    </section>
  )
}
export default EventList