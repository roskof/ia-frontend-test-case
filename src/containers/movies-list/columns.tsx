import { ColumnDef } from '@tanstack/react-table'
import { TMovie } from '@/types/movies'
import { FormattedMessage } from 'react-intl'

export const columns: ColumnDef<TMovie>[] = [
  {
    accessorKey: 'Poster',
    header: () => <FormattedMessage id="app.poster" />,
    cell: ({ row }) => {
      return (
        <img src={row.getValue('Poster')} alt={row.getValue('Title')} className="w-12 h-auto" />
      )
    }
  },
  {
    accessorKey: 'Title',
    header: () => <FormattedMessage id="app.title" />
  },
  {
    accessorKey: 'Type',
    header: () => <FormattedMessage id="app.type" />
  },
  {
    accessorKey: 'Year',
    header: () => <FormattedMessage id="app.year" />
  },
  {
    accessorKey: 'imdbID',
    header: () => <FormattedMessage id="app.imdbId" />
  }
]
