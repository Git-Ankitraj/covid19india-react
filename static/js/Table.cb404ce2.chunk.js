(this.webpackJsonpcovid19india=this.webpackJsonpcovid19india||[]).push([[22],{159:function(e,t,n){"use strict";var a=n(7),r=n(99),i=function(){};t.a=function(e,t,n){if(!r.a)return[t,i,i];if(!e)throw new Error("useLocalStorage key may not be falsy");var c=n?n.raw?function(e){return e}:n.deserializer:JSON.parse,o=Object(a.useState)((function(){try{var a=n?n.raw?String:n.serializer:JSON.stringify,r=localStorage.getItem(e);return null!==r?c(r):(t&&localStorage.setItem(e,a(t)),t)}catch(o){return t}})),s=o[0],l=o[1],u=Object(a.useCallback)((function(t){try{var a="function"===typeof t?t(s):t;if("undefined"===typeof a)return;var r=void 0;r=n?n.raw?"string"===typeof a?a:JSON.stringify(a):n.serializer?n.serializer(a):JSON.stringify(a):JSON.stringify(a),localStorage.setItem(e,r),l(c(r))}catch(o){}}),[e,l]),m=Object(a.useCallback)((function(){try{localStorage.removeItem(e),l(void 0)}catch(o){}}),[e,l]);return[s,u,m]}},298:function(e,t,n){"use strict";n.r(t);var a=n(89),r=n(26),i=n(17),c=n(24),o=n(112),s=n(98),l=n.n(s),u=n(102),m=n.n(u),d=n(103),f=n(7),g=n.n(f),b=n(333),v=n(132),O=n(101),h=n(96),j=n(299),y=n(159),p=Object(f.lazy)((function(){return n.e(19).then(n.bind(null,265))})),E=Object(j.a)({S:768});var C=g.a.memo((function(e){var t=e.handleSort,n=e.sortData,a=e.statistic,i=E(),s=Object(b.a)().t;return g.a.createElement("div",{className:"cell heading",onClick:function(){return t(a)}},n.sortColumn===a&&g.a.createElement("div",{className:l()("sort-icon",{invert:n.isAscending})},g.a.createElement(o.b,{size:10})),g.a.createElement("div",{className:l()(Object(r.a)({},"is-".concat(a),"S"===i)),title:Object(c.a)(a)},"S"===i?Object(c.a)(a.slice(0,1)):s(Object(c.a)(a))))}),(function(e,t){return!!m()(e.sortData,t.sortData)}));var N=g.a.memo((function(){var e=Object(b.a)().t;return g.a.createElement(g.a.Fragment,null,g.a.createElement("h5",{className:"text"},e("Compiled from State Govt. numbers"),","," ",g.a.createElement(O.b,{to:"/about",style:{color:"#6c757d"}},e("know more"),"!")))}));t.default=g.a.memo((function(e){var t=e.data,n=e.regionHighlighted,r=e.setRegionHighlighted,s=Object(b.a)().t,u=Object(y.a)("sortData",{sortColumn:"confirmed",isAscending:!1}),m=Object(a.a)(u,2),O=m[0],j=m[1],E=Object(f.useCallback)((function(e){j(Object(d.a)(O,(function(t){t.isAscending=!O.isAscending,t.sortColumn=e})))}),[O,j]),S=Object(f.useCallback)((function(e,n){if("stateName"!==O.sortColumn){var a=Object(c.j)(t[e],"total",O.sortColumn),r=Object(c.j)(t[n],"total",O.sortColumn);return O.isAscending?a-r:r-a}return O.isAscending?e.localeCompare(n):n.localeCompare(e)}),[O,t]),w=Object(h.e)(2,(function(){return{transform:"translate3d(0, 10px, 0)",opacity:0,config:h.b.wobbly}})),k=Object(a.a)(w,2),T=k[0];(0,k[1])({transform:"translate3d(0, 0px, 0)",opacity:1});var H=Object(f.useRef)(),z=Object(v.useIsVisible)(H);return g.a.createElement(g.a.Fragment,null,g.a.createElement(h.a.div,{className:"fineprint",style:T[0]},g.a.createElement(N,null)),g.a.createElement(h.a.div,{className:"table",style:T[1]},g.a.createElement("div",{className:"row heading"},g.a.createElement("div",{className:"cell heading",onClick:function(){return E("stateName")}},g.a.createElement("div",null,s("State/UT")),"stateName"===O.sortColumn&&g.a.createElement("div",{className:l()("sort-icon",{invert:!O.isAscending})},g.a.createElement(o.b,{size:10}))),i.n.map((function(e){return g.a.createElement(C,Object.assign({key:e},{statistic:e,sortData:O},{handleSort:function(){E(e)}}))}))),Object.keys(t).filter((function(e){var n;return"TT"!==e&&(null===(n=t[e].total)||void 0===n?void 0:n.confirmed)})).sort((function(e,t){return S(e,t)})).slice(0,z?Object.keys(t).length-1:10).map((function(e){return g.a.createElement(p,Object.assign({key:e,data:t[e]},{stateCode:e,regionHighlighted:n,setRegionHighlighted:r}))})),!z&&g.a.createElement("span",{className:"intersection",ref:H}),g.a.createElement(p,Object.assign({key:"TT",data:t.TT,stateCode:"TT"},{regionHighlighted:n,setRegionHighlighted:r}))))}),(function(e,t){return!!m()(e.regionHighlighted.districtName,t.regionHighlighted.districtName)&&(!!m()(e.regionHighlighted.stateCode,t.regionHighlighted.stateCode)&&!!m()(e.data.TT.total.confirmed,t.data.TT.total.confirmed))}))},299:function(e,t,n){"use strict";var a=n(7);t.a=function(e){return void 0===e&&(e={laptopL:1440,laptop:1024,tablet:768}),function(){var t=Object(a.useState)(0),n=t[0],r=t[1];Object(a.useEffect)((function(){var e=function(){r(window.innerWidth)};return e(),window.addEventListener("resize",e),function(){window.removeEventListener("resize",e)}}));var i=Object(a.useMemo)((function(){return Object.entries(e).sort((function(e,t){return e[1]>=t[1]?1:-1}))}),[e]);return i.reduce((function(e,t){var a=t[0],r=t[1];return n>=r?a:e}),i[0][0])}}}}]);
//# sourceMappingURL=Table.cb404ce2.chunk.js.map