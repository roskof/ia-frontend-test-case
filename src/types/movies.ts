export const MovieTypes = {
  movie: 'Movie',
  series: 'Series',
  episode: 'Episode'
} as const

export type MovieType = keyof typeof MovieTypes

export type TMovie = {
  imdbID: string
  Title: string
  Year: string
  Type: MovieType
  Poster: string
}

export type TMovieDetailed = {
  Rated: string
  Released: string
  Runtime: string
  Genre: string
  Director: string
  Writer: string
  Actors: string
  Plot: string
  Language: string
  Country: string
  Awards: string
  Ratings: MovieRating[]
  Metascore: string
  imdbRating: string
  imdbVotes: string
  DVD: string
  BoxOffice: string
  Production: string
  Website: string
  Response: string
} & TMovie

export interface MovieRating {
  Source: string
  Value: string
}

export type MoviesQueryParameters = {
  s?: string // Search
  page?: number // Page
  t?: string // Title
  type?: MovieType // Type
  y?: string // Year
}

export type MoviesSearchResponseType = {
  Search: TMovie[]
  totalResults: string
}

export type MoviesSearchErrorType = {
  Response: string
  Error: string
}
