import { configureStore } from '@reduxjs/toolkit'
import favoritesReducer from './features/favoritesSlice'
import eventsReducer from './features/eventsSlice'

const store = configureStore({
  reducer: {
    favorites: favoritesReducer,
    events: eventsReducer
  }
})

export default store
