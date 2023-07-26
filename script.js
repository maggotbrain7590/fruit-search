const input = document.querySelector('#fruit');
const suggestions = document.querySelector('.suggestions ul');
const li = document.getElementsByTagName('li');

const fruit = ['Apple', 'Apricot', 'Avocado 🥑', 'Banana', 'Bilberry', 'Blackberry', 'Blackcurrant', 'Blueberry', 'Boysenberry', 'Currant', 'Cherry', 'Coconut', 'Cranberry', 'Cucumber', 'Custard apple', 'Damson', 'Date', 'Dragonfruit', 'Durian', 'Elderberry', 'Feijoa', 'Fig', 'Gooseberry', 'Grape', 'Raisin', 'Grapefruit', 'Guava', 'Honeyberry', 'Huckleberry', 'Jabuticaba', 'Jackfruit', 'Jambul', 'Juniper berry', 'Kiwifruit', 'Kumquat', 'Lemon', 'Lime', 'Loquat', 'Longan', 'Lychee', 'Mango', 'Mangosteen', 'Marionberry', 'Melon', 'Cantaloupe', 'Honeydew', 'Watermelon', 'Miracle fruit', 'Mulberry', 'Nectarine', 'Nance', 'Olive', 'Orange', 'Clementine', 'Mandarine', 'Tangerine', 'Papaya', 'Passionfruit', 'Peach', 'Pear', 'Persimmon', 'Plantain', 'Plum', 'Pineapple', 'Pomegranate', 'Pomelo', 'Quince', 'Raspberry', 'Salmonberry', 'Rambutan', 'Redcurrant', 'Salak', 'Satsuma', 'Soursop', 'Star fruit', 'Strawberry', 'Tamarillo', 'Tamarind', 'Yuzu'];

const search = (str) => {
	const results = str === '' ? [] : fruit.filter((fruit) => fruit.toLowerCase().includes(str));
	showSuggestions(results);
  };

const searchHandler = (e) => {
		const keyCode = [e.key].toString();
		keyCode === 'Backspace' && input.value === '' ? suggestions.innerHTML = '' : search(input.value.toLowerCase());
};

const showSuggestions = results => {
	suggestions.innerHTML = '';
	if (!li && input.value === '') {
		return;
	} results.forEach((fruit) => {
        const fruitItem = document.createElement('li');
		fruitItem.innerText = fruit;
		suggestions.appendChild(fruitItem);
	});
}

const useSuggestion = (e) => (input.value = e.target.innerText, suggestions.innerHTML = '');

input.addEventListener('keyup', searchHandler);
suggestions.addEventListener('click', useSuggestion);

