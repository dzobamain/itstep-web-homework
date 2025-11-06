import React from 'react'
import { useParams, Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { addFavorite, removeFavorite } from '../features/favoritesSlice'

export default function EventDetails() {
  const { id } = useParams()
  const event = useSelector(s => s.events.list.find(e => e.id === id))
  const favs = useSelector(s => s.favorites.items)
  const dispatch = useDispatch()

  if (!event)
    return <div>Event not found. <Link to="/">Back</Link></div>

  const isFav = favs.includes(event.id)

  return (
    <div className="max-w-3xl">
      <Link to="/" className="text-sm text-blue-600">To list</Link>

      <h2 className="text-2xl font-bold mt-4">{event.title}</h2>
      <div className="mt-2 text-gray-700">
        {event.category} • {event.date} • {event.time}
      </div>

      <div className="mt-4"><strong>Local:</strong> {event.venue}</div>
      <div className="mt-2"><strong>Price:</strong> {event.price}</div>

      <p className="mt-4">{event.description}</p>

      <button
        onClick={() => isFav ? dispatch(removeFavorite(event.id)) : dispatch(addFavorite(event.id))}
        className="px-4 py-2 border rounded mt-6"
      >
        {isFav ? 'Remove' : 'Add'}
      </button>
    </div>
  )
}
