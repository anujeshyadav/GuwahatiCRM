(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[245],{2176:function(e,a){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAABmJLR0QA/wD/AP+gvaeTAAAAdklEQVRIie2VSw6AIAxEB0+H978B9R51U7HRSlGIq76E8CszJLMoEHSSARAAnjSKaFbKRHFtgiQGLPN1/0RSazbOq97iCA1zGJBy9n7fQr8nfZHxLgdL1Aw5wWY0g8pvGYRBGITBne2DFvklJyvaDUhjNpigmx3ejVIrkE77UwAAAABJRU5ErkJggg=="},2177:function(e,a){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAABmJLR0QA/wD/AP+gvaeTAAAA5UlEQVRIie2VSw6CMBBAXzyBRhd+LqSiVzMeQnfegngIFkoEce0J1AU2kVJKgZaF6Utm1em8dhoG8Hh6YAs8gLejyIBAJc4cSkXcVeLfhMS4T/WkUu1KcQIsLYpXkrxSXMcCOALPbxyAucG+TuIJEFN+uyswdineK6QidrbEZyCUcm4acSzlyvsL9QeaE74UJ5xq8mcG+5WYtFr1viIuTerrbqzi1HJNi8mNR0BE+bYRMGxbXyyk5B+9LQLyUVkr7n1k9vGTSFXiDcWW2I4MWBv36e8JcdfqwvhtOkC6YDQ+PZ7OfAA3oN6kP5PK4gAAAABJRU5ErkJggg=="},2178:function(e,a){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAAaCAYAAACpSkzOAAAABmJLR0QA/wD/AP+gvaeTAAAA5ElEQVRIie3Vv0oDQRDH8c+lCIiVYJkgpPPfc1j4Qj5CfI48Q4wPkspSONHKGIxXWFwK92AvSEyO3GJxA8MOO7vz3fnBMpnmdoornEfrNY7xhDs8VoezHQqeYIRLXETr6I97zzj7DdS04DarNXKDOcoWvEZ8C918YokCK3yE+AuLEBd4j+JFyBfh/CrEy1DvO4aVuMVRE232sTYkqzzHGP3MhpYt2X0q0GsqkF4KSAf6d6ApBhhiFicO/UkHUe1htZ9MOnu+dhd/UJeuRNl92A5UA70k4OQ9TBKAJtD3M25zLY7yNbZ0mn6s0wSSAAAAAElFTkSuQmCC"},2877:function(e,a,t){"use strict";t.r(a),t.d(a,"Summary",(function(){return b}));var n=t(60),A=t(17),c=t(18),r=t(19),s=t(20),l=t(1),m=t.n(l),o=t(910),i=t(902),u=t(903),d=t(914),g=t(904),E=(t(27),t(5)),p=t(2176),f=t.n(p),h=t(2177),S=t.n(h),B=t(2178),v=t.n(B),b=function(e){Object(r.a)(t,e);var a=Object(s.a)(t);function t(e){var c;return Object(A.a)(this,t),(c=a.call(this,e)).onChangeHandler=function(e){c.setState({selectedFile:e.target.files[0]}),c.setState({selectedName:e.target.files[0].name}),console.log(e.target.files[0])},c.changeHandler1=function(e){c.setState({status:e.target.value})},c.changeHandler=function(e){c.setState(Object(n.a)({},e.target.name,e.target.value))},c.submitHandler=function(e){e.preventDefault();var a=new FormData;a.append("name",c.state.name),a.append("sortorder",c.state.sortorder),a.append("desc",c.state.desc),a.append("status",c.state.status),a.append("product_img",c.state.selectedFile,c.state.selectedName),E.a.post(" /addproductcategory",a).then((function(e){console.log(e),c.props.history.push("/app/category/category")})).catch((function(e){console.log(e)}))},c.state={name:"",selectedFile:null,selectedName:"",sortorder:"",desc:"",product_img:"",status:""},c}return Object(c.a)(t,[{key:"render",value:function(){return m.a.createElement("div",null,m.a.createElement("div",null,m.a.createElement(o.a,null,m.a.createElement(i.a,{className:"m-1"},m.a.createElement(u.a,null,m.a.createElement("h3",{"col-sm-6":!0,className:"float-left"},"Summary"))),m.a.createElement(d.a,null,m.a.createElement(g.a,{className:"m-1",onSubmit:this.submitHandler},m.a.createElement(i.a,{className:"mb-2"},m.a.createElement(u.a,{lg:"4",className:"mb-2"},m.a.createElement("img",{src:f.a})," ",m.a.createElement("span",null,"Debit")),m.a.createElement(u.a,{lg:"4",className:"mb-1"},m.a.createElement("img",{src:S.a})," ",m.a.createElement("span",null,"Credit")),m.a.createElement(u.a,null,m.a.createElement("img",{src:v.a})," ",m.a.createElement("span",null,"Balance"))))))))}}]),t}(l.Component);a.default=b}}]);
//# sourceMappingURL=245.de0edae8.chunk.js.map