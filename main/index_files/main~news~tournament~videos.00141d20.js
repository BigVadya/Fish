(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["main~news~tournament~videos"],{4200:function(t,a,i){"use strict";i("f87d")},b411:function(t,a,i){},d4de:function(t,a,i){"use strict";var e=function(){var t=this,a=t._self._c;return t.diff?a("div",{staticClass:"flip"},[t._t("default"),a("div",{staticClass:"flip-clock"},[a("div",{staticClass:"flip-clock-box"},[t._l(t.time.days,(function(t,i){return a("FlipCard",{key:i,attrs:{data:t}})})),a("span",{staticClass:"flip-clock-text"},[t._v(" "+t._s(t.$t("date.days_few"))+" ")])],2),a("div",{staticClass:"flip-clock-divider"},[t._v(":")]),a("div",{staticClass:"flip-clock-box"},[t._l(t.time.hours,(function(t,i){return a("FlipCard",{key:i,attrs:{data:t}})})),a("span",{staticClass:"flip-clock-text"},[t._v(" "+t._s(t.$t("date.hours_few"))+" ")])],2),a("div",{staticClass:"flip-clock-divider"},[t._v(":")]),a("div",{staticClass:"flip-clock-box"},[t._l(t.time.minutes,(function(t,i){return a("FlipCard",{key:i,attrs:{data:t}})})),a("span",{staticClass:"flip-clock-text"},[t._v(" "+t._s(t.$t("date.minutes_few"))+" ")])],2)])],2):t._e()},s=[],n=i("ade3"),c=i("5530"),r=(i("a9e3"),i("b65fe"),i("13d5"),i("d3b7"),i("b64b"),i("d81d"),function(){var t=this,a=t._self._c;return a("span",{key:t.data.current,ref:"card",staticClass:"flip-clock__piece"},[a("span",{staticClass:"flip-clock__card flip-card"},[a("b",{staticClass:"flip-card__top"},[t._v(t._s(t.data.current))]),a("b",{staticClass:"flip-card__bottom",attrs:{"data-value":t.data.current}}),a("b",{staticClass:"flip-card__back",attrs:{"data-value":t.data.previous}}),a("b",{staticClass:"flip-card__back-bottom",attrs:{"data-value":t.data.previous}})])])}),l=[],d={props:{data:{type:Object,required:!0}},updated:function(){var t=this.$refs.card;t&&(t.classList.remove("flip"),t.offsetWidth,t.classList.add("flip"))}},o=d,u=(i("d5e8"),i("2877")),f=Object(u["a"])(o,r,l,!1,null,null,null),p=f.exports,v={name:"FlipCountdown",components:{FlipCard:p},props:{deadline:{type:Number,required:!0},stop:{type:Boolean,required:!1}},component:{FlipCard:p},data:function(){return{now:Math.trunc((new Date).getTime()/1e3),interval:null,diff:0,show:!1}},computed:{time:function(){var t=function(t){return"".concat(t>9?t:"0".concat(t))},a=function(a){var i=a%60,e=(a-i)/60%60,s=((a-i)/60-e)/60%24,n=Math.trunc(a/86400);return{seconds:t(i),minutes:t(e),hours:t(s),days:t(n)}},i=a(this.diff),e=a(this.diff+1);return Object.keys(i).reduce((function(t,a){return Object(c["a"])(Object(c["a"])({},t),{},Object(n["a"])({},a,[].map.call(i[a],(function(t,i){return{current:t,previous:e[a][i]}}))))}),{})}},watch:{now:function(){this.diff=this.deadline-this.now,(this.diff<=0||this.stop)&&(this.diff=0,clearInterval(this.interval))}},created:function(){var t=this;this.interval=setInterval((function(){t.now=Math.trunc((new Date).getTime()/1e3)}),1e3)},mounted:function(){0!==this.diff&&(this.show=!0)},beforeDestroy:function(){window.cancelAnimationFrame&&cancelAnimationFrame(this.frame)},destroyed:function(){clearInterval(this.interval)}},_=v,h=(i("4200"),Object(u["a"])(_,e,s,!1,null,"0228850c",null));a["a"]=h.exports},d5e8:function(t,a,i){"use strict";i("b411")},f87d:function(t,a,i){}}]);
//# sourceMappingURL=main~news~tournament~videos.00141d20.js.map