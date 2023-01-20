"use strict";function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _defineProperties(e,t){for(var o=0;o<t.length;o++){var n=t[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function _createClass(e,t,o){return t&&_defineProperties(e.prototype,t),o&&_defineProperties(e,o),e}var menuDesktop=document.querySelectorAll(".header__menu a"),menuDesktopArea=document.querySelectorAll(".header__menu li"),selectItemMenu=document.querySelector(".menu__selection"),presentation=document.querySelector(".description__profesion"),sections=document.querySelectorAll(".section"),sectionHome=document.querySelector(".home"),header=document.querySelector(".header"),footer=document.querySelector(".footer"),typeSkills=document.querySelectorAll(".technologies"),containerSkills=document.querySelector(".logos"),containerProjects=document.querySelector(".projects__container"),project=document.querySelector(".project"),menuMobilSelect=document.querySelector(".menumobil__link--select"),menuMobilContainer=document.querySelector(".menumobil"),menuMobil=document.querySelectorAll(".link");selectItemMenu.style.left="0px",selectItemMenu.style.top="0px";var textPresentation=["Software Developer","Front-End Developer","Electrical Design"],numbertags=45,containerTags=[],nameTags=["<header>","<section>","<footer>","<nav>","<aside>","<img>","<button>","<input>","<picture>","<table>","<meta>","<select>","<span>","<textarea>","<video>"],nameLogos=["html","css","javascript","sass","pug","git","github","mysql","csharp","netcore","xamarin","xaml","c","vscode","vs","labview","teststand","cvi"],mobileDetect=function(){var e,t=!1;return e=navigator.userAgent||navigator.vendor||window.opera,(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(e)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(e.substr(0,4)))&&(t=!0),t};onload=function(){CreateLogoSkill(0),CreateProject(),initAnimation(),scroll(0,0)};for(var index=0;index<menuDesktop.length;index++)menuDesktop.item(index).addEventListener("mouseup",function(e){menuDesktop.forEach(function(e){e.style.color="var(--color_font)"}),setTimeout(function(){e.target.style.color="var(--color_activated)"},1500),"HOME"===e.target.innerHTML&&setTimeout(function(){scroll(0,0)},0)});setTimeout(function(){setInterval(function(){e<textPresentation[n].length&&!t?(presentation.innerHTML+=textPresentation[n][e],o=textPresentation[n],e+=1):((new Date).getTime(),t=!0);t&&(presentation.innerHTML=o.substring(0,e),--e,0==presentation.innerHTML.length&&(t=!1,e=0,(n+=1)>textPresentation.length-1&&(n=0)))},100);var e=0,t=!1,o="",n=0},1600);var TagBubble=function(){function s(e,t,o,n,i){_classCallCheck(this,s),this.posX=e,this.posY=t,this.speedX=o,this.speedY=n,this.mass=i,this.isColliding=!1}return _createClass(s,[{key:"createItem",value:function(){var o=this,e=document.createElement("div");e.style.backgroundImage="url('./assets/icons/"+nameLogos[GetRandomNumber(0,nameLogos.length-1)]+"-logo.svg')",e.classList="tag__move",e.style.left="".concat(this.posX,"px"),e.style.top="".concat(this.posY,"px"),containerTags.push(e),sectionHome.appendChild(e);var t=parseFloat(window.getComputedStyle(e,null).getPropertyValue("font-size"));e.style.width="".concat(Math.floor(e.getBoundingClientRect().width+40),"px"),e.style.paddingTop="".concat(Math.floor(e.getBoundingClientRect().width/2)-t/1.5,"px"),e.style.height="".concat(Math.floor(e.getBoundingClientRect().width),"px"),this.width=Math.floor(e.getBoundingClientRect().width),this.height=Math.floor(e.getBoundingClientRect().height),this.initPosMouseX=0,this.initPosMouseY=0,e.addEventListener("mousedown",function(e){o.initPosMouseX=e.clientX,o.initPosMouseY=e.clientY});var n=0,i=0;body.addEventListener("mouseup",function(e){if(0!=o.initPosMouseX){n=0<o.initPosMouseX-e.clientX?-10:10,i=0<o.initPosMouseY-e.clientY?-10:10;for(var t=0;t<20;t++)setTimeout(function(){o.speedX+=n,o.speedY+=i},50);o.initPosMouseX=0,o.initPosMouseY=0}})}},{key:"updatePosition",value:function(e){this.posX+=this.speedX*e,this.posY+=this.speedY*e}}]),s}(),timeElapsed=0,oldTimeStamp=0,bubblesContainer=[],initAnimation=function(){createBubbleTags(),window.requestAnimationFrame(function(e){animationLoop(e)})},createBubbleTags=function(){for(var e=0;e<numbertags;e++){var t=GetRandomNumber(50,window.innerWidth-50),o=GetRandomNumber(100,body.getBoundingClientRect().height-20);bubblesContainer.push(new TagBubble(t,o,GetRandomNumber(-20,70),GetRandomNumber(-20,70),GetRandomNumber(1,10)))}for(var n=0;n<bubblesContainer.length;n++)bubblesContainer[n].createItem(),bubblesContainer[n].mass=150*bubblesContainer[n].width},animationLoop=function e(t){timeElapsed=(t-oldTimeStamp)/1e3,oldTimeStamp=t;for(var o=0;o<bubblesContainer.length;o++)bubblesContainer[o].updatePosition(timeElapsed);UpdatePosition(),detectCollisions(),borderCollisionDetection(),window.requestAnimationFrame(e)},UpdatePosition=function(){for(var e=0;e<containerTags.length;e++)containerTags[e].style.left=bubblesContainer[e].posX+"px",containerTags[e].style.top=bubblesContainer[e].posY+"px"},detectCollisions=function(){for(var e,t,o=0;o<bubblesContainer.length;o++)bubblesContainer[o].isColliding=!1;for(var n=0;n<bubblesContainer.length;n++){e=bubblesContainer[n];for(var i=n+1;i<bubblesContainer.length;i++)if(t=bubblesContainer[i],intersectionCircles(e.posX,e.posY,e.width/2,t.posX,t.posY,t.width/2)){e.isColliding=!0,t.isColliding=!0;var s=t.posX-e.posX,r=t.posY-e.posY,a=Math.sqrt((t.posX-e.posX)*(t.posX-e.posX)+(t.posY-e.posY)*(t.posY-e.posY)),l=s/a,c=r/a,u=(e.speedX-t.speedX)*l+(e.speedY-t.speedY)*c;if(u<0)break;var d=2*u/(e.mass+t.mass);e.speedX-=d*t.mass*l,e.speedY-=d*t.mass*c,t.speedX+=d*e.mass*l,t.speedY+=d*e.mass*c}}},borderCollisionDetection=function(){for(var e,t=window.outerWidth-30,o=body.getBoundingClientRect().height-70,n=0;n<bubblesContainer.length;n++)(e=bubblesContainer[n]).posX<1?(e.speedX=.95*Math.abs(e.speedX),e.posX=1):e.posX>t-e.width&&(e.speedX=.95*-Math.abs(e.speedX),e.posX=t-e.width),e.posY<100?(e.speedY=.95*Math.abs(e.speedY),e.posY=100):e.posY>o-e.height&&(e.speedY=.95*-Math.abs(e.speedY),e.posY=o-e.height)};function intersectionCircles(e,t,o,n,i,s){return(e-n)*(e-n)+(t-i)*(t-i)<=(o+s)*(o+s)}function GetRandomNumber(e,t){return Math.floor(Math.random()*(t-e)+e)}function GetRandomNumberFloat(e,t){return Math.random()*(t-e)+e}var sourceLogos="./assets/icons/",selectSkills=document.querySelector(".logos__select");selectSkills.addEventListener("change",function(e){console.log(e.target.value),CreateLogoSkill(e.target.value)});for(var _loop=function(t){typeSkills[t].addEventListener("click",function(e){CreateLogoSkill(t)})},_index4=0;_index4<typeSkills.length;_index4++)_loop(_index4);var SKILLS=[["html","css","javascript","pug","sass","git","github","vscode"],["csharp","netcore","xaml","git","github","vs"],["csharp","netcore","xamarin","xaml","vs","git","github"],["c","csharp","xaml","labview","siemens","git","github"],["vscode","vs","git","labview","teststand","cvi","tiaportal"]],SKILLSNAME=[["html","css","javascript","pug","sass","git","git hub","visual studio code"],["c#","netcore","xaml","git","github","visual studio"],["c#","netcore","xamarin forms","xaml","visual studio","git","github"],["c","c#","xaml","labview (Graphic)","scl, kop","git","github"],["visual studio code","visual studio","git","labview","teststand","lab/windows cvi","tia portal"]],CreateLogoSkill=function(e){for(;containerSkills.removeChild(containerSkills.lastChild),"logos__name"===containerSkills.lastChild.className;);for(var t=0;t<SKILLS[e].length;t++){var o=document.createElement("div");o.classList="logos__name",containerSkills.appendChild(o),o.style.zIndex="1";var n=document.createElement("div");n.classList="logos__bubble",o.appendChild(n);var i=document.createElement("img");i.classList="logo",i.src=sourceLogos+SKILLS[e][t]+"-logo.svg",i.alt="logo "+SKILLS[e][t],n.appendChild(i);var s=document.createElement("span");s.textContent=SKILLSNAME[e][t],o.appendChild(s)}},projectsZoom=document.querySelectorAll(".project__options--zoom"),body=document.querySelector("body"),sourcePhotos="./assets/photos/project_",Title=["Draw Board","Test Sequence","Electronic Encyclopedia"],Technologies=[["html","css","javascript","pug","sass"],["csharp","netcore","xaml","sql","mysql","git","github"],["csharp","netcore","xamarin","xaml"],["c","csharp","xaml","labview"],["vscode","vs","git","labview"]],Repositories=["https://aletzman.github.io/","https://github.com/AletzMan","https://aletzman.github.io/"],CreateProject=function(){for(var e=0;e<2;e++){var t=project.cloneNode(!0);containerProjects.appendChild(t)}EditProjects()},EditProjects=function(){var e=document.querySelectorAll(".project"),t=document.querySelectorAll(".project__title"),s=document.querySelectorAll(".project__technologies"),o=document.querySelectorAll(".project__image"),n=document.querySelectorAll(".project__options--repository");document.querySelectorAll(".project__options--linkpreview");projectsZoom=document.querySelectorAll(".project__options--zoom");for(var i=0;i<e.length;i++)!function(i){t[i].innerHTML=Title[i],Technologies[i].forEach(function(e){var t=document.createElement("div");t.classList="project__technologies--container",s[i].appendChild(t);var o=document.createElement("img");o.src=sourceLogos+e+"-logo.svg",o.alt="logo"+e,o.classList="project__technologies--image",t.appendChild(o);var n=document.createElement("span");n.textContent=e,n.classList="project__technologies--label",t.appendChild(n)}),o[i].src=sourcePhotos+i+".jpg",n[i].href=Repositories[i]}(i);AsignEvent()},containerCreate=!1,AsignEvent=function(){document.querySelector(".projects");projectsZoom.forEach(function(e,n){e.addEventListener("mouseup",function(){containerCreate=!1;var e=document.createElement("div");e.classList="previewContainer",e.style.height=window.innerHeight+18+"px",body.appendChild(e),e.style.top=scrollY+"px",e.style.left="0px";var t=document.createElement("div");t.classList="previewContainer__preview",e.appendChild(t);var o=document.createElement("img");o.classList="previewContainer__preview--image",o.src=sourcePhotos+n+".jpg",t.appendChild(o),body.style.overflowX="hidden",body.style.overflowY="hidden",setTimeout(function(){containerCreate=!0},1200)})})};body.addEventListener("mouseup",function(){if(containerCreate){for(;body.removeChild(body.lastChild),"previewContainer"===body.lastChild.className;);body.style.overflowX="auto",body.style.overflowY="auto"}});for(var nameTagMenu=["HOME","SKILLS","PROJECTS","ABOUT","CONTACT"],positionMenuselected=0,indexMenuCurrent=0,indexMenuBefore=0,numberOfSectionsDisplaced=0,_loop3=function(n){menuMobil.item(n).addEventListener("mousedown",function(e){sections.forEach(function(e){e.style.opacity=0}),indexMenuBefore=indexMenuCurrent,indexMenuCurrent=n,numberOfSectionsDisplaced=Math.abs(indexMenuCurrent-indexMenuBefore),console.log(sections[n].getBoundingClientRect().height);for(var t=0,o=0;o<n;o++)t+=sections[o].getBoundingClientRect().height+80;t-=16,scroll(0,t),setTimeout(function(){sections.forEach(function(e){e.style.opacity=1})},500)})},_index8=0;_index8<menuMobil.length;_index8++)_loop3(_index8);window.addEventListener("resize",function(){positionMenuselected=menuMobilContainer.getBoundingClientRect().width/16/5*(indexMenuCurrent+1)-menuMobilSelect.getBoundingClientRect().width/16-.2,menuMobilSelect.style.left="".concat(positionMenuselected,"rem")}),document.addEventListener("scroll",function(){if(scrollY)for(var t="none"!=window.getComputedStyle(menuMobilContainer,null).getPropertyValue("display"),e=0;e<sections.length;e++)!function(e){sections[e].getBoundingClientRect().y<350&&-20<sections[e].getBoundingClientRect().y&&(t?(positionMenuselected=menuMobilContainer.getBoundingClientRect().width/16/5*(e+1)-menuMobilSelect.getBoundingClientRect().width/16,menuMobilSelect.style.left="".concat(positionMenuselected,"rem"),setTimeout(function(){menuMobil.forEach(function(e){e.style.filter="invert(1)",e.style.top="0.65rem"}),menuMobil[e].style.filter="brightness(1)",menuMobil[e].style.top="0rem",menuMobilSelect.innerText=nameTagMenu[e]},200)):(selectItemMenu.style.left=menuDesktopArea.item(e).getBoundingClientRect().left-menuDesktopArea.item(0).getBoundingClientRect().left-1+"px",menuDesktop.forEach(function(e){e.style.color="var(--color_font)"}),menuDesktop.item(e).style.color="var(--color_activated)"))}(e)});