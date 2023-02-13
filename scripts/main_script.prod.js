"use strict";function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _defineProperties(e,t){for(var o=0;o<t.length;o++){var n=t[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function _createClass(e,t,o){return t&&_defineProperties(e.prototype,t),o&&_defineProperties(e,o),e}var DESKTOP_MENU_LINKS=document.querySelectorAll(".menu__list--link"),DESKTOP_MENU_ITEMS=document.querySelectorAll(".menu__list"),SELECTED_MENU_ITEM=document.querySelector(".menu__selection"),presentation=document.querySelector(".landscape__window--text"),SECTIONS=document.querySelectorAll(".section"),SECTION_TITLES=document.querySelectorAll(".title"),SLOGAN=document.querySelector(".home__slogan"),GREETINGS=document.querySelector(".home__greetings"),SKILL_CATEGORY_LABELS=document.querySelectorAll(".label__tech"),ABOUT_PARAGRAPHS=document.querySelectorAll(".aboutme__paragraph"),ABOUT_PARAGRAPHS_LIST=document.querySelector(".aboutme__paragraph--list"),CONTACT_MESSAGE=document.querySelector(".contact__type--message"),SECTION_BUBBLES=document.querySelector(".section__bubbles"),FOOTER=document.querySelector(".footer"),SKILLS_CATEGORIES=document.querySelectorAll(".technologies"),CONTAINER_SKILLS=document.querySelector(".logos"),PROJECT_CONTAINER=document.querySelector(".projects__container"),PROJECTS=document.querySelectorAll(".project"),SELECTED_MOBILE_MENU=document.querySelector(".menumobil__link--select"),MOBILE_MENU_ITEMS=document.querySelector(".menumobil"),MODAL=document.querySelector(".modal"),MODAL_IMAGE=document.querySelector(".modal__image"),MODAL_BUTTON=document.querySelector(".modal__button"),SWITCH_LANGUAGE=document.querySelector(".language__check"),MOBIL_MENU_LINKS=document.querySelectorAll(".link"),NUMBER_BUBBLE=20,SIZE_BUBBLE=45,NAME_LOGOS=["html","css","javascript","sass","pug","git","github","mysql","react","csharp","netcore","xamarin","xaml","c","vscode","vs","labview","teststand","cvi"],LANGUAGE={english:{header:["Home","Skills","Projects","About Me","Contact"],section:["HOME","SKILLS","PROJECTS","ABOUT ME","CONTACT"],intro:["Hey👋, I'm",'"Transforming concepts and design, into code"'],skills:["Web","Mobil","Desktop","Test & Measurement","Tools"],about:["THE BEGINNING","I am a self-taught person, and passionate about programming. From a very young age I was very interested in technology, first electronics, I liked to disassemble electronic objects and see how they worked inside.","I decided to study electronics, where I came across microcontrollers and so I was able to combine my two current passions, electronics and programming.","I started working in the electronics field as a diagnostic technician.","I set up my own business, where I offered computer rental and repair services. Here I started to delve into the world of programming in a self-taught way, with ActionScript and Visual Basic.","I started working as a mechanical assembly technician for the electronics industry, where test and automation equipment is manufactured for companies that manufacture electronic products.","I was promoted to hardware technician, where I did the routing and wiring of the electrical and electronic part of the equipment.","I was promoted to Hardware Engineer, where I did the electrical diagrams and debugging of the electrical and electronics.",[{devsoft:["I was promoted to Development Engineer, my responsibilities:","Logical part of the equipment by programming (C, C#, LabView, TestStand, CVI, PLC Siemens(TIA Portal))","BOM(Bill Of Materials)","Realization of electrical diagrams","Debugging of the code and electrical part","Equipment manual","Delivery and installation of the equipment on site to the customer"]}],"I had the opportunity to start a business, and I decided to work as a freelance, where I do residential electrical installation work, and in the area of development with languages such as C #, for mobile and desktop applications.","Since then I have dedicated myself independently to study several programming languages, I focus on Web Development, and from the first day I have been excited about this world, I want to work in this fascinating area, at the moment I am in the Front-End area and little by little I want to go deeper into the Back-End. And above all, never stop learning."],contact:["To know more about me, and to be able to work together you can find me at:"],footer:["Made in <img class='footer__copyright--icon' title='México' src='./assets/icons/mexico-icon.ico' alt='mexico flag' loading='lazy' draggable='false'> by Alejandro Garcia Alonso"]},spanish:{header:["Inicio","Habilidades","Proyectos","Sobre mi","Contacto"],section:["INICIO","HABILIDADES","PROYECTOS","SOBRE MI","CONTACTO"],intro:["Hola👋, Soy",'"Transformando conceptos y diseño, en código"'],skills:["Web","Móvil","Escritorio","Prueba y Medición","Herramientas"],about:["EL PRINCIPIO","Soy una persona autodidacta, y apasionado por la programación. Desde muy pequeño me interesó mucho la tecnología, primero la electrónica, me gustaba desmontar objetos electrónicos y ver como funcionaban por dentro.","Decidí estudiar la carrera de electrónica, donde me encontré con los microcontroladores y así pude combinar mis dos actuales pasiones, la electrónica y la programación.","Comencé a trabajar en el campo de la electrónica como tecnico de diagnostico.","Emprendi mi negocio donde ofrecía servicios de renta y reparación de computadoras. Aquí comencé a adentrarme más en el mundo de la programación de forma autodidacta, con ActionScript y Visual Basic.","Empecé a trabajar como técnico de ensamble mecanico, para la industria electrónica, donde se fabrican equipos de prueba y automatización para empresas que fabrican productos electrónicos.","Fui ascendido a técnico de hardware, donde realizaba el ruteo y cableado de la parte eléctrica y electrónica de los equipos.","Fui ascendido a Ingeniero de Hardware, donde realizaba los diagramas eléctricos y la depuración de la parte eléctrica y electrónica.",[{devsoft:["Fui ascendido a Ingeniero de Desarrollo, mis responsabilidades:","Parte lógica de los equipos mediante programación (C, C#, LabView, TestStand, CVI, PLC Siemens(TIA Portal))","BOM(Lista de materiales)","Realización de esquemas eléctricos","Depuración del código y parte electrica","Manual del equipo","Entrega e instalación del equipo en sitio al cliente"]}],"Tuve la oportunidad de montar un negocio, y decidí trabajar como freelance, donde realizo trabajos de instalación eléctrica residencial, y en el área de desarrollo con lenguajes como C#, para aplicaciones móviles y de escritorio.","Desde entonces me he dedicado de manera autonoma a estudiar varios lenguajes de programación, me enfoque en Desarrollo Web, y desde el primer día he estado entusiasmado con este mundo, quiero trabajar en esta fascinante área, de momento estoy en el área de Front-End y poco a poco quiero ir adentrandome en el Back-End. Y sobre todo, nunca dejar de aprender."],contact:["Para saber más sobre mí, y poder trabajar juntos puedes encontrarme en:"],footer:["Hecho en <img class='footer__copyright--icon' title='México' src='./assets/icons/mexico-icon.ico' alt='mexico flag' loading='lazy' draggable='false'> por Alejandro Garcia Alonso"]}},containerTags=[],selectedLanguage="spanish",textPresentation=[],language="spanish"==selectedLanguage?LANGUAGE.spanish:LANGUAGE.english;onload=function(){SELECTED_MENU_ITEM.style.left="0px",SELECTED_MENU_ITEM.style.top="0px",CreateLogoSkill(0),CreateProject(),initAnimation(),scroll(0,0),selectLanguage()};var mobileDetect=function(){var e,t=!1;return e=navigator.userAgent||navigator.vendor||window.opera,(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(e)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(e.substr(0,4)))&&(t=!0),t};SWITCH_LANGUAGE.addEventListener("change",function(){selectedLanguage=SWITCH_LANGUAGE.checked?"english":"spanish",language="spanish"==selectedLanguage?LANGUAGE.spanish:LANGUAGE.english,setTimeout(function(){selectLanguage()},300)});for(var selectLanguage=function(){DESKTOP_MENU_LINKS.forEach(function(e,t){e.innerText=language.header[t]}),SECTION_TITLES.forEach(function(e,t){e.innerText=language.section[t]}),GREETINGS.innerHTML=language.intro[0],SLOGAN.innerHTML=language.intro[1],SKILL_CATEGORY_LABELS.forEach(function(e,t){e.innerText=language.skills[t]}),ABOUT_PARAGRAPHS.forEach(function(e,t){if("P"===e.nodeName)e.innerText=language.about[t+1];else for(var o=0;o<ABOUT_PARAGRAPHS_LIST.childElementCount;o++)ABOUT_PARAGRAPHS_LIST.children[o].innerText=language.about[8][0].devsoft[o]}),CONTACT_MESSAGE.innerHTML=language.contact[0],FOOTER.children[0].innerHTML=language.footer[0]},contentPresentation=function(){textPresentation=SWITCH_LANGUAGE.checked?["Software Developer","Front-End Developer","Electrical Design"]:["Desarrollador de Sofware","Desarrollador Front-End","Diseño Electrico"]},index=0;index<DESKTOP_MENU_LINKS.length;index++)DESKTOP_MENU_LINKS.item(index).addEventListener("mouseup",function(e){DESKTOP_MENU_LINKS.forEach(function(e){e.style.color="var(--color_font)"}),setTimeout(function(){e.target.style.color="var(--color_activated)"},1500),"HOME"===e.target.innerHTML&&setTimeout(function(){scroll(0,0)},0)}),DESKTOP_MENU_LINKS.item(index).addEventListener("mouseover",function(e){e.target.style.color="var(--color_activated)"}),DESKTOP_MENU_LINKS.item(index).addEventListener("mouseout",function(e){e.target.style.color="var(--color_font)"});setTimeout(function(){var e,t,o=0,n=!1,i="",a=0,r=!0;setInterval(function(){contentPresentation(),r&&(e=(new Date).getTime()),o<textPresentation[a].length&&!n?(presentation.innerHTML+=textPresentation[a][o],i=textPresentation[a],o+=1,r=!1):(n=!0,t=(new Date).getTime()-e),n&&3500<t&&(presentation.innerHTML=i.substring(0,o),--o,0===presentation.innerHTML.length&&(n=!1,r=!(o=0),(a+=1)>textPresentation.length-1&&(a=0)))},100)},1600);var TagBubble=function(){function a(e,t,o,n,i){_classCallCheck(this,a),this.posX=e,this.posY=t,this.speedX=o,this.speedY=n,this.mass=i,this.isColliding=!1}return _createClass(a,[{key:"createItem",value:function(){var o=this,e=document.createElement("div");e.style.backgroundImage="url('./assets/icons/"+NAME_LOGOS[GetRandomNumber(0,NAME_LOGOS.length-1)]+"-logo.svg')",e.classList="tag__move",e.style.left="".concat(this.posX,"px"),e.style.top="".concat(this.posY,"px"),containerTags.push(e),SECTION_BUBBLES.appendChild(e),e.style.width="".concat(Math.floor(e.getBoundingClientRect().width+SIZE_BUBBLE),"px"),e.style.height="".concat(Math.floor(e.getBoundingClientRect().width),"px"),this.width=Math.floor(e.getBoundingClientRect().width),this.height=Math.floor(e.getBoundingClientRect().height),this.initPosMouseX=0,this.initPosMouseY=0,e.addEventListener("mousedown",function(e){o.initPosMouseX=e.clientX,o.initPosMouseY=e.clientY});var n=0,i=0;BODY.addEventListener("mouseup",function(e){if(0!=o.initPosMouseX){n=0<o.initPosMouseX-e.clientX?-10:10,i=0<o.initPosMouseY-e.clientY?-10:10;for(var t=0;t<20;t++)setTimeout(function(){o.speedX+=n,o.speedY+=i},50);o.initPosMouseX=0,o.initPosMouseY=0}})}},{key:"updatePosition",value:function(e){this.posX+=this.speedX*e,this.posY+=this.speedY*e}}]),a}(),timeElapsed=0,oldTimeStamp=0,bubblesContainer=[],initAnimation=function(){setTimeout(function(){createBubbleTags(),window.requestAnimationFrame(function(e){animationLoop(e)})},200)},createBubbleTags=function(){for(var e=0;e<NUMBER_BUBBLE;e++){var t=GetRandomNumber(50,window.innerWidth-50),o=GetRandomNumber(100,SECTION_BUBBLES.getBoundingClientRect().height-20);bubblesContainer.push(new TagBubble(t,o,GetRandomNumber(-20,70),GetRandomNumber(-20,70),GetRandomNumber(1,10)))}for(var n=0;n<bubblesContainer.length;n++)bubblesContainer[n].createItem(),bubblesContainer[n].mass=150*bubblesContainer[n].width},animationLoop=function e(t){timeElapsed=(t-oldTimeStamp)/1e3,oldTimeStamp=t;for(var o=0;o<bubblesContainer.length;o++)bubblesContainer[o].updatePosition(timeElapsed);UpdatePosition(),detectCollisions(),borderCollisionDetection(),window.requestAnimationFrame(e)},UpdatePosition=function(){for(var e=0;e<containerTags.length;e++)containerTags[e].style.left=bubblesContainer[e].posX+"px",containerTags[e].style.top=bubblesContainer[e].posY+"px"},detectCollisions=function(){for(var e,t,o=0;o<bubblesContainer.length;o++)bubblesContainer[o].isColliding=!1;for(var n=0;n<bubblesContainer.length;n++){e=bubblesContainer[n];for(var i=n+1;i<bubblesContainer.length;i++)if(t=bubblesContainer[i],intersectionCircles(e.posX,e.posY,e.width/2,t.posX,t.posY,t.width/2)){e.isColliding=!0,t.isColliding=!0;var a=t.posX-e.posX,r=t.posY-e.posY,s=Math.sqrt((t.posX-e.posX)*(t.posX-e.posX)+(t.posY-e.posY)*(t.posY-e.posY)),l=a/s,c=r/s,d=(e.speedX-t.speedX)*l+(e.speedY-t.speedY)*c;if(d<0)break;var u=2*d/(e.mass+t.mass);e.speedX-=u*t.mass*l,e.speedY-=u*t.mass*c,t.speedX+=u*e.mass*l,t.speedY+=u*e.mass*c}}},borderCollisionDetection=function(){for(var e,t=window.outerWidth-30,o=SECTION_BUBBLES.getBoundingClientRect().height-57,n=0;n<bubblesContainer.length;n++)(e=bubblesContainer[n]).posX<1?(e.speedX=.95*Math.abs(e.speedX),e.posX=1):e.posX>t-e.width&&(e.speedX=.95*-Math.abs(e.speedX),e.posX=t-e.width),e.posY<57?(e.speedY=.95*Math.abs(e.speedY),e.posY=57):e.posY>o-e.height&&(e.speedY=.95*-Math.abs(e.speedY),e.posY=o-e.height)};function intersectionCircles(e,t,o,n,i,a){return(e-n)*(e-n)+(t-i)*(t-i)<=(o+a)*(o+a)}function GetRandomNumber(e,t){return Math.floor(Math.random()*(t-e)+e)}function GetRandomNumberFloat(e,t){return Math.random()*(t-e)+e}var SOURCE_LOGOS="./assets/icons/",SELECT_SKILLS=document.querySelector(".skills__select"),SELECT_BACK=document.querySelector(".skills__back"),SELECT_NEXT=document.querySelector(".skills__next"),SELECT_TEXT=document.querySelector(".skills__selecttitle"),selectedSkill=0;function skillSelect(){SELECT_TEXT.innerHTML=language.skills[selectedSkill]}skillSelect(),SELECT_BACK.addEventListener("click",function(){0<selectedSkill&&(CreateLogoSkill(--selectedSkill),skillSelect())}),SELECT_NEXT.addEventListener("click",function(){selectedSkill<4&&(CreateLogoSkill(++selectedSkill),skillSelect())});for(var _loop=function(t){SKILLS_CATEGORIES[t].addEventListener("click",function(e){CreateLogoSkill(t)})},_index4=0;_index4<SKILLS_CATEGORIES.length;_index4++)_loop(_index4);var SKILLS=[["html","css","javascript","react","sass","pug","git","github","vscode"],["csharp","netcore","xaml","git","github","vs"],["csharp","netcore","xamarin","xaml","vs","git","github"],["c","csharp","xaml","labview","siemens","git","github"],["vscode","vs","git","labview","teststand","cvi","tiaportal"]],SKILL_NAMES=[["html","css","javascript","react js","sass","pug","git","git hub","visual studio code"],["c#","netcore","xaml","git","github","visual studio"],["c#","netcore","xamarin forms","xaml","visual studio","git","github"],["c","c#","xaml","labview (Graphic)","scl, kop","git","github"],["visual studio code","visual studio","git","labview","teststand","lab/windows cvi","tia portal"]],CreateLogoSkill=function(e){for(;CONTAINER_SKILLS.removeChild(CONTAINER_SKILLS.lastChild),"skills__name"===CONTAINER_SKILLS.lastChild.className;);for(var t=0;t<SKILLS[e].length;t++){var o=document.createElement("div");o.classList="skills__name",CONTAINER_SKILLS.appendChild(o),o.style.zIndex="1";var n=document.createElement("div");n.classList="skills__bubble",o.appendChild(n);var i=document.createElement("img");i.classList="logo",i.src=SOURCE_LOGOS+SKILLS[e][t]+"-logo.svg",i.alt="logo "+SKILLS[e][t],n.appendChild(i);var a=document.createElement("span");a.textContent=SKILL_NAMES[e][t],o.appendChild(a)}},projectsZoom=document.querySelectorAll(".project__options--zoom"),BODY=document.querySelector("body"),SOURCE_PHOTOS="./assets/photos/project_",SOURCE_PREVIEW_PHOTOS="./assets/photos/preview_project_",Title=[],TECHNOLOGIES=[["html","css","javascript","pug","sass"],["csharp","netcore","xaml","sql","mysql","git"],["csharp","netcore","xamarin","xaml"],["c","csharp","xaml","labview"],["vscode","vs","git","labview"]],REPOSITORIES=["https://aletzman.github.io/","https://github.com/AletzMan","https://aletzman.github.io/"],CreateProject=function(){for(var e=0;e<REPOSITORIES.length-1;e++){var t=PROJECTS[0].cloneNode(!0);PROJECT_CONTAINER.appendChild(t)}Title=["Drawing Board","Test Sequence","Electronic Encyclopedia"],EditProjects()},EditProjects=function(){var e=document.querySelectorAll(".project"),t=document.querySelectorAll(".project__title"),a=document.querySelectorAll(".project__technologies"),o=document.querySelectorAll(".project__image"),n=document.querySelectorAll(".project__options--repository");document.querySelectorAll(".project__options--linkpreview");projectsZoom=document.querySelectorAll(".project__options--zoom");for(var i=0;i<e.length;i++)!function(i){t[i].innerHTML=Title[i],TECHNOLOGIES[i].forEach(function(e){var t=document.createElement("div");t.classList="project__technologies--container",a[i].appendChild(t);var o=document.createElement("img");o.src=SOURCE_LOGOS+e+"-logo.svg",o.alt="logo"+e,o.classList="project__technologies--image",t.appendChild(o);var n=document.createElement("span");n.textContent=e,n.classList="project__technologies--label",t.appendChild(n)}),o[i].src=SOURCE_PREVIEW_PHOTOS+i+".jpg",n[i].href=REPOSITORIES[i]}(i);AsignEvent();for(var r=document.querySelectorAll(".project__container"),s=0;s<r.length;s++)!function(n){r[n].addEventListener("mouseleave",function(e){r[n].style.transform="rotate(0deg)"}),r[n].addEventListener("mousemove",function(e){var t,o;console.log(r[n].offsetY),160<e.offsetX?t=2*Math.abs(80-e.offsetX/2):e.offsetX<160&&(t=-1*(160-e.offsetX)),160<e.offsetY?o=2*Math.abs(80-e.offsetY/2):e.offsetY<160&&(o=-1*(160-e.offsetY)),r[n].style.transform="rotateY(".concat(t/15*-1,"deg) rotateX(").concat(o/15,"deg)")})}(s)},containerCreate=!1,AsignEvent=function(){projectsZoom.forEach(function(e,t){e.addEventListener("mouseup",function(){MODAL_IMAGE.src=SOURCE_PHOTOS+t+".jpg",MODAL.style.transform="scale(1)",BODY.style.overflowX="hidden",BODY.style.overflowY="hidden"})})};window.addEventListener("mouseup",function(e){e.target==MODAL&&(MODAL.style.transform="scale(0)",BODY.style.overflowX="auto",BODY.style.overflowY="auto")}),MODAL_BUTTON.addEventListener("mouseup",function(e){MODAL.style.transform="scale(0)",BODY.style.overflowX="auto",BODY.style.overflowY="auto"});for(var NAME_TAG_MENU=["HOME","SKILLS","PROJECTS","ABOUT","CONTACT"],positionMenuselected=0,indexMenuCurrent=0,indexMenuBefore=0,numberOfSectionsDisplaced=0,_loop4=function(n){MOBIL_MENU_LINKS.item(n).addEventListener("mousedown",function(e){SECTIONS.forEach(function(e){e.style.opacity=0}),indexMenuBefore=indexMenuCurrent,indexMenuCurrent=n,numberOfSectionsDisplaced=Math.abs(indexMenuCurrent-indexMenuBefore),console.log(SECTIONS[n].getBoundingClientRect().height);for(var t=0,o=0;o<n;o++)t+=SECTIONS[o].getBoundingClientRect().height+80;t-=16,scroll(0,t),setTimeout(function(){SECTIONS.forEach(function(e){e.style.opacity=1})},500)})},_index9=0;_index9<MOBIL_MENU_LINKS.length;_index9++)_loop4(_index9);window.addEventListener("resize",function(){positionMenuselected=MOBILE_MENU_ITEMS.getBoundingClientRect().width/16/5*(indexMenuCurrent+1)-SELECTED_MOBILE_MENU.getBoundingClientRect().width/16-.2,SELECTED_MOBILE_MENU.style.left="".concat(positionMenuselected,"rem")}),document.addEventListener("scroll",function(){if(scrollY)for(var t="none"!=window.getComputedStyle(MOBILE_MENU_ITEMS,null).getPropertyValue("display"),e=0;e<SECTIONS.length;e++)!function(e){SECTIONS[e].getBoundingClientRect().y<350&&-20<SECTIONS[e].getBoundingClientRect().y&&(t?(positionMenuselected=MOBILE_MENU_ITEMS.getBoundingClientRect().width/16/5*(e+1)-SELECTED_MOBILE_MENU.getBoundingClientRect().width/16,SELECTED_MOBILE_MENU.style.left="".concat(positionMenuselected,"rem"),setTimeout(function(){MOBIL_MENU_LINKS.forEach(function(e){e.style.top="0.65rem"}),MOBIL_MENU_LINKS[e].style.top="0rem",SELECTED_MOBILE_MENU.innerText=NAME_TAG_MENU[e]},200)):(SELECTED_MENU_ITEM.style.left=DESKTOP_MENU_ITEMS.item(e).getBoundingClientRect().left-DESKTOP_MENU_ITEMS.item(0).getBoundingClientRect().left-1+"px",DESKTOP_MENU_LINKS.forEach(function(e){e.style.color="var(--color_font)"}),DESKTOP_MENU_LINKS.item(e).style.color="var(--color_activated)"))}(e)});