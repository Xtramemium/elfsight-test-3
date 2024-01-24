import { getRandomPage } from './getRandomPage';

export const DEFAULTURL = 'https://rickandmortyapi.com/api/character/';

export const defaultReq = {
	getCharacters: async () => {
		try {
			const response = await fetch(DEFAULTURL);
			const data = await response.json();
			const pagesCount = data.info.pages
			const randomSinglePage = getRandomPage(pagesCount)
			const pagesRes = await fetch(`${DEFAULTURL}?page=${randomSinglePage}`)
			const charsPageData = await pagesRes.json()
			const charsData = charsPageData.results
			return charsData
		} catch (error) {
			console.error('Error fetching characters:', error);
			throw error;
		}
	},
};


