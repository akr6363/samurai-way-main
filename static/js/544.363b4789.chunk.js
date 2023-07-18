/*! For license information please see 544.363b4789.chunk.js.LICENSE.txt */
(self.webpackChunksamurai_way=self.webpackChunksamurai_way||[]).push([[544],{544:function(e,s,a){"use strict";a.r(s),a.d(s,{default:function(){return K}});var n=a(1413),i=a(5671),t=a(3144),o=a(136),r=a(5716),l=a(2791),_=a(672),d={dialogsPage:"Dialogs_dialogsPage__MA3aH",dialogsPage__empty:"Dialogs_dialogsPage__empty__Nt0u-",page__dialogs:"Dialogs_page__dialogs__5rJJz",page__messages:"Dialogs_page__messages__QojjJ",messagesContainer:"Dialogs_messagesContainer__aEmF6",dialogsPage__info:"Dialogs_dialogsPage__info__Toyfv",toProfileBtn:"Dialogs_toProfileBtn__NL4RZ"},c=a(4942),u={message:"Message_message__vhqPg",message__my:"Message_message__my__bAN70",photo:"Message_photo__p-3On",photo__my:"Message_photo__my__UfDr2",photo__friend:"Message_photo__friend__DSx5U",text:"Message_text__VbalH",name:"Message_name__rX27U"},g=a(1694),m=a.n(g),p=a(184),f=function(e){e.id;var s,a=e.message,n=e.isMy,i=e.user,t=e.myData;return(0,p.jsxs)("div",{className:m()(u.message,(s={},(0,c.Z)(s,u.message__my,n),(0,c.Z)(s,u.message__friend,!n),s)),children:[(0,p.jsx)("div",{className:"".concat(u.photo,"\n                 ").concat(n?u.photo__my:u.photo__friend),children:(0,p.jsx)("img",{src:n?t.photo:null===i||void 0===i?void 0:i.photo,alt:""})}),(0,p.jsxs)("div",{className:u.text,children:[(0,p.jsx)("div",{className:"".concat(u.name,"\n                 ").concat(n?u.name__my:u.name__friend),children:n?t.name:null===i||void 0===i?void 0:i.name}),(0,p.jsx)("div",{children:a})]})]})},h=a(6139),v=a(704),x={messageForm:"SendMessageForm_messageForm__2fh7M",postButton:"SendMessageForm_postButton__FwDxh",postButton__icon:"SendMessageForm_postButton__icon__XO8T1",send__btn:"SendMessageForm_send__btn__BoVq4"},j=a(3079),y=a(7489),N=a(3400),D=a(1686),Z=((0,j.DT)(100),(0,v.Z)({form:"send-message"})((function(e){var s=e.handleSubmit;return(0,p.jsxs)("form",{onSubmit:s,className:x.messageForm,children:[(0,p.jsx)(h.Z,{label:"Write a message...",name:"message",component:y.kc,className:x.send__input}),(0,p.jsx)(N.Z,{"aria-label":"send",size:"large",type:"submit",className:x.postButton,children:(0,p.jsx)(D.Z,{fontSize:"inherit",className:x.postButton__icon})})]})}))),M=a(2381),b=a(364),P="NavDialogsItem_friendContainer__9J5J0",A="NavDialogsItem_photo__jjbvK",S="NavDialogsItem_name__AAqFp",k=function(e){return(0,p.jsxs)("div",{className:P,children:[(0,p.jsx)("div",{className:A,children:(0,p.jsx)("img",{src:e.photo,alt:""})}),(0,p.jsx)("div",{className:S,children:e.name})]})},B="NavDialogs_friendNavBar__W2koi",C="NavDialogs_friendNavBar__title__zZ8Un",F="NavDialogs_nav__friends__WxyTt",I="NavDialogs_friendLInk__7EP0b",q=a(1523),w=function(e){var s=e.friends.map((function(e){return(0,p.jsx)(q.OL,{to:"/dialogs/".concat(e.id),className:I,children:(0,p.jsx)(k,{id:e.id,name:e.name,photo:e.photo})},e.id)}));return(0,p.jsxs)("div",{className:B,children:[(0,p.jsx)("h2",{className:C,children:"Dialogs"}),(0,p.jsx)("div",{className:F,children:s})]})},z=function(e){(0,o.Z)(a,e);var s=(0,r.Z)(a);function a(){return(0,i.Z)(this,a),s.apply(this,arguments)}return(0,t.Z)(a,[{key:"componentDidMount",value:function(){this.props.requestDialogs(1,100,!0)}},{key:"render",value:function(){return(0,p.jsx)(w,(0,n.Z)({},this.props))}}]),a}(l.Component),L=(0,b.$j)((function(e){return{friends:e.dialogsPage.dialogsData}}),(function(e){return{requestDialogs:_.pY}}))(z),O=a(2919),J=a(9373),T=a(3787),E=function(e){var s=e.dialogsPage,a=e.sendMessageAC,n=e.userId,i=e.myData,t=e.isFetching,o=(0,l.useRef)(null);(0,l.useEffect)((function(){o.current&&(o.current.scrollTop=o.current.scrollHeight)}),[s.messageData[n]]);var r=[],_=s.messageData[n],c=s.dialogsData.find((function(e){return e.id===n}));_&&(r=_.map((function(e){return(0,p.jsx)(f,{id:e.id,message:e.message,isMy:e.isMy,user:c,myData:i},e.id)})));return(0,p.jsxs)("div",{style:{display:"flex",maxWidth:"100%"},children:[t?(0,p.jsx)("div",{className:"page",style:{flex:"1 1 auto",marginRight:"20px"},children:(0,p.jsx)(T.p,{})}):(0,p.jsx)("div",{className:d.dialogsPage,children:_?(0,p.jsxs)("div",{className:d.page__messages,children:[(0,p.jsxs)("div",{className:d.dialogsPage__info,children:[(0,p.jsx)(k,{id:n,photo:null===c||void 0===c?void 0:c.photo,name:null===c||void 0===c?void 0:c.name}),(0,p.jsx)(q.OL,{to:"/profile/".concat(n),className:d.friendLInk,children:(0,p.jsx)(J.Z,{className:d.toProfileBtn,onClick:function(){},endIcon:(0,p.jsx)(O.Z,{}),children:"Go to profile"})})]}),(0,p.jsx)("div",{className:d.messagesContainer,ref:o,children:r}),(0,p.jsx)(Z,{onSubmit:function(e,s){a(e.message,n),s((0,M.mc)("send-message"))}})]}):(0,p.jsx)("div",{className:d.dialogsPage__empty,children:"Select a dialog..."})}),(0,p.jsx)(L,{})]})},H=a(7781),R=a(5987),U=a(9271),W=["isAuth"],$=function(e){return{isAuth:e.auth.isAuth}};var V=function(e){return(0,b.$j)($)((function(s){var a=s.isAuth,i=(0,R.Z)(s,W);return a?(0,p.jsx)(e,(0,n.Z)({},i)):(0,p.jsx)(U.l_,{to:"/login"})}))},X=a(4879),Y=function(e){(0,o.Z)(a,e);var s=(0,r.Z)(a);function a(){return(0,i.Z)(this,a),s.apply(this,arguments)}return(0,t.Z)(a,[{key:"componentDidMount",value:function(){this.props.requestDialogs(1,100,!0)}},{key:"render",value:function(){var e=Number(this.props.match.params.userId);return(0,p.jsx)(E,(0,n.Z)((0,n.Z)({},this.props),{},{userId:e}))}}]),a}(l.Component),G={requestDialogs:_.pY,sendMessageAC:_.dI},K=(0,H.qC)(V,(0,b.$j)((function(e){return{dialogsPage:e.dialogsPage,myData:e.auth.myData,isFetching:(0,X.ab)(e)}}),G),U.EN)(Y)},2919:function(e,s,a){"use strict";var n=a(1941);s.Z=void 0;var i=n(a(5649)),t=a(184),o=(0,i.default)((0,t.jsx)("path",{d:"M16.01 11H4v2h12.01v3L20 12l-3.99-4z"}),"ArrowRightAlt");s.Z=o},1686:function(e,s,a){"use strict";var n=a(1941);s.Z=void 0;var i=n(a(5649)),t=a(184),o=(0,i.default)((0,t.jsx)("path",{d:"M2.01 21 23 12 2.01 3 2 10l15 2-15 2z"}),"Send");s.Z=o},1694:function(e,s){var a;!function(){"use strict";var n={}.hasOwnProperty;function i(){for(var e=[],s=0;s<arguments.length;s++){var a=arguments[s];if(a){var t=typeof a;if("string"===t||"number"===t)e.push(a);else if(Array.isArray(a)){if(a.length){var o=i.apply(null,a);o&&e.push(o)}}else if("object"===t)if(a.toString===Object.prototype.toString)for(var r in a)n.call(a,r)&&a[r]&&e.push(r);else e.push(a.toString())}}return e.join(" ")}e.exports?(i.default=i,e.exports=i):void 0===(a=function(){return i}.apply(s,[]))||(e.exports=a)}()}}]);
//# sourceMappingURL=544.363b4789.chunk.js.map