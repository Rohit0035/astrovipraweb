(this["webpackJsonpflone-react"]=this["webpackJsonpflone-react"]||[]).push([[37],{560:function(e,a,t){"use strict";e.exports=t(582)},561:function(e,a,t){"use strict";function n(e,a){if(null==e)return{};var t,n,l=function(e,a){if(null==e)return{};var t,n,l={},r=Object.keys(e);for(n=0;n<r.length;n++)t=r[n],a.indexOf(t)>=0||(l[t]=e[t]);return l}(e,a);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)t=r[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(l[t]=e[t])}return l}t.d(a,"a",(function(){return n}))},563:function(e,a,t){"use strict";var n=t(0),l=t.n(n),r=t(4),c=t(185);a.a=function(){return l.a.createElement("div",{className:"breadcrumb-area pt-10 pb-10 bg-gray-5"},l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"breadcrumb-content text-center"},l.a.createElement(c.Breadcrumbs,{separator:l.a.createElement("span",null,"/"),item:r.c,finalItem:"span"}))))}},565:function(e,a,t){"use strict";t.d(a,"a",(function(){return r})),t.d(a,"b",(function(){return c}));t(15);var n=t(0),l=(t(560),n.createContext({prefixes:{}}));l.Consumer,l.Provider;function r(e,a){var t=Object(n.useContext)(l).prefixes;return e||t[a]||a}function c(){return"rtl"===Object(n.useContext)(l).dir}},579:function(e,a,t){"use strict";var n=t(15),l=t(561),r=t(55),c=t.n(r),s=/-(.)/g;var i=t(0),o=t(565),m=t(560);t.d(a,"a",(function(){return b}));var d=["className","bsPrefix","as"],u=function(e){return e[0].toUpperCase()+(a=e,a.replace(s,(function(e,a){return a.toUpperCase()}))).slice(1);var a};function b(e){var a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},t=a.displayName,r=void 0===t?u(e):t,s=a.Component,b=a.defaultProps,f=i.forwardRef((function(a,t){var r=a.className,i=a.bsPrefix,u=a.as,b=void 0===u?s||"div":u,f=Object(l.a)(a,d),p=Object(o.a)(i,e);return Object(m.jsx)(b,Object(n.a)({ref:t,className:c()(r,p)},f))}));return f.defaultProps=b,f.displayName=r,f}},582:function(e,a,t){"use strict";t(139);var n=t(0),l=60103;if(a.Fragment=60107,"function"===typeof Symbol&&Symbol.for){var r=Symbol.for;l=r("react.element"),a.Fragment=r("react.fragment")}var c=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,s=Object.prototype.hasOwnProperty,i={key:!0,ref:!0,__self:!0,__source:!0};function o(e,a,t){var n,r={},o=null,m=null;for(n in void 0!==t&&(o=""+t),void 0!==a.key&&(o=""+a.key),void 0!==a.ref&&(m=a.ref),a)s.call(a,n)&&!i.hasOwnProperty(n)&&(r[n]=a[n]);if(e&&e.defaultProps)for(n in a=e.defaultProps)void 0===r[n]&&(r[n]=a[n]);return{$$typeof:l,type:e,key:o,ref:m,props:r,_owner:c.current}}a.jsx=o,a.jsxs=o},607:function(e,a,t){"use strict";var n=t(0),l=n.createContext(null);l.displayName="CardHeaderContext",a.a=l},713:function(e,a,t){"use strict";var n=t(15),l=t(0),r=t(55),c=t.n(r),s=t(560);a.a=function(e){return l.forwardRef((function(a,t){return Object(s.jsx)("div",Object(n.a)(Object(n.a)({},a),{},{ref:t,className:c()(a.className,e)}))}))}},715:function(e,a,t){"use strict";var n=t(7),l=t(11),r=t(188),c=t(16),s=t(0),i=t.n(s),o=t(3),m=t.n(o),d=t(55),u=t.n(d),b=t(30),f=["className","cssModule","inline","tag","innerRef"],p={children:m.a.node,inline:m.a.bool,tag:b.n,innerRef:m.a.oneOfType([m.a.object,m.a.func,m.a.string]),className:m.a.string,cssModule:m.a.object},E=function(e){function a(a){var t;return(t=e.call(this,a)||this).getRef=t.getRef.bind(Object(r.a)(t)),t.submit=t.submit.bind(Object(r.a)(t)),t}Object(c.a)(a,e);var t=a.prototype;return t.getRef=function(e){this.props.innerRef&&this.props.innerRef(e),this.ref=e},t.submit=function(){this.ref&&this.ref.submit()},t.render=function(){var e=this.props,a=e.className,t=e.cssModule,r=e.inline,c=e.tag,s=e.innerRef,o=Object(l.a)(e,f),m=Object(b.j)(u()(a,!!r&&"form-inline"),t);return i.a.createElement(c,Object(n.a)({},o,{ref:s,className:m}))},a}(s.Component);E.propTypes=p,E.defaultProps={tag:"form"},a.a=E},787:function(e,a,t){e.exports=t.p+"static/media/userpic.98fd5107.png"},896:function(e,a,t){"use strict";t.r(a);var n=t(186),l=t(104),r=t(105),c=t(106),s=t(107),i=t(0),o=t.n(i),m=(t(185),t(15)),d=t(561),u=t(55),b=t.n(u),f=t(565),p=t(579),E=t(713),v=t(560),g=["bsPrefix","className","variant","as"],h=i.forwardRef((function(e,a){var t=e.bsPrefix,n=e.className,l=e.variant,r=e.as,c=void 0===r?"img":r,s=Object(d.a)(e,g),i=Object(f.a)(t,"card-img");return Object(v.jsx)(c,Object(m.a)({ref:a,className:b()(l?"".concat(i,"-").concat(l):i,n)},s))}));h.displayName="CardImg";var y=h,N=t(607),O=["bsPrefix","className","as"],j=i.forwardRef((function(e,a){var t=e.bsPrefix,n=e.className,l=e.as,r=void 0===l?"div":l,c=Object(d.a)(e,O),s=Object(f.a)(t,"card-header"),o=Object(i.useMemo)((function(){return{cardHeaderBsPrefix:s}}),[s]);return Object(v.jsx)(N.a.Provider,{value:o,children:Object(v.jsx)(r,Object(m.a)(Object(m.a)({ref:a},c),{},{className:b()(n,s)}))})}));j.displayName="CardHeader";var x=j,C=["bsPrefix","className","bg","text","border","body","children","as"],w=Object(E.a)("h5"),P=Object(E.a)("h6"),k=Object(p.a)("card-body"),S=Object(p.a)("card-title",{Component:w}),R=Object(p.a)("card-subtitle",{Component:P}),H=Object(p.a)("card-link",{Component:"a"}),_=Object(p.a)("card-text",{Component:"p"}),I=Object(p.a)("card-footer"),M=Object(p.a)("card-img-overlay"),A=i.forwardRef((function(e,a){var t=e.bsPrefix,n=e.className,l=e.bg,r=e.text,c=e.border,s=e.body,i=e.children,o=e.as,u=void 0===o?"div":o,p=Object(d.a)(e,C),E=Object(f.a)(t,"card");return Object(v.jsx)(u,Object(m.a)(Object(m.a)({ref:a},p),{},{className:b()(n,E,l&&"bg-".concat(l),r&&"text-".concat(r),c&&"border-".concat(c)),children:s?Object(v.jsx)(k,{children:i}):i}))}));A.displayName="Card",A.defaultProps={body:!1};var B=Object.assign(A,{Img:y,Title:S,Subtitle:R,Body:k,Link:H,Text:_,Header:x,Footer:I,ImgOverlay:M}),F=t(138),L=(t(563),t(558)),T=t(553),D=t(183),U=t(715),J=t(56),$=t.n(J),z=t(787),V=t.n(z);t.d(a,"default",(function(){return W}));var W=function(e){Object(c.a)(t,e);var a=Object(s.a)(t);function t(e){var r;return Object(l.a)(this,t),(r=a.call(this,e)).submitHandler=function(e){e.preventDefault(),$.a.post("http://13.235.180.192/api/user/editcustomer",r.state,{headers:{"auth-token":localStorage.getItem("auth-token")}}).then((function(e){console.log(e)})).catch((function(e){console.log(e.response)}))},r.addAddress=function(e){e.preventDefault(),console.log(r.state),$.a.post("http://13.235.180.192/api/user/addcus_address",r.state,{headers:{"auth-token":localStorage.getItem("auth-token")}}).then((function(e){console.log(e)})).catch((function(e){console.log(e.response)}))},r.changeHandler=function(e){r.setState(Object(n.a)({},e.target.name,e.target.value))},r.state={fullname:"",email:"",mobile:"",userimg:"",address:"",locality:"",pincode:"",city:"",state:""},r}return Object(r.a)(t,[{key:"componentDidMount",value:function(){var e=this,a=this.props.match.params.id;console.log(this.state),$.a.get("http://13.235.180.192/user/viewoneuser/".concat(a),{headers:{"auth-token":localStorage.getItem("auth-token")}}).then((function(a){console.log(a),e.setState({firstname:a.data.data.firstname}),console.log(e.state)})).catch((function(e){console.log(e.response)})),$.a.get("http://13.235.180.192/api/user/viewoneuseraddress",{headers:{"auth-token":localStorage.getItem("auth-token")}}).then((function(a){console.log(a),e.setState({address:a.data.data.address,locality:a.data.data.locality,pincode:a.data.data.pincode,city:a.data.data.city,state:a.data.data.state}),console.log(e.state)})).catch((function(e){console.log(e.response)}))}},{key:"render",value:function(){return o.a.createElement(i.Fragment,null,o.a.createElement(F.a,{headerTop:"visible"},o.a.createElement("section",{className:"pt-0 pb-0"},o.a.createElement("div",{className:"",style:{backgroundColor:"#FFD59E",width:"100%",padding:"70px 0px",backgroundSize:"cover"}},o.a.createElement(L.a,null,o.a.createElement(T.a,null,o.a.createElement(D.a,{md:"12"},o.a.createElement("div",{className:"leftcont text-left"},o.a.createElement("h1",null,"My Account Information"))))))),o.a.createElement("div",{className:"myaccount-area pb-80 pt-100"},o.a.createElement("div",{className:"container"},o.a.createElement("div",{className:"row"},o.a.createElement("div",{class:"col-lg-4"},o.a.createElement(B.Body,{className:"usr-1"},o.a.createElement("div",{className:"user-pro"},o.a.createElement("img",{src:V.a,alt:""}),o.a.createElement("ul",null,o.a.createElement("li",null,"Name :    ",o.a.createElement("span",null,this.state.fullname)),o.a.createElement("li",null,"Mobile :    ",o.a.createElement("span",null,"4454544545")),o.a.createElement("li",null,"Email :    ",o.a.createElement("span",null,"Test@gmail.com")),o.a.createElement("li",null,"DOB :    ",o.a.createElement("span",null,"02/02/2022")),o.a.createElement("li",null,"State :    ",o.a.createElement("span",null,"MP")),o.a.createElement("li",null,"City :    ",o.a.createElement("span",null,"Indore")),o.a.createElement("li",null,"Address :    ",o.a.createElement("span",null,"Vijay Nagar")),o.a.createElement("li",null,"Locality :    ",o.a.createElement("span",null,"Indore")),o.a.createElement("li",null,"Pin Code :    ",o.a.createElement("span",null,"452001")))))),o.a.createElement("div",{className:"col-lg-8"},o.a.createElement("div",{className:"myaccount-wrapper"},o.a.createElement(B,{className:"single-my-account mb-20"},o.a.createElement(B.Header,{className:"panel-heading"}),o.a.createElement(B.Body,{className:"usr-1"},o.a.createElement(U.a,{onSubmit:this.submitHandler},o.a.createElement("div",{className:"myaccount-info-wrapper"},o.a.createElement("div",{className:"account-info-wrapper"},o.a.createElement("h4",null,"My Account Information")),o.a.createElement("div",{className:"row"},o.a.createElement("div",{className:"col-lg-6 col-md-6"},o.a.createElement("div",{className:"billing-info"},o.a.createElement("label",null,"First Name"),o.a.createElement("input",{type:"text",placeholder:"First Name",name:"firstname",value:this.state.firstname,onChange:this.changeHandler}))),o.a.createElement("div",{className:"col-lg-6 col-md-6"},o.a.createElement("div",{className:"billing-info"},o.a.createElement("label",null,"Last Name"),o.a.createElement("input",{type:"text",placeholder:"Last Name",name:"lastname",value:this.state.lastname,onChange:this.changeHandler}))),o.a.createElement("div",{className:"col-lg-6 col-md-6"},o.a.createElement("div",{className:"billing-info"},o.a.createElement("label",null,"Email Address"),o.a.createElement("input",{readOnly:!0,type:"email",placeholder:"Customer Email",name:"email",value:this.state.email,onChange:this.changeHandler}))),o.a.createElement("div",{className:"col-lg-6 col-md-6"},o.a.createElement("div",{className:"billing-info"},o.a.createElement("label",null,"Mobile Number"),o.a.createElement("input",{readOnly:!0,type:"number",name:"mobile",value:this.state.mobile,onChange:this.changeHandler})))),o.a.createElement("div",{className:"billing-back-btn"},o.a.createElement("div",{className:"billing-btn"},o.a.createElement("button",{type:"submit"},"Continue"))))))),o.a.createElement(B,{className:"single-my-account mb-20"},o.a.createElement(B.Body,{className:"usr-1"},o.a.createElement(U.a,{onSubmit:this.addAddress},o.a.createElement("div",{className:"myaccount-info-wrapper"},o.a.createElement("div",{className:"account-info-wrapper"},o.a.createElement("h4",null,"My Address")),o.a.createElement("div",{className:"row"},o.a.createElement("div",{className:"col-lg-6 col-md-6"},o.a.createElement("div",{className:"billing-info"},o.a.createElement("label",null,"Address"),o.a.createElement("input",{type:"textarea",placeholder:"Address",name:"address",value:this.state.address,onChange:this.changeHandler}))),o.a.createElement("div",{className:"col-lg-6 col-md-6"},o.a.createElement("div",{className:"billing-info"},o.a.createElement("label",null,"Locality"),o.a.createElement("input",{type:"text",placeholder:"Locality",name:"locality",value:this.state.locality,onChange:this.changeHandler}))),o.a.createElement("div",{className:"col-lg-6 col-md-6"},o.a.createElement("div",{className:"billing-info"},o.a.createElement("label",null,"Pin Code"),o.a.createElement("input",{type:"number",placeholder:"Pin Code",name:"pincode",value:this.state.pincode,onChange:this.changeHandler}))),o.a.createElement("div",{className:"col-lg-6 col-md-6"},o.a.createElement("div",{className:"billing-info"},o.a.createElement("label",null,"City"),o.a.createElement("input",{type:"text",placeholder:"city",name:"city",value:this.state.city,onChange:this.changeHandler}))),o.a.createElement("div",{className:"col-lg-6 col-md-6"},o.a.createElement("div",{className:"billing-info"},o.a.createElement("label",null,"State"),o.a.createElement("input",{type:"text",placeholder:"State",name:"state",value:this.state.state,onChange:this.changeHandler})))),o.a.createElement("div",{className:"billing-back-btn"},o.a.createElement("div",{className:"billing-btn"},o.a.createElement("button",{type:"submit"},"Continue"))))))),o.a.createElement(B,{className:"single-my-account mb-20"},o.a.createElement(B.Body,{className:"usr-1"},o.a.createElement(U.a,{onSubmit:this.addAddress},o.a.createElement("div",{className:"myaccount-info-wrapper"},o.a.createElement("div",{className:"account-info-wrapper"},o.a.createElement("h4",null,"My Orders")),o.a.createElement("div",{className:"row"}),o.a.createElement("div",{className:"billing-back-btn"},o.a.createElement("div",{className:"billing-btn"},o.a.createElement("button",{type:"submit"},"Continue"))))))))))))))}}]),t}(i.Component)}}]);
//# sourceMappingURL=37.6a5c0cbb.chunk.js.map