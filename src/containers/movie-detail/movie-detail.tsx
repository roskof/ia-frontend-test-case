import { useNavigate, useParams } from 'react-router'
import { useMovieDetailQueryById } from '@/services/movies-service'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { observer } from '@legendapp/state/react'
import { FormattedMessage } from 'react-intl'
import { RiArrowGoBackFill } from 'react-icons/ri'

export const MovieDetail = observer(() => {
  const { id } = useParams()
  const { data: movie } = useMovieDetailQueryById(id)
  const navigate = useNavigate()

  return (
    <div className="container mx-auto px-6 py-12">
      <Card className="bg-gray-800 shadow-lg rounded-lg">
        <CardContent>
          <div className="flex flex-col lg:flex-row gap-8">
            <div className="lg:w-1/3 pt-2">
              <img
                src={movie?.Poster}
                alt={`${movie?.Title} Poster`}
                className="w-full h-auto rounded-lg shadow-md"
              />
            </div>

            <div className="lg:w-2/3 flex flex-col">
              <CardHeader className="mb-6">
                <CardTitle className="text-3xl font-bold text-white mb-2">{movie?.Title}</CardTitle>
                <div className="flex items-center gap-4 text-sm text-gray-400">
                  <span>
                    <FormattedMessage id="app.movie.detail.imdbRating" />:{' '}
                    <span className="text-yellow-300 font-medium">
                      {movie?.imdbRating || 'N/A'}
                    </span>
                  </span>
                  <span>|</span>
                  <span>
                    <FormattedMessage id="app.movie.detail.runtime" />:{' '}
                    <span className="text-gray-300 font-medium">{movie?.Runtime || 'N/A'}</span>
                  </span>
                  <span>|</span>
                  <span>
                    <FormattedMessage id="app.movie.detail.released" />:{' '}
                    <span className="text-gray-300 font-medium">{movie?.Released || 'N/A'}</span>
                  </span>
                </div>
              </CardHeader>

              <p className="text-gray-400 mb-6">
                {movie?.Plot || <FormattedMessage id="app.movie.detail.noPlot" />}
              </p>

              <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-6 text-sm">
                {[
                  { label: 'app.movie.detail.type', value: movie?.Type },
                  { label: 'app.movie.detail.genre', value: movie?.Genre },
                  { label: 'app.movie.detail.director', value: movie?.Director },
                  { label: 'app.movie.detail.writer', value: movie?.Writer },
                  { label: 'app.movie.detail.actors', value: movie?.Actors },
                  { label: 'app.movie.detail.language', value: movie?.Language },
                  { label: 'app.movie.detail.country', value: movie?.Country }
                ].map(({ label, value }) => (
                  <div key={label}>
                    <span className="font-bold text-gray-300">
                      <FormattedMessage id={label} />:{' '}
                    </span>
                    <span className="text-gray-200">{value || 'N/A'}</span>
                  </div>
                ))}
              </div>

              <button
                type="button"
                className="bg-blue-600 hover:bg-blue-700 text-white font-medium px-6 py-2 rounded-md flex items-center gap-2 self-start"
                onClick={() => navigate(-1)}
              >
                <RiArrowGoBackFill />
                <FormattedMessage id="app.movie.detail.navigateBtn" />
              </button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
})
