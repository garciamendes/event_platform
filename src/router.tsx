// React
import { Route, Routes } from 'react-router-dom'

// Local
import { Event } from './containers/Event'
import { Home } from './containers/home'

export function Router() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/event' element={<Event />} />
      <Route path='/event/lesson/:slug' element={<Event />} />
    </Routes>
  )
}