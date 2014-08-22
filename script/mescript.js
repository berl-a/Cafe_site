var cursorOverFirstDiv = false, cursorOverSecondDiv = false, cursorOverThirdDiv = false;
var addHoverListeners = function() {
	$('div.menu').on('mouseenter', 'div:first', function() {
		cursorOverFirstDiv = true;
		//$('div.menu div.second-tab').empty();
		//$('div.menu div.item').empty();
	});
	$('div.menu').on('mouseleave', 'div:first', function() {
		cursorOverFirstDiv = false;
	});
	$('div.menu').on('mouseenter', 'div:nth-of-type(2)', function() {
		cursorOverSecondDiv = true;
		//$('div.menu div.item').empty();
	});
	$('div.menu').on('mouseleave', 'div:nth-of-type(2)', function() {
		cursorOverSecondDiv = false;
	});
	$('div.menu').on('mouseenter', 'div:nth-of-type(3)', function() {
		cursorOverThirdDiv = true;
	});
	$('div.menu').on('mouseleave', 'div:nth-of-type(3)', function() {
		cursorOverThirdDiv = false;
	});
};

var menu;
var categories = new Array();
var chosenCategory;
var getMenu = function() {
	$.getJSON("res/menu.json", function (respond) {
		menu = respond;
		var category;
		for(category in menu) {
			categories.push(category);
		}
		addCategoriesToTheFirstTab();
	});
};

var addCategoriesToTheFirstTab = function() {
	for(var i = 0; i < categories.length; i++) {
		$('div.first-tab ul').append('<li>' + categories[i] + '</li>');
	}
};

$(document).ready(function() {
	addHoverListeners();
	getMenu();
	
	$('div.menu div:first').on('mouseenter', 'li', function() {
		chosenCategory = $(this).text();
		$('div.second-tab ul').empty();
		$('div.item').empty();
		var item;
		for(item in menu[$(this).text()]) {
			$('div.second-tab ul').append('<li>' + item + '</li>');
		}
	});
	
	$('div.menu div:nth-of-type(2)').on('mouseenter', 'li', function() {
		$('div.item').empty();
		$('div.item').append(menu[chosenCategory][$(this).text()]);
	});
});