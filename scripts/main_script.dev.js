"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var DESKTOP_MENU_LINKS = document.querySelectorAll(".menu__list--link");
var DESKTOP_MENU_ITEMS = document.querySelectorAll(".menu__list");
var SELECTED_MENU_ITEM = document.querySelector(".menu__selection");
var presentation = document.querySelector(".landscape__window--text");
var SECTIONS = document.querySelectorAll(".section");
var SECTION_TITLES = document.querySelectorAll(".title");
var SLOGAN = document.querySelector(".home__slogan");
var GREETINGS = document.querySelector(".home__greetings");
var SKILL_CATEGORY_LABELS = document.querySelectorAll(".label__tech");
var ABOUT_PARAGRAPHS = document.querySelectorAll(".aboutme__paragraph");
var ABOUT_PARAGRAPHS_LIST = document.querySelector(".aboutme__paragraph--list");
var CONTACT_MESSAGE = document.querySelector(".contact__type--message");
var SECTION_BUBBLES = document.querySelector(".section__bubbles");
var FOOTER = document.querySelector(".footer");
var SKILLS_CATEGORIES = document.querySelectorAll(".technologies");
var CONTAINER_SKILLS = document.querySelector(".logos");
var PROJECT_CONTAINER = document.querySelector(".projects__container");
var PROJECTS = document.querySelectorAll(".project");
var SELECTED_MOBILE_MENU = document.querySelector(".menumobil__link--select");
var MOBILE_MENU_ITEMS = document.querySelector(".menumobil");
var MODAL = document.querySelector(".modal");
var MODAL_IMAGE = document.querySelector(".modal__image");
var MODAL_BUTTON = document.querySelector(".modal__button");
var SWITCH_LANGUAGE = document.querySelector(".language__check");
var MOBIL_MENU_LINKS = document.querySelectorAll(".link");
var NUMBER_BUBBLE = 20;
var SIZE_BUBBLE = 45;
var NAME_LOGOS = ["html", "css", "javascript", "sass", "pug", "git", "github", "mysql", "react", "csharp", "netcore", "xamarin", "xaml", "c", "vscode", "vs", "labview", "teststand", "cvi"];
var LANGUAGE = {
  english: {
    header: ["Home", "Skills", "Projects", "About Me", "Contact"],
    section: ["HOME", "SKILLS", "PROJECTS", "ABOUT ME", "CONTACT"],
    intro: ["Hey👋, I'm", '"Transforming concepts and design, into code"'],
    skills: ["Web", "Mobil", "Desktop", "Test & Measurement", "Tools"],
    about: ["THE BEGINNING", "I am a self-taught person, and passionate about programming. From a very young age I was very interested in technology, first electronics, I liked to disassemble electronic objects and see how they worked inside.", "I decided to study electronics, where I came across microcontrollers and so I was able to combine my two current passions, electronics and programming.", "I started working in the electronics field as a diagnostic technician.", "I set up my own business, where I offered computer rental and repair services. Here I started to delve into the world of programming in a self-taught way, with ActionScript and Visual Basic.", "I started working as a mechanical assembly technician for the electronics industry, where test and automation equipment is manufactured for companies that manufacture electronic products.", "I was promoted to hardware technician, where I did the routing and wiring of the electrical and electronic part of the equipment.", "I was promoted to Hardware Engineer, where I did the electrical diagrams and debugging of the electrical and electronics.", [{
      devsoft: ["I was promoted to Development Engineer, my responsibilities:", "Logical part of the equipment by programming (C, C#, LabView, TestStand, CVI, PLC Siemens(TIA Portal))", "BOM(Bill Of Materials)", "Realization of electrical diagrams", "Debugging of the code and electrical part", "Equipment manual", "Delivery and installation of the equipment on site to the customer"]
    }], "I had the opportunity to start a business, and I decided to work as a freelance, where I do residential electrical installation work, and in the area of development with languages such as C #, for mobile and desktop applications.", "Since then I have dedicated myself independently to study several programming languages, I focus on Web Development, and from the first day I have been excited about this world, I want to work in this fascinating area, at the moment I am in the Front-End area and little by little I want to go deeper into the Back-End. And above all, never stop learning."],
    contact: ["To know more about me, and to be able to work together you can find me at:"],
    footer: ["Made in <img class='footer__copyright--icon' title='México' src='./assets/icons/mexico-icon.ico' alt='mexico flag' loading='lazy' draggable='false'> by Alejandro Garcia Alonso"]
  },
  spanish: {
    header: ["Inicio", "Habilidades", "Proyectos", "Sobre mi", "Contacto"],
    section: ["INICIO", "HABILIDADES", "PROYECTOS", "SOBRE MI", "CONTACTO"],
    intro: ["Hola👋, Soy", '"Transformando conceptos y diseño, en código"'],
    skills: ["Web", "Móvil", "Escritorio", "Prueba y Medición", "Herramientas"],
    about: ["EL PRINCIPIO", "Soy una persona autodidacta, y apasionado por la programación. Desde muy pequeño me interesó mucho la tecnología, primero la electrónica, me gustaba desmontar objetos electrónicos y ver como funcionaban por dentro.", "Decidí estudiar la carrera de electrónica, donde me encontré con los microcontroladores y así pude combinar mis dos actuales pasiones, la electrónica y la programación.", "Comencé a trabajar en el campo de la electrónica como tecnico de diagnostico.", "Emprendi mi negocio donde ofrecía servicios de renta y reparación de computadoras. Aquí comencé a adentrarme más en el mundo de la programación de forma autodidacta, con ActionScript y Visual Basic.", "Empecé a trabajar como técnico de ensamble mecanico, para la industria electrónica, donde se fabrican equipos de prueba y automatización para empresas que fabrican productos electrónicos.", "Fui ascendido a técnico de hardware, donde realizaba el ruteo y cableado de la parte eléctrica y electrónica de los equipos.", "Fui ascendido a Ingeniero de Hardware, donde realizaba los diagramas eléctricos y la depuración de la parte eléctrica y electrónica.", [{
      devsoft: ["Fui ascendido a Ingeniero de Desarrollo, mis responsabilidades:", "Parte lógica de los equipos mediante programación (C, C#, LabView, TestStand, CVI, PLC Siemens(TIA Portal))", "BOM(Lista de materiales)", "Realización de esquemas eléctricos", "Depuración del código y parte electrica", "Manual del equipo", "Entrega e instalación del equipo en sitio al cliente"]
    }], "Tuve la oportunidad de montar un negocio, y decidí trabajar como freelance, donde realizo trabajos de instalación eléctrica residencial, y en el área de desarrollo con lenguajes como C#, para aplicaciones móviles y de escritorio.", "Desde entonces me he dedicado de manera autonoma a estudiar varios lenguajes de programación, me enfoque en Desarrollo Web, y desde el primer día he estado entusiasmado con este mundo, quiero trabajar en esta fascinante área, de momento estoy en el área de Front-End y poco a poco quiero ir adentrandome en el Back-End. Y sobre todo, nunca dejar de aprender."],
    contact: ["Para saber más sobre mí, y poder trabajar juntos puedes encontrarme en:"],
    footer: ["Hecho en <img class='footer__copyright--icon' title='México' src='./assets/icons/mexico-icon.ico' alt='mexico flag' loading='lazy' draggable='false'> por Alejandro Garcia Alonso"]
  }
};
var containerTags = [];
var selectedLanguage = "spanish";
var textPresentation = [];
var language = selectedLanguage == "spanish" ? LANGUAGE.spanish : LANGUAGE.english;

onload = function onload() {
  SELECTED_MENU_ITEM.style.left = "0px";
  SELECTED_MENU_ITEM.style.top = "0px";
  CreateLogoSkill(0);
  CreateProject();
  initAnimation();
  scroll(0, 0);
  selectLanguage();
};

var mobileDetect = function mobileDetect() {
  var check = false;

  (function (a) {
    if (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0, 4))) check = true;
  })(navigator.userAgent || navigator.vendor || window.opera);

  return check;
}; ////SELECT LANGUAGE//////


SWITCH_LANGUAGE.addEventListener('change', function () {
  selectedLanguage = SWITCH_LANGUAGE.checked ? "english" : "spanish";
  language = selectedLanguage == "spanish" ? LANGUAGE.spanish : LANGUAGE.english;
  setTimeout(function () {
    selectLanguage();
  }, 300);
});

var selectLanguage = function selectLanguage() {
  DESKTOP_MENU_LINKS.forEach(function (menu, index) {
    menu.innerText = language.header[index];
  });
  SECTION_TITLES.forEach(function (section, index) {
    section.innerText = language.section[index];
  });
  GREETINGS.innerHTML = language.intro[0];
  SLOGAN.innerHTML = language.intro[1];
  SKILL_CATEGORY_LABELS.forEach(function (label, index) {
    label.innerText = language.skills[index];
  });
  ABOUT_PARAGRAPHS.forEach(function (paragraph, index) {
    if (paragraph.nodeName === "P") {
      paragraph.innerText = language.about[index + 1];
    } else {
      for (var i = 0; i < ABOUT_PARAGRAPHS_LIST.childElementCount; i++) {
        ABOUT_PARAGRAPHS_LIST.children[i].innerText = language.about[8][0].devsoft[i];
      }
    }
  });
  CONTACT_MESSAGE.innerHTML = language.contact[0];
  FOOTER.children[0].innerHTML = language.footer[0];
};

var contentPresentation = function contentPresentation() {
  textPresentation = SWITCH_LANGUAGE.checked ? ['Software Developer', 'Front-End Developer', 'Electrical Design'] : ['Desarrollador de Sofware', 'Desarrollador Front-End', 'Diseño Electrico'];
};

for (var index = 0; index < DESKTOP_MENU_LINKS.length; index++) {
  DESKTOP_MENU_LINKS.item(index).addEventListener('mouseup', function (e) {
    DESKTOP_MENU_LINKS.forEach(function (elementMenuUnSelected) {
      elementMenuUnSelected.style.color = "var(--color_font)";
    });
    setTimeout(function () {
      e.target.style.color = "var(--color_activated)";
    }, 1500);

    if (e.target.innerHTML === "HOME") {
      setTimeout(function () {
        scroll(0, 0);
      }, 0);
    }
  });
  DESKTOP_MENU_LINKS.item(index).addEventListener('mouseover', function (e) {
    e.target.style.color = "var(--color_activated)";
  });
  DESKTOP_MENU_LINKS.item(index).addEventListener('mouseout', function (e) {
    e.target.style.color = "var(--color_font)";
  });
}

setTimeout(function () {
  var timeInit;
  var timeElapsed;
  var numLetter = 0;
  var reverse = false;
  var textReverse = '';
  var textNumber = 0;
  var delayON = true;
  var delay = 3500;
  setInterval(function () {
    contentPresentation();
    if (delayON) timeInit = new Date().getTime();

    if (numLetter < textPresentation[textNumber].length && !reverse) {
      presentation.innerHTML += textPresentation[textNumber][numLetter];
      textReverse = textPresentation[textNumber];
      numLetter += 1;
      delayON = false;
    } else {
      reverse = true;
      timeElapsed = new Date().getTime() - timeInit;
    }

    if (reverse && timeElapsed > delay) {
      presentation.innerHTML = textReverse.substring(0, numLetter);
      numLetter -= 1;

      if (presentation.innerHTML.length === 0) {
        reverse = false;
        textNumber += 1;
        numLetter = 0;
        delayON = true;

        if (textNumber > textPresentation.length - 1) {
          textNumber = 0;
        }
      }
    }
  }, 100);
}, 1600);

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

      var NEW_BUBBLE = document.createElement("div");
      NEW_BUBBLE.style.backgroundImage = "url('./assets/icons/" + NAME_LOGOS[GetRandomNumber(0, NAME_LOGOS.length - 1)] + "-logo.svg')";
      NEW_BUBBLE.classList = "tag__move";
      NEW_BUBBLE.style.left = "".concat(this.posX, "px");
      NEW_BUBBLE.style.top = "".concat(this.posY, "px");
      containerTags.push(NEW_BUBBLE);
      SECTION_BUBBLES.appendChild(NEW_BUBBLE); //let fontSize = parseFloat(window.getComputedStyle(NEW_BUBBLE, null).getPropertyValue('font-size'));

      NEW_BUBBLE.style.width = "".concat(Math.floor(NEW_BUBBLE.getBoundingClientRect().width + SIZE_BUBBLE), "px"); //NEW_BUBBLE.style.paddingTop = `${(Math.floor(NEW_BUBBLE.getBoundingClientRect().width / 2) - fontSize / 1.5)}px`;

      NEW_BUBBLE.style.height = "".concat(Math.floor(NEW_BUBBLE.getBoundingClientRect().width), "px");
      this.width = Math.floor(NEW_BUBBLE.getBoundingClientRect().width);
      this.height = Math.floor(NEW_BUBBLE.getBoundingClientRect().height); //console.log(SECTION_BUBBLES.getBoundingClientRect().width)
      //console.log(SECTION_BUBBLES.getBoundingClientRect().height)

      this.initPosMouseX = 0;
      this.initPosMouseY = 0;
      NEW_BUBBLE.addEventListener('mousedown', function (e) {
        _this.initPosMouseX = e.clientX;
        _this.initPosMouseY = e.clientY;
      });
      var directionX = 0;
      var directionY = 0;
      BODY.addEventListener('mouseup', function (e) {
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

          for (var _index = 0; _index < 20; _index++) {
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

var initAnimation = function initAnimation() {
  setTimeout(function () {
    createBubbleTags();
    window.requestAnimationFrame(function (timeStamp) {
      animationLoop(timeStamp);
    });
  }, 200);
};

var createBubbleTags = function createBubbleTags() {
  for (var _index2 = 0; _index2 < NUMBER_BUBBLE; _index2++) {
    var positionTagX = GetRandomNumber(50, window.innerWidth - 50);
    var positionTagY = GetRandomNumber(100, SECTION_BUBBLES.getBoundingClientRect().height - 20);
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
  for (var _index3 = 0; _index3 < containerTags.length; _index3++) {
    containerTags[_index3].style.left = bubblesContainer[_index3].posX + "px";
    containerTags[_index3].style.top = bubblesContainer[_index3].posY + "px";
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
  var COLLISION_LIMIT_X_LEFT = 1;
  var COLLISION_LIMIT_X_RIGHT = window.outerWidth - 30;
  var COLLISION_LIMIT_Y_TOP = 57;
  var COLLISION_LIMIT_Y_BOTTOM = SECTION_BUBBLES.getBoundingClientRect().height - 57;
  var SPEED_RESET = 0.95;
  var bubble;

  for (var i = 0; i < bubblesContainer.length; i++) {
    bubble = bubblesContainer[i];

    if (bubble.posX < COLLISION_LIMIT_X_LEFT) {
      bubble.speedX = Math.abs(bubble.speedX) * SPEED_RESET;
      bubble.posX = COLLISION_LIMIT_X_LEFT;
    } else if (bubble.posX > COLLISION_LIMIT_X_RIGHT - bubble.width) {
      bubble.speedX = -Math.abs(bubble.speedX) * SPEED_RESET;
      bubble.posX = COLLISION_LIMIT_X_RIGHT - bubble.width;
    }

    if (bubble.posY < COLLISION_LIMIT_Y_TOP) {
      bubble.speedY = Math.abs(bubble.speedY) * SPEED_RESET;
      bubble.posY = COLLISION_LIMIT_Y_TOP;
    } else if (bubble.posY > COLLISION_LIMIT_Y_BOTTOM - bubble.height) {
      bubble.speedY = -Math.abs(bubble.speedY) * SPEED_RESET;
      bubble.posY = COLLISION_LIMIT_Y_BOTTOM - bubble.height;
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
} ////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////--------- SECTION SKILLS ---------/////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////


var SOURCE_LOGOS = "./assets/icons/";
var SELECT_SKILLS = document.querySelector('.skills__select');
var SELECT_BACK = document.querySelector('.skills__back');
var SELECT_NEXT = document.querySelector('.skills__next');
var SELECT_TEXT = document.querySelector('.skills__selecttitle');
var selectedSkill = 0;
skillSelect();
SELECT_BACK.addEventListener('click', function () {
  if (selectedSkill > 0) {
    selectedSkill--;
    CreateLogoSkill(selectedSkill);
    skillSelect();
  }
});
SELECT_NEXT.addEventListener('click', function () {
  if (selectedSkill < 4) {
    selectedSkill++;
    CreateLogoSkill(selectedSkill);
    skillSelect();
  }
});

function skillSelect() {
  SELECT_TEXT.innerHTML = language.skills[selectedSkill];
}

var _loop = function _loop(_index4) {
  SKILLS_CATEGORIES[_index4].addEventListener("click", function (e) {
    CreateLogoSkill(_index4);
  });
};

for (var _index4 = 0; _index4 < SKILLS_CATEGORIES.length; _index4++) {
  _loop(_index4);
}

var SKILLS = [["html", "css", "javascript", "react", "sass", "pug", "git", "github", "vscode"], ["csharp", "netcore", "xaml", "git", "github", "vs"], ["csharp", "netcore", "xamarin", "xaml", "vs", "git", "github"], ["c", "csharp", "xaml", "labview", "siemens", "git", "github"], ["vscode", "vs", "git", "labview", "teststand", "cvi", "tiaportal"]];
var SKILL_NAMES = [["html", "css", "javascript", "react js", "sass", "pug", "git", "git hub", "visual studio code"], ["c#", "netcore", "xaml", "git", "github", "visual studio"], ["c#", "netcore", "xamarin forms", "xaml", "visual studio", "git", "github"], ["c", "c#", "xaml", "labview (Graphic)", "scl, kop", "git", "github"], ["visual studio code", "visual studio", "git", "labview", "teststand", "lab/windows cvi", "tia portal"]];

var CreateLogoSkill = function CreateLogoSkill(numberSkill) {
  do {
    CONTAINER_SKILLS.removeChild(CONTAINER_SKILLS.lastChild);
  } while (CONTAINER_SKILLS.lastChild.className === "skills__name");

  for (var _index5 = 0; _index5 < SKILLS[numberSkill].length; _index5++) {
    var NEW_LOGO_TECH = document.createElement("div");
    NEW_LOGO_TECH.classList = "skills__name";
    CONTAINER_SKILLS.appendChild(NEW_LOGO_TECH);
    NEW_LOGO_TECH.style.zIndex = "1";
    var NEW_LOGO_BUBBLE = document.createElement("div");
    NEW_LOGO_BUBBLE.classList = "skills__bubble";
    NEW_LOGO_TECH.appendChild(NEW_LOGO_BUBBLE);
    var NEW_LOGO_IMAGE = document.createElement("img");
    NEW_LOGO_IMAGE.classList = "logo";
    NEW_LOGO_IMAGE.src = SOURCE_LOGOS + SKILLS[numberSkill][_index5] + "-logo.svg";
    NEW_LOGO_IMAGE.alt = "logo " + SKILLS[numberSkill][_index5];
    NEW_LOGO_BUBBLE.appendChild(NEW_LOGO_IMAGE);
    var NEW_LOGO_NAME = document.createElement("span");
    NEW_LOGO_NAME.textContent = SKILL_NAMES[numberSkill][_index5];
    NEW_LOGO_TECH.appendChild(NEW_LOGO_NAME);
  }
}; ////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////--------- SECTION PROJECTS ---------/////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////


var projectsZoom = document.querySelectorAll(".project__options--zoom");
var BODY = document.querySelector("body");
var SOURCE_PHOTOS = "./assets/photos/project_";
var SOURCE_PREVIEW_PHOTOS = "./assets/photos/preview_project_";
var Title = [];
var TECHNOLOGIES = [["html", "css", "javascript", "pug", "sass"], ["csharp", "netcore", "xaml", "sql", "mysql", "git"], ["csharp", "netcore", "xamarin", "xaml"], ["c", "csharp", "xaml", "labview"], ["vscode", "vs", "git", "labview"]];
var REPOSITORIES = ["https://aletzman.github.io/", "https://github.com/AletzMan", "https://aletzman.github.io/"];

var CreateProject = function CreateProject() {
  for (var _index6 = 0; _index6 < REPOSITORIES.length - 1; _index6++) {
    var NEW_PROJECT = PROJECTS[0].cloneNode(true);
    PROJECT_CONTAINER.appendChild(NEW_PROJECT);
  }

  Title = ["Drawing Board", "Test Sequence", "Electronic Encyclopedia"];
  EditProjects();
};

var EditProjects = function EditProjects() {
  var PROJECTS = document.querySelectorAll(".project");
  var PROJECTS_TITLE = document.querySelectorAll(".project__title");
  var PROJECTS_TECHNOLOGIES = document.querySelectorAll(".project__technologies");
  var PROJECT_IMAGE = document.querySelectorAll(".project__image");
  var PROJECT_REPOSITORY = document.querySelectorAll(".project__options--repository");
  var projectsPreview = document.querySelectorAll(".project__options--linkpreview"); //const PROJECT_CORTAIN_ONE = document.querySelectorAll(".project__cortain--one");
  //const PROJECT_CORTAIN_TWO = document.querySelectorAll(".project__cortain--two");

  projectsZoom = document.querySelectorAll(".project__options--zoom");

  var _loop2 = function _loop2(_index7) {
    //PROJECT_CORTAIN_ONE[index].style.display = mobileDetect() ? 'none' : 'block';
    //PROJECT_CORTAIN_TWO[index].style.display = mobileDetect() ? 'none' : 'block';
    //PROJECTS_TITLE[index].style.display = !mobileDetect() ? 'none' : 'block';
    PROJECTS_TITLE[_index7].innerHTML = Title[_index7];

    TECHNOLOGIES[_index7].forEach(function (namelogo) {
      var NEW_CONTAINER_TECH = document.createElement("div");
      NEW_CONTAINER_TECH.classList = "project__technologies--container";

      PROJECTS_TECHNOLOGIES[_index7].appendChild(NEW_CONTAINER_TECH);

      var NEW_IMAGE_TECH = document.createElement("img");
      NEW_IMAGE_TECH.src = SOURCE_LOGOS + namelogo + "-logo.svg";
      NEW_IMAGE_TECH.alt = "logo" + namelogo;
      NEW_IMAGE_TECH.classList = "project__technologies--image";
      NEW_CONTAINER_TECH.appendChild(NEW_IMAGE_TECH);
      var NEW_IMAGE_DESCRIPTION = document.createElement("span");
      NEW_IMAGE_DESCRIPTION.textContent = namelogo;
      NEW_IMAGE_DESCRIPTION.classList = "project__technologies--label";
      NEW_CONTAINER_TECH.appendChild(NEW_IMAGE_DESCRIPTION);
    });

    PROJECT_IMAGE[_index7].src = SOURCE_PREVIEW_PHOTOS + _index7 + ".jpg";
    PROJECT_REPOSITORY[_index7].href = REPOSITORIES[_index7]; //PROJECT_CORTAIN_ONE[index].innerText = Title[index].split(' ')[0];
    //PROJECT_CORTAIN_TWO[index].innerText = Title[index].split(' ')[1];
  };

  for (var _index7 = 0; _index7 < PROJECTS.length; _index7++) {
    _loop2(_index7);
  }

  AsignEvent();
  var PROJECT_CONTAINER = document.querySelectorAll(".project__container");

  var _loop3 = function _loop3(_index8) {
    /*	PROJECT_CONTAINER[index].addEventListener('mouseenter', (e) => {
    		if ((e.offsetX < 160 && e.offsetX >= 0 && e.offsetY < 100) || (e.offsetY < 160 && e.offsetY >= 0 && e.offsetX < 100)) {
    			PROJECT_CONTAINER[index].style.transform = 'rotateY(-5deg) rotateX(5deg)';
    		}
    		if ((e.offsetX > 160 && e.offsetX <= 315 && e.offsetY < 100) || (e.offsetY < 160 && e.offsetY >= 0 && e.offsetX > 100)) {
    			PROJECT_CONTAINER[index].style.transform = 'rotateY(5deg) rotateX(5deg)';
    		}
    		if ((e.offsetX < 160 && e.offsetX >= 0 && e.offsetY > 100) || (e.offsetY > 160 && e.offsetY <= 315 && e.offsetX < 100)) {
    			PROJECT_CONTAINER[index].style.transform = 'rotateY(-5deg) rotateX(-5deg)';
    		}
    		if ((e.offsetX > 160 && e.offsetX <= 315 && e.offsetY > 100) || (e.offsetY > 160 && e.offsetY <= 315 && e.offsetX > 100)) {
    			PROJECT_CONTAINER[index].style.transform = 'rotateY(5deg) rotateX(-5deg)';
    		}
    	})*/
    PROJECT_CONTAINER[_index8].addEventListener('mouseleave', function (e) {
      PROJECT_CONTAINER[_index8].style.transform = 'rotate(0deg)'; //PROJECTS[index].classList.toggle('project__rotate');
    });

    PROJECT_CONTAINER[_index8].addEventListener('mousemove', function (e) {
      console.log(PROJECT_CONTAINER[_index8].offsetY);
      var mousePosX;
      var mousePosY;

      if (e.offsetX > 160) {
        mousePosX = Math.abs(80 - e.offsetX / 2) * 2;
      } else if (e.offsetX < 160) {
        mousePosX = (160 - e.offsetX) * -1;
      }

      if (e.offsetY > 160) {
        mousePosY = Math.abs(80 - e.offsetY / 2) * 2;
      } else if (e.offsetY < 160) {
        mousePosY = (160 - e.offsetY) * -1;
      } //console.log(mousePosY/15)


      PROJECT_CONTAINER[_index8].style.transform = "rotateY(".concat(mousePosX / 15 * -1, "deg) rotateX(").concat(mousePosY / 15, "deg)");
    });
  };

  for (var _index8 = 0; _index8 < PROJECT_CONTAINER.length; _index8++) {
    _loop3(_index8);
  }
};

var containerCreate = false;

var AsignEvent = function AsignEvent() {
  projectsZoom.forEach(function (element, index) {
    element.addEventListener("mouseup", function () {
      MODAL_IMAGE.src = SOURCE_PHOTOS + index + ".jpg";
      MODAL.style.transform = 'scale(1)';
      BODY.style.overflowX = "hidden";
      BODY.style.overflowY = "hidden";
    });
  });
};

window.addEventListener("mouseup", function (event) {
  if (event.target == MODAL) {
    MODAL.style.transform = 'scale(0)';
    BODY.style.overflowX = "auto";
    BODY.style.overflowY = "auto";
  }
});
MODAL_BUTTON.addEventListener("mouseup", function (event) {
  MODAL.style.transform = 'scale(0)';
  BODY.style.overflowX = "auto";
  BODY.style.overflowY = "auto";
}); ////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////--------- MENU MOBIL ---------/////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////

var NAME_TAG_MENU = ["HOME", "SKILLS", "PROJECTS", "ABOUT", "CONTACT"];
var positionMenuselected = 0;
var indexMenuCurrent = 0;
var indexMenuBefore = 0;
var numberOfSectionsDisplaced = 0;

var _loop4 = function _loop4(_index9) {
  MOBIL_MENU_LINKS.item(_index9).addEventListener('mousedown', function (e) {
    SECTIONS.forEach(function (section) {
      section.style.opacity = 0;
    });
    indexMenuBefore = indexMenuCurrent;
    indexMenuCurrent = _index9;
    numberOfSectionsDisplaced = Math.abs(indexMenuCurrent - indexMenuBefore);
    console.log(SECTIONS[_index9].getBoundingClientRect().height);
    var scrollPosition = 0;

    for (var numberSection = 0; numberSection < _index9; numberSection++) {
      scrollPosition += SECTIONS[numberSection].getBoundingClientRect().height + 80;
    }

    scrollPosition -= 16;
    scroll(0, scrollPosition);
    setTimeout(function () {
      SECTIONS.forEach(function (section) {
        section.style.opacity = 1;
      });
    }, 500);
  });
};

for (var _index9 = 0; _index9 < MOBIL_MENU_LINKS.length; _index9++) {
  _loop4(_index9);
}

window.addEventListener("resize", function () {
  positionMenuselected = MOBILE_MENU_ITEMS.getBoundingClientRect().width / 16 / 5 * (indexMenuCurrent + 1) - SELECTED_MOBILE_MENU.getBoundingClientRect().width / 16 - 0.2;
  SELECTED_MOBILE_MENU.style.left = "".concat(positionMenuselected, "rem");
});
document.addEventListener("scroll", function () {
  if (scrollY) {
    var designMobil = window.getComputedStyle(MOBILE_MENU_ITEMS, null).getPropertyValue("display") == "none" ? false : true;

    var _loop5 = function _loop5(_index10) {
      if (SECTIONS[_index10].getBoundingClientRect().y < 350 && SECTIONS[_index10].getBoundingClientRect().y > -20) {
        if (designMobil) {
          positionMenuselected = MOBILE_MENU_ITEMS.getBoundingClientRect().width / 16 / 5 * (_index10 + 1) - SELECTED_MOBILE_MENU.getBoundingClientRect().width / 16 - 0;
          SELECTED_MOBILE_MENU.style.left = "".concat(positionMenuselected, "rem");
          setTimeout(function () {
            MOBIL_MENU_LINKS.forEach(function (section) {
              section.style.top = "0.65rem";
            });
            MOBIL_MENU_LINKS[_index10].style.top = "0rem";
            SELECTED_MOBILE_MENU.innerText = NAME_TAG_MENU[_index10];
          }, 200);
        } else {
          SELECTED_MENU_ITEM.style.left = DESKTOP_MENU_ITEMS.item(_index10).getBoundingClientRect().left - DESKTOP_MENU_ITEMS.item(0).getBoundingClientRect().left - 1 + "px";
          DESKTOP_MENU_LINKS.forEach(function (elementMenuUnSelected) {
            elementMenuUnSelected.style.color = "var(--color_font)";
          });
          DESKTOP_MENU_LINKS.item(_index10).style.color = "var(--color_activated)";
        }
      }
    };

    for (var _index10 = 0; _index10 < SECTIONS.length; _index10++) {
      _loop5(_index10);
    }
  }
});