import { DataTable } from '@/components/ui/data-table'
import { columns } from './columns'
import { MoviesSearchResponseType } from '@/types/movies'

export const MovieTable = ({ data }: { data?: MoviesSearchResponseType }) => {
  return (
    <>
      <DataTable columns={columns} data={data?.Search ?? []} />
    </>
  )
}
