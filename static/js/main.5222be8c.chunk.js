(this["webpackJsonpmb-auth"]=this["webpackJsonpmb-auth"]||[]).push([[0],{103:function(e,t,n){},104:function(e,t,n){},250:function(e,t,n){"use strict";n.r(t);var c=n(8),r=n.n(c),a=n(93),i=n.n(a),s=(n(103),n(104),n(0)),u=n.n(s),o=n(2),l=n(25),b=n(94),j=n(3),d=function(e){var t=e.clientID,n=new b.a(t,null,"http://moneybutton.com"),r=Object(c.useState)(""),a=Object(l.a)(r,2),i=a[0],s=a[1],d=Object(c.useState)("waiting balance..."),h=Object(l.a)(d,2),O=h[0],f=h[1],p=Object(c.useState)("waiting profile..."),x=Object(l.a)(p,2),v=x[0],m=x[1],g=Object(c.useState)("waiting avatarUrl..."),w=Object(l.a)(g,2),y=w[0],S=w[1];return Object(c.useEffect)((function(){function e(){return(e=Object(o.a)(u.a.mark((function e(){var t,c,r,a,i,o,l,b,j,d;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.getIdentity();case 2:return t=e.sent,c=t.name,r=t.id,e.next=7,n.getBalance(r);case 7:return a=e.sent,i=a.amount,o=a.currency,l=a.satoshis,e.next=13,n.getUserProfile(r);case 13:b=e.sent,j=b.bio,d=b.avatarUrl,s(c),f("".concat(i," ").concat(o," (").concat(l,")")),m(j),S(d);case 20:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]),Object(j.jsxs)("div",{children:[Object(j.jsx)("h2",{children:"Web side client flow"}),Object(j.jsxs)("div",{children:["Start Oauth flow",Object(j.jsx)("button",{onClick:function(){return n.requestAuthorization("auth.user_identity:read users.profiles:read users.profiles.email:read users.balance:read","http://moneybutton.com/oauth-redirect-web")},children:"Click me!"})]}),Object(j.jsxs)("div",{children:["Your name is: ",i]}),Object(j.jsxs)("div",{children:["Your balance is: ",O]}),Object(j.jsxs)("div",{children:["Your bio is: ",v]}),Object(j.jsxs)("div",{children:["Your avatarUrl is: ",y]}),Object(j.jsx)("div",{children:Object(j.jsx)("button",{onClick:function(){return n.logOut()},children:"Log out"})})]})};var h=function(){return Object(j.jsx)("div",{className:"App",children:Object(j.jsx)("header",{className:"App-header",children:Object(j.jsx)(d,{})})})},O=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,251)).then((function(t){var n=t.getCLS,c=t.getFID,r=t.getFCP,a=t.getLCP,i=t.getTTFB;n(e),c(e),r(e),a(e),i(e)}))};i.a.render(Object(j.jsx)(r.a.StrictMode,{children:Object(j.jsx)(h,{})}),document.getElementById("root")),O()}},[[250,1,2]]]);
//# sourceMappingURL=main.5222be8c.chunk.js.map