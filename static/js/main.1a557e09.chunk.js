(this["webpackJsonpgoit-react-hw-08-phonebook"]=this["webpackJsonpgoit-react-hw-08-phonebook"]||[]).push([[0],{17:function(e,t,n){e.exports={section:"RegisterView_section__3r40c",form:"RegisterView_form__cGEeG",label:"RegisterView_label__2AJDD",input:"RegisterView_input__kU_ht"}},20:function(e,t,n){e.exports={section:"LoginView_section__Ebl44",form:"LoginView_form__zWgL9",label:"LoginView_label__2eR04",input:"LoginView_input__3h9PW"}},23:function(e,t,n){e.exports={form:"InputForm_form__2gJal",label:"InputForm_label__1M2OK",input:"InputForm_input__3Iche"}},26:function(e,t,n){e.exports={link:"Navigation_link__NhKI8",activeLink:"Navigation_activeLink__2-CEH Navigation_link__NhKI8"}},27:function(e,t,n){e.exports={link:"AuthNavigation_link__2vC2U",activeLink:"AuthNavigation_activeLink__27DeG AuthNavigation_link__2vC2U"}},28:function(e,t,n){e.exports={section:"ContactList_section__kfFQu",list:"ContactList_list__1vNNB"}},39:function(e,t,n){e.exports={container:"UserMenu_container__3yUl7",name:"UserMenu_name__1N0_a"}},40:function(e,t,n){e.exports={label:"Filter_label__PoUCW",input:"Filter_input__242XA"}},51:function(e,t,n){e.exports={container:"Container_container__hvJLA"}},53:function(e,t,n){e.exports={header:"AppBar_header__2-sSf"}},54:function(e,t,n){e.exports={header:"HomeView_header__2_HNu"}},55:function(e,t,n){e.exports={name:"ContactListItem_name__1WTrf"}},56:function(e,t,n){e.exports={section:"PhoneBook_section__wBLuL"}},86:function(e,t,n){},90:function(e,t,n){e.exports={app:"App_app__2gNMb"}},91:function(e,t,n){"use strict";n.r(t);var a=n(1),c=n.n(a),r=n(31),s=n.n(r),o=n(15),i=n(2),u=n(49),l=n(34),b=n(4),j=n(18),d=n(50),h=n.n(d),p=n(8),O=n(13),f=n.n(O),m=n(19),x=n(14),v=n.n(x);v.a.defaults.baseURL="https://connections-api.herokuapp.com";var g,_,k=function(e){v.a.defaults.headers.common.Authorization="Bearer ".concat(e)},N=function(e){v.a.defaults.headers.common.Authorization=""},w=Object(b.c)("auth/register",function(){var e=Object(m.a)(f.a.mark((function e(t){var n,a;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,v.a.post("/users/signup",t);case 3:return n=e.sent,a=n.data,k(a.token),e.abrupt("return",a);case 9:e.prev=9,e.t0=e.catch(0),console.log("\u041e\u0448\u0438\u0431\u043a\u0430 \u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u0438:",e.t0);case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(t){return e.apply(this,arguments)}}()),C=Object(b.c)("auth/login",function(){var e=Object(m.a)(f.a.mark((function e(t){var n,a;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,v.a.post("/users/login",t);case 3:return n=e.sent,a=n.data,k(a.token),e.abrupt("return",a);case 9:e.prev=9,e.t0=e.catch(0),console.log(e.t0);case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(t){return e.apply(this,arguments)}}()),L=Object(b.c)("auth/logout",Object(m.a)(f.a.mark((function e(){return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,v.a.post("/users/logout");case 3:N(),e.next=9;break;case 6:e.prev=6,e.t0=e.catch(0),console.log(e.t0);case 9:case"end":return e.stop()}}),e,null,[[0,6]])})))),y=Object(b.c)("auth/refresh",function(){var e=Object(m.a)(f.a.mark((function e(t,n){var a,c,r,s;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(a=n.getState(),null!==(c=a.auth.token)){e.next=4;break}return e.abrupt("return",n.rejectWithValue());case 4:return k(c),e.prev=5,e.next=8,v.a.get("/users/current");case 8:return r=e.sent,s=r.data,e.abrupt("return",s);case 13:e.prev=13,e.t0=e.catch(5),console.log(e.t0);case 16:case"end":return e.stop()}}),e,null,[[5,13]])})));return function(t,n){return e.apply(this,arguments)}}()),A=Object(b.e)({name:"auth",initialState:{user:{name:null,email:null},token:null,isLoggedIn:!1,isFetchingCurrentUser:!1},extraReducers:(g={},Object(p.a)(g,w.fulfilled,(function(e,t){e.user=t.payload.user,e.token=t.payload.token,e.isLoggedIn=!0})),Object(p.a)(g,C.fulfilled,(function(e,t){e.user=t.payload.user,e.token=t.payload.token,e.isLoggedIn=!0})),Object(p.a)(g,L.fulfilled,(function(e){e.user={name:null,email:null},e.token=null,e.isLoggedIn=!1})),Object(p.a)(g,y.pending,(function(e){e.isFetchingCurrentUser=!0})),Object(p.a)(g,y.fulfilled,(function(e,t){e.user=t.payload,e.isLoggedIn=!0,e.isFetchingCurrentUser=!1})),Object(p.a)(g,y.rejected,(function(e,t){e.isFetchingCurrentUser=!1})),g)}).reducer,S=n(6),I=Object(b.b)("contacts/fetchContactsRequest"),R=Object(b.b)("contacts/fetchContactsSucccess"),F=Object(b.b)("contacts/fetchContactsError"),U=Object(b.b)("contacts/addContactRequest"),E=Object(b.b)("contacts/addContactSuccess",(function(e){return{payload:{name:e.name,number:e.number,id:e.id}}})),V=Object(b.b)("contacts/addContactError"),z=Object(b.b)("contacts/deleteContactRequest"),B=Object(b.b)("contacts/deleteContactSuccess"),D=Object(b.b)("contacts/deleteContactError"),M=Object(b.b)("contacts/filter"),P=Object(b.d)([],(_={},Object(p.a)(_,R,(function(e,t){return t.payload})),Object(p.a)(_,E,(function(e,t){var n=t.payload;return[].concat(Object(l.a)(e),[n])})),Object(p.a)(_,B,(function(e,t){var n=t.payload;return e.filter((function(e){return e.id!==n}))})),_)),T=Object(b.d)("",Object(p.a)({},M,(function(e,t){return t.payload.toLowerCase()}))),J=Object(S.b)({items:P,filter:T}),W=Object(l.a)(Object(b.f)({serializableCheck:{ignoredActions:[j.a,j.f,j.b,j.c,j.d,j.e]}})),q={key:"auth",storage:h.a,whitelist:["token"]},G=Object(b.a)({reducer:{contacts:J,auth:Object(j.g)(q,A)},middleware:W,devTools:!1}),H=Object(j.h)(G),K=(n(86),n(5)),Z=n(51),Q=n.n(Z),X=n(0);function $(e){var t=e.children;return Object(X.jsx)("div",{className:Q.a.container,children:t})}var Y=function(e){return e.auth.isLoggedIn},ee=function(e){return e.auth.user.name},te=function(e){return e.auth.isFetchingCurrentUser},ne=n(26),ae=n.n(ne);function ce(){var e=Object(i.c)(Y);return Object(X.jsxs)("nav",{children:[Object(X.jsx)(o.b,{exact:!0,to:"/goit-react-hw-08-phonebook/",className:ae.a.link,activeClassName:ae.a.activeLink,children:"Home"}),e&&Object(X.jsx)(o.b,{to:"/goit-react-hw-08-phonebook/phonebook",className:ae.a.link,activeClassName:ae.a.activeLink,children:"PhoneBook"})]})}var re=n(27),se=n.n(re);function oe(){return Object(X.jsxs)("div",{children:[Object(X.jsx)(o.b,{to:"/goit-react-hw-08-phonebook/registration",className:se.a.link,activeClassName:se.a.activeLink,children:"Registration"}),Object(X.jsx)(o.b,{to:"/goit-react-hw-08-phonebook/login",className:se.a.link,activeClassName:se.a.activeLink,children:"Login"})]})}var ie=n(39),ue=n.n(ie);function le(){var e=Object(i.c)(ee),t=Object(i.b)();return Object(X.jsxs)("div",{className:ue.a.container,children:[Object(X.jsxs)("span",{className:ue.a.name,children:[" Welcome, ",e]}),Object(X.jsx)("button",{type:"button",onClick:function(e){e.preventDefault(),t(L())},children:"Logout"})]})}var be=n(53),je=n.n(be);function de(){var e=Object(i.c)(Y);return Object(X.jsxs)("header",{className:je.a.header,children:[Object(X.jsx)(ce,{}),e?Object(X.jsx)(le,{}):Object(X.jsx)(oe,{})]})}var he=n(54),pe=n.n(he);function Oe(){return Object(X.jsx)("div",{className:pe.a.header,children:Object(X.jsx)("h1",{children:"\u0414\u043e\u0431\u0440\u043e \u043f\u043e\u0436\u0430\u043b\u043e\u0432\u0430\u0442\u044c \u043d\u0430 \u0441\u0442\u0440\u0430\u043d\u0438\u0446\u0443 \u0412\u0430\u0448\u0435\u0439 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u043d\u043e\u0439 \u043a\u043d\u0438\u0433\u0438!"})})}function fe(e){var t=e.title,n=e.children;return Object(X.jsxs)("div",{className:"section",children:[t&&Object(X.jsx)("h2",{children:t}),n]})}var me=n(16),xe=n(92),ve=function(e){return e.contacts.items},ge=function(e){return e.contacts.filter},_e=n(23),ke=n.n(_e);function Ne(){var e=Object(a.useState)(""),t=Object(me.a)(e,2),n=t[0],c=t[1],r=Object(a.useState)(""),s=Object(me.a)(r,2),o=s[0],u=s[1],l=Object(i.c)(ve),b=Object(i.b)(),j=function(e){var t=e.target,n=t.name,a=t.value;switch(n){case"name":c(a);break;case"number":u(a)}};return Object(X.jsxs)("form",{onSubmit:function(e){e.preventDefault();var t,a=n.toLowerCase(),c=l.find((function(e){return e.name.toLowerCase()===a}));c?alert(n+"is already in contacts."):(b((t={name:n,number:o},function(e){e(U()),v.a.post("/contacts",{name:t.name,number:t.number,id:Object(xe.a)()}).then((function(t){var n=t.data;return e(E(n))})).catch((function(t){return e(V(t))}))})),e.target.reset())},className:ke.a.form,children:[Object(X.jsxs)("label",{className:ke.a.label,children:["Name",Object(X.jsx)("input",{className:ke.a.input,onChange:j,type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0})]}),Object(X.jsxs)("label",{className:ke.a.label,children:["Number",Object(X.jsx)("input",{className:ke.a.input,onChange:j,type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043a\u0440\u0443\u0433\u043b\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",required:!0})]}),Object(X.jsx)("button",{type:"submit",children:"Add contact"})]})}var we=n(55),Ce=n.n(we);function Le(e){var t=e.contact,n=Object(i.b)();return Object(X.jsxs)(X.Fragment,{children:[Object(X.jsxs)("span",{className:Ce.a.name,children:[t.name," ",t.number]}),Object(X.jsx)("button",{type:"button",id:t.id,onClick:function(e){return n((t=e.target.id,function(e){e(z()),v.a.delete("/contacts/".concat(t)).then((function(){return e(B(t))})).catch((function(t){return e(D(t))}))}));var t},children:"Delete"})]})}var ye=n(28),Ae=n.n(ye);function Se(e){var t=e.children,n=Object(i.c)(ve),c=Object(i.c)(ge),r=Object(i.b)();return Object(a.useEffect)((function(){r(function(){var e=Object(m.a)(f.a.mark((function e(t){var n,a;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t(I()),e.prev=1,e.next=4,v.a.get("/contacts");case 4:n=e.sent,a=n.data,t(R(a)),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(1),t(F(e.t0));case 12:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(t){return e.apply(this,arguments)}}())}),[r]),Object(X.jsxs)("section",{className:Ae.a.section,children:[Object(X.jsx)("h2",{children:"Contacts"}),t,Object(X.jsx)("ul",{className:Ae.a.list,children:c?n.filter((function(e){return e.name.toLowerCase().includes(c)})).map((function(e){return Object(X.jsx)("li",{className:Ae.a.item,children:Object(X.jsx)(Le,{contact:e})},e.id)})):n.map((function(e){return Object(X.jsx)("li",{className:Ae.a.item,children:Object(X.jsx)(Le,{contact:e})},Object(xe.a)())}))})]})}var Ie=n(40),Re=n.n(Ie);function Fe(){var e=Object(i.b)();return Object(X.jsxs)("label",{className:Re.a.label,children:["Find contacts by name",Object(X.jsx)("input",{className:Re.a.input,type:"text",onChange:function(t){return e(M(t.target.value))}})]})}var Ue=n(56),Ee=n.n(Ue);function Ve(){var e=Object(i.c)(ve);return Object(X.jsx)("div",{className:Ee.a.section,children:Object(X.jsxs)(fe,{title:"Phonebook",children:[Object(X.jsx)(Ne,{}),Object(X.jsx)(Se,{children:e.length>2&&Object(X.jsx)(Fe,{})})]})})}var ze=n(17),Be=n.n(ze);function De(){var e=Object(a.useState)(""),t=Object(me.a)(e,2),n=t[0],c=t[1],r=Object(a.useState)(""),s=Object(me.a)(r,2),o=s[0],u=s[1],l=Object(a.useState)(""),b=Object(me.a)(l,2),j=b[0],d=b[1],h=Object(i.b)(),p=function(e){var t=e.target,n=t.name,a=t.value;switch(n){case"name":return c(a);case"email":return u(a);case"password":return d(a);default:return}};return Object(X.jsxs)("section",{className:Be.a.section,children:[Object(X.jsx)("h1",{children:" REGISTRATION FORM"}),Object(X.jsxs)("form",{className:Be.a.form,onSubmit:function(e){e.preventDefault(),h(w({name:n,email:o,password:j})),c(""),u(""),d(""),e.target.reset()},autoComplete:"off",children:[Object(X.jsxs)("label",{className:Be.a.label,children:["Name",Object(X.jsx)("input",{className:Be.a.input,type:"text",name:"name",onChange:p})]}),Object(X.jsxs)("label",{className:Be.a.label,children:["Email",Object(X.jsx)("input",{className:Be.a.input,type:"email",name:"email",onChange:p})]}),Object(X.jsxs)("label",{className:Be.a.label,children:["Password",Object(X.jsx)("input",{className:Be.a.input,type:"password",name:"password",onChange:p})]}),Object(X.jsx)("button",{type:"submit",children:"Register"})]})]})}var Me=n(20),Pe=n.n(Me);function Te(){var e=Object(a.useState)(""),t=Object(me.a)(e,2),n=t[0],c=t[1],r=Object(a.useState)(""),s=Object(me.a)(r,2),o=s[0],u=s[1],l=Object(i.b)(),b=function(e){var t=e.target,n=t.name,a=t.value;switch(n){case"email":return c(a);case"password":return u(a);default:return}};return Object(X.jsxs)("section",{className:Pe.a.section,children:[Object(X.jsx)("h1",{children:"LOGIN FORM"}),Object(X.jsxs)("form",{className:Pe.a.form,onSubmit:function(e){e.preventDefault(),l(C({email:n,password:o})),c(""),u(""),e.target.reset()},autoComplete:"off",children:[Object(X.jsxs)("label",{className:Pe.a.label,children:["Email",Object(X.jsx)("input",{className:Pe.a.input,type:"email",name:"email",onChange:b})]}),Object(X.jsxs)("label",{className:Pe.a.label,children:["Password",Object(X.jsx)("input",{className:Pe.a.input,type:"password",name:"password",onChange:b})]}),Object(X.jsx)("button",{type:"submit",children:"Login"})]})]})}var Je=n(22),We=n(35),qe=["children"];function Ge(e){var t=e.children,n=Object(We.a)(e,qe),a=Object(i.c)(Y);return Object(X.jsx)(K.b,Object(Je.a)(Object(Je.a)({},n),{},{children:a?t:Object(X.jsx)(K.a,{to:"/goit-react-hw-08-phonebook/login"})}))}var He=["children","restricted","redirectTo"];function Ke(e){var t=e.children,n=e.restricted,a=void 0!==n&&n,c=e.redirectTo,r=void 0===c?"/goit-react-hw-08-phonebook/phonebook":c,s=Object(We.a)(e,He),o=Object(i.c)(Y)&&a;return Object(X.jsx)(K.b,Object(Je.a)(Object(Je.a)({},s),{},{children:o?Object(X.jsx)(K.a,{to:r}):t}))}n(90);function Ze(){var e=Object(i.b)(),t=Object(i.c)(te);return Object(a.useEffect)((function(){e(y())}),[e]),Object(X.jsxs)($,{children:[Object(X.jsx)(de,{}),!t&&Object(X.jsxs)(K.d,{children:[Object(X.jsx)(Ke,{exact:!0,path:"/goit-react-hw-08-phonebook/",children:Object(X.jsx)(Oe,{})}),Object(X.jsx)(Ke,{exact:!0,path:"/goit-react-hw-08-phonebook/registration",restricted:!0,children:Object(X.jsx)(De,{})}),Object(X.jsx)(Ke,{exact:!0,path:"/goit-react-hw-08-phonebook/login",redirectTo:"/goit-react-hw-08-phonebook/phonebook",restricted:!0,children:Object(X.jsx)(Te,{})}),Object(X.jsx)(Ge,{path:"/goit-react-hw-08-phonebook/phonebook",children:Object(X.jsx)(Ve,{})})]})]})}s.a.render(Object(X.jsx)(c.a.StrictMode,{children:Object(X.jsx)(i.a,{store:G,children:Object(X.jsx)(u.a,{loading:null,persistor:H,children:Object(X.jsx)(o.a,{children:Object(X.jsx)(Ze,{})})})})}),document.getElementById("root"))}},[[91,1,2]]]);
//# sourceMappingURL=main.1a557e09.chunk.js.map