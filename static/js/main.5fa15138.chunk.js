(this.webpackJsonpweatherapp=this.webpackJsonpweatherapp||[]).push([[0],{10:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(3),o=a.n(r),s=(a(9),a(1)),l="fd0a0766724e6100565dbde33790fc14",u="https://api.openweathermap.org/data/2.5/";var m=function(){var e=Object(n.useState)(""),t=Object(s.a)(e,2),a=t[0],r=t[1],o=Object(n.useState)({}),m=Object(s.a)(o,2),i=m[0],p=m[1];return c.a.createElement("div",{className:"undefined"!=typeof i.main&&i.main.temp>16?"App warm":"App"},c.a.createElement("main",null,c.a.createElement("div",{className:"search-box"},c.a.createElement("input",{type:"text",className:"search-bar",placeholder:"Search City",onChange:function(e){return r(e.target.value)},value:a,onKeyPress:function(e){"Enter"===e.key&&fetch("".concat(u,"weather?q=").concat(a,"&units=metric&APPID=").concat(l)).then((function(e){return e.json()})).then((function(e){r(""),p(e),console.log(e)}))}})),"undefined"!=typeof i.main?c.a.createElement("div",null,c.a.createElement("div",{className:"location-box"},c.a.createElement("p",{className:"location"},i.name," , ",i.sys.country),c.a.createElement("p",{className:"date"},function(e){var t=["H\xe9tf\u0151","Kedd","Szerda","Cs\xfct\xf6rt\xf6k","P\xe9ntek","Szombat","Vas\xe1rnap"][e.getDay()],a=e.getDate(),n=["Janu\xe1r","Febru\xe1r","M\xe1rcius","\xc1prilis","M\xe1jus","J\xfanius","J\xfalius","Augusztus","Szeptember","Okt\xf3ber","November","December"][e.getMonth()],c=e.getFullYear();return"".concat(c," | ").concat(n," | ").concat(a," | ").concat(t)}(new Date)),c.a.createElement("p",{className:"temp"},Math.round(i.main.temp),"\xb0C"),c.a.createElement("p",{className:"weather"},i.weather[0].main))):""))};o.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(m,null)),document.getElementById("root"))},4:function(e,t,a){e.exports=a(10)},9:function(e,t,a){}},[[4,1,2]]]);
//# sourceMappingURL=main.5fa15138.chunk.js.map