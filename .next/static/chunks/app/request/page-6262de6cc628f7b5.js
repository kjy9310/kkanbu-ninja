(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[968],{3024:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return N}});var a=n(9268),s=n(1387),r=n(3658),l=n(4274),o=n(8399),i=n(8992),c=n(6564),d=n(5991),u=n(6006),h=n(2171),p=n(102),x=n(4737),m=n(4751);function j(){let{data:e}=(0,m.useSession)();if(e){var t;return(0,a.jsxs)(a.Fragment,{children:["관리모드 ",null===(t=e.user)||void 0===t?void 0:t.name," ",(0,a.jsx)("br",{}),(0,a.jsx)("button",{style:{backgroundColor:"#fb4ab0",color:"white",margin:5,padding:5,borderRadius:5},onClick:()=>(0,m.signOut)(),children:"햄 아웃"})]})}return(0,a.jsx)(a.Fragment,{children:(0,a.jsx)("button",{style:{backgroundColor:"#fb4ab0",color:"white",margin:5,padding:5,borderRadius:5},onClick:()=>(0,m.signIn)(),children:"햄 인"})})}var b=n(1603),w=n(4446),y=n(5609),f=n(8562);let g=(0,b.Z)({palette:{primary:{main:y.Z[300]},secondary:{main:f.Z[500]}}}),v=async e=>{let t=await fetch("/api/request",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)});return t.ok?await t.json():(console.log("에러낫다! 스샷찍어주실?"),console.log(t),"")},Z=async e=>{let t=await fetch("/api/request?id="+e._id+"&password="+e.password,{method:"DELETE",headers:{"Content-Type":"application/json"}});return t.ok?await t.json():(console.log("에러낫다! 스샷찍어주실?"),console.log(t),"")};async function k(){let e=await fetch("api/request",{next:{revalidate:1}});return e.ok?e.json():(console.log("에러낫다! 스샷찍어주실?"),console.log(e),[])}let C=e=>{let t=Math.floor(e/6e4);if(t<60)return"".concat(t,"분전");let n=Math.floor(t/60);return n<24?"".concat(n,"시간전"):"".concat(Math.floor(n/24),"일전")};function N(e){let{userData:t,requestData:n,session:b}=e,[y,f]=(0,u.useState)(n),[N,_]=(0,u.useState)(""),[S,q]=(0,u.useState)(""),[E,T]=(0,u.useState)(""),O=t.map(e=>e.name),I=e=>{_(e.target.value.slice(0,50))},P=e=>{q(e.target.value)},R=async()=>{let e=await k();f(e)},D=async()=>{if(!E||!N)return;let e=await v({requester:E,request:N,password:S});e?(f([{requester:E,request:N,password:S,_id:e},...y]),_(""),q(""),T("")):await R()},M=async e=>{let t=await Z(e);"success"===t?f(y.filter(t=>t._id!==e._id)):await R()};return(0,u.useEffect)(()=>{let e=setInterval(()=>{R()},18e4);return()=>{clearInterval(e)}},[]),(0,a.jsx)(w.Z,{theme:g,children:(0,a.jsxs)(o.Z,{component:d.Z,className:"listContent",children:[(0,a.jsxs)(m.SessionProvider,{session:b,children:[(0,a.jsx)(j,{}),(0,a.jsxs)("div",{className:"search",style:{margin:20},children:[(0,a.jsx)(x.Z,{disablePortal:!0,id:"combo-box-gem",options:O,sx:{width:300},value:E,onChange:(e,t)=>{T(t||"")},renderInput:e=>(0,a.jsx)(h.Z,{...e,label:"케릭명"})}),(0,a.jsx)(h.Z,{style:{width:"100%"},multiline:!0,maxRows:"3",label:"해줘내용",variant:"outlined",value:N,onChange:I}),(0,a.jsx)(h.Z,{style:{width:"250px"},label:"비번",type:"password",variant:"outlined",onChange:P}),(0,a.jsx)(p.Z,{variant:"contained",onClick:D,children:"요청"})]})]}),(0,a.jsxs)(s.Z,{className:"text-left text-sm font-light",children:[(0,a.jsx)(i.Z,{className:"border-b font-medium dark:border-neutral-500",children:(0,a.jsxs)(c.Z,{style:{backgroundColor:"#999999b5",borderRadius:10},children:[(0,a.jsx)(l.Z,{style:{maxWidth:250},className:"px-2 py-4",children:"케릭명"}),(0,a.jsx)(l.Z,{className:"px-6 py-4",children:'"해줘"'}),(0,a.jsx)(l.Z,{className:"px-2 py-4",style:{width:150},children:"버튼"})]})}),(0,a.jsx)(r.Z,{children:y.map(e=>{let t=new Date(e.createdAt).getTime(),n=new Date().getTime()-t;return(0,a.jsxs)(c.Z,{style:{backgroundColor:"#000000b3"},className:"border-b dark:border-neutral-500",sx:{"&:last-child td, &:last-child th":{border:0}},children:[(0,a.jsx)(l.Z,{style:{color:"white",maxWidth:250},className:"px-2 py-2",component:"th",scope:"row",children:e.requester}),(0,a.jsx)(l.Z,{style:{color:"white",maxHeight:150,overflowY:"scroll"},className:"px-6 py-4 ",component:"th",scope:"row",children:(0,a.jsx)("pre",{style:{whiteSpace:"break-spaces"},children:e.request})}),(0,a.jsx)(l.Z,{style:{maxWidth:250},className:"px-2 py-4",component:"th",scope:"row",children:(0,a.jsxs)("div",{children:[(0,a.jsx)(p.Z,{variant:"outlined",onClick:()=>{let t="@".concat(e.requester," 당신의 해줘:").concat(e.request," 내가 해줌!");navigator.clipboard.writeText(t).then(function(){alert("복사완료 : "+t)},function(e){alert("복사가 안됬어요. 직접연락해주세요.")})},children:"귓말복사"}),(0,a.jsx)(p.Z,{variant:"outlined",onClick:()=>{let t=prompt("삭제할거에요? 비번적어주세요");null!==t&&(console.log("row",e),M({...e,password:t}))},children:"삭제"}),(0,a.jsx)("div",{style:{color:"white"},children:C(n)})]})})]},e._id)})})]})]})})}},6806:function(e,t,n){Promise.resolve().then(n.bind(n,3024))}},function(e){e.O(0,[535,709,667,961,744],function(){return e(e.s=6806)}),_N_E=e.O()}]);