(this["webpackJsonpbycott-china"]=this["webpackJsonpbycott-china"]||[]).push([[0],{11:function(e,a,t){},12:function(e,a,t){},14:function(e,a,t){"use strict";t.r(a);var n=t(0),c=t.n(n),r=t(4),o=t.n(r),l=(t(11),t(5)),s=t(1),m="https://buyinbharat.com/",i="data-store/index.json";t(12);var d=function(){var e=Object(n.useState)(!1),a=Object(s.a)(e,2),t=a[0],r=a[1],o=Object(n.useState)(""),d=Object(s.a)(o,2),u=d[0],f=d[1],b=Object(n.useState)(""),h=Object(s.a)(b,2),v=h[0],E=h[1],g=Object(n.useState)(""),p=Object(s.a)(g,2),N=p[0],y=p[1],j=Object(n.useState)([]),w=Object(s.a)(j,2),O=w[0],k=w[1],C=Object(n.useState)([]),S=Object(s.a)(C,2),I=S[0],L=S[1];return Object(n.useEffect)((function(){I.length<=0&&fetch(m+i).then((function(e){return e.json()})).then((function(e){L(e)}))})),c.a.createElement("div",{className:"container-fluid"},c.a.createElement("div",{className:"row searchbar"},c.a.createElement("div",{className:"col-sm-12 col-md-6"},c.a.createElement("div",{className:"row"},c.a.createElement("span",{className:"float-right"},"\u0915\u093f\u0938 \u0926\u0947\u0936 \u0915\u093e \u0909\u0924\u094d\u092a\u093e\u0926 \u0939\u0948?")),c.a.createElement("div",{className:"row"},c.a.createElement("span",{className:"float-right"},"Which country's brand is?"))),c.a.createElement("div",{className:"col-sm-12 col-md-6"},c.a.createElement("input",{type:"text",placeholder:"\u0916\u094b\u091c\u0947\u0902/Search",className:"search_input",value:N,name:"search",onChange:function(e){var a=[];e.target.value?(r(!0),f(""),y(e.target.value)):(r(!1),y(""));var t,n=e.target.value.toLowerCase(),c=Object(l.a)(I);try{for(c.s();!(t=c.n()).done;){var o=t.value;n===o.substr(0,n.length)&&a.push(o)}}catch(s){c.e(s)}finally{c.f()}k(a)},autoComplete:"off",autoFocus:""}))),t?c.a.createElement("div",null,c.a.createElement("ul",{className:"list"},O.length>0?c.a.createElement("div",null,O.map((function(e,a){return c.a.createElement("li",{key:a},c.a.createElement("button",{value:e,onClick:function(e){return function(e){y(e.target.value),fetch(m+"data-store/brand-"+e.target.value.toLowerCase()+".json").then((function(e){return e.json()})).then((function(e){""!==e.alias?fetch(m+"data-store/brand-"+e.alias.toLowerCase()+".json").then((function(e){return e.json()})).then((function(e){E(e),f(e.country)})):(E(e),f(e.country))})),r(!1)}(e)}},e))}))):c.a.createElement("li",{className:"notListed"},"Not Listed"))):"",c.a.createElement("div",{className:"row main-content ".concat(u?"active":"inactive")},c.a.createElement("div",{className:"col-sm-12 col-md-3 offset-md-2"},c.a.createElement("div",{className:"card"},"india"===u?c.a.createElement("img",{className:"card-img-top",src:"./india-flag.svg",alt:"Made In India"}):"china"===u?c.a.createElement("img",{className:"card-img-top",src:"./china-flag.svg",alt:"Made In India"}):c.a.createElement("img",{className:"card-img-top",src:"./somalia-flag.svg",alt:"Made In India"}),c.a.createElement("div",{className:"card-body"},c.a.createElement("p",{className:"card-text"},"".concat("india"===u?"\u092d\u093e\u0930\u0924":"china"===u?"\u091a\u0940\u0928":"\u0905\u0928\u094d\u092f \u0926\u0947\u0936"," \u0915\u093e \u0909\u0924\u094d\u092a\u093e\u0926")),c.a.createElement("p",{className:"card-text"},"Brand of ".concat(u))))),c.a.createElement("div",{className:"col-sm-12 col-md-5"},c.a.createElement("div",{className:"card"},c.a.createElement("div",{className:"card-body"},c.a.createElement("p",{className:"card-text"},c.a.createElement("b",null,"\u0936\u094d\u0930\u0947\u0923\u0940/Category")),c.a.createElement("p",{className:"card-text"},"".concat(v.groups)),c.a.createElement("p",{className:"card-text"},c.a.createElement("b",null,"\u0938\u0902\u0926\u0930\u094d\u092d/References")),c.a.createElement("p",{className:"card-body"},v&&"references"in v&&v.references.length>0?c.a.createElement("ul",null,v.references.map((function(e){return c.a.createElement("li",null,c.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:e},e))}))):""))))),c.a.createElement("div",{className:"container"},c.a.createElement("div",{className:"btn-group-vertical",role:"group","aria-label":"Button group with nested dropdown"},c.a.createElement("button",{type:"button",className:"btn btn-secondary"},c.a.createElement("a",{className:"footer-link",href:"https://docs.google.com/forms/d/e/1FAIpQLSd4NnHXtvv7DpY93-6ZcwUk1tkvL78eT6tSyDNDdT3lY2j0hw/viewform",target:"_blank",rel:"noopener noreferrer"},"\u0915\u093f\u0938\u0940 \u092d\u0940 \u0917\u0932\u0924 \u091c\u093e\u0928\u0915\u093e\u0930\u0940 \u0915\u0940 \u0938\u0942\u091a\u0928\u093e \u0926\u0947\u0902 (Report any incorrect data)")),c.a.createElement("button",{type:"button",className:"btn btn-secondary"},c.a.createElement("a",{className:"footer-link",href:"https://docs.google.com/forms/d/e/1FAIpQLSfOLjHq0Crnm_6izV9N2WNO9NP9DwYttsZKg9Iqa3j-a5LYOA/viewform",target:"_blank",rel:"noopener noreferrer"},"\u0915\u0902\u092a\u0928\u0940 / \u0909\u0924\u094d\u092a\u093e\u0926 \u091c\u094b\u0921\u093c\u0928\u0947 \u0915\u093e \u0905\u0928\u0941\u0930\u094b\u0927 (Company/Product add request)")),c.a.createElement("button",{type:"button",className:"btn btn-secondary"},c.a.createElement("a",{className:"footer-link",href:"https://docs.google.com/forms/d/e/1FAIpQLSfckly2X5CcO-1cEKMBVWDJtJZvjrPW3ivaBb3zvHCCm3bbmg/viewform",target:"_blank",rel:"noopener noreferrer"},"\u0938\u0941\u091d\u093e\u0935 \u092f\u093e \u0936\u093f\u0915\u093e\u092f\u0924 \u0926\u0930\u094d\u091c \u0915\u0930\u0947\u0902 (Suggestions or Complaints)")))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));t(13);o.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(d,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},6:function(e,a,t){e.exports=t(14)}},[[6,1,2]]]);
//# sourceMappingURL=main.0b1419ec.chunk.js.map