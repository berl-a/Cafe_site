var cafeLatLng = new google.maps.LatLng(48.509370, 32.267425);
var map;
var marker;
var directionsService = new google.maps.DirectionsService();
var directionsDisplay;

function initializeMap() {
	directionsDisplay = new google.maps.DirectionsRenderer({
		polylineOptions: {
			strokeColor: "rgba(216, 141, 92, 0.95)",
			strokeWeight: 5
		}
  	});
	
	var mapOptions = {
		zoom: 19,
		center: cafeLatLng,
		mapTypeControlOptions: {
		  mapTypeIds: [google.maps.MapTypeId.ROADMAP, 'map_style']
		}
	};
	
	map = new google.maps.Map(document.getElementById('map'),mapOptions);
	
	directionsDisplay.setMap(map);
	
	marker = new google.maps.Marker({
		position: cafeLatLng,
		map: map,
		//icon: "https://chart.googleapis.com/chart?chst=d_map_pin_letter&chld=|FFFF00",
		title: "Cafe marker"
	});
	marker.setAnimation(google.maps.Animation.BOUNCE);
};

function createRoute() {
	
	var userPosition;
	if(navigator.geolocation) {
		navigator.geolocation.getCurrentPosition(
			function(position) {
			  userPosition = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
				
				var request = {
					origin: userPosition,
					destination: cafeLatLng,
					travelMode: google.maps.TravelMode.DRIVING
				};
				directionsService.route(request, function(response, status) {
					if (status == google.maps.DirectionsStatus.OK) {
						directionsDisplay.setDirections(response);
						marker.setAnimation(null);
					}
				});
			}, function() {
			    alert("We can't get your position");
			}
		);
		
  	};
	
	
}

$(document).ready(function () {
	initializeMap();
	
	$('a.get-route').click(function(event) {
		event.preventDefault();
		
		createRoute();
		$(this).fadeOut(
			'slow',
			function() {
				$(this).slideUp(
					'slow',
					function() {
						$(this).remove();
					}
				);
			}
		);
	});
});