"use strict";
var notes = new Array();

function saveList() {
	localStorage.notes = JSON.stringify(notes);
}

function loadList() {
	console.log('loadList');
	if (localStorage.notes) {
		notes = JSON.parse(localStorage.notes);
		displayList();
	}
}

function addItem() {
	var addnew = true;
	var textbox = document.getElementById('item');
	var itemText = textbox.value;
	textbox.value = '';
	textbox.focus();
	notes.forEach(function(entry) {
		if (itemText == entry.title){
			entry.quantity ++;
			addnew = false;
			saveList();
			loadList();
		}
		console.log(entry.title);
	});
	if (addnew) {
		var newItem = {title: itemText, quantity: 1};
		notes.push(newItem);
		saveList();
		loadList();
	}

}

function displayList() {
	var table = document.getElementById('list');
	table.innerHTML = '';
	for (var i = 0; i<notes.length; i++) {
		var node = undefined;
		var note = notes[i];
		var node = document.createElement('tr');
		var html = '<td>'+note.title+'</td><td>'+note.quantity+'</td><td><a href="#" onClick="deleteIndex('+i+')">delete</td>';
	    node.innerHTML = html;
		table.appendChild(node);
	}
}

function deleteIndex(i) {
	notes.splice(i, 1);
	saveList();
	loadList();
}

var button = document.getElementById('add');
button.onclick = addItem;
loadList();
