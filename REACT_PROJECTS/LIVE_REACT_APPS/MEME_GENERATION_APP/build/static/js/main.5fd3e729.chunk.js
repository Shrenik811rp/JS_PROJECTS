(this.webpackJsonpmeme_gen=this.webpackJsonpmeme_gen||[]).push([[0],{11:function(e,t,n){e.exports={container:"styles_container__1j76y",skip:"styles_skip__J5imd",generate:"styles_generate__10Fnw"}},12:function(e,t,n){e.exports={container:"styles_container__38Ztw",copy:"styles_copy__IKXB0",home:"styles_home__2P03Q"}},25:function(e,t,n){},34:function(e,t,n){"use strict";n.r(t);var c=n(0),a=n.n(c),s=n(18),r=n.n(s),i=(n(25),n(9)),o=n(8),j=n(11),u=n.n(j),l=n(2),p=n(1),b=function(){var e=Object(c.useState)([]),t=Object(o.a)(e,2),n=t[0],a=t[1],s=Object(c.useState)(0),r=Object(o.a)(s,2),i=r[0],j=r[1],b=Object(c.useState)([]),m=Object(o.a)(b,2),h=m[0],d=m[1],f=Object(l.f)();return Object(c.useEffect)((function(){fetch("https://api.imgflip.com/get_memes").then((function(e){e.json().then((function(e){var t=e.data.memes;!function(e){for(var t=e.length-1;t>0;t--){var n=Math.floor(Math.random()*t),c=e[t];e[t]=e[n],e[n]=c}}(t),a(t)}))}))}),[]),Object(c.useEffect)((function(){n.length&&d(Array(n[i].box_count).fill(""))}),[i,n]),n.length?Object(p.jsxs)("div",{className:u.a.container,children:[Object(p.jsx)("button",{onClick:function(){var e=n[i],t=new FormData;t.append("username","imgflip123_isthepass"),t.append("password","imgflip123"),t.append("template_id",e.id),h.forEach((function(e,n){return t.append("boxes[".concat(n,"][text]"),e)})),fetch("https://api.imgflip.com/caption_image",{method:"POST",body:t}).then((function(e){e.json().then((function(e){f.push("/generated?url=".concat(e.data.url)),console.log(e)}))}))},className:u.a.generate,children:"Generate"}),Object(p.jsx)("button",{onClick:function(){return j(i+1)},className:u.a.skip,children:"Skip"}),h.map((function(e,t){return Object(p.jsx)("input",{onChange:function(e){return function(e,t){var n=e.target.value||"";d(h.map((function(e,c){return t===c?n:e})))}(e,t)}},t)})),Object(p.jsx)("img",{alt:"generated_meme",src:n[i].url})]}):Object(p.jsx)(p.Fragment,{})},m=n(12),h=n.n(m),d=n(20),f=function(){var e=Object(c.useState)(!1),t=Object(o.a)(e,2),n=t[0],a=t[1],s=Object(d.useClipboard)(),r=Object(l.f)(),i=Object(l.g)(),j=new URLSearchParams(i.search).get("url");return Object(p.jsxs)("div",{className:h.a.container,children:[Object(p.jsx)("button",{onClick:function(){return r.push("/")},className:h.a.home,children:"Make More Memes"}),j&&Object(p.jsx)("img",{alt:"generated_meme",src:j}),Object(p.jsx)("button",{onClick:function(){s.copy(j),a(!0)},className:h.a.copy,children:n?"Link copied!":"Copy link?"})]})},O=function(){return Object(p.jsxs)("div",{children:[Object(p.jsx)("h1",{children:"Meme Maker"}),Object(p.jsxs)(l.c,{children:[Object(p.jsx)(l.a,{exact:!0,path:"/",children:Object(p.jsx)(b,{})}),Object(p.jsx)(l.a,{path:"/generated",children:Object(p.jsx)(f,{})})]})]})};r.a.render(Object(p.jsx)(a.a.StrictMode,{children:Object(p.jsx)(i.a,{children:Object(p.jsx)(O,{})})}),document.getElementById("root"))}},[[34,1,2]]]);
//# sourceMappingURL=main.5fd3e729.chunk.js.map