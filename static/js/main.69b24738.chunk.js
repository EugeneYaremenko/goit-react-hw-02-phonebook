(this["webpackJsonpgoit-react-hw-02-phonebook"]=this["webpackJsonpgoit-react-hw-02-phonebook"]||[]).push([[0],[,,,,,function(t,e,n){t.exports={list:"contactList_list__11fCw",listItem:"contactList_listItem__zdftX",deleteBtn:"contactList_deleteBtn__2iURQ"}},function(t,e,n){t.exports={section:"section_section__zZayN",title:"section_title__adFSl"}},function(t,e,n){t.exports={form:"contactForm_form__4tNgw",addButton:"contactForm_addButton__2-fAA"}},,,function(t,e,n){t.exports={wrapper:"wrapper_wrapper__3SK-T"}},function(t,e,n){t.exports={filter:"filter_filter__fNgVv"}},,function(t,e,n){t.exports=n(19)},,,,,function(t,e,n){},function(t,e,n){"use strict";n.r(e);var a=n(0),r=n.n(a),c=n(9),o=n.n(c),l=(n(18),n(12)),i=n(1),u=n(2),s=n(4),m=n(3),f=n(21),d=n(10),h=n.n(d),p=function(t){var e=t.children;return r.a.createElement("div",{className:h.a.wrapper},e)},b=n(6),v=n.n(b),C=function(t){var e=t.title,n=t.children;return r.a.createElement("section",{className:v.a.section},r.a.createElement("h2",{className:v.a.title},e),n)},_=n(7),E=n.n(_),g=function(t){Object(s.a)(n,t);var e=Object(m.a)(n);function n(){var t;Object(i.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(t=e.call.apply(e,[this].concat(r))).state={name:"",number:""},t.handleNameChange=function(e){t.setState({name:e.target.value})},t.handleNumberChange=function(e){t.setState({number:e.target.value})},t.handleSubmit=function(e){var n=t.state,a=n.name,r=n.number;e.preventDefault(),t.props.onAddContact(a,r),t.setState({name:"",number:""})},t}return Object(u.a)(n,[{key:"render",value:function(){var t=this.state,e=t.name,n=t.number;return r.a.createElement("form",{onSubmit:this.handleSubmit,className:E.a.form},r.a.createElement("label",null,"Name",r.a.createElement("input",{type:"text",value:e,onChange:this.handleNameChange})),r.a.createElement("label",null,"Number",r.a.createElement("input",{type:"number",value:n,onChange:this.handleNumberChange})),r.a.createElement("button",{type:"submit",className:E.a.addButton},"Add contact"))}}]),n}(a.Component),N=n(5),w=n.n(N),y=function(t){var e=t.contacts,n=t.onRemoveContact;return r.a.createElement("ul",{className:w.a.list},e.map((function(t){var e=t.name,a=t.number,c=t.id;return r.a.createElement("li",{className:w.a.listItem,key:c},r.a.createElement("div",null,e,": ",a),r.a.createElement("button",{className:w.a.deleteBtn,type:"button",onClick:function(){return n(c)}},"Delete"))})))},S=n(11),j=n.n(S),O=function(t){var e=t.title,n=t.value,a=t.onChangeFilter;return r.a.createElement("div",{className:j.a.filter},r.a.createElement("p",null,e),r.a.createElement("input",{type:"text",value:n,onChange:a}))},k=function(t){Object(s.a)(n,t);var e=Object(m.a)(n);function n(){var t;Object(i.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(t=e.call.apply(e,[this].concat(r))).state={contacts:[],filter:""},t.handleChangeFilter=function(e){t.setState({filter:e.target.value})},t.handleAddContact=function(e,n){var a=t.state.contacts.find((function(t){return t.name.toLowerCase()===e.toLowerCase()})),r={id:Object(f.a)(),name:e,number:n};a?alert("".concat(e," is already in contacts.")):t.setState((function(t){return{contacts:[].concat(Object(l.a)(t.contacts),[r])}}))},t.handleVisibleContact=function(){var e=t.state,n=e.contacts,a=e.filter;return n.filter((function(t){return t.name.toLowerCase().includes(a.toLowerCase())}))},t.handleRemoveContact=function(e){t.setState((function(t){return{contacts:t.contacts.filter((function(t){return t.id!==e}))}}))},t}return Object(u.a)(n,[{key:"render",value:function(){var t=this.state.filter,e=this.handleVisibleContact();return r.a.createElement(p,null,r.a.createElement(C,{title:"Phonebook"},r.a.createElement(g,{onAddContact:this.handleAddContact})),r.a.createElement(C,{title:"Contacts"},r.a.createElement(O,{title:"Find contacts by name",value:t,onChangeFilter:this.handleChangeFilter}),e.length>0&&r.a.createElement(y,{contacts:e,onRemoveContact:this.handleRemoveContact})))}}]),n}(a.Component);o.a.render(r.a.createElement(k,null),document.getElementById("root"))}],[[13,1,2]]]);
//# sourceMappingURL=main.69b24738.chunk.js.map