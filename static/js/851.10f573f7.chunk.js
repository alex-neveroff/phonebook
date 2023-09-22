"use strict";(self.webpackChunkphonebook=self.webpackChunkphonebook||[]).push([[851],{2851:function(n,e,o){o.r(e),o.d(e,{default:function(){return G}});var t,a,r,i,c,s,l,d,u=o(2791),p=o(9434),m=o(9439),x=o(9135),h=o(168),f=o(7686),b=o(9499),w=o(171),g=f.Z.li(t||(t=(0,h.Z)(["\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  font-size: 18px;\n\n  .contact-align {\n    display: flex;\n    flex-direction: column;\n    width: 85%;\n    gap: 5px;\n    @media screen and (min-width: 768px) {\n      flex-direction: row;\n      justify-content: space-between;\n      align-items: center;\n    }\n  }\n\n  .contact-number {\n    font-weight: 500;\n  }\n  .button-wrap {\n    display: flex;\n    gap: 4px;\n  }\n  .contact-button {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    cursor: pointer;\n    width: 24px;\n    height: 24px;\n    border: none;\n    padding: 0;\n\n    background-color: transparent;\n\n    color: ",";\n    transition: color ",",\n      box-shadow ",";\n\n    &:hover,\n    &:focus {\n      box-shadow: 0px 0px 15px ",";\n      outline: none;\n      color: ",";\n    }\n    &:active {\n      color: ",";\n    }\n  }\n  .icon {\n    display: block;\n    width: 70%;\n    height: 70%;\n    pointer-events: none;\n    stroke: currentColor;\n    fill: currentColor;\n  }\n"])),w.O.primary,b.p.transition,b.p.transition,w.O.focusShadow,w.O.iconHover,w.O.iconActive),v=o(6052),j=f.Z.div(a||(a=(0,h.Z)(["\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100vw;\n  height: 100vh;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  z-index: 150;\n"]))),y=f.Z.div(r||(r=(0,h.Z)(["\n  padding: 20px;\n  border-radius: 10px;\n  background-color: ",";\n  overflow: hidden;\n  box-shadow: 0px 0px 10px ",";\n  @media screen and (min-width: 768px) {\n    width: 450px;\n  }\n\n  .modal-content {\n    max-width: calc(100vw - 48px);\n    max-height: calc(100vh - 24px);\n  }\n"])),w.O.backgroundMain,w.O.mainShadow),C=o(184),N=function(n){var e=n.onClose,o=n.children;(0,u.useEffect)((function(){var n=function(n){"Escape"===n.code&&e()};return window.addEventListener("keydown",n),function(){window.removeEventListener("keydown",n)}}),[e]);return(0,C.jsx)(j,{onClick:function(n){n.currentTarget===n.target&&e()},children:(0,C.jsx)(y,{children:o})})},k=o(1538),O=f.Z.form(i||(i=(0,h.Z)(["\n  display: flex;\n  flex-direction: column;\n  gap: 30px;\n  margin: 0 auto;\n\n  .form-label {\n    display: flex;\n    flex-direction: column;\n    gap: 10px;\n    font-size: 18px;\n    font-weight: bold;\n  }\n\n  .form-input {\n    height: 30px;\n    padding-left: 10px;\n    border: none;\n    border-radius: 7px;\n    background-color: ",";\n    color: ",";\n    box-shadow: 0px 0px 10px ",";\n    transition: box-shadow ",";\n    &:focus {\n      box-shadow: 0px 0px 10px ",";\n      outline: none;\n    }\n  }\n  .form-submit {\n    height: 30px;\n    border: none;\n    border-radius: 7px;\n    margin-top: 15px;\n    background-color: ",";\n    color: ",";\n    box-shadow: 5px 5px 5px ",";\n    font-size: 16px;\n    font-weight: bold;\n    cursor: pointer;\n    transition: box-shadow ",",\n      background-color ",",\n      transform ",";\n    &:hover {\n      background-color: ",";\n      box-shadow: 5px 5px 5px ",";\n    }\n    &:active {\n      transform: scale(0.95);\n      box-shadow: 1px 2px 2px ",";\n    }\n  }\n"])),w.O.backgroundMain,w.O.primary,w.O.mainShadow,b.p.transition,w.O.focusShadow,w.O.headerBcg,w.O.primary,w.O.mainShadow,b.p.transition,b.p.transition,b.p.transition,w.O.mainShadow,w.O.focusShadow,w.O.focusShadow),Z=function(n){return n.contacts.contacts},S=function(n){return n.contacts.isLoading},z=function(n){return n.contacts.isShowAddModal},A=function(n){return n.contacts.isShowEditModal},F=function(n){return n.contacts.error},M=function(n){return n.contacts.filter},L=o(1686),T=function(n){var e=n.contact,o=e.name,t=e.number,a=e._id,r=(0,u.useState)(o),i=(0,m.Z)(r,2),c=i[0],s=i[1],l=(0,u.useState)(t),d=(0,m.Z)(l,2),x=d[0],h=d[1],f=(0,p.v9)(Z),b=(0,p.I0)(),w=function(n){var e=n.currentTarget,o=e.name,t=e.value;"name"===o?s(t):"number"===o&&h(t)},g=function(){s(""),h("")};return(0,C.jsxs)(O,{onSubmit:function(n){if(n.preventDefault(),""!==c.trim()&&""!==x.trim()){var e=c.trim().toLowerCase(),o=x.trim(),t=f.some((function(n){return n.name.toLowerCase()===e&&n.number===o}));t?L.Notify.failure("".concat(c.trim()," with phone ").concat(x.trim()," is already in phonebook.")):(b((0,v.mP)({contactId:a,name:c.trim(),number:x.trim()})),b((0,k.TC)(!1)),g())}else b((0,k.TC)(!0))},autoComplete:"off",children:[(0,C.jsxs)("label",{className:"form-label",htmlFor:"contactName",children:["Name:",(0,C.jsx)("input",{className:"form-input",type:"text",name:"name",id:"contactName",placeholder:"Full name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' \\-][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",onChange:w,value:c,autoComplete:"off",required:!0})]}),(0,C.jsxs)("label",{className:"form-label",htmlFor:"ContactNumber",children:["Phone number:",(0,C.jsx)("input",{className:"form-input",type:"tel",name:"number",id:"ContactNumber",placeholder:"Phone number",pattern:"\\+?\\d{1,4}?[\\-.\\s]?\\(?\\d{1,3}?\\)?[\\-.\\s]?\\d{1,4}[\\-.\\s]?\\d{1,4}[\\-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",onChange:w,value:x,autoComplete:"off",required:!0})]}),(0,C.jsx)("button",{className:"form-submit",type:"submit",children:"Edit contact"})]})},B=function(n){var e=n._id,o=n.name,t=n.number,a=(0,p.I0)(),r=(0,p.v9)(A),i=(0,u.useState)(null),c=(0,m.Z)(i,2),s=c[0],l=c[1];return(0,C.jsxs)(g,{children:[(0,C.jsxs)("div",{className:"contact-align",children:[(0,C.jsx)("p",{className:"contact-name",children:o}),(0,C.jsx)("p",{className:"contact-number",children:t})]}),(0,C.jsxs)("div",{className:"button-wrap",children:[(0,C.jsx)("button",{type:"button",className:"contact-button",onClick:function(){l({_id:e,name:o,number:t}),a((0,k.TC)(!0))},children:(0,C.jsx)(x.ffH,{className:"icon"})}),(0,C.jsx)("button",{type:"button",className:"contact-button",onClick:function(){return n=e,void a((0,v.GK)(n));var n},children:(0,C.jsx)(x.lp8,{className:"icon"})})]}),r&&s&&(0,C.jsx)(N,{onClose:function(){l(null),a((0,k.TC)(!1))},children:(0,C.jsx)(T,{contact:s})})]},e)},E=f.Z.div(c||(c=(0,h.Z)(["\n  overflow-y: auto;\n  max-height: calc(100% - 100px);\n  .contact-list {\n    height: 60vh;\n    display: flex;\n    flex-direction: column;\n    gap: 10px;\n    margin: 0 auto;\n    @media screen and (min-width: 768px) {\n      width: 600px;\n    }\n  }\n  @media screen and (min-width: 768px) {\n    &::-webkit-scrollbar {\n      width: 8px;\n    }\n    &::-webkit-scrollbar-track {\n      background: ",";\n    }\n    &::-webkit-scrollbar-thumb {\n      background: ",";\n    }\n  }\n"])),w.O.headerBcg,w.O.headerBcg),P=function(){var n=(0,p.v9)(M),e=(0,p.v9)(Z).filter((function(e){return e.name.toLowerCase().includes(n)})).sort((function(n,e){return n.name.localeCompare(e.name)}));return(0,C.jsx)(E,{children:(0,C.jsx)("ul",{className:"contact-list",children:e.map((function(n){var e=n._id,o=n.name,t=n.number;return(0,C.jsx)(B,{_id:e,name:o,number:t},e)}))})})},I=f.Z.label(s||(s=(0,h.Z)(["\n  display: flex;\n  gap: 20px;\n  font-size: 18px;\n  font-weight: bold;\n  margin: 0 auto;\n  @media screen and (min-width: 768px) {\n    width: 600px;\n  }\n  .input-wrap {\n    position: relative;\n    width: 100%;\n  }\n  .search-input {\n    width: 100%;\n    height: 30px;\n    padding-left: 34px;\n    margin-bottom: 20px;\n    border: none;\n    border-radius: 7px;\n    color: ",";\n    background-color: ",";\n    box-shadow: 0px 0px 10px ",";\n    transition: box-shadow ",";\n    &:focus {\n      box-shadow: 0px 0px 10px ",";\n      outline: none;\n    }\n  }\n  .contact-button {\n    cursor: pointer;\n    width: 30px;\n    height: 30px;\n    border: none;\n    padding: 0;\n\n    background-color: transparent;\n\n    color: ",";\n    transition: color ",",\n      box-shadow ",";\n\n    &:hover,\n    &:focus {\n      box-shadow: 0px 0px 15px ",";\n      outline: none;\n      color: ",";\n    }\n    &:active {\n      color: ",";\n    }\n  }\n  .icon {\n    display: block;\n    width: 100%;\n    height: 100%;\n    pointer-events: none;\n    stroke: currentColor;\n    fill: currentColor;\n  }\n\n  .icon-search {\n    position: absolute;\n    top: 4px;\n    left: 4px;\n    width: 20px;\n    height: 20px;\n    fill: currentColor;\n    transition: fill ",";\n  }\n  .focused {\n    fill: ",";\n  }\n"])),w.O.primary,w.O.backgroundMain,w.O.mainShadow,b.p.transition,w.O.focusShadow,w.O.primary,b.p.transition,b.p.transition,w.O.focusShadow,w.O.iconHover,w.O.iconActive,b.p.transition,w.O.iconActive),q=f.Z.form(l||(l=(0,h.Z)(["\n  display: flex;\n  flex-direction: column;\n  gap: 30px;\n  margin: 0 auto;\n\n  .form-label {\n    display: flex;\n    flex-direction: column;\n    gap: 10px;\n    font-size: 18px;\n    font-weight: bold;\n  }\n\n  .form-input {\n    height: 30px;\n    padding-left: 10px;\n    border: none;\n    border-radius: 7px;\n    background-color: ",";\n    color: ",";\n    box-shadow: 0px 0px 10px ",";\n    transition: box-shadow ",";\n    &:focus {\n      box-shadow: 0px 0px 10px ",";\n      outline: none;\n    }\n  }\n  .form-submit {\n    height: 30px;\n    border: none;\n    border-radius: 7px;\n    margin-top: 15px;\n    background-color: ",";\n    color: ",";\n    box-shadow: 5px 5px 5px ",";\n    font-size: 16px;\n    font-weight: bold;\n    cursor: pointer;\n    transition: box-shadow ",",\n      background-color ",",\n      transform ",";\n    &:hover {\n      background-color: ",";\n      box-shadow: 5px 5px 5px ",";\n    }\n    &:active {\n      transform: scale(0.95);\n      box-shadow: 1px 2px 2px ",";\n    }\n  }\n"])),w.O.backgroundMain,w.O.primary,w.O.mainShadow,b.p.transition,w.O.focusShadow,w.O.headerBcg,w.O.primary,w.O.mainShadow,b.p.transition,b.p.transition,b.p.transition,w.O.mainShadow,w.O.focusShadow,w.O.focusShadow),_=function(){var n=(0,u.useState)(""),e=(0,m.Z)(n,2),o=e[0],t=e[1],a=(0,u.useState)(""),r=(0,m.Z)(a,2),i=r[0],c=r[1],s=(0,p.I0)(),l=(0,p.v9)(Z),d=function(n){var e=n.currentTarget,o=e.name,a=e.value;"name"===o?t(a):"number"===o&&c(a)},x=function(){t(""),c("")};return(0,C.jsxs)(q,{onSubmit:function(n){n.preventDefault();var e={name:o.trim(),number:i.trim()},t=e.name.toLowerCase(),a=e.number;l.some((function(n){return n.name.toLowerCase()===t&&n.number===a}))?L.Notify.failure("".concat(e.name," with phone ").concat(e.number," is already in phonebook.")):(s((0,v.uK)(e)),s((0,k.Me)(!1)),x())},autoComplete:"off",children:[(0,C.jsxs)("label",{className:"form-label",htmlFor:"contactName",children:["Name:",(0,C.jsx)("input",{className:"form-input",type:"text",name:"name",id:"contactName",placeholder:"Full name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' \\-][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",onChange:d,value:o,autoComplete:"off",required:!0})]}),(0,C.jsxs)("label",{className:"form-label",htmlFor:"ContactNumber",children:["Phone number:",(0,C.jsx)("input",{className:"form-input",type:"tel",name:"number",id:"ContactNumber",placeholder:"Phone number",pattern:"\\+?\\d{1,4}?[\\-.\\s]?\\(?\\d{1,3}?\\)?[\\-.\\s]?\\d{1,4}[\\-.\\s]?\\d{1,4}[\\-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",onChange:d,value:i,autoComplete:"off",required:!0})]}),(0,C.jsx)("button",{className:"form-submit",type:"submit",children:"Add contact"})]})},D=function(){var n=(0,p.v9)(M),e=(0,p.v9)(z),o=(0,u.useState)(!1),t=(0,m.Z)(o,2),a=t[0],r=t[1],i=(0,p.I0)();return(0,C.jsxs)(I,{htmlFor:"filter-field",children:[(0,C.jsx)("button",{className:"contact-button",onClick:function(){return i((0,k.Me)(!0))},children:(0,C.jsx)(x.jwq,{className:"icon"})}),(0,C.jsxs)("div",{className:"input-wrap",children:[(0,C.jsx)(x.U41,{className:"icon-search ".concat(a?"focused":"")}),(0,C.jsx)("input",{className:"search-input",id:"filter-field",type:"text",placeholder:"Find contacts by name",value:n,onChange:function(n){i((0,k.uD)(n.currentTarget.value))},onFocus:function(){r(!0)},onBlur:function(){r(!1)}})]}),e&&(0,C.jsx)(N,{onClose:function(){return i((0,k.Me)(!1))},children:(0,C.jsx)(_,{})})]})},H=f.Z.div(d||(d=(0,h.Z)(["\n  margin: 0 auto;\n  @media screen and (min-width: 768px) {\n    width: 600px;\n  }\n  .notifivation-text {\n    font-size: 18px;\n  }\n"]))),J=function(n){var e=n.message;return(0,C.jsx)(H,{children:(0,C.jsx)("p",{className:"notifivation-text",children:e})})},K=o(9245),$=o(4289),G=function(){var n=(0,p.v9)(Z),e=(0,p.v9)($.fN),o=(0,p.v9)(S),t=(0,p.v9)(F),a=(0,p.I0)();return(0,u.useEffect)((function(){e&&a((0,v.yF)())}),[a,e]),(0,C.jsxs)(C.Fragment,{children:[(0,C.jsx)("h1",{className:"title main-title",children:"Contacts"}),(0,C.jsx)(D,{}),t&&(0,C.jsx)(J,{message:t}),n.length>0?(0,C.jsxs)(C.Fragment,{children:[o&&!t&&(0,C.jsx)(K.Z,{}),n.length>0?(0,C.jsx)(P,{}):(0,C.jsx)(J,{message:"No matches found"})]}):(0,C.jsx)(J,{message:"Your phonebook is empty"})]})}}}]);
//# sourceMappingURL=851.10f573f7.chunk.js.map