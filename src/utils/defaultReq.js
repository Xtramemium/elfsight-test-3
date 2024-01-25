import { BASEURL } from '../Constants';

export const defaultReq = {
	getCharacters: async (page = 1) => {
		try {
			const response = await fetch(`${BASEURL}?page=${page}`);
			const data = await response.json();
			const charsData = data.results;
			return charsData;
		} catch (error) {
			console.error('Ошибка запроса персонажей:', error);
			throw error;
		}
	},

	getInfo: async () => {
		try {
			const response = await fetch(BASEURL);
			const data = await response.json();
			const infoData = {
				count: data.info.count,
				pages: data.info.pages,
				next: data.info.next,
				prev: data.info.prev
			};
			return infoData;
		} catch (error) {
			console.error('Ошибка запроса информации:', error);
			throw error;
		}
	}
};
