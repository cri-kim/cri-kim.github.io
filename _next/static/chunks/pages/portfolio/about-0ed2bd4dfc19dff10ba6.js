(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[607],{7880:function(e,n,r){"use strict";r.d(n,{Z:function(){return s}});var t=r(5893),a=r(4476),o=r.n(a),c=r(1664);r(2243);function i(){return(0,t.jsx)("header",{className:"mb-auto",children:(0,t.jsxs)("div",{children:[(0,t.jsx)("h3",{className:"float-md-start mb-0",children:(0,t.jsx)("i",{children:(0,t.jsx)(c.default,{href:"/portfolio",children:(0,t.jsx)("a",{children:"sj.Kim"})})})}),(0,t.jsxs)("nav",{className:"nav nav-masthead justify-content-center float-md-end",children:[(0,t.jsx)(c.default,{href:"/portfolio/about",children:(0,t.jsx)("a",{className:"nav-link","aria-current":"page",href:"#",children:"About"})}),(0,t.jsx)(c.default,{href:"/portfolio/exp",children:(0,t.jsx)("a",{className:"nav-link","aria-current":"page",href:"#",children:"Experience"})}),(0,t.jsx)(c.default,{href:"/portfolio/skill",children:(0,t.jsx)("a",{className:"nav-link","aria-current":"page",href:"#",children:"Skill"})}),(0,t.jsx)(c.default,{href:"/portfolio/contact",children:(0,t.jsx)("a",{className:"nav-link","aria-current":"page",href:"#",children:"Contact"})})]})]})})}function l(){return(0,t.jsx)("footer",{className:o().footer,children:(0,t.jsxs)("span",{children:[(0,t.jsx)("a",{href:"https://67crystalk.tistory.com/",target:"blank",children:"\ud83d\udcbbBlog"}),(0,t.jsx)("p",{children:"\u270967crystalk@gmail.com"})]})})}var s=function(e){var n=e.children;return(0,t.jsx)("div",{className:o().container,children:(0,t.jsxs)("div",{className:"cover-container d-flex w-100 h-100 p-3 mx-auto flex-column",children:[(0,t.jsx)(i,{}),(0,t.jsxs)("main",{className:o().main,children:[" ",n]}),(0,t.jsx)(l,{})]})})}},2167:function(e,n,r){"use strict";var t=r(3848);n.default=void 0;var a,o=(a=r(7294))&&a.__esModule?a:{default:a},c=r(1063),i=r(4651),l=r(7426);var s={};function u(e,n,r,t){if(e&&c.isLocalURL(n)){e.prefetch(n,r,t).catch((function(e){0}));var a=t&&"undefined"!==typeof t.locale?t.locale:e&&e.locale;s[n+"%"+r+(a?"%"+a:"")]=!0}}var f=function(e){var n,r=!1!==e.prefetch,a=i.useRouter(),f=o.default.useMemo((function(){var n=c.resolveHref(a,e.href,!0),r=t(n,2),o=r[0],i=r[1];return{href:o,as:e.as?c.resolveHref(a,e.as):i||o}}),[a,e.href,e.as]),d=f.href,h=f.as,p=e.children,v=e.replace,m=e.shallow,_=e.scroll,x=e.locale;"string"===typeof p&&(p=o.default.createElement("a",null,p));var j=(n=o.default.Children.only(p))&&"object"===typeof n&&n.ref,g=l.useIntersection({rootMargin:"200px"}),b=t(g,2),N=b[0],y=b[1],k=o.default.useCallback((function(e){N(e),j&&("function"===typeof j?j(e):"object"===typeof j&&(j.current=e))}),[j,N]);o.default.useEffect((function(){var e=y&&r&&c.isLocalURL(d),n="undefined"!==typeof x?x:a&&a.locale,t=s[d+"%"+h+(n?"%"+n:"")];e&&!t&&u(a,d,h,{locale:n})}),[h,d,y,x,r,a]);var E={ref:k,onClick:function(e){n.props&&"function"===typeof n.props.onClick&&n.props.onClick(e),e.defaultPrevented||function(e,n,r,t,a,o,i,l){("A"!==e.currentTarget.nodeName||!function(e){var n=e.currentTarget.target;return n&&"_self"!==n||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&c.isLocalURL(r))&&(e.preventDefault(),null==i&&t.indexOf("#")>=0&&(i=!1),n[a?"replace":"push"](r,t,{shallow:o,locale:l,scroll:i}))}(e,a,d,h,v,m,_,x)},onMouseEnter:function(e){c.isLocalURL(d)&&(n.props&&"function"===typeof n.props.onMouseEnter&&n.props.onMouseEnter(e),u(a,d,h,{priority:!0}))}};if(e.passHref||"a"===n.type&&!("href"in n.props)){var w="undefined"!==typeof x?x:a&&a.locale,C=a&&a.isLocaleDomain&&c.getDomainLocale(h,w,a&&a.locales,a&&a.domainLocales);E.href=C||c.addBasePath(c.addLocale(h,w,a&&a.defaultLocale))}return o.default.cloneElement(n,E)};n.default=f},7426:function(e,n,r){"use strict";var t=r(3848);Object.defineProperty(n,"__esModule",{value:!0}),n.useIntersection=function(e){var n=e.rootMargin,r=e.disabled||!c,l=a.useRef(),s=a.useState(!1),u=t(s,2),f=u[0],d=u[1],h=a.useCallback((function(e){l.current&&(l.current(),l.current=void 0),r||f||e&&e.tagName&&(l.current=function(e,n,r){var t=function(e){var n=e.rootMargin||"",r=i.get(n);if(r)return r;var t=new Map,a=new IntersectionObserver((function(e){e.forEach((function(e){var n=t.get(e.target),r=e.isIntersecting||e.intersectionRatio>0;n&&r&&n(r)}))}),e);return i.set(n,r={id:n,observer:a,elements:t}),r}(r),a=t.id,o=t.observer,c=t.elements;return c.set(e,n),o.observe(e),function(){c.delete(e),o.unobserve(e),0===c.size&&(o.disconnect(),i.delete(a))}}(e,(function(e){return e&&d(e)}),{rootMargin:n}))}),[r,n,f]);return a.useEffect((function(){if(!c&&!f){var e=o.requestIdleCallback((function(){return d(!0)}));return function(){return o.cancelIdleCallback(e)}}}),[f]),[h,f]};var a=r(7294),o=r(3447),c="undefined"!==typeof IntersectionObserver;var i=new Map},6753:function(e,n,r){"use strict";r.r(n),r.d(n,{default:function(){return o}});var t=r(5893),a=r(7880);function o(){return(0,t.jsxs)(a.Z,{children:[(0,t.jsx)("div",{className:"p-5 mb-4 bg-light rounded-3",children:(0,t.jsx)("p",{children:"\uc800\ub294 Java N Spring Framework \uae30\ubc18\uc758 \uc6f9 \uc11c\ube44\uc2a4\ub97c \uac1c\ubc1c \ubc0f \uc6b4\uc601\ud558\uc600\uc73c\uba70, \uc11c\ube44\uc2a4\uac04 \uc5f0\ub3d9 \uc5c5\ubb34, \ubc31\uc624\ud53c\uc2a4 \uac1c\ubc1c, UI/UX\ub97c \uace0\ub824\ud55c \ud654\uba74 \uac1c\ubc1c\uc744 \uc9c4\ud589\ud558\uc600\uc2b5\ub2c8\ub2e4. \uadf8\ubc16\uc5d0 \uc2dc\uc2a4\ud15c \ubc30\ud3ec \uc790\ub3d9\ud654 \ubc0f \uc720\uae30\uc801\uc778 \ud504\ub85c\uc81d\ud2b8\uc758 \uad00\ub9ac\ub97c \uc704\ud574 CI/CD \uad6c\ucd95\uc744 \uc9c4\ud589\ud558\uc600\uc2b5\ub2c8\ub2e4."})}),(0,t.jsxs)("div",{className:"row align-items-md-stretch",children:[(0,t.jsx)("div",{className:"col-md-6",children:'"\ub204\uad6c\ub098 \uc228 \uc26c\ub4ef \uc0ac\uc6a9\ud560 \uc218 \uc788\ub294 \uc11c\ube44\uc2a4\ub97c \ub9cc\ub4e4\uc790!" \ub204\uad6c\ub098 \uc27d\uac8c, \uc548\uc2ec\ud558\uace0 \uc0ac\uc6a9\ud560 \uc218 \uc788\ub294 \uc11c\ube44\uc2a4\ub97c \ub9cc\ub4dc\ub294 \uac83\uc774 \uc800\uc758 \ubaa9\ud45c\uc785\ub2c8\ub2e4.'}),(0,t.jsx)("div",{className:"col-md-6",children:'"\uc9c0\uad6c\uc0c1\uc758 \ubaa8\ub4e0 \uac83\uc740 \uc11c\ube44\uc2a4\ud654 \ud560 \uc218 \uc788\ub2e4." \uc911\uace0\uac70\ub798, \ub9ac\uc2f8\uc774\ud074\ub9c1, \uc2ec\ubd80\ub984, \uc9c0\ub098\uac00\ub294 \uac1c\ubbf8\ub97c \uc138\ub294\uac83 \uae4c\uc9c0\ub3c4 \ubaa8\ub450 \uac00\uce58\uac00 \uc788\ub294 \uc815\ubcf4\ub77c\uace0 \uc0dd\uac01\ud569\ub2c8\ub2e4. \uc815\ubcf4\uc758 \uac00\uce58\ub97c \ub9cc\ub4e4\uc5b4\ub098\uac00\ub294 \uac1c\ubc1c\uc790\uac00 \ub418\uace0\uc2f6\uc2b5\ub2c8\ub2e4.'})]})]})}},9513:function(e,n,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/portfolio/about",function(){return r(6753)}])},4476:function(e){e.exports={container:"Home_container__1EcsU",main:"Home_main__1x8gC",footer:"Home_footer__1WdhD",title:"Home_title__3DjR7",description:"Home_description__17Z4F",code:"Home_code__axx2Y",grid:"Home_grid__2Ei2F",card:"Home_card__2SdtB",logo:"Home_logo__1YbrH"}},2243:function(){},1664:function(e,n,r){e.exports=r(2167)}},function(e){e.O(0,[242,774,888,179],(function(){return n=9513,e(e.s=n);var n}));var n=e.O();_N_E=n}]);