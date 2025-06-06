import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"

const BookingEventPage = () => {
  const navigate = useNavigate()
  const { id } = useParams()
  const [event, setEvent] = useState({})
  const [formData, setFormData] = useState({ 
    eventId: id, 
    firstName: '', 
    lastName: '', 
    email: '', 
    streetName: '', 
    postalCode: '', 
    city: '',
    ticketQuantity: 1
  })

  useEffect(() => {
    getEvents()
  }, [])

  const getEvents = async () => {
    try {
      const res = await fetch(`https://eventservices-cmbydhd0htc4gtak.swedencentral-01.azurewebsites.net/api/Events/${id}`)
      if (!res.ok) throw new Error("Failed to fetch event")

      const response = await res.json()
      setEvent(response.result)
    }
    catch (err) {
      console.error(err)
    }
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value}))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
  
    try {
    const res = await fetch(`https://bookingservicee-e3eyadf3bhetf6g0.swedencentral-01.azurewebsites.net/api/bookings`, {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(formData)
    })

    if (!res.ok) {
      console.error("Booking failed")
      alert("Booking failed")
    }
    else {
      alert("Booking success")
      console.log("Booking successful")
      navigate('/')
    }
    }
    catch (err) {
      console.error("Error submitting booking", err)
    }
  }


  return (
    <div className="bookings">
      <h1>Book Event - {event.title}</h1>
      <div className="formz">
        <form className="form" onSubmit={handleSubmit} noValidate>
          <div className="label">
            <label>First Name: </label>
            <input type="text" name="firstName" value={formData.firstName} onChange={handleChange} required />
          </div>
          <div className="label">
            <label>Last Name: </label>
            <input type="text" name="lastName" value={formData.lastName} onChange={handleChange} required/>
          </div>
          <div className="label">
            <label>E-mail: </label>
            <input type="email" name="email" value={formData.email} onChange={handleChange} required/>
          </div>
          <div className="label">
            <label>Street Name: </label>
            <input type="text" name="streetName" value={formData.streetName} onChange={handleChange} required />
          </div>
          <div className="label">
            <label>Postal Code: </label>
            <input type="text" name="postalCode" value={formData.postalCode} onChange={handleChange} required />
          </div>
          <div className="label">
            <label>City: </label>
            <input type="text" name="city" value={formData.city} onChange={handleChange} required/>
          </div>
          <button type="submit">Book Now</button>
        </form>
      </div>
    </div>
  )
}
export default BookingEventPage