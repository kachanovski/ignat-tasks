(this["webpackJsonpignat-tasks"]=this["webpackJsonpignat-tasks"]||[]).push([[0],[,,,,function(e,a,t){e.exports={preJuniorPage:"PreJunior_preJuniorPage__2a3xq",column:"PreJunior_column__17aVa",columnEven:"PreJunior_columnEven__1dKbx"}},,,,function(e,a,t){e.exports={navBar:"NavBar_navBar__3fN5h",dropbtn:"NavBar_dropbtn__2-EKd",dropdown:"NavBar_dropdown__1C6Zj",dropdownContent:"NavBar_dropdownContent__2w6Ja",navBarItem:"NavBar_navBarItem__1U5PA"}},,function(e,a,t){e.exports={messageComponent:"MessageComponent_messageComponent__1ueJm",messageBox:"MessageComponent_messageBox__2oDdS",photo:"MessageComponent_photo__AsXih",name:"MessageComponent_name__1HE8T",textMessage:"MessageComponent_textMessage__t3FS1",timeStyle:"MessageComponent_timeStyle__2mEDZ"}},,,,,,,,function(e,a,t){e.exports={button:"Button_button__yeqnz",deleteButton:"Button_deleteButton__1zqUq"}},function(e,a,t){e.exports={input:"Input_input__-tJim",errorMessage:"Input_errorMessage__ypJos"}},,,function(e,a,t){},,,,function(e,a,t){e.exports={inputComponent:"InputComponent_inputComponent__2Uvat"}},function(e,a,t){e.exports={checkbox:"Checkbox_checkbox__1rg97"}},function(e,a,t){e.exports={selectBox:"Select_selectBox__2PG-a"}},,,function(e,a,t){e.exports=t(42)},,,,,function(e,a,t){},,,,,,function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=t(24),c=t.n(l),o=(t(36),t(3)),i=(t(22),t(8)),u=t.n(i),m=t(11);var s=function(){return r.a.createElement("div",{className:u.a.navBar},r.a.createElement("div",{className:u.a.dropdown},r.a.createElement("button",{className:u.a.dropbtn},"MENU"),r.a.createElement("div",{className:u.a.dropdownContent},r.a.createElement("div",{className:u.a.navBarItem},r.a.createElement(m.b,{to:"/prejunior"},"PreJunior")),r.a.createElement("div",{className:u.a.navBarItem},r.a.createElement(m.b,{to:"/junior"},"Junior")),r.a.createElement("div",{className:u.a.navBarItem},r.a.createElement(m.b,{to:"/junior+"},"JuniorPlus")))))},v=t(4),d=t.n(v),E=t(10),p=t.n(E);var f=function(e){return r.a.createElement("div",{className:p.a.messageComponent},r.a.createElement("div",{className:p.a.photo},"avatar"),r.a.createElement("div",{className:p.a.messageBox},r.a.createElement("div",{className:p.a.name},e.name),r.a.createElement("div",{className:p.a.textMessage},e.text),r.a.createElement("div",{className:p.a.timeStyle},e.time," ")))},g=t(18),_=t.n(g);var b=function(e){var a="X"===e.value?"".concat(_.a.deleteButton):"".concat(_.a.button);return r.a.createElement("button",{onClick:e.onClick,className:a},e.value)};var h=function(e){return r.a.createElement("div",null,r.a.createElement("div",null,r.a.createElement("h3",null,"TasksList")),r.a.createElement(b,{value:"all",onClick:function(){return e.changeFilter("all")}}),r.a.createElement(b,{value:"higth",onClick:function(){return e.changeFilter("higth")}}),r.a.createElement(b,{value:"middle",onClick:function(){return e.changeFilter("middle")}}),r.a.createElement(b,{value:"low",onClick:function(){return e.changeFilter("low")}}),r.a.createElement("div",null,e.tasks.map((function(a){return r.a.createElement("li",{key:a.id},r.a.createElement("span",null,a.title)," ",r.a.createElement("span",null," - ",a.priority),r.a.createElement(b,{value:"X",onClick:function(){e.removeTask(a.id)}}))}))))},N=t(29),k=t(19),C=t.n(k);var j=function(e){return r.a.createElement("div",null,r.a.createElement("input",{value:e.value,onChange:e.onChange,autoFocus:!0,onBlur:e.onBlur,onKeyPress:function(a){e.addItem&&"Enter"===a.key&&e.addItem()},className:C.a.input}),e.error&&r.a.createElement("div",{className:C.a.errorMessage},e.error))},O=t(26),x=t.n(O),B=t(43);var y=function(e){var a=Object(n.useState)(""),t=Object(o.a)(a,2),l=t[0],c=t[1],i=Object(n.useState)(null),u=Object(o.a)(i,2),m=u[0],s=u[1],v=Object(n.useState)(0),d=Object(o.a)(v,2),E=d[0],p=d[1],f=Object(n.useState)([]),g=Object(o.a)(f,2),_=g[0],h=g[1],k=function(){var e={id:Object(B.a)(),value:l};""!==l.trim()?(alert("Hello "+l),h([].concat(Object(N.a)(_),[e]))):s("\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0435"),c(""),p(E+1)};return r.a.createElement("div",{className:x.a.inputComponent},r.a.createElement(j,{error:m,addItem:k,value:l,onChange:function(e){c(e.currentTarget.value)}}),r.a.createElement(b,{value:"ADD",onClick:k}),r.a.createElement("div",null,r.a.createElement("span",null,E)))},S=t(27),w=t.n(S);var J=function(){return r.a.createElement("div",null,r.a.createElement("input",{className:w.a.checkbox,type:"checkbox"}))};var I=function(e){return r.a.createElement("div",{className:d.a.preJuniorPage},r.a.createElement("div",{className:d.a.column},r.a.createElement(f,{name:e.name,time:e.time,text:e.text})),r.a.createElement("div",{className:d.a.columnEven},r.a.createElement(h,{tasks:e.tasks,changeFilter:e.changeFilter,removeTask:e.removeTask})),r.a.createElement("div",{className:d.a.column},r.a.createElement(y,null)),r.a.createElement("div",{className:d.a.columnEven},r.a.createElement(J,null),r.a.createElement(b,{value:"ANY"}),r.a.createElement(j,null)))};var M=function(e){var a=Object(n.useState)(!0),t=Object(o.a)(a,2),l=t[0],c=t[1];return r.a.createElement("div",null,l?r.a.createElement("span",{className:"span",onClick:function(){c(!1)}},e.value):r.a.createElement(j,{addItem:e.addItem,onChange:e.onChange,value:e.value,onBlur:function(){c(!0)}}))};var P=function(){var e=Object(n.useState)("1"),a=Object(o.a)(e,2),t=a[0],l=a[1];return r.a.createElement("div",null,r.a.createElement(M,{value:t,onChange:function(e){l(e.currentTarget.value)}}),r.a.createElement(b,{onClick:function(){!function(e,a){var t=JSON.stringify(a);localStorage.setItem(e,t)}("test",{value:t})},value:"save"}),r.a.createElement(b,{onClick:function(){var e=function(e,a){var t=localStorage.getItem(e);null!==t&&(a=JSON.parse(t));return a}("test",{value:""});l(e.value)},value:"mode"}))},T=t(28),F=t.n(T);var A=function(){var e=Object(n.useState)(),a=Object(o.a)(e,2),t=a[0],l=a[1],c=Object(n.useState)([{title:"A"},{title:"B"},{title:"C"},{title:"D"}]),i=Object(o.a)(c,1)[0];return r.a.createElement("div",null,r.a.createElement("select",{className:F.a.selectBox,value:t,onChange:function(e){t=e.currentTarget.value,l(t)}},i.map((function(e){return r.a.createElement("option",{value:e.title},e.title)}))))};var D=function(){var e=Object(n.useState)([{id:"1",name:"male",checked:"male"},{id:"2",name:"female",checked:"female"}]),a=Object(o.a)(e,1)[0],t=Object(n.useState)("1"),l=Object(o.a)(t,2),c=l[0],i=l[1];function u(e){i(e.currentTarget.value)}return r.a.createElement("div",null,a.map((function(e){return r.a.createElement("label",null,r.a.createElement("input",{type:"radio",key:e.id,name:e.name,onChange:u,value:e.id,checked:c===e.id}),r.a.createElement("span",null,e.name))})))},U=(t(20),[{id:Object(B.a)(),name:"Bob",age:12},{id:Object(B.a)(),name:"Anya",age:25},{id:Object(B.a)(),name:"dima",age:17},{id:Object(B.a)(),name:"Masha",age:26}]);var q=function(){return r.a.createElement("div",null,r.a.createElement(b,{onClick:function(){},value:"UP"}),r.a.createElement(b,{value:"DOWN"}),r.a.createElement("button",{onClick:function(){},value:"AGE"},"age"),r.a.createElement("div",null,U.map((function(e){return r.a.createElement("div",{key:e.id},e.name," - ",e.age)}))))};var K=function(){return r.a.createElement("div",{className:d.a.preJuniorPage},r.a.createElement("div",{className:d.a.column},"1",r.a.createElement(M,null)),r.a.createElement("div",{className:d.a.columnEven},"2",r.a.createElement(P,null)),r.a.createElement("div",{className:d.a.column},"3",r.a.createElement(A,null),r.a.createElement(D,null)),r.a.createElement("div",{className:d.a.columnEven},"4",r.a.createElement(q,null)))};var W=function(){return r.a.createElement("div",null,r.a.createElement("div",{className:d.a.preJuniorPage},r.a.createElement("div",{className:d.a.column},"1"),r.a.createElement("div",{className:d.a.columnEven},"2"),r.a.createElement("div",{className:d.a.column},"3"),r.a.createElement("div",{className:d.a.columnEven},"4")))},X=t(1),z="Aliaksander K.",G="it-incubator",H="20:00";var Z=function(){var e=Object(n.useState)([{id:1,title:"eat",priority:"low"},{id:2,title:"eat",priority:"middle"},{id:3,title:"eat",priority:"higth"},{id:4,title:"eat",priority:"low"},{id:5,title:"eat",priority:"middle"}]),a=Object(o.a)(e,2),t=a[0],l=a[1];function c(e){var a=t.filter((function(a){return a.id!==e}));l(a)}var i=Object(n.useState)("all"),u=Object(o.a)(i,2),v=u[0],d=u[1],E=t;switch(v){case"all":E=t;break;case"higth":E=t.filter((function(e){return"higth"===e.priority}));break;case"middle":E=t.filter((function(e){return"middle"===e.priority}));break;case"low":E=t.filter((function(e){return"low"===e.priority}))}function p(e){d(e)}return r.a.createElement(m.a,null,r.a.createElement("div",null,r.a.createElement(s,null)),r.a.createElement("div",null,r.a.createElement(X.a,{exact:!0,path:"/prejunior",render:function(){return r.a.createElement(I,{name:z,text:G,time:H,tasks:E,changeFilter:p,removeTask:c})}}),r.a.createElement(X.a,{exact:!0,path:"/junior",render:function(){return r.a.createElement(K,null)}}),r.a.createElement(X.a,{exact:!0,path:"/junior+",render:function(){return r.a.createElement(W,null)}})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(Z,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[31,1,2]]]);
//# sourceMappingURL=main.c7c57af1.chunk.js.map