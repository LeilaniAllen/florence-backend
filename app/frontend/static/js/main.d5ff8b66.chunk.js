(this.webpackJsonpflorence=this.webpackJsonpflorence||[]).push([[0],{104:function(e,t,n){"use strict";n.r(t);var c=n(0),a=n.n(c),i=n(16),r=n.n(i),s=(n(71),n(19)),o=n(42),d=n(62),j=n(126),l=n(122),u=n(129),b=n(127),O=n(124),f=n(57),x=n.n(f),p=n(58),m=n.n(p),h=n(59),v=n.n(h),g=n(60),_=n.n(g),S=(n(72),n.p+"static/media/About Florence.1e02f1e5.png"),y=n(2);var C=function(){return Object(y.jsx)("div",{className:"About",children:Object(y.jsx)("img",{className:"about florence",src:S,alt:"Florence the invetory of the electic fridge."})})},E=(n(74),n(75),n.p+"static/media/Home Page.dde287f3.png");var F=function(){return Object(y.jsx)("div",{className:"Home",children:Object(y.jsx)("img",{className:"about florence",src:E,alt:"Florence the invetory of the electic fridge."})})};n(76);var N=function(){return Object(y.jsx)("div",{className:"LogIn",children:"Log in"})},T=n(23),w=n.n(T),A=n(40),P=n(36),I=n.n(P),L=(n(96),Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).REACT_APP_API_ENDPOINT||window.location.origin),D=window.userId;var H=function(){var e=Object(c.useState)([]),t=Object(s.a)(e,2),n=t[0],a=t[1],i=Object(c.useState)(),r=Object(s.a)(i,2),o=r[0],d=r[1],j=Object(c.useState)([]),l=Object(s.a)(j,2),u=l[0],b=l[1];return Object(c.useEffect)((function(){function e(){return(e=Object(A.a)(w.a.mark((function e(){var t,n;return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,I.a.get("".concat(L,"/customer/").concat(D));case 2:return t=e.sent,d(t.data),e.next=6,I.a.get("".concat(L,"/product"));case 6:n=e.sent,b(n.data);case 8:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]),Object(c.useEffect)((function(){function e(){return(e=Object(A.a)(w.a.mark((function e(){var t;return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,I.a.get("".concat(L,"/fridge/").concat(o.fridge_id,"/items"));case 2:t=e.sent,a(t.data);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}o&&function(){e.apply(this,arguments)}()}),[o]),Object(y.jsxs)("div",{className:"MyFridge",children:[o&&Object(y.jsxs)("div",{children:["id: ",o.id,"user_name: ",o.user_name,"fridge: ",o.fridge_id,Object(y.jsx)("img",{src:o.picture,alt:o.user_name})]}),Object(y.jsxs)("div",{children:["items:",n.map((function(e){var t=u.find((function(t){return t.id===e.product_id}));return Object(y.jsxs)(y.Fragment,{children:["id: ",e.id,"fridge_id: ",e.fridge_id,"product_id: ",e.product_id,"count: ",e.count,"product name: ",t.name,Object(y.jsx)("img",{src:t.image,alt:t.name})]})}))]})]})},R=n(61),k=n(123),B=Object(R.a)({palette:{primary:{main:"#FAC4C4"},secondary:{main:"#22783E"}}});function K(e){var t=e.children,n=e.value,c=e.index,a=Object(d.a)(e,["children","value","index"]);return Object(y.jsx)("div",Object(o.a)(Object(o.a)({role:"tabpanel",hidden:n!==c,id:"simple-tabpanel-".concat(c),"aria-labelledby":"simple-tab-".concat(c)},a),{},{children:n===c&&Object(y.jsx)(j.a,{p:3,children:Object(y.jsx)(l.a,{children:t})})}))}var M=function(){var e=a.a.useState(0),t=Object(s.a)(e,2),n=t[0],c=t[1];return Object(y.jsx)(k.a,{theme:B,children:Object(y.jsxs)("div",{className:"App container",children:[Object(y.jsx)(u.a,{position:"static",color:"default",children:Object(y.jsxs)(b.a,{value:n,onChange:function(e,t){c(t)},variant:"scrollable",scrollButtons:"on",indicatorColor:"secondary",textColor:"primary","aria-label":"scrollable force tabs example",children:[Object(y.jsx)(O.a,{label:"Home",icon:Object(y.jsx)(x.a,{})}),Object(y.jsx)(O.a,{label:"My Fridge",icon:Object(y.jsx)(m.a,{})}),Object(y.jsx)(O.a,{label:"About",icon:Object(y.jsx)(v.a,{})}),Object(y.jsx)(O.a,{label:"Log In",icon:Object(y.jsx)(_.a,{})})]})}),Object(y.jsx)(K,{value:n,index:0,children:Object(y.jsx)(F,{})}),Object(y.jsx)(K,{value:n,index:1,children:Object(y.jsx)(H,{})}),Object(y.jsx)(K,{value:n,index:2,children:Object(y.jsx)(C,{})}),Object(y.jsx)(K,{value:n,index:3,children:Object(y.jsx)(N,{})})]})})},W=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,130)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,i=t.getLCP,r=t.getTTFB;n(e),c(e),a(e),i(e),r(e)}))};r.a.render(Object(y.jsx)(a.a.StrictMode,{children:Object(y.jsx)(M,{})}),document.getElementById("root")),W()},71:function(e,t,n){},72:function(e,t,n){},74:function(e,t,n){},75:function(e,t,n){},76:function(e,t,n){},96:function(e,t,n){}},[[104,1,2]]]);
//# sourceMappingURL=main.d5ff8b66.chunk.js.map