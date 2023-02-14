const DESKTOP_MENU_LINKS = document.querySelectorAll(".menu__list--link");
const DESKTOP_MENU_ITEMS = document.querySelectorAll(".menu__list");
const SELECTED_MENU_ITEM = document.querySelector(".menu__selection");
const presentation = document.querySelector(".landscape__window--text");
const SECTIONS = document.querySelectorAll(".section");
const SECTION_TITLES = document.querySelectorAll(".title");
const SLOGAN = document.querySelector(".home__slogan");
const GREETINGS = document.querySelector(".home__greetings");
const SKILL_CATEGORY_LABELS = document.querySelectorAll(".label__tech");
const ABOUT_PARAGRAPHS = document.querySelectorAll(".aboutme__paragraph");
const ABOUT_PARAGRAPHS_LIST = document.querySelector(".aboutme__paragraph--list");
const CONTACT_MESSAGE = document.querySelector(".contact__type--message");
const SECTION_BUBBLES = document.querySelector(".section__bubbles");
const FOOTER = document.querySelector(".footer");
const SKILLS_CATEGORIES = document.querySelectorAll(".technologies");
const CONTAINER_SKILLS = document.querySelector(".logos");
const PROJECT_CONTAINER = document.querySelector(".projects__container");
const PROJECTS = document.querySelectorAll(".project");
const SELECTED_MOBILE_MENU = document.querySelector(".menumobil__link--select");
const MOBILE_MENU_ITEMS = document.querySelector(".menumobil");
const MODAL = document.querySelector(".modal");
const MODAL_IMAGE = document.querySelector(".modal__image");
const MODAL_BUTTON = document.querySelector(".modal__button");
const SWITCH_LANGUAGE = document.querySelector(".language__check");
const MOBIL_MENU_LINKS = document.querySelectorAll(".link");

const inputName = document.querySelector('.form__name');
const inputEmail = document.querySelector('.form__email');
const inputMessage = document.querySelector('.form__message');
const labelName = document.querySelector('.form__label--name');
const labelEmail = document.querySelector('.form__label--email');
const labelMessage = document.querySelector('.form__label--message');
const loading = document.querySelector('.form__loading');
const loadingLabel = document.querySelector('.form__labelloading');
const errorName = document.querySelector('.form__errorname');
const errorEmail = document.querySelector('.form__erroremail');
const errorMessage = document.querySelector('.form__errormessage');
const submitButton = document.querySelector('.form__button');
const linkHome = document.querySelector('.header__link');
const linkGithub = document.querySelectorAll('.link__github');
const linkLinkedin = document.querySelectorAll('.link__linkedin');
const linkEmail = document.querySelectorAll('.link__mail');
const scrollIcon = document.querySelector('.scrollicon');


const NUMBER_BUBBLE = 20;
const SIZE_BUBBLE = 45;
const NAME_LOGOS = ["html", "css", "javascript", "sass", "pug", "git", "github", "mysql", "react", "csharp", "netcore", "xamarin", "xaml", "c", "vscode", "vs", "labview", "teststand", "cvi"];




const LANGUAGE = {
	english: {
		header: ["Home", "Skills", "Projects", "About Me", "Contact"],
		section: ["HOME", "SKILLS", "PROJECTS", "ABOUT ME", "CONTACT"],
		sectionLink: ["Go to home section", "Go to skills section", "Go to projects section", "Go to About me section", "Go to contact section"],
		intro: ["Hey👋, I'm", '"Transforming concepts and design, into code"'],
		skills: ["Web", "Mobil", "Desktop", "Test & Measurement", "Tools"],
		about: [
			"THE BEGINNING",
			"I am a self-taught person, since I was a child I was very interested in technology, especially electronics and programming.",
			"I studied electronics, where I learned about microcontrollers and was able to combine my two current passions, electronics and programming.",
			"I started working in the electronics field as a diagnostic technician.",
			"I started my own computer rental and repair business. Here I started to delve into the world of programming with ActionScript and Visual Basic.",
			"I worked as a mechanical assembly technician for the electronics industry, where test and automation equipment is manufactured.",
			"In the same company I got the position of hardware technician, where I did the routing and wiring of the electrical and electronic part of the equipment.",
			"I worked as a Hardware Engineer, where I made the electrical diagrams and the debugging of the electrical and electronic part.",
			"In the position of Development Engineer, with C, C# and PLC languages.",
			"I had the opportunity to start a business, and I decided to work as a freelance, where I do residential electrical installation work, and in the area of development with languages such as C #, for mobile and desktop applications.",
			"I have dedicated myself to study several programming languages, focusing on Web Development, I want to work in this fascinating area, at the moment I am in the Front-End area and little by little I want to go into the Back-End."
		],
		contact: {
			intro: "To know more about me, and to be able to work together you can find me at:",
			name: { label: "Name", placeholder: "Your name", error: "Please, fill in the field" },
			email: { label: "E-mail", placeholder: "example@email.com", error: { empty: "Please, fill in the field", format: "Invalid mail format" } },
			message: { label: "Message", placeholder: "Your message", error: "Please, fill in the field" },
			button: "Send",
			notification: { send: "Sending..", sendOK: "Message sent successfully", sendError: "The message could not be sent, please try again.", }
		},
		footer: ["Made in <img class='footer__copyright--icon' title='México' src='./assets/icons/mexico-icon.ico' alt='mexico flag' loading='lazy' draggable='false'> by Alejandro Garcia Alonso"],
		socialMedia: {
			github: "Link to GitHub from Alejandro",
			linkedin: "Link to Linkedin from Alejandro",
			email: "Link to send email to Alejandro",
		}
	},
	spanish: {
		header: ["Inicio", "Habilidades", "Proyectos", "Sobre mi", "Contacto"],
		section: ["INICIO", "HABILIDADES", "PROYECTOS", "SOBRE MI", "CONTACTO"],
		sectionLink: ["Ir a la sección inicio", "Ir a la sección habilidades", "Ir a la sección proyectos", "Ir a la sección sobre mi", "Ir a la sección contact"],
		intro: ["Hola👋, Soy", '"Transformando conceptos y diseño, en código"'],
		skills: ["Web", "Móvil", "Escritorio", "Prueba y Medición", "Herramientas"],
		about: [
			"EL PRINCIPIO",
			"Soy autodidacta, desde pequeño me interesó mucho la tecnología, especialmente la electrónica y la programación.",
			"Estudié electrónica, donde aprendí sobre microcontroladores y pude combinar mis dos pasiones actuales, la electrónica y la programación.",
			"Comencé a trabajar en el campo de la electrónica como tecnico de diagnostico.",
			"Emprendi mi negocio de renta y reparación de computadoras. Aquí comencé a adentrarme más en el mundo de la programación con ActionScript y Visual Basic.",
			"Trabajé como técnico de montaje mecánico para la industria electrónica, donde se fabrican equipos de prueba y automatización.",
			"En la misma empresa obtuve el puesto de técnico de hardware, donde realizaba el ruteado y cableado de la parte eléctrica y electrónica de los equipos.",
			"Trabajé como Ingeniero de Hardware, donde realizaba los esquemas eléctricos y la depuración de la parte eléctrica y electrónica.",
			"En el puesto de Ingeniero de Desarrollo, con lenguajes C, C# y PLC",
			"Autonoma con trabajos de instalación eléctrica residencial, y en el área de desarrollo con lenguajes como C#, para aplicaciones móviles y de escritorio.",
			"Me he dedicado a estudiar varios lenguajes de programación, enfocándome en Desarrollo Web, quiero trabajar en esta fascinante área, de momento estoy en el área de Front-End y poco a poco quiero ir adentrandome en el Back-End."
		],
		contact: {
			intro: "Para saber más sobre mí, y poder trabajar juntos puedes encontrarme en:",
			name: { label: "Nombre", placeholder: "Su nombre", error: "Por favor, rellene el campo" },
			email: { label: "Correo", placeholder: "ejemplo@correo.com", error: { empty: "Por favor, rellene el campo", format: "Formato de correo no válido" } },
			message: { label: "Mensaje", placeholder: "Su mensaje", error: "Por favor, rellene el campo" },
			button: "Enviar",
			notification: { send: "Enviando..", sendOK: "Mensaje enviado correctamente", sendError: "No se ha podido enviar el mensaje, inténtelo de nuevo", }
		},
		footer: ["Hecho en <img class='footer__copyright--icon' title='México' src='./assets/icons/mexico-icon.ico' alt='mexico flag' loading='lazy' draggable='false'> por Alejandro Garcia Alonso"],
		socialMedia: {
			github: "Enlace al GitHub de Alejandro",
			linkedin: "Enlace al Linkedin de Alejandro",
			email: "Enlace para enviar correo a Alejandro",
		}
	}
}

let containerTags = [];
let selectedLanguage = "spanish";
let textPresentation = [];
let language = selectedLanguage == "spanish" ? LANGUAGE.spanish : LANGUAGE.english;


onload = () => {
	SELECTED_MENU_ITEM.style.left = "0px";
	SELECTED_MENU_ITEM.style.top = "0px";
	scrollIcon.children[0].style.display = mobileDetect() ? 'none' : 'block';
	scrollIcon.children[1].style.display = mobileDetect() ? 'block' : 'none';
	console.log(scrollIcon.children[0])
	console.log(scrollIcon.children[1], mobileDetect())
	CreateLogoSkill(0);
	CreateProject();
	initAnimation();
	scroll(0, 0);
	selectLanguage();
}


const mobileDetect = () => {
	let check = false;
	(function (a) { if (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0, 4))) check = true; })(navigator.userAgent || navigator.vendor || window.opera);
	return check;
};

////SELECT LANGUAGE//////
SWITCH_LANGUAGE.addEventListener('change', () => {
	selectedLanguage = SWITCH_LANGUAGE.checked ? "english" : "spanish";
	language = selectedLanguage == "spanish" ? LANGUAGE.spanish : LANGUAGE.english;
	setTimeout(() => {
		selectLanguage();
	}, 300);
})

const selectLanguage = () => {

	DESKTOP_MENU_LINKS.forEach((menu, index) => {
		menu.innerText = language.header[index];
		menu.title = language.sectionLink[index];
	})
	linkHome.title = language.sectionLink[0];
	SECTION_TITLES.forEach((section, index) => {
		section.innerText = language.section[index];
	})
	GREETINGS.innerHTML = language.intro[0];
	SLOGAN.innerHTML = language.intro[1];
	SKILL_CATEGORY_LABELS.forEach((label, index) => {
		label.innerText = language.skills[index];
	})
	ABOUT_PARAGRAPHS.forEach((paragraph, index) => {
		if (paragraph.nodeName === "P") {
			paragraph.innerText = language.about[index + 1];
		}
	})
	CONTACT_MESSAGE.innerHTML = language.contact.intro;
	inputName.placeholder = language.contact.name.placeholder;
	labelName.textContent = language.contact.name.label;
	errorName.textContent = language.contact.name.error;
	inputEmail.placeholder = language.contact.email.placeholder;
	labelEmail.textContent = language.contact.email.label;
	errorEmail.textContent - language.contact.email.error.empty;
	inputMessage.placeholder = language.contact.message.placeholder;
	labelMessage.textContent = language.contact.message.label;
	errorMessage.textContent = language.contact.message.error;
	submitButton.textContent = language.contact.button;
	FOOTER.children[0].innerHTML = language.footer[0];
	linkGithub.forEach(link => link.title = language.socialMedia.github);
	linkLinkedin.forEach(link => link.title = language.socialMedia.linkedin);
	linkEmail.forEach(link => link.title = language.socialMedia.email);
}


const contentPresentation = () => {
	textPresentation = SWITCH_LANGUAGE.checked ?
		['Software Developer', 'Front-End Developer', 'Electrical Design']
		: ['Desarrollador de Software', 'Desarrollador Front-End', 'Diseño Electrico']
}






for (let index = 0; index < DESKTOP_MENU_LINKS.length; index++) {
	DESKTOP_MENU_LINKS.item(index).addEventListener('mouseup', (e) => {
		DESKTOP_MENU_LINKS.forEach(elementMenuUnSelected => {
			elementMenuUnSelected.style.color = "var(--color_font)";
		});
		setTimeout(() => {
			e.target.style.color = "var(--color_activated)";
		}, 1500);
		if (e.target.innerHTML === "HOME") {
			setTimeout(() => {
				scroll(0, 0);
			}, 0);
		}
	})
	DESKTOP_MENU_LINKS.item(index).addEventListener('mouseover', (e) => {
		e.target.style.color = "var(--color_activated)";
	})
	DESKTOP_MENU_LINKS.item(index).addEventListener('mouseout', (e) => {
		e.target.style.color = "var(--color_font)";
	})
}

setTimeout(() => {
	let timeInit;
	let timeElapsed;
	let numLetter = 0;
	let reverse = false;
	let textReverse = '';
	let textNumber = 0;
	let delayON = true;
	const delay = 3500;
	setInterval(() => {
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


class TagBubble {
	constructor(posX, posY, speedX, speedY, mass) {
		this.posX = posX;
		this.posY = posY;
		this.speedX = speedX;
		this.speedY = speedY;
		this.mass = mass;
		this.isColliding = false;
	}

	createItem() {
		const NEW_BUBBLE = document.createElement("div");
		NEW_BUBBLE.style.backgroundImage = "url('./assets/icons/" + NAME_LOGOS[GetRandomNumber(0, NAME_LOGOS.length - 1)] + "-logo.svg')";
		NEW_BUBBLE.classList = "tag__move";
		NEW_BUBBLE.style.left = `${this.posX}px`;
		NEW_BUBBLE.style.top = `${this.posY}px`;
		containerTags.push(NEW_BUBBLE);
		SECTION_BUBBLES.appendChild(NEW_BUBBLE);
		//let fontSize = parseFloat(window.getComputedStyle(NEW_BUBBLE, null).getPropertyValue('font-size'));
		NEW_BUBBLE.style.width = `${Math.floor(NEW_BUBBLE.getBoundingClientRect().width + SIZE_BUBBLE)}px`;
		//NEW_BUBBLE.style.paddingTop = `${(Math.floor(NEW_BUBBLE.getBoundingClientRect().width / 2) - fontSize / 1.5)}px`;
		NEW_BUBBLE.style.height = `${Math.floor(NEW_BUBBLE.getBoundingClientRect().width)}px`;

		this.width = Math.floor(NEW_BUBBLE.getBoundingClientRect().width);
		this.height = Math.floor(NEW_BUBBLE.getBoundingClientRect().height);

		//console.log(SECTION_BUBBLES.getBoundingClientRect().width)
		//console.log(SECTION_BUBBLES.getBoundingClientRect().height)

		this.initPosMouseX = 0;
		this.initPosMouseY = 0;
		NEW_BUBBLE.addEventListener('mousedown', (e) => {
			this.initPosMouseX = e.clientX;
			this.initPosMouseY = e.clientY;
		});
		let directionX = 0;
		let directionY = 0;
		BODY.addEventListener('mouseup', (e) => {
			if (this.initPosMouseX != 0) {
				if (this.initPosMouseX - e.clientX > 0) {
					directionX = -10;
				} else {
					directionX = +10;
				}
				if (this.initPosMouseY - e.clientY > 0) {
					directionY = -10;
				} else {
					directionY = +10;
				}
				for (let index = 0; index < 20; index++) {
					setTimeout(() => {
						this.speedX += directionX;
						this.speedY += directionY;
					}, 50);
				}
				this.initPosMouseX = 0;
				this.initPosMouseY = 0;
			}
		});
	}
	updatePosition(timeElapsed) {
		this.posX += this.speedX * timeElapsed;
		this.posY += this.speedY * timeElapsed;
	}
}

let timeElapsed = 0;
let oldTimeStamp = 0;
let bubblesContainer = [];

const initAnimation = () => {
	setTimeout(() => {
		createBubbleTags();
		window.requestAnimationFrame((timeStamp) => { animationLoop(timeStamp) });
	}, 200);
}
const createBubbleTags = () => {
	for (let index = 0; index < NUMBER_BUBBLE; index++) {
		let positionTagX = GetRandomNumber(50, window.innerWidth - 50);
		let positionTagY = GetRandomNumber(100, SECTION_BUBBLES.getBoundingClientRect().height - 20);


		bubblesContainer.push(new TagBubble(positionTagX, positionTagY, GetRandomNumber(-20, 70), GetRandomNumber(-20, 70), GetRandomNumber(1, 10)));
	}
	for (let i = 0; i < bubblesContainer.length; i++) {
		bubblesContainer[i].createItem();
		bubblesContainer[i].mass = bubblesContainer[i].width * 150;
	}
}

const animationLoop = (timeStamp) => {
	timeElapsed = (timeStamp - oldTimeStamp) / 1000;
	oldTimeStamp = timeStamp;
	for (let i = 0; i < bubblesContainer.length; i++) {
		bubblesContainer[i].updatePosition(timeElapsed);
	}
	UpdatePosition();
	detectCollisions();
	borderCollisionDetection();
	window.requestAnimationFrame((timeStamp) => animationLoop(timeStamp));
}

const UpdatePosition = () => {
	for (let index = 0; index < containerTags.length; index++) {
		containerTags[index].style.left = bubblesContainer[index].posX + "px";
		containerTags[index].style.top = bubblesContainer[index].posY + "px";
	}
}

const detectCollisions = () => {
	let objectOne;
	let objectTwo;
	for (let i = 0; i < bubblesContainer.length; i++) {
		bubblesContainer[i].isColliding = false;
	}

	for (let i = 0; i < bubblesContainer.length; i++) {
		objectOne = bubblesContainer[i];
		for (let j = i + 1; j < bubblesContainer.length; j++) {
			objectTwo = bubblesContainer[j];
			if (intersectionCircles(objectOne.posX, objectOne.posY, objectOne.width / 2, objectTwo.posX, objectTwo.posY, objectTwo.width / 2)) {
				objectOne.isColliding = true;
				objectTwo.isColliding = true;
				let collisionVector = { x: objectTwo.posX - objectOne.posX, y: objectTwo.posY - objectOne.posY };
				let distance = Math.sqrt((objectTwo.posX - objectOne.posX) * (objectTwo.posX - objectOne.posX) + (objectTwo.posY - objectOne.posY) * (objectTwo.posY - objectOne.posY));
				let collisionVectorNorm = { x: collisionVector.x / distance, y: collisionVector.y / distance };
				let relativeVelocityVector = { x: objectOne.speedX - objectTwo.speedX, y: objectOne.speedY - objectTwo.speedY };
				let speed = relativeVelocityVector.x * collisionVectorNorm.x + relativeVelocityVector.y * collisionVectorNorm.y;

				if (speed < 0) break;
				let impulse = 2 * speed / (objectOne.mass + objectTwo.mass);
				objectOne.speedX -= (impulse * objectTwo.mass * collisionVectorNorm.x);
				objectOne.speedY -= (impulse * objectTwo.mass * collisionVectorNorm.y);
				objectTwo.speedX += (impulse * objectOne.mass * collisionVectorNorm.x);
				objectTwo.speedY += (impulse * objectOne.mass * collisionVectorNorm.y);
			}
		}
	}
}

const borderCollisionDetection = () => {
	const COLLISION_LIMIT_X_LEFT = (1);
	const COLLISION_LIMIT_X_RIGHT = window.outerWidth - 30;
	const COLLISION_LIMIT_Y_TOP = 57;
	const COLLISION_LIMIT_Y_BOTTOM = SECTION_BUBBLES.getBoundingClientRect().height - 57;
	const SPEED_RESET = 0.95;
	let bubble;
	for (let i = 0; i < bubblesContainer.length; i++) {
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
}


function intersectionCircles(posXOne, posYOne, radiusOne, posXTwo, posYTwo, radiusTwo) {
	let distanceBetweenCircles = (posXOne - posXTwo) * (posXOne - posXTwo) + (posYOne - posYTwo) * (posYOne - posYTwo);
	return distanceBetweenCircles <= ((radiusOne + radiusTwo) * (radiusOne + radiusTwo));
}

function GetRandomNumber(min, max) {
	return Math.floor(Math.random() * (max - min) + min);
}

function GetRandomNumberFloat(min, max) {
	return Math.random() * (max - min) + min;
}

////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////--------- SECTION SKILLS ---------/////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////

const SOURCE_LOGOS = "./assets/icons/";
const SELECT_SKILLS = document.querySelector('.skills__select');
const SELECT_BACK = document.querySelector('.skills__back');
const SELECT_NEXT = document.querySelector('.skills__next');
const SELECT_TEXT = document.querySelector('.skills__selecttitle');


let selectedSkill = 0;
skillSelect();
SELECT_BACK.addEventListener('click', () => {
	if (selectedSkill > 0) {
		selectedSkill--;
		CreateLogoSkill(selectedSkill);
		skillSelect();
	}
});
SELECT_NEXT.addEventListener('click', () => {
	if (selectedSkill < 4) {
		selectedSkill++;
		CreateLogoSkill(selectedSkill);
		skillSelect();
	}
});
function skillSelect() {
	SELECT_TEXT.innerHTML = language.skills[selectedSkill];
}






for (let index = 0; index < SKILLS_CATEGORIES.length; index++) {
	SKILLS_CATEGORIES[index].addEventListener("click", (e) => {
		CreateLogoSkill(index);
	})
}
const SKILLS = [
	["html", "css", "javascript", "react", "sass", "pug", "git", "github", "vscode"],
	["csharp", "netcore", "xaml", "git", "github", "vs"],
	["csharp", "netcore", "xamarin", "xaml", "vs", "git", "github"],
	["c", "csharp", "xaml", "labview", "siemens", "git", "github"],
	["vscode", "vs", "git", "labview", "teststand", "cvi", "tiaportal"]
]
const SKILL_NAMES = [
	["html", "css", "javascript", "react js", "sass", "pug", "git", "git hub", "visual studio code"],
	["c#", "netcore", "xaml", "git", "github", "visual studio"],
	["c#", "netcore", "xamarin forms", "xaml", "visual studio", "git", "github"],
	["c", "c#", "xaml", `labview (Graphic)`, "scl, kop", "git", "github"],
	["visual studio code", "visual studio", "git", "labview", "teststand", "lab/windows cvi", "tia portal"]
]
const CreateLogoSkill = (numberSkill) => {


	do {
		CONTAINER_SKILLS.removeChild(CONTAINER_SKILLS.lastChild);
	} while (CONTAINER_SKILLS.lastChild.className === "skills__name");

	for (let index = 0; index < SKILLS[numberSkill].length; index++) {
		const NEW_LOGO_TECH = document.createElement("div");
		NEW_LOGO_TECH.classList = "skills__name";
		CONTAINER_SKILLS.appendChild(NEW_LOGO_TECH);
		NEW_LOGO_TECH.style.zIndex = "1";
		const NEW_LOGO_BUBBLE = document.createElement("div");
		NEW_LOGO_BUBBLE.classList = "skills__bubble";
		NEW_LOGO_TECH.appendChild(NEW_LOGO_BUBBLE);
		const NEW_LOGO_IMAGE = document.createElement("img");
		NEW_LOGO_IMAGE.classList = "logo";
		NEW_LOGO_IMAGE.src = SOURCE_LOGOS + SKILLS[numberSkill][index] + "-logo.svg";
		NEW_LOGO_IMAGE.alt = "logo " + SKILLS[numberSkill][index];
		NEW_LOGO_BUBBLE.appendChild(NEW_LOGO_IMAGE);
		const NEW_LOGO_NAME = document.createElement("span");
		NEW_LOGO_NAME.textContent = SKILL_NAMES[numberSkill][index];
		NEW_LOGO_TECH.appendChild(NEW_LOGO_NAME);
	}
}

////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////--------- SECTION PROJECTS ---------/////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////


let projectsZoom = document.querySelectorAll(".project__options--zoom");
const BODY = document.querySelector("body");
const SOURCE_PHOTOS = "./assets/photos/project_";
const SOURCE_PREVIEW_PHOTOS = "./assets/photos/preview_project_";

let Title = [];
const TECHNOLOGIES = [
	["html", "css", "javascript", "pug", "sass"],
	["csharp", "netcore", "xaml", "sql", "mysql", "git"],
	["csharp", "netcore", "xamarin", "xaml"],
	["c", "csharp", "xaml", "labview",],
	["vscode", "vs", "git", "labview"]
];
const REPOSITORIES = [
	"https://aletzman.github.io/",
	"https://github.com/AletzMan",
	"https://aletzman.github.io/",
];


const CreateProject = () => {
	for (let index = 0; index < REPOSITORIES.length - 1; index++) {
		const NEW_PROJECT = PROJECTS[0].cloneNode(true);
		PROJECT_CONTAINER.appendChild(NEW_PROJECT);
	}


	Title = [
		"Drawing Board",
		"Test Sequence",
		"Electronic Encyclopedia"
	];

	EditProjects();
}

let isZoomActivated = false;
let isViewActivated = false;

const EditProjects = () => {
	const PROJECTS = document.querySelectorAll(".project");
	const PROJECTS_TITLE = document.querySelectorAll(".project__title");
	const PROJECTS_TECHNOLOGIES = document.querySelectorAll(".project__technologies");
	const PROJECT_IMAGE = document.querySelectorAll(".project__image");
	const PROJECT_REPOSITORY = document.querySelectorAll(".project__options--repository");
	const projectsPreview = document.querySelectorAll(".project__options--linkpreview");
	projectsZoom = document.querySelectorAll(".project__options--zoom");




	for (let index = 0; index < PROJECTS.length; index++) {
		PROJECTS_TITLE[index].innerHTML = Title[index];
		TECHNOLOGIES[index].forEach(namelogo => {
			const NEW_CONTAINER_TECH = document.createElement("div");
			NEW_CONTAINER_TECH.classList = "project__technologies--container";
			PROJECTS_TECHNOLOGIES[index].appendChild(NEW_CONTAINER_TECH);
			const NEW_IMAGE_TECH = document.createElement("img");
			NEW_IMAGE_TECH.src = SOURCE_LOGOS + namelogo + "-logo.svg";
			NEW_IMAGE_TECH.alt = "logo" + namelogo;
			NEW_IMAGE_TECH.classList = "project__technologies--image";
			NEW_CONTAINER_TECH.appendChild(NEW_IMAGE_TECH);
			const NEW_IMAGE_DESCRIPTION = document.createElement("span");
			NEW_IMAGE_DESCRIPTION.textContent = namelogo;
			NEW_IMAGE_DESCRIPTION.classList = "project__technologies--label";
			NEW_CONTAINER_TECH.appendChild(NEW_IMAGE_DESCRIPTION);
		});
		PROJECT_IMAGE[index].src = SOURCE_PREVIEW_PHOTOS + index + ".jpg";
		PROJECT_REPOSITORY[index].href = REPOSITORIES[index];
	}


	const PROJECT_CONTAINER = document.querySelectorAll(".project__container");

	for (let index = 0; index < PROJECT_CONTAINER.length; index++) {
		PROJECT_CONTAINER[index].addEventListener('mouseleave', (e) => {

			PROJECT_CONTAINER[index].style.transform = 'rotate(0deg)'
			PROJECT_CONTAINER[index].children[2].style.filter = 'brightness(100%)'
			PROJECT_CONTAINER[index].children[2].style.border = '1px solid var(--color_activated)';
			PROJECT_CONTAINER[index].children[4].children.item(0).children.item(0).style.fill = 'var(--color_font)';

		})
		PROJECT_CONTAINER[index].addEventListener('mousemove', (e) => {
			let mousePosX;
			let mousePosY;
			if (e.offsetY > 65 && e.offsetY < 257) {
				isZoomActivated = true;
				isViewActivated = false;
				PROJECT_CONTAINER[index].style.cursor = 'zoom-in';
				PROJECT_CONTAINER[index].children[2].style.filter = 'brightness(160%)';
				PROJECT_CONTAINER[index].children[2].style.border = '3px solid var(--color_activated)';
				AsignEvent(PROJECT_CONTAINER[index], index);
			} else {
				isZoomActivated = false;
				isViewActivated = false;
				PROJECT_CONTAINER[index].style.cursor = 'default';
				PROJECT_CONTAINER[index].children[4].children.item(0).children.item(0).style.fill = 'var(--color_font)';
				PROJECT_CONTAINER[index].children[2].style.filter = 'brightness(100%)'
				PROJECT_CONTAINER[index].children[2].style.border = '1px solid var(--color_activated)';
				if (e.offsetY < 65 && e.offsetX > 270) {
					isViewActivated = true;
					PROJECT_CONTAINER[index].children[4].children.item(0).children.item(0).style.fill = 'var(--color_activated)';
					PROJECT_CONTAINER[index].style.cursor = 'pointer';
					PROJECT_CONTAINER[index].onclick = function () {
						var url = REPOSITORIES[index];
						if (isViewActivated) {
							window.open(url);
						}
					}
				}
			}
			if (e.offsetX > 160) {
				mousePosX = (Math.abs(80 - (e.offsetX / 2))) * 2

			} else if (e.offsetX < 160) {
				mousePosX = (160 - e.offsetX) * -1;
			}
			if (e.offsetY > 160) {
				mousePosY = (Math.abs(80 - (e.offsetY / 2))) * 2

			} else if (e.offsetY < 160) {
				mousePosY = (160 - e.offsetY) * -1;
			}
			//console.log(mousePosY/15)
			PROJECT_CONTAINER[index].style.transform = `rotateY(${(mousePosX / 10) * -1}deg) rotateX(${(mousePosY / 10)}deg)`;
		})
	}


}

let containerCreate = false;
const AsignEvent = (project, index) => {
	project.addEventListener("mouseup", () => {
		if (isZoomActivated) {
			MODAL_IMAGE.src = SOURCE_PHOTOS + index + ".jpg";
			MODAL.style.transform = 'scale(1)';
			BODY.style.overflowX = "hidden";
			BODY.style.overflowY = "hidden";
		}
	})

}/*
const AsignEvent = () => {
	projectsZoom.forEach((element, index) => {
		element.addEventListener("mouseup", () => {
			MODAL_IMAGE.src = SOURCE_PHOTOS + index + ".jpg";
			MODAL.style.transform = 'scale(1)';
			BODY.style.overflowX = "hidden";
			BODY.style.overflowY = "hidden";
		})
	});
}
*/

window.addEventListener("mouseup", (event) => {
	if (event.target == MODAL) {
		MODAL.style.transform = 'scale(0)';
		BODY.style.overflowX = "auto";
		BODY.style.overflowY = "auto";
	}
})

MODAL_BUTTON.addEventListener("mouseup", (event) => {
	MODAL.style.transform = 'scale(0)';
	BODY.style.overflowX = "auto";
	BODY.style.overflowY = "auto";
})






////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////--------- MENU MOBIL ---------/////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////

const NAME_TAG_MENU = [
	"HOME",
	"SKILLS",
	"PROJECTS",
	"ABOUT",
	"CONTACT"
]

let positionMenuselected = 0;
let indexMenuCurrent = 0;
let indexMenuBefore = 0;
let numberOfSectionsDisplaced = 0;

for (let index = 0; index < MOBIL_MENU_LINKS.length; index++) {
	MOBIL_MENU_LINKS.item(index).addEventListener('mousedown', (e) => {
		SECTIONS.forEach(section => {
			section.style.opacity = 0;
		})
		indexMenuBefore = indexMenuCurrent;
		indexMenuCurrent = index;
		numberOfSectionsDisplaced = Math.abs(indexMenuCurrent - indexMenuBefore);

		console.log(SECTIONS[index].getBoundingClientRect().height);
		let scrollPosition = 0;
		for (let numberSection = 0; numberSection < index; numberSection++) {
			scrollPosition += (SECTIONS[numberSection].getBoundingClientRect().height) + (80);
		}
		scrollPosition -= 16;
		scroll(0, scrollPosition);
		setTimeout(() => {
			SECTIONS.forEach(section => {
				section.style.opacity = 1;
			})
		}, 500);
	})
}


window.addEventListener("resize", () => {
	positionMenuselected = ((MOBILE_MENU_ITEMS.getBoundingClientRect().width / 16) / 5 * (indexMenuCurrent + 1)) - (SELECTED_MOBILE_MENU.getBoundingClientRect().width / 16) - 0.2;
	SELECTED_MOBILE_MENU.style.left = `${positionMenuselected}rem`;
})

document.addEventListener("scroll", () => {
	if (scrollY) {
		let designMobil = window.getComputedStyle(MOBILE_MENU_ITEMS, null).getPropertyValue("display") == "none" ? false : true;

		for (let index = 0; index < SECTIONS.length; index++) {
			if (SECTIONS[index].getBoundingClientRect().y < 350 && SECTIONS[index].getBoundingClientRect().y > -20) {
				if (designMobil) {
					positionMenuselected = ((MOBILE_MENU_ITEMS.getBoundingClientRect().width / 16) / 5 * (index + 1)) - (SELECTED_MOBILE_MENU.getBoundingClientRect().width / 16) - 0;
					SELECTED_MOBILE_MENU.style.left = `${positionMenuselected}rem`;
					setTimeout(() => {
						MOBIL_MENU_LINKS.forEach(section => {
							section.style.top = "0.65rem";
						});
						MOBIL_MENU_LINKS[index].style.top = "0rem";
						SELECTED_MOBILE_MENU.innerText = NAME_TAG_MENU[index];
					}, 200);
				} else {
					SELECTED_MENU_ITEM.style.left = DESKTOP_MENU_ITEMS.item(index).getBoundingClientRect().left - DESKTOP_MENU_ITEMS.item(0).getBoundingClientRect().left - 1 + "px";
					DESKTOP_MENU_LINKS.forEach(elementMenuUnSelected => {
						elementMenuUnSelected.style.color = "var(--color_font)";
					});
					DESKTOP_MENU_LINKS.item(index).style.color = "var(--color_activated)";
				}
			}
		}
	}
})



//////////////////////SEND EMAIL //////////////////
///////////////////////////////////////////////////
const btn = document.getElementById('button');
const validation = document.querySelector('.validation');
const formCanvas = document.querySelector('.validation__canvas');
const validationButton = document.querySelector('.validation__button');
const validationResult = document.querySelector('.validation__result');
const OPERATION = ['+', '*', '+', '*']
let emailOK = false;
let nameOK = false;
let messsageOK = false;
let validationOK = false;
let selectedOperation = OPERATION[GetRandomNumber(0, 3)]
let numberValidateOne = GetRandomNumber(0, 9);
let numberValidateTwe = GetRandomNumber(0, 9);
let operationResult = 0;

/*///////// CAPTCHA /////////////
setInterval(() => {
	selectedOperation = OPERATION[GetRandomNumber(0, 3)]
	numberValidateOne = GetRandomNumber(0, 9);
	numberValidateTwe = GetRandomNumber(0, 9);
	ctxValidate.clearRect(0, 0, 150, 150);
	ctxValidate.fillStyle = "whitesmoke";
	ctxValidate.fillText(`${numberValidateOne} ${selectedOperation} ${numberValidateTwe}`, 15, 40);
}, 5000);

const ctxValidate = formCanvas.getContext("2d");
ctxValidate.font = "30px Arial";
ctxValidate.fillStyle = "whitesmoke";
ctxValidate.fillText(`${numberValidateOne} ${selectedOperation} ${numberValidateTwe}`, 15, 40);


validationButton.addEventListener('mouseup', () => {
	switch (selectedOperation) {
		case '+':
			operationResult = numberValidateOne + numberValidateTwe;
			break;
		case '*':
			operationResult = numberValidateOne * numberValidateTwe;
			break;
		default:
			break;
	}
	ctxValidate.clearRect(0, 0, 150, 150);
	if (operationResult === parseInt(validationResult.value)) {
		console.log('Match')
		ctxValidate.fillStyle = "green";
		ctxValidate.fillText("OK", 28, 40)
		validationOK = true;
		console.log(emailOK, nameOK, messsageOK, validationOK)
	} else {
		console.log('No Match')
		ctxValidate.fillStyle = "red";
		ctxValidate.fillText("NOK", 17, 40)
		validationOK = false;
	}
})

*/
document.getElementById('form')
	.addEventListener('submit', function (event) {
		event.preventDefault();

		const serviceID = 'default_service';
		const templateID = 'template_ewv5msh';

		if (inputName.value.length < 2) {
			styleErrorState(inputName);
			nameOK = false;
			errorName.style.transform = "translateY(1rem)";
		} else {
			styleNormalState(inputName);
			nameOK = true;
		}
		if (inputMessage.value.length < 2) {
			styleErrorState(inputMessage);
			messsageOK = false;
			errorMessage.style.transform = "translateY(1rem)";
		} else {
			styleNormalState(inputMessage);
			messsageOK = true;
		}

		if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(inputEmail.value)) {
			console.log('ERROR')
			styleNormalState(inputEmail);
			emailOK = true;
		} else {
			if (inputEmail.value === '') {
				errorEmail.textContent = language.contact.email.error.empty;
			} else {
				errorEmail.textContent = language.contact.email.error.format;
			}
			errorEmail.style.transform = "translateY(1rem)";
			styleErrorState(inputEmail);
			emailOK = false;
		}


		if (emailOK && nameOK && messsageOK) {
			loading.style.display = 'block';
			loadingLabel.style.display = 'block';
			loadingLabel.textContent = language.contact.notification.send;
			emailjs.sendForm(serviceID, templateID, this)
				.then(() => {
					inputName.value = '';
					inputEmail.value = '';
					inputMessage.value = '';
					loading.style.display = 'none';
					loadingLabel.textContent = language.contact.notification.sendOK;
					setTimeout(() => {
						loadingLabel.style.display = 'none';
					}, 5000);
				}, (err) => {
					loadingLabel.textContent = language.contact.notification.sendError;
					loading.style.display = 'none';
					setTimeout(() => {
						loadingLabel.style.display = 'none';
					}, 2000);
					alert(JSON.stringify(err));
				});
		}

	});



inputEmail.addEventListener('focus', (e) => {
	styleActiveState(e);
	errorEmail.style.transform = "translateY(0rem)";
})
inputName.addEventListener('focus', (e) => {
	styleActiveState(e);
	errorName.style.transform = "translateY(0rem)";
})
inputMessage.addEventListener('focus', (e) => {
	styleActiveState(e);
	errorMessage.style.transform = "translateY(0rem)";
})

inputName.addEventListener('focusout', (e) => {
	styleNormalState(inputName);
})

inputMessage.addEventListener('focusout', (e) => {
	styleNormalState(inputMessage);
})

inputEmail.addEventListener('focusout', (e) => {
	styleNormalState(inputEmail);
})



const styleActiveState = (e) => {
	e.target.style.borderColor = 'var(--color_activated)';
	e.target.style.boxShadow = '0 0 2px 1px var(--color_activated)';
}

const styleNormalState = (e) => {
	e.style.borderColor = 'var(--color_backlight)';
	e.style.boxShadow = 'none';
}

const styleErrorState = (e) => {
	e.style.borderColor = 'rgba(255, 0, 0, 0.5)';
	e.style.boxShadow = '0 0 2px 1px rgba(255, 0, 0, 0.3)';
}