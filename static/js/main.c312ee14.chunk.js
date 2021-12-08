(this.webpackJsonpmovies=this.webpackJsonpmovies||[]).push([[0],{30:function(n,e,t){"use strict";t.r(e);var r,a,c,i,o,s,u,d,p,b,h,m,x,f,j,l=t(1),g=t.n(l),v=t(16),O=t.n(v),w=t(2),y=t(3),k=Object(y.a)(r||(r=Object(w.a)(["\n  :root {\n    --maxWidth: 1280px; \n    --white: #fff;\n    --lightGrey: #eee;\n    --medGrey: #353535; \n    --darkGrey: #1c1c1c;\n    --fontSuperBig: 2.5rem;\n    --fontBig: 1.5rem;\n    --fontMed: 1.2rem;\n    --fontSmall: 1rem;\n  }\n\n  * {\n    box-sizing: border-box;\n    font-family: 'Abel', sans-serif;  \n  }\n\n  body {  \n    margin: 0;\n    padding: 0;\n    box-sizing: border-box;\n\n    h1 {\n      font-size: 2rem;\n      font-weight: 600;\n      color: var(--white);\n    }\n\n    h3 {\n      font-size: 1.1rem;\n      font-weight: 600;\n    }\n\n    p {\n      font-size: 1rem;\n      color: var(--white);\n    }\n  }\n"]))),_=y.b.div(a||(a=Object(w.a)(["\n\nbackground: var(--darkGrey);\npadding: 0 20px;\n\n"]))),S=y.b.div(c||(c=Object(w.a)(["\n\ndisplay: flex;\nalign-items: center;\njustify-content: space-between;\nmax-width: var(--maxWidth);\npadding: 20px 0;\nmargin: 0 auto;\n"]))),z=y.b.img(i||(i=Object(w.a)(["\n\nwidth: 100px;\n\n@media screen and (max-width: 500px) {\n\n    width: 80px;\n}\n\n"]))),T=y.b.img(o||(o=Object(w.a)(["\n\nwidth: 200px;\n\n@media screen and (max-width: 500px) {\n    width: 150px;\n}\n\n"]))),G=t.p+"static/media/react-movie-logo.42955eb6.svg",M=t.p+"static/media/tmdb_logo.f15b6632.svg",B=t(0),q=function(){return Object(B.jsx)(B.Fragment,{children:Object(B.jsx)(_,{children:Object(B.jsxs)(S,{children:[Object(B.jsx)(z,{src:M}),Object(B.jsx)(T,{src:G})]})})})},J=t(5),W=t(4),E=t.n(W),H=t(6),I="https://api.themoviedb.org/3/",N="c2eb28ba3a5605ba2debd9fa356e6bb2",C="".concat(I,"search/movie?api_key=").concat(N,"&language=en-US&query="),F="".concat(I,"movie/popular?api_key=").concat(N,"&language=en-US"),R="".concat(I,"authentication/token/new?api_key=").concat(N),A="".concat(I,"authentication/token/validate_with_login?api_key=").concat(N),P="".concat(I,"authentication/session/new?api_key=").concat(N),U="http://image.tmdb.org/t/p/",L={method:"POST",headers:{"Content-Type":"application/json"}},Y={fetchMovies:function(){var n=Object(H.a)(E.a.mark((function n(e,t){var r;return E.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r=e?"".concat(C).concat(e,"&page=").concat(t):"".concat(F,"&page=").concat(t),n.next=3,fetch(r);case 3:return n.next=5,n.sent.json();case 5:return n.abrupt("return",n.sent);case 6:case"end":return n.stop()}}),n)})));return function(e,t){return n.apply(this,arguments)}}(),fetchMovie:function(){var n=Object(H.a)(E.a.mark((function n(e){var t;return E.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t="".concat(I,"movie/").concat(e,"?api_key=").concat(N),n.next=3,fetch(t);case 3:return n.next=5,n.sent.json();case 5:return n.abrupt("return",n.sent);case 6:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),fetchCredits:function(){var n=Object(H.a)(E.a.mark((function n(e){var t;return E.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t="".concat(I,"movie/").concat(e,"/credits?api_key=").concat(N),n.next=3,fetch(t);case 3:return n.next=5,n.sent.json();case 5:return n.abrupt("return",n.sent);case 6:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),getRequestToken:function(){var n=Object(H.a)(E.a.mark((function n(){var e;return E.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,fetch(R);case 2:return n.next=4,n.sent.json();case 4:return e=n.sent,n.abrupt("return",e.request_token);case 6:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),authenticate:function(){var n=Object(H.a)(E.a.mark((function n(e,t,r){var a,c;return E.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return a={username:t,password:r,request_token:e},n.next=3,fetch(A,Object(J.a)(Object(J.a)({},L),{},{body:JSON.stringify(a)}));case 3:return n.next=5,n.sent.json();case 5:if(!n.sent.success){n.next=13;break}return n.next=9,fetch(P,Object(J.a)(Object(J.a)({},L),{},{body:JSON.stringify({request_token:e})}));case 9:return n.next=11,n.sent.json();case 11:return c=n.sent,n.abrupt("return",c);case 13:case"end":return n.stop()}}),n)})));return function(e,t,r){return n.apply(this,arguments)}}(),rateMovie:function(){var n=Object(H.a)(E.a.mark((function n(e,t,r){var a,c;return E.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return a="".concat(I,"movie/").concat(t,"/rating?api_key=").concat(N,"&session_id=").concat(e),n.next=3,fetch(a,Object(J.a)(Object(J.a)({},L),{},{body:JSON.stringify({value:r})}));case 3:return n.next=5,n.sent.json();case 5:return c=n.sent,n.abrupt("return",c);case 7:case"end":return n.stop()}}),n)})));return function(e,t,r){return n.apply(this,arguments)}}()},D=Y,K=y.b.div(s||(s=Object(w.a)(["\n  background: ",";\n  background-size: 100%, cover;\n  background-position: center;\n  height: 600px;\n  position: relative;\n  animation: animateHeroimage 1s;\n\n  @keyframes animateHeroimage {\n    from {\n      opacity: 0;\n    }\n    to {\n      opacity: 1;\n    }\n  }\n"])),(function(n){return"linear-gradient(\n      to bottom, rgba(0,0,0,0)\n      39%,rgba(0,0,0,0)\n      41%,rgba(0,0,0,0.65)\n      100%\n    ),\n    url('".concat(n.image,"'), var(--darkGrey)")})),Q=y.b.div(u||(u=Object(w.a)(["\n  padding: 20px;\n  max-width: var(--maxWidth);\n  margin: 0 auto;\n"]))),V=y.b.div(d||(d=Object(w.a)(["\n  z-index: 100;\n  max-width: 700px;\n  position: absolute;\n  bottom: 40px;\n  margin-right: 20px;\n  min-height: 100px;\n  color: var(--white);\n\n  h1 {\n    font-size: var(--fontSuperBig);\n\n    @media screen and (max-width: 720px) {\n      font-size: var(--fontBig);\n    }\n  }\n\n  p {\n    font-size: var(--fontMed);\n  \n    @media screen and (max-width: 720px) {\n      font-size: var(--fontSmall);\n    }\n  }\n\n  @media screen and (max-width: 720px) {\n    max-width: 100%;\n  }\n"]))),X=function(n){var e=n.image,t=n.title,r=n.text;return Object(B.jsx)(K,{image:e,children:Object(B.jsx)(Q,{children:Object(B.jsxs)(V,{children:[Object(B.jsx)("h1",{children:t}),Object(B.jsx)("p",{children:r})]})})})},Z=y.b.div(p||(p=Object(w.a)(["\n  max-width: var(--maxWidth);\n  margin: 0 auto;\n  padding: 0 20px;\n\n  h1 {\n    color: var(--medGrey);\n  }\n\n  h1 {\n    @media screen and (max-width: 768px) {\n      font-size: var(--fontBig);\n    }\n  }\n"]))),$=y.b.div(b||(b=Object(w.a)(["\n\ndisplay: grid;\ngrid-template-columns: repeat(auto-fill, minmax(200px, 1fr));\ngrid-gap: 2rem;\n\n@media screen and (max-width: 500px) {\n  grid-template-columns: repeat(auto-fill, minmax(170px, 1fr));\n}\n\n"]))),nn=function(n){var e=n.header,t=n.children;return Object(B.jsxs)(Z,{children:[Object(B.jsx)("h1",{children:e}),Object(B.jsx)($,{children:t})]})},en=y.b.div(h||(h=Object(w.a)(["\nbackground-color: lightgrey;\nborder-radius: 20px;\n"]))),tn=y.b.img(m||(m=Object(w.a)(["\nwidth: 100%;\nheight: 100%;\nmax-width: 720px;\nmin-width: 100px;\ntransition: all 0.3s;\nobject-fit: cover;\nborder-radius: 20px;\nanimation: animateThumb 0.5s;\nbackground-color: var(--darkGrey);\n\n\n@keyframes animateThumb {\n    \n    from{\n        opacity: 0;\n    }\n\n    to{\n        opacity: 1;\n    }\n\n\n}\n\n:hover {\n    opacity: 0.8;\n}\n\n"]))),rn=function(n){var e=n.image;n.movieId,n.clickable;return Object(B.jsx)(en,{children:Object(B.jsx)(tn,{src:e,alt:"movie thumb"})})},an=y.b.div(x||(x=Object(w.a)(["\nborder: 5px solid var(--lightGrey);\nborder-top: 5px solid var(--medGrey);\nborder-radius: 50%;\nwidth: 50px;\nheight: 50px;\nanimation: spin 0.8s linear infinite;\nmargin: 20px auto;\n\n@keyframes spin {\n    from{\n        transform: rotate(0deg);\n    }\n\n    to{\n        transform: rotate(360deg);\n    }\n}\n"]))),cn=function(){return Object(B.jsx)(B.Fragment,{children:Object(B.jsx)(an,{})})},on=t(8),sn=t(7),un=t.p+"static/media/search-icon.cd820f5a.svg",dn=y.b.div(f||(f=Object(w.a)(["\n  display: flex;\n  align-items: center;\n  height: 100px;\n  background: var(--darkGrey);\n  padding: 0 20px;\n"]))),pn=y.b.div(j||(j=Object(w.a)(["\n  position: relative;\n  max-width: var(--maxWidth);\n  width: 100%;\n  height: 55px;\n  background: var(--medGrey);\n  margin: 0 auto;\n  border-radius: 40px;\n  color: var(--white);\n\n  img {\n    position: absolute;\n    left: 15px;\n    top: 14px;\n    width: 30px;\n  }\n\n  input {\n    font-size: 28px;\n    position: absolute;\n    left: 0px;\n    margin: 8px 0;\n    padding: 0 0 0 60px;\n    border: 0;\n    width: 95%;\n    background: transparent;\n    height: 40px;\n    color: var(--white);\n\n    :focus {\n      outline: none;\n    }\n\n    @media screen and (max-width: 720px) {\n      font-size: 28px;\n    }\n  }\n"]))),bn=function(n){var e,t=n.setSearchTerm,r=Object(l.useState)(""),a=Object(sn.a)(r,2),c=a[0],i=a[1],o=Object(l.useRef)(!0);return Object(l.useEffect)((function(){if(!o.current){var n=setTimeout((function(){t(c)}),500);return function(){return clearTimeout(n)}}o.current=!1}),[t,c]),Object(B.jsx)(dn,{children:Object(B.jsxs)(pn,{children:[Object(B.jsx)("img",{src:un,alt:"search-icon"}),Object(B.jsx)("input",(e={type:"text",placeholder:"Look up a movie"},Object(on.a)(e,"type","text"),Object(on.a)(e,"onChange",(function(n){return i(n.currentTarget.value)})),Object(on.a)(e,"value",c),e))]})})},hn=t(11),mn={page:0,results:[],total_pages:0,total_results:0},xn=function(){var n=Object(l.useState)(""),e=Object(sn.a)(n,2),t=e[0],r=e[1],a=Object(l.useState)(mn),c=Object(sn.a)(a,2),i=c[0],o=c[1],s=Object(l.useState)(!1),u=Object(sn.a)(s,2),d=u[0],p=u[1],b=Object(l.useState)(!1),h=Object(sn.a)(b,2),m=h[0],x=h[1],f=Object(l.useState)(!1),j=Object(sn.a)(f,2),g=j[0],v=j[1],O=function(){var n=Object(H.a)(E.a.mark((function n(e,t){var r;return E.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,p(!0),x(!1),n.next=5,D.fetchMovies(t,e);case 5:r=n.sent,o((function(n){return Object(J.a)(Object(J.a)({},r),{},{results:e>1?[].concat(Object(hn.a)(n.results),Object(hn.a)(r.results)):Object(hn.a)(r.results)})})),n.next=12;break;case 9:n.prev=9,n.t0=n.catch(0),x(!0);case 12:p(!1);case 13:case"end":return n.stop()}}),n,null,[[0,9]])})));return function(e,t){return n.apply(this,arguments)}}();return setInterval((function(){window.innerHeight+window.scrollY>=document.body.offsetHeight&&v(!0)}),1e3),Object(l.useEffect)((function(){g&&(O(i.page+1),v(!1))}),[g]),Object(l.useEffect)((function(){O(1,t)}),[t]),console.log(i),{state:i,loading:d,error:m,searchTerm:t,setSearchTerm:r}},fn=t.p+"static/media/no_image.22d2aa4d.jpg",jn=function(){var n=xn(),e=n.state,t=(n.loading,n.error,n.searchTerm),r=n.setSearchTerm;return Object(B.jsxs)(B.Fragment,{children:[e.results[0]&&!t?Object(B.jsx)(X,{image:"".concat(U).concat("w1280").concat(e.results[0].backdrop_path),title:e.results[0].original_title,text:e.results[0].overview}):null,Object(B.jsx)(bn,{setSearchTerm:r}),Object(B.jsx)(nn,{header:t?"Results":"Popular Movies",children:e.results.map((function(n){return Object(B.jsx)(rn,{clickable:!0,image:n.poster_path?U+"w780"+n.poster_path:fn,movieId:n.id},n.id)}))}),Object(B.jsx)(cn,{})]})};var ln=function(){return Object(B.jsxs)("div",{className:"App",children:[Object(B.jsx)(q,{}),Object(B.jsx)(jn,{}),Object(B.jsx)(k,{})]})};O.a.render(Object(B.jsx)(g.a.StrictMode,{children:Object(B.jsx)(ln,{})}),document.getElementById("root"))}},[[30,1,2]]]);
//# sourceMappingURL=main.c312ee14.chunk.js.map