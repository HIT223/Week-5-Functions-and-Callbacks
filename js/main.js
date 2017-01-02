/**
* Scripts for {Project name and url}
*
* author: {name}
* email: {email}
* website: {portfolio}
*
* Functions
* https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions
*/

/*
* TASK 1: Function declaration
*/


makeHeadingRed();

makeYellow('#pageTitle');

makeColor('#pageTitle', 'blue');

/*
* basic function, no args
*/
function makeHeadingRed(){
	var heading = document.querySelector('#pageTitle');
	heading.style.color = 'red';
}

/*
* function with args
*/
function makeYellow(selector){
	var node = document.querySelector(selector);
	node.style.color = 'yellow';
}

/*
* function with mutiple args
*/
function makeColor(selector, color){
	var node = document.querySelector(selector);
	node.style.color = color;
}