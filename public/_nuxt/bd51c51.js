(window.webpackJsonp=window.webpackJsonp||[]).push([[31],{925:function(t,e,n){"use strict";n.r(e);var d={props:["order"],data:function(){return{}},mounted:function(){}},c=n(71),component=Object(c.a)(d,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",[n("table",{staticClass:"table text-center"},[n("tbody",[n("tr",[t._m(0),t._v(" "),n("td",[n("b",[t._v(t._s(this.$t("columns.consignment_number"))+"\n                      ")])]),t._v(" "),n("td",[n("b",[t._v(t._s(this.$t("columns.order_status"))+"\n                      ")])]),t._v(" "),n("td",[n("b",[t._v(t._s(this.$t("columns.order_time_currency_display_total")))])]),t._v(" "),n("td",[n("b",[t._v(t._s(this.$t("columns.is_paid")))])]),t._v(" "),n("td",[n("b",[t._v(t._s(this.$t("columns.payment_method")))])]),t._v(" "),n("td",[n("b",[t._v(t._s(this.$t("columns.store_name")))])]),t._v(" "),n("td",[n("b",[t._v(t._s(this.$t("columns.status")))])])])])])]),t._v(" "),t._l(t.order,(function(e,d){return n("div",{key:d,staticClass:"accordion accordion-flush",attrs:{id:"accordionFlushExample"}},[n("div",{staticClass:"accordion-item"},[n("h2",{staticClass:"accordion-header",attrs:{id:"flush-headingOne"+d}},[n("button",{staticClass:"accordion-button collapsed",attrs:{type:"button","data-bs-toggle":"collapse","data-bs-target":"#flush-collapseOne"+d,"aria-expanded":"false","aria-controls":"flush-collapseOne"}},[n("table",{staticClass:"table text-center mb-0"},[n("tbody",[n("tr",[n("td",[t._v(t._s(d+1))]),t._v(" "),n("td",[t._v(t._s(e.number))]),t._v(" "),n("td",[t._v(t._s(e.order_status.name))]),t._v(" "),n("td",[t._v("\n                  "+t._s(e.order_time_currency_display_total)+"\n                ")]),t._v(" "),n("td",[1==e.is_paid?n("span",[t._v("\n                    "+t._s(t.$t("is_paid"))+"\n                  ")]):n("span",[t._v("\n                    "+t._s(t.$t("is_not_paid"))+"\n                  ")])]),t._v(" "),n("td",["cash_on_delivery"==e.payment_method.code?n("span",[t._v("\n                    "+t._s(t.$t("payment.cash_on_delivery"))+"\n                  ")]):"wallet"==e.payment_method.code?n("span",[t._v("\n                    "+t._s(t.$t("payment.wallet"))+"\n                  ")]):"stripe"==e.payment_method.code?n("span",[t._v("\n                    "+t._s(t.$t("payment.stripe"))+"\n                  ")]):"braintree"==e.payment_method.code?n("span",[t._v("\n                    "+t._s(t.$t("payment.braintree"))+"\n                  ")]):"paypal"==e.payment_method.code?n("span",[t._v("\n                    "+t._s(t.$t("payment.paypal"))+"\n                  ")]):t._e()]),t._v(" "),e.vendor.store_details?n("td",[t._v("\n                    "+t._s(e.vendor.store_details.name)+"\n                ")]):n("td",[t._v("\n                    Admin\n                ")]),t._v(" "),n("td",[1==e.is_active?n("div",[n("div",{staticClass:"form-switch"},[n("input",{staticClass:"form-check-input",attrs:{type:"checkbox",id:"flexSwitchCheckChecked"},domProps:{checked:1==e.is_active?"checked":""}})])]):t._e()])])])])])]),t._v(" "),n("div",{staticClass:"accordion-collapse collapse",attrs:{id:"flush-collapseOne"+d,"aria-labelledby":"flush-headingOne","data-bs-parent":"#accordionFlushExample"}},[n("div",{staticClass:"accordion-body"},t._l(e.order_products,(function(e,d){return n("div",{key:d},[n("div",{staticClass:"row my-3 order-items p-3 shadow-sm mb-3 border"},[n("div",{staticClass:"\n                  col-md-2\n                  d-flex\n                  justify-content-center\n                  align-items-center\n                "},[e.product.media&&e.product.media[0]&&e.product.media[0].thumbnails?n("div",{staticClass:"item-img"},[n("img",{staticClass:"img-fluid",attrs:{src:"/backend"+e.product.media[0].thumbnails.small.thumbnail,alt:"Product Image"}})]):n("div",{staticClass:"item-img"},[n("img",{staticClass:"img-fluid",attrs:{src:"/_nuxt/client/assets/images/ringg.png",alt:"Product Image"}})])]),t._v(" "),n("div",{staticClass:"\n                  col-md-4\n                  d-flex\n                  justify-content-start\n                  align-items-center\n                "},[n("div",{staticClass:"item-detail w-75 pe-5"},[n("h4",{staticClass:"mb-0"},[t._v("\n                    "+t._s(e.product.name)+"\n                  ")]),t._v(" "),t._l(e.order_product_variant_details,(function(d){return e.order_product_variant_details?n("span",[t._v("\n                    "+t._s(d.attribute_name)+" : "+t._s(d.value_name)+"\n                    "),n("br")]):t._e()}))],2),t._v("\n                "+t._s(t.$t("quantity"))+":"),e.quantity?n("span",{staticClass:"\n                    col-md-2\n                    d-flex\n                    justify-content-center\n                    align-items-center\n                    fw-bold\n                  "},[t._v("\n                  "+t._s(e.quantity)+"\n                ")]):t._e()]),t._v(" "),null!=e.sale_type?n("div",{staticClass:"\n                  col-md-3\n                  d-flex\n                  justify-content-center\n                  align-items-center\n                "},[n("div",{staticClass:"text-primary h4 fw-bold mb-0"},[t._v("\n                  "+t._s(e.current_product_order_time_total_sale_display_price)+"\n                ")])]):n("div",{staticClass:"\n                  col-md-3\n                  d-flex\n                  justify-content-center\n                  align-items-center\n                "},[n("div",{staticClass:"text-primary h4 fw-bold mb-1"},[t._v("\n                  "+t._s(e.current_product_order_time_total_display_price)+"\n                ")])])])])})),0)])])])}))],2)}),[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("td",[n("b",[t._v("Sr#")])])}],!1,null,null,null);e.default=component.exports}}]);