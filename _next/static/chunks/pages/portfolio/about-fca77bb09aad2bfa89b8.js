(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[607],{2167:function(e,r,o){"use strict";var n=o(3848);r.default=void 0;var t,a=(t=o(7294))&&t.__esModule?t:{default:t},l=o(1063),i=o(4651),c=o(7426);var s={};function f(e,r,o,n){if(e&&l.isLocalURL(r)){e.prefetch(r,o,n).catch((function(e){0}));var t=n&&"undefined"!==typeof n.locale?n.locale:e&&e.locale;s[r+"%"+o+(t?"%"+t:"")]=!0}}var u=function(e){var r,o=!1!==e.prefetch,t=i.useRouter(),u=a.default.useMemo((function(){var r=l.resolveHref(t,e.href,!0),o=n(r,2),a=o[0],i=o[1];return{href:a,as:e.as?l.resolveHref(t,e.as):i||a}}),[t,e.href,e.as]),d=u.href,h=u.as,p=e.children,v=e.replace,_=e.shallow,m=e.scroll,x=e.locale;"string"===typeof p&&(p=a.default.createElement("a",null,p));var g=(r=a.default.Children.only(p))&&"object"===typeof r&&r.ref,j=c.useIntersection({rootMargin:"200px"}),b=n(j,2),k=b[0],y=b[1],N=a.default.useCallback((function(e){k(e),g&&("function"===typeof g?g(e):"object"===typeof g&&(g.current=e))}),[g,k]);a.default.useEffect((function(){var e=y&&o&&l.isLocalURL(d),r="undefined"!==typeof x?x:t&&t.locale,n=s[d+"%"+h+(r?"%"+r:"")];e&&!n&&f(t,d,h,{locale:r})}),[h,d,y,x,o,t]);var P={ref:N,onClick:function(e){r.props&&"function"===typeof r.props.onClick&&r.props.onClick(e),e.defaultPrevented||function(e,r,o,n,t,a,i,c){("A"!==e.currentTarget.nodeName||!function(e){var r=e.currentTarget.target;return r&&"_self"!==r||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&l.isLocalURL(o))&&(e.preventDefault(),null==i&&n.indexOf("#")>=0&&(i=!1),r[t?"replace":"push"](o,n,{shallow:a,locale:c,scroll:i}))}(e,t,d,h,v,_,m,x)},onMouseEnter:function(e){l.isLocalURL(d)&&(r.props&&"function"===typeof r.props.onMouseEnter&&r.props.onMouseEnter(e),f(t,d,h,{priority:!0}))}};if(e.passHref||"a"===r.type&&!("href"in r.props)){var E="undefined"!==typeof x?x:t&&t.locale,w=t&&t.isLocaleDomain&&l.getDomainLocale(h,E,t&&t.locales,t&&t.domainLocales);P.href=w||l.addBasePath(l.addLocale(h,E,t&&t.defaultLocale))}return a.default.cloneElement(r,P)};r.default=u},7426:function(e,r,o){"use strict";var n=o(3848);Object.defineProperty(r,"__esModule",{value:!0}),r.useIntersection=function(e){var r=e.rootMargin,o=e.disabled||!l,c=t.useRef(),s=t.useState(!1),f=n(s,2),u=f[0],d=f[1],h=t.useCallback((function(e){c.current&&(c.current(),c.current=void 0),o||u||e&&e.tagName&&(c.current=function(e,r,o){var n=function(e){var r=e.rootMargin||"",o=i.get(r);if(o)return o;var n=new Map,t=new IntersectionObserver((function(e){e.forEach((function(e){var r=n.get(e.target),o=e.isIntersecting||e.intersectionRatio>0;r&&o&&r(o)}))}),e);return i.set(r,o={id:r,observer:t,elements:n}),o}(o),t=n.id,a=n.observer,l=n.elements;return l.set(e,r),a.observe(e),function(){l.delete(e),a.unobserve(e),0===l.size&&(a.disconnect(),i.delete(t))}}(e,(function(e){return e&&d(e)}),{rootMargin:r}))}),[o,r,u]);return t.useEffect((function(){if(!l&&!u){var e=a.requestIdleCallback((function(){return d(!0)}));return function(){return a.cancelIdleCallback(e)}}}),[u]),[h,u]};var t=o(7294),a=o(3447),l="undefined"!==typeof IntersectionObserver;var i=new Map},6753:function(e,r,o){"use strict";o.r(r),o.d(r,{default:function(){return i}});var n=o(5893),t=o(9860),a=o.n(t),l=o(1664);function i(){return(0,n.jsxs)("div",{className:a().container,children:[(0,n.jsxs)("div",{className:"cover-container d-flex w-100 h-100 p-3 mx-auto flex-column",children:[(0,n.jsx)("header",{className:"mb-auto",children:(0,n.jsxs)("div",{children:[(0,n.jsx)("h3",{className:"float-md-start mb-0",children:(0,n.jsx)("i",{children:(0,n.jsx)(l.default,{href:"/portfolio",children:(0,n.jsx)("a",{children:"sj.Kim"})})})}),(0,n.jsxs)("nav",{className:"nav nav-masthead justify-content-center float-md-end",children:[(0,n.jsx)(l.default,{href:"/portfolio/about",children:(0,n.jsx)("a",{className:"nav-link","aria-current":"page",href:"#",children:"About"})}),(0,n.jsx)(l.default,{href:"/portfolio/skill",children:(0,n.jsx)("a",{className:"nav-link","aria-current":"page",href:"#",children:"Experience & Skill"})}),(0,n.jsx)(l.default,{href:"/portfolio/contact",children:(0,n.jsx)("a",{className:"nav-link","aria-current":"page",href:"#",children:"Contact"})})]})]})}),(0,n.jsxs)("main",{className:a().main,children:[(0,n.jsx)("div",{className:"p-5 mb-4 bg-light rounded-3",children:(0,n.jsx)("p",{children:"\uc800\ub294 Java & Spring Framework \uae30\ubc18\uc758 \uc6f9 \uc11c\ube44\uc2a4\ub97c \uac1c\ubc1c \ubc0f \uc6b4\uc601\ud558\uc600\uc73c\uba70, \uc11c\ube44\uc2a4\uac04 \uc5f0\ub3d9 \uc5c5\ubb34, \ubc31\uc624\ud53c\uc2a4 \uac1c\ubc1c, UI/UX\ub97c \uace0\ub824\ud55c \ud654\uba74 \uac1c\ubc1c\uc744 \uc9c4\ud589\ud558\uc600\uc2b5\ub2c8\ub2e4. \uadf8\ubc16\uc5d0 \uc2dc\uc2a4\ud15c \ubc30\ud3ec \uc790\ub3d9\ud654 \ubc0f \uc720\uae30\uc801\uc778 \ud504\ub85c\uc81d\ud2b8\uc758 \uad00\ub9ac\ub97c \uc704\ud574 CI/CD \uad6c\ucd95\uc744 \uc9c4\ud589\ud558\uc600\uc2b5\ub2c8\ub2e4."})}),(0,n.jsxs)("div",{className:"row align-items-md-stretch",children:[(0,n.jsx)("div",{className:"col-md-6",children:'"\ub204\uad6c\ub098 \uc228 \uc26c\ub4ef \uc0ac\uc6a9\ud560 \uc218 \uc788\ub294 \uc11c\ube44\uc2a4\ub97c \ub9cc\ub4e4\uc790!" \ub204\uad6c\ub098 \uc27d\uac8c, \uc548\uc2ec\ud558\uace0 \uc0ac\uc6a9\ud560 \uc218 \uc788\ub294 \uc11c\ube44\uc2a4\ub97c \ub9cc\ub4dc\ub294 \uac83\uc774 \uc800\uc758 \ubaa9\ud45c\uc785\ub2c8\ub2e4.'}),(0,n.jsx)("div",{className:"col-md-6",children:'"\uc9c0\uad6c\uc0c1\uc758 \ubaa8\ub4e0 \uac83\uc740 \uc11c\ube44\uc2a4\ud654 \ud560 \uc218 \uc788\ub2e4." \uc911\uace0\uac70\ub798, \ub9ac\uc2f8\uc774\ud074\ub9c1, \uc2ec\ubd80\ub984, \uc9c0\ub098\uac00\ub294 \uac1c\ubbf8\ub97c \uc138\ub294\uac83 \uae4c\uc9c0\ub3c4 \ubaa8\ub450 \uac00\uce58\uac00 \uc788\ub294 \uc815\ubcf4\ub77c\uace0 \uc0dd\uac01\ud569\ub2c8\ub2e4. \uc815\ubcf4\uc758 \uac00\uce58\ub97c \ub9cc\ub4e4\uc5b4\ub098\uac00\ub294 \uac1c\ubc1c\uc790\uac00 \ub418\uace0\uc2f6\uc2b5\ub2c8\ub2e4.'})]})]})]}),(0,n.jsx)("footer",{className:a().footer,children:(0,n.jsxs)("span",{children:[(0,n.jsx)("a",{href:"https://67crystalk.tistory.com/",target:"blank",children:"\ud83d\udcbbBlog"}),(0,n.jsx)("p",{children:"\u270967crystalk@gmail.com"})]})})]})}},9513:function(e,r,o){(window.__NEXT_P=window.__NEXT_P||[]).push(["/portfolio/about",function(){return o(6753)}])},9860:function(e){e.exports={goal:"Portfolio_goal__2Ymrz",showGoal:"Portfolio_showGoal__3qLSb",ball:"Portfolio_ball__3K6E1",moveBall:"Portfolio_moveBall__1UkFu",container:"Portfolio_container__23Ckl",main:"Portfolio_main__1go2g",footer:"Portfolio_footer__2gNp2",title:"Portfolio_title__PaEkP",description:"Portfolio_description__bMlGi",code:"Portfolio_code__3cRak",grid:"Portfolio_grid__1UxTo",card:"Portfolio_card__1J4RT",logo:"Portfolio_logo__3-Fkm"}},1664:function(e,r,o){e.exports=o(2167)}},function(e){e.O(0,[774,888,179],(function(){return r=9513,e(e.s=r);var r}));var r=e.O();_N_E=r}]);