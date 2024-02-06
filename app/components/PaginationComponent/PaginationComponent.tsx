// PaginationComponent.js
import {
	Pagination,
	PaginationContent,
	PaginationEllipsis,
	PaginationItem,
	PaginationLink,
	PaginationNext,
	PaginationPrevious,
} from '@/components/ui/pagination';

type PaginationComponentProps = {
	currentPage: number;
	totalPages: number;
	onPageChange: (page: number) => void;
};

export const PaginationComponent = ({
	currentPage,
	totalPages,
	onPageChange,
}: PaginationComponentProps) => {
	const handleFirst = () => {
		onPageChange(1);
	};

	const handlePrevious = () => {
		if (currentPage > 1) {
			onPageChange(currentPage - 1);
		}
	};

	const handleNext = () => {
		if (currentPage < totalPages) {
			onPageChange(currentPage + 1);
		}
	};

	const handleLast = () => {
		onPageChange(totalPages);
	};

	// Determine the range of page numbers to display (max 3)
	const startPage = Math.max(1, currentPage - 1);
	const endPage = Math.min(totalPages, startPage + 2);

	return (
		<Pagination className='flex justify-center my-6' aria-label='Pagination'>
			<PaginationContent>
				<PaginationItem>
					<button
						onClick={handleFirst}
						disabled={currentPage === 1}
						className='disabled:opacity-50'
					>
						First Page
					</button>
				</PaginationItem>
				<PaginationItem>
					<PaginationPrevious
						href='#'
						onClick={handlePrevious}
						className='flex items-center'
					/>
				</PaginationItem>
				{startPage > 1 && <PaginationEllipsis />}
				{Array.from(
					{ length: endPage - startPage + 1 },
					(_, i) => startPage + i
				).map((page) => (
					<PaginationItem key={page}>
						<PaginationLink
							href='#'
							onClick={() => onPageChange(page)}
							style={{
								fontWeight: page === currentPage ? 'bold' : 'normal',
								textDecoration: page === currentPage ? 'underline' : 'none',
							}}
						>
							{page}
						</PaginationLink>
					</PaginationItem>
				))}
				{endPage < totalPages && <PaginationEllipsis />}
				<PaginationItem>
					<PaginationNext
						href='#'
						onClick={handleNext}
						className='flex items-center'
					/>
				</PaginationItem>
				<PaginationItem>
					<button
						onClick={handleLast}
						disabled={currentPage === totalPages}
						className='disabled:opacity-50'
					>
						Last
					</button>
				</PaginationItem>
			</PaginationContent>
		</Pagination>
	);
};
