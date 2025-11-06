import React, { useMemo, useState } from 'react'
import { useSelector } from 'react-redux'
import EventList from '../components/EventList'

export default function Home() {
  const events = useSelector(s => s.events.list)
  const [category, setCategory] = useState('Усі')

  const categories = useMemo(() => {
    const cats = Array.from(new Set(events.map(e => e.category)))
    return ['Усі', ...cats]
  }, [events])

  const filtered = category === 'Усі'
    ? events
    : events.filter(e => e.category === category)

  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">Event city</h1>

      <div className="mb-6 flex gap-2 flex-wrap">
        {categories.map(cat => (
          <button
            key={cat}
            onClick={() => setCategory(cat)}
            className={`px-3 py-1 rounded ${cat === category ? 'bg-black text-white' : 'border'}`}
          >
            {cat}
          </button>
        ))}
      </div>

      <EventList events={filtered} />
    </div>
  )
}
