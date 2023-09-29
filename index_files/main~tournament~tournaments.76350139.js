(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["main~tournament~tournaments"],{"20be":function(t,e,n){"use strict";n("c3ee")},"28e7":function(t,e,n){"use strict";n("c96a"),n("9911"),n("b0c0");var r=function(){var t=this,e=t._self._c;return e("div",{ref:"card",staticClass:"tournament-card"},[e("div",{staticClass:"tournament-card__bg"},[t.tournament.bgImage.small?e("ImageColorScanner",{staticClass:"tournament-card__image",attrs:{src:t.tournament.bgImage.small},on:{received:t.setFadeColor}}):t._e(),e("div",{staticClass:"tournament-card__fade",class:t.fadeMofifyClass})],1),e("div",{staticClass:"tournament-card__content"},[e("div",{staticClass:"tournament-card__tags"},[e("TournamentConditions",{attrs:{"is-trusted":t.tournament.isTrusted,"trust-tooltip-text":t.$t("tournament.trust")}}),e("game-tag",{attrs:{code:t.tournament.gameCode,"full-name":!0}})],1),e("pvp-link",{staticClass:"tournament-card__title",attrs:{to:t.tournament.link},nativeOn:{click:function(e){return t.handleTournamentClickNative("переход на страницу турнира")}}},[t._v(" "+t._s(t.tournament.name)+" ")]),t.tournament.hasPrizes?e("div",{staticClass:"tournament-card__fund"},[e("div",{staticClass:"tournament-card__prize-title"},[t._v(" "+t._s(t.$t("tournaments.prizePool"))+" ")]),t._l(t.tournament.prizes,(function(n,r){return e("pvp-tooltip",{key:r},[e("div",{staticClass:"tournament-card__prize"},[e("span",[t._v(t._s(n.count))]),e("icon",{attrs:{name:n.icon}})],1),e("template",{slot:"tooltip"},[t._v(t._s(n.tooltip))])],2)}))],2):t._e(),e("div",{staticClass:"tournament-card__footer"},[e("div",{staticClass:"tournament-card__buttons"},[t.tournament.userInfo.canRegister?e("pvp-btn",{staticClass:"tournament-card__button",attrs:{"is-loading":t.isRegisteringToTournament(t.id),variant:"secondary"},on:{click:function(e){return t.startRegistration(t.id)}},nativeOn:{click:function(e){return t.handleTournamentClickNative("кнопка регистрация")}}},[t._v(" "+t._s(t.$t("global.register"))+" ")]):e("pvp-btn",{staticClass:"tournament-card__button",attrs:{to:t.tournament.link,variant:"secondary"},nativeOn:{click:function(e){return t.handleTournamentClickNative("переход на страницу турнира")}}},[t._v(" "+t._s(t.$t("global.more"))+" ")])],1),t.showTimer?e("div",{staticClass:"tournament-card__time"},[e("span",{staticClass:"tournament-card__time-title"},[t._v(t._s(t.$t("tournament.timeToStart"))+": ")]),e("time-left",{staticClass:"tournament-card__time-value",attrs:{to:t.tournament.countDown.ts},on:{timeout:t.onTimeOut}})],1):t._e()])],1)])},a=[],s=n("ab96"),o=s["a"],i=(n("20be"),n("2877")),c=Object(i["a"])(o,r,a,!1,null,"4e8d6618",null);e["a"]=c.exports},"4fa0":function(t,e,n){},"6caf":function(t,e,n){"use strict";var r=function(){var t=this,e=t._self._c;return e("ul",{staticClass:"tournament-conditions"},[t.isAnticheat?e("pvp-tooltip",[e("li",{staticClass:"tournament-conditions__item"},[e("Icon",{attrs:{name:"shield",size:14}})],1),t.anticheatTooltipText?e("template",{slot:"tooltip"},[t._v(t._s(t.anticheatTooltipText))]):t._e()],2):t._e(),t.isTrusted?e("pvp-tooltip",[e("li",{staticClass:"tournament-conditions__item"},[e("Icon",{attrs:{name:"gear-check",size:14}})],1),t.trustTooltipText?e("template",{slot:"tooltip"},[t._v(t._s(t.trustTooltipText))]):t._e()],2):t._e()],1)},a=[],s=n("e545"),o={name:"TournamentConditions",components:{Icon:s["a"]},props:{isTrusted:{type:Boolean,default:!1},trustTooltipText:{type:String,default:""},isAnticheat:{type:Boolean,default:!1},anticheatTooltipText:{type:String,default:""}}},i=o,c=(n("7c6f"),n("2877")),u=Object(c["a"])(i,r,a,!1,null,"07b82c0d",null);e["a"]=u.exports},"7c6f":function(t,e,n){"use strict";n("4fa0")},ab96:function(t,e,n){"use strict";(function(t,r){var a=n("5530"),s=(n("a9e3"),n("a1cb")),o=n("bdac"),i=n("6caf");e["a"]={name:"TournamentCard",components:{ImageColorScanner:o["a"],TournamentConditions:i["a"]},props:{id:{type:Number,required:!0}},data:function(){return{loadingState:{cancel:!1,confirm:!1,avarageColor:{}},focusedTournamentId:NaN,isCardColorDark:!1,showTimer:!0}},computed:Object(a["a"])(Object(a["a"])(Object(a["a"])({},t("tournamentRegistration",["isRegisteringToTournament"])),t("tournaments",["getTournamentCard"])),{},{tournament:function(){return this.getTournamentCard(this.id)},fadeMofifyClass:function(){return this.isCardColorDark?"tournament-card__fade--dark":"tournament-card__fade--light"}}),methods:Object(a["a"])(Object(a["a"])({},r("tournamentRegistration",["startRegistration"])),{},{onTimeOut:function(){this.showTimer=!1},setFadeColor:function(t){this.$refs.card.style.setProperty("--card-color","".concat(t.hex)),this.isCardColorDark=t.isDark},handleTournamentClickNative:function(t){var e={category:"pvp",action:"tourn_recom_click",label:t,url:window.location.href};Object(s["a"])("pvp_tourn_recom_click",e)}})}}).call(this,n("2f62")["mapGetters"],n("2f62")["mapActions"])},bdac:function(t,e,n){"use strict";var r=function(){var t=this,e=t._self._c;return e("img",{attrs:{src:t.src,crossorigin:"anonymous"}})},a=[],s=n("c7eb"),o=n("1da1");
/*! Fast Average Color | © 2022 Denis Seleznev | MIT License | https://github.com/fast-average-color/fast-average-color */
function i(t){var e=t.toString(16);return 1===e.length?"0"+e:e}function c(t){return"#"+t.map(i).join("")}function u(t){var e=(299*t[0]+587*t[1]+114*t[2])/1e3;return e<128}function l(t){return t?g(t)?t:[t]:[]}function g(t){return Array.isArray(t[0])}function d(t,e,n){for(var r=0;r<n.length;r++)if(m(t,e,n[r]))return!0;return!1}function m(t,e,n){switch(n.length){case 3:if(f(t,e,n))return!0;break;case 4:if(v(t,e,n))return!0;break;case 5:if(p(t,e,n))return!0;break;default:return!1}}function f(t,e,n){return 255!==t[e+3]||t[e]===n[0]&&t[e+1]===n[1]&&t[e+2]===n[2]}function v(t,e,n){return t[e+3]&&n[3]?t[e]===n[0]&&t[e+1]===n[1]&&t[e+2]===n[2]&&t[e+3]===n[3]:t[e+3]===n[3]}function h(t,e,n){return t>=e-n&&t<=e+n}function p(t,e,n){var r=n[0],a=n[1],s=n[2],o=n[3],i=n[4],c=t[e+3],u=h(c,o,i);return o?!(c||!u)||!!(h(t[e],r,i)&&h(t[e+1],a,i)&&h(t[e+2],s,i)&&u):u}function b(t,e,n){for(var r={},a=24,s=n.ignoredColor,o=n.step,i=[0,0,0,0,0],c=0;c<e;c+=o){var u=t[c],l=t[c+1],g=t[c+2],m=t[c+3];if(!s||!d(t,c,s)){var f=Math.round(u/a)+","+Math.round(l/a)+","+Math.round(g/a);r[f]?r[f]=[r[f][0]+u*m,r[f][1]+l*m,r[f][2]+g*m,r[f][3]+m,r[f][4]+1]:r[f]=[u*m,l*m,g*m,m,1],i[4]<r[f][4]&&(i=r[f])}}var v=i[0],h=i[1],p=i[2],b=i[3],_=i[4];return b?[Math.round(v/b),Math.round(h/b),Math.round(p/b),Math.round(b/_)]:n.defaultColor}function _(t,e,n){for(var r=0,a=0,s=0,o=0,i=0,c=n.ignoredColor,u=n.step,l=0;l<e;l+=u){var g=t[l+3],m=t[l]*g,f=t[l+1]*g,v=t[l+2]*g;c&&d(t,l,c)||(r+=m,a+=f,s+=v,o+=g,i++)}return o?[Math.round(r/o),Math.round(a/o),Math.round(s/o),Math.round(o/i)]:n.defaultColor}function C(t,e,n){for(var r=0,a=0,s=0,o=0,i=0,c=n.ignoredColor,u=n.step,l=0;l<e;l+=u){var g=t[l],m=t[l+1],f=t[l+2],v=t[l+3];c&&d(t,l,c)||(r+=g*g*v,a+=m*m*v,s+=f*f*v,o+=v,i++)}return o?[Math.round(Math.sqrt(r/o)),Math.round(Math.sqrt(a/o)),Math.round(Math.sqrt(s/o)),Math.round(o/i)]:n.defaultColor}function w(t){return k(t,"defaultColor",[0,0,0,0])}function k(t,e,n){return void 0===t[e]?n:t[e]}var y=10,T=100;function x(t){return-1!==t.search(/\.svg(\?|$)/i)}function M(t){if(I(t)){var e=t.naturalWidth,n=t.naturalHeight;return!t.naturalWidth&&x(t.src)&&(e=n=T),{width:e,height:n}}return H(t)?{width:t.videoWidth,height:t.videoHeight}:{width:t.width,height:t.height}}function O(t){return R(t)?"canvas":E(t)?"offscreencanvas":L(t)?"imagebitmap":t.src}function I(t){return"undefined"!==typeof HTMLImageElement&&t instanceof HTMLImageElement}var j="undefined"!==typeof OffscreenCanvas;function E(t){return j&&t instanceof OffscreenCanvas}function H(t){return"undefined"!==typeof HTMLVideoElement&&t instanceof HTMLVideoElement}function R(t){return"undefined"!==typeof HTMLCanvasElement&&t instanceof HTMLCanvasElement}function L(t){return"undefined"!==typeof ImageBitmap&&t instanceof ImageBitmap}function S(t,e){var n,r=k(e,"left",0),a=k(e,"top",0),s=k(e,"width",t.width),o=k(e,"height",t.height),i=s,c=o;return"precision"===e.mode||(s>o?(n=s/o,i=T,c=Math.round(i/n)):(n=o/s,c=T,i=Math.round(c/n)),(i>s||c>o||i<y||c<y)&&(i=s,c=o)),{srcLeft:r,srcTop:a,srcWidth:s,srcHeight:o,destWidth:i,destHeight:c}}var z="undefined"===typeof window;function W(){return z?j?new OffscreenCanvas(1,1):null:document.createElement("canvas")}var A="FastAverageColor: ";function D(t){return Error(A+t)}function q(t,e){e||console.error(t)}var N=function(){function t(){this.canvas=null,this.ctx=null}return t.prototype.getColorAsync=function(t,e){if(!t)return Promise.reject(D("call .getColorAsync() without resource."));if("string"===typeof t){if("undefined"===typeof Image)return Promise.reject(D("resource as string is not supported in this environment"));var n=new Image;return n.crossOrigin=e&&e.crossOrigin||"",n.src=t,this.bindImageEvents(n,e)}if(I(t)&&!t.complete)return this.bindImageEvents(t,e);var r=this.getColor(t,e);return r.error?Promise.reject(r.error):Promise.resolve(r)},t.prototype.getColor=function(t,e){e=e||{};var n=w(e);if(!t){var r=D("call .getColor(null) without resource");return q(r,e.silent),this.prepareResult(n,r)}var a=M(t),s=S(a,e);if(!s.srcWidth||!s.srcHeight||!s.destWidth||!s.destHeight){r=D('incorrect sizes for resource "'.concat(O(t),'"'));return q(r,e.silent),this.prepareResult(n,r)}if(!this.canvas&&(this.canvas=W(),!this.canvas)){r=D("OffscreenCanvas is not supported in this browser");return q(r,e.silent),this.prepareResult(n,r)}if(!this.ctx){if(this.ctx=this.canvas.getContext("2d",{willReadFrequently:!0}),!this.ctx){r=D("Canvas Context 2D is not supported in this browser");return q(r,e.silent),this.prepareResult(n)}this.ctx.imageSmoothingEnabled=!1}this.canvas.width=s.destWidth,this.canvas.height=s.destHeight;try{this.ctx.clearRect(0,0,s.destWidth,s.destHeight),this.ctx.drawImage(t,s.srcLeft,s.srcTop,s.srcWidth,s.srcHeight,0,0,s.destWidth,s.destHeight);var o=this.ctx.getImageData(0,0,s.destWidth,s.destHeight).data;return this.prepareResult(this.getColorFromArray4(o,e))}catch(i){r=D("security error (CORS) for resource ".concat(O(t),".\nDetails: https://developer.mozilla.org/en/docs/Web/HTML/CORS_enabled_image"));return q(r,e.silent),!e.silent&&console.error(i),this.prepareResult(n,r)}},t.prototype.getColorFromArray4=function(t,e){e=e||{};var n=4,r=t.length,a=w(e);if(r<n)return a;var s,o=r-r%n,i=(e.step||1)*n;switch(e.algorithm||"sqrt"){case"simple":s=_;break;case"sqrt":s=C;break;case"dominant":s=b;break;default:throw D("".concat(e.algorithm," is unknown algorithm"))}return s(t,o,{defaultColor:a,ignoredColor:l(e.ignoredColor),step:i})},t.prototype.prepareResult=function(t,e){var n=t.slice(0,3),r=[t[0],t[1],t[2],t[3]/255],a=u(t);return{value:[t[0],t[1],t[2],t[3]],rgb:"rgb("+n.join(",")+")",rgba:"rgba("+r.join(",")+")",hex:c(n),hexa:c(t),isDark:a,isLight:!a,error:e}},t.prototype.destroy=function(){this.canvas&&(this.canvas.width=1,this.canvas.height=1,this.canvas=null),this.ctx=null},t.prototype.bindImageEvents=function(t,e){var n=this;return new Promise((function(r,a){var s=function(){c();var s=n.getColor(t,e);s.error?a(s.error):r(s)},o=function(){c(),a(D('Error loading image "'.concat(t.src,'".')))},i=function(){c(),a(D('Image "'.concat(t.src,'" loading aborted')))},c=function(){t.removeEventListener("load",s),t.removeEventListener("error",o),t.removeEventListener("abort",i)};t.addEventListener("load",s),t.addEventListener("error",o),t.addEventListener("abort",i)}))},t}(),P={name:"ImageColorScanner",props:{src:{type:String,required:!0}},data:function(){return{scanner:""}},computed:{options:function(){return{}}},mounted:function(){this.init()},methods:{init:function(){this.scanner=new N,this.getColor()},getColor:function(){var t=this;return Object(o["a"])(Object(s["a"])().mark((function e(){var n;return Object(s["a"])().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.scanner.getColorAsync(t.src,t.options);case 2:n=e.sent,t.$emit("received",n);case 4:case"end":return e.stop()}}),e)})))()}}},$=P,F=n("2877"),B=Object(F["a"])($,r,a,!1,null,null,null);e["a"]=B.exports},c3ee:function(t,e,n){},e410:function(t,e,n){var r={"./games/armored-warfare.svg":"b29b","./games/battlerite.svg":"bcf4","./games/brawl-stars.svg":"a4f8","./games/clash-royal.svg":"c58a","./games/crossfire.svg":"1c04","./games/csgo.svg":"1bf0","./games/default.svg":"1a60","./games/dota2.svg":"ed18","./games/fifa.svg":"8bd4","./games/fortnite.svg":"0e40","./games/heartstone.svg":"76a3","./games/hero-of-the-storm.svg":"e76c","./games/mortal-kombat.svg":"9ab8","./games/overwatch.svg":"bd62","./games/project-cars.svg":"191f","./games/pubg-mobile.svg":"9b9b","./games/pubg.svg":"167c","./games/quake.svg":"6420","./games/rocket-league.svg":"c42b","./games/starcraft.svg":"7674","./games/street-fighter.svg":"95d5","./games/tekken.svg":"e813","./games/war-robots.svg":"cc46","./games/war-thunder.svg":"cac4","./games/warface.svg":"539c","./games/wot.svg":"576f","./general/bust.svg":"f98b","./general/chart-arrow.svg":"dd28","./general/check.svg":"2f7c","./general/chevron.svg":"2e06","./general/circle-i.svg":"b71a","./general/circle-k.svg":"7786","./general/clone-icon.svg":"8a00","./general/crossed-out-circle.svg":"07a5","./general/gear-check.svg":"e857","./general/gear-wheel.svg":"4dc5","./general/globe.svg":"c0a3","./general/lens.svg":"d78d","./general/shield.svg":"b36b","./general/star.svg":"8dff","./general/steam.svg":"46ac","./general/triangle-warning.svg":"a1b2","./general/user.svg":"abfb","./general/x.svg":"425a","./minigames/all.svg":"c9aa","./minigames/backgammonlong.svg":"19e3","./minigames/backgammonshort.svg":"c78c","./minigames/balda.svg":"1454","./minigames/checkers.svg":"0756","./minigames/domino.svg":"ed3c","./minigames/durak.svg":"56d9","./minigames/erudit.svg":"8cd6","./minigames/loto.svg":"e3a4","./minigames/poker-cube.svg":"dcbef","./minigames/poker.svg":"9e33","./minigames/pool-rus.svg":"9aa0","./minigames/pool.svg":"106c","./minigames/preferance.svg":"0682","./minigames/transdurak.svg":"05b5"};function a(t){var e=s(t);return n(e)}function s(t){if(!n.o(r,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return r[t]}a.keys=function(){return Object.keys(r)},a.resolve=s,t.exports=a,a.id="e410"},e545:function(t,e,n){"use strict";var r=function(){var t=this,e=t._self._c;return e("svg",{staticClass:"icon",attrs:{width:t.svgSize,height:t.svgSize,fill:"currentColor"}},[e("use",{attrs:{"xlink:href":"#".concat(t.svg.id)}})])},a=[],s=(n("a9e3"),n("99af"),n("b0c0"),{name:"Icon",props:{name:{type:String,required:!0},size:{type:Number,default:24},inline:{type:Boolean,default:!1},group:{type:String,default:"general"}},computed:{svg:function(){try{var t=n("e410")("./".concat(this.group?"".concat(this.group,"/"):"").concat(this.name,".svg"));return t.default}catch(e){return{}}},svgSize:function(){return this.inline?"1em":this.size}}}),o=s,i=n("2877"),c=Object(i["a"])(o,r,a,!1,null,null,null);e["a"]=c.exports}}]);
//# sourceMappingURL=main~tournament~tournaments.76350139.js.map