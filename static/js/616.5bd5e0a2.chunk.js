"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[616],{616:function(n,e,r){r.r(e),r.d(e,{default:function(){return P}});var t,c,a,i,o,s,u,l=r(439),p=r(791),d=r(689),h=r(168),v=r(444),f=r(87),x=(0,v.ZP)(f.rU)(t||(t=(0,h.Z)(["\n  display: block;\n  padding: 8px 16px;\n  margin-bottom: 16px;\n  border-radius: 4px;\n  text-decoration: none;\n  color: black;\n  font-weight: 500;\n  color: white;\n  background-color: orangered;\n"]))),g=v.ZP.div(c||(c=(0,h.Z)(["\n  display: flex;\n  flex-direction: column;\n"]))),m=v.ZP.img(a||(a=(0,h.Z)(["\n  width: 300px;\n"]))),w=v.ZP.div(i||(i=(0,h.Z)(["\n  display: block;\n  margin-right: 48px;\n"]))),j=v.ZP.div(o||(o=(0,h.Z)(["\n  display: flex;\n"]))),k=v.ZP.ul(s||(s=(0,h.Z)(["\n  list-style-type: none;\n"]))),Z=(0,v.ZP)(f.rU)(u||(u=(0,h.Z)(["\n  display: block;\n  font-weight: 700;\n  text-decoration: none;\n"]))),b=r(184),y=function(n){var e=n.movie,r=e.original_title,t=e.overview,c=e.vote_average,a=e.release_date,i=e.genres,o=e.poster_path,s=n.back;return(0,b.jsxs)(g,{children:[(0,b.jsxs)(j,{children:[(0,b.jsxs)(w,{children:[(0,b.jsx)(x,{to:s,children:"back"}),(0,b.jsx)(m,{src:o?"https://image.tmdb.org/t/p/w500".concat(o):"https://img.lovepik.com/free-png/20211201/lovepik-hand-painted-popcorn-cola-and-3d-glasses-png-image_401247856_wh1200.png",alt:""})]}),(0,b.jsxs)("div",{children:[(0,b.jsxs)("h2",{children:[r," ( ",a,")"]}),(0,b.jsxs)("p",{children:["User scrore: ",c,"%"]}),(0,b.jsx)("h3",{children:"Overview"})," ",(0,b.jsx)("p",{children:t}),(0,b.jsx)("h3",{children:"Genres:"}),(0,b.jsx)("p",{children:null===i||void 0===i?void 0:i.map((function(n){return n.name})).join(", ")})]})]}),(0,b.jsxs)("div",{children:[(0,b.jsxs)(k,{children:[(0,b.jsx)("h3",{children:"Addiional information"}),(0,b.jsx)("li",{children:(0,b.jsx)(Z,{to:"cast",children:" Cast"})}),(0,b.jsx)("li",{children:(0,b.jsx)(Z,{to:"review",children:" Review"})})]}),(0,b.jsx)(p.Suspense,{fallback:(0,b.jsx)("div",{children:"Loading..."}),children:(0,b.jsx)(d.j3,{})})]})]})},_=r(437),P=function(){var n,e,r,t=(0,p.useState)([]),c=(0,l.Z)(t,2),a=c[0],i=c[1],o=(0,d.UO)().id,s=(0,d.TH)(),u=(0,p.useRef)(null!==(n=null!==(e=null===(r=s.state)||void 0===r?void 0:r.from)&&void 0!==e?e:"/")&&void 0!==n?n:"/movies");return(0,p.useEffect)((function(){(0,_.Pn)(o).then((function(n){i(n.data)}))}),[o]),a?(0,b.jsx)("div",{children:(0,b.jsx)(y,{movie:a,back:u.current})}):(0,b.jsx)("div",{children:"Loading..."})}},437:function(n,e,r){r.d(e,{Cp:function(){return u},IQ:function(){return d},Jh:function(){return h},Pn:function(){return p},z1:function(){return l}});var t=r(861),c=r(757),a=r.n(c),i=r(243),o="https://api.themoviedb.org",s="203660b5f38f4dd17691a30662d2c12a",u=function(){var n=(0,t.Z)(a().mark((function n(){return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,i.Z.get("".concat(o,"/3/trending/all/day?api_key=").concat(s," "));case 3:return n.abrupt("return",n.sent);case 6:throw n.prev=6,n.t0=n.catch(0),new Error(n.t0);case 9:case"end":return n.stop()}}),n,null,[[0,6]])})));return function(){return n.apply(this,arguments)}}(),l=function(){var n=(0,t.Z)(a().mark((function n(e){return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,i.Z.get("".concat(o,"/3/search/movie?api_key=").concat(s,"&language=en-US&page=1&include_adult=false&query=").concat(e));case 3:return n.abrupt("return",n.sent);case 6:throw n.prev=6,n.t0=n.catch(0),new Error(n.t0);case 9:case"end":return n.stop()}}),n,null,[[0,6]])})));return function(e){return n.apply(this,arguments)}}(),p=function(){var n=(0,t.Z)(a().mark((function n(e){return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,i.Z.get("".concat(o,"/3/movie/").concat(e,"?api_key=").concat(s,"&language=en-US"));case 3:return n.abrupt("return",n.sent);case 6:throw n.prev=6,n.t0=n.catch(0),new Error(n.t0);case 9:case"end":return n.stop()}}),n,null,[[0,6]])})));return function(e){return n.apply(this,arguments)}}(),d=function(){var n=(0,t.Z)(a().mark((function n(e){return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,i.Z.get("".concat(o,"/3/movie/").concat(e,"/credits?api_key=").concat(s,"&language=en-US"));case 3:return n.abrupt("return",n.sent);case 6:n.prev=6,n.t0=n.catch(0);case 8:case"end":return n.stop()}}),n,null,[[0,6]])})));return function(e){return n.apply(this,arguments)}}(),h=function(){var n=(0,t.Z)(a().mark((function n(e){return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,i.Z.get("".concat(o,"/3/movie/").concat(e,"/reviews?api_key=").concat(s,"&language=en-US"));case 3:return n.abrupt("return",n.sent);case 6:n.prev=6,n.t0=n.catch(0);case 8:case"end":return n.stop()}}),n,null,[[0,6]])})));return function(e){return n.apply(this,arguments)}}()}}]);
//# sourceMappingURL=616.5bd5e0a2.chunk.js.map