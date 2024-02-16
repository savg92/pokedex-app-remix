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

	const handleAddRemoveToFavorites = (
		favorites: string[],
		pokemon: string,
		setFavorites: (arg0: string[]) => void,
		setIsFavorite: (arg0: boolean) => void
	) => {
		const updatedFavorites = favorites.includes(pokemon)
			? favorites.filter((fav) => fav !== pokemon)
			: [...favorites, pokemon];
		localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
		setFavorites(updatedFavorites);
		setIsFavorite(updatedFavorites.includes(pokemon));
	};

export { handlePageChange, handleSubmit, handleAddRemoveToFavorites };