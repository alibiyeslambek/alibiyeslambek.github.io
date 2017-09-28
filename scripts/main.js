var myHeading = document.querySelector('h1');
myHeading.textContent = 'Hello world!';

var myImg = document.querySelector('img');

myImg.onclick = function() {
	var mySrc = myImg.getAttribute('src');
	if(mySrc === 'images/me1.JPG')
		myImg.setAttribute('src', 'images/me2.JPG');
	else
		myImg.setAttribute('src', 'images/me1.JPG');
}

var myButton = document.querySelector('button');

function setUserName() {
	var myName = prompt('Enter your name');
	localStorage.setItem('name', myName);
	myHeading.textContent = 'Welcome to my page, ' + myName;
}

if(!localStorage.getItem('name')) {
	setUserName();
}
else {
	myHeading.textContent = 'Welcome to my page, ' + localStorage.getItem('name');
}

myButton.onclick = function() {
	setUserName();
}
