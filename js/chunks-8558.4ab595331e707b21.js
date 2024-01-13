"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[8558],{60546:function(e,n,l){l.d(n,{OC:function(){return r}});var t=l(85893),a=l(67294),o=l(62246),i=l(4433),s=[{id:"slantLeft",getPath:function(e,n){return"M".concat(e," 0L-0 ").concat(n)}},{id:"slantRight",getPath:function(e,n){return"M0 0L".concat(e," ").concat(n)}},{id:"pointUp",getPath:function(e,n){return"M0 0".concat(n,"L").concat(e/2," 0L").concat(e," ").concat(n,"L").concat(1.5*e," 0V0")}},{id:"pointDown",getPath:function(e,n){return"M0 0L".concat(e/2," ").concat(n,"L").concat(e," 0")}},{id:"curveUp",getPath:function(e,n){return"M0 0 C".concat(e/2," ").concat(n," ").concat(e-e/2," ").concat(n," ").concat(e," 0")}},{id:"curveDown",getPath:function(e,n){return"M0 ".concat(n," C").concat(e/2," 0 ").concat(e-e/2," 0 ").concat(e," ").concat(n)}},{id:"waveLeft",getPath:function(e,n){return"M0 0C0 0 ".concat(.2023*e," ").concat(n," ").concat(.3333*e," ").concat(n,"C").concat(.4681*e," ").concat(n," ").concat(.5318*e," 0 ").concat(.6667*e," 0C").concat(.8015*e," 0 ").concat(e," ").concat(n," ").concat(e," ").concat(n)}},{id:"waveRight",getPath:function(e,n){return"M".concat(e," 0C").concat(e," 0 ").concat(.8*e," ").concat(n," ").concat(.666*e," ").concat(n,"C").concat(.547*e," ").concat(n," ").concat(.483*e," 0 ").concat(.333*e," 0C").concat(.184*e," 0 -0.00012207 ").concat(n," -0.00012207 ").concat(n)}},{id:"jaggedLeft",getPath:function(e,n){return"M0 0L".concat(e/3," ").concat(n,"L").concat(e/1.5," 0L").concat(e," ").concat(n)}},{id:"jaggedRight",getPath:function(e,n){return"M".concat(e," 0L").concat(e/1.5," ").concat(n,"L").concat(e/3," 0L0 ").concat(n)}},{id:"swoopLeft",getPath:function(e,n){return"M0 ".concat(n,"C").concat(e," 0 ").concat(2*e," 0 ").concat(2*e," 0")}},{id:"swoopRight",getPath:function(e,n){return"M".concat(e," ").concat(n,"C").concat(e/2," 0 0 0 0 0")}},{id:"none",getPath:function(e,n){return"M0 ".concat(n,"H").concat(e)}}],c=function(e){var n=e.width,l=e.shape,a=e.strokeWidth,o=e.strokeColor,c=e.strokeType,r=s.find((function(e){return e.id===(null!==l&&void 0!==l?l:"none")})),d=Math.floor(n),u="none"===r.id?Math.floor(a):Math.floor(d/i.c8),v=r.getPath(d,u);return(0,t.jsx)("svg",{className:"absolute bottom-0 left-0 z-50 overflow-visible",fill:"transparent",width:d,height:u,viewBox:"0 0 ".concat(d," ").concat(u),children:(0,t.jsx)("path",{d:v,stroke:o,strokeWidth:a,strokeDasharray:"dashed"===c?"40 20":void 0})})},r=function(e){var n=e.contentRef,l=e.border,i=e.sectionDivider,s=l||{},r=s.type,d=s.width,u=s.color,v=(0,a.useState)(0),m=v[0],f=v[1],h=(0,a.useCallback)((function(){var e;f(null!==(e=n.current.offsetWidth)&&void 0!==e?e:0)}),[n]);return(0,o.Z)(h,l?n:null),l?(0,t.jsx)(c,{width:m,shape:i,strokeType:r,strokeWidth:d,strokeColor:u}):null}},78558:function(e,n,l){l.r(n),l.d(n,{default:function(){return M}});var t=l(47568),a=l(26042),o=l(69396),i=l(29815),s=l(20414),c=l(85893),r=l(31996),d=l(67294),u=l(52077),v=l(71799),m=l(41664),f=l.n(m),h=l(14441),g=l(71097),x=l(33253),b=l(30120),p=(l(39828),l(399)),y=l(21123),w=l(4433),j=l(60546),N=l(5152),F=l.n(N),Z=l(41370),C=F()((function(){return Promise.all([l.e(4853),l.e(4814)]).then(l.bind(l,54814))}),{loadableGenerated:{webpack:function(){return[54814]}},loading:function(){return""},ssr:!1}),k=F()((function(){return l.e(9198).then(l.t.bind(l,9198,23))}),{loadableGenerated:{webpack:function(){return[9198]}},loading:function(){return""},ssr:!1}),L=F()((function(){return l.e(7333).then(l.bind(l,57333))}),{loadableGenerated:{webpack:function(){return[57333]}},loading:function(){return""},ssr:!1}),S={name:"",email:"",message:"",idBusiness:null,valid:!0};function M(e){var n,l,m,N,F,M,_,P,H,R=e.id,A=e.block,E=e.website,D=e.apiUrl,K=e.captchaKey,T=e.previousBlock,O=e.stickyHeaderOffsetStyle,B=(null===A||void 0===A?void 0:A.headline)?"<h3>".concat(A.headline,"</h3><p>").concat(A.content,"</p>"):null===A||void 0===A?void 0:A.content,W=null===A||void 0===A?void 0:A.align,$=null!==(F=null===A||void 0===A?void 0:A.nameFieldLabel)&&void 0!==F?F:"Name",q=null!==(M=null===A||void 0===A?void 0:A.emailFieldLabel)&&void 0!==M?M:"E-mail",I=null!==(_=null===A||void 0===A?void 0:A.messageFieldLabel)&&void 0!==_?_:"Message",z=null!==(P=null===A||void 0===A?void 0:A.sendButtonLabel)&&void 0!==P?P:"Send",G=null===A||void 0===A?void 0:A.animation,U=null===E||void 0===E?void 0:E.animation,V=null===A||void 0===A?void 0:A.divider,J=null===A||void 0===A?void 0:A.border,Q=(0,d.useRef)(null),X=(0,d.useState)(!1),Y=X[0],ee=X[1],ne=(0,d.useState)((0,o.Z)((0,a.Z)({},S),{customFields:A.customFields})),le=ne[0],te=ne[1],ae=(0,d.useState)(!1),oe=ae[0],ie=ae[1],se=(0,d.useState)(null),ce=se[0],re=se[1],de=(0,d.useState)("#FFFFFF"),ue=de[0],ve=de[1],me=(0,d.useState)(!1),fe=me[0],he=me[1],ge=(0,d.useState)(!1),xe=ge[0],be=ge[1],pe=new r.bl(D),ye=(0,p.Z)(A).minHeight,we=(null!==(H=null===A||void 0===A||null===(n=A.fieldStyle)||void 0===n?void 0:n.opacity)&&void 0!==H?H:7)/100,je=(0,d.useState)({borderRadius:8,backgroundColor:"rgba(0,0,0,".concat(we,")"),color:we>=.25?(0,r.$O)((0,r.s)("rgba(0,0,0,".concat(we,")"))):"#000000"}),Ne=je[0],Fe=je[1],Ze=function(){var e=(0,t.Z)((function(e){var n,l,t,i,c,d,u,v;return(0,s.__generator)(this,(function(s){switch(s.label){case 0:if(!e)return ee(!1),[2];if(he(!1),!le.name||!le.email||!(0,r.oH)(le.email)||!le.message)return te((0,o.Z)((0,a.Z)({},le),{valid:!1})),ee(!1),[2];if(A&&(null===A||void 0===A?void 0:A.fields)&&(null===A||void 0===A||null===(n=A.fields)||void 0===n?void 0:n.length)){l=!0,t=!1,i=void 0;try{for(c=A.fields[Symbol.iterator]();!(l=(d=c.next()).done);l=!0)if((u=d.value).required&&!le[u.label.toLowerCase()])return te((0,o.Z)((0,a.Z)({},le),{valid:!1})),ee(!1),[2]}catch(m){t=!0,i=m}finally{try{l||null==c.return||c.return()}finally{if(t)throw i}}}return le.captcha=e,[4,pe.post("/website/send-contact-form",le)];case 1:return(v=s.sent())&&!0===v.status?(te(S),ie(!0)):re("Error while sending your message. Try again later."),ee(!1),[2]}}))}));return function(n){return e.apply(this,arguments)}}(),Ce=function(e,n){var l=[];(null===le||void 0===le?void 0:le.customFields)&&(l=(0,i.Z)(le.customFields));var t=null===l||void 0===l?void 0:l.find((function(n){return n.Field===e}));t?t.value=n:l.push({Field:e,value:n}),te((function(e){return(0,o.Z)((0,a.Z)({},e),{customFields:l})}))};return(0,d.useEffect)((function(){var e,n;if(A&&E)if(te((0,o.Z)((0,a.Z)({},le),{customFields:A.customFields})),"custom"===(null===(e=A.button)||void 0===e||null===(n=e.style)||void 0===n?void 0:n.name))Fe((function(e){return(0,o.Z)((0,a.Z)({},e),{borderRadius:A.button.style.cornerRadius})}));else{var l,t,i=E.buttons&&E.buttons[null===(l=A.button)||void 0===l||null===(t=l.style)||void 0===t?void 0:t.name]||{cornerRadius:8};Fe((function(e){return(0,o.Z)((0,a.Z)({},e),{borderRadius:i.cornerRadius})}))}}),[A,E]),(0,d.useEffect)((function(){var e;te((0,o.Z)((0,a.Z)({},le),{idBusiness:null===(e=E.Business)||void 0===e?void 0:e._id}))}),[E]),(0,d.useEffect)((function(){var e=setTimeout((function(){be(!0)}),5e3);return function(){return clearTimeout(e)}}),[]),(0,c.jsxs)("section",{className:"relative",children:[(0,c.jsxs)("div",{ref:Q,id:R,className:(0,r.AK)("flex flex-none flex-shrink-0 relative break-word",(0,r.A2)((null===A||void 0===A?void 0:A.verticalAlign)||"center")),style:(0,a.Z)({minHeight:ye},(0,w.$h)(A),O),children:[(0,c.jsx)(y.Z,{block:A,website:E,onChange:function(e){var n,l=(null===e||void 0===e||null===(n=e.overlay)||void 0===n?void 0:n.color1)||"#FFFFFF",t=(0,r.$O)(l);ve(t),Fe((function(e){return(0,o.Z)((0,a.Z)({},e),{backgroundColor:(0,r.jn)(l)?"rgba(255,255,255,".concat(we,")"):"rgba(0,0,0,".concat(we,")"),color:we>=.25?(0,r.$O)((0,r.s)((0,r.jn)(l)?"rgba(255,255,255,".concat(we,")"):"rgba(0,0,0,".concat(we,")"))):t})}))}}),(0,c.jsx)("div",{className:(0,r.AK)("relative z-10 container mx-auto",(0,r.bG)(null===A||void 0===A?void 0:A.spacing)),children:oe?(0,c.jsx)(Z.Z,{settings:G,globalSettings:U,className:"w-full flex flex-col items-center py-20",children:(null===A||void 0===A?void 0:A.successMessage)?(0,c.jsx)("div",{className:"rich-text-block max-w-5xl",style:{color:ue},dangerouslySetInnerHTML:{__html:A.successMessage}}):(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)("h3",{className:"heading-medium mb-5",style:{color:ue},children:"Message sent!"}),(0,c.jsx)("p",{className:"body-normal text-gray-600",style:{color:ue},children:"We'll get in touch with you as soon as possible."})]})}):(0,c.jsxs)(Z.Z,{settings:G,globalSettings:U,className:(0,r.AK)("flex flex-col w-full gap-10 lg:gap-20","left"===W?"lg:!flex-row-reverse":"lg:flex-row"),children:[(0,c.jsx)("div",{className:"w-full lg:w-1/2 lg:mt-10",children:(0,c.jsx)("div",{className:"rich-text-block",style:{color:ue},dangerouslySetInnerHTML:{__html:B}})}),(0,c.jsxs)("div",{className:"w-full lg:w-1/2",children:[ce&&(0,c.jsx)("div",{className:"rounded-md bg-red-50 p-4 mb-4",children:(0,c.jsxs)("div",{className:"flex",children:[(0,c.jsx)("div",{className:"flex-shrink-0",children:(0,c.jsx)(v.Z,{className:"h-5 w-5 text-red-400","aria-hidden":"true"})}),(0,c.jsx)("div",{className:"ml-3",children:(0,c.jsx)("p",{className:"text-sm font-medium text-red-800",children:ce})})]})}),(0,c.jsxs)("form",{className:"block",onSubmit:function(e){re(null),e.preventDefault(),ee(!0),he(!0)},noValidate:!0,children:[(0,c.jsxs)("div",{className:"flex flex-col lg:flex-row gap-4 mb-4",children:[(0,c.jsxs)("div",{className:"flex-1",children:[(0,c.jsx)("label",{className:"mb-1 body-small",style:{color:ue},children:$}),(0,c.jsx)("input",{className:"input border-none !shadow-none !ring-transparent !ring-transparent !placeholder-current",type:"text",value:le.name,onChange:function(e){return te((0,o.Z)((0,a.Z)({},le),{name:e.target.value}))},style:Ne}),!le.valid&&!le.name&&(0,c.jsx)("div",{className:"text-sm mt-1 text-red-500",children:"Provide a name"})]}),(0,c.jsxs)("div",{className:"flex-1",children:[(0,c.jsx)("label",{className:"mb-1 body-small",style:{color:ue},children:q}),(0,c.jsx)("input",{className:"input border-none !shadow-none !ring-transparent !placeholder-current",type:"text",value:le.email,onChange:function(e){return te((0,o.Z)((0,a.Z)({},le),{email:e.target.value}))},style:Ne}),!le.valid&&(!le.email||!(0,r.oH)(le.email))&&(0,c.jsx)("div",{className:"text-sm mt-1 text-red-500",children:"Provide a valid email"})]})]}),null===A||void 0===A||null===(l=A.fields)||void 0===l?void 0:l.map((function(e,n){return(0,c.jsxs)("div",{className:"mb-4",children:[(0,c.jsx)("label",{className:"mb-1 body-small",style:{color:ue},children:e.label}),(0,c.jsx)("input",{className:"input border-none !shadow-none !ring-transparent !placeholder-current",type:"text",required:e.required,value:le[e.label.toLowerCase()],onChange:function(n){return function(e,n){var l=(0,r.p$)(le);l[n.label.toLowerCase()]=e.target.value,te(l)}(n,e)},style:Ne}),!le.valid&&!le[e.label.toLowerCase()]&&e.required&&(0,c.jsxs)("div",{className:"text-sm mt-1 text-red-500",children:[e.label," is required"]})]},"custom-field-".concat(n))})),(null===le||void 0===le||null===(m=le.customFields)||void 0===m?void 0:m.length)>0&&(0,c.jsx)("div",{className:"flex flex-col lg:grid lg:grid-cols-2 gap-4 w-full mb-4",children:null===le||void 0===le||null===(N=le.customFields)||void 0===N?void 0:N.map((function(e,n){var l,t,s=null===(t=null===le||void 0===le||null===(l=le.customFields)||void 0===l?void 0:l.find((function(n){return n.Field===e.Field._id})))||void 0===t?void 0:t.value;switch(e.Field.type){case"text":var d;return(0,c.jsxs)("div",{className:(0,r.AK)(n%2===0&&n===(null===A||void 0===A||null===(d=A.customFields)||void 0===d?void 0:d.length)-1?"col-span-2":""),children:[(0,c.jsx)("label",{className:"mb-1 body-small",style:{color:ue},children:e.Field.name}),(0,c.jsx)("input",{className:"input border-none !shadow-none !ring-transparent !placeholder-current",name:e.Field.name,value:s||"",onChange:function(n){return Ce(e.Field._id,n.target.value)},type:"text",style:Ne})]},n);case"number":var u;return(0,c.jsxs)("div",{className:(0,r.AK)("w-full",n%2===0&&n===(null===A||void 0===A||null===(u=A.customFields)||void 0===u?void 0:u.length)-1?"col-span-2":""),children:[(0,c.jsx)("label",{className:"mb-1 body-small",style:{color:ue},children:e.Field.name}),(0,c.jsx)(L,{value:s||"",onChange:function(n){return Ce(e.Field._id,n.target.value)},thousandSeparator:!1,allowNegative:!0,decimalScale:0,allowLeadingZeros:!1,allowEmptyFormatting:!1,className:"input w-full border-none !shadow-none !ring-transparent !placeholder-current",style:Ne})]},n);case"money":var v;return(0,c.jsxs)("div",{className:(0,r.AK)("w-full",n%2===0&&n===(null===A||void 0===A||null===(v=A.customFields)||void 0===v?void 0:v.length)-1?"col-span-2":""),children:[(0,c.jsx)("label",{className:"mb-1 body-small",style:{color:ue},children:e.Field.name}),(0,c.jsx)(L,{value:s||"",onChange:function(n){return Ce(e.Field._id,n.target.value)},thousandSeparator:",",decimalSeparator:".",allowNegative:!0,decimalScale:2,prefix:"$",placeholder:"$0",allowLeadingZeros:!1,allowEmptyFormatting:!1,className:"input w-full border-none !shadow-none !ring-transparent !placeholder-current",style:Ne})]},n);case"date":var m;return(0,c.jsxs)("div",{className:(0,r.AK)("flex flex-col md:min-w-40 w-full",n%2===0&&n===(null===A||void 0===A||null===(m=A.customFields)||void 0===m?void 0:m.length)-1?"col-span-2":""),children:[(0,c.jsx)("label",{className:"mb-1 body-small",style:{color:ue},children:e.Field.name}),(0,c.jsx)(k,{className:"w-full flex-1",selected:s?new Date(s):null,onChange:function(n){return Ce(e.Field._id,b.ou.fromJSDate(n).startOf("day").toISO())},dateFormat:"MMM dd, yyyy",calendarClassName:"tailwind-calendar",customInput:(0,c.jsx)(h.Z,{className:"border-none !shadow-none !ring-transparent !placeholder-current",labelClass:"text-current",hint:b.ou.now().toFormat("DD"),onClear:function(){return Ce(e.Field._id,null)},style:Ne})})]},n);case"checkbox":var f,p;return(0,c.jsxs)("div",{className:(0,r.AK)("flex flex-col md:min-w-40 w-full",n%2===0&&n===(null===A||void 0===A||null===(f=A.customFields)||void 0===f?void 0:f.length)-1?"col-span-2":""),children:[(0,c.jsx)("label",{className:"mb-1 body-small",style:{color:ue},children:e.Field.name}),(0,c.jsx)("div",{className:"flex flex-wrap gap-x-6 gap-y-2",children:null===(p=e.Field.options)||void 0===p?void 0:p.map((function(n){return(0,c.jsxs)("label",{className:"inline-flex items-center",children:[(0,c.jsx)("input",{type:"checkbox",className:"mr-1",value:n.id,checked:!!(null===s||void 0===s?void 0:s.includes(n.id)),onChange:function(l){return function(e,n,l){var t=(0,i.Z)(le.customFields),s=null===t||void 0===t?void 0:t.find((function(n){return n.Field===e}));if(s||(s={Field:e,value:[]},t.push(s)),l)s.value.includes(n)||s.value.push(n);else{var c=s.value.indexOf(n);-1!==c&&s.value.splice(c,1)}te((function(e){return(0,o.Z)((0,a.Z)({},e),{customFields:t})}))}(e.Field._id,n.id,l.target.checked)}}),(0,c.jsx)("span",{style:{color:ue},children:n.name})]},n.id)}))})]},n);case"dropdown":var y;return(0,c.jsxs)("div",{className:(0,r.AK)("flex flex-col md:min-w-40 w-full",n%2===0&&n===(null===A||void 0===A||null===(y=A.customFields)||void 0===y?void 0:y.length)-1?"col-span-2":""),children:[(0,c.jsx)("label",{className:"mb-1 body-small text-current",style:{color:ue},children:e.Field.name}),(0,c.jsx)(g.Z,{className:"w-full",btnClassName:"border-none !shadow-none !ring-transparent !placeholder-current",value:s?e.Field.options.find((function(e){return e.id===s})):e.Field.options[0],onChange:function(n){return Ce(e.Field._id,n.id)},values:e.Field.options,style:Ne,iconStyle:{color:ue}},n)]},n);case"rating":var w;return(0,c.jsxs)("div",{className:(0,r.AK)("flex flex-col md:min-w-40 w-full",n%2===0&&n===(null===A||void 0===A||null===(w=A.customFields)||void 0===w?void 0:w.length)-1?"col-span-2":""),children:[(0,c.jsx)("label",{className:"mb-1 body-small",style:{color:ue},children:e.Field.name}),(0,c.jsx)(x.Z,{className:"flex mt-2",rating:s||0,setRating:function(n){return Ce(e.Field._id,n)}})]},n)}}))}),(0,c.jsxs)("div",{className:"mb-4",children:[(0,c.jsx)("label",{className:"mb-1 body-small",style:{color:ue},children:I}),(0,c.jsx)("textarea",{className:"input border-none !shadow-none !ring-transparent !placeholder-current",placeholder:"",rows:"5",value:le.message,onChange:function(e){return te((0,o.Z)((0,a.Z)({},le),{message:e.target.value}))},style:Ne}),!le.valid&&!le.message&&(0,c.jsx)("div",{className:"text-sm mt-1 text-red-500",children:"Provide a message"})]}),(0,c.jsxs)("div",{className:"flex flex-col md:flex-row justify-between items-start gap-4",children:[(0,c.jsxs)("div",{className:"text-xs max-w-sm text-gray-500",style:{color:ue},children:["This site is protected by reCAPTCHA and the Google",(0,c.jsx)(f(),{href:"https://policies.google.com/privacy",children:(0,c.jsx)("a",{target:"_blank",className:"font-bold",style:{color:ue},children:" Privacy Policy"})})," and",(0,c.jsx)(f(),{href:"https://policies.google.com/terms",children:(0,c.jsx)("a",{target:"_blank",className:"font-bold",style:{color:ue},children:" Terms of Service"})})," apply."]}),(0,c.jsx)(u.Z,{type:"submit",button:(0,o.Z)((0,a.Z)({},null===A||void 0===A?void 0:A.button),{label:z}),block:A,website:E,loading:Y,disabled:!xe,className:"lg w-36 mt-2 md:mt-0 truncate"})]}),xe&&(0,c.jsx)(C,{execute:fe,sitekey:K,onChange:Ze})]})]})]})}),(0,c.jsx)(w.iz,{contentRef:Q,divider:V,previousDivider:null===T||void 0===T?void 0:T.divider,border:J,previousBorder:null===T||void 0===T?void 0:T.border,dividerUniqueId:"".concat(R,"-").concat(V)})]}),J&&(0,c.jsx)(j.OC,{contentRef:Q,border:J,sectionDivider:V})]})}},399:function(e,n,l){l.d(n,{Z:function(){return a}});var t=l(67294);function a(e){var n,l,a=(0,t.useState)(0),o=a[0],i=a[1],s=(0,t.useState)([0,0]),c=s[0],r=s[1];return(0,t.useEffect)((function(){var e=function(){r([window.innerWidth,window.innerHeight])};return window.addEventListener("resize",e),e(),function(){return window.removeEventListener("resize",e)}}),[]),(0,t.useEffect)((function(){var n;e&&i(1===e.idx?(null===(n=null===document||void 0===document?void 0:document.getElementById("website-header"))||void 0===n?void 0:n.offsetHeight)||80:0)}),[e,c]),{minHeight:(null===e||void 0===e||null===(n=e.spacing)||void 0===n?void 0:n.minHeight)?"calc(".concat("min-h-screen"===(null===e||void 0===e||null===(l=e.spacing)||void 0===l?void 0:l.minHeight)?"100vh":"134px"," - ").concat((null===e||void 0===e?void 0:e.combineWithHeader)?0:o,"px)"):"134px",headerHeight:o}}}}]);