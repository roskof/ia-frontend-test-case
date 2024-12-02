import { AxiosPromise } from 'axios'
import { useQuery } from '@tanstack/react-query'
import { MoviesQueryParameters, MoviesSearchResponseType, TMovieDetailed } from '@/types/movies'
import { useErrorBoundary } from 'react-error-boundary'
import { axiosInstance } from '@/utils/app-utils'

export const getMovieDetailById = async ({
  queryKey
}: {
  queryKey: any
}): AxiosPromise<TMovieDetailed> => {
  try {
    return await axiosInstance.get('/', {
      params: {
        i: queryKey[1]
      }
    })
  } catch (error) {
    const { showBoundary } = useErrorBoundary()

    return Promise.reject(error).finally(() => showBoundary(error))
  }
}

export const getMoviesWithFilter = async ({
  queryKey
}: {
  queryKey: any
}): AxiosPromise<MoviesSearchResponseType> => {
  try {
    const filteredQuery = queryKey[1]

    return await axiosInstance.get('/', {
      params: filteredQuery
    })
  } catch (error) {
    const { showBoundary } = useErrorBoundary()

    return Promise.reject(error).finally(() => showBoundary(error))
  }
}

export const useMovieQueryWithFilter = (query: MoviesQueryParameters) => {
  return useQuery({
    queryKey: ['movies', query],
    queryFn: getMoviesWithFilter,
    select: (data) => data.data
  })
}

export const useMovieDetailQueryById = (id: string | undefined) => {
  return useQuery({
    queryKey: ['movie-detail', id],
    queryFn: getMovieDetailById,
    select: (data) => data.data
  })
}
