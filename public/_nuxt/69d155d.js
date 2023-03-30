(window.webpackJsonp=window.webpackJsonp||[]).push([[447,17,38],{1292:function(t,e,r){"use strict";r.r(e);r(43),r(7),r(4),r(57),r(40),r(58);var n=r(21),o=r(0),l=(r(5),r(26),r(25),r(49),r(33),r(81),r(129));function c(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function d(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?c(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):c(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var m={layout:"admin",middleware:["admin","permission"],meta:{permission:"order_statuses.update",strategy:"update"},data:function(){return{formData:{name:{},description:{},is_active:!1,is_default:!1,status_code:""},disabled:!1,error:!1}},fetch:function(){var t=this;return Object(o.a)(regeneratorRuntime.mark((function e(){var r,data;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$repositories.order_statuses.show(t.$route.params.id);case 2:r=e.sent,data=r.data,t.formData.name=data.nameTranslations,t.formData.description=data.descriptionTranslations,t.formData.is_active=data.is_active,t.formData.is_default=data.is_default,t.formData.status_code=data.status_code;case 9:case"end":return e.stop()}}),e)})))()},methods:d(d({},Object(l.b)({updateOrderStatuses:"OrderStatuses/updateOrderStatuses",fetchActiveOrderStatuses:"General/fetchActiveOrderStatuses"})),{},{checkDefault:function(){1==this.formData.is_default&&(this.formData.is_active=1)},checkStatus:function(){0==this.formData.is_active&&(this.formData.is_default=0)},update:function(){var t=this;return Object(o.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.updateAndContinue();case 2:t.error||t.$router.replace(t.localePath("/admin/order_statuses"));case 3:case"end":return e.stop()}}),e)})))()},updateAndContinue:function(){var t=this;return Object(o.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.disabled=!0,e.next=3,t.updateOrderStatuses({formData:t.formData,id:t.$route.params.id}).then((function(e){var r;e.response?(t.error=null!==(r=e.response.data.errors)&&void 0!==r?r:e.response.data,t.$toast.error(e.response.data.message)):"fail"==e.state?t.$toast.error(e.message):(t.error=!1,t.$toast.success(e.message),t.fetchActiveOrderStatuses())}));case 3:t.disabled=!1;case 4:case"end":return e.stop()}}),e)})))()}}),mounted:function(){},computed:d({},Object(l.c)({allActiveLanguages:"General/allActiveLanguages"}))},v=r(71),component=Object(v.a)(m,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("div",{staticClass:"content-header"},[r("div",{staticClass:"row g-0"},[r("div",{staticClass:"col-sm-12 px-0"},[r("h2",{staticClass:"m-0 text-body bold"},[t._v("\n          "+t._s(this.$t("form.order_status.edit_order_status"))+"\n        ")])]),t._v(" "),r("div",{staticClass:"row"},[r("div",{staticClass:"col-sm-12 px-0"},[r("ol",{staticClass:"breadcrumb float-sm-right text-body"},[r("li",{staticClass:"breadcrumb-item"},[r("nuxt-link",{attrs:{to:t.localePath("/admin/dashboard")}},[t._v(t._s(this.$t("sidebar.home")))])],1),t._v(" "),r("li",{staticClass:"breadcrumb-item"},[r("nuxt-link",{attrs:{to:t.localePath("/admin/order_statuses")}},[t._v(t._s(this.$t("sidebar.order_status")))])],1),t._v(" "),r("li",{staticClass:"breadcrumb-item active"},[t._v("\n              "+t._s(this.$t("form.edit"))+"\n            ")])]),t._v(" "),r("p",{staticClass:"text-body-secondary"},[t._v("\n            "+t._s(this.$t("form.order_status.edit_description"))+"\n          ")])])])])]),t._v(" "),r("section",{staticClass:"content pb-5"},[t.$fetchState.pending?r("div",[r("AdminFormLoader",{attrs:{multilang:!0}})],1):r("div",{staticClass:"container"},[r("div",{staticClass:"col-lg-12"},[r("div",{staticClass:"card gutter-b border-0"},[r("div",{staticClass:"card-body"},[r("div",{staticClass:"row"},[r("div",{staticClass:"col-md-3 my-1 ps-md-0"},[r("div",{staticClass:"d-flex align-items-center"},[r("label",{staticClass:"label form-label me-4 text-capitalize"},[t._v("\n                    "+t._s(this.$t("form.order_status.status.label"))+"\n                  ")]),t._v(" "),r("div",{staticClass:"form-switch"},[r("input",{directives:[{name:"model",rawName:"v-model",value:t.formData.is_active,expression:"formData.is_active"}],staticClass:"form-check-input",attrs:{type:"checkbox",id:"flexSwitchCheckChecked"},domProps:{checked:t.formData.is_active?"checked":"",checked:Array.isArray(t.formData.is_active)?t._i(t.formData.is_active,null)>-1:t.formData.is_active},on:{change:[function(e){var r=t.formData.is_active,n=e.target,o=!!n.checked;if(Array.isArray(r)){var l=t._i(r,null);n.checked?l<0&&t.$set(t.formData,"is_active",r.concat([null])):l>-1&&t.$set(t.formData,"is_active",r.slice(0,l).concat(r.slice(l+1)))}else t.$set(t.formData,"is_active",o)},t.checkStatus]}})])]),t._v(" "),r("span",{staticClass:"heebo-light"},[t._v("\n                  "+t._s(t.$t("form.order_status.status.subheading"))+"\n                ")])]),t._v(" "),r("div",{staticClass:"col-md-3 my-1"},[r("div",{staticClass:"d-flex align-items-center"},[r("label",{staticClass:"label form-label me-4 text-capitalize"},[t._v("\n                    "+t._s(this.$t("form.order_status.is_default.label"))+"\n                  ")]),t._v(" "),r("div",{staticClass:"form-switch d-flex align-items-center"},[r("input",{directives:[{name:"model",rawName:"v-model",value:t.formData.is_default,expression:"formData.is_default"}],staticClass:"form-check-input",attrs:{type:"checkbox",id:"flexSwitchCheckChecked"},domProps:{checked:t.formData.is_default?"checked":"",checked:Array.isArray(t.formData.is_default)?t._i(t.formData.is_default,null)>-1:t.formData.is_default},on:{change:[function(e){var r=t.formData.is_default,n=e.target,o=!!n.checked;if(Array.isArray(r)){var l=t._i(r,null);n.checked?l<0&&t.$set(t.formData,"is_default",r.concat([null])):l>-1&&t.$set(t.formData,"is_default",r.slice(0,l).concat(r.slice(l+1)))}else t.$set(t.formData,"is_default",o)},t.checkDefault]}})])]),t._v(" "),r("span",{staticClass:"heebo-light"},[t._v("\n                  "+t._s(t.$t("form.order_status.is_default.subheading"))+"\n                ")])]),t._v(" "),r("div",{staticClass:"col-md-6 pe-md-0 mb-0"},[r("div",{attrs:{role:"group"}},[r("label",{staticClass:"form-label",attrs:{for:"input-live"}},[t._v(t._s(this.$t("form.order_status.status_code.label"))+":")]),t._v(" "),t.error&&t.error.status_code?r("span",{staticClass:"float-end text-danger"},[t._v("\n                    "+t._s(t.error.status_code[0])+"\n                  ")]):t._e(),t._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:t.formData.status_code,expression:"formData.status_code"}],staticClass:"form-control",class:t.error&&t.error.status_code?"error":"",attrs:{type:"number","aria-describedby":"input-live-help input-live-feedback",placeholder:this.$t("form.order_status.status_code.placeholder"),trim:""},domProps:{value:t.formData.status_code},on:{input:function(e){e.target.composing||t.$set(t.formData,"status_code",e.target.value)}}}),t._v(" "),r("span",{staticClass:"heebo-light"},[t._v("\n                    "+t._s(t.$t("form.order_status.status_code.subheading"))+"\n                  ")])])])]),t._v(" "),r("div",{staticClass:"row"}),t._v(" "),r("hr",{staticClass:"text-primary"}),t._v(" "),r("div",{staticClass:"row"},[r("div",{staticClass:"col-lg-12 px-0"},[r("div",{staticClass:"px-0 pt-3"},[r("h2",{staticClass:"m-0 text-body bold"},[t._v(t._s(t.$t("form.multilanguage")))]),t._v(" "),r("p",[r("span",{staticClass:"heebo-light"},[t._v("\n                      "+t._s(t.$t("form.manufacturer.form_description"))+"\n                    ")])]),t._v(" "),r("div",{staticClass:"row"},[r("div",{staticClass:"col-lg-12 d-md-flex px-0"},[r("ul",{staticClass:"nav nav-tabs d-inline-block",attrs:{id:"myTab",role:"tablist "}},t._l(t.allActiveLanguages.languages,(function(e,n){return r("li",{key:n,staticClass:"nav-item",attrs:{role:"presentation"}},[r("a",{staticClass:"nav-link",class:0==n?"active":"",attrs:{id:e.code+"-tab","data-bs-toggle":"tab",href:"#"+e.code,role:"tab","aria-controls":e.code,"aria-selected":0==n?"true":"false"}},[t._v(t._s(e.name))])])})),0),t._v(" "),r("div",{staticClass:"tab-content p-4",attrs:{id:"myTabContent"}},t._l(t.allActiveLanguages.languages,(function(e,n){return r("div",{key:e.code,staticClass:"tab-pane fade",class:0==n?"active show":"",attrs:{id:e.code,role:"tabpanel","aria-labelledby":e.code+"-tab"}},[r("div",{staticClass:"row"},[r("div",{staticClass:"col-md-6 my-1"},[r("div",{attrs:{role:"group "}},[r("label",{staticClass:"form-label",attrs:{for:"input-live"}},[t._v(t._s(t.$t("form.order_status.name.label"))+":")]),t._v(" "),t.error&&t.error["name."+e.code]?r("span",{staticClass:"float-end text-danger"},[t._v("\n                                  "+t._s(t.error["name."+e.code][0])+"\n                                ")]):t._e(),t._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:t.formData.name[e.code],expression:"formData.name[language.code]"}],staticClass:"form-control",class:t.error&&t.error["name."+e.code]?"error":"",attrs:{"aria-describedby":"input-live-help input-live-feedback",placeholder:t.$t("form.order_status.name.placeholder"),trim:""},domProps:{value:t.formData.name[e.code]},on:{input:function(r){r.target.composing||t.$set(t.formData.name,e.code,r.target.value)}}}),t._v(" "),r("span",{staticClass:"heebo-light"},[t._v("\n                                  "+t._s(t.$t("form.order_status.name.subheading"))+"\n                                ")])])])]),t._v(" "),r("div",{staticClass:"row"},[r("div",{staticClass:"col-md-12 my-1"},[r("div",{attrs:{role:"group "}},[r("label",{staticClass:"px-2 form-label",attrs:{for:"input-live"}},[t._v(t._s(t.$t("form.order_status.description.label"))+":")]),t._v(" "),t.error&&t.error["description."+e.code]?r("span",{staticClass:"float-end text-danger"},[t._v("\n                                  "+t._s(t.error["description."+e.code][0])+"\n                                ")]):t._e(),t._v(" "),r("GlobalCkeditorNuxt",{model:{value:t.formData.description[e.code],callback:function(r){t.$set(t.formData.description,e.code,r)},expression:"\n                                    formData.description[language.code]\n                                  "}}),t._v(" "),r("span",{staticClass:"px-2 heebo-light"},[t._v("\n                                  "+t._s(t.$t("form.order_status.description.subheading"))+"\n                                ")])],1)])])])})),0)])])])])])])])]),t._v(" "),r("div",{staticClass:"row"},[r("div",{staticClass:"col-md-12 px-4 text-center text-md-end"},[r("button",{staticClass:"btn btn-secondary mb-3 px-3 py-2",attrs:{type:"button",disabled:t.disabled,name:"button"},on:{click:t.update}},[t._v("\n            "+t._s(this.$t("form.update"))+"\n          ")]),t._v(" "),r("button",{staticClass:"btn btn-success mb-3",attrs:{type:"button",disabled:t.disabled,name:"button"},on:{click:t.updateAndContinue}},[t._v("\n            "+t._s(this.$t("form.update_and_continue"))+"\n          ")])])])])])])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{AdminFormLoader:r(660).default,GlobalCkeditorNuxt:r(667).default})},660:function(t,e,r){"use strict";r.r(e);var n={props:["multilang"]},o=r(71),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"container skeletion-effect"},[r("div",{staticClass:"col-lg-12"},[r("div",{staticClass:"card gutter-b border-0"},[r("div",{staticClass:"card-body p-4"},[t._m(0),t._v(" "),t._m(1),t._v(" "),t.multilang?r("div",[r("hr",{staticClass:"text-primary"}),t._v(" "),t._m(2)]):t._e()])])]),t._v(" "),t._m(3)])}),[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"row"},[r("div",{staticClass:"col-md-6 my-1"},[r("label",{staticClass:"label skeletion-animation"}),t._v(" "),r("div",{staticClass:"input  skeletion-animation"}),t._v(" "),r("div",{staticClass:"subheading skeletion-animation"})]),t._v(" "),r("div",{staticClass:"col-md-6 my-1"},[r("label",{staticClass:"label skeletion-animation"}),t._v(" "),r("div",{staticClass:"input  skeletion-animation"}),t._v(" "),r("div",{staticClass:"subheading skeletion-animation"})]),t._v(" "),r("div",{staticClass:"col-md-6 my-1"},[r("label",{staticClass:"label skeletion-animation"}),t._v(" "),r("div",{staticClass:"input  skeletion-animation"}),t._v(" "),r("div",{staticClass:"subheading skeletion-animation"})]),t._v(" "),r("div",{staticClass:"col-md-6 my-1"},[r("label",{staticClass:"label skeletion-animation"}),t._v(" "),r("div",{staticClass:"input  skeletion-animation"}),t._v(" "),r("div",{staticClass:"subheading skeletion-animation"})])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"row"},[r("div",{staticClass:"col-md-6  my-1 d-flex justify-content-center flex-column "},[r("div",{staticClass:"d-flex align-items-center "},[r("label",{staticClass:"label skeletion-animation"}),t._v(" "),r("div",{staticClass:"switch skeletion-animation"})]),t._v(" "),r("div",{staticClass:"subheading skeletion-animation"})])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"row"},[r("div",{staticClass:"col-lg-12 py-2"},[r("div",{staticClass:"px-0 pt-3"},[r("h2",{staticClass:" skeletion-animation"}),t._v(" "),r("div",{staticClass:"subheading skeletion-animation"}),t._v(" "),r("div",{staticClass:"row"},[r("div",{staticClass:"col-lg-12 px-0 pt-3 d-md-flex"},[r("ul",{staticClass:"nav nav-tabs d-inline-block",attrs:{id:"myTab",role:"tablist "}},[r("div",{staticClass:"tabs"}),t._v(" "),r("div",{staticClass:"tabs"}),t._v(" "),r("div",{staticClass:"tabs"})]),t._v(" "),r("div",{staticClass:"tab-content p-4",attrs:{id:"myTabContent"}},[r("div",{staticClass:"tab-pane fade active show",attrs:{role:"tabpanel"}},[r("div",{staticClass:"row"},[r("div",{staticClass:"col-md-6 my-1"},[r("div",{attrs:{role:"group "}},[r("label",{staticClass:"label skeletion-animation"}),t._v(" "),r("div",{staticClass:"input  skeletion-animation"}),t._v(" "),r("div",{staticClass:"subheading skeletion-animation"})])])]),t._v(" "),r("div",{staticClass:"row"},[r("div",{staticClass:"col-md-12 my-1"},[r("div",{attrs:{role:"group "}},[r("label",{staticClass:"label skeletion-animation"}),t._v(" "),r("div",{staticClass:"textarea  skeletion-animation"}),t._v(" "),r("div",{staticClass:"subheading skeletion-animation"})])])])])])])])])])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"row"},[r("div",{staticClass:"col-md-12 d-flex justify-content-end px-4"},[r("div",{staticClass:"button-add skeletion-animation"}),t._v(" "),r("div",{staticClass:"button-continue skeletion-animation"})])])}],!1,null,null,null);e.default=component.exports},667:function(t,e,r){"use strict";r.r(e);var n;n=r(684);var o={components:{ckeditor:r(685).component},props:{value:{type:String,required:!1},tagName:{type:String,required:!1,default:"div"},disabled:{type:Boolean,required:!1},uploadUrl:{type:String,required:!1},config:{type:Object,required:!1,default:function(){}}},data:function(){return{editor:n}}},l=r(71),component=Object(l.a)(o,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("ckeditor",{attrs:{editor:t.editor,value:t.value,config:t.config,tagName:t.tagName,disabled:t.disabled},on:{input:function(e){return t.$emit("input",e)}}})}),[],!1,null,null,null);e.default=component.exports}}]);