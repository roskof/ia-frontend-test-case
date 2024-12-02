import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { MoviesSearchResponseType } from '@/types/movies'
import { Link } from 'react-router'
import { FaStar } from 'react-icons/fa6'
import { MdOutlineDateRange } from 'react-icons/md'

export const MovieGrid = ({ data }: { data?: MoviesSearchResponseType }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {data?.Search?.map((movie) => (
        <Link to={`/${movie.imdbID}`} key={movie.imdbID}>
          <Card
            key={movie.imdbID}
            className="bg-gray-800 hover:bg-gray-700 transition-all duration-300 shadow-md h-full relative overflow-hidden rounded-lg"
          >
            <CardHeader className="relative p-0">
              <img
                src={movie.Poster !== 'N/A' ? movie.Poster : '/placeholder.png'}
                alt={`${movie.Title} Poster`}
                className="w-full h-56 object-cover rounded-t-lg"
              />

              <div className="absolute top-3 left-3 bg-black bg-opacity-50 px-2 py-1 rounded-lg flex items-center gap-1 text-yellow-300 text-sm font-semibold">
                <FaStar className="text-yellow-300" />
              </div>
            </CardHeader>

            <CardContent className="p-4">
              <CardTitle className="text-lg font-bold text-gray-200 truncate">
                {movie.Title}
              </CardTitle>
              <p className="text-gray-400 text-sm flex items-center gap-1 mt-1">
                <MdOutlineDateRange className="text-blue-400" />
                {movie.Year}
              </p>
            </CardContent>

            <CardFooter className="p-4 border-t border-gray-700 flex justify-between items-center">
              <span className="text-xs text-gray-500">IMDb ID: {movie.imdbID}</span>
              <button type="button" className="text-blue-500 font-semibold hover:underline">
                View Details
              </button>
            </CardFooter>
          </Card>
        </Link>
      ))}
    </div>
  )
}
