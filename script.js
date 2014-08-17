$(document).ready(function() {
	
	var nextHighlightedImage = 1;
	var highlightNext = function() {
		
		$('div.images img:not(:nth-of-type(' + (nextHighlightedImage + 1) + '))').removeClass('higher');
		$('div.images img:nth-of-type(' + (nextHighlightedImage + 1) + ')').addClass('higher');
		
		$('div.slider div.paragraph p').fadeOut(750, function () {
			$('div.slider div.paragraph p').text('sadf').fadeIn(750);
		});
		
		if (nextHighlightedImage < 2) nextHighlightedImage++;
		else nextHighlightedImage = 0;
	}
	
	setInterval(highlightNext, 5000);
});


/*
if(nextHighlightedImage === 0) {
			$('div.images img:nth-of-type(2)').removeClass('higher');
			$('div.images img:nth-of-type(3)').removeClass('higher');
		}else if(nextHighlightedImage === 1) {
			$('div.images img:nth-of-type(1)').removeClass('higher');
			$('div.images img:nth-of-type(3)').removeClass('higher');
		}else {
			$('div.images img:nth-of-type(1)').removeClass('higher');
			$('div.images img:nth-of-type(2)').removeClass('higher');
		}
*/