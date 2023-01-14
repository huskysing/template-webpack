/*!
 * Viewport Extra v2.0.1
 * (c) dsktschy
 * Released under the MIT License.
 */
var ViewportExtra=function(t){"use strict";var e=function(){return(e=Object.assign||function(t){for(var e,n=1,r=arguments.length;n<r;n++)for(var i in e=arguments[n])Object.prototype.hasOwnProperty.call(e,i)&&(t[i]=e[i]);return t}).apply(this,arguments)};var n=function(t,e,n){var r='meta[name="'+e+'"]',i=t.querySelector(r);return i||((i=t.createElement("meta")).setAttribute("name",e),n&&t.head.appendChild(i)),i},r=function(t){return t.documentElement.clientWidth},i=function(t){return t.replace(/\s+/g,"").toLowerCase().replace(/-./g,(function(t){return t.charAt(1).toUpperCase()}))},o=function(t){for(var e=t.getAttribute("content")||"",n=t.getAttribute("data-extra-content")||"",r={},o=0,a=function(){for(var t=0,e=0,n=arguments.length;e<n;e++)t+=arguments[e].length;var r=Array(t),i=0;for(e=0;e<n;e++)for(var o=arguments[e],a=0,u=o.length;a<u;a++,i++)r[i]=o[a];return r}(e.split(","),n.split(","));o<a.length;o++){var u=a[o].split("="),c=u[0],l=u[1],d=c.trim();if(d){var f=l?l.trim():"";f&&(r[i(d)]=isNaN(+f)?f:+f)}}return r},a=function(t,e,n){var r=e.width,i=e.initialScale,o=e.minWidth,a=e.maxWidth,u=function(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(null!=t&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]])}return n}(e,["minWidth","maxWidth"]);o>a?console.warn("Viewport Extra received minWidth that is greater than maxWidth, so they are ignored."):"number"==typeof r?console.warn("Viewport Extra received fixed width, so minWidth and maxWidth are ignored."):n<o?(u.width=o,u.initialScale=n/o*i):n>a&&(u.width=a,u.initialScale=n/a*i);var c=Object.keys(u).map((function(t){return t.replace(/\s+/g,"").replace(/[A-Z]+/g,(function(t){return"-"+t.charAt(0)})).toLowerCase()+"="+u[t]})).sort().join(",");t.setAttribute("content",c)},u=function(t){return"number"==typeof t&&t>0&&t<1/0||"device-width"===t},c=function(t){return"number"==typeof t&&t>=0&&t<=10},l=function(t){return"number"==typeof t&&t>=0&&t<1/0},d=function(t){return"number"==typeof t&&t>0&&t<=1/0},f={width:"device-width",initialScale:1,minWidth:0,maxWidth:1/0},p=function(t){for(var n=e({},f),r=0,i=Object.keys(t);r<i.length;r++){var o=i[r],a=t[o];null==a||"width"===o&&!u(a)||"initialScale"===o&&!c(a)||"minWidth"===o&&!l(a)||"maxWidth"===o&&!d(a)?console.warn("Viewport Extra received invalid "+o+", so it is discarded."):n[o]=a}return n},h=null,m=null,s=p({});if(document){h=n(document,"viewport",!0),m=n(document,"viewport-extra",!1);var v=e(e({},o(h)),o(m));a(h,s,0),s=p(v),a(h,s,r(document))}var y=function(t){s=p(e(e({},s),t)),h&&a(h,s,r(document))},w=function(){return s},b=function(){function t(t){y("number"==typeof t?{minWidth:t}:t)}return t.setContent=y,t.getContent=w,t}();return t.default=b,t.getContent=w,t.setContent=y,Object.defineProperty(t,"__esModule",{value:!0}),(t=t.default).default=t,t}({});