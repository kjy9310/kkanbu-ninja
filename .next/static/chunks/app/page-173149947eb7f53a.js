(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[931],{6199:function(e,i,n){"use strict";n.r(i),n.d(i,{default:function(){return Z}});var l=n(9268),a=n(8399),t=n(5991),s=n(6006),r=n(2171),o=n(9405),c=n(102),d=n(4737),u=n(536),m=n(9715),p=n(3451),h=n(9250),g=n(1603),v=n(4446),x=n(2525),j=n(1710),b=n(5383),k=n(4763),y=n(822);let f=(0,g.Z)({palette:{primary:{main:"#133d62"},secondary:{main:"#133d62"}}}),S={Marauder:"https://i.imgur.com/UWvvGKZ.png",Duelist:"https://i.imgur.com/c8vB7OX.png",Ranger:"https://i.imgur.com/qtdp8Jh.png",Shadow:"https://i.imgur.com/nWahbNR.png",Witch:"https://i.imgur.com/XSqMHh9.png",Templar:"https://i.imgur.com/i53a1id.png",Scion:"https://i.imgur.com/9IfOWoN.png",Juggernaut:"https://i.imgur.com/QFubXr4.png",Berserker:"https://i.imgur.com/l2vDx4j.png",Chieftain:"https://i.imgur.com/WSkz5xh.png",Slayer:"https://i.imgur.com/UMAd0yL.png",Gladiator:"https://i.imgur.com/F3FQxV4.png",Champion:"https://i.imgur.com/ltGrJ1K.png",Deadeye:"https://i.imgur.com/NCybIiO.png",Raider:"https://i.imgur.com/oFwpUJO.png",Pathfinder:"https://i.imgur.com/EVg7lhR.png",Assassin:"https://i.imgur.com/0tURSJ4.png",Saboteur:"https://i.imgur.com/7dNJPM4.png",Trickster:"https://i.imgur.com/n8jtbfr.png",Necromancer:"https://i.imgur.com/k1debpx.png",Occultist:"https://i.imgur.com/BGrQsx5.png",Elementalist:"https://i.imgur.com/G5fSIS8.png",Inquisitor:"https://i.imgur.com/PyzEPzP.png",Hierophant:"https://i.imgur.com/8iu1k86.png",Guardian:"https://i.imgur.com/sHiE02Y.png",Ascendant:"https://i.imgur.com/Th9qGrm.png"};function Z(e){let{userData:i}=e,[n,g]=(0,s.useState)(i),[Z,w]=(0,s.useState)(i),[C,N]=(0,s.useState)([]),[L,E]=(0,s.useState)([]),[I,G]=(0,s.useState)(""),[O,R]=(0,s.useState)(""),[P,U]=(0,s.useState)(""),[_,q]=(0,s.useState)(""),[A,W]=(0,s.useState)(""),[J,V]=(0,s.useState)(""),[B,T]=(0,s.useState)(""),[z,F]=(0,s.useState)("all"),M=function(e){let i=new Blob([e],{type:"text/csv"}),n=window.URL.createObjectURL(i),l=document.createElement("a");l.setAttribute("href",n),l.setAttribute("download","download.csv"),l.click()},D=["rank","level","dead","name","class","challenges","account","experience","has5Link","has6Link","mainSkills","allGems"],H=()=>{let e=D.join(),n=i.slice(0,4).map(e=>{let i=D.map(i=>{var n,l,a,t;return"challenges"===i?e[i].completed:"has5Link"===i?null===(n=e.items)||void 0===n?void 0:n.has5Link:"has6Link"===i?null===(l=e.items)||void 0===l?void 0:l.has6Link:"mainSkills"===i?null===(a=e.items)||void 0===a?void 0:a.mainSkills.map(e=>e.baseType).join("|"):"allGems"===i?null===(t=e.items)||void 0===t?void 0:t.allGems.join("|"):e[i]}),n=i.join();return n});M([e,...n].join("\n"))};(0,s.useEffect)(()=>{(async()=>{g(i);let e=await (null==i?void 0:i.reduce((e,i)=>{var n,l;return null===(n=i.items)||void 0===n||null===(l=n.allGems)||void 0===l||l.forEach(i=>{e.add(i)}),e},new Set));N(["",...Array.from(e||[])].sort());let n=await (null==i?void 0:i.reduce((e,i)=>{var n,l;return null===(n=i.items)||void 0===n||null===(l=n.allUniques)||void 0===l||l.forEach(i=>{e.add(i)}),e},new Set));E(["",...Array.from(n||[])].sort()),w(i)})()},[i]);let Q=e=>{R(e.target.value||"")};(0,s.useEffect)(()=>{if(""===O&&(""===_||null===_)&&"all"===z&&""===J&&""===P&&""===I){w(i);return}{let e=i.filter(e=>{var i,n,l,a,t,s,r,o,c;let d=!_||(null===(i=e.items)||void 0===i?void 0:null===(n=i.allGems)||void 0===n?void 0:n.findIndex(e=>e===_))>-1,u=!J||(null===(l=e.items)||void 0===l?void 0:null===(a=l.allUniques)||void 0===a?void 0:a.findIndex(e=>e===J))>-1,m="all"===z||("dead"===z?e.dead:!e.dead),p=!I||I===e.class,h=!O||e.name.includes(O)||(null===(t=e.account)||void 0===t?void 0:t.includes(O))||e.class.includes(O),g=!P||("6"===P?null===(s=e.items)||void 0===s?void 0:s.has6Link:"5"===P?null===(r=e.items)||void 0===r?void 0:r.has5Link:"4"===P&&(null===(o=e.items)||void 0===o?void 0:o.has6Link)===!1&&(null===(c=e.items)||void 0===c?void 0:c.has5Link)===!1);return!!(d&&h&&m&&u&&g&&p)}).sort((e,i)=>e.rank-i.rank);w(e)}},[_,O,z,J,P,I]);let X=e=>{U(e.target.value)};return(0,l.jsx)(v.Z,{theme:f,children:(0,l.jsxs)(a.Z,{component:t.Z,className:"listContent",children:[(0,l.jsxs)("div",{className:"search",children:[(0,l.jsx)(r.Z,{color:"primary",style:{minWidth:150},id:"outlined-basic",label:"검색",variant:"outlined",onChange:Q}),(0,l.jsx)(d.Z,{color:"primary",disablePortal:!0,id:"combo-box-gem",options:C,sx:{width:300},value:_,onChange:(e,i)=>{q(i||"")},inputValue:A,onInputChange:(e,i)=>{W(i)},renderInput:e=>(0,l.jsx)(r.Z,{...e,label:"쩸"})}),(0,l.jsx)(d.Z,{color:"primary",disablePortal:!0,id:"combo-box-unique",options:L,sx:{width:300},value:J,onChange:(e,i)=>{V(i||"")},inputValue:B,onInputChange:(e,i)=>{T(i)},renderInput:e=>(0,l.jsx)(r.Z,{...e,label:"유닠"})}),(0,l.jsxs)(p.Z,{style:{minWidth:150},children:[(0,l.jsx)(u.Z,{color:"primary",id:"demo-simple-select-label",children:"링크"}),(0,l.jsxs)(h.Z,{color:"primary",labelId:"demo-simple-select-label",id:"demo-simple-select",value:P,label:"Link",onChange:X,children:[(0,l.jsx)(m.Z,{value:"",children:"전부"}),(0,l.jsx)(m.Z,{value:"6",children:"6링오우너"}),(0,l.jsx)(m.Z,{value:"5",children:"5링"}),(0,l.jsx)(m.Z,{value:"4",children:"기타"})]})]}),(0,l.jsxs)(o.Z,{variant:"outlined","aria-label":"outlined primary button group",style:{boxShadow:"none"},children:[(0,l.jsx)(c.Z,{color:"primary",variant:"contained",style:{backgroundColor:"dead"===z||"all"===z?"#7a1100":"transparent"},onClick:()=>F("all"===z?"alive":"all"),children:"죽음"}),(0,l.jsx)(c.Z,{color:"secondary",variant:"contained",style:{backgroundColor:"alive"===z||"all"===z?"#133d62":"transparent"},onClick:()=>F("all"===z?"dead":"all"),children:"살음"})]}),(0,l.jsx)(c.Z,{color:"primary",variant:"contained",onClick:H,children:"CSV"})]}),(0,l.jsx)("div",{className:"classes",children:Object.keys(S).map(e=>(0,l.jsx)("div",{onClick:()=>G(I===e?"":e),style:{border:I===e?"3px solid #133d62":"none"},className:"classBox",children:(0,l.jsx)("div",{className:"classImg",style:{backgroundImage:"url(".concat(S[e],")")}})},"search-".concat(e)))}),(0,l.jsx)("div",{children:Z&&Z.length&&Z.length>0&&Z.map((e,i)=>{var n,a,t;return(0,l.jsxs)(x.Z,{style:{backgroundColor:i%2==0?"#0a0a0acc":"#141414cc"},children:[(0,l.jsx)(j.Z,{expandIcon:(0,l.jsx)("span",{style:{color:"white"},children:"V"}),"aria-controls":"panel1a-content",id:"panel1a-header",children:(0,l.jsxs)(k.Z,{className:"rankRow",children:[(0,l.jsxs)("span",{children:[(0,l.jsx)("span",{children:"".concat(e.rank," ")}),(0,l.jsx)("span",{children:"Lv.".concat(e.level," ")}),(0,l.jsx)("img",{style:{border:"1px solid black",width:32,height:25,display:"inline-block"},src:S[e.class]}),(0,l.jsx)("span",{style:{color:e.dead?"red":"white"},children:e.name})]}),(0,l.jsx)("span",{style:{display:"flex"},children:null===(n=e.items)||void 0===n?void 0:null===(a=n.mainSkills)||void 0===a?void 0:a.map(e=>(0,l.jsx)(y.Z,{title:e.baseType,children:(0,l.jsx)("img",{src:e.icon})},e.id))})]})}),(0,l.jsx)(b.Z,{children:(0,l.jsxs)(k.Z,{className:"rankRow",style:{fontSize:"1rem !important",width:"80%",margin:"0 auto"},children:[(0,l.jsx)("span",{children:"챌: ".concat(null===(t=e.challenges)||void 0===t?void 0:t.completed," ")}),(0,l.jsx)("span",{children:"계정: ".concat(e.account)}),(0,l.jsx)("span",{children:"Exp.".concat(e.experience," ")}),(0,l.jsx)("a",{style:{backgroundColor:"#133d62",display:"inline-block",padding:"2px 10px",borderRadius:5},target:"_blank",href:"".concat("https://poe.game.daum.net/","account/view-profile/").concat(e.account,"/characters?characterName=").concat(e.name),children:"POE"})]})})]},e._id)})})]})})}},6418:function(e,i,n){Promise.resolve().then(n.bind(n,6199))}},function(e){e.O(0,[535,485,667,961,744],function(){return e(e.s=6418)}),_N_E=e.O()}]);