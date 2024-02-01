import {
	Pagination,
	PaginationContent,
	PaginationEllipsis,
	PaginationItem,
	PaginationLink,
	PaginationNext,
	PaginationPrevious,
} from '@/components/ui/pagination';
import { useState } from 'react';

type PaginationProps = {
    dataLength: number;
    itemsPerPage: number;
	page?: (page: number) => void;
};

const PaginationComponent = ({ dataLength, itemsPerPage, page }: PaginationProps) => {
	const [currentPage, setCurrentPage] = useState(1);
	const totalPages = Math.ceil(dataLength / itemsPerPage);
	const handlePageChange = (page: number) => {
		setCurrentPage(page);
	};

	if (totalPages === 1) {
		return null;
	}

	return (
		<>
			<Pagination>
				<PaginationContent>
					<PaginationItem>
						<PaginationPrevious
							href='#'
							onClick={() => handlePageChange(currentPage - 1)}
							// disabled={currentPage === 1}
						/>
					</PaginationItem>
					{Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
						<PaginationItem key={page}>
							<PaginationLink
								href='#'
								onClick={() => handlePageChange(page)}
							>
								{page}
							</PaginationLink>
						</PaginationItem>
					))}
					<PaginationItem>
						<PaginationNext
							href='#'
							onClick={() => handlePageChange(currentPage + 1)}
							// disabled={currentPage === totalPages}
						/>
					</PaginationItem>
				</PaginationContent>
			</Pagination>
		</>
	);
};

export default PaginationComponent;
