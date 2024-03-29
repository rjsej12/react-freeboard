export const getDate = (value: any) => {
	const date = new Date(value);
	const yyyy = date.getFullYear();
	const mm = String(date.getMonth() + 1).padStart(2, '0');
	const dd = String(date.getDate()).padStart(2, '0');
	return `${yyyy}-${mm}-${dd}`;
};

export const splitTextWithKeyword = (text: string, keyword: string) => {
	const splitKey = '@#$%^';
	return text.replaceAll(keyword, `${splitKey}${keyword}${splitKey}`).split(splitKey);
};
