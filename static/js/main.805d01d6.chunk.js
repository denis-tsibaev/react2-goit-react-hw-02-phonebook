(this["webpackJsonpreact2-goit-react-hw-02-phonebook"]=this["webpackJsonpreact2-goit-react-hw-02-phonebook"]||[]).push([[0],{13:function(t,e,n){t.exports={deleteBtn:"ContactItem_deleteBtn__1mJpE"}},14:function(t,e,n){t.exports={filterInput:"Filter_filterInput__RdurL"}},15:function(t,e,n){t.exports={section:"Section_section__1mzze"}},21:function(t,e,n){},32:function(t,e,n){"use strict";n.r(e);var a=n(1),r=n.n(a),c=n(10),i=n.n(c),o=(n(21),n(22),n(16)),s=n(3),u=n(4),l=n(6),d=n(5),m=n(11),b=n.n(m),j=n(12),h=n(7),f=n.n(h),p=n(0),O=function(t){Object(l.a)(n,t);var e=Object(d.a)(n);function n(){var t;Object(s.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(t=e.call.apply(e,[this].concat(r))).state={name:"",number:""},t.handleChange=function(e){var n=e.target,a=n.name,r=n.value;t.setState(Object(j.a)({},a,r))},t.handleSubmit=function(e){e.preventDefault(),t.props.onSubmit(t.state),t.formReset()},t.formReset=function(){t.setState({name:"",number:""})},t}return Object(u.a)(n,[{key:"render",value:function(){var t=this.state,e=t.name,n=t.number,a=this.handleChange;return Object(p.jsxs)("form",{onSubmit:this.handleSubmit,autoComplete:"off",children:[Object(p.jsx)("div",{children:Object(p.jsxs)("label",{children:["Name",Object(p.jsx)("input",{className:f.a.inputName,onChange:a,type:"text",name:"name",value:e,placeholder:"text here",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0})]})}),Object(p.jsx)("div",{children:Object(p.jsxs)("label",{children:["Number",Object(p.jsx)("input",{className:f.a.inputNumber,onChange:a,type:"tel",name:"number",value:n,placeholder:"text here",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043a\u0440\u0443\u0433\u043b\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",required:!0})]})}),Object(p.jsx)("button",{type:"submit",className:f.a.formButton,children:"Add contact"})]})}}]),n}(a.Component),x=n(13),C=n.n(x),v=function(t){var e=t.name,n=t.number,a=t.onDelete,r=t.id;return Object(p.jsxs)(p.Fragment,{children:[Object(p.jsxs)("span",{children:[e,": ",n]}),Object(p.jsx)("button",{type:"submit",onClick:function(){return a(r)},className:C.a.deleteBtn,children:"Delete"})]})},_=n(9),g=n.n(_),N=function(t){var e=t.contacts,n=t.onDeleteContact;return Object(p.jsx)("ol",{className:g.a.orderList,children:e.map((function(t){var e=t.id,a=t.name,r=t.number;return Object(p.jsx)("li",{className:g.a.contactListItem,children:Object(p.jsx)(v,{name:a,number:r,id:e,onDelete:n})},e)}))})},S=n(14),y=n.n(S),L=function(t){var e=t.value,n=t.onFilterChange;return Object(p.jsx)("div",{children:Object(p.jsxs)("label",{children:["Find contacts by name",Object(p.jsx)("input",{type:"text",className:y.a.filterInput,value:e,onChange:n})]})})},w=n(15),F=n.n(w),A=function(t){var e=t.title,n=t.children;return Object(p.jsxs)("section",{className:F.a.section,children:[e&&Object(p.jsx)("h2",{children:e}),n]})},I=function(t){Object(l.a)(n,t);var e=Object(d.a)(n);function n(){var t;Object(s.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(t=e.call.apply(e,[this].concat(r))).state={contacts:[{id:"id-1",name:"Rosie Simpson",number:"459-12-56"},{id:"id-2",name:"Hermione Kline",number:"443-89-12"},{id:"id-3",name:"Eden Clements",number:"645-17-79"},{id:"id-4",name:"Annie Copeland",number:"227-91-26"}],filter:""},t.formSubmitHandler=function(e){var n=e.name,a=e.number;t.addContact(n,a)},t.addContact=function(e,n){var a=e.toLowerCase();if(t.state.contacts.find((function(t){return a===t.name.toLowerCase()})))return alert("".concat(e," is already in contacts!"));var r={id:b.a.generate(),name:e,number:n};t.setState((function(t){var e=t.contacts;return{contacts:[r].concat(Object(o.a)(e))}}))},t.deleteContact=function(e){t.setState((function(t){return{contacts:t.contacts.filter((function(t){return t.id!==e}))}}))},t.handleFilterChange=function(e){t.setState({filter:e.target.value})},t.getVisibleContacts=function(){var e=t.state,n=e.contacts,a=e.filter.toLowerCase();return n.filter((function(t){return t.name.toLowerCase().includes(a)}))},t}return Object(u.a)(n,[{key:"render",value:function(){var t=this.state.filter,e=this.getVisibleContacts();return Object(p.jsxs)("div",{className:"appDiv",children:[Object(p.jsx)(A,{title:"Phonebook",children:Object(p.jsx)(O,{onSubmit:this.formSubmitHandler})}),Object(p.jsx)(A,{children:Object(p.jsx)(L,{onFilterChange:this.handleFilterChange,value:t})}),Object(p.jsx)(A,{title:"Contacts",children:Object(p.jsx)(N,{contacts:e,onDeleteContact:this.deleteContact})})]})}}]),n}(a.Component);i.a.render(Object(p.jsx)(r.a.StrictMode,{children:Object(p.jsx)(I,{})}),document.getElementById("root"))},7:function(t,e,n){t.exports={inputName:"ContactForm_inputName__1JS71",inputNumber:"ContactForm_inputNumber__1a4sI",formButton:"ContactForm_formButton__2R_cJ"}},9:function(t,e,n){t.exports={orderList:"ContactList_orderList__32G25",contactListItem:"ContactList_contactListItem__ihtVJ"}}},[[32,1,2]]]);
//# sourceMappingURL=main.805d01d6.chunk.js.map