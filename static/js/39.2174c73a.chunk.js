(this.webpackJsonpcovid19india=this.webpackJsonpcovid19india||[]).push([[39],{250:function(t,e,n){"use strict";n.r(e);var a=n(20),r=n(82),c=n(6),i=n(32),s=n(85),o=n.n(s),u=n(181),l=n(129),b=n(207),d=n(121),j=n(252),f=n(128),O=n(234),h=n(251),v=n(265),m=n(204),p=n(236),g=(n(101),n(59)),x=n(75),k=n(83),y=n.n(k),N=n(1),D=n(46),w=n.n(D),E=n(154),H=0,M=35,C=20,A=25;function J(t){var e=t.timeseries,n=t.dates,s=t.brushDomain,k=t.endDate,y=t.setBrushEnd,D=t.setLookback,J=Object(N.useRef)(),R=Object(E.a)(),T=Object(r.a)(R,2),U=T[0],Y=T[1],B=Y.width,I=Y.height,L=Object(N.useMemo)((function(){var t=n.length,e=B-M;return Object(j.a)().clamp(!0).domain([Object(i.k)(n[0]||k),Object(i.k)(n[t-1]||k)]).range([A,e])}),[B,k,n]);Object(N.useEffect)((function(){if(B&&I){var t=I-C,a=Object(v.a)().keys(c.b).value((function(t,n){return Math.max(0,Object(i.h)(e[t],"total",n))}))(n),s=Object(f.a)().clamp(!0).domain([0,Object(u.a)(a[a.length-1],(function(t){return 1.2*Object(r.a)(t,2)[1]}))]).range([t,H]),o=Object(O.a)(J.current),b=o.transition().duration(c.c);o.select(".x-axis").attr("pointer-events","none").style("transform","translateY(".concat(t,"px)")).transition(b).call((function(t){return t.attr("class","x-axis").call(Object(l.a)(L).ticks(function(t){return t<480?4:6}(B)))}));var j=Object(m.a)().curve(p.a).x((function(t){return L(Object(i.k)(t.data))})).y0((function(t){return s(t[0])})).y1((function(t){return s(t[1])}));o.selectAll(".trend-area").data(a).join((function(t){return t.append("path").attr("class","trend-area").attr("fill",(function(t){var e=t.key;return c.u[e].color+"99"})).attr("stroke","none").attr("d",j).attr("pointer-events","none")}),(function(t){return t.transition(b).attrTween("d",(function(t){var e=Object(O.a)(this).attr("d"),n=j(t);return Object(d.interpolatePath)(e,n)})).selection()}))}}),[n,B,I,L,e]);var P=s.map((function(t){return L(Object(i.k)(t))})),_=Object(N.useCallback)((function(t){var e=t.sourceEvent,n=t.selection;if(e){var a=n.map(L.invert),c=Object(r.a)(a,2),i=c[0],s=c[1];w.a.unstable_batchedUpdates((function(){y(Object(g.a)(s,{representation:"date"})),D(Object(x.a)(s,i))}))}}),[L,y,D]);return Object(N.useEffect)((function(){if(B&&I){var t=Object(O.a)(J.current),e=B-M,n=I-C,a=Object(b.b)().extent([[A,H],[e,n]]).on("start brush",_).on("end",(function(t){var e=t.sourceEvent,n=t.selection;if(e&&n){var r=n.map(L.invert).map((function(t){return Object(g.a)(t,{representation:"date"})}));Object(O.a)(this).call(a.move,r.map((function(t){return L(Object(i.k)(t))}))).call((function(t){return t.select(".overlay").attr("cursor","pointer")}))}}));t.select(".brush").call(a).call(a.move,P).call((function(t){return t.select(".overlay").attr("cursor","pointer").datum({type:"selection"}).on("mousedown touchstart",c)}))}function c(t){var e=Object(b.a)(this.parentNode);if(e){var n=e[1]-e[0],c=Object(h.a)(t),i=Object(r.a)(c,1),s=Object(r.a)(i[0],1)[0],o=s-n/2,u=s+n/2,l=L.range(),d=Object(r.a)(l,2),j=d[0],f=d[1];Object(O.a)(this.parentNode).call(a.move,u>f?[f-n,f]:o<j?[j,j+n]:[o,u])}}}),[B,I,L,P,_]),Object(a.jsx)("div",{className:"Timeseries",children:Object(a.jsx)("div",{className:o()("svg-parent fadeInUp is-brush"),ref:U,children:Object(a.jsxs)("svg",{ref:J,preserveAspectRatio:"xMidYMid meet",children:[Object(a.jsx)("g",{className:"brush"}),Object(a.jsx)("g",{className:"x-axis"})]})})})}var R=function(t,e){return!!y()(e.brushDomain,t.brushDomain)&&(!!y()(e.regionHighlighted.stateCode,t.regionHighlighted.stateCode)&&(!!y()(e.regionHighlighted.districtName,t.regionHighlighted.districtName)&&(!!y()(e.endDate,t.endDate)&&!!y()(e.dates,t.dates))))};e.default=Object(N.memo)(J,R)}}]);
//# sourceMappingURL=39.2174c73a.chunk.js.map