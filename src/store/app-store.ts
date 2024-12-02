import { observable } from '@legendapp/state'
import { MovieType } from '@/types/movies'

export const filterState$ = observable({
  s: 'Pokemon',
  type: '' as MovieType,
  y: '',
  page: 1
})
