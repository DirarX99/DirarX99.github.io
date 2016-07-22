var map;
var infoWindow;
var markers=[];
var towers=[];
var markerTower;
var marker;
var myLatlng;
var myLatlng2;
var LatLng2;
var test;
var Latlng2;
var towerCircle;
var radT1;
var radT2;
//---------------------------------------------------------------------------------------------------------

function displayLocation(position) {
	var latitude = position.coords.latitude;
	var longitude = position.coords.longitude;
    
    var plocation = document.getElementById("location");
    plocation.innerHTML = latitude+" , "+longitude +"</br>" ;
    
    showMap(position.coords);
	
	var markerlatlng=new google.maps.LatLng(latitude,longitude);
	createMarker(markerlatlng);
}

//----------------------------------------------------------------------------------------------------------
function showMap (coords){
    var googleLatLong=new google.maps.LatLng(coords.latitude,coords.longitude);
    
    var mapOptions ={
        
        zoom:12, 
        center:googleLatLong, 
        mapTypeId:google.maps.MapTypeId.ROADMAP
        
        
    };
    
    var mapDiv =document.getElementById("map");
    map =new google.maps.Map(mapDiv,mapOptions);
    infoWindow= new google.maps.InfoWindow();
    
     google.maps.event.addListener(map,"click", function(event){
        var latitude=event.latLng.lat();
        var longitude=event.latLng.lng();
        
    var pLocation=document.getElementById("location");
        
    pLocation.innerHTML= latitude +"," +longitude;
       

		if(markers.length > 0){   
    	console.log("marker already created !,You can't add another one !");
		}else{
  		createMarker(event.latLng);
		map.panTo(event.latLng);	
		} 
		 
   
        
    });  
	
	radT1=10000;
	radT2=5000;
	
	
	
	new google.maps.LatLng(24.886, -70.269)
	var myLatlng = {lat: 36.807, lng: 10.195};
	var myLatlng2 = {lat: 36.807, lng: 10.095};
	var tower1 = createTowerMarker(myLatlng,radT1);
	var tower2= createTowerMarker(myLatlng2,radT2);
	var Latlng1 = new google.maps.LatLng(24.886, -70.269);
	Latlng2 = new google.maps.LatLng(28.886, -72.269);
	
	
	
	//var distance=google.maps.geometry.spherical.computeDistanceBetween(
      //  myLatlng, Latlng2);
		/*

	var distance= google.maps.geometry.spherical.computeDistanceBetween (Latlng1,Latlng2);
	 var pdistance = document.getElementById("distance");
    pdistance.innerHTML = distance;  
	
	
	
	 
    google.maps.event.addListener(marker,"dragend", function(event){
    console.log("marker dropped !");
      var plocation = document.getElementById("location");
    plocation.innerHTML = event.latLng.lat()+","+event.latLng.lng();  
    }); 
    */
	//var test= markerTower.getPosition().lat();
	// var pdistance = document.getElementById("test");
   // pdistance.innerHTML = test;  
	
	/*
		google.maps.event.addListener(marker,"dragend", function(event) {
    
      if (google.maps.geometry.poly.containsLocation(event.latLng, tower1.towerCircle)){
		  
	 console.log("yes !");
		  
	  }});
	
	  var triangleCoords = [
          {lat: 25.774, lng: -80.19},
          {lat: 18.466, lng: -66.118},
          {lat: 32.321, lng: -64.757}
        ];

        var bermudaTriangle = new google.maps.Polygon({paths: triangleCoords});

        google.maps.event.addListener(map, 'click', function(e) {
          var resultColor =
              google.maps.geometry.poly.containsLocation(e.latLng, bermudaTriangle) ?
              'red' :
              'green';

          new google.maps.Marker({
            position: e.latLng,
            map: map,
            icon: {
              path: google.maps.SymbolPath.CIRCLE,
              fillColor: resultColor,
              fillOpacity: .2,
              strokeColor: 'white',
              strokeWeight: .5,
              scale: 10
            }
          });
        });
	*/
	
	
}

//-----------------------------------------------------------------------------------------------------------------

function createMarker(latLng){
    var markerOptions={
		icon:("map-marker-s.png"),
       position:latLng,
		//position: {lat: 40.714, lng: -74.006},
        map:map,
        clickable:true,
		draggable:true,
        animation: google.maps.Animation.DROP
        
    };
     marker= new google.maps.Marker(markerOptions);
   markers.push(marker); 
 
        
     google.maps.event.addListener(marker,"click", function(event){
    infoWindow.setContent("location: "+event.latLng.lat().toFixed(2)+","+event.latLng.lng().toFixed(2));
        infoWindow.open(map,marker);
        
    });   
	 google.maps.event.addListener(marker,"dragend", function(event){
    console.log("marker dropped !");
      var plocation = document.getElementById("location");
    plocation.innerHTML = event.latLng.lat()+","+event.latLng.lng();  
    });   
	
	
	test= marker.getPosition();
			 
			var ptest = document.getElementById("test");
			ptest.innerHTML = test;  
			
	var distance= (google.maps.geometry.spherical.computeDistanceBetween (test,towers[0].getPosition())/1000).toFixed(2);
	 var pdistance = document.getElementById("distance");
    pdistance.innerHTML = distance;  
		 
	var distance2= (google.maps.geometry.spherical.computeDistanceBetween (test,towers[1].getPosition())/1000).toFixed(2);
	 var pdistance2 = document.getElementById("distance2");
    pdistance2.innerHTML = distance2;  	 
	var nearest = document.getElementById("nearest");	 
	if (distance>distance2)	{
		
	
    nearest.innerHTML = "Tower2"; 
		
		
	} 
	else{
		
	nearest.innerHTML = "Tower1";	
		
	}
	

	
	
		 
		 var radiusT1 = document.getElementById("radius1");
	if((distance*1000)<radT1){
		
		
    radiusT1.innerHTML = "Yes";  	
		
	}else{
		
	radiusT1.innerHTML = "No";	
		
	}
		 var radiusT2 = document.getElementById("radius2");
	
	
	if((distance2*1000)<radT2){
		
		
    radiusT2.innerHTML = "Yes";  	
		
	}
	else{
		
	radiusT2.innerHTML = "No";	
		
	}
		
   
	
	
	
	
	
	
	
	
	 google.maps.event.addListener(marker,"dragend", function(event){
     test= marker.getPosition();
			 
			var ptest = document.getElementById("test");
			ptest.innerHTML = test;  
			
	var distance= (google.maps.geometry.spherical.computeDistanceBetween (test,towers[0].getPosition())/1000).toFixed(2);
	 var pdistance = document.getElementById("distance");
    pdistance.innerHTML = distance;  
		 
	var distance2= (google.maps.geometry.spherical.computeDistanceBetween (test,towers[1].getPosition())/1000).toFixed(2);
	 var pdistance2 = document.getElementById("distance2");
    pdistance2.innerHTML = distance2;  	 
	var nearest = document.getElementById("nearest");	 
	if (distance>distance2)	{
		
	
    nearest.innerHTML = "Tower2"; 
		
		
	} 
	else{
		
	nearest.innerHTML = "Tower1";	
		
	}
		 

		 
			 var radiusT1 = document.getElementById("radius1");
	if((distance*1000)<radT1){
		
		
    radiusT1.innerHTML = "Yes";  	
		
	}else{
		
	radiusT1.innerHTML = "No";	
		
	}
		 var radiusT2 = document.getElementById("radius2");
	if((distance2*1000)<radT2){
		
		
    radiusT2.innerHTML = "Yes";  	
		
	}
	else{
		
	radiusT2.innerHTML = "No";	
		
	}	 
	
    });  
	

	
}

//----------------------------------------------------------------------------------------------------------------------
 function createTowerMarker(myLatLng,rad){
   
	
	 
	       markerTower = new google.maps.Marker({
		  icon:("Tower.png"), 
          position: myLatLng,
          map: map,
          title: 'Hello World!'
        });
      
		towers.push(markerTower); 
	 
	 towerCircle = new google.maps.Circle({
            strokeColor: '#FF0000',
            strokeOpacity: 0.5,
            strokeWeight: 2,
            fillColor: '#FF0000',
            fillOpacity: 0.1,
            map: map,
            center: myLatLng,
            radius: rad
		 
		 
          });
}   
  

//---------------------------------------------------------------------------------------------------------------------  

function calcDistance(p1, p2){
  return (google.maps.geometry.spherical.computeDistanceBetween(p1, p2) / 1000).toFixed(2);
}

//---------------------------------------------------------------------------------------------------------------------    
 
  function clearMarkers() {
        setMapOnAll(null);
      }

//---------------------------------------------------------------------------------------------------------------------    
       function deleteMarkers() {
        clearMarkers();
        markers = [];
      }
//--------------------------------------------------------------------------------------------------------------------- 

  function showMarkers() {
        setMapOnAll(map);
      }


//--------------------------------------------------------------------------------------------------------------------- 

function setMapOnAll(map) {
        for (var i = 0; i < markers.length; i++) {
          markers[i].setMap(map);
        }
      }
//--------------------------------------------------------------------------------------------------------------------- 
function displayError(error) {

}



window.onload = function() {
	if (navigator.geolocation) {
		

		navigator.geolocation.getCurrentPosition(displayLocation, 
			displayError,
			{ enableHighAccuracy: false, timeout: 10000, maximumAge: 0 }
		);
	} else {
		alert("Sorry, this browser doesn't support geolocation!");
	}
}