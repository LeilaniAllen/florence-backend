(this.webpackJsonpflorence=this.webpackJsonpflorence||[]).push([[0],{101:function(e,t,c){},103:function(e,t,c){},104:function(e,t,c){},105:function(e,t,c){},128:function(e,t,c){},129:function(e,t,c){},133:function(e,t,c){"use strict";c.r(t);var n=c(0),a=c.n(n),r=c(10),i=c.n(r),o=(c(99),c(12)),s=c.n(o),l=c(21),d=c(16),j=c(39),u=c(82),O=c(172),b=c(163),f=c(160),p=c(174),x=c(171),m=c(175),h=c(77),_=c.n(h),v=c(78),S=c.n(v),E=c(79),g=c.n(E),T=c(80),C=c.n(T),N=(c(101),c.p+"static/media/About Florence.1e02f1e5.png"),P=c(2);var y=function(){return Object(P.jsx)("div",{className:"About",children:Object(P.jsx)("img",{className:"about florence",src:N,alt:"Florence the invetory of the electic fridge."})})},R=(c(103),c(104),c.p+"static/media/Home Page.dde287f3.png");var A=function(){return Object(P.jsx)("div",{className:"Home",children:Object(P.jsx)("img",{className:"about florence",src:R,alt:"Florence the invetory of the electric fridge."})})},D=c(157),w=(c(105),Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).REACT_APP_API_ENDPOINT||window.location.origin);var I=function(){return Object(P.jsxs)("div",{className:"LogIn",children:[Object(P.jsx)(D.a,{className:"btn",variant:"contained",color:"primary",href:"".concat(w,"/login"),children:"Login"}),Object(P.jsx)(D.a,{className:"btn",variant:"contained",color:"secondary",href:"".concat(w,"/register"),children:"Register"})]})},F=c(19),H=c.n(F),K=(c(128),c(164)),L=c(167),W=c(165),k=c(76),B=c.n(k),U=c(166),V=c(168),M=c(169),q=c(173),z=(c(129),c(74)),J=c.n(z),G=c(159),Q=c(161),X=c(162),Y=c(73),Z=c.n(Y),$=c(75),ee=c.n($),te=Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).REACT_APP_API_ENDPOINT||window.location.origin,ce=Object(G.a)((function(e){return{appBar:{position:"relative"},title:{marginLeft:e.spacing(2),flex:1}}}));function ne(e){var t=ce(),c=Object(n.useState)([]),a=Object(d.a)(c,2),r=a[0],i=a[1],o=Object(n.useState)([]),j=Object(d.a)(o,2),u=j[0],O=j[1],p=function(){var e=Object(l.a)(s.a.mark((function e(t){var c;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,H.a.post("".concat(te,"/item/").concat(t,"/decrease_count"));case 2:c=e.sent,console.log(c),m();case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),x=function(){var e=Object(l.a)(s.a.mark((function e(t){var c;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,H.a.delete("".concat(te,"/item/").concat(t));case 2:c=e.sent,console.log(c),m();case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();function m(){return h.apply(this,arguments)}function h(){return(h=Object(l.a)(s.a.mark((function t(){var c;return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,H.a.get("".concat(te,"/fridge/").concat(e.fridgeId,"/items"));case 2:c=t.sent,i(c.data.filter((function(t){return t.product_id===e.selectedProduct})));case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}return Object(n.useEffect)((function(){function e(){return(e=Object(l.a)(s.a.mark((function e(){var t;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,H.a.get("".concat(te,"/product"));case 2:t=e.sent,O(t.data);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]),Object(n.useEffect)((function(){m()}),[u,e.fridgeId,e.selectedProduct]),Object(P.jsxs)("div",{children:[Object(P.jsx)(f.a,{className:t.appBar,color:"secondary",children:Object(P.jsxs)(Q.a,{children:[Object(P.jsx)(X.a,{edge:"start",color:"inherit",onClick:e.handleClose,"aria-label":"close",children:Object(P.jsx)(Z.a,{})}),Object(P.jsx)(b.a,{variant:"h6",className:t.title,children:"Items"})]})}),Object(P.jsx)("div",{className:"itemContainer",children:r.map((function(e){var t=u.find((function(t){return t.id===e.product_id}));return console.log(t),Object(P.jsxs)(K.a,{className:"item",children:[Object(P.jsxs)(W.a,{children:[Object(P.jsx)(b.a,{color:"textSecondary",gutterBottom:!0,children:t.name}),Object(P.jsx)(b.a,{color:"textSecondary",gutterBottom:!0,children:e.count}),Object(P.jsx)(U.a,{className:"product-image",image:t.image,title:t.name})]}),Object(P.jsxs)(L.a,{children:[Object(P.jsx)(V.a,{onClick:function(){p(e.id)},color:"primary","aria-label":"add",size:"small",children:Object(P.jsx)(J.a,{})}),Object(P.jsx)(V.a,{onClick:function(){x(e.id)},color:"primary","aria-label":"add",size:"small",children:Object(P.jsx)(ee.a,{})})]})]})}))})]})}var ae=Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).REACT_APP_API_ENDPOINT||window.location.origin,re=Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).REACT_APP_TEST_USER||window.userId,ie=a.a.forwardRef((function(e,t){return Object(P.jsx)(M.a,Object(j.a)({direction:"up",ref:t},e))}));var oe=function(){var e=Object(n.useState)([]),t=Object(d.a)(e,2),c=t[0],r=t[1],i=Object(n.useState)(),o=Object(d.a)(i,2),j=o[0],u=o[1],O=Object(n.useState)(),f=Object(d.a)(O,2),p=f[0],x=f[1],m=Object(n.useState)([]),h=Object(d.a)(m,2),_=h[0],v=h[1],S=a.a.useState(!1),E=Object(d.a)(S,2),g=E[0],T=E[1],C=function(){T(!1),x()};return Object(n.useEffect)((function(){function e(){return(e=Object(l.a)(s.a.mark((function e(){var t,c;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,H.a.get("".concat(ae,"/customer/").concat(re));case 2:return t=e.sent,u(t.data),e.next=6,H.a.get("".concat(ae,"/product"));case 6:c=e.sent,v(c.data);case 8:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]),Object(n.useEffect)((function(){function e(){return(e=Object(l.a)(s.a.mark((function e(){var t,c;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,H.a.get("".concat(ae,"/fridge/").concat(j.fridge_id,"/items"));case 2:t=e.sent,c={},t.data.map((function(e){return c[e.product_id]?c[e.product_id].quantity+=e.count:c[e.product_id]={quantity:e.count,item:e},e})),r(Object.values(c));case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}j&&0!==_.length&&function(){e.apply(this,arguments)}()}),[j,_]),Object(P.jsxs)("div",{className:"MyFridge",children:[Object(P.jsxs)("div",{className:"btnParent",children:[Object(P.jsx)(D.a,{className:"btn",variant:"contained",color:"primary",children:"Expiring Soon"}),Object(P.jsx)(D.a,{className:"btn",variant:"contained",color:"primary",children:"Dairy"}),Object(P.jsx)(D.a,{className:"btn",variant:"contained",color:"primary",children:"Meat"}),Object(P.jsx)(D.a,{className:"btn",variant:"contained",color:"primary",children:"Fruit"}),Object(P.jsx)(D.a,{className:"btn",variant:"contained",color:"primary",children:"Veggies"}),Object(P.jsx)(D.a,{className:"btn",variant:"contained",color:"primary",children:"Drinks"})]}),Object(P.jsx)("div",{className:"itemParent",children:c.map((function(e){var t=_.find((function(t){return t.id===e.item.product_id}));return t?Object(P.jsxs)(K.a,{className:"item",children:[Object(P.jsxs)(W.a,{children:[Object(P.jsx)(b.a,{color:"textSecondary",gutterBottom:!0,children:t.name}),Object(P.jsx)(b.a,{color:"textSecondary",gutterBottom:!0,children:e.quantity}),Object(P.jsx)(U.a,{className:"product-image",image:t.image,title:t.name})]}),Object(P.jsx)(L.a,{children:Object(P.jsx)(D.a,{size:"small",onClick:function(){T(!0),x(t.id)},children:"show item"})})]}):Object(P.jsx)(P.Fragment,{})}))}),Object(P.jsx)("div",{className:"addItem",children:Object(P.jsx)(V.a,{color:"primary","aria-label":"add",children:Object(P.jsx)(B.a,{})})}),j&&Object(P.jsx)(q.a,{fullScreen:!0,open:g,onClose:C,TransitionComponent:ie,children:Object(P.jsx)(ne,{handleClose:C,fridgeId:j.fridge_id,selectedProduct:p})})]})},se=c(81),le=c(170),de=Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).REACT_APP_TEST_USER||window.userId,je=Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).REACT_APP_API_ENDPOINT||window.location.origin,ue=Object(se.a)({palette:{primary:{main:"#FAC4C4"},secondary:{main:"#22783E"}}});function Oe(e){var t=e.children,c=e.value,n=e.index,a=Object(u.a)(e,["children","value","index"]);return Object(P.jsx)("div",Object(j.a)(Object(j.a)({role:"tabpanel",hidden:c!==n,id:"simple-tabpanel-".concat(n),"aria-labelledby":"simple-tab-".concat(n)},a),{},{children:c===n&&Object(P.jsx)(O.a,{p:3,children:Object(P.jsx)(b.a,{children:t})})}))}var be=function(){var e=a.a.useState(0),t=Object(d.a)(e,2),c=t[0],r=t[1],i=Object(n.useState)(),o=Object(d.a)(i,2),j=o[0],u=o[1];return Object(n.useEffect)((function(){function e(){return(e=Object(l.a)(s.a.mark((function e(){var t;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,H.a.get("".concat(je,"/customer/").concat(de));case 2:t=e.sent,u(t.data);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}de&&function(){e.apply(this,arguments)}()}),[]),Object(P.jsx)(le.a,{theme:ue,children:Object(P.jsxs)("div",{className:"App container",children:[Object(P.jsxs)(f.a,{position:"sticky",color:"default",children:[Object(P.jsxs)(p.a,{value:c,onChange:function(e,t){r(t)},variant:"scrollable",scrollButtons:"on",indicatorColor:"secondary",textColor:"primary","aria-label":"scrollable force tabs example",children:[Object(P.jsx)(x.a,{label:"Home",icon:Object(P.jsx)(_.a,{})}),Object(P.jsx)(x.a,{label:"My Fridge",icon:Object(P.jsx)(S.a,{})}),Object(P.jsx)(x.a,{label:"About",icon:Object(P.jsx)(g.a,{})}),Object(P.jsx)(x.a,{label:"Log In",icon:Object(P.jsx)(C.a,{})})]}),j&&Object(P.jsx)(m.a,{className:"avatar",alt:j.user_name,src:j.picture})]}),Object(P.jsx)(Oe,{value:c,index:0,children:Object(P.jsx)(A,{})}),Object(P.jsx)(Oe,{value:c,index:1,children:Object(P.jsx)(oe,{})}),Object(P.jsx)(Oe,{value:c,index:2,children:Object(P.jsx)(y,{})}),Object(P.jsx)(Oe,{value:c,index:3,children:Object(P.jsx)(I,{})})]})})},fe=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,177)).then((function(t){var c=t.getCLS,n=t.getFID,a=t.getFCP,r=t.getLCP,i=t.getTTFB;c(e),n(e),a(e),r(e),i(e)}))};i.a.render(Object(P.jsx)(a.a.StrictMode,{children:Object(P.jsx)(be,{})}),document.getElementById("root")),fe()},99:function(e,t,c){}},[[133,1,2]]]);
//# sourceMappingURL=main.b479805f.chunk.js.map