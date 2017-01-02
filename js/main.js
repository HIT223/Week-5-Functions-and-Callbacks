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


/*
* TASK 2: Function expressions 
*/

var sendAlert = function(message){
	alert(message);
}

changeColor('#pageTitle', 'black', sendAlert);


changeColor('#pageTitle', 'green', function(message){
	alert(message);
});

function changeColor(selector, color, callback){
	var node = document.querySelector(selector);
	node.style.color = color;

	callback(selector + ' Changed to: '+ color);
}

/*
* TASK 3: Immediately Invokable Function Expression 
*/

(function(){
	alert('warning: This is a Immediately Invokable Function Expression');
})();

(function(prefix){
	alert(prefix + ': This is a Immediately Invokable Function Expression');
})('warning');

/*
* TASK 4: JSON parameters
*/

var options = {
	selector: "#pageTitle",
	color: "red",
	callback: function(message){
		alert(message)
	}
};

changeColorJSON(options);

function changeColorJSON(options){
	var node = document.querySelector(options.selector);
	node.style.color = options.color;

	options.callback(options.selector + ' Changed to: '+ options.color);
}

