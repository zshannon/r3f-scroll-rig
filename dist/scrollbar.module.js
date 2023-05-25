import n from"zustand";import{useLayoutEffect as t,useEffect as r,forwardRef as e,useRef as o,useImperativeHandle as i,useCallback as l,useState as c,useMemo as u}from"react";import a from"@studio-freight/lenis";import{useInView as s}from"react-intersection-observer";import{ResizeObserver as d}from"@juggle/resize-observer";import f from"debounce";import v from"vecn";function h(){return h=Object.assign?Object.assign.bind():function(n){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var e in r)Object.prototype.hasOwnProperty.call(r,e)&&(n[e]=r[e])}return n},h.apply(this,arguments)}function p(n){var t=function(n,t){if("object"!=typeof n||null===n)return n;var r=n[Symbol.toPrimitive];if(void 0!==r){var e=r.call(n,"string");if("object"!=typeof e)return e;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(n)}(n);return"symbol"==typeof t?t:String(t)}var w=n(function(n){return{debug:!1,scaleMultiplier:1,globalRender:!0,globalPriority:1e3,globalClearDepth:!1,globalRenderQueue:!1,clearGlobalRenderQueue:function(){return n(function(){return{globalRenderQueue:!1}})},isCanvasAvailable:!0,hasSmoothScrollbar:!1,canvasChildren:{},renderToCanvas:function(t,r,e){return void 0===e&&(e={}),n(function(n){var o,i=n.canvasChildren;return Object.getOwnPropertyDescriptor(i,t)?(i[t].instances+=1,i[t].props.inactive=!1,{canvasChildren:i}):{canvasChildren:h({},i,((o={})[t]={mesh:r,props:e,instances:1},o))}})},updateCanvas:function(t,r){return n(function(n){var e,o=n.canvasChildren;if(o[t]){var i=o[t],l=i.instances;return{canvasChildren:h({},o,((e={})[t]={mesh:i.mesh,props:h({},i.props,r),instances:l},e))}}})},removeFromCanvas:function(t,r){return void 0===r&&(r=!0),n(function(n){var e,o=n.canvasChildren;return(null==(e=o[t])?void 0:e.instances)>1?(o[t].instances-=1,{canvasChildren:o}):r?{canvasChildren:function(n,t){if(null==n)return{};var r,e,o={},i=Object.keys(n);for(e=0;e<i.length;e++)t.indexOf(r=i[e])>=0||(o[r]=n[r]);return o}(o,[t].map(p))}:(o[t].instances=0,o[t].props.inactive=!0,{canvasChildren:h({},o)})})},pageReflow:0,requestReflow:function(){n(function(n){return{pageReflow:n.pageReflow+1}})},scroll:{y:0,x:0,limit:0,velocity:0,progress:0,direction:0,scrollDirection:void 0},scrollTo:function(){},onScroll:function(){return function(){}}}}),g=function(){return{enabled:w(function(n){return n.hasSmoothScrollbar}),scroll:w(function(n){return n.scroll}),scrollTo:w(function(n){return n.scrollTo}),onScroll:w(function(n){return n.onScroll})}},m="undefined"!=typeof window?t:r,b=e(function(n,t){var e=n.children,c=n.enabled,u=void 0===c||c,s=n.locked,d=void 0!==s&&s,f=n.scrollRestoration,v=void 0===f?"auto":f,p=n.disablePointerOnScroll,g=void 0===p||p,b=n.horizontal,y=void 0!==b&&b,S=n.scrollInContainer,C=void 0!==S&&S,R=n.updateGlobalState,E=void 0===R||R,T=n.onScroll,L=n.config,j=void 0===L?{}:L,O=n.invalidate,x=void 0===O?function(){}:O,z=n.addEffect,V=o(),I=o(),U=o(!1),M=w(function(n){return n.scroll});i(t,function(){return{start:function(){var n;return null==(n=I.current)?void 0:n.start()},stop:function(){var n;return null==(n=I.current)?void 0:n.stop()},on:function(n,t){var r;return null==(r=I.current)?void 0:r.on(n,t)},notify:function(){var n;return null==(n=I.current)?void 0:n.emit()},emit:function(){var n;return null==(n=I.current)?void 0:n.emit()},scrollTo:function(n,t){var r;return null==(r=I.current)?void 0:r.scrollTo(n,t)},raf:function(n){var t;return null==(t=I.current)?void 0:t.raf(n)},__lenis:I.current}});var k=l(function(n){g&&V.current&&U.current!==n&&(U.current=n,V.current.style.pointerEvents=n?"none":"auto")},[g,V,U]);return m(function(){"scrollRestoration"in window.history&&(window.history.scrollRestoration=v)},[]),m(function(){var n,t,r=document.documentElement,e=document.body,o=document.body.firstElementChild;return r.classList.toggle("ScrollRig-scrollHtml",C),e.classList.toggle("ScrollRig-scrollWrapper",C),C&&Object.assign(j,{smoothTouch:!0,wrapper:e,content:o}),I.current=new a(h({orientation:y?"horizontal":"vertical"},j)),z?n=z(function(n){var t;return null==(t=I.current)?void 0:t.raf(n)}):(t=requestAnimationFrame(function n(r){var e;null==(e=I.current)||e.raf(r),t=requestAnimationFrame(n)}),n=function(){return cancelAnimationFrame(t)}),function(){var t;n(),null==(t=I.current)||t.destroy()}},[]),m(function(){var n,t,r=function(n){var t=n.scroll,r=n.limit,e=n.velocity,o=n.direction,i=n.progress,l=y?t:0;E&&(M.y=y?0:t,M.x=l,M.limit=r,M.velocity=e,M.direction=o,M.progress=i||0),Math.abs(e)>1.5&&k(!0),Math.abs(e)<1&&k(!1),T&&T({scroll:t,limit:r,velocity:e,direction:o,progress:i}),x()};return null==(n=I.current)||n.on("scroll",r),E&&(M.scrollDirection=y?"horizontal":"vertical",w.setState({scrollTo:function(){var n;null==(n=I.current)||n.scrollTo.apply(n,[].slice.call(arguments))},onScroll:function(n){var t,r;return null==(t=I.current)||t.on("scroll",n),null==(r=I.current)||r.emit(),function(){var t;return null==(t=I.current)?void 0:t.off("scroll",n)}}}),w.getState().scroll.y=window.scrollY,w.getState().scroll.x=window.scrollX),null==(t=I.current)||t.emit(),function(){var n;null==(n=I.current)||n.off("scroll",r),w.setState({onScroll:function(){return function(){}},scrollTo:function(){}})}},[]),m(function(){var n=function(){return x()},t=function(){return k(!1)};return window.addEventListener("pointermove",t),window.addEventListener("pointerdown",t),window.addEventListener("wheel",n),function(){window.removeEventListener("pointermove",t),window.removeEventListener("pointerdown",t),window.removeEventListener("wheel",n)}},[]),r(function(){E&&(document.documentElement.classList.toggle("js-smooth-scrollbar-enabled",u),document.documentElement.classList.toggle("js-smooth-scrollbar-disabled",!u),w.setState({hasSmoothScrollbar:u}))},[u]),r(function(){var n,t;d?null==(n=I.current)||n.stop():null==(t=I.current)||t.start()},[d]),e({ref:V})}),y="undefined"!=typeof window;function S(n,t,r,e,o){return e+(n-t)*(o-e)/(r-t)}function C(n,t){var e=function(n){var t={}.debounce,e=void 0===t?0:t,o=c({width:y?window.innerWidth:Infinity,height:y?window.innerHeight:Infinity}),i=o[0],l=o[1];return r(function(){var n=document.getElementById("ScrollRig-canvas");function t(){var t=n?n.clientWidth:window.innerWidth,r=n?n.clientHeight:window.innerHeight;t===i.width&&r===i.height||l({width:t,height:r})}var r,o=f.debounce(t,e),c=window.ResizeObserver||d;return n?(r=new c(o)).observe(n):window.addEventListener("resize",o),t(),function(){var n;window.removeEventListener("resize",o),null==(n=r)||n.disconnect()}},[i,l]),i}(),i=g(),a=i.scroll,p=i.onScroll,b=w(function(n){return n.scaleMultiplier}),C=w(function(n){return n.pageReflow}),R=w(function(n){return n.debug}),E=u(function(){var n={rootMargin:"0%",threshold:0,autoUpdate:!0},r=t||{};return Object.keys(r).map(function(t,e){void 0!==r[t]&&(n[t]=r[t])}),n},[t]),T=E.autoUpdate,L=E.wrapper,j=s({rootMargin:E.rootMargin,threshold:E.threshold}),O=j.ref,x=j.inView;m(function(){O(n.current)},[n,n.current]);var z=c(v.vec3(0,0,0)),V=z[0],I=z[1],U=o({inViewport:!1,progress:-1,visibility:-1,viewport:-1}).current,M=o({top:0,bottom:0,left:0,right:0,width:0,height:0}).current,k=c(M),P=k[0],B=k[1],D=o({top:0,bottom:0,left:0,right:0,width:0,height:0,x:0,y:0,positiveYUpBottom:0}).current,Y=o(v.vec3(0,0,0)).current;m(function(){var t,r=null==(t=n.current)?void 0:t.getBoundingClientRect();if(r){var o=L?L.scrollTop:window.scrollY,i=L?L.scrollLeft:window.scrollX;M.top=r.top+o,M.bottom=r.bottom+o,M.left=r.left+i,M.right=r.right+i,M.width=r.width,M.height=r.height,B(h({},M)),I(v.vec3((null==M?void 0:M.width)*b,(null==M?void 0:M.height)*b,1)),R&&console.log("useTracker.getBoundingClientRect:",M,"intialScroll:",{initialY:o,initialX:i},"size:",e,"pageReflow:",C)}},[n,e,C,b,R]);var A=l(function(t){var r=void 0===t?{}:t,o=r.onlyUpdateInViewport;if(n.current&&(void 0===o||!o||U.inViewport)){var i=r.scroll||a;!function(n,t,r,e){n.top=t.top-(r.y||0),n.bottom=t.bottom-(r.y||0),n.left=t.left-(r.x||0),n.right=t.right-(r.x||0),n.width=t.width,n.height=t.height,n.x=n.left+.5*t.width-.5*e.width,n.y=n.top+.5*t.height-.5*e.height,n.positiveYUpBottom=e.height-n.bottom}(D,M,i,e),function(n,t,r){n.x=t.x*r,n.y=-1*t.y*r}(Y,D,b);var l="horizontal"===i.scrollDirection,c=l?"width":"height",u=e[c]-D[l?"left":"top"];U.progress=S(u,0,e[c]+D[c],0,1),U.visibility=S(u,0,D[c],0,1),U.viewport=S(u,0,e[c],0,1)}},[n,e,b,a]);return m(function(){U.inViewport=x,A({onlyUpdateInViewport:!1}),R&&console.log("useTracker.inViewport:",x,"update()")},[x]),m(function(){A({onlyUpdateInViewport:!1}),R&&console.log("useTracker.update on resize/reflow")},[A,C]),r(function(){if(T)return p(function(n){return A({onlyUpdateInViewport:!0})})},[T,A,p]),{rect:P,bounds:D,scale:V,position:Y,scrollState:U,inViewport:x,update:A}}export{b as SmoothScrollbar,g as useScrollbar,C as useTracker};
//# sourceMappingURL=scrollbar.module.js.map
