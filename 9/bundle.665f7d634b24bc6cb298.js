(()=>{var t={10:(t,e,n)=>{"use strict";n.d(e,{Z:()=>a});var i=n(537),s=n.n(i),r=n(645),o=n.n(r)()(s());o.push([t.id,".shake {\n  animation: shake 0.6s;\n  position: relative;\n  z-index: 10;\n}\n\n@keyframes shake {\n  0%,\n  100% {\n    transform: translateX(0);\n  }\n\n  10%,\n  30%,\n  50%,\n  70%,\n  90% {\n    transform: translateX(-5px);\n  }\n\n  20%,\n  40%,\n  60%,\n  80% {\n    transform: translateX(5px);\n  }\n}\n","",{version:3,sources:["webpack://./src/framework/view/abstract-view.css"],names:[],mappings:"AAAA;EACE,qBAAqB;EACrB,kBAAkB;EAClB,WAAW;AACb;;AAEA;EACE;;IAEE,wBAAwB;EAC1B;;EAEA;;;;;IAKE,2BAA2B;EAC7B;;EAEA;;;;IAIE,0BAA0B;EAC5B;AACF",sourcesContent:[".shake {\n  animation: shake 0.6s;\n  position: relative;\n  z-index: 10;\n}\n\n@keyframes shake {\n  0%,\n  100% {\n    transform: translateX(0);\n  }\n\n  10%,\n  30%,\n  50%,\n  70%,\n  90% {\n    transform: translateX(-5px);\n  }\n\n  20%,\n  40%,\n  60%,\n  80% {\n    transform: translateX(5px);\n  }\n}\n"],sourceRoot:""}]);const a=o},645:t=>{"use strict";t.exports=function(t){var e=[];return e.toString=function(){return this.map((function(e){var n="",i=void 0!==e[5];return e[4]&&(n+="@supports (".concat(e[4],") {")),e[2]&&(n+="@media ".concat(e[2]," {")),i&&(n+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),n+=t(e),i&&(n+="}"),e[2]&&(n+="}"),e[4]&&(n+="}"),n})).join("")},e.i=function(t,n,i,s,r){"string"==typeof t&&(t=[[null,t,void 0]]);var o={};if(i)for(var a=0;a<this.length;a++){var l=this[a][0];null!=l&&(o[l]=!0)}for(var c=0;c<t.length;c++){var u=[].concat(t[c]);i&&o[u[0]]||(void 0!==r&&(void 0===u[5]||(u[1]="@layer".concat(u[5].length>0?" ".concat(u[5]):""," {").concat(u[1],"}")),u[5]=r),n&&(u[2]?(u[1]="@media ".concat(u[2]," {").concat(u[1],"}"),u[2]=n):u[2]=n),s&&(u[4]?(u[1]="@supports (".concat(u[4],") {").concat(u[1],"}"),u[4]=s):u[4]="".concat(s)),e.push(u))}},e}},537:t=>{"use strict";t.exports=function(t){var e=t[1],n=t[3];if(!n)return e;if("function"==typeof btoa){var i=btoa(unescape(encodeURIComponent(JSON.stringify(n)))),s="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(i),r="/*# ".concat(s," */");return[e].concat([r]).join("\n")}return[e].join("\n")}},484:function(t){t.exports=function(){"use strict";var t=6e4,e=36e5,n="millisecond",i="second",s="minute",r="hour",o="day",a="week",l="month",c="quarter",u="year",d="date",p="Invalid Date",f=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,h=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,m={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(t){var e=["th","st","nd","rd"],n=t%100;return"["+t+(e[(n-20)%10]||e[n]||e[0])+"]"}},v=function(t,e,n){var i=String(t);return!i||i.length>=e?t:""+Array(e+1-i.length).join(n)+t},_={s:v,z:function(t){var e=-t.utcOffset(),n=Math.abs(e),i=Math.floor(n/60),s=n%60;return(e<=0?"+":"-")+v(i,2,"0")+":"+v(s,2,"0")},m:function t(e,n){if(e.date()<n.date())return-t(n,e);var i=12*(n.year()-e.year())+(n.month()-e.month()),s=e.clone().add(i,l),r=n-s<0,o=e.clone().add(i+(r?-1:1),l);return+(-(i+(n-s)/(r?s-o:o-s))||0)},a:function(t){return t<0?Math.ceil(t)||0:Math.floor(t)},p:function(t){return{M:l,y:u,w:a,d:o,D:d,h:r,m:s,s:i,ms:n,Q:c}[t]||String(t||"").toLowerCase().replace(/s$/,"")},u:function(t){return void 0===t}},y="en",$={};$[y]=m;var b=function(t){return t instanceof S},g=function t(e,n,i){var s;if(!e)return y;if("string"==typeof e){var r=e.toLowerCase();$[r]&&(s=r),n&&($[r]=n,s=r);var o=e.split("-");if(!s&&o.length>1)return t(o[0])}else{var a=e.name;$[a]=e,s=a}return!i&&s&&(y=s),s||!i&&y},w=function(t,e){if(b(t))return t.clone();var n="object"==typeof e?e:{};return n.date=t,n.args=arguments,new S(n)},M=_;M.l=g,M.i=b,M.w=function(t,e){return w(t,{locale:e.$L,utc:e.$u,x:e.$x,$offset:e.$offset})};var S=function(){function m(t){this.$L=g(t.locale,null,!0),this.parse(t)}var v=m.prototype;return v.parse=function(t){this.$d=function(t){var e=t.date,n=t.utc;if(null===e)return new Date(NaN);if(M.u(e))return new Date;if(e instanceof Date)return new Date(e);if("string"==typeof e&&!/Z$/i.test(e)){var i=e.match(f);if(i){var s=i[2]-1||0,r=(i[7]||"0").substring(0,3);return n?new Date(Date.UTC(i[1],s,i[3]||1,i[4]||0,i[5]||0,i[6]||0,r)):new Date(i[1],s,i[3]||1,i[4]||0,i[5]||0,i[6]||0,r)}}return new Date(e)}(t),this.$x=t.x||{},this.init()},v.init=function(){var t=this.$d;this.$y=t.getFullYear(),this.$M=t.getMonth(),this.$D=t.getDate(),this.$W=t.getDay(),this.$H=t.getHours(),this.$m=t.getMinutes(),this.$s=t.getSeconds(),this.$ms=t.getMilliseconds()},v.$utils=function(){return M},v.isValid=function(){return!(this.$d.toString()===p)},v.isSame=function(t,e){var n=w(t);return this.startOf(e)<=n&&n<=this.endOf(e)},v.isAfter=function(t,e){return w(t)<this.startOf(e)},v.isBefore=function(t,e){return this.endOf(e)<w(t)},v.$g=function(t,e,n){return M.u(t)?this[e]:this.set(n,t)},v.unix=function(){return Math.floor(this.valueOf()/1e3)},v.valueOf=function(){return this.$d.getTime()},v.startOf=function(t,e){var n=this,c=!!M.u(e)||e,p=M.p(t),f=function(t,e){var i=M.w(n.$u?Date.UTC(n.$y,e,t):new Date(n.$y,e,t),n);return c?i:i.endOf(o)},h=function(t,e){return M.w(n.toDate()[t].apply(n.toDate("s"),(c?[0,0,0,0]:[23,59,59,999]).slice(e)),n)},m=this.$W,v=this.$M,_=this.$D,y="set"+(this.$u?"UTC":"");switch(p){case u:return c?f(1,0):f(31,11);case l:return c?f(1,v):f(0,v+1);case a:var $=this.$locale().weekStart||0,b=(m<$?m+7:m)-$;return f(c?_-b:_+(6-b),v);case o:case d:return h(y+"Hours",0);case r:return h(y+"Minutes",1);case s:return h(y+"Seconds",2);case i:return h(y+"Milliseconds",3);default:return this.clone()}},v.endOf=function(t){return this.startOf(t,!1)},v.$set=function(t,e){var a,c=M.p(t),p="set"+(this.$u?"UTC":""),f=(a={},a[o]=p+"Date",a[d]=p+"Date",a[l]=p+"Month",a[u]=p+"FullYear",a[r]=p+"Hours",a[s]=p+"Minutes",a[i]=p+"Seconds",a[n]=p+"Milliseconds",a)[c],h=c===o?this.$D+(e-this.$W):e;if(c===l||c===u){var m=this.clone().set(d,1);m.$d[f](h),m.init(),this.$d=m.set(d,Math.min(this.$D,m.daysInMonth())).$d}else f&&this.$d[f](h);return this.init(),this},v.set=function(t,e){return this.clone().$set(t,e)},v.get=function(t){return this[M.p(t)]()},v.add=function(n,c){var d,p=this;n=Number(n);var f=M.p(c),h=function(t){var e=w(p);return M.w(e.date(e.date()+Math.round(t*n)),p)};if(f===l)return this.set(l,this.$M+n);if(f===u)return this.set(u,this.$y+n);if(f===o)return h(1);if(f===a)return h(7);var m=(d={},d[s]=t,d[r]=e,d[i]=1e3,d)[f]||1,v=this.$d.getTime()+n*m;return M.w(v,this)},v.subtract=function(t,e){return this.add(-1*t,e)},v.format=function(t){var e=this,n=this.$locale();if(!this.isValid())return n.invalidDate||p;var i=t||"YYYY-MM-DDTHH:mm:ssZ",s=M.z(this),r=this.$H,o=this.$m,a=this.$M,l=n.weekdays,c=n.months,u=function(t,n,s,r){return t&&(t[n]||t(e,i))||s[n].slice(0,r)},d=function(t){return M.s(r%12||12,t,"0")},f=n.meridiem||function(t,e,n){var i=t<12?"AM":"PM";return n?i.toLowerCase():i},m={YY:String(this.$y).slice(-2),YYYY:this.$y,M:a+1,MM:M.s(a+1,2,"0"),MMM:u(n.monthsShort,a,c,3),MMMM:u(c,a),D:this.$D,DD:M.s(this.$D,2,"0"),d:String(this.$W),dd:u(n.weekdaysMin,this.$W,l,2),ddd:u(n.weekdaysShort,this.$W,l,3),dddd:l[this.$W],H:String(r),HH:M.s(r,2,"0"),h:d(1),hh:d(2),a:f(r,o,!0),A:f(r,o,!1),m:String(o),mm:M.s(o,2,"0"),s:String(this.$s),ss:M.s(this.$s,2,"0"),SSS:M.s(this.$ms,3,"0"),Z:s};return i.replace(h,(function(t,e){return e||m[t]||s.replace(":","")}))},v.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},v.diff=function(n,d,p){var f,h=M.p(d),m=w(n),v=(m.utcOffset()-this.utcOffset())*t,_=this-m,y=M.m(this,m);return y=(f={},f[u]=y/12,f[l]=y,f[c]=y/3,f[a]=(_-v)/6048e5,f[o]=(_-v)/864e5,f[r]=_/e,f[s]=_/t,f[i]=_/1e3,f)[h]||_,p?y:M.a(y)},v.daysInMonth=function(){return this.endOf(l).$D},v.$locale=function(){return $[this.$L]},v.locale=function(t,e){if(!t)return this.$L;var n=this.clone(),i=g(t,e,!0);return i&&(n.$L=i),n},v.clone=function(){return M.w(this.$d,this)},v.toDate=function(){return new Date(this.valueOf())},v.toJSON=function(){return this.isValid()?this.toISOString():null},v.toISOString=function(){return this.$d.toISOString()},v.toString=function(){return this.$d.toUTCString()},m}(),E=S.prototype;return w.prototype=E,[["$ms",n],["$s",i],["$m",s],["$H",r],["$W",o],["$M",l],["$y",u],["$D",d]].forEach((function(t){E[t[1]]=function(e){return this.$g(e,t[0],t[1])}})),w.extend=function(t,e){return t.$i||(t(e,S,w),t.$i=!0),w},w.locale=g,w.isDayjs=b,w.unix=function(t){return w(1e3*t)},w.en=$[y],w.Ls=$,w.p={},w}()},646:function(t){t.exports=function(){"use strict";var t,e,n=1e3,i=6e4,s=36e5,r=864e5,o=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,a=31536e6,l=2592e6,c=/^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/,u={years:a,months:l,days:r,hours:s,minutes:i,seconds:n,milliseconds:1,weeks:6048e5},d=function(t){return t instanceof y},p=function(t,e,n){return new y(t,n,e.$l)},f=function(t){return e.p(t)+"s"},h=function(t){return t<0},m=function(t){return h(t)?Math.ceil(t):Math.floor(t)},v=function(t){return Math.abs(t)},_=function(t,e){return t?h(t)?{negative:!0,format:""+v(t)+e}:{negative:!1,format:""+t+e}:{negative:!1,format:""}},y=function(){function h(t,e,n){var i=this;if(this.$d={},this.$l=n,void 0===t&&(this.$ms=0,this.parseFromMilliseconds()),e)return p(t*u[f(e)],this);if("number"==typeof t)return this.$ms=t,this.parseFromMilliseconds(),this;if("object"==typeof t)return Object.keys(t).forEach((function(e){i.$d[f(e)]=t[e]})),this.calMilliseconds(),this;if("string"==typeof t){var s=t.match(c);if(s){var r=s.slice(2).map((function(t){return null!=t?Number(t):0}));return this.$d.years=r[0],this.$d.months=r[1],this.$d.weeks=r[2],this.$d.days=r[3],this.$d.hours=r[4],this.$d.minutes=r[5],this.$d.seconds=r[6],this.calMilliseconds(),this}}return this}var v=h.prototype;return v.calMilliseconds=function(){var t=this;this.$ms=Object.keys(this.$d).reduce((function(e,n){return e+(t.$d[n]||0)*u[n]}),0)},v.parseFromMilliseconds=function(){var t=this.$ms;this.$d.years=m(t/a),t%=a,this.$d.months=m(t/l),t%=l,this.$d.days=m(t/r),t%=r,this.$d.hours=m(t/s),t%=s,this.$d.minutes=m(t/i),t%=i,this.$d.seconds=m(t/n),t%=n,this.$d.milliseconds=t},v.toISOString=function(){var t=_(this.$d.years,"Y"),e=_(this.$d.months,"M"),n=+this.$d.days||0;this.$d.weeks&&(n+=7*this.$d.weeks);var i=_(n,"D"),s=_(this.$d.hours,"H"),r=_(this.$d.minutes,"M"),o=this.$d.seconds||0;this.$d.milliseconds&&(o+=this.$d.milliseconds/1e3);var a=_(o,"S"),l=t.negative||e.negative||i.negative||s.negative||r.negative||a.negative,c=s.format||r.format||a.format?"T":"",u=(l?"-":"")+"P"+t.format+e.format+i.format+c+s.format+r.format+a.format;return"P"===u||"-P"===u?"P0D":u},v.toJSON=function(){return this.toISOString()},v.format=function(t){var n=t||"YYYY-MM-DDTHH:mm:ss",i={Y:this.$d.years,YY:e.s(this.$d.years,2,"0"),YYYY:e.s(this.$d.years,4,"0"),M:this.$d.months,MM:e.s(this.$d.months,2,"0"),D:this.$d.days,DD:e.s(this.$d.days,2,"0"),H:this.$d.hours,HH:e.s(this.$d.hours,2,"0"),m:this.$d.minutes,mm:e.s(this.$d.minutes,2,"0"),s:this.$d.seconds,ss:e.s(this.$d.seconds,2,"0"),SSS:e.s(this.$d.milliseconds,3,"0")};return n.replace(o,(function(t,e){return e||String(i[t])}))},v.as=function(t){return this.$ms/u[f(t)]},v.get=function(t){var e=this.$ms,n=f(t);return"milliseconds"===n?e%=1e3:e="weeks"===n?m(e/u[n]):this.$d[n],0===e?0:e},v.add=function(t,e,n){var i;return i=e?t*u[f(e)]:d(t)?t.$ms:p(t,this).$ms,p(this.$ms+i*(n?-1:1),this)},v.subtract=function(t,e){return this.add(t,e,!0)},v.locale=function(t){var e=this.clone();return e.$l=t,e},v.clone=function(){return p(this.$ms,this)},v.humanize=function(e){return t().add(this.$ms,"ms").locale(this.$l).fromNow(!e)},v.milliseconds=function(){return this.get("milliseconds")},v.asMilliseconds=function(){return this.as("milliseconds")},v.seconds=function(){return this.get("seconds")},v.asSeconds=function(){return this.as("seconds")},v.minutes=function(){return this.get("minutes")},v.asMinutes=function(){return this.as("minutes")},v.hours=function(){return this.get("hours")},v.asHours=function(){return this.as("hours")},v.days=function(){return this.get("days")},v.asDays=function(){return this.as("days")},v.weeks=function(){return this.get("weeks")},v.asWeeks=function(){return this.as("weeks")},v.months=function(){return this.get("months")},v.asMonths=function(){return this.as("months")},v.years=function(){return this.get("years")},v.asYears=function(){return this.as("years")},h}();return function(n,i,s){t=s,e=s().$utils(),s.duration=function(t,e){var n=s.locale();return p(t,{$l:n},e)},s.isDuration=d;var r=i.prototype.add,o=i.prototype.subtract;i.prototype.add=function(t,e){return d(t)&&(t=t.asMilliseconds()),r.bind(this)(t,e)},i.prototype.subtract=function(t,e){return d(t)&&(t=t.asMilliseconds()),o.bind(this)(t,e)}}}()},379:t=>{"use strict";var e=[];function n(t){for(var n=-1,i=0;i<e.length;i++)if(e[i].identifier===t){n=i;break}return n}function i(t,i){for(var r={},o=[],a=0;a<t.length;a++){var l=t[a],c=i.base?l[0]+i.base:l[0],u=r[c]||0,d="".concat(c," ").concat(u);r[c]=u+1;var p=n(d),f={css:l[1],media:l[2],sourceMap:l[3],supports:l[4],layer:l[5]};if(-1!==p)e[p].references++,e[p].updater(f);else{var h=s(f,i);i.byIndex=a,e.splice(a,0,{identifier:d,updater:h,references:1})}o.push(d)}return o}function s(t,e){var n=e.domAPI(e);return n.update(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap&&e.supports===t.supports&&e.layer===t.layer)return;n.update(t=e)}else n.remove()}}t.exports=function(t,s){var r=i(t=t||[],s=s||{});return function(t){t=t||[];for(var o=0;o<r.length;o++){var a=n(r[o]);e[a].references--}for(var l=i(t,s),c=0;c<r.length;c++){var u=n(r[c]);0===e[u].references&&(e[u].updater(),e.splice(u,1))}r=l}}},569:t=>{"use strict";var e={};t.exports=function(t,n){var i=function(t){if(void 0===e[t]){var n=document.querySelector(t);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(t){n=null}e[t]=n}return e[t]}(t);if(!i)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");i.appendChild(n)}},216:t=>{"use strict";t.exports=function(t){var e=document.createElement("style");return t.setAttributes(e,t.attributes),t.insert(e,t.options),e}},565:(t,e,n)=>{"use strict";t.exports=function(t){var e=n.nc;e&&t.setAttribute("nonce",e)}},795:t=>{"use strict";t.exports=function(t){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var e=t.insertStyleElement(t);return{update:function(n){!function(t,e,n){var i="";n.supports&&(i+="@supports (".concat(n.supports,") {")),n.media&&(i+="@media ".concat(n.media," {"));var s=void 0!==n.layer;s&&(i+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),i+=n.css,s&&(i+="}"),n.media&&(i+="}"),n.supports&&(i+="}");var r=n.sourceMap;r&&"undefined"!=typeof btoa&&(i+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(r))))," */")),e.styleTagTransform(i,t,e.options)}(e,t,n)},remove:function(){!function(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t)}(e)}}}},589:t=>{"use strict";t.exports=function(t,e){if(e.styleSheet)e.styleSheet.cssText=t;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(t))}}}},e={};function n(i){var s=e[i];if(void 0!==s)return s.exports;var r=e[i]={id:i,exports:{}};return t[i].call(r.exports,r,r.exports,n),r.exports}n.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return n.d(e,{a:e}),e},n.d=(t,e)=>{for(var i in e)n.o(e,i)&&!n.o(t,i)&&Object.defineProperty(t,i,{enumerable:!0,get:e[i]})},n.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),n.nc=void 0,(()=>{"use strict";var t=n(379),e=n.n(t),i=n(795),s=n.n(i),r=n(569),o=n.n(r),a=n(565),l=n.n(a),c=n(216),u=n.n(c),d=n(589),p=n.n(d),f=n(10),h={};h.styleTagTransform=p(),h.setAttributes=l(),h.insert=o().bind(null,"head"),h.domAPI=s(),h.insertStyleElement=u(),e()(f.Z,h),f.Z&&f.Z.locals&&f.Z.locals;const m="shake";class v{#t=null;constructor(){if(new.target===v)throw new Error("Can't instantiate AbstractView, only concrete one.")}get element(){return this.#t||(this.#t=function(t){const e=document.createElement("div");return e.innerHTML=t,e.firstElementChild}(this.template)),this.#t}get template(){throw new Error("Abstract method not implemented: get template")}removeElement(){this.#t=null}shake(t){this.element.classList.add(m),setTimeout((()=>{this.element.classList.remove(m),t?.()}),600)}}const _={BEFOREBEGIN:"beforebegin",AFTERBEGIN:"afterbegin",BEFOREEND:"beforeend",AFTEREND:"afterend"};function y(t,e){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:_.BEFOREEND;if(!(t instanceof v))throw new Error("Can render only components");if(null===e)throw new Error("Container element doesn't exist");e.insertAdjacentElement(n,t.element)}function $(t,e){if(!(t instanceof v&&e instanceof v))throw new Error("Can replace only components");const n=t.element,i=e.element,s=i.parentElement;if(null===s)throw new Error("Parent element doesn't exist");s.replaceChild(n,i)}const b=(t,e)=>(t=Math.ceil(t),e=Math.floor(e),Math.floor(Math.random()*(e-t+1))+t);class g extends v{get template(){return'<ul class="trip-events__list">\n  </ul>'}}var w=n(484),M=n.n(w),S=n(646),E=n.n(S);M().extend(E());const D={monthDay:"MMM DD",hoursMins:"HH:MM"};function A(t){return t?M()(t).format(D.hoursMins):""}class k extends v{#e=null;#n=null;#i=null;#s=null;constructor(t){let{point:e,destinations:n,offers:i,onEditFormShow:s}=t;super(),this.#e=e,this.#n=n,this.#i=i,this.#s=s,this.element.querySelector(".event__rollup-btn").addEventListener("click",this.#r)}get template(){return function(t,e,n){const{basePrice:i,dateFrom:s,dateTo:r,isFavorite:o,destination:a,type:l,offers:c}=t,u=e.find((t=>a===t.id)),d=n.find((t=>l===t.type)).offers.filter((t=>c.includes(+t.id))).map((t=>`<li class="event__offer">\n          <span class="event__offer-title">${t.title}</span>\n          +€&nbsp;\n          <span class="event__offer-price">${t.price}</span>\n        </li>`)).join(""),p=(f=s)?M()(f).format(D.monthDay):"";var f;const h=A(s),m=A(r),v=function(t,e){const n=M()(t),i=M()(e),s=M().duration(i.diff(n)),{days:r,hours:o,minutes:a}=s.$d;switch(!0){case r>0:return s.format("DD[D] HH[H] mm[M]");case o>0:return s.format("HH[H] mm[M]");case 60!==a:return s.format("mm[M]")}}(s,r);return`<li class="trip-events__item">\n    <div class="event">\n      <time class="event__date" datetime="2019-03-18">${p}</time>\n      <div class="event__type">\n        <img class="event__type-icon" src="img/icons/${l}.png" alt="Event type icon" width="42" height="42">\n      </div>\n      <h3 class="event__title">${l} ${u.name}</h3>\n      <div class="event__schedule">\n        <p class="event__time">\n          <time class="event__start-time" datetime="${s}">${h}</time>\n          —\n          <time class="event__end-time" datetime="${r}">${m}</time>\n        </p>\n        <p class="event__duration">${v}</p>\n      </div>\n      <p class="event__price">\n        €&nbsp;<span class="event__price-value">${i}</span>\n      </p>\n      <h4 class="visually-hidden">Offers:</h4>\n      <ul class="event__selected-offers">\n        ${d}\n      </ul>\n      <button class="event__favorite-btn ${o?"event__favorite-btn--active":""}" type="button">\n        <span class="visually-hidden">Add to favorite</span>\n        <svg class="event__favorite-icon" width="28" height="28" viewBox="0 0 28 28">\n          <path d="M14 21l-8.22899 4.3262 1.57159-9.1631L.685209 9.67376 9.8855 8.33688 14 0l4.1145 8.33688 9.2003 1.33688-6.6574 6.48934 1.5716 9.1631L14 21z"></path>\n        </svg>\n      </button>\n      <button class="event__rollup-btn" type="button">\n        <span class="visually-hidden">Open event</span>\n      </button>\n    </div>\n  </li>`}(this.#e,this.#n,this.#i)}#r=t=>{t.preventDefault(),this.#s()}}class F extends v{#e=null;#n=null;#i=null;#o=null;#s=null;constructor(t){let{point:e,destinations:n,offers:i,onFormSubmit:s}=t;super(),this.#e=e,this.#n=n,this.#i=i,this.#o=s,this.#s=s,this.element.querySelector("form.event").addEventListener("submit",this.#a),this.element.querySelector(".event__rollup-btn").addEventListener("click",this.#r)}get template(){return function(t,e,n){const{id:i,offers:s,type:r}=t,o=e.find((e=>t.destination===e.id)),{description:a,pictures:l}=o,c=l.map((t=>`\n  <img class="event__photo" src="${t.src}" alt="${t.description}">\n  `)).join(""),u=e.map((t=>`<option value="${t.name}"></option>`)).join(""),d=((t,e)=>t.map((t=>`<div class="event__type-item">\n  <input id="event-type-${t.type}-1" class="event__type-input  visually-hidden" type="radio" name="event-type" value="${t.type}" ${t.type===e?"checked":""}>\n  <label class="event__type-label  event__type-label--${t.type}" for="event-type-${t.type}-1">${t.type}</label>\n</div>`)).join(""))(n,r),p=n.find((t=>t.type===r)),{type:f,offers:h}=p,m=((t,e,n,i)=>t.map((t=>{const s=e.includes(+t.id)?"checked":"";return`<div class="event__offer-selector">\n              <input class="event__offer-checkbox  visually-hidden" id="event-offer-${i}-${t.id}" type="checkbox" name="event-offer-${n}" ${s?"checked":""}>\n              <label class="event__offer-label" for="event-offer-${i}-${t.id}">\n                <span class="event__offer-title">${t.title}</span>\n                &plus;&euro;&nbsp;\n                <span class="event__offer-price">${t.price}</span>\n              </label>\n            </div>`})).join(""))(h,s,f,i);return`\n  <li class="trip-events__item">\n    <form class="event event--edit" action="#" method="post">\n      <header class="event__header">\n        <div class="event__type-wrapper">\n          <label class="event__type  event__type-btn" for="event-type-toggle-1">\n            <span class="visually-hidden">Choose event type</span>\n            <img class="event__type-icon" width="17" height="17" src="img/icons/${r}.png" alt="Event type icon">\n          </label>\n          <input class="event__type-toggle  visually-hidden" id="event-type-toggle-1" type="checkbox">\n\n          <div class="event__type-list">\n            <fieldset class="event__type-group">\n              <legend class="visually-hidden">Event type</legend>\n\n              ${d}\n            </fieldset>\n          </div>\n        </div>\n\n        <div class="event__field-group  event__field-group--destination">\n          <label class="event__label  event__type-output" for="event-destination-1">\n            ${r}\n          </label>\n          <input class="event__input  event__input--destination" id="event-destination-1" type="text" name="event-destination" value="Chamonix" list="destination-list-1">\n          <datalist id="destination-list-1">\n            ${u}\n          </datalist>\n        </div>\n\n        <div class="event__field-group  event__field-group--time">\n          <label class="visually-hidden" for="event-start-time-1">From</label>\n          <input class="event__input  event__input--time" id="event-start-time-1" type="text" name="event-start-time" value="18/03/19 12:25">\n          &mdash;\n          <label class="visually-hidden" for="event-end-time-1">To</label>\n          <input class="event__input  event__input--time" id="event-end-time-1" type="text" name="event-end-time" value="18/03/19 13:35">\n        </div>\n\n        <div class="event__field-group  event__field-group--price">\n          <label class="event__label" for="event-price-1">\n            <span class="visually-hidden">Price</span>\n            &euro;\n          </label>\n          <input class="event__input  event__input--price" id="event-price-1" type="text" name="event-price" value="160">\n        </div>\n\n        <button class="event__save-btn  btn  btn--blue" type="submit">Save</button>\n        <button class="event__reset-btn" type="reset">Delete</button>\n        <button class="event__rollup-btn" type="button">\n          <span class="visually-hidden">Open event</span>\n        </button>\n      </header>\n      <section class="event__details">\n        <section class="event__section  event__section--offers">\n          <h3 class="event__section-title  event__section-title--offers">Offers</h3>\n\n          <div class="event__available-offers">\n            ${m}\n          </div>\n        </section>\n\n        <section class="event__section  event__section--destination">\n          <h3 class="event__section-title  event__section-title--destination">Destination</h3>\n          <p class="event__destination-description">${a}</p>\n          <div class="event__photos-container">\n          <div class="event__photos-tape">\n          ${c}\n          </div>\n        </div>\n        </section>\n      </section>\n    </form>\n  </li>`}(this.#e,this.#n,this.#i)}#a=t=>{t.preventDefault(),this.#o()};#r=t=>{t.preventDefault(),this.#s()}}class x extends v{get template(){return'<p class="trip-events__msg">Click New Event to create your first point</p>'}}class C{#l=null;#n=null;#i=null;#c=null;#u=null;#d=null;#p=null;#f=null;constructor(t){let{points:e,destinations:n,offers:i,parentList:s}=t;this.#l=e,this.#n=n,this.#i=i,this.#p=s}#h(t,e,n){this.#d=t=>{"Escape"===t.key&&(t.preventDefault(),this.#m())},this.#c=new k({point:t,destinations:e,offers:n,onEditFormShow:()=>{this.#v()}}),this.#u=new F({point:t,destinations:e,offers:n,onFormSubmit:()=>{this.#m()}}),y(this.#c,this.#p.element)}#v(){$(this.#u,this.#c),document.addEventListener("keydown",this.#d)}#m(){$(this.#c,this.#u),document.removeEventListener("keydown",this.#d)}init(t){this.#f=t,this.#h(this.#f,this.#n,this.#i)}}const T=[{id:"01",basePrice:b(200,5e3),dateFrom:"2019-07-10T22:55:56.845Z",dateTo:"2019-07-11T11:22:13.375Z",destination:2,isFavorite:!0,offers:[1,3],type:"taxi"},{id:"02",basePrice:b(200,3e3),dateFrom:"2019-09-10T20:40:00.845Z",dateTo:"2019-09-11T20:40:00.845Z",destination:4,isFavorite:!1,offers:[2,3],type:"bus"},{id:"03",basePrice:b(200,3e3),dateFrom:"2020-10-10T22:50:56.845Z",dateTo:"2020-10-11T09:20:10.375Z",destination:1,isFavorite:!0,offers:[1,2],type:"flight"},{id:"04",basePrice:b(200,3e3),dateFrom:"2023-09-10T10:40:06.845Z",dateTo:"2023-10-11T09:10:10.375Z",destination:3,isFavorite:!1,offers:[1],type:"sightseeing"}],O=[{id:1,description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit.",name:"Chamonix",pictures:[{src:`https://loremflickr.com/248/152?random=${b(0,500)}`,description:"Cras aliquet varius magna, non porta ligula feugiat eget."},{src:`https://loremflickr.com/248/152?random=${b(0,500)}`,description:"Fusce tristique felis at fermentum pharetra"},{src:`https://loremflickr.com/248/152?random=${b(0,500)}`,description:"Aliquam id orci ut lectus varius viverra."}]},{id:2,description:"Fusce tristique felis at fermentum pharetra. Aliquam id orci ut lectus varius viverra. Form",name:"Rome",pictures:[{src:`https://loremflickr.com/248/152?random=${b(0,500)}`,description:"Sed blandit, eros vel aliquam faucibus"},{src:`https://loremflickr.com/248/152?random=${b(0,500)}`,description:"euismod diam, eu luctus nunc ante ut dui."},{src:`https://loremflickr.com/248/152?random=${b(0,500)}`,description:"ex euismod diam, eu luctus nunc ."},{src:`https://loremflickr.com/248/152?random=${b(0,500)}`,description:"Sed blandit,"},{src:`https://loremflickr.com/248/152?random=${b(0,500)}`,description:"Sed."},{src:`https://loremflickr.com/248/152?random=${b(0,500)}`,description:"faucibus, purus ex euismod diam."}]},{id:3,description:"Sed blandit, eros vel aliquam faucibus, purus ex euismod diam, eu luctus nunc ante ut dui.",name:"Amsterdam",pictures:[]},{id:4,description:"Aliquam erat volutpat. Nunc fermentum tortor ac porta dapibus. In rutrum ac purus sit amet tempus.",name:"Geneva",pictures:[{src:`https://loremflickr.com/248/152?random=${b(0,500)}`,description:"In rutrum ac purus sit amet tempus."},{src:`https://loremflickr.com/248/152?random=${b(0,500)}`,description:"Nunc fermentum tortor ac porta dapibus."}]}],H=[{type:"taxi",offers:[{id:"1",title:"Upgrade to a business class",price:b(100,1e3)},{id:"2",title:"Order Uber ",price:b(100,1e3)},{id:"3",title:"Add luggage",price:b(100,500)}]},{type:"flight",offers:[{id:"1",title:"Switch to comfort",price:b(100,1e3)},{id:"2",title:"Add luggage",price:b(100,1e3)},{id:"3",title:"Spesial menu: vagan/vagetarian etc.",price:b(100,1e3)}]},{type:"sightseeing",offers:[{id:"1",title:"Book tickets",price:b(100,250)},{id:"2",title:"Lunch in city ",price:b(400,1650)}]},{type:"bus",offers:[{id:"1",title:"Add luggage",price:b(100,1e3)},{id:"2",title:"Choose seats",price:b(100,200)},{id:"3",title:"Book tickets",price:b(100,250)}]},{type:"ship",offers:[]},{type:"train",offers:[]},{type:"drive",offers:[]},{type:"check-in",offers:[]},{type:"restaurant",offers:[]}];M().extend(E());const L={everything:t=>t.sort(((t,e)=>{return n=t.dateFrom-e.dateFrom,M()(n).unix()-M()(undefined).unix();var n})),past:t=>t.filter((t=>{return e=t.dateFrom,M()().isAfter(M()(e),"D");var e})),present:t=>t.filter((t=>{return e=t.dateFrom,M()().isSame(M()(e),"D");var e})),future:t=>t.filter((t=>{return e=t.dateFrom,M()().isBefore(M()(e),"D");var e}))},P=document.querySelector(".trip-main"),Y=document.querySelector(".trip-controls__filters"),B=document.querySelector(".trip-events"),I=new class{constructor(){this.points=T,this.destinations=O,this.offers=H}getPoints(){return this.points}getDestinations(){return this.destinations}getOffers(){return this.offers}},N=(j=I.points,Object.entries(L).map((t=>{let[e,n]=t;return{type:e,count:n(j).length}})));var j;const q=new class{#_=null;#y=null;#$=new g;constructor(t){let{appWrapper:e,pointModel:n}=t;this.#_=e,this.#y=n}init(){const t=[...this.#y.getPoints()],e=this.#y.getDestinations(),n=this.#y.getOffers();y(this.#$,this.#_),t.length||y(new x,this.#$.element),new C({points:t,destinations:e,offers:n,parentList:this.#$});for(let i=0;i<t.length;i++)this.#h(t[i],e,n)}#h(t,e,n){const i=t=>{"Escape"===t.key&&(t.preventDefault(),o())},s=new k({point:t,destinations:e,offers:n,onEditFormShow:()=>{$(r,s),document.addEventListener("keydown",i)}}),r=new F({point:t,destinations:e,offers:n,onFormSubmit:()=>{o()}});function o(){$(s,r),document.removeEventListener("keydown",i)}y(s,this.#$.element)}}({appWrapper:B,pointModel:I});y(new class extends v{get template(){return'<section class="trip-main__trip-info  trip-info">\n            <div class="trip-info__main">\n              <h1 class="trip-info__title">Amsterdam — Chamonix — Geneva</h1>\n\n              <p class="trip-info__dates">Mar 18&nbsp;—&nbsp;20</p>\n            </div>\n\n            <p class="trip-info__cost">\n              Total: €&nbsp;<span class="trip-info__cost-value">1230</span>\n            </p>\n          </section>'}},P,_.AFTERBEGIN),y(new class extends v{#b=null;constructor(t){let{filterData:e}=t;super(),this.#b=e}get template(){return function(t){return`<form class="trip-filters" action="#" method="get">\n${t.map(((t,e)=>((t,e)=>{const{type:n,count:i}=t;return`<div class="trip-filters__filter">\n    <input id="filter-${n}" class="trip-filters__filter-input  visually-hidden" type="radio" name="trip-filter" value="${n}" ${e?"checked":""} ${i||"disabled"}>\n    <label class="trip-filters__filter-label" for="filter-${n}">${s=n,s[0].toUpperCase()+s.slice(1)}</label>\n  </div>`;var s})(t,0===e))).join("")}\n  <button class="visually-hidden" type="submit">Accept filter</button>\n</form>`}(this.#b)}}({filterData:N}),Y),y(new class extends v{get template(){return'<form class="trip-events__trip-sort  trip-sort" action="#" method="get">\n            <div class="trip-sort__item  trip-sort__item--day">\n              <input id="sort-day" class="trip-sort__input  visually-hidden" type="radio" name="trip-sort" value="sort-day" checked>\n              <label class="trip-sort__btn" for="sort-day">Day</label>\n            </div>\n\n            <div class="trip-sort__item  trip-sort__item--event">\n              <input id="sort-event" class="trip-sort__input  visually-hidden" type="radio" name="trip-sort" value="sort-event" disabled>\n              <label class="trip-sort__btn" for="sort-event">Event</label>\n            </div>\n\n            <div class="trip-sort__item  trip-sort__item--time">\n              <input id="sort-time" class="trip-sort__input  visually-hidden" type="radio" name="trip-sort" value="sort-time">\n              <label class="trip-sort__btn" for="sort-time">Time</label>\n            </div>\n\n            <div class="trip-sort__item  trip-sort__item--price">\n              <input id="sort-price" class="trip-sort__input  visually-hidden" type="radio" name="trip-sort" value="sort-price">\n              <label class="trip-sort__btn" for="sort-price">Price</label>\n            </div>\n\n            <div class="trip-sort__item  trip-sort__item--offer">\n              <input id="sort-offer" class="trip-sort__input  visually-hidden" type="radio" name="trip-sort" value="sort-offer" disabled>\n              <label class="trip-sort__btn" for="sort-offer">Offers</label>\n            </div>\n          </form>'}},B),q.init()})()})();
//# sourceMappingURL=bundle.665f7d634b24bc6cb298.js.map