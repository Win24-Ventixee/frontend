import { Route, Routes } from 'react-router-dom'
import './App.css'
import EventPage from './assets/pages/EventPage'
import EventDetailsPage from './assets/pages/EventDetailsPage'
import BookingEventPage from './assets/pages/BookingEventPage'
import CenterLayout from './assets/layouts/CenterLayout'
import PortalLayout from './assets/layouts/PortalLayout'

function App() {

  return (
    <>
      <Routes>
        <Route element={<PortalLayout />}>
          <Route path="/" element={<EventPage />} />
        </Route>

        <Route element={<CenterLayout />}>
          <Route path="/events/:id" element={<EventDetailsPage/>} />
          <Route path="/events/booking/:id" element={<BookingEventPage />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
