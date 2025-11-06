import { createSlice } from '@reduxjs/toolkit'
import data from '../data/events'

const eventsSlice = createSlice({
  name: 'events',
  initialState: {
    list: data
  },
  reducers: {}
})

export default eventsSlice.reducer
