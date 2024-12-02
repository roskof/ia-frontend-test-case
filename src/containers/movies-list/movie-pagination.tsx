import { Button } from '@/components/ui/button'
import { ChevronLeft, ChevronRight } from 'lucide-react'

type MoviePaginationProps = {
  currentPage: number
  totalResults: string
  onPageChange: (page: number) => void
}

export const MoviePagination = ({
  currentPage,
  totalResults,
  onPageChange
}: MoviePaginationProps) => {
  const resultsPerPage = 10
  const totalPages = Math.ceil(parseInt(totalResults) / resultsPerPage)

  const handlePageChange = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      onPageChange(page)
    }
  }

  const generatePageNumbers = () => {
    const visiblePages = 5
    const half = Math.floor(visiblePages / 2)
    const start = Math.max(currentPage - half, 1)
    const end = Math.min(start + visiblePages - 1, totalPages)

    const pages = []
    for (let i = start; i <= end; i++) {
      pages.push(i)
    }
    return pages
  }

  const pageNumbers = generatePageNumbers()

  return (
    <div className="flex justify-center items-center gap-4 mt-4">
      <Button
        className="bg-slate-600 hover:bg-slate-700 rounded-lg text-white font-medium"
        disabled={currentPage === 1}
        onClick={() => handlePageChange(1)}
      >
        First
      </Button>

      <Button
        className="bg-slate-600 hover:bg-slate-700 rounded-lg text-white font-medium"
        disabled={currentPage === 1}
        onClick={() => handlePageChange(currentPage - 1)}
      >
        <ChevronLeft className="h-4 w-4" />
        Prev
      </Button>

      <div className="flex items-center space-x-2">
        {pageNumbers.map((page) => (
          <Button
            key={page}
            className="bg-slate-600 hover:bg-slate-700 rounded-lg text-white font-medium"
            disabled={currentPage === page}
            onClick={() => handlePageChange(page)}
          >
            {page}
          </Button>
        ))}
        {currentPage + Math.floor(5 / 2) < totalPages && <span className="text-gray-600">...</span>}
      </div>

      <Button
        className="bg-slate-600 hover:bg-slate-700 rounded-lg text-white font-medium"
        disabled={currentPage === totalPages}
        onClick={() => handlePageChange(currentPage + 1)}
      >
        Next
        <ChevronRight className="h-4 w-4" />
      </Button>

      <Button
        className="bg-slate-600 hover:bg-slate-700 rounded-lg text-white font-medium"
        disabled={currentPage === totalPages}
        onClick={() => handlePageChange(totalPages)}
      >
        Last
      </Button>
    </div>
  )
}
