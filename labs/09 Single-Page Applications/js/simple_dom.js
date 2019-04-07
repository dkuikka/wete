//console.log('page loaded');

console.log(document);

/*
document.getElementById('save').onclick = function save() {
	console.log('save');
	// get a DOM object representing a form field.
	var name = document.querySelector('#userForm input[type="text"]');
	console.log(name);
	document.querySelector('#summary h1').innerHTML = name.value;
	var password = document.querySelector('#userForm input[type="password"]');
	//document.querySelector('#summary p').innerHTML = "password: " + password.value;
	var data = document.querySelectorAll('#userForm input');
	console.log(data);
	var paragraphs = document.querySelectorAll('#summary p');
	console.log('found '+paragraphs.length+' p tags');
	paragraphs[1].innerHTML = "password: " + password.value;
}
*/

document.querySelector('#userForm input[type="email"]').onkeypress = function() {
	console.log('updating email');
	var email = document.querySelector('#userForm input[type="email"]').value;
	document.querySelector('#summary p').innerHTML = email;
};


document.querySelector('#userForm input[type="text"]').onkeypress = function() {
	console.log('updating name');
	var name = document.querySelector('#userForm input[type="text"]');
	document.querySelector('#summary h1').innerHTML = name.value;
};

document.querySelector('#userForm input[type="password"]').onkeypress = function() {
	console.log('updating password');
	var password = document.querySelector('#userForm input[type="password"]').value;
	//document.querySelector('#summary p').innerHTML = password;
	var paragraphs = document.querySelectorAll('#summary p');
	paragraphs[1].innerHTML = "password: " + password;
};


function save() {
	console.log('save');
	// get a DOM object representing a form field.
	var name = document.querySelector('#userForm input[type="text"]');
	console.log(name);
	document.querySelector('#summary h1').innerHTML = name.value;
	var data = document.querySelectorAll('#userForm input');
	console.log(data);
	var paragraphs = document.querySelectorAll('#summary p');
	console.log('found '+paragraphs.length+' p tags');
	paragraphs[1].innerHTML = 'Hello World!';
}