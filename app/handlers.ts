const handlePageChange = (
	page: number,
	setCurrentPage: (page: number) => void
) => {
	setCurrentPage(page);
};

const handleSubmit = (
	e: React.FormEvent,
	navigate: (path: string) => void,
	searchTerm: string
) => {
	e.preventDefault();
	navigate(`/${searchTerm}`);
};

export { handlePageChange, handleSubmit };