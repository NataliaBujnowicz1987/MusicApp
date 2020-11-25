(this["webpackJsonpmusic-app"]=this["webpackJsonpmusic-app"]||[]).push([[0],{24:function(e,t,c){},25:function(e,t,c){"use strict";c.r(t);var a=c(0),n=c(3),r=c.n(n),i=c(12),s=c.n(i),o=c(5),l=c.n(o),u=c(8),d=c(2),p=c(7),j=c.p+"static/media/deck.c3573cc7.png",b=function(e){var t=e.currentSong,c=e.isPlaying;return Object(a.jsxs)("div",{className:"song",children:[Object(a.jsxs)("div",{className:"song__data",children:[Object(a.jsxs)("p",{children:['"',t.name,'"']}),Object(a.jsx)("p",{children:t.artist})]}),Object(a.jsxs)("div",{className:"song__img",children:[Object(a.jsx)("img",{className:"song__img--deck",src:j,alt:"turntable"}),Object(a.jsx)("img",{className:"song__img--cover ".concat(c?"rotate":""),src:t.cover,alt:t.title})]})]})},h=c(6),m=c(4),g=function(e){var t=e.songs,c=e.setSongs,n=e.currentSong,r=e.setCurrentSong,i=e.isPlaying,s=e.setIsPlaying,o=e.songTime,p=e.setSongTime,j=e.audioRef,b=function(e){var a=t.map((function(t){return t.id===e.id?Object(d.a)(Object(d.a)({},t),{},{active:!0}):Object(d.a)(Object(d.a)({},t),{},{active:!1})}));c(a)};if(i){var g=j.current.play();void 0!==g&&g.then((function(e){j.current.play()}))}var f=function(e){var t=Math.floor(e/60),c=Math.floor(e%60),a=String(c).padStart(2,"0");return"".concat(t,":").concat(a)},O=function(){var e=Object(u.a)(l.a.mark((function e(c){var a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(a=t.findIndex((function(e){return e.id===n.id})),"skip-forward"!==c){e.next=5;break}return e.next=4,r(t[(a+1)%t.length]);case 4:b(t[(a+1)%t.length]);case 5:if("skip-back"!==c){e.next=15;break}if(0!==a){e.next=12;break}return e.next=9,r(t[t.length-1]);case 9:b(t[t.length-1]),e.next=15;break;case 12:return e.next=14,r(t[(a-1)%t.length]);case 14:b(t[(a-1)%t.length]);case 15:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),v={transform:"translateX(".concat(o.animationPercentage,"%)")};return Object(a.jsxs)("div",{className:"player",children:[Object(a.jsxs)("div",{className:"player--time-control",children:[Object(a.jsx)("p",{children:f(o.currentTime)}),Object(a.jsxs)("div",{style:{background:"linear-gradient(to right, ".concat(n.color[0],", ").concat(n.color[1],")")},className:"track",children:[Object(a.jsx)("input",{min:0,max:o.duration||0,value:o.currentTime,onChange:function(e){j.current.currentTime=e.target.value,p(Object(d.a)(Object(d.a)({},o),{},{currentTime:e.target.value}))},type:"range"}),Object(a.jsx)("div",{style:v,className:"animate-track"})]}),Object(a.jsx)("p",{children:f(o.duration||0)})]}),Object(a.jsxs)("div",{className:"player--controllers",children:[Object(a.jsx)(h.a,{onClick:function(){return O("skip-back")},size:"2x",icon:m.a}),Object(a.jsx)(h.a,{onClick:function(){i?j.current.pause():j.current.play(),s(!i)},size:"2x",icon:i?m.d:m.e}),Object(a.jsx)(h.a,{onClick:function(){return O("skip-forward")},size:"2x",icon:m.c})]})]})},f=c.p+"static/media/logo.4c9dc684.png",O=function(e){var t=e.libraryStatus,c=e.setLibraryStatus;return Object(a.jsxs)("nav",{children:[Object(a.jsx)("div",{className:"logo",children:Object(a.jsx)("img",{src:f,alt:"FOXdesign logo"})}),Object(a.jsxs)("button",{onClick:function(){return c(!t)},children:[Object(a.jsx)("span",{children:"PLAYLIST "}),Object(a.jsx)(h.a,{icon:m.b,size:"2x"})]})]})},v=function(e){var t=e.song,c=e.songs,n=e.id,r=e.setCurrentSong,i=e.audioRef,s=e.isPlaying,o=e.setSongs;return Object(a.jsxs)("div",{onClick:function(){r(t);var e=c.map((function(e){return e.id===n?Object(d.a)(Object(d.a)({},e),{},{active:!0}):Object(d.a)(Object(d.a)({},e),{},{active:!1})}));(o(e),s)&&i.current.play().then((function(e){i.current.play()}))},className:"music-library-song ".concat(t.active?"selected":""),children:[Object(a.jsx)("img",{src:t.cover,alt:t.title}),Object(a.jsxs)("div",{className:"music-library-song__data",children:[Object(a.jsx)("p",{children:t.artist}),Object(a.jsxs)("p",{children:['"',t.name,'"']})]})]})},x=function(e){var t=e.songs,c=e.setCurrentSong,n=e.audioRef,r=e.isPlaying,i=e.setSongs,s=e.libraryStatus;return Object(a.jsx)("div",{className:"music-library ".concat(s?"active-library":""),children:Object(a.jsxs)("div",{className:"music-library-songs",children:[Object(a.jsx)("h2",{children:"PLAYLIST"}),t.map((function(e){return Object(a.jsx)(v,{songs:t,song:e,setCurrentSong:c,id:e.id,audioRef:n,isPlaying:r,setSongs:i},e.id)}))]})})},y=(c(24),c(27));var S=function(){return[{name:"Velocities",cover:"https://chillhop.com/wp-content/uploads/2020/07/9e04907d0cf68c974c4a5f530b082a8d83a2d41f-1024x1024.jpg",artist:"Sleepy Fish",audio:"https://mp3.chillhop.com/serve.php/?mp3=7988",color:["#C9E7ED","#FCF4CF"],id:Object(y.a)(),active:!0},{name:"Glory Days",cover:"https://chillhop.com/wp-content/uploads/2020/08/63d2d2cdabbc5df023603b5f47b2fb97963cb537-1024x1024.jpg",artist:"Sitting Duck, Hoffy Beats",audio:"https://mp3.chillhop.com/serve.php/?mp3=7981",color:["#6A9D94","#4D5B41"],id:Object(y.a)(),active:!1},{name:"Vibe Vibe",cover:"https://chillhop.com/wp-content/uploads/2020/08/7ba352cafecae63aa3f09a52e125ea615d2c1f9b-1024x1024.jpg",artist:"Moods, Yasper",audio:"https://mp3.chillhop.com/serve.php/?mp3=10002",color:["#C8EFFE","#AE8F38"],id:Object(y.a)(),active:!1},{name:"Keep Going",cover:"https://chillhop.com/wp-content/uploads/2020/07/ff35dede32321a8aa0953809812941bcf8a6bd35-1024x1024.jpg",artist:"Sw\xf8rn",audio:"https://mp3.chillhop.com/serve.php/?mp3=9222",color:["#CD607D","#c94043"],id:Object(y.a)(),active:!1},{name:"Where We Met",cover:"https://chillhop.com/wp-content/uploads/2020/06/faa452681fe33146c42a1b422fdf7cd7fd082637-1024x1024.jpg",artist:"xander",audio:"https://mp3.chillhop.com/serve.php/?mp3=9203",color:["#902E36","#5B3655"],id:Object(y.a)(),active:!1},{name:"Far Away",cover:"https://chillhop.com/wp-content/uploads/2020/07/bc9a7af2ad67de703541c2c7a91e3df74ab494c0-1024x1024.jpg",artist:"Sw\xf8rn",audio:"https://mp3.chillhop.com/serve.php/?mp3=7951",color:["#D7878D","#3B4E5D"],id:Object(y.a)(),active:!1}]};var k=function(){var e=Object(n.useRef)(null),t=Object(n.useState)(S()),c=Object(p.a)(t,2),r=c[0],i=c[1],s=Object(n.useState)(r[0]),o=Object(p.a)(s,2),j=o[0],h=o[1],m=Object(n.useState)(!1),f=Object(p.a)(m,2),v=f[0],y=f[1],k=Object(n.useState)({currentTime:0,duration:0,animationPercentage:0}),w=Object(p.a)(k,2),C=w[0],N=w[1],P=Object(n.useState)(!1),T=Object(p.a)(P,2),D=T[0],_=T[1],E=function(e){var t=e.target.currentTime,c=e.target.duration,a=Math.round(t),n=Math.round(c),r=Math.round(a/n*100);N(Object(d.a)(Object(d.a)({},C),{},{currentTime:t,duration:c,animationPercentage:r}))},F=function(){var t=Object(u.a)(l.a.mark((function t(){var c;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return c=r.findIndex((function(e){return e.id===j.id})),t.next=3,h(r[(c+1)%r.length]);case 3:v&&e.current.play();case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();return Object(a.jsxs)("div",{className:"App ".concat(D?"library-active":""),children:[Object(a.jsx)(O,{libraryStatus:D,setLibraryStatus:_}),Object(a.jsx)(b,{currentSong:j,isPlaying:v}),Object(a.jsx)(g,{audioRef:e,currentSong:j,setCurrentSong:h,isPlaying:v,setIsPlaying:y,songTime:C,setSongTime:N,songs:r,setSongs:i}),Object(a.jsx)(x,{audioRef:e,songs:r,setCurrentSong:h,isPlaying:v,setSongs:i,libraryStatus:D}),Object(a.jsx)("audio",{onTimeUpdate:E,onLoadedMetadata:E,ref:e,src:j.audio,onEnded:F})]})};s.a.render(Object(a.jsx)(r.a.StrictMode,{children:Object(a.jsx)(k,{})}),document.getElementById("root"))}},[[25,1,2]]]);
//# sourceMappingURL=main.9df1c685.chunk.js.map