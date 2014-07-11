/**
 * service.js
 *
 * Computer Science 50
 * Problem Set 8
 *
 * Implements a shuttle service.
 */

// default height
var HEIGHT = 0.8;

// default latitude
var LATITUDE = 42.3745615030193;

// default longitude
var LONGITUDE = -71.11803936751632;

// default heading
var HEADING = 1.757197490907891;

// default number of seats
var SEATS = 10;

// default velocity
var VELOCITY = 50;

// flag for shuttle (see get_seat())
var NOT_AVAILABLE = -1;

// global with markers
var MARKERS = new Array();

// global with placemarks
var PLACEMARKS = new Array();

// global with longitude/latitude
var LONGLAT = new Array();

// global for scoring
var DRIVER_SCORE = 0;

// global reference to shuttle's marker on 2D map
var bus = null;

// global reference to 3D Earth
var earth = null;

// global reference to 2D map
var map = null;

// global reference to shuttle
var shuttle = null;

// load version 1 of the Google Earth API
google.load("earth", "1");

// load version 3 of the Google Maps API
google.load("maps", "3", {other_params: "sensor=false"});

// once the window has loaded
$(window).load(function() {

    // listen for keydown anywhere in body
    $(document.body).keydown(function(event) {
        return keystroke(event, true);
    });

    // listen for keyup anywhere in body
    $(document.body).keyup(function(event) {
        return keystroke(event, false);
    });

    // listen for click on Drop Off button
    $("#dropoff").click(function(event) {
        dropoff();
    });

    // listen for click on Pick Up button
    $("#pickup").click(function(event) {
        pickup();
    });

    // load application
    load();
});

// unload application
$(window).unload(function() {
    unload();
});

/**
 * Groups passengers by destination.
 */
function order_seats()
{
    var ordered = new Array(); 
    var pushed = 0;
    // build a subarray with passengers ordered by their houses names
    for (var house in HOUSES)
    {
        for (var i = 0; i < shuttle.seats.length; i++)
        {
            if (shuttle.seats[i] != null && shuttle.seats[i].house == house)
            {
                ordered.push(shuttle.seats[i]);
                pushed++;
            }
        }
    }
    // add empty seats, if any
    for (var i = pushed; i < shuttle.seats.length; i++)
    {
        ordered.push(null);
    }
    // return the seats array properly sorted
    return ordered;
  
}

/**
 * Renders seating chart.
 */
function chart()
{
    var html = "<ol start='0'>";
    // group people by destination
    shuttle.seats = order_seats();
    for (var i = 0; i < shuttle.seats.length; i++)
    {
        if (shuttle.seats[i] == null)
        {
            html += "<li>Empty Seat</li>";
        }
        else
        {
            html += "<li>" + shuttle.seats[i].name + " (" + shuttle.seats[i].house + ") " + "</li>";
        }
    }
    html += "</ol>";
    $("#chart").html(html);
}

/**
 * Drops up passengers if their stop is nearby.
 */
function dropoff()
{
    // state variable for announcement
    var too_far = true;
    // iterate over all the shuttle seats
    for (var i = 0; i < shuttle.seats.length; i++)
    {   
        if (shuttle.seats[i] != null)
        {
            // get the passenger house to index HOUSES global array
            var house = shuttle.seats[i].house;
            // drop the passenger
            if (shuttle.distance(HOUSES[house].lat, HOUSES[house].lng) < 30.0)
            {
                // update and display score
                DRIVER_SCORE++;
                set_announce("A passenger has been dropped. Bye " + shuttle.seats[i].name + 
                             "!<br />" + "Your new score is: " + DRIVER_SCORE);
                // remove passenger
                shuttle.seats[i] = null;
                too_far = false;
            }
        }
    }
    // check the too_far state variable to set the proper announcement
    if (too_far)
    {
        set_announce("You are too far from any passengers house!");
    }
    // update chart
    chart();
}

/**
 * Called if Google Earth fails to load.
 */
function failureCB(errorCode) 
{
    // report error unless plugin simply isn't installed
    if (errorCode != ERR_CREATE_PLUGIN)
    {
        alert(errorCode);
    }
}

/**
 * Handler for Earth's frameend event.
 */
function frameend() 
{
    shuttle.update();
}

/**
 * Called once Google Earth has loaded.
 */
function initCB(instance) 
{
    // retain reference to GEPlugin instance
    earth = instance;

    // specify the speed at which the camera moves
    earth.getOptions().setFlyToSpeed(100);

    // show buildings
    earth.getLayerRoot().enableLayerById(earth.LAYER_BUILDINGS, true);

    // disable terrain (so that Earth is flat)
    earth.getLayerRoot().enableLayerById(earth.LAYER_TERRAIN, false);

    // prevent mouse navigation in the plugin
    earth.getOptions().setMouseNavigationEnabled(false);

    // instantiate shuttle
    shuttle = new Shuttle({
        heading: HEADING,
        height: HEIGHT,
        latitude: LATITUDE,
        longitude: LONGITUDE,
        planet: earth,
        seats: SEATS,
        velocity: VELOCITY
    });

    // synchronize camera with Earth
    google.earth.addEventListener(earth, "frameend", frameend);

    // synchronize map with Earth
    google.earth.addEventListener(earth.getView(), "viewchange", viewchange);

    // update shuttle's camera
    shuttle.updateCamera();

    // show Earth
    earth.getWindow().setVisibility(true);

    // render seating chart
    chart();

    // populate Earth with passengers and houses
    populate();
}

/**
 * Handles keystrokes.
 */
function keystroke(event, state)
{
    // ensure we have event
    if (!event)
    {
        event = window.event;
    }

    // left arrow
    if (event.keyCode == 37)
    {
        shuttle.states.turningLeftward = state;
        return false;
    }

    // up arrow
    else if (event.keyCode == 38)
    {
        shuttle.states.tiltingUpward = state;
        return false;
    }

    // right arrow
    else if (event.keyCode == 39)
    {
        shuttle.states.turningRightward = state;
        return false;
    }

    // down arrow
    else if (event.keyCode == 40)
    {
        shuttle.states.tiltingDownward = state;
        return false;
    }

    // A, a
    else if (event.keyCode == 65 || event.keyCode == 97)
    {
        shuttle.states.slidingLeftward = state;
        set_announce("no announcements at this time.");
        return false;
    }

    // D, d
    else if (event.keyCode == 68 || event.keyCode == 100)
    {
        shuttle.states.slidingRightward = state;
        set_announce("no announcements at this time.");
        return false;
    }
  
    // S, s
    else if (event.keyCode == 83 || event.keyCode == 115)
    {
        shuttle.states.movingBackward = state;     
        set_announce("no announcements at this time.");
        return false;
    }

    // W, w
    else if (event.keyCode == 87 || event.keyCode == 119)
    {
        shuttle.states.movingForward = state;    
        set_announce("no announcements at this time.");
        return false;
    }
  
    return true;
}

/**
 * Loads application.
 */
function load()
{
    // embed 2D map in DOM
    var latlng = new google.maps.LatLng(LATITUDE, LONGITUDE);
    map = new google.maps.Map($("#map").get(0), {
        center: latlng,
        disableDefaultUI: true,
        mapTypeId: google.maps.MapTypeId.ROADMAP,
        scrollwheel: false,
        zoom: 17,
        zoomControl: true
    });

    // prepare shuttle's icon for map
    bus = new google.maps.Marker({
        icon: "https://maps.gstatic.com/intl/en_us/mapfiles/ms/micons/bus.png",
        map: map,
        title: "you are here"
    });

    // embed 3D Earth in DOM
    google.earth.createInstance("earth", initCB, failureCB);
}

/**
 * Check the shuttle for empty seats.
 * Return the first available seat on success, otherwise false.
 */
function get_seat()
{
    // iterate over all seats
    for (var i = 0; i < shuttle.seats.length; i++)
    {
        // return the first available seat
        if (shuttle.seats[i] == null)
        {
            return i;
        }
    }
    return -1;
}

/**
 * Quick and dirty function to set announcements.
 */ 
function set_announce(text)
{
    $("#announcements").html(text);
}

/**
 * Picks up nearby passengers.
 */
function pickup()
{
    // state variable for announcement
    var too_far = true;
    // first available seat
    var seat = get_seat();
    
    // shuttle is full as soon pickup button triggers the event, hence return
    if (seat == NOT_AVAILABLE)
    {
        set_announce("Sorry, the shuttle is full!");
        return;
    }
    // fetch terrain data
    var features = earth.getFeatures();
    // iterate over passengers
    for (var i = 0; i < PASSENGERS.length; i++)
    {
        // check first if there are seats left
        if (seat != NOT_AVAILABLE)
        { 
            // check for passengers nearby
            if (shuttle.distance(LONGLAT[i].lat, LONGLAT[i].lng) < 15.0)
            {
                // only board non-freshmen passengers
                if (PASSENGERS[i].house in HOUSES)
                {
                    set_announce("Picked up " + PASSENGERS[i].name + ".Be polite and say hello!");
                    too_far = false;
                    PLACEMARKS[i] = null;
                    MARKERS[i].setMap(null);
                    shuttle.seats[seat] = PASSENGERS[i];     
                }
                else
                {
                    set_announce("Sorry, no freshman on board!");
                }
            }
                 
        }
        // break the loop as soon as the shuttle runs out of seats
        else
        {
            break;
        }
        
        // update seat
        seat = get_seat();    
    }
    // check the too_far state variable to set the proper announcement
    if (too_far)
    {
        set_announce("There is nobody around! Try to get closer.");
    }
    
    // update chart
    chart();
}

/**
 * Get distance between a generic building and a passenger's house.
 */
 
function get_distance(building, passenger)
{
    var passenger_house = passenger.house;
    // handle freshmen passengers without data for house
    if (typeof HOUSES[passenger_house] == 'undefined')
    {
        return 1;
    }
    var house_lat = HOUSES[passenger_house].lat;
    var house_lng = HOUSES[passenger_house].lng;
    return Math.abs(building.lat - house_lat) + Math.abs(building.lng - house_lng);
}

/**
 * Populates Earth with passengers and houses.
 */
function populate()
{
    // mark houses
    for (var house in HOUSES)
    {
        // plant house on map
        new google.maps.Marker({
            icon: "https://google-maps-icons.googlecode.com/files/home.png",
            map: map,
            position: new google.maps.LatLng(HOUSES[house].lat, HOUSES[house].lng),
            title: house
        });
    }

    // get current URL, sans any filename
    var url = window.location.href.substring(0, (window.location.href.lastIndexOf("/")) + 1);

    // scatter passengers
    for (var i = 0; i < PASSENGERS.length; i++)
    {
        // pick a random building
        var building = BUILDINGS[Math.floor(Math.random() * BUILDINGS.length)];

        // prevent placing passengers in their houses proximity
        while (get_distance(building, PASSENGERS[i]) < 0.001)
        {
            building = BUILDINGS[Math.floor(Math.random() * BUILDINGS.length)];
        }
        
        // prepare placemark
        var placemark = earth.createPlacemark("");
        placemark.setName(PASSENGERS[i].name + " to " + PASSENGERS[i].house);

        // prepare icon
        var icon = earth.createIcon("");
        icon.setHref(url + "/img/" + PASSENGERS[i].username + ".jpg");

        // prepare style
        var style = earth.createStyle("");
        style.getIconStyle().setIcon(icon);
        style.getIconStyle().setScale(4.0);

        // prepare stylemap
        var styleMap = earth.createStyleMap("");
        styleMap.setNormalStyle(style);
        styleMap.setHighlightStyle(style);

        // associate stylemap with placemark
        placemark.setStyleSelector(styleMap);

        // prepare point
        var point = earth.createPoint("");
        point.setAltitudeMode(earth.ALTITUDE_RELATIVE_TO_GROUND);
        point.setLatitude(building.lat);
        point.setLongitude(building.lng);
        point.setAltitude(0.0);

        // associate placemark with point
        placemark.setGeometry(point);

        // add placemark to Earth
        earth.getFeatures().appendChild(placemark);

        // add marker to map
        var marker = new google.maps.Marker({
            icon: "https://maps.gstatic.com/intl/en_us/mapfiles/ms/micons/man.png",
            map: map,
            position: new google.maps.LatLng(building.lat, building.lng),
            title: PASSENGERS[i].name + " at " + building.name
        });
        
        // store data into global arrays for further usage
        PLACEMARKS.push(placemark);
        MARKERS.push(marker);
        LONGLAT.push({lng: building.lng, lat: building.lat});
    }
}

/**
 * Handler for Earth's viewchange event.
 */
function viewchange() 
{
    // keep map centered on shuttle's marker
    var latlng = new google.maps.LatLng(shuttle.position.latitude, shuttle.position.longitude);
    map.setCenter(latlng);
    bus.setPosition(latlng);
}

/**
 * Unloads Earth.
 */
function unload()
{
    google.earth.removeEventListener(earth.getView(), "viewchange", viewchange);
    google.earth.removeEventListener(earth, "frameend", frameend);
}
