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
import { PaginationComponentProps } from '~/types';
import { handleFirst, handleLast, handleNext, handlePrevious } from './paginationHandlers';

export const PaginationComponent = ({
	currentPage,
	totalPages,
	onPageChange,
}: PaginationComponentProps) => {

	const startPage = Math.max(1, currentPage - 1);
	const endPage = Math.min(totalPages, startPage + 3);

	return (
		<Pagination
			className='flex justify-center my-6'
			aria-label='Pagination'
		>
			<PaginationContent>
				<PaginationItem>
					<button
						onClick={() => handleFirst(onPageChange)}
						disabled={currentPage === 1}
						className='disabled:opacity-50'
					>
						&lt;&lt;
					</button>
				</PaginationItem>
				<PaginationItem>
					<PaginationPrevious
						href='#'
						onClick={() => handlePrevious(currentPage, onPageChange)}
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
							className='px-2 py-2 disabled:opacity-50 disabled:cursor-not-allowed'
						>
							{page}
						</PaginationLink>
					</PaginationItem>
				))}
				{endPage < totalPages && <PaginationEllipsis />}
				<PaginationItem>
					<PaginationNext
						href='#'
						onClick={() => handleNext(currentPage, totalPages, onPageChange)}
						className='flex items-center'
					/>
				</PaginationItem>
				<PaginationItem>
					<button
						onClick={() => handleLast(totalPages, onPageChange)}
						disabled={currentPage === totalPages}
						className='disabled:opacity-50 flex items-center'
					>
						&gt;&gt;
					</button>
				</PaginationItem>
			</PaginationContent>
		</Pagination>
	);
};
