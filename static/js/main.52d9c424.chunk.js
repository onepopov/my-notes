(this.webpackJsonpnotes=this.webpackJsonpnotes||[]).push([[0],{2:function(t,e,n){"use strict";e.a={ADD_NOTE:"ADD_NOTE",REMOVE_NOTE:"REMOVE_NOTE",CHANGE_TITLE:"CHANGE_TITLE",SET_CONTENT:"SET_CONTENT",SELECT_NOTE:"SELECT_NOTE",SET_TITLE:"SET_TITLE",SET_BLOCKED:"SET_BLOCKED"}},30:function(t,e,n){},31:function(t,e,n){},32:function(t,e,n){},33:function(t,e,n){},34:function(t,e,n){},35:function(t,e,n){},36:function(t,e,n){"use strict";n.r(e),n.d(e,"notes",(function(){return r}));var c=n(18),o=n(3),s=n(40),i=n(2),a={notesList:[],selectedNote:""};function r(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:a,e=arguments.length>1?arguments[1]:void 0,n=e.type,r=e.payload;switch(n){case i.a.ADD_NOTE:var u=Object(s.a)();return Object(o.a)(Object(o.a)({},t),{},{notesList:[].concat(Object(c.a)(t.notesList),[{id:u,date:new Date,content:"",title:"Untitled",selectedNote:u,blocked:!1}])});case i.a.REMOVE_NOTE:return Object(o.a)(Object(o.a)({},t),{},{notesList:t.notesList.slice().filter((function(t){return t.id!==r.id})),selectedNote:""});case i.a.SELECT_NOTE:return Object(o.a)(Object(o.a)({},t),{},{selectedNote:r.id});case i.a.SET_TITLE:return Object(o.a)(Object(o.a)({},t),{},{notesList:t.notesList.map((function(t){return t.id===r.id?Object.assign({},t,{title:r.title}):t}))});case i.a.SET_BLOCKED:return Object(o.a)(Object(o.a)({},t),{},{notesList:t.notesList.map((function(t){return t.id===r.id?Object.assign({},t,{blocked:!t.blocked}):t}))});case i.a.SET_CONTENT:return Object(o.a)(Object(o.a)({},t),{},{notesList:t.notesList.map((function(t){return t.id===r.id?Object.assign({},t,{content:r.content}):t}))});default:return t}}},39:function(t,e,n){"use strict";n.r(e);var c=n(1),o=n(0),s=n.n(o),i=n(8),a=n.n(i),r=n(4),u=n(16),l=(n(30),n(6)),d=(n(31),n(2)),O=n.p+"static/media/lock.576e2d9f.svg";var j=function(t){var e=t.note,n=t.selected,o=t.contextHandler,s=Object(r.b)();return Object(c.jsxs)("li",{className:n?"note note--selected":"note",onClick:function(){s({type:d.a.SELECT_NOTE,payload:{id:e.id}})},onContextMenu:function(t){t.preventDefault(),t.stopPropagation()},children:[Object(c.jsx)("span",{className:"note__title",children:/\w+/.test(e.title)?e.title:"Untitled"}),e.blocked&&Object(c.jsx)("img",{className:"note__block",width:"20px",src:O}),n&&Object(c.jsx)("button",{className:"note__actions",onClick:o})]})};n(32),n(33);function b(t,e){var n=Object(o.useState)(t),c=Object(l.a)(n,2),s=c[0],i=c[1];return Object(o.useEffect)((function(){var n=setTimeout((function(){i(t)}),e);return function(){clearTimeout(n)}}),[t]),s}var f=function(t){var e=t.search,n=t.setQuery,s=b(t.query,300);return Object(o.useEffect)((function(){e(s)}),[s]),Object(c.jsx)("div",{className:"search",children:Object(c.jsx)("input",{className:"search__input",placeholder:"Search everywhere",type:"text",onChange:function(t){n(t.target.value)}})})};n(34);var E=function(t){var e=t.addNote,n=t.positionContext,o=t.selectedNote,s=t.openPopup,i=Object(r.b)();return Object(c.jsxs)("div",{className:"popup",style:n,children:[Object(c.jsx)("button",{onClick:e,children:"New Note"}),o&&Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)("button",{onClick:function(){i({type:d.a.REMOVE_NOTE,payload:{id:o.id}}),s(!1)},children:"Delete"}),Object(c.jsx)("button",{onClick:function(){i({type:d.a.SET_BLOCKED,payload:{id:o.id}}),s(!1)},children:o.blocked?"Unlock this note":"Lock this note"})]})]})};var p=function(){var t=Object(r.c)((function(t){return t.notes})),e=Object(r.b)(),n=Object(o.useState)(t.notesList),s=Object(l.a)(n,2),i=s[0],a=s[1],u=t.notesList.find((function(e){return e.id===t.selectedNote})),O=Object(o.useState)(!1),b=Object(l.a)(O,2),p=b[0],N=b[1],T=Object(o.useState)(""),_=Object(l.a)(T,2),x=_[0],h=_[1],L=Object(o.useState)({left:"100px",top:"100px"}),v=Object(l.a)(L,2),C=v[0],m=v[1],y=function(){e({type:d.a.ADD_NOTE}),N(!1)},S=function(t){t.preventDefault(),e({type:d.a.SELECT_NOTE,payload:{id:""}}),g(t.pageX,t.pageY)},g=function(t,e){N(!p),m({left:t,top:e})};return Object(o.useEffect)((function(){a(t.notesList.filter((function(t){return-1!==t.title.toLowerCase().indexOf(x.trim().toLowerCase())})))}),[t]),Object(c.jsxs)("nav",{className:"site-bar",children:[Object(c.jsx)("ul",{className:"site-bar__list",onContextMenu:S,onClick:function(t){"UL"===t.target.tagName&&(e({type:d.a.SELECT_NOTE,payload:{id:""}}),N(!1))},children:i.map((function(e){return Object(c.jsx)(j,{contextHandler:S,addNote:y,selected:t.selectedNote===e.id,note:e},e.id)}))}),p&&Object(c.jsx)(E,{selectedNote:u,openPopup:N,positionContext:C,addNote:y}),Object(c.jsx)(f,{query:x,setQuery:h,search:function(e){a((function(n){return t.notesList.filter((function(t){return-1!==t.title.toLowerCase().indexOf(e.trim().toLowerCase())}))}))}})]})};n(35);var N=function(){var t=Object(r.c)((function(t){return t.notes})),e=t.notesList.find((function(e){return e.id===t.selectedNote})),n=Object(o.useState)(e?e.content:null),s=Object(l.a)(n,2),i=s[0],a=s[1],u=Object(o.useState)(e?e.title:"Untitled"),O=Object(l.a)(u,2),j=O[0],f=O[1],E=Object(r.b)(),p=b(i,300),N=b(j,300);return Object(o.useEffect)((function(){e&&a(e.content),e&&f(e.title)}),[t]),Object(o.useEffect)((function(){e&&i!==e.content&&E({type:d.a.SET_CONTENT,payload:{id:t.selectedNote,content:p}})}),[p]),Object(o.useEffect)((function(){e&&j!==e.title&&E({type:d.a.SET_TITLE,payload:{id:t.selectedNote,title:N}})}),[N]),Object(c.jsx)("main",{className:"content",children:e?Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)("input",{readOnly:e.blocked,className:"content__title",placeholder:"Enter title of note",type:"text",value:j,onChange:function(t){return function(t){f(t)}(t.target.value)}}),Object(c.jsx)("textarea",{readOnly:e.blocked,placeholder:"What's new with you?",className:"content__field",value:i,onChange:function(t){return function(t){a(t)}(t.target.value)}})]}):Object(c.jsx)("section",{className:"content__info",children:"Not found note"})})};var T=function(){return Object(c.jsxs)("div",{className:"container",children:[Object(c.jsx)(p,{}),Object(c.jsx)(N,{})]})},_=n(5),x=n(36).notes,h=Object(_.b)({notes:x}),L=n(17),v=n.n(L),C=n(14),m={key:"root",storage:v.a},y=Object(C.a)(m,h),S=function(){var t=Object(_.c)(y);return{store:t,persistor:Object(C.b)(t)}},g=S().store,k=S().persistor;a.a.render(Object(c.jsx)(s.a.StrictMode,{children:Object(c.jsx)(r.a,{store:g,children:Object(c.jsx)(u.a,{loading:null,persistor:k,children:Object(c.jsx)(T,{})})})}),document.getElementById("root"))}},[[39,1,2]]]);
//# sourceMappingURL=main.52d9c424.chunk.js.map