(function() {
  if (typeof Asteroids === "undefined") {
    window.Asteroids = {};
  }

  var Asteroid = Asteroids.Asteroid = function(args) {
    args.radius = Asteroid.RADIUS;
    args.color = Asteroid.COLOR;
    args.vel = Asteroids.Util.randomVec(1);
    Asteroids.MovingObject.call(this, args);
  };
  
  Asteroid.COLOR = "#888888";
  Asteroid.RADIUS = 80; // ----what should this radius be?
  
  Asteroids.Util.inherits(Asteroids.MovingObject, Asteroid);

  Asteroid.prototype.collideWith = function(otherObject) {
    if (otherObject instanceof Asteroids.Ship) {
      otherObject.relocate();
    }
  };

})();