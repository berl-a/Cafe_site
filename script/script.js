//SLIDER

var sliderTexts = new Array();
var loadSliderTexts = function () {
	$.getJSON("res/slider_texts.json", function (json) {
		sliderTexts.push(json.first);
		sliderTexts.push(json.secound);
		sliderTexts.push(json.third);
	});
	$('div.slider div.paragraph p').text(sliderTexts[0]);
};

var nowHighlightingImage = 0;
var highlightNextSlide = function() {
	
	if (nowHighlightingImage < 2) nowHighlightingImage++;
	else nowHighlightingImage = 0;
	
	$('div.images img:nth-of-type(' + (nowHighlightingImage + 1) + ')').addClass('higher');
	$('div.images img:not(:nth-of-type(' + (nowHighlightingImage + 1) + '))').removeClass('higher');
 
	$('div.slider div.paragraph p').fadeOut(1000, function () {
		$('div.slider div.paragraph p').text(sliderTexts[nowHighlightingImage]).fadeIn(1000);
	});
};

$(document).ready(function() {
	loadSliderTexts();
	setInterval(highlightNextSlide, 6000);
});


/*
if(nextHighlightingImage === 0) {
			$('div.images img:nth-of-type(2)').removeClass('higher');
			$('div.images img:nth-of-type(3)').removeClass('higher');
		}else if(nextHighlightingImage === 1) {
			$('div.images img:nth-of-type(1)').removeClass('higher');
			$('div.images img:nth-of-type(3)').removeClass('higher');
		}else {
			$('div.images img:nth-of-type(1)').removeClass('higher');
			$('div.images img:nth-of-type(2)').removeClass('higher');
		}
*/