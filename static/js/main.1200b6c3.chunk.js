(this.webpackJsonpasukasluvut=this.webpackJsonpasukasluvut||[]).push([[0],{106:function(e,a,t){e.exports={root:"Table_root__3DG3K"}},107:function(e,a,t){},120:function(e,a,t){e.exports=t(237)},237:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),u=t(8),l=t.n(u),i=t(22),s=t.n(i),c=t(39),o=t(97),m=t(98),d=t(109),p=t(108),v=t(68),f=t.n(v),h=t(57),k=t.n(h),g=function(){var e=Object(c.a)(s.a.mark((function e(){var a,t,n;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,a={query:[{code:"Alue",selection:{filter:"all",values:["KU*"]}},{code:"Sukupuoli",selection:{filter:"item",values:["SSS"]}},{code:"Ik\xe4",selection:{filter:"item",values:["SSS"]}}],response:{format:"json"}},e.next=4,k.a.post("https://pxnet2.stat.fi/PXWeb/api/v1/fi/StatFin/vrm/vamuu/statfin_vamuu_pxt_11lj.px",a);case 4:return t=e.sent,n=t.data.data,e.abrupt("return",n);case 9:e.prev=9,e.t0=e.catch(0),console.log("data error"),console.log(e.t0);case 13:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(){return e.apply(this,arguments)}}(),b=function(){var e=Object(c.a)(s.a.mark((function e(){var a,t,n,r,u,l,i,c,o;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,a={query:[{code:"Alue",selection:{filter:"all",values:["KU*"]}},{code:"Tiedot",selection:{filter:"item",values:["vaesto","kokmuutos","kokmuutos_p"]}}],response:{format:"json"}},e.next=4,k.a.post("https://pxnet2.stat.fi/PXWeb/api/v1/fi/StatFin/vrm/vaerak/statfin_vaerak_pxt_11ra.px",a);case 4:return t=e.sent,n=t.data.data,e.next=8,k.a.get("https://pxnet2.stat.fi/PXWeb/api/v1/fi/StatFin/vrm/vaerak/statfin_vaerak_pxt_11ra.px");case 8:for(r=e.sent,u=r.data.variables[0],l={},o=0;o<u.values.length;o++)u.values[o].startsWith("KU")&&(i=u.values[o],c=u.valueTexts[o],l[i]=c);return n.forEach((function(e){var a=l[e.key[0]];e.key.push(a),e.key[1]=Number(e.key[1]),e.values[0]=Number(e.values[0]),e.values[1]=Number(e.values[1]),e.values[2]=Number(e.values[2])})),e.abrupt("return",{data:n,cityNames:l});case 16:e.prev=16,e.t0=e.catch(0),console.log("data error"),console.log(e.t0);case 20:case"end":return e.stop()}}),e,null,[[0,16]])})));return function(){return e.apply(this,arguments)}}(),y=t(36),E=t(280),C=t(283),N=t(284),x=t(279),S=t(282),w=t(274),j=t(288),P=t(278),O=t(289),_=t(281),D=t(286),K=t(290);function A(e,a,t){return a[t]<e[t]?-1:a[t]>e[t]?1:0}var T=[{id:"kaupunki",numeric:!1,disablePadding:!0,label:"Kaupunki"},{id:"asukasluku",numeric:!0,disablePadding:!1,label:"Asukasluku"},{id:"muutos",numeric:!0,disablePadding:!1,label:"Muutos"},{id:"muutosPercent",numeric:!0,disablePadding:!1,label:"Muutos%"}];function Y(e){var a=e.classes,t=e.order,n=e.orderBy,u=e.onRequestSort;return r.a.createElement(w.a,null,r.a.createElement(P.a,null,T.map((function(e){return r.a.createElement(x.a,{key:e.id,align:e.numeric?"right":"left",padding:e.disablePadding?"none":"default",sortDirection:n===e.id&&t},r.a.createElement(O.a,{active:n===e.id,direction:n===e.id?t:"asc",onClick:(l=e.id,function(e){u(e,l)})},e.label,n===e.id?r.a.createElement("span",{className:a.visuallyHidden},"desc"===t?"sorted descending":"sorted ascending"):null));var l}))))}var M=Object(E.a)((function(e){return{root:{width:"75%"},paper:{width:"100%",marginBottom:e.spacing(2)},table:{minWidth:750},visuallyHidden:{border:0,clip:"rect(0 0 0 0)",height:1,margin:-1,overflow:"hidden",padding:0,position:"absolute",top:20,width:1}}}));function W(e){var a=e.data,t=M(),n=r.a.useState("desc"),u=Object(y.a)(n,2),l=u[0],i=u[1],s=r.a.useState("asukasluku"),c=Object(y.a)(s,2),o=c[0],m=c[1],d=r.a.useState(0),p=Object(y.a)(d,2),v=p[0],f=p[1],h=r.a.useState(!1),k=Object(y.a)(h,2),g=k[0],b=k[1],E=r.a.useState(10),w=Object(y.a)(E,2),O=w[0],T=w[1];if(!a.length)return"Loading...";var W=[],q=a[a.length-1].key[1];a.forEach((function(e){var a,t,n,r;if(e.key[1]===q){var u=(a=e.key[2],t=e.values[0],n=e.values[1],r=e.values[2],{kaupunki:a,asukasluku:t,muutos:n,muutosPercent:r});W.push(u)}}));var B=O-Math.min(O,W.length-v*O);return r.a.createElement("div",{className:t.root},r.a.createElement("h3",null,"Kaupungit 2019"),r.a.createElement(_.a,{className:t.paper},r.a.createElement(S.a,null,r.a.createElement(C.a,{className:t.table,"aria-labelledby":"tableTitle",size:g?"small":"medium","aria-label":"enhanced table"},r.a.createElement(Y,{classes:t,order:l,orderBy:o,onRequestSort:function(e,a){i(o===a&&"asc"===l?"desc":"asc"),m(a)},rowCount:W.length}),r.a.createElement(N.a,null,function(e,a){var t=e.map((function(e,a){return[e,a]}));return t.sort((function(e,t){var n=a(e[0],t[0]);return 0!==n?n:e[1]-t[1]})),t.map((function(e){return e[0]}))}(W,function(e,a){return"desc"===e?function(e,t){return A(e,t,a)}:function(e,t){return-A(e,t,a)}}(l,o)).slice(v*O,v*O+O).map((function(e,a){var t="enhanced-table-checkbox-".concat(a);return r.a.createElement(P.a,{key:e.kaupunki,hover:!0},r.a.createElement(x.a,{component:"th",id:t,scope:"row",padding:"none"},e.kaupunki),r.a.createElement(x.a,{align:"right"},e.asukasluku),r.a.createElement(x.a,{align:"right"},e.muutos),r.a.createElement(x.a,{align:"right"},e.muutosPercent))})),B>0&&r.a.createElement(P.a,{style:{height:(g?33:53)*B}},r.a.createElement(x.a,{colSpan:6}))))),r.a.createElement(j.a,{rowsPerPageOptions:[5,10,25],component:"div",count:W.length,rowsPerPage:O,page:v,onChangePage:function(e,a){f(a)},onChangeRowsPerPage:function(e){T(parseInt(e.target.value,10)),f(0)}})),r.a.createElement(D.a,{control:r.a.createElement(K.a,{checked:g,onChange:function(e){b(e.target.checked)}}),label:"Dense padding"}))}var q=t(104),B=t(106),F=t.n(B),I=function(e){var a=e.city,t=e.CityNames,n=e.data,u=e.currentYearData,l=Object(E.a)({table:{width:250},paper:{width:250}})();if(!n.length||!u.length)return"Loading...";u.forEach((function(e){var a=t[e.key[1]];e.key.push(a),e.values[0]=Number(e.values[0])}));var i=a,s=[],c=[];return n.forEach((function(e){var a,t,n,r;if(e.key[2]===i){var u=(a=e.key[2],t=e.values[0],n=e.values[1],r=e.key[1],{kaupunki:a,asukasluku:t,muutos:n,vuosi:r});s.push(u)}})),u.forEach((function(e){var a,t,n;if(e.key[4]===i){var r=(a=e.key[0],t=e.key[4],n=e.values[0],{kuukausi:a,kaupunki:t,asukasluku:n});c.push(r)}})),r.a.createElement("div",{className:F.a.root},r.a.createElement("h3",null,"Viimeiset 30 vuotta"),r.a.createElement(q.a,{data:{labels:s.map((function(e){return e.vuosi})),datasets:[{data:s.map((function(e){return e.asukasluku})),label:"Asukasluku",borderColor:"#0062ff",fill:!0,lineTension:0},{data:s.map((function(e){return e.muutos})),label:"Muutos",borderColor:"rgba(255, 0, 0, 0.5)",fill:!0,lineTension:0}]}}),r.a.createElement("h3",null,"Kuluneen vuoden ennakkotiedot"),r.a.createElement(_.a,{className:l.paper},r.a.createElement(C.a,{className:l.table,"aria-label":"simple table"},r.a.createElement(w.a,null,r.a.createElement(P.a,null,r.a.createElement(x.a,null,"Kuukausi"),r.a.createElement(x.a,null,"Asukasluku"))),r.a.createElement(N.a,null,c.map((function(e){return r.a.createElement(P.a,{key:e.kuukausi,hover:!0},r.a.createElement(x.a,{component:"th",scope:"row"},e.kuukausi),r.a.createElement(x.a,null,e.asukasluku))}))))))},R=t(287),U=t(103),X=t(107),H=t.n(X),J=function(e){var a=e.handleCityChange,t=e.CityNames,n=Object.values(t);return r.a.createElement(R.a,{className:H.a.FormControl},r.a.createElement(U.a,{defaultValue:"",onChange:function(e){return a(e.target.value)}},r.a.createElement("option",{value:""},"Kaikki kaupungit"),n.map((function(e,a){return r.a.createElement("option",{key:a,value:e},e)}))))},L=function(e){Object(d.a)(t,e);var a=Object(p.a)(t);function t(){var e;Object(o.a)(this,t);for(var n=arguments.length,r=new Array(n),u=0;u<n;u++)r[u]=arguments[u];return(e=a.call.apply(a,[this].concat(r))).state={CurrentYearData:{},CityData:{},CityNames:{},City:""},e.handleCityChange=function(a){e.setState({City:a})},e}return Object(m.a)(t,[{key:"componentDidMount",value:function(){var e=Object(c.a)(s.a.mark((function e(){var a,t;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,g();case 2:return a=e.sent,e.next=5,b();case 5:t=e.sent,this.setState({CurrentYearData:a}),this.setState({CityData:t.data}),this.setState({CityNames:t.cityNames});case 9:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state.CurrentYearData,a=this.state.CityData,t=this.state.CityNames,n=this.state.City;return n?r.a.createElement("div",{className:f.a.container},r.a.createElement(J,{CityNames:t,handleCityChange:this.handleCityChange}),r.a.createElement(I,{city:n,CityNames:t,data:a,currentYearData:e})):r.a.createElement("div",{className:f.a.container},r.a.createElement(J,{CityNames:t,handleCityChange:this.handleCityChange}),r.a.createElement(W,{data:a}))}}]),t}(r.a.Component);l.a.render(r.a.createElement(L,null),document.getElementById("root"))},68:function(e,a,t){e.exports={container:"App_container__2AYaZ"}}},[[120,1,2]]]);
//# sourceMappingURL=main.1200b6c3.chunk.js.map