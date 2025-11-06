import React from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { addFavorite, removeFavorite } from '../features/favoritesSlice'

export default function EventCard({ event }) {
  const dispatch = useDispatch()
  const favs = useSelector(s => s.favorites.items)
  const isFav = favs.includes(event.id)

  const toggleFav = (e) => {
    e.preventDefault()
    isFav ? dispatch(removeFavorite(event.id)) : dispatch(addFavorite(event.id))
  }

  return (
    <Link
      to={`/event/${event.id}`}
      className="block border rounded-lg p-4 hover:shadow"
    >
      <div className="flex justify-between items-start">
        <div>
          <h3 className="text-lg font-semibold">{event.title}</h3>
          <p className="text-sm text-gray-600">
            {event.category} • {event.date} {event.time}
          </p>
          <p className="mt-2 text-sm">{event.venue}</p>
        </div>

        <div className="flex flex-col items-end">
          <button
            onClick={toggleFav}
            className="mb-2 px-3 py-1 border rounded"
          >
            {isFav ? 'В обраних' : 'Додати'}
          </button>
          <div className="text-sm">{event.price}</div>
        </div>
      </div>
    </Link>
  )
}
