!function(e,t,s,i){(s=e.createElement(t)).async=1,s.src="//"+(location.host||"localhost").split(":")[0]+":35729/livereload.js?snipver=1",(i=e.getElementsByTagName(t)[0]).parentNode.insertBefore(s,i)}(document,"script"),function(){"use strict";function e(e){var t=e||window.event,s=(document.documentElement.scrollLeft||document.body.scrollLeft,document.documentElement.scrollTop||document.body.scrollTop);return{x:t.pageX||t.pageX,y:t.pageY||t.pageY+s}}function t(e,t){return e.currentStyle?e.currentStyle[t]:getComputedStyle(e)[t]}function s(e,t,s,i){var n={},a={},o=new Date,l=o,r=null;for(var m in t)n[m]=parseFloat(h(e,m)),a[m]=(t[m]-n[m])/s;function h(e,t){return e.currentStyle?e.currentStyle[t]:window.getComputedStyle(e)[t]}r=setInterval(function(){for(var m in l=new Date-o,t)e.style[m]="opacity"===m?n[m]+a[m]*l:n[m]+a[m]*l+"px";if(l>=s){for(var m in clearInterval(r),t)e.style[m]=t[m]+"px";i&&i.call(e,n,s)}},10)}function i(){this.start(),this.scene={player:[],bullteList:[],pos:[],enemyList:[]},this.gameLoop=[],this.bullteParams={startTime:0,deltaTime:[13,8,5],speed:[20,30,40]},this.enemyParams={startTime:0,deltaTime:[30,25,20],speed:[2,3,5],hp:[2,3,4]},this.score=0}i.prototype={start:function(){this.init(),window.requestAnimationFrame(this.update.bind(this))},init:function(){var e=this;this.bg=document.createElement("div"),this.bg.id="bg",this.level=0,this.isGameStart=!1,document.body.appendChild(this.bg);this.bg.innerHTML='\n            <h2 id="score">score:0</h2>     \n            <div id="menu">\n                <div class="title">Space Shooter</div>\n                <ul class="list">\n                    <li class="item item1"><span>Easy</span></li>\n                    <li class="item item2"><span>Medium</span></li>\n                    <li class="item item3"><span>Hard</span></li>\n                </ul>\n            </div>',document.body.appendChild(this.bg);document.getElementsByClassName("bg-item");var t=document.getElementsByClassName("item");[].forEach.call(t,function(t,s){var i=e;t.onmouseenter=function(e){i.bg.style.backgroundImage='url("./images/bg_'.concat(s+1,'.jpg")')},t.onmousedown=function(e){i.isGameStart=!0,i.level=s,i.bg.style.backgroundImage='url("./images/bg_'.concat(s+1,'.jpg")'),i.gameStart(e)},t.onmouseleave=function(e){i.isGameStart||(i.bg.style.backgroundImage='url("./images/bg_1.jpg")')}})},gameStart:function(e){this.menu=document.getElementById("menu"),this.menu.style.display="none",this.createPlayer(e),this.isGameStart=!0},createPlayer:function(s){this.player={name:"大锤"};var i=document.createElement("img");i.id="player",i.src=["./images/enemy_small.png","./images/plane_0.png","./images/plane_1.png"][this.level],this.player.dom=i,this.scene.player.push(this.player.dom),document.body.appendChild(i);var n,a,o,l,r=e(s),m=this.player.dom;function h(s){r=e(s),n=r.x-parseFloat(t(m,"width"))/2,a=r.y-parseFloat(t(m,"height"))/2,o=[this.bg.offsetLeft,this.bg.offsetLeft+this.bg.offsetWidth-m.offsetWidth],l=[this.bg.offsetTop,this.bg.offsetTop+this.bg.offsetHeight-m.offsetHeight],m.style.left=Math.max(o[0],Math.min(n,o[1]))+"px",m.style.top=Math.max(l[0],Math.min(a,l[1]))+"px"}h.call(this),document.addEventListener("mousemove",h.bind(this),!1),this.gameLoop.push(this.shoot.bind(this)),this.gameLoop.push(this.createEnemy.bind(this))},shoot:function(){if(this.bullteParams.startTime++,this.bullteParams.startTime>this.bullteParams.deltaTime[this.level]&&"none"!==this.player.dom.style.display){this.bullteParams.startTime=0;var e=document.createElement("img");e.id="bullte",e.src="./images/fire.png",this.scene.bullteList.push(e),document.body.appendChild(e);var i=parseFloat(t(e,"width")),n=parseFloat(t(this.player.dom,"width"));e.style.left=this.player.dom.offsetLeft+(n/2-i/2)+"px",e.style.top=this.player.dom.offsetTop+"px"}for(var a=0;a<this.scene.bullteList.length;a++){var o=this.scene.bullteList[a],l=o.offsetTop;o.style.top=l-this.bullteParams.speed[this.level]+"px",l<0&&(this.scene.bullteList.slice(a,1),o.parentNode.removeChild(o),a--);for(var r=0;r<this.scene.enemyList.length;r++){var m=this.scene.enemyList[r],h=[m.offsetLeft,m.offsetLeft+m.offsetWidth],d=[m.offsetTop,m.offsetTop+m.offsetHeight];if(l>d[0]&&l<d[1]&&o.offsetLeft>h[0]&&o.offsetLeft<h[1]&&(this.scene.bullteList.slice(a,1),o.parentNode.removeChild(o),a--,m.hp--,s(m,{opacity:.5},50,function(e,t){s(this,e,t,function(){this.style.opacity="1"})}),0===m.hp||!1===this.isGameStart)){this.addScore();var c=document.createElement("img");c.id="boom",c.src=this.isGameStart?"./images/boom_small.png":"./images/boom_big.png",document.body.appendChild(c),c.style.left=m.offsetLeft+"px",c.style.top=m.offsetTop+"px",this.scene.enemyList.splice(r,1),m.parentNode.removeChild(m),s(c,{opacity:0},500,function(){this.parentNode.removeChild(this)}),!1===this.isGameStart&&(m.hp=1,this.gameOver()),r--}this.player.dom.offsetTop>d[0]&&this.player.dom.offsetTop<d[1]&&this.player.dom.offsetLeft>h[0]&&this.player.dom.offsetLeft<h[1]&&(this.isGameStart=!1)}}},createEnemy:function(){this.enemyParams.startTime++;if(this.enemyParams.startTime>this.enemyParams.deltaTime[this.level]&&!0===this.isGameStart){this.enemyParams.startTime=0;var e=document.createElement("img");e.hp=this.enemyParams.hp[this.level],e.id="enemy",e.src="./images/enemy_big.png",document.body.appendChild(e),this.scene.enemyList.push(e),document.body.appendChild(e),e.style.left=Math.random()*(this.bg.offsetWidth-parseFloat(t(e,"width")))+this.bg.offsetLeft+"px",e.style.top=-e.offsetHeight-10+"px"}for(var s=0;s<this.scene.enemyList.length;s++){var i=this.scene.enemyList[s],n=parseFloat(t(i,"top"));i.style.top=n+this.enemyParams.speed[this.level]+"px",n>this.bg.offsetHeight&&(this.scene.enemyList.splice(s,1),i.parentNode.removeChild(i),s--)}},addScore:function(){this.score+=this.level+1,document.getElementById("score").innerText="score:".concat(this.score)},gameOver:function(){this.player.dom.style.display="none";var e=document.createElement("div");e.innerHTML='\n        <h2 class="title">Game Over</h2>\n        <div class="btn"><span>Restart</span></div>\n       ',e.id="gameOver",document.body.appendChild(e),document.getElementsByClassName("btn")[0].addEventListener("click",function(){document.body.innerText="",new i}.bind(this),!1)},update:function(){this.gameLoop.forEach(function(e){return e()}),window.requestAnimationFrame(this.update.bind(this))}};var n=new i;console.log(n)}();
