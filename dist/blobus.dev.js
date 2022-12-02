"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var blobuses = [];

var Blobus =
/*#__PURE__*/
function () {
  function Blobus(x, y, radius, speed, color) {
    _classCallCheck(this, Blobus);

    this.x = x;
    this.y = y;
    this.xoff = 0;
    this.radius = radius;
    this.speed = speed / 100;
    this.color = color;
  }

  _createClass(Blobus, [{
    key: "update",
    value: function update() {
      this.xoff += this.speed;
      this.yoff += this.speed;
    }
  }, {
    key: "draw",
    value: function draw() {
      beginShape();

      for (var a = 0; a < TWO_PI; a += 1) {
        this.offset = map(noise(this.xoff, yoff), 0, 1, -25, 25);
        this.r = this.radius + this.offset;
        this.x = this.r * cos(a);
        this.y = this.r * sin(a);
        fill('red');
        ellipse(this.x, this.y, 4, 4);
        vertex(this.x, this.y); //console.log(this.x, this.y)
        //console.log(this.xoff)
      }

      fill(this.color);
      endShape();
    }
  }]);

  return Blobus;
}();