(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[509],{3034:function(e,t,a){"use strict";a.r(t);var n=a(61),l=a(9),o=a(25),r=a(1),i=a.n(r);t.default=function(){var e=Object(r.useState)({jobTitle:"",branch:"",jobCategory:"",numPositions:1,status:"",startDate:"",endDate:"",skills:"",jobDescription:"",jobRequirements:""}),t=Object(o.a)(e,2),a=t[0],m=t[1],s=function(e){var t=e.target,o=t.name,r=t.value;m(Object(l.a)(Object(l.a)({},a),{},Object(n.a)({},o,r)))};return i.a.createElement("div",{className:"job-create-container"},i.a.createElement("h1",null," Create Job "),i.a.createElement("form",{onSubmit:function(e){e.preventDefault(),console.log("Form submitted:",a)}},i.a.createElement("label",{htmlFor:"jobTitle"},"Job Title:"),i.a.createElement("input",{type:"text",id:"jobTitle",name:"jobTitle",value:a.jobTitle,onChange:s,required:!0}),i.a.createElement("label",{htmlFor:"branch"},"Branch:"),i.a.createElement("select",{id:"branch",name:"branch",value:a.branch,onChange:s},i.a.createElement("option",{value:""},"-- Select --")),i.a.createElement("label",{htmlFor:"jobCategory"},"Job Category:"),i.a.createElement("select",{id:"jobCategory",name:"jobCategory",value:a.jobCategory,onChange:s},i.a.createElement("option",{value:""},"-- Select --")),i.a.createElement("label",{htmlFor:"numPositions"},"Number of Positions:"),i.a.createElement("input",{type:"number",id:"numPositions",name:"numPositions",min:"1",value:a.numPositions,onChange:s}),i.a.createElement("label",{htmlFor:"status"},"Status:"),i.a.createElement("select",{id:"status",name:"status",value:a.status,onChange:s},i.a.createElement("option",{value:"active"},"Active"),i.a.createElement("option",{value:"inactive"},"Inactive")),i.a.createElement("label",{htmlFor:"startDate"},"Start Date:"),i.a.createElement("input",{type:"date",id:"startDate",name:"startDate",value:a.startDate,onChange:s}),i.a.createElement("label",{htmlFor:"endDate"},"End Date:"),i.a.createElement("input",{type:"date",id:"endDate",name:"endDate",value:a.endDate,onChange:s}),i.a.createElement("label",{htmlFor:"skills"},"Skills:"),i.a.createElement("input",{type:"text",id:"skills",name:"skills",value:a.skills,onChange:s}),i.a.createElement("label",{htmlFor:"jobDescription"},"Job Description:"),i.a.createElement("textarea",{id:"jobDescription",name:"jobDescription",value:a.jobDescription,onChange:s}),i.a.createElement("label",{htmlFor:"jobRequirements"},"Job Requirements:"),i.a.createElement("textarea",{id:"jobRequirements",name:"jobRequirements",value:a.jobRequirements,onChange:s}),i.a.createElement("button",{type:"submit"},"Create")))}}}]);
//# sourceMappingURL=509.33ac8e19.chunk.js.map