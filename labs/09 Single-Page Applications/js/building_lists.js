/* ORIGINAL CODE
var request = new XMLHttpRequest();
request.open('GET', 'data/books.json', false);
request.send(null);
var data = JSON.parse(request.responseText);
console.log(data);

var books = data.books;

var list = document.createElement('ol');
for (var i=0; i < books.length; i++) {
	console.log(books[i].title);
	var item = document.createElement('li');
	item.innerHTML = books[i].title + ", " + books[i].year;
	list.appendChild(item);
}
document.body.appendChild(list);
*/

var request = new XMLHttpRequest();
request.open('GET', 'data/books.json', false);
request.send(null);
var data = JSON.parse(request.responseText);
console.log(data);

var books = data.books;

var list = document.createElement('table');
var tr = document.createElement('tr');

list.appendChild(tr);

for (var i=0; i < books.length; i++) {
	var item2 = document.createElement('th');
	item2.innerHTML = "Heading " + i;
	tr.appendChild(item2);
}

var tr = document.createElement('tr');

list.appendChild(tr);

for (var i=0; i < books.length; i++) {
	console.log(books[i].title);
	var item = document.createElement('td');

	item.innerHTML = books[i].title + ", " + books[i].year;


	tr.appendChild(item);
}
document.body.appendChild(list);


//works perfect
let elementsArray = document.querySelectorAll("td");
elementsArray.forEach(function(elem) {
	elem.addEventListener("click", function() {
		console.log("click")
		document.querySelector('h1').innerHTML = elem.innerHTML;

	});
});

/*broken
tds = document.querySelectorAll('td');
for(var i = 0; i < tds.length; i++) {
	document.querySelectorAll('td').onclick = function() {
		console.log('element clicked');
		var text = document.querySelector('td').innerHTML
		//document.querySelector('h1').innerHTML = text;
		console.log(text);
		var elements = document.querySelectorAll('td');
		var element = elements[i];
		document.querySelector('h1').innerHTML = element.innerHTML;
	};
}
*/

/* good for 1
document.querySelectorAll('td').onclick = function() {

	console.log('element clicked');
	var text = document.querySelector('td').innerHTML
	//document.querySelector('h1').innerHTML = text;
	console.log(text);
	var elements = document.querySelectorAll('td');
	document.querySelector('h1').innerHTML = elements[0].innerHTML;
};
*/