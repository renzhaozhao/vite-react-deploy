import{R as e,N as t,r,H as n,S as i,a as o,b as u}from"./vendor.18d16c0c.js";var a="_header_1t15c_1",c="_content_1t15c_5",s="_logo_1t15c_11",l="_nav_1t15c_20";const f=()=>e.createElement("header",{className:a},e.createElement("div",{className:`container ${c}`},e.createElement("div",{className:s},e.createElement("img",{src:"/vite-react-deploy/assets/favicon.caa643e6.svg"})),e.createElement("nav",{className:l},e.createElement(t,{to:"/",exact:!0},"首页"),e.createElement(t,{to:"/post",exact:!0},"Post"))));let d;const v={},p=function(e,t){if(!t)return e();if(void 0===d){const e=document.createElement("link").relList;d=e&&e.supports&&e.supports("modulepreload")?"modulepreload":"preload"}return Promise.all(t.map((e=>{if(e in v)return;v[e]=!0;const t=e.endsWith(".css"),r=t?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${e}"]${r}`))return;const n=document.createElement("link");return n.rel=t?"stylesheet":d,t||(n.as="script",n.crossOrigin=""),n.href=e,document.head.appendChild(n),t?new Promise(((e,t)=>{n.addEventListener("load",e),n.addEventListener("error",t)})):void 0}))).then((()=>e()))},h="/vite-react-deploy/",y=[{path:"/",name:"home",exact:!0,component:r.exports.lazy((()=>p((()=>import("./Home.495fbe08.js")),["/vite-react-deploy/assets/Home.495fbe08.js","/vite-react-deploy/assets/Home.b48242cb.css","/vite-react-deploy/assets/vendor.18d16c0c.js"])))},{path:"/post/:id",name:"post",exact:!0,component:r.exports.lazy((()=>p((()=>import("./Post.e88ab189.js")),["/vite-react-deploy/assets/Post.e88ab189.js","/vite-react-deploy/assets/Post.f63caa12.css","/vite-react-deploy/assets/vendor.18d16c0c.js"])))}];var m=Object.prototype.hasOwnProperty;var g=new WeakMap,b=0;var w=function(){function e(e){void 0===e&&(e={}),this.cache=new Map(Object.entries(e)),this.subs=[]}return e.prototype.get=function(e){var t=this.serializeKey(e)[0];return this.cache.get(t)},e.prototype.set=function(e,t){var r=this.serializeKey(e)[0];this.cache.set(r,t),this.notify()},e.prototype.keys=function(){return Array.from(this.cache.keys())},e.prototype.has=function(e){var t=this.serializeKey(e)[0];return this.cache.has(t)},e.prototype.clear=function(){this.cache.clear(),this.notify()},e.prototype.delete=function(e){var t=this.serializeKey(e)[0];this.cache.delete(t),this.notify()},e.prototype.serializeKey=function(e){var t=null;if("function"==typeof e)try{e=e()}catch(r){e=""}return Array.isArray(e)?(t=e,e=function(e){if(!e.length)return"";for(var t="arg",r=0;r<e.length;++r)if(null!==e[r]){var n=void 0;"object"!=typeof e[r]&&"function"!=typeof e[r]?n="string"==typeof e[r]?'"'+e[r]+'"':String(e[r]):g.has(e[r])?n=g.get(e[r]):(n=b,g.set(e[r],b++)),t+="@"+n}else t+="@null";return t}(e)):e=String(e||""),[e,t,e?"err@"+e:"",e?"validating@"+e:""]},e.prototype.subscribe=function(e){var t=this;if("function"!=typeof e)throw new Error("Expected the listener to be a function.");var r=!0;return this.subs.push(e),function(){if(r){r=!1;var n=t.subs.indexOf(e);n>-1&&(t.subs[n]=t.subs[t.subs.length-1],t.subs.length--)}}},e.prototype.notify=function(){for(var e=0,t=this.subs;e<t.length;e++){(0,t[e])()}},e}(),E=!0,x={isOnline:function(){return E},isDocumentVisible:function(){return"undefined"==typeof document||void 0===document.visibilityState||"hidden"!==document.visibilityState},fetcher:function(e){return fetch(e).then((function(e){return e.json()}))},registerOnFocus:function(e){"undefined"!=typeof window&&void 0!==window.addEventListener&&"undefined"!=typeof document&&void 0!==document.addEventListener&&(document.addEventListener("visibilitychange",(function(){return e()}),!1),window.addEventListener("focus",(function(){return e()}),!1))},registerOnReconnect:function(e){"undefined"!=typeof window&&void 0!==window.addEventListener&&(window.addEventListener("online",(function(){E=!0,e()}),!1),window.addEventListener("offline",(function(){return E=!1}),!1))}},O=function(){return(O=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var i in t=arguments[r])Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e}).apply(this,arguments)},R=new w;var _="undefined"!=typeof window&&navigator.connection&&-1!==["slow-2g","2g"].indexOf(navigator.connection.effectiveType),P=O({onLoadingSlow:function(){},onSuccess:function(){},onError:function(){},onErrorRetry:function(e,t,r,n,i){if(r.isDocumentVisible()&&!("number"==typeof r.errorRetryCount&&i.retryCount>r.errorRetryCount)){var o=Math.min(i.retryCount,8),u=~~((Math.random()+.5)*(1<<o))*r.errorRetryInterval;setTimeout(n,u,i)}},errorRetryInterval:1e3*(_?10:5),focusThrottleInterval:5e3,dedupingInterval:2e3,loadingTimeout:1e3*(_?5:3),refreshInterval:0,revalidateOnFocus:!0,revalidateOnReconnect:!0,refreshWhenHidden:!1,refreshWhenOffline:!1,shouldRetryOnError:!0,suspense:!1,compare:function e(t,r){var n,i;if(t===r)return!0;if(t&&r&&(n=t.constructor)===r.constructor){if(n===Date)return t.getTime()===r.getTime();if(n===RegExp)return t.toString()===r.toString();if(n===Array){if((i=t.length)===r.length)for(;i--&&e(t[i],r[i]););return-1===i}if(!n||"object"==typeof t){for(n in i=0,t){if(m.call(t,n)&&++i&&!m.call(r,n))return!1;if(!(n in r)||!e(t[n],r[n]))return!1}return Object.keys(r).length===i}}return t!=t&&r!=r},isPaused:function(){return!1}},x),T="undefined"==typeof window||!!("undefined"!=typeof Deno&&Deno&&Deno.version&&Deno.version.deno),V=T?null:window.requestAnimationFrame?function(e){return window.requestAnimationFrame(e)}:function(e){return setTimeout(e,1)},S=T?r.exports.useEffect:r.exports.useLayoutEffect,k=r.exports.createContext({});k.displayName="SWRConfigContext";var j,C=function(e,t,r,n){return new(r||(r=Promise))((function(i,o){function u(e){try{c(n.next(e))}catch(t){o(t)}}function a(e){try{c(n.throw(e))}catch(t){o(t)}}function c(e){var t;e.done?i(e.value):(t=e.value,t instanceof r?t:new r((function(e){e(t)}))).then(u,a)}c((n=n.apply(e,t||[])).next())}))},I=function(e,t){var r,n,i,o,u={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]};return o={next:a(0),throw:a(1),return:a(2)},"function"==typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function a(o){return function(a){return function(o){if(r)throw new TypeError("Generator is already executing.");for(;u;)try{if(r=1,n&&(i=2&o[0]?n.return:o[0]?n.throw||((i=n.return)&&i.call(n),0):n.next)&&!(i=i.call(n,o[1])).done)return i;switch(n=0,i&&(o=[2&o[0],i.value]),o[0]){case 0:case 1:i=o;break;case 4:return u.label++,{value:o[1],done:!1};case 5:u.label++,n=o[1],o=[0];continue;case 7:o=u.ops.pop(),u.trys.pop();continue;default:if(!(i=u.trys,(i=i.length>0&&i[i.length-1])||6!==o[0]&&2!==o[0])){u=0;continue}if(3===o[0]&&(!i||o[1]>i[0]&&o[1]<i[3])){u.label=o[1];break}if(6===o[0]&&u.label<i[1]){u.label=i[1],i=o;break}if(i&&u.label<i[2]){u.label=i[2],u.ops.push(o);break}i[2]&&u.ops.pop(),u.trys.pop();continue}o=t.call(e,u)}catch(a){o=[6,a],n=0}finally{r=i=0}if(5&o[0])throw o[1];return{value:o[0]?o[1]:void 0,done:!0}}([o,a])}}},L={},D={},z={},W={},A={},K={},M={},F=(j=0,function(){return++j});if(!T){var N=function(e){if(P.isDocumentVisible()&&P.isOnline())for(var t in e)e[t][0]&&e[t][0]()};"function"==typeof P.registerOnFocus&&P.registerOnFocus((function(){return N(z)})),"function"==typeof P.registerOnReconnect&&P.registerOnReconnect((function(){return N(W)}))}var H=function(e,t){void 0===t&&(t=!0);var r=R.serializeKey(e),n=r[0],i=r[2],o=r[3];if(!n)return Promise.resolve();var u=A[n];if(n&&u){for(var a=R.get(n),c=R.get(i),s=R.get(o),l=[],f=0;f<u.length;++f)l.push(u[f](t,a,c,s,f>0));return Promise.all(l).then((function(){return R.get(n)}))}return Promise.resolve(R.get(n))},q=function(e,t,r,n){var i=A[e];if(e&&i)for(var o=0;o<i.length;++o)i[o](!1,t,r,n)},$=function(e,t,r){return void 0===r&&(r=!0),C(void 0,void 0,void 0,(function(){var n,i,o,u,a,c,s,l,f,d,v,p,h;return I(this,(function(y){switch(y.label){case 0:if(n=R.serializeKey(e),i=n[0],o=n[2],!i)return[2];if(void 0===t)return[2,H(e,r)];if(K[i]=F()-1,M[i]=0,u=K[i],a=D[i],l=!1,t&&"function"==typeof t)try{t=t(R.get(i))}catch(m){t=void 0,s=m}if(!t||"function"!=typeof t.then)return[3,5];l=!0,y.label=1;case 1:return y.trys.push([1,3,,4]),[4,t];case 2:return c=y.sent(),[3,4];case 3:return f=y.sent(),s=f,[3,4];case 4:return[3,6];case 5:c=t,y.label=6;case 6:if((d=function(){if(u!==K[i]||a!==D[i]){if(s)throw s;return!0}})())return[2,c];if(void 0!==c&&R.set(i,c),R.set(o,s),M[i]=F()-1,!l&&d())return[2,c];if(v=A[i]){for(p=[],h=0;h<v.length;++h)p.push(v[h](!!r,c,s,void 0,h>0));return[2,Promise.all(p).then((function(){if(s)throw s;return R.get(i)}))]}if(s)throw s;return[2,c]}}))}))};function B(){for(var e=this,t=[],n=0;n<arguments.length;n++)t[n]=arguments[n];var i=t[0],o=Object.assign({},P,r.exports.useContext(k),t.length>2?t[2]:2===t.length&&"object"==typeof t[1]?t[1]:{}),u=t.length>2||2===t.length&&"function"==typeof t[1]||null===t[1]?t[1]:o.fetcher,a=R.serializeKey(i),c=a[0],s=a[1],l=a[2],f=a[3],d=r.exports.useRef(o);S((function(){d.current=o}));var v=function(){return o.revalidateOnMount||!o.initialData&&void 0===o.revalidateOnMount},p=function(){var e=R.get(c);return void 0===e?o.initialData:e},h=function(){return!!R.get(f)||c&&v()},y=p(),m=R.get(l),g=h(),b=r.exports.useRef({data:!1,error:!1,isValidating:!1}),w=r.exports.useRef({data:y,error:m,isValidating:g});r.exports.useDebugValue(w.current.data);var E,x,O=r.exports.useState({})[1],_=r.exports.useCallback((function(e){var t=!1;for(var r in e)w.current[r]!==e[r]&&(w.current[r]=e[r],b.current[r]&&(t=!0));if(t){if(j.current||!H.current)return;O({})}}),[]),j=r.exports.useRef(!1),N=r.exports.useRef(c),H=r.exports.useRef(!1),B=r.exports.useCallback((function(e){for(var t,r=[],n=1;n<arguments.length;n++)r[n-1]=arguments[n];j.current||H.current&&c===N.current&&(t=d.current)[e].apply(t,r)}),[c]),G=r.exports.useCallback((function(e,t){return $(N.current,e,t)}),[]),J=function(e,t){return e[c]?e[c].push(t):e[c]=[t],function(){var r=e[c],n=r.indexOf(t);n>=0&&(r[n]=r[r.length-1],r.pop())}},Q=r.exports.useCallback((function(t){return void 0===t&&(t={}),C(e,void 0,void 0,(function(){var e,r,n,i,a,v,p,h,y,m;return I(this,(function(g){switch(g.label){case 0:if(!c||!u)return[2,!1];if(j.current)return[2,!1];if(d.current.isPaused())return[2,!1];e=t.retryCount,r=void 0===e?0:e,n=t.dedupe,i=void 0!==n&&n,a=!0,v=void 0!==L[c]&&i,g.label=1;case 1:return g.trys.push([1,6,,7]),_({isValidating:!0}),R.set(f,!0),v||q(c,w.current.data,w.current.error,!0),p=void 0,h=void 0,v?(h=D[c],[4,L[c]]):[3,3];case 2:return p=g.sent(),[3,5];case 3:return o.loadingTimeout&&!R.get(c)&&setTimeout((function(){a&&B("onLoadingSlow",c,o)}),o.loadingTimeout),L[c]=null!==s?u.apply(void 0,s):u(c),D[c]=h=F(),[4,L[c]];case 4:p=g.sent(),setTimeout((function(){delete L[c],delete D[c]}),o.dedupingInterval),B("onSuccess",p,c,o),g.label=5;case 5:return D[c]>h?[2,!1]:K[c]&&(h<=K[c]||h<=M[c]||0===M[c])?(_({isValidating:!1}),[2,!1]):(R.set(l,void 0),R.set(f,!1),y={isValidating:!1},void 0!==w.current.error&&(y.error=void 0),o.compare(w.current.data,p)||(y.data=p),o.compare(R.get(c),p)||R.set(c,p),_(y),v||q(c,p,y.error,!1),[3,7]);case 6:return m=g.sent(),delete L[c],delete D[c],d.current.isPaused()?(_({isValidating:!1}),[2,!1]):(R.set(l,m),w.current.error!==m&&(_({isValidating:!1,error:m}),v||q(c,void 0,m,!1)),B("onError",m,c,o),o.shouldRetryOnError&&B("onErrorRetry",m,c,o,Q,{retryCount:r+1,dedupe:!0}),[3,7]);case 7:return a=!1,[2,!0]}}))}))}),[c]);if(S((function(){if(c){j.current=!1;var e=H.current;H.current=!0;var t=w.current.data,r=p();N.current=c,o.compare(t,r)||_({data:r});var n=function(){return Q({dedupe:!0})};(e||v())&&(void 0===r||T?n():V(n));var i=!1,u=J(z,(function(){!i&&d.current.revalidateOnFocus&&(i=!0,n(),setTimeout((function(){return i=!1}),d.current.focusThrottleInterval))})),a=J(W,(function(){d.current.revalidateOnReconnect&&n()})),s=J(A,(function(e,t,r,i,u){void 0===e&&(e=!0),void 0===u&&(u=!0);var a={},c=!1;return void 0===t||o.compare(w.current.data,t)||(a.data=t,c=!0),w.current.error!==r&&(a.error=r,c=!0),void 0!==i&&w.current.isValidating!==i&&(a.isValidating=i,c=!0),c&&_(a),!!e&&(u?n():Q())}));return function(){_=function(){return null},j.current=!0,u(),a(),s()}}}),[c,Q]),S((function(){var t=null,r=function(){return C(e,void 0,void 0,(function(){return I(this,(function(e){switch(e.label){case 0:return w.current.error||!d.current.refreshWhenHidden&&!d.current.isDocumentVisible()||!d.current.refreshWhenOffline&&!d.current.isOnline()?[3,2]:[4,Q({dedupe:!0})];case 1:e.sent(),e.label=2;case 2:return d.current.refreshInterval&&t&&(t=setTimeout(r,d.current.refreshInterval)),[2]}}))}))};return d.current.refreshInterval&&(t=setTimeout(r,d.current.refreshInterval)),function(){t&&(clearTimeout(t),t=null)}}),[o.refreshInterval,o.refreshWhenHidden,o.refreshWhenOffline,Q]),o.suspense){if(E=R.get(c),x=R.get(l),void 0===E&&(E=y),void 0===x&&(x=m),void 0===E&&void 0===x){if(L[c]||Q(),L[c]&&"function"==typeof L[c].then)throw L[c];E=L[c]}if(void 0===E&&x)throw x}var U=r.exports.useMemo((function(){var e={revalidate:Q,mutate:G};return Object.defineProperties(e,{error:{get:function(){return b.current.error=!0,o.suspense?x:N.current===c?w.current.error:m},enumerable:!0},data:{get:function(){return b.current.data=!0,o.suspense?E:N.current===c?w.current.data:y},enumerable:!0},isValidating:{get:function(){return b.current.isValidating=!0,!!c&&w.current.isValidating},enumerable:!0}}),e}),[Q,y,m,G,c,o.suspense,x,E]);return U}Object.defineProperty(k.Provider,"default",{value:P});var G=k.Provider;const J=()=>e.createElement(G,{value:{suspense:!0,fetcher:e=>fetch(e).then((e=>e.text()))}},e.createElement(n,null,e.createElement(r.exports.Suspense,{fallback:e.createElement("div",null)},e.createElement(f,null),e.createElement(i,null,y.map((t=>e.createElement(o,{exact:!0,key:t.path,path:t.path},e.createElement(t.component,null))))))));u.render(e.createElement(e.StrictMode,null,e.createElement(J,null)),document.getElementById("root"));export{h as R,B as u};