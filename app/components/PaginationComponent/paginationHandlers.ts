const handleFirst = (onPageChange: (page: number) => void) => {
	onPageChange(1);
};

const handlePrevious = (
	currentPage: number,
	onPageChange: (page: number) => void
) => {
	if (currentPage > 1) {
		onPageChange(currentPage - 1);
	}
};

const handleNext = (
	currentPage: number,
	totalPages: number,
	onPageChange: (page: number) => void
) => {
	if (currentPage < totalPages) {
		onPageChange(currentPage + 1);
	}
};

const handleLast = (
	totalPages: number,
	onPageChange: (page: number) => void
) => {
	onPageChange(totalPages);
};

export { handleFirst, handlePrevious, handleNext, handleLast };