(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[811],{7880:function(e,n,r){"use strict";r.d(n,{Z:function(){return a}});var l=r(5893),i=r(4476),t=r.n(i),s=r(1664);r(2243);function o(){return(0,l.jsx)("header",{className:"mb-auto",children:(0,l.jsxs)("div",{children:[(0,l.jsx)("h3",{className:"float-md-start mb-0",children:(0,l.jsx)("i",{children:(0,l.jsx)(s.default,{href:"/portfolio",children:(0,l.jsx)("a",{children:"sj.Kim"})})})}),(0,l.jsxs)("nav",{className:"nav nav-masthead justify-content-center float-md-end",children:[(0,l.jsx)(s.default,{href:"/portfolio/about",children:(0,l.jsx)("a",{className:"nav-link","aria-current":"page",href:"#",children:"About"})}),(0,l.jsx)(s.default,{href:"/portfolio/skill",children:(0,l.jsx)("a",{className:"nav-link","aria-current":"page",href:"#",children:"Experience & Skill"})}),(0,l.jsx)(s.default,{href:"/portfolio/contact",children:(0,l.jsx)("a",{className:"nav-link","aria-current":"page",href:"#",children:"Contact"})})]})]})})}function c(){return(0,l.jsx)("footer",{className:t().footer,children:(0,l.jsxs)("span",{children:[(0,l.jsx)("a",{href:"https://67crystalk.tistory.com/",target:"blank",children:"\ud83d\udcbbBlog"}),(0,l.jsx)("p",{children:"\u270967crystalk@gmail.com"})]})})}var a=function(e){var n=e.children;return(0,l.jsx)("div",{className:t().container,children:(0,l.jsxs)("div",{className:"cover-container d-flex w-100 h-100 p-3 mx-auto flex-column",children:[(0,l.jsx)(o,{}),(0,l.jsxs)("main",{className:t().main,children:[" ",n]}),(0,l.jsx)(c,{})]})})}},2167:function(e,n,r){"use strict";var l=r(3848);n.default=void 0;var i,t=(i=r(7294))&&i.__esModule?i:{default:i},s=r(1063),o=r(4651),c=r(7426);var a={};function d(e,n,r,l){if(e&&s.isLocalURL(n)){e.prefetch(n,r,l).catch((function(e){0}));var i=l&&"undefined"!==typeof l.locale?l.locale:e&&e.locale;a[n+"%"+r+(i?"%"+i:"")]=!0}}var u=function(e){var n,r=!1!==e.prefetch,i=o.useRouter(),u=t.default.useMemo((function(){var n=s.resolveHref(i,e.href,!0),r=l(n,2),t=r[0],o=r[1];return{href:t,as:e.as?s.resolveHref(i,e.as):o||t}}),[i,e.href,e.as]),f=u.href,h=u.as,x=e.children,m=e.replace,p=e.shallow,v=e.scroll,j=e.locale;"string"===typeof x&&(x=t.default.createElement("a",null,x));var _=(n=t.default.Children.only(x))&&"object"===typeof n&&n.ref,b=c.useIntersection({rootMargin:"200px"}),g=l(b,2),N=g[0],y=g[1],w=t.default.useCallback((function(e){N(e),_&&("function"===typeof _?_(e):"object"===typeof _&&(_.current=e))}),[_,N]);t.default.useEffect((function(){var e=y&&r&&s.isLocalURL(f),n="undefined"!==typeof j?j:i&&i.locale,l=a[f+"%"+h+(n?"%"+n:"")];e&&!l&&d(i,f,h,{locale:n})}),[h,f,y,j,r,i]);var k={ref:w,onClick:function(e){n.props&&"function"===typeof n.props.onClick&&n.props.onClick(e),e.defaultPrevented||function(e,n,r,l,i,t,o,c){("A"!==e.currentTarget.nodeName||!function(e){var n=e.currentTarget.target;return n&&"_self"!==n||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&s.isLocalURL(r))&&(e.preventDefault(),null==o&&l.indexOf("#")>=0&&(o=!1),n[i?"replace":"push"](r,l,{shallow:t,locale:c,scroll:o}))}(e,i,f,h,m,p,v,j)},onMouseEnter:function(e){s.isLocalURL(f)&&(n.props&&"function"===typeof n.props.onMouseEnter&&n.props.onMouseEnter(e),d(i,f,h,{priority:!0}))}};if(e.passHref||"a"===n.type&&!("href"in n.props)){var E="undefined"!==typeof j?j:i&&i.locale,C=i&&i.isLocaleDomain&&s.getDomainLocale(h,E,i&&i.locales,i&&i.domainLocales);k.href=C||s.addBasePath(s.addLocale(h,E,i&&i.defaultLocale))}return t.default.cloneElement(n,k)};n.default=u},7426:function(e,n,r){"use strict";var l=r(3848);Object.defineProperty(n,"__esModule",{value:!0}),n.useIntersection=function(e){var n=e.rootMargin,r=e.disabled||!s,c=i.useRef(),a=i.useState(!1),d=l(a,2),u=d[0],f=d[1],h=i.useCallback((function(e){c.current&&(c.current(),c.current=void 0),r||u||e&&e.tagName&&(c.current=function(e,n,r){var l=function(e){var n=e.rootMargin||"",r=o.get(n);if(r)return r;var l=new Map,i=new IntersectionObserver((function(e){e.forEach((function(e){var n=l.get(e.target),r=e.isIntersecting||e.intersectionRatio>0;n&&r&&n(r)}))}),e);return o.set(n,r={id:n,observer:i,elements:l}),r}(r),i=l.id,t=l.observer,s=l.elements;return s.set(e,n),t.observe(e),function(){s.delete(e),t.unobserve(e),0===s.size&&(t.disconnect(),o.delete(i))}}(e,(function(e){return e&&f(e)}),{rootMargin:n}))}),[r,n,u]);return i.useEffect((function(){if(!s&&!u){var e=t.requestIdleCallback((function(){return f(!0)}));return function(){return t.cancelIdleCallback(e)}}}),[u]),[h,u]};var i=r(7294),t=r(3447),s="undefined"!==typeof IntersectionObserver;var o=new Map},6378:function(e,n,r){"use strict";r.r(n),r.d(n,{default:function(){return t}});var l=r(5893),i=r(7880);function t(){return(0,l.jsx)(i.Z,{children:(0,l.jsxs)("div",{className:"p-5 mb-4 rounded-3 row",children:[(0,l.jsx)("div",{className:"col-md-4",children:(0,l.jsx)("div",{className:"g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative",children:(0,l.jsx)("div",{className:"col p-4 d-flex flex-column position-static",children:(0,l.jsxs)("ul",{className:"list-unstyled text-small",children:[(0,l.jsx)("li",{children:(0,l.jsx)("b",{children:(0,l.jsx)("i",{children:"Frontend"})})}),(0,l.jsx)("li",{children:"jQuery,DataTables \ub4f1 \ub77c\uc774\ube0c\ub7ec\ub9ac \ud65c\uc6a9"}),(0,l.jsx)("li",{children:"javascript\uc5d0 \ub300\ud55c \uc774\ud574"}),(0,l.jsx)("li",{children:"HTML, CSS \ub4f1 W3C\uc6f9 \ud45c\uc900 \uaddc\uaca9\uc5d0 \ub300\ud55c \uc774\ud574"}),(0,l.jsx)("li",{children:"\ud06c\ub85c\uc2a4\ube0c\ub77c\uc6b0\uc9d5, \uc6f9 \ud45c\uc900, \uc6f9 \uc811\uadfc\uc131\uc5d0 \ub300\ud55c \uc774\ud574\uc640 \uacbd\ud5d8"}),(0,l.jsx)("li",{children:"Angular, React \ud65c\uc6a9 \uac1c\uc778 \ud504\ub85c\uc81d\ud2b8(\uc9c4\ud589\uc911)"}),(0,l.jsx)("li",{children:"\uc6f9 \ud504\ub860\ud2b8\uc5d4\ub4dc \ud14c\uc2a4\ud2b8 \uc790\ub3d9\ud654(\uc9c4\ud589\uc911)"})]})})})}),(0,l.jsx)("div",{className:"col-md-4",children:(0,l.jsx)("div",{className:"g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative",children:(0,l.jsx)("div",{className:"col p-4 d-flex flex-column position-static",children:(0,l.jsxs)("ul",{className:"list-unstyled text-small",children:[(0,l.jsx)("li",{children:(0,l.jsx)("b",{children:(0,l.jsx)("i",{children:"Backend"})})}),(0,l.jsx)("li",{children:"Spring,Spring boot \uac1c\ubc1c"}),(0,l.jsx)("li",{children:"Django\ub97c \ud1b5\ud55c API \uac1c\ubc1c \ud559\uc2b5"}),(0,l.jsx)("li",{children:"API \uc124\uacc4 \ubc0f \uc11c\ubc84 \uad6c\ucd95"}),(0,l.jsx)("li",{children:"\ud14c\uc2a4\ud2b8, \ubc30\ud3ec \uc790\ub3d9\ud654"})]})})})}),(0,l.jsx)("div",{className:"col-md-4",children:(0,l.jsx)("div",{className:"g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative",children:(0,l.jsx)("div",{className:"col p-4 d-flex flex-column position-static",children:(0,l.jsxs)("ul",{className:"list-unstyled text-small",children:[(0,l.jsx)("li",{children:(0,l.jsx)("b",{children:(0,l.jsx)("i",{children:"\uae30\ud0c0"})})}),(0,l.jsx)("li",{children:"Linux, Windows \uc11c\ubc84 \ud658\uacbd \uac1c\ubc1c \ubc0f \ubc30\ud3ec"}),(0,l.jsx)("li",{children:"Go, C/C++, .NET\uc744 \ud65c\uc6a9 \ud559\uc2b5"}),(0,l.jsx)("li",{children:"Docker, Kubernetes \ud65c\uc6a9 \ud559\uc2b5"}),(0,l.jsx)("li",{children:"Mysql, Mssql, Oracle \ub4f1 RDBMS \ud65c\uc6a9"}),(0,l.jsx)("li",{children:"CI/CD \ud30c\uc774\ud504\ub77c\uc778 \uad6c\ucd95"})]})})})})]})})}},9189:function(e,n,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/portfolio/skill",function(){return r(6378)}])},4476:function(e){e.exports={container:"Home_container__1EcsU",main:"Home_main__1x8gC",footer:"Home_footer__1WdhD",title:"Home_title__3DjR7",description:"Home_description__17Z4F",code:"Home_code__axx2Y",grid:"Home_grid__2Ei2F",card:"Home_card__2SdtB",logo:"Home_logo__1YbrH"}},2243:function(){},1664:function(e,n,r){e.exports=r(2167)}},function(e){e.O(0,[242,774,888,179],(function(){return n=9189,e(e.s=n);var n}));var n=e.O();_N_E=n}]);