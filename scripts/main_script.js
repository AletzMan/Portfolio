const menuDesktop = document.querySelectorAll(".header__menu li");
const selectItemMenu = document.querySelector(".menu__selection");
const presentation = document.querySelector(".home__description");
const sectionHome = document.querySelector(".home");


selectItemMenu.style.left = "0px";
selectItemMenu.style.top = "0px";

const textPresentation = 'Front-End Developer Jr.';
const numbertags = 20;
let containerTags = [];
const nameTags = ["<header>", "<section>", "<footer>", "<nav>", "<aside>", "<img>", "<button>", "<input>", "<picture>", "<table>", "<meta>", "<select>", "<span>", "<textarea>", "<video>"];


onload = () => {
	initAnimation();
	for (let index = 0; index < numbertags; index++) {
		let arrayBubbles = new TagBubble();
	}
}


menuDesktop.forEach(elementMenu => {
	elementMenu.addEventListener('mouseup', (e) => {
		menuDesktop.forEach(elementMenuUnSelected => { elementMenuUnSelected.style.borderBottom = "none" });
		selectItemMenu.style.left = elementMenu.getBoundingClientRect().left - menuDesktop.item(0).getBoundingClientRect().left - 1 + "px";
	})
});


menuDesktop.item(3).addEventListener("mousedown", () => scroll(0, 14));


let intervalPresentetion = setInterval(LoadPresentation, 130);
let numLetter = 0;
function LoadPresentation() {
	if (numLetter < textPresentation.length) {
		presentation.children[1].innerHTML += textPresentation[numLetter];
		numLetter += 1;
	} else {
		clearInterval(intervalPresentetion);
	}
}


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
		const newTagMove = document.createElement("div");
		newTagMove.textContent = nameTags[GetRandomNumber(0, 14)];
		newTagMove.classList = "tag__move";
		newTagMove.style.left = `${this.posX}px`;
		newTagMove.style.top = `${this.posY}px`;
		containerTags.push(newTagMove);
		sectionHome.appendChild(newTagMove); let fontSize = parseFloat(window.getComputedStyle(newTagMove, null).getPropertyValue('font-size'));
		newTagMove.style.width = `${Math.floor(newTagMove.getBoundingClientRect().width + 10)}px`;
		newTagMove.style.paddingTop = `${(Math.floor(newTagMove.getBoundingClientRect().width / 2) - fontSize / 1.5)}px`;
		newTagMove.style.height = `${Math.floor(newTagMove.getBoundingClientRect().width)}px`;

		this.width = Math.floor(newTagMove.getBoundingClientRect().width);
		this.height = Math.floor(newTagMove.getBoundingClientRect().height);

		newTagMove.addEventListener('mouseover', (e) => {
			//newTagMove.style.backgroundColor = '#A7D12955';
			newTagMove.style.boxShadow = '-10px -10px 20px 7px #A7D12955 inset';
			newTagMove.style.color = '#FFFFFF55';
			newTagMove.style.filter = 'blur(0px)';
		});
		newTagMove.addEventListener('mouseout', (e) => {
			//newTagMove.style.backgroundColor = 'transparent';
			newTagMove.style.boxShadow = '-10px -10px 20px 7px var(--color_font_section) inset';
			newTagMove.style.color = '#FFFFFF09';
			newTagMove.style.filter = 'blur(1px)';
		});
		this.initPosMouseX = 0;
		this.initPosMouseY = 0;
		newTagMove.addEventListener('mousedown', (e) => {
			this.initPosMouseX = e.clientX;
			this.initPosMouseY = e.clientY;
		});
		let directionX = 0;
		let directionY = 0;
		sectionHome.addEventListener('mouseup', (e) => {
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
let resetCounter = 0;




const initAnimation = () => {
	createBubbleTags();
	window.requestAnimationFrame((timeStamp) => { animationLoop(timeStamp) });
}

const createBubbleTags = () => {
	for (let index = 0; index < numbertags; index++) {
		let positionTagX = GetRandomNumber(50, window.innerWidth - 50);
		let positionTagY = GetRandomNumber(100, window.innerHeight - 20);
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
	const collisionLimitXLeft = (1);
	const collisionLimitXRight = window.innerWidth - 1;
	const collisionLimitYTop = 80;
	const collisionLimitYBottom = window.innerHeight - 64;

	const speedReset = 0.95;
	let bubble;
	for (let i = 0; i < bubblesContainer.length; i++) {
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

