(this["webpackJsonpflone-react"]=this["webpackJsonpflone-react"]||[]).push([[77],{560:function(e,t,a){"use strict";e.exports=a(582)},582:function(e,t,a){"use strict";a(139);var n=a(0),r=60103;if(t.Fragment=60107,"function"===typeof Symbol&&Symbol.for){var o=Symbol.for;r=o("react.element"),t.Fragment=o("react.fragment")}var c=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l=Object.prototype.hasOwnProperty,s={key:!0,ref:!0,__self:!0,__source:!0};function i(e,t,a){var n,o={},i=null,u=null;for(n in void 0!==a&&(i=""+a),void 0!==t.key&&(i=""+t.key),void 0!==t.ref&&(u=t.ref),t)l.call(t,n)&&!s.hasOwnProperty(n)&&(o[n]=t[n]);if(e&&e.defaultProps)for(n in t=e.defaultProps)void 0===o[n]&&(o[n]=t[n]);return{$$typeof:r,type:e,key:i,ref:u,props:o,_owner:c.current}}t.jsx=i,t.jsxs=i},704:function(e,t,a){"use strict";var n=a(15),r=a(561),o=a(55),c=a.n(o),l=a(0),s=a.n(l),i=a(594),u=a(565),m=a(186),d=a(583),f=a(25),b=a(590);var y,v=function(){for(var e=arguments.length,t=new Array(e),a=0;a<e;a++)t[a]=arguments[a];return t.filter((function(e){return null!=e})).reduce((function(e,t){if("function"!==typeof t)throw new Error("Invalid Argument Type, must only provide functions, undefined, or null.");return null===e?t:function(){for(var a=arguments.length,n=new Array(a),r=0;r<a;r++)n[r]=arguments[r];e.apply(this,n),t.apply(this,n)}}),null)},j=a(589),h=a(595),p=a(560),O=["onEnter","onEntering","onEntered","onExit","onExiting","className","children","dimension","getDimensionValue"],g={height:["marginTop","marginBottom"],width:["marginLeft","marginRight"]};function E(e,t){var a=t["offset".concat(e[0].toUpperCase()).concat(e.slice(1))],n=g[e];return a+parseInt(Object(d.a)(t,n[0]),10)+parseInt(Object(d.a)(t,n[1]),10)}var x=(y={},Object(m.a)(y,f.c,"collapse"),Object(m.a)(y,f.d,"collapsing"),Object(m.a)(y,f.b,"collapsing"),Object(m.a)(y,f.a,"collapse show"),y),N={in:!1,timeout:300,mountOnEnter:!1,unmountOnExit:!1,appear:!1,getDimensionValue:E},w=s.a.forwardRef((function(e,t){var a=e.onEnter,o=e.onEntering,i=e.onEntered,u=e.onExit,m=e.onExiting,d=e.className,f=e.children,y=e.dimension,g=void 0===y?"height":y,N=e.getDimensionValue,w=void 0===N?E:N,C=Object(r.a)(e,O),k="function"===typeof g?g():g,P=Object(l.useMemo)((function(){return v((function(e){e.style[k]="0"}),a)}),[k,a]),K=Object(l.useMemo)((function(){return v((function(e){var t="scroll".concat(k[0].toUpperCase()).concat(k.slice(1));e.style[k]="".concat(e[t],"px")}),o)}),[k,o]),I=Object(l.useMemo)((function(){return v((function(e){e.style[k]=null}),i)}),[k,i]),A=Object(l.useMemo)((function(){return v((function(e){e.style[k]="".concat(w(k,e),"px"),Object(j.a)(e)}),u)}),[u,w,k]),_=Object(l.useMemo)((function(){return v((function(e){e.style[k]=null}),m)}),[k,m]);return Object(p.jsx)(h.a,Object(n.a)(Object(n.a)({ref:t,addEndListener:b.a},C),{},{"aria-expanded":C.role?C.in:null,onEnter:P,onEntering:K,onEntered:I,onExit:A,onExiting:_,childRef:f.ref,children:function(e,t){return s.a.cloneElement(f,Object(n.a)(Object(n.a)({},t),{},{className:c()(d,f.props.className,x[e],"width"===k&&"collapse-horizontal")}))}}))}));w.defaultProps=N;var C=w,k=l.createContext({});k.displayName="AccordionContext";var P=k,K=["as","bsPrefix","className","children","eventKey"],I=l.forwardRef((function(e,t){var a=e.as,o=void 0===a?"div":a,s=e.bsPrefix,i=e.className,m=e.children,d=e.eventKey,f=Object(r.a)(e,K),b=Object(l.useContext)(P).activeEventKey;return s=Object(u.a)(s,"accordion-collapse"),Object(p.jsx)(C,Object(n.a)(Object(n.a)({ref:t,in:b===d},f),{},{className:c()(i,s),children:Object(p.jsx)(o,{children:l.Children.only(m)})}))}));I.displayName="AccordionCollapse";var A=I,_=l.createContext({eventKey:""});_.displayName="AccordionItemContext";var R=_,S=["as","bsPrefix","className"],B=l.forwardRef((function(e,t){var a=e.as,o=void 0===a?"div":a,s=e.bsPrefix,i=e.className,m=Object(r.a)(e,S);s=Object(u.a)(s,"accordion-body");var d=Object(l.useContext)(R).eventKey;return Object(p.jsx)(A,{eventKey:d,children:Object(p.jsx)(o,Object(n.a)(Object(n.a)({ref:t},m),{},{className:c()(i,s)}))})}));B.displayName="AccordionBody";var D=B,H=["as","bsPrefix","className","onClick"];var M=l.forwardRef((function(e,t){var a=e.as,o=void 0===a?"button":a,s=e.bsPrefix,i=e.className,m=e.onClick,d=Object(r.a)(e,H);s=Object(u.a)(s,"accordion-button");var f=Object(l.useContext)(R).eventKey,b=function(e,t){var a=Object(l.useContext)(P),n=a.activeEventKey,r=a.onSelect;return function(a){r&&r(e===n?null:e,a),t&&t(a)}}(f,m),y=Object(l.useContext)(P).activeEventKey;return"button"===o&&(d.type="button"),Object(p.jsx)(o,Object(n.a)(Object(n.a)({ref:t,onClick:b},d),{},{"aria-expanded":f===y,className:c()(i,s,f!==y&&"collapsed")}))}));M.displayName="AccordionButton";var F=M,T=["as","bsPrefix","className","children","onClick"],L=l.forwardRef((function(e,t){var a=e.as,o=void 0===a?"h2":a,l=e.bsPrefix,s=e.className,i=e.children,m=e.onClick,d=Object(r.a)(e,T);return l=Object(u.a)(l,"accordion-header"),Object(p.jsx)(o,Object(n.a)(Object(n.a)({ref:t},d),{},{className:c()(s,l),children:Object(p.jsx)(F,{onClick:m,children:i})}))}));L.displayName="AccordionHeader";var U=L,V=["as","bsPrefix","className","eventKey"],Y=l.forwardRef((function(e,t){var a=e.as,o=void 0===a?"div":a,s=e.bsPrefix,i=e.className,m=e.eventKey,d=Object(r.a)(e,V);s=Object(u.a)(s,"accordion-item");var f=Object(l.useMemo)((function(){return{eventKey:m}}),[m]);return Object(p.jsx)(R.Provider,{value:f,children:Object(p.jsx)(o,Object(n.a)(Object(n.a)({ref:t},d),{},{className:c()(i,s)}))})}));Y.displayName="AccordionItem";var q=Y,J=["as","activeKey","bsPrefix","className","onSelect","flush"],W=l.forwardRef((function(e,t){var a=Object(i.a)(e,{activeKey:"onSelect"}),o=a.as,s=void 0===o?"div":o,m=a.activeKey,d=a.bsPrefix,f=a.className,b=a.onSelect,y=a.flush,v=Object(r.a)(a,J),j=Object(u.a)(d,"accordion"),h=Object(l.useMemo)((function(){return{activeEventKey:m,onSelect:b}}),[m,b]);return Object(p.jsx)(P.Provider,{value:h,children:Object(p.jsx)(s,Object(n.a)(Object(n.a)({ref:t},v),{},{className:c()(f,j,y&&"".concat(j,"-flush"))}))})}));W.displayName="Accordion";t.a=Object.assign(W,{Button:F,Collapse:A,Item:q,Header:U,Body:D})},856:function(e,t,a){"use strict";a.r(t),a.d(t,"FaqPage",(function(){return v}));var n=a(104),r=a(105),o=a(106),c=a(107),l=a(0),s=a.n(l),i=a(558),u=a(553),m=a(183),d=a(138),f=(a(690),a(704)),b=a(187),y=a.n(b),v=function(e){Object(o.a)(a,e);var t=Object(c.a)(a);function a(){return Object(n.a)(this,a),t.apply(this,arguments)}return Object(r.a)(a,[{key:"render",value:function(){return s.a.createElement(d.a,null,s.a.createElement(i.a,{fluid:!0},s.a.createElement(u.a,{className:"mb-5"},s.a.createElement("div",{className:"headingtitle text-center ptb-40"},s.a.createElement("h2",null,"FAQS For AstroVipra"),s.a.createElement("img",{src:y.a,alt:"",className:"sb-img"}))),s.a.createElement(u.a,{className:""},s.a.createElement(m.a,{xs:!0,lg:"2"}),s.a.createElement(m.a,{xs:!0,lg:"8"},s.a.createElement(f.a,null,s.a.createElement(f.a.Item,{eventKey:"0",className:"m-4"},s.a.createElement(f.a.Header,null,"I recharged my wallet, how do I call astrologer now?"),s.a.createElement(f.a.Body,null,"After login/registering with our website, you just need to recharge wallet, select the astrologer you want to consult and enter your mobile number. You will receive call from the astrologer within 2 minutes.")),s.a.createElement(f.a.Item,{eventKey:"1",className:"m-4"},s.a.createElement(f.a.Header,null,"I didn\u2019t received call from astrologer after entering phone number in \u201ccall now\u201d button, what to do?"),s.a.createElement(f.a.Body,null,"Don\u2019t worry. Sometimes it happens that astrologer might busy with another customer. If you don\u2019t receive call with in 2 minutes after requesting call, you can request again.")))),s.a.createElement(m.a,{xs:!0,lg:"2"})),s.a.createElement(u.a,{className:""},s.a.createElement(m.a,{xs:!0,lg:"2"}),s.a.createElement(m.a,{xs:!0,lg:"8"},s.a.createElement(f.a,null,s.a.createElement(f.a.Item,{eventKey:"0",className:"m-4"},s.a.createElement(f.a.Header,null,"What if my astrologer is offline?"),s.a.createElement(f.a.Body,null,"There might be chances that astrologer prefer to offline due to some reasons. You can choose to talk to any other astrologer on call. But if you want to talk to particular astrologer only, you can call our customer care number and check availability of the astrologer(s).")),s.a.createElement(f.a.Item,{eventKey:"1",className:"m-4"},s.a.createElement(f.a.Header,null,"Can I talk to astrologer(s) without registering?"),s.a.createElement(f.a.Body,null,"No, you must have to register with our website to talk to astrologer on astrolaabh.in. Registering with Astrolaabh is super easy, just click on register now button, fill the details and you can instantly talk to astrologer.")),s.a.createElement(f.a.Item,{eventKey:"3",className:"m-4"},s.a.createElement(f.a.Header,null,"Do you accept payments via credit cards?"),s.a.createElement(f.a.Body,null,"Yes, we do accept payments via all major credit cards/ debit cards/ net banking/ UPI, wallet payments, Paytm and all other options available to make payments to Astrolaabh.in.")))),s.a.createElement(m.a,{xs:!0,lg:"2"}))))}}]),a}(l.Component);t.default=v}}]);
//# sourceMappingURL=77.3229d323.chunk.js.map