import React from 'react'
import './App.css'
import { Routes, Route, Link } from 'react-router-dom'
import Home from './pages/Home'
import EventDetails from './pages/EventDetails'
import Favorites from './pages/Favorites'

export default function App() {
  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-5xl mx-auto">
        <nav className="flex items-center gap-6 mb-8">
          <Link to="/" className="text-sm text-gray-600">Events</Link>
          <Link to="/favorites" className="text-sm text-gray-600"> Favorites</Link>
        </nav>


        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/event/:id" element={<EventDetails />} />
          <Route path="/favorites" element={<Favorites />} />
        </Routes>
      </div>
    </div>
  )
}
