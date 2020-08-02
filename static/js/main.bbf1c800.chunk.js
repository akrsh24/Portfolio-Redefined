(this["webpackJsonpportfolio-redefined"]=this["webpackJsonpportfolio-redefined"]||[]).push([[0],{59:function(e,t,a){e.exports=a(73)},64:function(e,t,a){},70:function(e,t,a){},72:function(e,t,a){},73:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(9),l=a.n(o),i=(a(64),a(6));var c=Object(i.f)((function(e){return Object(n.useEffect)((function(){return e.history.push("/portfolio/")})),r.a.createElement("div",null)}));var m=function(){return r.a.createElement("div",null,r.a.createElement("h1",null,"About"))};var s=function(){return r.a.createElement("div",null,r.a.createElement("h1",null,"Contact"))};var u=function(){return r.a.createElement("div",null,r.a.createElement("h1",null,"Certifications"))};var p=function(){return r.a.createElement("div",null,r.a.createElement("h1",null,"Resume"))},f=a(8),E=(a(70),a(48)),h=a.n(E),v=a(49),d=a.n(v),b=a(50),g=a.n(b),k=a(95),x=a(52),w=Object(x.a)({breakpoints:{values:{xs:0,sm:321.01,md:426.01,lg:769.01,xl:1025.01,xxl:1441.01}}}),y=[{name:"Home",link:"/portfolio/"},{name:"About",link:"/portfolio/about"},{name:"Resume",link:"/portfolio/resume"},{name:"Certifications",link:"/portfolio/certifications"},{name:"Contact",link:"/portfolio/contact"}],j=Object(k.a)((function(){var e;return{socialLinks:(e={color:"white"},Object(f.a)(e,w.breakpoints.only("xs"),{fontSize:20}),Object(f.a)(e,w.breakpoints.only("sm"),{fontSize:25}),Object(f.a)(e,w.breakpoints.only("md"),{fontSize:30}),Object(f.a)(e,w.breakpoints.only("lg"),{fontSize:35,marginRight:"35px"}),Object(f.a)(e,w.breakpoints.only("xl"),{fontSize:35,marginRight:"35px"}),Object(f.a)(e,w.breakpoints.only("xxl"),{fontSize:35,marginRight:"35px"}),e)}}));var N=function(){var e=j();return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"home-container"},r.a.createElement("div",{className:"home-section"},r.a.createElement("div",{className:"home-name-title"},r.a.createElement("p",{style:{marginBottom:0}},"Akarsh Srivastava")),r.a.createElement("div",{className:"home-description"},r.a.createElement("p",null,"I'm a passionate Frontend Engineer")),r.a.createElement("div",{className:"home-social"},r.a.createElement("div",null,r.a.createElement("a",{href:"https://github.com/akrsh24",target:"_blank",rel:"noopener noreferrer"},r.a.createElement(h.a,{className:e.socialLinks}))),r.a.createElement("div",null,r.a.createElement("a",{href:"https://www.linkedin.com/in/akarsh-srivastava-409263105/",target:"_blank",rel:"noopener noreferrer"},r.a.createElement(d.a,{className:e.socialLinks}))),r.a.createElement("div",null,r.a.createElement("a",{href:"https://twitter.com/akrsh24",target:"_blank",rel:"noopener noreferrer"},r.a.createElement(g.a,{className:e.socialLinks})))))))};var O=function(){return r.a.createElement("div",null,r.a.createElement(i.c,null,r.a.createElement(i.a,{exact:!0,path:"/",component:c}),r.a.createElement(i.a,{exact:!0,path:"/portfolio/",component:N}),r.a.createElement(i.a,{exact:!0,path:"/portfolio/about",component:m}),r.a.createElement(i.a,{exact:!0,path:"/portfolio/contact",component:s}),r.a.createElement(i.a,{exact:!0,path:"/portfolio/certifications",component:u}),r.a.createElement(i.a,{exact:!0,path:"/portfolio/resume",component:p})))},S=a(20),B=a(98),L=a(99),C=a(100),z=a(101),I=a(102),R=a(51),F=a.n(R),A=a(96),D=a(103),_=a(97),G=a(104),J=a(23),P=Object(k.a)((function(){return{listItem:{textDecoration:"none",color:"white",fontFamily:"Bangers",fontSize:"16px"},activeListItem:{borderBottom:"2px solid white "}}})),W=r.a.forwardRef((function(e,t){return r.a.createElement(A.a,Object.assign({direction:"down",ref:t},e))})),H=function(e){var t=function(){e.toggleDialog(!1)},a=Object(n.useRef)();Object(n.useEffect)((function(){return a.current&&a.current.focus()}));var o=P();return r.a.createElement("div",{ref:a},r.a.createElement(D.a,{onClose:t,open:e.open,PaperProps:{style:{backgroundColor:"rgba(0, 0, 0, 0.5)",boxShadow:"none",width:"90%",height:"50%"}},TransitionComponent:W},r.a.createElement(_.a,null,y.map((function(e){return r.a.createElement(G.a,{button:!0,key:e.name},r.a.createElement(J.b,{exact:!0,to:e.link,className:o.listItem,activeClassName:o.activeListItem,onClick:t},e.name))})))))},M=Object(k.a)((function(){return{root:{flexGrow:1},appBar:{background:"#000000"},menuButton:{marginLeft:w.spacing(2)},title:{flexGrow:1,fontFamily:"Bangers",fontSize:"24px"},appBarListStyle:{marginRight:w.spacing(2),fontFamily:"Bangers",fontSize:"16px"},navLinkStyle:{textDecoration:"none",color:"white"},activeListItem:{borderBottom:"2px solid white "}}}));var T=function(){var e=Object(n.useState)(!1),t=Object(S.a)(e,2),a=t[0],o=t[1],l=Object(B.a)(w.breakpoints.down("lg")),i=M();return r.a.createElement("div",{className:i.root},r.a.createElement(L.a,{position:"static",className:i.appBar},r.a.createElement(C.a,null,r.a.createElement(z.a,{className:i.title},"Akarsh Srivastava"),l?r.a.createElement(I.a,{edge:"end",className:i.menuButton,color:"inherit","aria-label":"menu",onClick:function(){o(!0)}},r.a.createElement(F.a,null)):y.map((function(e){return r.a.createElement(z.a,{key:e.name,className:i.appBarListStyle},r.a.createElement(J.b,{exact:!0,to:e.link,className:i.navLinkStyle,activeClassName:i.activeListItem},e.name))})))),a&&r.a.createElement(H,{open:a,toggleDialog:o}))};a(72);var $=function(){return r.a.createElement(J.a,null,r.a.createElement("div",null,r.a.createElement(T,null),r.a.createElement("div",{className:"app-container"},r.a.createElement(O,null))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement($,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[59,1,2]]]);
//# sourceMappingURL=main.bbf1c800.chunk.js.map