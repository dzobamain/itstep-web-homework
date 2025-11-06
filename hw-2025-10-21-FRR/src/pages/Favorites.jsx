import React from 'react'
import { useSelector } from 'react-redux'
import EventList from '../components/EventList'

export default function Favorites() {
  const favs = useSelector(s => s.favorites.items)
  const events = useSelector(s => s.events.list.filter(e => favs.includes(e.id)))

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Favorite</h1>
      <EventList events={events} />
    </div>
  )
}
