(window.webpackJsonp=window.webpackJsonp||[]).push([[523,17,38],{1229:function(t,e,n){"use strict";n.r(e);n(43),n(7),n(4),n(57),n(40),n(58);var l=n(0),r=n(21),o=(n(5),n(33),n(81),n(26),n(25),n(49),n(129));function c(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function d(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?c(Object(source),!0).forEach((function(e){Object(r.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):c(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var v={layout:"admin",middleware:["admin","permission"],meta:{permission:"tax_classes.create",strategy:"create"},data:function(){return{editorConfig:{},formData:{name:{},description:{},is_active:!1},error:!1}},fetch:function(){},methods:d(d({},Object(o.b)({addTaxClasses:"TaxClasses/addTaxClasses",fetchActiveTaxClasses:"General/fetchActiveTaxClasses"})),{},{add:function(){var t=this;return Object(l.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.addAndContinue();case 2:t.error||t.$router.replace(t.localePath("/admin/tax_classes"));case 3:case"end":return e.stop()}}),e)})))()},addAndContinue:function(){var t=this;return Object(l.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.addTaxClasses(t.formData).then((function(e){var n;e.response?(t.error=null!==(n=e.response.data.errors)&&void 0!==n?n:e.response.data,t.$toast.error(e.response.data.message)):(t.error=!1,t.formData.name={},t.formData.description={},t.formData.is_active=!1,t.$toast.success(e.message),t.fetchActiveTaxClasses())}));case 2:case"end":return e.stop()}}),e)})))()}}),mounted:function(){},computed:d({},Object(o.c)({allActiveLanguages:"General/allActiveLanguages"}))},m=n(71),component=Object(m.a)(v,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"content-header"},[n("div",{staticClass:"row g-0"},[n("div",{staticClass:"col-sm-12 px-0"},[n("h2",{staticClass:"m-0 text-body bold"},[t._v("\n            "+t._s(this.$t("form.tax_class.create_new_tax_class"))+"\n          ")])]),t._v(" "),n("div",{staticClass:"row"},[n("div",{staticClass:"col-sm-12 px-0"},[n("ol",{staticClass:"breadcrumb float-sm-right text-body"},[n("li",{staticClass:"breadcrumb-item"},[n("nuxt-link",{attrs:{to:t.localePath("/admin/dashboard")}},[t._v(t._s(this.$t("sidebar.home")))])],1),t._v(" "),n("li",{staticClass:"breadcrumb-item"},[n("nuxt-link",{attrs:{to:t.localePath("/admin/tax_classes")}},[t._v(t._s(this.$t("sidebar.tax_class")))])],1),t._v(" "),n("li",{staticClass:"breadcrumb-item active"},[t._v("\n                "+t._s(this.$t("form.create"))+"\n              ")])]),t._v(" "),n("p",{staticClass:"text-body-secondary"},[t._v("\n              "+t._s(this.$t("form.tax_class.form_description"))+"\n            ")])])])])]),t._v(" "),n("section",{staticClass:"content pb-5"},[t.$fetchState.pending?n("div",[n("AdminFormLoader",{attrs:{multilang:!0}})],1):n("div",{staticClass:"container"},[n("div",{staticClass:"col-lg-12"},[n("div",{staticClass:"card gutter-b border-0"},[n("div",{staticClass:"card-body"},[n("div",{staticClass:"row"},[n("div",{staticClass:"col-md-6 my-1 ps-md-0 d-flex justify-content-center flex-column "},[n("div",{staticClass:"d-flex align-items-center "},[n("label",{staticClass:"label form-label me-4 text-capitalize"},[t._v("\n                          "+t._s(this.$t("form.tax_class.status.label"))+"\n                        ")]),t._v(" "),n("div",{staticClass:"form-switch"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.formData.is_active,expression:"formData.is_active"}],staticClass:"form-check-input",attrs:{type:"checkbox",id:"flexSwitchCheckChecked"},domProps:{checked:t.formData.is_active?"checked":"",checked:Array.isArray(t.formData.is_active)?t._i(t.formData.is_active,null)>-1:t.formData.is_active},on:{change:function(e){var n=t.formData.is_active,l=e.target,r=!!l.checked;if(Array.isArray(n)){var o=t._i(n,null);l.checked?o<0&&t.$set(t.formData,"is_active",n.concat([null])):o>-1&&t.$set(t.formData,"is_active",n.slice(0,o).concat(n.slice(o+1)))}else t.$set(t.formData,"is_active",r)}}})])]),t._v(" "),n("span",{staticClass:" heebo-light"},[t._v("\n                        "+t._s(t.$t("form.tax_class.status.subheading"))+"\n                    ")])])]),t._v(" "),n("hr",{staticClass:"text-primary"}),t._v(" "),n("div",{staticClass:"row"},[n("div",{staticClass:"col-lg-12 px-0"},[n("div",{staticClass:"px-0 pt-3"},[n("h2",{staticClass:"m-0 text-body bold"},[t._v(t._s(t.$t("form.multilanguage")))]),t._v(" "),n("p",[n("span",{staticClass:"heebo-light"},[t._v("\n                        "+t._s(t.$t("form.manufacturer.form_description"))+"\n                      ")])]),t._v(" "),n("div",{staticClass:"row mb-2"},[n("div",{staticClass:"col-lg-12 px-0 d-md-flex"},[n("ul",{staticClass:"nav nav-tabs d-inline-block",attrs:{id:"myTab",role:"tablist "}},t._l(t.allActiveLanguages.languages,(function(e,l){return n("li",{key:l,staticClass:"nav-item",attrs:{role:"presentation"}},[n("a",{staticClass:"nav-link",class:0==l?"active":"",attrs:{id:e.code+"-tab","data-bs-toggle":"tab",href:"#"+e.code,role:"tab","aria-controls":e.code,"aria-selected":0==l?"true":"false"}},[t._v(t._s(e.name))])])})),0),t._v(" "),n("div",{staticClass:"tab-content p-4",attrs:{id:"myTabContent"}},t._l(t.allActiveLanguages.languages,(function(e,l){return n("div",{key:e.code,staticClass:"tab-pane fade",class:0==l?"active show":"",attrs:{id:e.code,role:"tabpanel","aria-labelledby":e.code+"-tab"}},[n("div",{staticClass:"row"},[n("div",{staticClass:"col-md-6 my-1"},[n("div",{attrs:{role:"group "}},[n("label",{staticClass:"form-label",attrs:{for:"input-live"}},[t._v(t._s(t.$t("form.tax_class.name.label"))+":")]),t._v(" "),t.error&&t.error["name."+e.code]?n("span",{staticClass:"float-end text-danger"},[t._v("\n                                    "+t._s(t.error["name."+e.code][0])+"\n                                  ")]):t._e(),t._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.formData.name[e.code],expression:"formData.name[language.code]"}],staticClass:"form-control",class:t.error&&t.error["name."+e.code]?"error":"",attrs:{"aria-describedby":"input-live-help input-live-feedback",placeholder:t.$t("form.tax_class.name.placeholder"),trim:""},domProps:{value:t.formData.name[e.code]},on:{input:function(n){n.target.composing||t.$set(t.formData.name,e.code,n.target.value)}}}),t._v(" "),n("span",{staticClass:"heebo-light"},[t._v("\n                                    "+t._s(t.$t("form.tax_class.name.subheading"))+"\n                                  ")])])])]),t._v(" "),n("div",{staticClass:"row"},[n("div",{staticClass:"col-md-12 my-1"},[n("div",{attrs:{role:"group "}},[n("label",{staticClass:"px-2 form-label",attrs:{for:"input-live"}},[t._v(t._s(t.$t("form.tax_class.description.label"))+":")]),t._v(" "),t.error&&t.error["description."+e.code]?n("span",{staticClass:"float-end text-danger"},[t._v("\n                                    "+t._s(t.error["description."+e.code][0])+"\n                                  ")]):t._e(),t._v(" "),n("GlobalCkeditorNuxt",{model:{value:t.formData.description[e.code],callback:function(n){t.$set(t.formData.description,e.code,n)},expression:"\n                                      formData.description[language.code]\n                                    "}}),t._v(" "),n("span",{staticClass:"px-2 heebo-light"},[t._v("\n                                    "+t._s(t.$t("form.tax_class.description.subheading"))+"\n                                  ")])],1)])])])})),0)])])])])])])])]),t._v(" "),n("div",{staticClass:"row"},[n("div",{staticClass:"col-md-12 px-4 text-center text-md-end"},[n("button",{staticClass:"btn btn-primary mb-3 px-3 py-2",attrs:{type:"button",name:"button"},on:{click:t.add}},[t._v("\n                "+t._s(this.$t("form.add"))+"\n              ")])])])])])])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{AdminFormLoader:n(660).default,GlobalCkeditorNuxt:n(667).default})},660:function(t,e,n){"use strict";n.r(e);var l={props:["multilang"]},r=n(71),component=Object(r.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container skeletion-effect"},[n("div",{staticClass:"col-lg-12"},[n("div",{staticClass:"card gutter-b border-0"},[n("div",{staticClass:"card-body p-4"},[t._m(0),t._v(" "),t._m(1),t._v(" "),t.multilang?n("div",[n("hr",{staticClass:"text-primary"}),t._v(" "),t._m(2)]):t._e()])])]),t._v(" "),t._m(3)])}),[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"row"},[n("div",{staticClass:"col-md-6 my-1"},[n("label",{staticClass:"label skeletion-animation"}),t._v(" "),n("div",{staticClass:"input  skeletion-animation"}),t._v(" "),n("div",{staticClass:"subheading skeletion-animation"})]),t._v(" "),n("div",{staticClass:"col-md-6 my-1"},[n("label",{staticClass:"label skeletion-animation"}),t._v(" "),n("div",{staticClass:"input  skeletion-animation"}),t._v(" "),n("div",{staticClass:"subheading skeletion-animation"})]),t._v(" "),n("div",{staticClass:"col-md-6 my-1"},[n("label",{staticClass:"label skeletion-animation"}),t._v(" "),n("div",{staticClass:"input  skeletion-animation"}),t._v(" "),n("div",{staticClass:"subheading skeletion-animation"})]),t._v(" "),n("div",{staticClass:"col-md-6 my-1"},[n("label",{staticClass:"label skeletion-animation"}),t._v(" "),n("div",{staticClass:"input  skeletion-animation"}),t._v(" "),n("div",{staticClass:"subheading skeletion-animation"})])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"row"},[n("div",{staticClass:"col-md-6  my-1 d-flex justify-content-center flex-column "},[n("div",{staticClass:"d-flex align-items-center "},[n("label",{staticClass:"label skeletion-animation"}),t._v(" "),n("div",{staticClass:"switch skeletion-animation"})]),t._v(" "),n("div",{staticClass:"subheading skeletion-animation"})])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"row"},[n("div",{staticClass:"col-lg-12 py-2"},[n("div",{staticClass:"px-0 pt-3"},[n("h2",{staticClass:" skeletion-animation"}),t._v(" "),n("div",{staticClass:"subheading skeletion-animation"}),t._v(" "),n("div",{staticClass:"row"},[n("div",{staticClass:"col-lg-12 px-0 pt-3 d-md-flex"},[n("ul",{staticClass:"nav nav-tabs d-inline-block",attrs:{id:"myTab",role:"tablist "}},[n("div",{staticClass:"tabs"}),t._v(" "),n("div",{staticClass:"tabs"}),t._v(" "),n("div",{staticClass:"tabs"})]),t._v(" "),n("div",{staticClass:"tab-content p-4",attrs:{id:"myTabContent"}},[n("div",{staticClass:"tab-pane fade active show",attrs:{role:"tabpanel"}},[n("div",{staticClass:"row"},[n("div",{staticClass:"col-md-6 my-1"},[n("div",{attrs:{role:"group "}},[n("label",{staticClass:"label skeletion-animation"}),t._v(" "),n("div",{staticClass:"input  skeletion-animation"}),t._v(" "),n("div",{staticClass:"subheading skeletion-animation"})])])]),t._v(" "),n("div",{staticClass:"row"},[n("div",{staticClass:"col-md-12 my-1"},[n("div",{attrs:{role:"group "}},[n("label",{staticClass:"label skeletion-animation"}),t._v(" "),n("div",{staticClass:"textarea  skeletion-animation"}),t._v(" "),n("div",{staticClass:"subheading skeletion-animation"})])])])])])])])])])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"row"},[n("div",{staticClass:"col-md-12 d-flex justify-content-end px-4"},[n("div",{staticClass:"button-add skeletion-animation"}),t._v(" "),n("div",{staticClass:"button-continue skeletion-animation"})])])}],!1,null,null,null);e.default=component.exports},667:function(t,e,n){"use strict";n.r(e);var l;l=n(684);var r={components:{ckeditor:n(685).component},props:{value:{type:String,required:!1},tagName:{type:String,required:!1,default:"div"},disabled:{type:Boolean,required:!1},uploadUrl:{type:String,required:!1},config:{type:Object,required:!1,default:function(){}}},data:function(){return{editor:l}}},o=n(71),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("ckeditor",{attrs:{editor:t.editor,value:t.value,config:t.config,tagName:t.tagName,disabled:t.disabled},on:{input:function(e){return t.$emit("input",e)}}})}),[],!1,null,null,null);e.default=component.exports}}]);