window.PlayerControls=window.PlayerControls||{},window.PlayerControls.pc=function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r,o=n(1),i=(r=o)&&r.__esModule?r:{default:r};t.default={name:"pc",method:function(){i.default.method.call(this)}},e.exports=t.default},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(2);t.default={name:"pc",method:function(){var e=this;if(e.controls&&e.video){var t=e.controls,n=e.root,o=0,i=void 0;e.onElementClick=function(e,t){this.config.closeVideoPreventDefault||e.preventDefault(),this.config.closeVideoStopPropagation||e.stopPropagation();var n=this;n.config.closeVideoClick||(o++,i&&clearTimeout(i),1===o?i=setTimeout((function(){if((0,r.hasClass)(n.root,"xgplayer-nostart"))return!1;if(!n.ended)if(n.paused){var e=n.play();void 0!==e&&e&&e.catch((function(e){}))}else n.pause();o=0}),200):o=0)},e.video.addEventListener("click",(function(t){e.onElementClick(t,e.video)}),!1),e.onElementDblclick=function(e,n){this.config.closeVideoPreventDefault||e.preventDefault(),this.config.closeVideoStopPropagation||e.stopPropagation();if(!this.config.closeVideoDblclick){var r=t.querySelector(".xgplayer-fullscreen");if(r){var o=void 0;document.createEvent?(o=document.createEvent("Event")).initEvent("click",!0,!0):o=new Event("click"),r.dispatchEvent(o)}}},e.video.addEventListener("dblclick",(function(t){e.onElementDblclick(t,e.video)}),!1),n.addEventListener("mouseenter",a),n.addEventListener("mouseleave",c),t.addEventListener("mouseenter",(function(t){e.userTimer&&clearTimeout(e.userTimer)})),t.addEventListener("mouseleave",(function(t){e.config.closeControlsBlur||e.emit("focus",e)})),t.addEventListener("click",(function(e){e.preventDefault(),e.stopPropagation()})),e.once("ready",u),e.once("destroy",(function t(){n.removeEventListener("mouseenter",a),n.removeEventListener("mouseleave",c),e.off("ready",u),e.off("destroy",t)}))}function a(){clearTimeout(e.leavePlayerTimer),e.emit("focus",e)}function c(){e.config.closePlayerBlur||(e.leavePlayerTimer=setTimeout((function(){e.emit("blur",e)}),e.config.leavePlayerTime||0))}function u(t){e.config.autoplay&&e.start()}}},e.exports=t.default},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.util=t.PresentationMode=void 0,t.createDom=a,t.hasClass=c,t.addClass=u,t.removeClass=s,t.toggleClass=l,t.findDom=f,t.padStart=d,t.format=v,t.event=g,t.typeOf=p,t.deepCopy=m,t.getBgImage=h,t.copyDom=y,t._setInterval=b,t._clearInterval=E,t.createImgBtn=w,t.isWeiXin=P,t.isUc=L,t.computeWatchDur=k,t.offInDestroy=O,t.on=x,t.once=_,t.getBuffered2=M,t.checkIsBrowser=C,t.setStyle=S,t.checkWebkitSetPresentationMode=function(e){return"function"==typeof e.webkitSetPresentationMode};var r,o=n(3),i=(r=o)&&r.__esModule?r:{default:r};function a(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"div",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"",o=document.createElement(e);return o.className=r,o.innerHTML=t,Object.keys(n).forEach((function(t){var r=t,i=n[t];"video"===e||"audio"===e?i&&o.setAttribute(r,i):o.setAttribute(r,i)})),o}function c(e,t){return!!e&&(e.classList?Array.prototype.some.call(e.classList,(function(e){return e===t})):!!e.className&&!!e.className.match(new RegExp("(\\s|^)"+t+"(\\s|$)")))}function u(e,t){e&&(e.classList?t.replace(/(^\s+|\s+$)/g,"").split(/\s+/g).forEach((function(t){t&&e.classList.add(t)})):c(e,t)||(e.className+=" "+t))}function s(e,t){e&&(e.classList?t.split(/\s+/g).forEach((function(t){e.classList.remove(t)})):c(e,t)&&t.split(/\s+/g).forEach((function(t){var n=new RegExp("(\\s|^)"+t+"(\\s|$)");e.className=e.className.replace(n," ")})))}function l(e,t){e&&t.split(/\s+/g).forEach((function(t){c(e,t)?s(e,t):u(e,t)}))}function f(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:document,t=arguments[1],n=void 0;try{n=e.querySelector(t)}catch(r){0===t.indexOf("#")&&(n=e.getElementById(t.slice(1)))}return n}function d(e,t,n){for(var r=String(n),o=t>>0,i=Math.ceil(o/r.length),a=[],c=String(e);i--;)a.push(r);return a.join("").substring(0,o-c.length)+c}function v(e){if(window.isNaN(e))return"";var t=d(Math.floor(e/3600),2,0),n=d(Math.floor((e-3600*t)/60),2,0),r=d(Math.floor(e-3600*t-60*n),2,0);return("00"===t?[n,r]:[t,n,r]).join(":")}function g(e){if(e.touches){var t=e.touches[0]||e.changedTouches[0];e.clientX=t.clientX||0,e.clientY=t.clientY||0,e.offsetX=t.pageX-t.target.offsetLeft,e.offsetY=t.pageY-t.target.offsetTop}e._target=e.target||e.srcElement}function p(e){return Object.prototype.toString.call(e).match(/([^\s.*]+)(?=]$)/g)[0]}function m(e,t){if("Object"===p(t)&&"Object"===p(e))return Object.keys(t).forEach((function(n){"Object"!==p(t[n])||t[n]instanceof Node?"Array"===p(t[n])?e[n]="Array"===p(e[n])?e[n].concat(t[n]):t[n]:e[n]=t[n]:e[n]?m(e[n],t[n]):e[n]=t[n]})),e}function h(e){var t=(e.currentStyle||window.getComputedStyle(e,null)).backgroundImage;if(!t||"none"===t)return"";var n=document.createElement("a");return n.href=t.replace(/url\("|"\)/g,""),n.href}function y(e){if(e&&1===e.nodeType){var t=document.createElement(e.tagName);return Array.prototype.forEach.call(e.attributes,(function(e){t.setAttribute(e.name,e.value)})),e.innerHTML&&(t.innerHTML=e.innerHTML),t}return""}function b(e,t,n,r){e._interval[t]||(e._interval[t]=setInterval(n.bind(e),r))}function E(e,t){clearInterval(e._interval[t]),e._interval[t]=null}function w(e,t,n,r){var o=a("xg-"+e,"",{},"xgplayer-"+e+"-img");if(o.style.backgroundImage='url("'+t+'")',n&&r){var i=void 0,c=void 0,u=void 0;["px","rem","em","pt","dp","vw","vh","vm","%"].every((function(e){return!(n.indexOf(e)>-1&&r.indexOf(e)>-1)||(i=Number(n.slice(0,n.indexOf(e)).trim()),c=Number(r.slice(0,r.indexOf(e)).trim()),u=e,!1)})),o.style.width=""+i+u,o.style.height=""+c+u,o.style.backgroundSize=""+i+u+" "+c+u,o.style.margin="start"===e?"-"+c/2+u+" auto auto -"+i/2+u:"auto 5px auto 5px"}return o}function P(){return window.navigator.userAgent.toLowerCase().indexOf("micromessenger")>-1}function L(){return window.navigator.userAgent.toLowerCase().indexOf("ucbrowser")>-1}function k(){for(var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=[],n=0;n<e.length;n++)if(!(!e[n].end||e[n].begin<0||e[n].end<0||e[n].end<e[n].begin))if(t.length<1)t.push({begin:e[n].begin,end:e[n].end});else for(var r=0;r<t.length;r++){var o=e[n].begin,i=e[n].end;if(i<t[r].begin){t.splice(r,0,{begin:o,end:i});break}if(!(o>t[r].end)){var a=t[r].begin,c=t[r].end;t[r].begin=Math.min(o,a),t[r].end=Math.max(i,c);break}if(r>t.length-2){t.push({begin:o,end:i});break}}for(var u=0,s=0;s<t.length;s++)u+=t[s].end-t[s].begin;return u}function O(e,t,n,r){e.once(r,(function o(){e.off(t,n),e.off(r,o)}))}function x(e,t,n,r){if(r)e.on(t,n),O(e,t,n,r);else{e.on(t,(function r(o){n(o),e.off(t,r)}))}}function _(e,t,n,r){if(r)e.once(t,n),O(e,t,n,r);else{e.once(t,(function r(o){n(o),e.off(t,r)}))}}function M(e){for(var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:.5,n=[],r=0;r<e.length;r++)n.push({start:e.start(r)<.5?0:e.start(r),end:e.end(r)});n.sort((function(e,t){var n=e.start-t.start;return n||t.end-e.end}));var o=[];if(t)for(var a=0;a<n.length;a++){var c=o.length;if(c){var u=o[c-1].end;n[a].start-u<t?n[a].end>u&&(o[c-1].end=n[a].end):o.push(n[a])}else o.push(n[a])}else o=n;return new i.default(o)}function C(){return!("undefined"==typeof window||void 0===window.document||void 0===window.document.createElement)}function S(e,t,n){var r=e.style;try{r[t]=n}catch(e){r.setProperty(t,n)}}t.PresentationMode={PIP:"picture-in-picture",INLINE:"inline",FULLSCREEN:"fullscreen"};t.util={createDom:a,hasClass:c,addClass:u,removeClass:s,toggleClass:l,findDom:f,padStart:d,format:v,event:g,typeOf:p,deepCopy:m,getBgImage:h,copyDom:y,setInterval:b,clearInterval:E,createImgBtn:w,isWeiXin:P,isUc:L,computeWatchDur:k,offInDestroy:O,on:x,once:_,getBuffered2:M,checkIsBrowser:C,setStyle:S}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}();var o=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.bufferedList=t}return r(e,[{key:"start",value:function(e){return this.bufferedList[e].start}},{key:"end",value:function(e){return this.bufferedList[e].end}},{key:"length",get:function(){return this.bufferedList.length}}]),e}();t.default=o,e.exports=t.default}]);