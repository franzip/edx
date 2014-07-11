/**
 * shuttle.js
 *
 * Computer Science 50
 * Problem Set 8
 *
 * Implements a shuttle.  Based on
 * http://earth-api-samples.googlecode.com/svn/trunk/demos/firstpersoncam/firstpersoncam.js.
 */

/**
 * Encapsulates a shuttle.
 */
function Shuttle(config)
{
    // shuttle's position
    this.position = {
        altitude: 0,
        heading: config.heading,
        latitude: config.latitude,
        longitude: config.longitude
    };

    // shuttle's states
    this.states = {
        flyingUpward: false,
        flyingDownward: false,
        movingBackward: false,
        movingForward: false,
        slidingLeftward: false,
        slidingRightward: false,
        tiltingDownward: false,
        tiltingUpward: false,
        turningLeftward: false,
        turningRightward: false
    };

    // remember shuttle's planet
    this.planet = config.planet;

    // remember shuttle's height
    this.height = config.height;

    // remember shuttle's velocity
    this.velocity = config.velocity;

    // initialize camera altitude to shuttle's height
    this.cameraAltitude = this.height;

    // shuttle's initial Cartesian coordinates
    this.localAnchorCartesian = 
        V3.latLonAltToCartesian([this.position.latitude, this.position.longitude, this.position.altitude]);

    // heading angle and tilt angle are relative to local frame
    this.headingAngle = config.heading;
    this.tiltAngle = 0;

    // initialize time
    this.lastMillis = (new Date()).getTime();  
  
    // used for bounce
    this.distanceTraveled = 0;

    // initialize shuttle's seats to empty
    this.seats = [];
    for (var i = 0; i < config.seats; i++)
    {
        this.seats[i] = null;
    }
}

/**
 * Calculates the distance in meters between the shuttle and specified coordinates.
 * Based on https://developers.google.com/maps/articles/mvcfun#makingitwork.
 */
Shuttle.prototype.distance = function(lat, lng)
{
    var R = 6371;
    var dLat = (this.position.latitude - lat) * Math.PI / 180;
    var dLon = (this.position.longitude - lng) * Math.PI / 180;
    var a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
        Math.cos(lat * Math.PI / 180) * Math.cos(this.position.latitude * Math.PI / 180) *
        Math.sin(dLon / 2) * Math.sin(dLon / 2);
    var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    var d = R * c;
    return d * 1000;
};

/**
 * Method that updates a shuttle's location.
 */
Shuttle.prototype.update = function()
{
    this.planet.getWindow().blur();
  
    // Update delta time (dt in seconds)
    var now = (new Date()).getTime();  
    var dt = (now - this.lastMillis) / 1000.0;
    if (dt > 0.25)
    {
        dt = 0.25;
    }  
    this.lastMillis = now;    
    
    // Update orientation and then position of camera based on user input.
    this.updateOrientation(dt);
    this.updatePosition(dt);
           
    // Update camera.
    this.updateCamera();
};

/**
 * Method that updates a shuttle's camera.
 */
Shuttle.prototype.updateCamera = function() 
{
    // Will put in a bit of a stride if the camera is at or below 1.7 meters
    var bounce = 0;  
    if (this.cameraAltitude <= this.height)
    {
        bounce = 1.5 * Math.abs(Math.sin(4 * this.distanceTraveled * Math.PI / 180)); 
    }

    // calculate heading; keep angle in [-180, 180]
    var heading = this.headingAngle * 180 / Math.PI;
    while (heading < -180) 
    {
        heading += 360;
    }
    while (heading > 180)
    {
        heading -= 360;
    }

    // Update camera position.  Note that tilt at 0 is facing directly downwards.
    // We add 90 such that 90 degrees is facing forwards.
    var la = this.planet.createLookAt("");
    la.set(
        this.position.latitude,
        this.position.longitude,
        this.cameraAltitude + bounce,
        this.planet.ALTITUDE_RELATIVE_TO_GROUND,
        heading,
        this.tiltAngle * 180 / Math.PI + 120, /* tilt */
        0 /* altitude is constant */
    );  
    this.planet.getView().setAbstractView(la);         
};

/**
 * Method that updates a shuttle's orientation.
 */
Shuttle.prototype.updateOrientation = function(dt) 
{
    // Based on dt and input press, update turn angle.
    if (this.states.turningLeftward || this.states.turningRightward)
    {
        var turnSpeed = 60.0; // degrees/sec
        if (this.states.turningLeftward)
        {
            turnSpeed *= -1.0;
        }
        this.headingAngle += turnSpeed * dt * Math.PI / 180.0;
    }
    if (this.states.tiltingUpward || this.states.tiltingDownward)
    {
        var tiltSpeed = 60.0; // degrees/sec
        if (this.states.tiltingDownward)
        {
            tiltSpeed *= -1.0;
        }
        this.tiltAngle = this.tiltAngle + tiltSpeed * dt * Math.PI / 180.0;

        // Clamp
        var tiltMax = 50.0 * Math.PI / 180.0;
        var tiltMin = -90.0 * Math.PI / 180.0;
        if (this.tiltAngle > tiltMax)
        {
            this.tiltAngle = tiltMax;
        }
        if (this.tiltAngle < tiltMin)
        {
            this.tiltAngle = tiltMin;
        }
    }
}

/**
 * Method that updates a shuttle's position.
 */
Shuttle.prototype.updatePosition = function(dt) 
{
    // Convert local lat/lon to a global matrix.  The up vector is 
    // vector = position - center of earth.  And the right vector is a vector
    // pointing eastwards and the facing vector is pointing towards north.
    var localToGlobalFrame = M33.makeLocalToGlobalFrame([this.position.latitude, this.position.longitude, this.position.altitude]);
  
    // Move in heading direction by rotating the facing vector around
    // the up vector, in the angle specified by the heading angle.
    // Strafing is similar, except it's aligned towards the right vec.
    var headingVec = V3.rotate(localToGlobalFrame[1], localToGlobalFrame[2], -this.headingAngle);                             
    var rightVec = V3.rotate(localToGlobalFrame[0], localToGlobalFrame[2], -this.headingAngle);

    // Calculate strafe/forwards                             
    var strafe = 0;                             
    if (this.states.slidingLeftward || this.states.slidingRightward) 
    {
        var strafeVelocity = this.velocity / 2;
        if (this.states.slidingLeftward)
        {
            strafeVelocity *= -1;      
        }
        strafe = strafeVelocity * dt;
    }  
    var forward = 0;                             
    if (this.states.movingForward || this.states.movingBackward)
    {
        var forwardVelocity = this.velocity;
        if (this.states.movingBackward)
        {
            forwardVelocity *= -1;
        }
        forward = forwardVelocity * dt;
    }  
    if (this.states.flyingUpward) 
    {
        this.cameraAltitude += 1.0;
    }
    else if (this.states.flyingDownward) 
    {
        this.cameraAltitude -= 1.0;
    }
    this.cameraAltitude = Math.max(this.height, this.cameraAltitude);
  
    // remember distance traveled
    this.distanceTraveled += forward;

    // Add the change in position due to forward velocity and strafe velocity.
    this.localAnchorCartesian = V3.add(this.localAnchorCartesian, V3.scale(rightVec, strafe));
    this.localAnchorCartesian = V3.add(this.localAnchorCartesian, V3.scale(headingVec, forward));
                                                                        
    // Convert cartesian to Lat Lon Altitude for camera setup later on.
    var localAnchorLla = V3.cartesianToLatLonAlt(this.localAnchorCartesian);
    this.position.latitude = localAnchorLla[0];
    this.position.longitude = localAnchorLla[1];
    this.position.altitude = localAnchorLla[2];
}
