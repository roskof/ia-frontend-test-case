import { useMovieQueryWithFilter } from '@/services/movies-service'
import { MovieGrid } from './movie-grid'
import { MovieTable } from './movie-table'
import { observer, Reactive, useObservable } from '@legendapp/state/react'
import { FormattedMessage, useIntl } from 'react-intl'
import { filterState$ } from '@/store/app-store'
import { MoviePagination } from './movie-pagination'
import { FaThLarge, FaTable } from 'react-icons/fa'

export const MoviesList = observer(() => {
  const { data } = useMovieQueryWithFilter(filterState$.get())
  const viewMode$ = useObservable('grid')

  return (
    <>
      <h1 className="text-3xl font-bold text-center mb-8 text-gray-400">
        <FormattedMessage id="app.movie.title" />
      </h1>

      <div className="flex justify-center items-center gap-4 mb-8">
        <Reactive.input
          type="text"
          placeholder={useIntl().formatMessage({ id: 'app.movie.search' })}
          className="bg-gray-600 text-white px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 w-1/3"
          $value={filterState$.s}
        />
        <Reactive.input
          type="text"
          placeholder={useIntl().formatMessage({ id: 'app.year.search' })}
          className="bg-gray-600 text-white px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 w-1/6"
          $value={filterState$.y}
        />
        <Reactive.select
          $value={filterState$.type}
          className="bg-gray-600 text-white px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="movie">
            <FormattedMessage id="app.movie" />
          </option>
          <option value="series">
            <FormattedMessage id="app.series" />
          </option>
          <option value="episode">
            <FormattedMessage id="app.episode" />
          </option>
        </Reactive.select>
      </div>

      <div className="flex justify-end items-center gap-4 mb-4">
        <button
          type="button"
          onClick={() => viewMode$.set('grid')}
          className={`p-2 rounded ${
            viewMode$.get() === 'grid'
              ? 'bg-gray-600 text-gray-400'
              : 'bg-gray-800 text-gray-400 hover:bg-gray-700'
          }`}
        >
          <FaThLarge className="text-l" />
        </button>
        <button
          type="button"
          onClick={() => viewMode$.set('table')}
          className={`p-2 rounded ${
            viewMode$.get() === 'table'
              ? 'bg-gray-600 text-gray-400'
              : 'bg-gray-800 text-gray-400 hover:bg-gray-700'
          }`}
        >
          <FaTable className="text-l" />
        </button>
      </div>

      {viewMode$.get() === 'grid' ? <MovieGrid data={data} /> : <MovieTable data={data} />}

      <MoviePagination
        currentPage={filterState$.page.get()}
        totalResults={data?.totalResults ?? ''}
        onPageChange={(page) => filterState$.page.set(page)}
      />
    </>
  )
})
