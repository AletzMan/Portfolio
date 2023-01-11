"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var menuDesktop = document.querySelectorAll(".header__menu li");
var selectItemMenu = document.querySelector(".menu__selection");
var presentation = document.querySelector(".home__description");
var sectionHome = document.querySelector(".home");
selectItemMenu.style.left = "0px";
selectItemMenu.style.top = "0px";
var textPresentation = 'Front-End Developer Jr.';
var numbertags = 20;
var containerTags = [];
var nameTags = ["<header>", "<section>", "<footer>", "<nav>", "<aside>", "<img>", "<button>", "<input>", "<picture>", "<table>", "<meta>", "<select>", "<span>", "<textarea>", "<video>"];

onload = function onload() {
  initAnimation();

  for (var index = 0; index < numbertags; index++) {
    var arrayBubbles = new TagBubble();
  }
};

menuDesktop.forEach(function (elementMenu) {
  elementMenu.addEventListener('mouseup', function (e) {
    menuDesktop.forEach(function (elementMenuUnSelected) {
      elementMenuUnSelected.style.borderBottom = "none";
    });
    selectItemMenu.style.left = elementMenu.getBoundingClientRect().left - menuDesktop.item(0).getBoundingClientRect().left - 1 + "px";
  });
});
menuDesktop.item(3).addEventListener("mousedown", function () {
  return scroll(0, 14);
});
var intervalPresentetion = setInterval(LoadPresentation, 130);
var numLetter = 0;

function LoadPresentation() {
  if (numLetter < textPresentation.length) {
    presentation.children[1].innerHTML += textPresentation[numLetter];
    numLetter += 1;
  } else {
    clearInterval(intervalPresentetion);
  }
}

var TagBubble =
/*#__PURE__*/
function () {
  function TagBubble(posX, posY, speedX, speedY, mass) {
    _classCallCheck(this, TagBubble);

    this.posX = posX;
    this.posY = posY;
    this.speedX = speedX;
    this.speedY = speedY;
    this.mass = mass;
    this.isColliding = false;
  }

  _createClass(TagBubble, [{
    key: "createItem",
    value: function createItem() {
      var _this = this;

      var newTagMove = document.createElement("div");
      newTagMove.textContent = nameTags[GetRandomNumber(0, 14)];
      newTagMove.classList = "tag__move";
      newTagMove.style.left = "".concat(this.posX, "px");
      newTagMove.style.top = "".concat(this.posY, "px");
      containerTags.push(newTagMove);
      sectionHome.appendChild(newTagMove);
      var fontSize = parseFloat(window.getComputedStyle(newTagMove, null).getPropertyValue('font-size'));
      newTagMove.style.width = "".concat(Math.floor(newTagMove.getBoundingClientRect().width + 10), "px");
      newTagMove.style.paddingTop = "".concat(Math.floor(newTagMove.getBoundingClientRect().width / 2) - fontSize / 1.5, "px");
      newTagMove.style.height = "".concat(Math.floor(newTagMove.getBoundingClientRect().width), "px");
      this.width = Math.floor(newTagMove.getBoundingClientRect().width);
      this.height = Math.floor(newTagMove.getBoundingClientRect().height);
      newTagMove.addEventListener('mouseover', function (e) {
        //newTagMove.style.backgroundColor = '#A7D12955';
        newTagMove.style.boxShadow = '-10px -10px 20px 7px #A7D12955 inset';
        newTagMove.style.color = '#FFFFFF55';
        newTagMove.style.filter = 'blur(0px)';
      });
      newTagMove.addEventListener('mouseout', function (e) {
        //newTagMove.style.backgroundColor = 'transparent';
        newTagMove.style.boxShadow = '-10px -10px 20px 7px var(--color_font_section) inset';
        newTagMove.style.color = '#FFFFFF09';
        newTagMove.style.filter = 'blur(1px)';
      });
      this.initPosMouseX = 0;
      this.initPosMouseY = 0;
      newTagMove.addEventListener('mousedown', function (e) {
        _this.initPosMouseX = e.clientX;
        _this.initPosMouseY = e.clientY;
      });
      var directionX = 0;
      var directionY = 0;
      sectionHome.addEventListener('mouseup', function (e) {
        if (_this.initPosMouseX != 0) {
          if (_this.initPosMouseX - e.clientX > 0) {
            directionX = -10;
          } else {
            directionX = +10;
          }

          if (_this.initPosMouseY - e.clientY > 0) {
            directionY = -10;
          } else {
            directionY = +10;
          }

          for (var index = 0; index < 20; index++) {
            setTimeout(function () {
              _this.speedX += directionX;
              _this.speedY += directionY;
            }, 50);
          }

          _this.initPosMouseX = 0;
          _this.initPosMouseY = 0;
        }
      });
    }
  }, {
    key: "updatePosition",
    value: function updatePosition(timeElapsed) {
      this.posX += this.speedX * timeElapsed;
      this.posY += this.speedY * timeElapsed;
    }
  }]);

  return TagBubble;
}();

var timeElapsed = 0;
var oldTimeStamp = 0;
var bubblesContainer = [];
var resetCounter = 0;

var initAnimation = function initAnimation() {
  createBubbleTags();
  window.requestAnimationFrame(function (timeStamp) {
    animationLoop(timeStamp);
  });
};

var createBubbleTags = function createBubbleTags() {
  for (var index = 0; index < numbertags; index++) {
    var positionTagX = GetRandomNumber(50, window.innerWidth - 50);
    var positionTagY = GetRandomNumber(100, window.innerHeight - 20);
    bubblesContainer.push(new TagBubble(positionTagX, positionTagY, GetRandomNumber(-20, 70), GetRandomNumber(-20, 70), GetRandomNumber(1, 10)));
  }

  for (var i = 0; i < bubblesContainer.length; i++) {
    bubblesContainer[i].createItem();
    bubblesContainer[i].mass = bubblesContainer[i].width * 150;
  }
};

var animationLoop = function animationLoop(timeStamp) {
  timeElapsed = (timeStamp - oldTimeStamp) / 1000;
  oldTimeStamp = timeStamp;

  for (var i = 0; i < bubblesContainer.length; i++) {
    bubblesContainer[i].updatePosition(timeElapsed);
  }

  UpdatePosition();
  detectCollisions();
  borderCollisionDetection();
  window.requestAnimationFrame(function (timeStamp) {
    return animationLoop(timeStamp);
  });
};

var UpdatePosition = function UpdatePosition() {
  for (var index = 0; index < containerTags.length; index++) {
    containerTags[index].style.left = bubblesContainer[index].posX + "px";
    containerTags[index].style.top = bubblesContainer[index].posY + "px";
  }
};

var detectCollisions = function detectCollisions() {
  var objectOne;
  var objectTwo;

  for (var i = 0; i < bubblesContainer.length; i++) {
    bubblesContainer[i].isColliding = false;
  }

  for (var _i = 0; _i < bubblesContainer.length; _i++) {
    objectOne = bubblesContainer[_i];

    for (var j = _i + 1; j < bubblesContainer.length; j++) {
      objectTwo = bubblesContainer[j];

      if (intersectionCircles(objectOne.posX, objectOne.posY, objectOne.width / 2, objectTwo.posX, objectTwo.posY, objectTwo.width / 2)) {
        objectOne.isColliding = true;
        objectTwo.isColliding = true;
        var collisionVector = {
          x: objectTwo.posX - objectOne.posX,
          y: objectTwo.posY - objectOne.posY
        };
        var distance = Math.sqrt((objectTwo.posX - objectOne.posX) * (objectTwo.posX - objectOne.posX) + (objectTwo.posY - objectOne.posY) * (objectTwo.posY - objectOne.posY));
        var collisionVectorNorm = {
          x: collisionVector.x / distance,
          y: collisionVector.y / distance
        };
        var relativeVelocityVector = {
          x: objectOne.speedX - objectTwo.speedX,
          y: objectOne.speedY - objectTwo.speedY
        };
        var speed = relativeVelocityVector.x * collisionVectorNorm.x + relativeVelocityVector.y * collisionVectorNorm.y;
        if (speed < 0) break;
        var impulse = 2 * speed / (objectOne.mass + objectTwo.mass);
        objectOne.speedX -= impulse * objectTwo.mass * collisionVectorNorm.x;
        objectOne.speedY -= impulse * objectTwo.mass * collisionVectorNorm.y;
        objectTwo.speedX += impulse * objectOne.mass * collisionVectorNorm.x;
        objectTwo.speedY += impulse * objectOne.mass * collisionVectorNorm.y;
      }
    }
  }
};

var borderCollisionDetection = function borderCollisionDetection() {
  var collisionLimitXLeft = 1;
  var collisionLimitXRight = window.innerWidth - 1;
  var collisionLimitYTop = 80;
  var collisionLimitYBottom = window.innerHeight - 64;
  var speedReset = 0.95;
  var bubble;

  for (var i = 0; i < bubblesContainer.length; i++) {
    bubble = bubblesContainer[i];

    if (bubble.posX < collisionLimitXLeft) {
      bubble.speedX = Math.abs(bubble.speedX) * speedReset;
      bubble.posX = collisionLimitXLeft;
    } else if (bubble.posX > collisionLimitXRight - bubble.width) {
      bubble.speedX = -Math.abs(bubble.speedX) * speedReset;
      bubble.posX = collisionLimitXRight - bubble.width;
    }

    if (bubble.posY < collisionLimitYTop) {
      bubble.speedY = Math.abs(bubble.speedY) * speedReset;
      bubble.posY = collisionLimitYTop;
    } else if (bubble.posY > collisionLimitYBottom - bubble.height) {
      bubble.speedY = -Math.abs(bubble.speedY) * speedReset;
      bubble.posY = collisionLimitYBottom - bubble.height;
    }
  }
};

function intersectionCircles(posXOne, posYOne, radiusOne, posXTwo, posYTwo, radiusTwo) {
  var distanceBetweenCircles = (posXOne - posXTwo) * (posXOne - posXTwo) + (posYOne - posYTwo) * (posYOne - posYTwo);
  return distanceBetweenCircles <= (radiusOne + radiusTwo) * (radiusOne + radiusTwo);
}

function GetRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

function GetRandomNumberFloat(min, max) {
  return Math.random() * (max - min) + min;
}