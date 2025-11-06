import React from 'react'
import EventCard from './EventCard'

export default function EventList({ events }) {
  if (!events || events.length === 0)
    return <div>Подій не знайдено.</div>

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {events.map(ev => <EventCard key={ev.id} event={ev} />)}
    </div>
  )
}
