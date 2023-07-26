const input = document.querySelector('#fruit');
const suggestions = document.querySelector('.suggestions ul');

const fruit = ['Apple', 'Apricot', 'Avocado 🥑', 'Banana', 'Bilberry', 'Blackberry', 'Blackcurrant', 'Blueberry', 'Boysenberry', 'Currant', 'Cherry', 'Coconut', 'Cranberry', 'Cucumber', 'Custard apple', 'Damson', 'Date', 'Dragonfruit', 'Durian', 'Elderberry', 'Feijoa', 'Fig', 'Gooseberry', 'Grape', 'Raisin', 'Grapefruit', 'Guava', 'Honeyberry', 'Huckleberry', 'Jabuticaba', 'Jackfruit', 'Jambul', 'Juniper berry', 'Kiwifruit', 'Kumquat', 'Lemon', 'Lime', 'Loquat', 'Longan', 'Lychee', 'Mango', 'Mangosteen', 'Marionberry', 'Melon', 'Cantaloupe', 'Honeydew', 'Watermelon', 'Miracle fruit', 'Mulberry', 'Nectarine', 'Nance', 'Olive', 'Orange', 'Clementine', 'Mandarine', 'Tangerine', 'Papaya', 'Passionfruit', 'Peach', 'Pear', 'Persimmon', 'Plantain', 'Plum', 'Pineapple', 'Pomegranate', 'Pomelo', 'Quince', 'Raspberry', 'Salmonberry', 'Rambutan', 'Redcurrant', 'Salak', 'Satsuma', 'Soursop', 'Star fruit', 'Strawberry', 'Tamarillo', 'Tamarind', 'Yuzu'];

// Revisit
function search(str) {
	let results = [];
	let inputVal = str.toLowerCase();
	if (str === '') {
		return;
    } else {
	    results = fruit.filter(function(fruit){
		return fruit.toLowerCase().includes(inputVal)
	    });
    console.log(results);
	showSuggestions(results);
    }
}

//Results gets updated twice when pressing shift for capital letter
function searchHandler(e) {
	search(input.value);
}

// shows suggestions in dropdown based on keystrokes
// need option to remove li if removing letters

// OG code: function showSuggestions(results, inputVal)
const li = document.getElementsByTagName('li');
function showSuggestions(results) {
	if (!li) {
	  results.forEach(function(fruit){
	  const li= document.createElement('li');
	  li.innerText = fruit;
	  suggestions.appendChild(li);
	  const fruitSuggestions = document.querySelectorAll('li');
	  });
    } else {
        suggestions.innerHTML = '';
		results.forEach(function(fruit){
			const fruitItem = document.createElement('li');
			fruitItem.innerText = fruit;
			suggestions.appendChild(fruitItem);
			});
	}
}

function useSuggestion(e) {
	// handles click on suggestion
}

input.addEventListener('keyup', searchHandler);
suggestions.addEventListener('click', useSuggestion);

