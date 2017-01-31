function randomY() {
  return Math.floor(Math.random() * 100);
}

function randomSpeed() {
  return Math.floor(Math.random() * 1000);
}

function generateObject() {
  var ypos = randomY();
  var obj = $("<div/>")
      .addClass("movingObj")
      .attr("data-speed", randomSpeed())
      .css("top", `${ypos}%`);
  return obj;
}

function displayObject(plane, obj) {
  plane.append(obj);
  var interval = setInterval(function() {
    console.log(`object: ${parseInt(obj.css("left"))}`);
    if (parseInt(obj.css("left")) <= 0) {
      clearInterval(interval);
      obj.remove();
    }
    obj.css(
      "left",
      parseInt(obj.css("left")) - 2 + "px"
    );
  }, obj.attr("data-speed"));
}

var plane = $("#plane");
var gameInterval = setInterval(randomly(mkObj), 3000);
mkObj();

function mkObj() {
  var obj = generateObject();
  var objInterval = displayObject(plane, obj);
}

function randomly(cb) {
  return function() {
    if ((new Date).getMilliseconds() % 3 === 0) {
      cb();
    }
  }
}
