(window.webpackJsonp=window.webpackJsonp||[]).push([[339,14,32],{1244:function(t,e,n){"use strict";n.r(e);n(43),n(25),n(7),n(4),n(57),n(40),n(58);var r=n(21),l=n(0),c=(n(5),n(707),n(129));function o(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function d(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?o(Object(source),!0).forEach((function(e){Object(r.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):o(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var v={layout:"admin",middleware:["admin","permission"],meta:{permission:"addresses.index",strategy:"read"},mixins:[n(665).a],data:function(){return{columns:[{label:this.$t("columns.name"),field:"name"},{label:this.$t("columns.country"),field:"country.name"},{label:this.$t("columns.state"),field:"state.name"},{label:this.$t("columns.city"),field:"city.name"},{label:this.$t("columns.address"),field:"address",sortable:!1},{label:this.$t("columns.zip_code"),field:"zip_code",sortable:!1},{label:this.$t("columns.created_at"),field:"created_at",sortable:!1},{label:this.$t("columns.actions"),field:"actions",sortable:!1}]}},fetch:function(){var t=this;return Object(l.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!t.$gates.hasPermission("addresses.index")){e.next=3;break}return e.next=3,t.fetchAddresses(t.$route.params.id);case 3:case"end":return e.stop()}}),e)})))()},methods:d(d({},Object(c.b)({fetchAddresses:"Addresses/fetchAddresses",deleteAddresses:"Addresses/deleteAddresses",filterAddresses:"Addresses/filterAddresses",updateAddressStatus:"Addresses/updateAddressStatus",updateAddressIsDefault:"Addresses/updateAddressIsDefault"})),{},{exportAddresses:function(t){var e=this;return Object(l.a)(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e.filterData.export=t,n.next=3,e.$repositories.addresses.export(e.filterData);case 3:case"end":return n.stop()}}),n)})))()},deleteAddress:function(t){var e=this;return Object(l.a)(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.deleteAddresses({filterData:e.filterData,address_id:t}).then((function(t){"fail"==t.state&&e.$toast.error(t.message),"success"==t.state&&(e.$toast.success(t.message),e.fetchActiveAddresses())})).catch((function(t){}));case 2:case"end":return n.stop()}}),n)})))()},filter:function(){var t=this;return Object(l.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.filterData.id=t.$route.params.id,e.next=3,t.filterAddresses(t.filterData).then((function(e){"fail"==e.state&&t.$toast.error(e.message),e.state}));case 3:case"end":return e.stop()}}),e)})))()},changeDefaultAddress:function(t,e){var n=this;return Object(l.a)(regeneratorRuntime.mark((function r(){return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,n.updateAddressIsDefault({filterData:n.filterData,address_id:t}).then((function(t){"fail"==t.state&&(n.$toast.error(t.message),e.target.checked=!e.target.checked),"success"==t.state&&(n.$toast.success(t.message),n.fetchActiveAddresses())}));case 2:case"end":return r.stop()}}),r)})))()},changeAddressStatus:function(t,e){var n=this;return Object(l.a)(regeneratorRuntime.mark((function r(){return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,n.updateAddressStatus({filterData:n.filterData,address_id:t}).then((function(t){"fail"==t.state&&(n.$toast.error(t.message),e.target.checked=!e.target.checked),"success"==t.state&&(n.$toast.success(t.message),n.fetchActiveAddresses())})).catch((function(t){e.target.checked=!e.target.checked}));case 2:case"end":return r.stop()}}),r)})))()}}),computed:d({},Object(c.c)({allAddresses:"Addresses/allAddresses"})),mounted:function(){},watch:{allAddresses:function(t,e){this.allAddresses&&null!=this.allAddresses&&null!=this.allAddresses.data&&(this.rows=this.allAddresses.data,this.totalRows=this.allAddresses.meta.total,this.filterData.page!=this.allAddresses.meta.current_page&&(this.filterData.page=this.allAddresses.meta.current_page),this.filterData.perPage!=this.allAddresses.meta.per_page&&(this.filterData.perPage=this.allAddresses.meta.per_page))}}},m=n(71),component=Object(m.a)(v,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"content-header"},[n("div",{staticClass:"row g-0"},[n("div",{staticClass:"col-sm-12 px-0"},[n("h2",{staticClass:"m-0 text-body bold"},[t._v(t._s(this.$t("sidebar.address")))])]),t._v(" "),n("div",{staticClass:"row"},[n("div",{staticClass:"col-sm-12 px-0"},[n("ol",{staticClass:"breadcrumb float-sm-right text-body"},[n("li",{staticClass:"breadcrumb-item "},[n("a",{attrs:{href:"#"}},[t._v(t._s(this.$t("sidebar.home")))])]),t._v(" "),n("li",{staticClass:"breadcrumb-item active"},[t._v(t._s(this.$t("sidebar.address")))])]),t._v(" "),n("p",{staticClass:"text-body-secondary"},[t._v(t._s(this.$t("address.index_description")))])])])])]),t._v(" "),n("section",{staticClass:"content"},[t.$fetchState.pending?n("div",[n("AdminTableLoader")],1):n("div",{staticClass:"container-fluid"},[n("div",{staticClass:"card gutter-b border-0"},[n("div",{staticClass:"card-header p-0"},[n("div",{staticClass:"row table-filter-row g-0 justify-content-end"},[n("div",{staticClass:"col-md-6 col-lg-7"},[n("div",{staticClass:"row g-0 input-group"},[n("div",{staticClass:"col-md-4 col-lg-3 form-group position-relative"},[n("select",{directives:[{name:"model",rawName:"v-model",value:t.filterData.column,expression:"filterData.column"}],staticClass:"form-select ",on:{change:function(e){var n=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){return"_value"in t?t._value:t.value}));t.$set(t.filterData,"column",e.target.multiple?n:n[0])}}},[n("option",{attrs:{value:""}},[t._v(t._s(t.$t("table.select_column")))]),t._v(" "),n("option",{attrs:{value:"name"}},[t._v(t._s(t.$t("columns.name")))])])]),t._v(" "),n("div",{staticClass:"vl"}),t._v(" "),n("div",{staticClass:"form-group position-relative col-md-8 col-lg-5"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.filterData.search,expression:"filterData.search"}],staticClass:"form-control ",attrs:{type:"search",placeholder:this.$t("dataTables.Search")},domProps:{value:t.filterData.search},on:{change:t.filter,keyup:t.removeIcon,input:function(e){e.target.composing||t.$set(t.filterData,"search",e.target.value)}}}),t._v(" "),n("div",{staticClass:"position-absolute search-input-custom",class:{"d-none":t.hideIcon}},[n("fa",{attrs:{icon:["fas","search"],"fixed-width":""}})],1)])])]),t._v(" "),n("div",{staticClass:"col-md-6 col-lg-5 col-xlg-6 table-actions px-0"},[n("div",{staticClass:"align-middle",attrs:{slot:"table-actions"},slot:"table-actions"},[n("nuxt-link",{directives:[{name:"permission",rawName:"v-permission",value:"addresses.create",expression:"'addresses.create'"}],attrs:{to:t.localePath("/admin/addresses/create/"+this.$route.params.id)}},[n("button",{directives:[{name:"tooltip",rawName:"v-tooltip",value:{content:"Add Address"},expression:"{ content: 'Add Address' }"}],staticClass:"btn add px-3 rounded-circle",attrs:{type:"button",name:"button"}},[n("fa",{attrs:{icon:["fas","plus"],"fixed-width":""}})],1)])],1)])])]),t._v(" "),n("div",{staticClass:"card-body mt-2 data-tables-div py-0 m-0 rounded-md"},[n("div",{staticClass:"col-md-12"},[t.$fetchState.pending?t._e():n("vue-good-table",{attrs:{mode:"remote",columns:t.columns,rows:t.rows,totalRows:t.totalRows,"line-numbers":!0,"pagination-options":{mode:"pages",enabled:!0,perPage:t.filterData.perPage,setCurrentPage:t.filterData.page,nextLabel:t.pagination.nextLabel,prevLabel:t.pagination.prevLabel,rowsPerPageLabel:t.pagination.rowsPerPageLabel,ofLabel:t.pagination.ofLabel,pageLabel:t.pagination.pageLabel,allLabel:t.pagination.allLabel},styleClass:"vgt-table striped","row-style-class":"m-5"},on:{"on-page-change":t.onPageChange,"on-sort-change":t.onSortChange,"on-per-page-change":t.onPerPageChange},scopedSlots:t._u([{key:"table-row",fn:function(e){return["is_active"==e.column.field?n("div",[n("div",{staticClass:"form-switch"},[n("input",{staticClass:"form-check-input",attrs:{type:"checkbox",id:"flexSwitchCheckChecked"},domProps:{checked:1==e.row.is_active?"checked":""},on:{change:function(n){return t.changeAddressStatus(e.row.id,n)}}})])]):"actions"==e.column.field?n("div",[n("nuxt-link",{directives:[{name:"permission",rawName:"v-permission",value:"addresses.index",expression:"'addresses.index'"},{name:"tooltip",rawName:"v-tooltip",value:{content:"Show"},expression:"{ content: 'Show' }"}],staticClass:"btn btn-sm rounded-circle text-primary",attrs:{to:t.localePath("/admin/addresses/view/"+e.row.id)}},[n("fa",{attrs:{icon:["fas","eye"],"fixed-width":""}})],1),t._v(" "),n("nuxt-link",{directives:[{name:"permission",rawName:"v-permission",value:"addresses.update",expression:"'addresses.update'"},{name:"tooltip",rawName:"v-tooltip",value:{content:"Edit"},expression:"{ content: 'Edit' }"}],staticClass:" btn btn-sm rounded-circle text-success",attrs:{to:t.localePath("/admin/addresses/edit/"+e.row.id)}},[n("fa",{attrs:{icon:["fas","edit"],"fixed-width":""}})],1),t._v(" "),n("button",{directives:[{name:"permission",rawName:"v-permission",value:"addresses.delete",expression:"'addresses.delete'"},{name:"tooltip",rawName:"v-tooltip",value:{content:"Delete"},expression:"{ content: 'Delete' }"}],staticClass:"btn btn-sm rounded-circle text-danger   ",attrs:{type:"button",name:"button","data-bs-toggle":"modal","data-bs-target":"#DeleteItem"+e.row.id}},[n("fa",{attrs:{icon:["fas","trash-alt"],"fixed-width":""}})],1),t._v(" "),n("AdminDeleteModal",{attrs:{modal_id:"DeleteItem"+e.row.id,delete_id:e.row.id},on:{deleteClicked:function(n){return t.deleteAddress(e.row.id)}}})],1):n("span",[t._v("\n                    "+t._s(e.formattedRow[e.column.field])+"\n                  ")])]}}],null,!1,2154400682)},[t._v(" "),n("div",{attrs:{slot:"emptystate"},slot:"emptystate"},[t._v("\n                "+t._s(t.$t("table.table_empty_message"))+"\n              ")])])],1)])])])])])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{AdminTableLoader:n(668).default,AdminDeleteModal:n(672).default})},665:function(t,e,n){"use strict";n(7),n(4),n(209),n(33),n(258);e.a={data:function(){return{hideIcon:0,filterData:{id:"",search:"",column:"",page:1,perPage:10,sort:{field:"",type:""},export:"",date_from:"",date_to:"",status:"",vendor_id:""},pagination:{nextLabel:this.$t("pagination.nextLabel"),prevLabel:this.$t("pagination.prevLabel"),rowsPerPageLabel:this.$t("pagination.rowsPerPageLabel"),ofLabel:this.$t("pagination.ofLabel"),pageLabel:this.$t("pagination.pageLabel"),allLabel:this.$t("pagination.allLabel")},rows:[],totalRows:""}},methods:{onPageChange:function(t){this.filterData.page=t.currentPage,this.filter()},onPerPageChange:function(t){var e;(this.filterData.page=1,-1==t.currentPerPage)?this.filterData.perPage=null!==(e=this.totalRows)&&void 0!==e?e:0:this.filterData.perPage=t.currentPerPage;this.filter(),this.filterData.perPage=""},onSortChange:function(t){"none"==t[0].type?this.filterData.sort.type="":this.filterData.sort.type=t[0].type,this.filterData.sort.field=t[0].field,this.filter()},removeIcon:function(){""!=this.filterData.search?this.hideIcon=1:this.hideIcon=0}}}},668:function(t,e,n){"use strict";n.r(e);var r={props:["image"]},l=n(71),component=Object(l.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container-fluid skeletion-effect"},[n("div",{staticClass:"card gutter-b border-0"},[n("div",{staticClass:"card-header p-0"},[n("div",{staticClass:"row table-filter-row g-0 mx-0 justify-content-end"},[t._m(0),t._v(" "),n("div",{staticClass:"col-md-6 col-lg-5 col-xlg-6 table-actions px-0"},[n("div",{staticClass:"align-middle",attrs:{slot:"table-actions"},slot:"table-actions"},[n("div",{staticClass:"circle-btn skeletion-animation"}),t._v(" "),n("div",{staticClass:"circle-btn skeletion-animation"})])])])]),t._v(" "),n("div",{staticClass:"card-body  mt-2 data-tables-div py-0 m-0 rounded-md"},[n("div",{staticClass:"col-md-12"},[n("div",{staticClass:"vgt-wrap"},[n("div",{staticClass:"vgt-inner-wrap"},[n("div",{staticClass:"vgt-fixed-header"}),t._v(" "),n("div",{staticClass:"vgt-responsive"},[n("table",{staticClass:"vgt-table striped",attrs:{id:"vgt-table"}},[n("thead",[n("tr",[n("th",{staticClass:"line-numbers",attrs:{scope:"col"}}),t._v(" "),t._m(1),t._v(" "),t.image?n("span",[t._m(2)]):t._e(),t._v(" "),t._m(3),t._v(" "),t._m(4),t._v(" "),t._m(5),t._v(" "),t._m(6)])]),t._v(" "),n("tbody",[n("tr",{staticClass:"m-5"},[t._m(7),t._v(" "),t._m(8),t._v(" "),t.image?n("span",[t._m(9)]):t._e(),t._v(" "),t._m(10),t._v(" "),t._m(11),t._v(" "),t._m(12),t._v(" "),t._m(13)]),t._v(" "),n("tr",{staticClass:"m-5"},[t._m(14),t._v(" "),t._m(15),t._v(" "),t.image?n("span",[t._m(16)]):t._e(),t._v(" "),t._m(17),t._v(" "),t._m(18),t._v(" "),t._m(19),t._v(" "),t._m(20)]),t._v(" "),n("tr",{staticClass:"m-5"},[t._m(21),t._v(" "),t._m(22),t._v(" "),t.image?n("span",[t._m(23)]):t._e(),t._v(" "),t._m(24),t._v(" "),t._m(25),t._v(" "),t._m(26),t._v(" "),t._m(27)]),t._v(" "),n("tr",{staticClass:"m-5"},[t._m(28),t._v(" "),t._m(29),t._v(" "),t.image?n("span",[t._m(30)]):t._e(),t._v(" "),t._m(31),t._v(" "),t._m(32),t._v(" "),t._m(33),t._v(" "),t._m(34)]),t._v(" "),n("tr",{staticClass:"m-5"},[t._m(35),t._v(" "),t._m(36),t._v(" "),t.image?n("span",[t._m(37)]):t._e(),t._v(" "),t._m(38),t._v(" "),t._m(39),t._v(" "),t._m(40),t._v(" "),t._m(41)])])])]),t._v(" "),t._m(42)])])])])])])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"col-md-6 col-lg-7"},[e("div",{staticClass:"filter-bar skeletion-animation"})])},function(){var t=this.$createElement,e=this._self._c||t;return e("th",[e("div",{staticClass:"heading skeletion-animation"})])},function(){var t=this.$createElement,e=this._self._c||t;return e("th",[e("div",{staticClass:"heading skeletion-animation"})])},function(){var t=this.$createElement,e=this._self._c||t;return e("th",[e("div",{staticClass:"heading skeletion-animation"})])},function(){var t=this.$createElement,e=this._self._c||t;return e("th",[e("div",{staticClass:"heading skeletion-animation"})])},function(){var t=this.$createElement,e=this._self._c||t;return e("th",[e("div",{staticClass:"heading skeletion-animation"})])},function(){var t=this.$createElement,e=this._self._c||t;return e("th",[e("div",{staticClass:"heading skeletion-animation"})])},function(){var t=this.$createElement,e=this._self._c||t;return e("th",{staticClass:"line-numbers"},[e("div",{staticClass:"icon skeletion-animation"})])},function(){var t=this.$createElement,e=this._self._c||t;return e("td",{staticClass:"vgt-left-align"},[e("div",{staticClass:"heading skeletion-animation"})])},function(){var t=this.$createElement,e=this._self._c||t;return e("td",{staticClass:"vgt-left-align"},[e("div",{staticClass:"image skeletion-animation"})])},function(){var t=this.$createElement,e=this._self._c||t;return e("td",{staticClass:"vgt-left-align"},[e("div",{staticClass:"heading skeletion-animation"})])},function(){var t=this.$createElement,e=this._self._c||t;return e("td",{staticClass:"vgt-left-align"},[e("div",{staticClass:"switch skeletion-animation"})])},function(){var t=this.$createElement,e=this._self._c||t;return e("td",{staticClass:"vgt-left-align"},[e("div",{staticClass:"content skeletion-animation"})])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("td",{staticClass:"vgt-left-align"},[n("div",{staticClass:"icon skeletion-animation"}),t._v(" "),n("div",{staticClass:"icon skeletion-animation"}),t._v(" "),n("div",{staticClass:"icon skeletion-animation"})])},function(){var t=this.$createElement,e=this._self._c||t;return e("th",{staticClass:"line-numbers"},[e("div",{staticClass:"icon skeletion-animation"})])},function(){var t=this.$createElement,e=this._self._c||t;return e("td",{staticClass:"vgt-left-align"},[e("div",{staticClass:"heading skeletion-animation"})])},function(){var t=this.$createElement,e=this._self._c||t;return e("td",{staticClass:"vgt-left-align"},[e("div",{staticClass:"image skeletion-animation"})])},function(){var t=this.$createElement,e=this._self._c||t;return e("td",{staticClass:"vgt-left-align"},[e("div",{staticClass:"heading skeletion-animation"})])},function(){var t=this.$createElement,e=this._self._c||t;return e("td",{staticClass:"vgt-left-align"},[e("div",{staticClass:"switch skeletion-animation"})])},function(){var t=this.$createElement,e=this._self._c||t;return e("td",{staticClass:"vgt-left-align"},[e("div",{staticClass:"content skeletion-animation"})])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("td",{staticClass:"vgt-left-align"},[n("div",{staticClass:"icon skeletion-animation"}),t._v(" "),n("div",{staticClass:"icon skeletion-animation"}),t._v(" "),n("div",{staticClass:"icon skeletion-animation"})])},function(){var t=this.$createElement,e=this._self._c||t;return e("th",{staticClass:"line-numbers"},[e("div",{staticClass:"icon skeletion-animation"})])},function(){var t=this.$createElement,e=this._self._c||t;return e("td",{staticClass:"vgt-left-align"},[e("div",{staticClass:"heading skeletion-animation"})])},function(){var t=this.$createElement,e=this._self._c||t;return e("td",{staticClass:"vgt-left-align"},[e("div",{staticClass:"image skeletion-animation"})])},function(){var t=this.$createElement,e=this._self._c||t;return e("td",{staticClass:"vgt-left-align"},[e("div",{staticClass:"heading skeletion-animation"})])},function(){var t=this.$createElement,e=this._self._c||t;return e("td",{staticClass:"vgt-left-align"},[e("div",{staticClass:"switch skeletion-animation"})])},function(){var t=this.$createElement,e=this._self._c||t;return e("td",{staticClass:"vgt-left-align"},[e("div",{staticClass:"content skeletion-animation"})])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("td",{staticClass:"vgt-left-align"},[n("div",{staticClass:"icon skeletion-animation"}),t._v(" "),n("div",{staticClass:"icon skeletion-animation"}),t._v(" "),n("div",{staticClass:"icon skeletion-animation"})])},function(){var t=this.$createElement,e=this._self._c||t;return e("th",{staticClass:"line-numbers"},[e("div",{staticClass:"icon skeletion-animation"})])},function(){var t=this.$createElement,e=this._self._c||t;return e("td",{staticClass:"vgt-left-align"},[e("div",{staticClass:"heading skeletion-animation"})])},function(){var t=this.$createElement,e=this._self._c||t;return e("td",{staticClass:"vgt-left-align"},[e("div",{staticClass:"image skeletion-animation"})])},function(){var t=this.$createElement,e=this._self._c||t;return e("td",{staticClass:"vgt-left-align"},[e("div",{staticClass:"heading skeletion-animation"})])},function(){var t=this.$createElement,e=this._self._c||t;return e("td",{staticClass:"vgt-left-align"},[e("div",{staticClass:"switch skeletion-animation"})])},function(){var t=this.$createElement,e=this._self._c||t;return e("td",{staticClass:"vgt-left-align"},[e("div",{staticClass:"content skeletion-animation"})])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("td",{staticClass:"vgt-left-align"},[n("div",{staticClass:"icon skeletion-animation"}),t._v(" "),n("div",{staticClass:"icon skeletion-animation"}),t._v(" "),n("div",{staticClass:"icon skeletion-animation"})])},function(){var t=this.$createElement,e=this._self._c||t;return e("th",{staticClass:"line-numbers"},[e("div",{staticClass:"icon skeletion-animation"})])},function(){var t=this.$createElement,e=this._self._c||t;return e("td",{staticClass:"vgt-left-align"},[e("div",{staticClass:"heading skeletion-animation"})])},function(){var t=this.$createElement,e=this._self._c||t;return e("td",{staticClass:"vgt-left-align"},[e("div",{staticClass:"image skeletion-animation"})])},function(){var t=this.$createElement,e=this._self._c||t;return e("td",{staticClass:"vgt-left-align"},[e("div",{staticClass:"heading skeletion-animation"})])},function(){var t=this.$createElement,e=this._self._c||t;return e("td",{staticClass:"vgt-left-align"},[e("div",{staticClass:"switch skeletion-animation"})])},function(){var t=this.$createElement,e=this._self._c||t;return e("td",{staticClass:"vgt-left-align"},[e("div",{staticClass:"content skeletion-animation"})])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("td",{staticClass:"vgt-left-align"},[n("div",{staticClass:"icon skeletion-animation"}),t._v(" "),n("div",{staticClass:"icon skeletion-animation"}),t._v(" "),n("div",{staticClass:"icon skeletion-animation"})])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"vgt-wrap__footer vgt-clearfix"},[n("div",{staticClass:"footer__row-count vgt-pull-left"},[n("div",{staticClass:"content skeletion-animation"})]),t._v(" "),n("div",{staticClass:"footer__navigation vgt-pull-right"},[n("div",{staticClass:"footer__navigation__page-info"},[n("div",{staticClass:"content skeletion-animation"})])])])}],!1,null,null,null);e.default=component.exports},672:function(t,e,n){"use strict";n.r(e);var r={props:["modal_id","delete_id"],methods:{delete_item:function(){this.$emit("deleteClicked")}}},l=n(71),component=Object(l.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"modal fade",attrs:{id:t.modal_id,tabindex:"-1","aria-labelledby":"exampleModalLabel","aria-hidden":"true"}},[n("div",{staticClass:"modal-dialog modal-dialog-centered"},[n("div",{staticClass:"modal-content"},[n("div",{staticClass:"modal-body p-5 text-center"},[n("div",{staticClass:"warning-icon text-white"},[n("fa",{attrs:{icon:["fas","trash-alt"],"fixed-width":""}})],1),t._v(" "),n("h3",{staticClass:"py-5"},[t._v(t._s(t.$t("are_you_sure_you_want_to_delete")))]),t._v(" "),n("button",{staticClass:"btn btn-danger",attrs:{"data-bs-dismiss":"modal"},on:{click:t.delete_item}},[t._v("\r\n                                    "+t._s(t.$t("delete"))+"\r\n                            ")]),t._v(" "),n("button",{staticClass:"btn btn-secondary",attrs:{type:"button","data-bs-dismiss":"modal"}},[t._v(t._s(t.$t("web.customer.wallet.close")))])])])])])}),[],!1,null,null,null);e.default=component.exports},707:function(t,e,n){"use strict";n(43),n(7),n(4),n(57),n(40),n(58);var r=n(0),l=n(21),c=(n(5),n(26),n(25),n(49),n(129));function o(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function d(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?o(Object(source),!0).forEach((function(e){Object(l.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):o(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}e.a={data:function(){return{product_type_options:[{value:1,text:this.$t("form.product.product_type.simple")},{value:2,text:this.$t("form.product.product_type.variable")}],selected_vendor:"",selected_tax_class:"",selected_manufacturer:"",is_variable:1,selected_related_products:"",selected_brand:"",selectedOptions:"",selected_unit:"",categories:[],formData:{name:{},short_description:{},description:{},refund_policy:{},categories:[],weight:"",unit_id:"",price:"",stock:"",sku:"",modal:"",shipping_weight:"",manufacturer_id:"",brand_id:"",vendor_id:"",available_date:"",tax_class_id:"",min_order:1,max_order:"",product_type:1,is_feature:!1,is_active:!1,flash_sale:{exists:!1,start_date:"",expire_date:"",product_price:0,description:"",is_active:!0},special_sale:{exists:!1,expire_date:"",special_price:"",is_active:!0},related_products:""},error:!1,key:1,addContinue:!1}},methods:d(d({},Object(c.b)({fetchActiveCategories:"General/fetchActiveCategories",fetchActiveManufacturers:"General/fetchActiveManufacturers",fetchActiveBrands:"General/fetchActiveBrands",fetchActiveVendors:"General/fetchActiveVendors",fetchActiveUnits:"General/fetchActiveUnits",fetchActiveTaxClasses:"General/fetchActiveTaxClasses",fetchActiveProducts:"General/fetchActiveProducts"})),{},{reInitData:function(){this.formData.name={},this.formData.short_description={},this.formData.description={},this.formData.refund_policy={},this.formData.categories=[],this.formData.weight="",this.formData.unit_id="",this.formData.price="",this.formData.stock="",this.formData.modal="",this.formData.manufacturer_id="",this.formData.brand_id="",this.formData.tax_class_id="",this.formData.min_order=1,this.formData.max_order="",this.formData.available_date="",this.formData.product_type=0,this.formData.is_feature=!1,this.formData.is_active=!1,this.formData.vendor_id="",this.formData.flash_sale.exists=!1,this.formData.flash_sale.start_date="",this.formData.flash_sale.expire_date="",this.formData.flash_sale.product_price="",this.formData.flash_sale.description="",this.formData.flash_sale.is_active=!0,this.formData.special_sale.exists=!1,this.formData.special_sale.expire_date="",this.formData.special_sale.special_price="",this.formData.special_sale.is_active=!0,this.key=this.key+1},vendorChange:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(""!=t.formData.vendor_id&&null!=t.formData.vendor_id){e.next=4;break}t.categories=t.allActiveCategories.categories,e.next=8;break;case 4:return e.next=6,t.$generalService.vendorCategories(t.formData.vendor_id);case 6:(n=e.sent)&&(t.categories=n.data[0].categories);case 8:t.formData.categories=[],t.key=t.key+1;case 10:case"end":return e.stop()}}),e)})))()}}),computed:d({},Object(c.c)({allActiveLanguages:"General/allActiveLanguages",allActiveManufacturers:"General/allActiveManufacturers",allActiveBrands:"General/allActiveBrands",allActiveVendors:"General/allActiveVendors",allActiveCategories:"General/allActiveCategories",allActiveUnits:"General/allActiveUnits",allActiveTaxClasses:"General/allActiveTaxClasses",allActiveSettings:"General/allActiveSettings",allActiveProducts:"General/allActiveProducts"})),watch:{allActiveCategories:function(t,e){var n=this;return Object(r.a)(regeneratorRuntime.mark((function t(){var e;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(1!=n.allActiveSettings.is_multi_vendor&&"1"!=n.allActiveSettings.is_multi_vendor){t.next=11;break}if(""==n.formData.vendor_id){t.next=8;break}return t.next=4,n.$general.vendorCategories(n.formData.vendor_id);case 4:e=t.sent,n.categories,e.categories,t.next=9;break;case 8:n.categories=n.allActiveCategories.categories;case 9:t.next=12;break;case 11:n.categories=n.allActiveCategories.categories;case 12:case"end":return t.stop()}}),t)})))()}}}}}]);