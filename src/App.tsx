import { DefaultLayout } from './containers/layout/default-layout'
import { Routes, Route } from 'react-router'
import { MoviesList } from './containers/movies-list/movies'
import { MovieDetail } from './containers/movie-detail/movie-detail'

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route index element={<MoviesList />} />
        <Route path="/:id" element={<MovieDetail />} />
      </Route>
    </Routes>
  )
}

export default App
