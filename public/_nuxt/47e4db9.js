(window.webpackJsonp=window.webpackJsonp||[]).push([[518],{1228:function(t,e,r){"use strict";r.r(e);r(43),r(25),r(7),r(4),r(57),r(40),r(58);var o=r(21),n=r(0),l=(r(33),r(81),r(26),r(5),r(129));function c(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function d(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?c(Object(source),!0).forEach((function(e){Object(o.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):c(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var m={layout:"admin",middleware:["admin","permission"],meta:{permission:"languages.create",strategy:"create"},asyncData:function(t){return Object(n.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.params;case 1:case"end":return e.stop()}}),e)})))()},data:function(){return{options:[{value:"",text:"Select your Positioning"},{value:"ltr",text:"Select ltr Positioning"},{value:"rtl",text:"Select rtl Positioning"}],formData:{name:"",code:"",direction:"",is_default:!1,status:!1,image_id:1},error:!1}},methods:d(d({},Object(l.b)({addLanguages:"Languages/addLanguages",fetchActiveLanguages:"Languages/fetchActiveLanguages"})),{},{add:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.addAndContinue();case 2:t.error||t.$router.replace(t.localePath("/admin/languages"));case 3:case"end":return e.stop()}}),e)})))()},addAndContinue:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.addLanguages(t.formData).then((function(e){var r;e.response?(t.error=null!==(r=e.response.data.errors)&&void 0!==r?r:e.response.data,t.$toast.error(e.response.data.message)):(t.error=!1,t.formData.name="",t.formData.code="",t.formData.direction="",t.formData.is_default=!1,t.formData.status=!1,t.$toast.success("Language Added Successfully"),t.fetchActiveLanguages())}));case 2:case"end":return e.stop()}}),e)})))()}}),computed:d({},Object(l.c)({allLanguages:"Languages/allLanguages"})),mounted:function(){}},v=r(71),component=Object(v.a)(m,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"py-5"},[r("div",{staticClass:"content-header"},[r("div",{staticClass:"container-fluid"},[r("div",{staticClass:"row mb-2"},[r("div",{staticClass:"col-sm-12"},[r("h2",{staticClass:"m-0 text-body bold"},[t._v("\n            "+t._s(this.$t("form.Create_new_langauge"))+"\n          ")])]),t._v(" "),r("div",{staticClass:"row"},[r("div",{staticClass:"col-sm-12"},[r("ol",{staticClass:"breadcrumb float-sm-right text-body"},[r("li",{staticClass:"breadcrumb-item"},[r("nuxt-link",{attrs:{to:t.localePath("/admin/dashboard")}},[t._v(t._s(this.$t("sidebar.Home")))])],1),t._v(" "),r("li",{staticClass:"breadcrumb-item"},[r("nuxt-link",{attrs:{to:t.localePath("/admin/languages")}},[t._v(t._s(this.$t("sidebar.Language")))])],1),t._v(" "),r("li",{staticClass:"breadcrumb-item active"},[t._v("\n                "+t._s(this.$t("form.Create"))+"\n              ")])]),t._v(" "),r("p",{staticClass:"text-body-secondary"},[t._v("\n              "+t._s(this.$t("form.Description"))+"\n            ")])])])])])]),t._v(" "),r("section",{staticClass:"content pb-5"},[r("div",{staticClass:"container"},[t._m(0),t._v(" "),r("div",{staticClass:"tab-content",attrs:{id:"myTabContent"}},[r("div",{staticClass:"tab-pane fade show active",attrs:{id:"home",role:"tabpanel","aria-labelledby":"home-tab"}},[r("div",{staticClass:"row"},[r("div",{staticClass:"col-lg-12"},[r("div",{staticClass:"card gutter-b border-0"},[r("div",{staticClass:"card-body p-4"},[r("div",{staticClass:"row"},[r("div",{staticClass:"col-md-6 my-1 px-4"},[r("div",{attrs:{role:"group "}},[r("label",{staticClass:"px-2 form-label",attrs:{for:"input-live"}},[t._v(t._s(this.$t("form.Name"))+":")]),t._v(" "),t.error&&t.error.name?r("span",{staticClass:"float-end text-danger"},[t._v("\n                            "+t._s(t.error.name[0])+"\n                          ")]):t._e(),t._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:t.formData.name,expression:"formData.name"}],staticClass:"form-control",class:t.error&&t.error.name?"error":"",attrs:{"aria-describedby":"input-live-help input-live-feedback",placeholder:this.$t("form.Enter_your_Name"),trim:""},domProps:{value:t.formData.name},on:{input:function(e){e.target.composing||t.$set(t.formData,"name",e.target.value)}}}),t._v(" "),r("span",{staticClass:"px-2 heebo-light"},[t._v("\n                            "+t._s(this.$t("form.SubHeading"))+"\n                          ")])])]),t._v(" "),r("div",{staticClass:"col-md-6 my-1 px-4"},[r("div",{attrs:{role:"group"}},[r("label",{staticClass:"px-2 form-label",attrs:{for:"input-live"}},[t._v(t._s(this.$t("form.Code"))+":")]),t._v(" "),t.error&&t.error.code?r("span",{staticClass:"float-end text-danger"},[t._v("\n                            "+t._s(t.error.code[0])+"\n                          ")]):t._e(),t._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:t.formData.code,expression:"formData.code"}],staticClass:"form-control",class:t.error&&t.error.name?"error":"",attrs:{"aria-describedby":"input-live-help input-live-feedback",placeholder:this.$t("form.Enter_your_Code"),trim:""},domProps:{value:t.formData.code},on:{input:function(e){e.target.composing||t.$set(t.formData,"code",e.target.value)}}})])])]),t._v(" "),r("div",{staticClass:"row"},[r("div",{staticClass:"col-md-6 my-1 px-4"},[r("div",{attrs:{role:"group"}},[r("label",{staticClass:"px-2 form-label",attrs:{for:"input-live"}},[t._v(t._s(this.$t("form.Direction"))+":")]),t._v(" "),t.error&&t.error.direction?r("span",{staticClass:"float-end text-danger"},[t._v("\n                            "+t._s(t.error.direction[0])+"\n                          ")]):t._e(),t._v(" "),r("select",{directives:[{name:"model",rawName:"v-model",value:t.formData.direction,expression:"formData.direction"}],staticClass:"form-select",class:t.error&&t.error.name?"error":"",on:{change:function(e){var r=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){return"_value"in t?t._value:t.value}));t.$set(t.formData,"direction",e.target.multiple?r:r[0])}}},t._l(t.options,(function(option){return r("option",{domProps:{value:option.value}},[t._v("\n                              "+t._s(option.text)+"\n                            ")])})),0)])]),t._v(" "),r("div",{staticClass:"col-md-6 my-1 px-4"},[r("label",{staticClass:"label form-label"},[t._v("\n                          "+t._s(this.$t("form.status"))+"\n                        ")]),t._v(" "),r("div",{staticClass:"form-switch d-flex align-items-center"},[r("input",{staticClass:"form-check-input",attrs:{type:"checkbox",id:"flexSwitchCheckChecked"},domProps:{checked:t.formData.status?"checked":""}})])])]),t._v(" "),r("div",{staticClass:"row"},[r("div",{staticClass:"col-md-12 px-4 text-center text-md-start"},[r("button",{staticClass:"btn btn-primary mb-3 px-3 py-2",attrs:{type:"button",name:"button"},on:{click:t.add}},[t._v("\n                          "+t._s(this.$t("form.Add"))+"\n                        ")]),t._v(" "),r("button",{staticClass:"btn btn-success mb-3 px-3 py-2",attrs:{type:"button",name:"button"},on:{click:t.addAndContinue}},[t._v("\n                          "+t._s(this.$t("form.Continue"))+"\n                        ")])])])])])])])]),t._v(" "),r("div",{staticClass:"tab-pane fade",attrs:{id:"profile",role:"tabpanel","aria-labelledby":"profile-tab"}},[r("div",{staticClass:"row"},[r("div",{staticClass:"col-lg-12"},[r("div",{staticClass:"card gutter-b border-0"},[r("div",{staticClass:"card-body p-4"},[r("div",{staticClass:"row"},[r("div",{staticClass:"col-md-6 my-1 px-4"},[r("div",{attrs:{role:"group "}},[r("label",{staticClass:"px-2 form-label",attrs:{for:"input-live"}},[t._v(t._s(this.$t("form.Name"))+":")]),t._v(" "),t.error&&t.error.name?r("span",{staticClass:"float-end text-danger"},[t._v("\n                            "+t._s(t.error.name[0])+"\n                          ")]):t._e(),t._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:t.formData.name,expression:"formData.name"}],staticClass:"form-control",class:t.error&&t.error.name?"error":"",attrs:{"aria-describedby":"input-live-help input-live-feedback",placeholder:this.$t("form.Enter_your_Name"),trim:""},domProps:{value:t.formData.name},on:{input:function(e){e.target.composing||t.$set(t.formData,"name",e.target.value)}}}),t._v(" "),r("span",{staticClass:"px-2 heebo-light"},[t._v("\n                            "+t._s(this.$t("form.SubHeading"))+"\n                          ")])])]),t._v(" "),r("div",{staticClass:"col-md-6 my-1 px-4"},[r("div",{attrs:{role:"group"}},[r("label",{staticClass:"px-2 form-label",attrs:{for:"input-live"}},[t._v(t._s(this.$t("form.Code"))+":")]),t._v(" "),t.error&&t.error.code?r("span",{staticClass:"float-end text-danger"},[t._v("\n                            "+t._s(t.error.code[0])+"\n                          ")]):t._e(),t._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:t.formData.code,expression:"formData.code"}],staticClass:"form-control",class:t.error&&t.error.name?"error":"",attrs:{"aria-describedby":"input-live-help input-live-feedback",placeholder:this.$t("form.Enter_your_Code"),trim:""},domProps:{value:t.formData.code},on:{input:function(e){e.target.composing||t.$set(t.formData,"code",e.target.value)}}})])])]),t._v(" "),r("div",{staticClass:"row"},[r("div",{staticClass:"col-md-6 my-1 px-4"},[r("div",{attrs:{role:"group"}},[r("label",{staticClass:"px-2 form-label",attrs:{for:"input-live"}},[t._v(t._s(this.$t("form.Direction"))+":")]),t._v(" "),t.error&&t.error.direction?r("span",{staticClass:"float-end text-danger"},[t._v("\n                            "+t._s(t.error.direction[0])+"\n                          ")]):t._e(),t._v(" "),r("select",{directives:[{name:"model",rawName:"v-model",value:t.formData.direction,expression:"formData.direction"}],staticClass:"form-select",class:t.error&&t.error.name?"error":"",on:{change:function(e){var r=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){return"_value"in t?t._value:t.value}));t.$set(t.formData,"direction",e.target.multiple?r:r[0])}}},t._l(t.options,(function(option){return r("option",{domProps:{value:option.value}},[t._v("\n                              "+t._s(option.text)+"\n                            ")])})),0)])]),t._v(" "),r("div",{staticClass:"col-md-6 my-1 px-4"},[r("label",{staticClass:"label form-label"},[t._v("\n                          "+t._s(this.$t("form.status"))+"\n                        ")]),t._v(" "),r("div",{staticClass:"form-switch d-flex align-items-center"},[r("input",{staticClass:"form-check-input",attrs:{type:"checkbox",id:"flexSwitchCheckChecked"},domProps:{checked:t.formData.status?"checked":""}})])])]),t._v(" "),r("div",{staticClass:"row"},[r("div",{staticClass:"col-md-12 px-4 text-center text-md-start"},[r("button",{staticClass:"btn btn-primary mb-3 px-3 py-2",attrs:{type:"button",name:"button"},on:{click:t.add}},[t._v("\n                          "+t._s(this.$t("form.Add"))+"\n                        ")]),t._v(" "),r("button",{staticClass:"btn btn-success mb-3 px-3 py-2",attrs:{type:"button",name:"button"},on:{click:t.addAndContinue}},[t._v("\n                          "+t._s(this.$t("form.Continue"))+"\n                        ")])])])])])])])]),t._v(" "),r("div",{staticClass:"tab-pane fade",attrs:{id:"contact",role:"tabpanel","aria-labelledby":"contact-tab"}},[r("div",{staticClass:"row"},[r("div",{staticClass:"col-lg-12"},[r("div",{staticClass:"card gutter-b border-0"},[r("div",{staticClass:"card-body p-4"},[r("div",{staticClass:"row"},[r("div",{staticClass:"col-md-6 my-1 px-4"},[r("div",{attrs:{role:"group "}},[r("label",{staticClass:"px-2 form-label",attrs:{for:"input-live"}},[t._v(t._s(this.$t("form.Name"))+":")]),t._v(" "),t.error&&t.error.name?r("span",{staticClass:"float-end text-danger"},[t._v("\n                            "+t._s(t.error.name[0])+"\n                          ")]):t._e(),t._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:t.formData.name,expression:"formData.name"}],staticClass:"form-control",class:t.error&&t.error.name?"error":"",attrs:{"aria-describedby":"input-live-help input-live-feedback",placeholder:this.$t("form.Enter_your_Name"),trim:""},domProps:{value:t.formData.name},on:{input:function(e){e.target.composing||t.$set(t.formData,"name",e.target.value)}}}),t._v(" "),r("span",{staticClass:"px-2 heebo-light"},[t._v("\n                            "+t._s(this.$t("form.SubHeading"))+"\n                          ")])])]),t._v(" "),r("div",{staticClass:"col-md-6 my-1 px-4"},[r("div",{attrs:{role:"group"}},[r("label",{staticClass:"px-2 form-label",attrs:{for:"input-live"}},[t._v(t._s(this.$t("form.Code"))+":")]),t._v(" "),t.error&&t.error.code?r("span",{staticClass:"float-end text-danger"},[t._v("\n                            "+t._s(t.error.code[0])+"\n                          ")]):t._e(),t._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:t.formData.code,expression:"formData.code"}],staticClass:"form-control",class:t.error&&t.error.name?"error":"",attrs:{"aria-describedby":"input-live-help input-live-feedback",placeholder:this.$t("form.Enter_your_Code"),trim:""},domProps:{value:t.formData.code},on:{input:function(e){e.target.composing||t.$set(t.formData,"code",e.target.value)}}})])])]),t._v(" "),r("div",{staticClass:"row"},[r("div",{staticClass:"col-md-6 my-1 px-4"},[r("div",{attrs:{role:"group"}},[r("label",{staticClass:"px-2 form-label",attrs:{for:"input-live"}},[t._v(t._s(this.$t("form.Direction"))+":")]),t._v(" "),t.error&&t.error.direction?r("span",{staticClass:"float-end text-danger"},[t._v("\n                            "+t._s(t.error.direction[0])+"\n                          ")]):t._e(),t._v(" "),r("select",{directives:[{name:"model",rawName:"v-model",value:t.formData.direction,expression:"formData.direction"}],staticClass:"form-select",class:t.error&&t.error.name?"error":"",on:{change:function(e){var r=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){return"_value"in t?t._value:t.value}));t.$set(t.formData,"direction",e.target.multiple?r:r[0])}}},t._l(t.options,(function(option){return r("option",{domProps:{value:option.value}},[t._v("\n                              "+t._s(option.text)+"\n                            ")])})),0)])]),t._v(" "),r("div",{staticClass:"col-md-6 my-1 px-4"},[r("label",{staticClass:"label form-label"},[t._v("\n                          "+t._s(this.$t("form.status"))+"\n                        ")]),t._v(" "),r("div",{staticClass:"form-switch d-flex align-items-center"},[r("input",{staticClass:"form-check-input",attrs:{type:"checkbox",id:"flexSwitchCheckChecked"},domProps:{checked:t.formData.status?"checked":""}})])])]),t._v(" "),r("div",{staticClass:"row"},[r("div",{staticClass:"col-md-12 px-4 text-center text-md-start"},[r("button",{staticClass:"btn btn-primary mb-3 px-3 py-2",attrs:{type:"button",name:"button"},on:{click:t.add}},[t._v("\n                          "+t._s(this.$t("form.Add"))+"\n                        ")]),t._v(" "),r("button",{staticClass:"btn btn-success mb-3 px-3 py-2",attrs:{type:"button",name:"button"},on:{click:t.addAndContinue}},[t._v("\n                          "+t._s(this.$t("form.Continue"))+"\n                        ")])])])])])])])])])])])])}),[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("ul",{staticClass:"nav nav-tabs",attrs:{id:"myTab",role:"tablist"}},[r("li",{staticClass:"nav-item",attrs:{role:"presentation"}},[r("a",{staticClass:"nav-link active",attrs:{id:"home-tab","data-bs-toggle":"tab",href:"#home",role:"tab","aria-controls":"home","aria-selected":"true"}},[t._v("Home")])]),t._v(" "),r("li",{staticClass:"nav-item",attrs:{role:"presentation"}},[r("a",{staticClass:"nav-link",attrs:{id:"profile-tab","data-bs-toggle":"tab",href:"#profile",role:"tab","aria-controls":"profile","aria-selected":"false"}},[t._v("Profile")])]),t._v(" "),r("li",{staticClass:"nav-item",attrs:{role:"presentation"}},[r("a",{staticClass:"nav-link",attrs:{id:"contact-tab","data-bs-toggle":"tab",href:"#contact",role:"tab","aria-controls":"contact","aria-selected":"false"}},[t._v("Contact")])])])}],!1,null,null,null);e.default=component.exports}}]);