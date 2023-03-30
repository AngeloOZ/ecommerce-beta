(window.webpackJsonp=window.webpackJsonp||[]).push([[138,132],{1376:function(t,e,r){"use strict";r.r(e);r(43),r(25),r(7),r(4),r(57),r(40),r(58);var o=r(0),n=r(21),l=(r(5),r(133),r(33),r(82),r(702),r(81),r(129));function c(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function d(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?c(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):c(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var m={data:function(){return{coupon_code:"",loading:!1,errors:{},couponData:{},totalAmount:"",couponApply:!1}},computed:d({},Object(l.c)({allCartItems:"Web/Cart/allCartItems"})),mounted:function(){},methods:d(d({},Object(l.b)({fetchCartItems:"Web/Cart/fetchCartItems"})),{},{validateCouponCode:function(){var t=this;return Object(o.a)(regeneratorRuntime.mark((function e(){var r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.loading=!0,r=t.allCartItems.subtotal.split(",").join(""),e.next=4,t.$webService.validateCouponCode({coupon_code:t.coupon_code,order_amount:r}).then((function(e){if(e.success){if(t.couponData=e.data,t.couponApply=!0,1==t.couponData.discount_type){var r=t.allCartItems.subtotal.split(",").join(""),o=parseFloat(r)-parseFloat(t.couponData.amount);o=t.format_number(o,t.allCartItems.currency_decimal),t.totalAmount=o,t.allCartItems.discount_with_currency=t.couponData.amount_with_currency,t.allCartItems.discount=t.couponData.amount.toFixed(t.allCartItems.currency_decimal),t.allCartItems.total=Math.round(t.totalAmount),t.allCartItems.coupon_id=t.couponData.id}else if(2==t.couponData.discount_type){var n=parseFloat(t.couponData.amount)/100,l=t.allCartItems.subtotal.split(",").join(""),c=n*parseFloat(l);t.allCartItems.discount_with_currency=c.toFixed(t.allCartItems.currency_decimal),t.allCartItems.discount=c.toFixed(t.allCartItems.currency_decimal);var d=parseFloat(l)-parseFloat(c);d=t.format_number(d,t.allCartItems.currency_decimal),t.totalAmount=d,t.allCartItems.total=Math.round(t.totalAmount),t.allCartItems.coupon_id=t.couponData.id}localStorage.setItem("coupon_applied",t.coupon_code),t.$toast.success(t.$t("coupon_is_applied")),t.loading=!1}else t.loading=!1,t.coupon_code="",t.$toast.error(e.message)})).catch((function(e){t.coupon_code="",t.loading=!1,t.errors=e.response.data.errors,t.$toast.error(t.errors.coupon_code[0])}));case 4:case"end":return e.stop()}}),e)})))()},resetCouponCode:function(){this.coupon_code="",this.totalAmount=this.allCartItems.subtotal,this.couponData.amount=null,this.couponApply=!1,localStorage.removeItem("coupon_applied"),this.$toast.error(this.$t("coupon_is_removed")),this.fetchCartItems()},format_number:function(t,e){return t.toFixed(e).replace(/(\d)(?=(\d{3})+\.)/g,"$1,")}}),created:function(){var t=localStorage.getItem("coupon_applied");t&&(this.coupon_code=t,this.validateCouponCode())},watch:{allCartItems:{deep:!0,immediate:!0,handler:function(){this.totalAmount=this.allCartItems.subtotal,this.couponData.amount=null,this.couponApply=!1}}}},_=r(71),component=Object(_.a)(m,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"cart-totals p-4 bg-secondary"},[r("div",{staticClass:"d-flex justify-content-between align-items-center mb-4"},[r("h5",{staticClass:"text-primary text-uppercase fw-bold mb-0"},[t._v("\n      "+t._s(this.$t("cart_total"))+"\n    ")])]),t._v(" "),r("div",{staticClass:"cart-total-widget"},[r("ul",{staticClass:"product-list"},[r("li",[r("h6",[t._v(t._s(this.$t("sub_total")))]),t._v(" "),r("div",{staticClass:"item-s"},[t._v("\n          "+t._s(t.allCartItems?t.allCartItems.subtotal_with_currency:0)+"\n\n        ")])]),t._v(" "),null!=t.couponData.amount?r("li",{staticClass:"d-flex justify-content-between"},[r("h6",[t._v(t._s(this.$t("discount"))+" ("+t._s(t.couponData.code)+")")]),t._v(" "),r("div",{staticClass:"d-flex flex-column"},["rlt"==t.allCartItems.currency_direction?r("div",{staticClass:"total-price item-s"},[t._v("\n            "+t._s(t.allCartItems?t.allCartItems.discount:0)+"  "+t._s(t.allCartItems.symbol)+"\n          ")]):t._e(),t._v(" "),"ltr"==t.allCartItems.currency_direction?r("div",{staticClass:"item-s"},[t._v("\n              "+t._s(t.allCartItems.symbol)+" "+t._s(t.allCartItems?t.allCartItems.discount:0)+"\n            ")]):t._e(),t._v(" "),r("div",{staticClass:"text-end"},[r("fa",{staticClass:"me-3 text-danger",attrs:{icon:["fas","trash"]},on:{click:t.resetCouponCode}})],1)])]):t._e(),t._v(" "),r("li",[r("h6",[t._v(t._s(this.$t("total")))]),t._v(" "),"ltr"==t.allCartItems.currency_direction?r("div",{staticClass:"total-price item-s"},[t._v("\n         "+t._s(t.allCartItems.symbol)+" "+t._s(t.totalAmount)+"\n        ")]):t._e(),t._v(" "),"rlt"==t.allCartItems.currency_direction?r("div",{staticClass:"total-price item-s"},[t._v("\n         "+t._s(t.totalAmount)+t._s(t.allCartItems.symbol)+"\n        ")]):t._e()]),t._v(" "),t.couponApply?t._e():r("li",[r("input",{directives:[{name:"model",rawName:"v-model",value:t.coupon_code,expression:"coupon_code"}],staticClass:"form-control py-2",attrs:{type:"text",placeholder:t.$t("web.customer.cart.enter_coupon_code")},domProps:{value:t.coupon_code},on:{input:function(e){e.target.composing||(t.coupon_code=e.target.value)}}}),r("br"),t._v(" "),r("button",{staticClass:"btn btn-primary ms-2 d-flex justify-content-center px-3 py-2",attrs:{type:"button"},on:{click:t.validateCouponCode}},[r("span",{staticClass:"py-0 fw-bold text-uppercase"},[t._v(t._s(t.$t("web.customer.cart.apply")))])])])]),t._v(" "),t.$auth.loggedIn&&t.$gates.hasRole("customer")?r("div",{staticClass:"d-flex flex-column text-center p-4"},[r("nuxt-link",{staticClass:"\n          btn\n          bg-warning\n          rounded\n          py-2\n          lh-sm\n          fw-bold\n          text-uppercase\n          d-none d-lg-block\n        ",attrs:{to:"/ProductOrder"}},[t._v("\n        "+t._s(this.$t("proceed_to_checkout"))+"\n      ")]),t._v(" "),r("nuxt-link",{staticClass:"\n          btn\n          bg-warning\n          rounded\n          py-2\n          lh-sm\n          fw-bold\n          text-uppercase\n          d-lg-none d-block\n        ",attrs:{to:"/ProductOrder"}},[t._v("\n        "+t._s(this.$t("proceed"))+"\n      ")]),t._v(" "),r("nuxt-link",{staticClass:"back-link text-decoration-none mt-4 fw-bold text-uppercase",attrs:{to:"/shop"}},[t._v(t._s(this.$t("continue_shopping")))])],1):r("div",{staticClass:"d-flex flex-column text-center p-4"},[r("button",{staticClass:"\n          btn\n          bg-warning\n          rounded\n          py-2\n          lh-sm\n          fw-bold\n          text-uppercase\n          d-none d-lg-block\n        ",attrs:{type:"button",name:"button","data-bs-toggle":"modal","data-bs-target":"#DeleteItem23"}},[t._v("\n        "+t._s(this.$t("proceed_to_checkout"))+"\n      ")]),t._v(" "),r("button",{staticClass:"\n          btn\n          bg-warning\n          rounded\n          py-2\n          lh-sm\n          fw-bold\n          text-uppercase\n          d-lg-none d-block\n        ",attrs:{type:"button",name:"button","data-bs-toggle":"modal","data-bs-target":"#DeleteItem23"}},[t._v("\n        "+t._s(this.$t("proceed"))+"\n      ")]),t._v(" "),r("WebsiteOrderFormStepsTemplate1AuthModal")],1)])])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{WebsiteOrderFormStepsTemplate1AuthModal:r(806).default})},702:function(t,e,r){"use strict";var o=r(6),n=r(11),l=r(88),c=r(370),d=r(369),m=r(10),_=RangeError,f=String,v=Math.floor,h=n(d),C=n("".slice),y=n(1..toFixed),w=function(t,e,r){return 0===e?r:e%2==1?w(t,e-1,r*t):w(t*t,e/2,r)},x=function(data,t,e){for(var r=-1,o=e;++r<6;)o+=t*data[r],data[r]=o%1e7,o=v(o/1e7)},I=function(data,t){for(var e=6,r=0;--e>=0;)r+=data[e],data[e]=v(r/t),r=r%t*1e7},O=function(data){for(var t=6,s="";--t>=0;)if(""!==s||0===t||0!==data[t]){var e=f(data[t]);s=""===s?e:s+h("0",7-e.length)+e}return s};o({target:"Number",proto:!0,forced:m((function(){return"0.000"!==y(8e-5,3)||"1"!==y(.9,0)||"1.25"!==y(1.255,2)||"1000000000000000128"!==y(0xde0b6b3a7640080,0)}))||!m((function(){y({})}))},{toFixed:function(t){var e,r,o,n,d=c(this),m=l(t),data=[0,0,0,0,0,0],v="",y="0";if(m<0||m>20)throw _("Incorrect fraction digits");if(d!=d)return"NaN";if(d<=-1e21||d>=1e21)return f(d);if(d<0&&(v="-",d=-d),d>1e-21)if(r=(e=function(t){for(var e=0,r=t;r>=4096;)e+=12,r/=4096;for(;r>=2;)e+=1,r/=2;return e}(d*w(2,69,1))-69)<0?d*w(2,-e,1):d/w(2,e,1),r*=4503599627370496,(e=52-e)>0){for(x(data,0,r),o=m;o>=7;)x(data,1e7,0),o-=7;for(x(data,w(10,o,1),0),o=e-1;o>=23;)I(data,1<<23),o-=23;I(data,1<<o),x(data,1,1),I(data,2),y=O(data)}else x(data,0,r),x(data,1<<-e,0),y=O(data)+h("0",m);return y=m>0?v+((n=y.length)<=m?"0."+h("0",m-n)+y:C(y,0,n-m)+"."+C(y,n-m)):v+y}})},806:function(t,e,r){"use strict";r.r(e);r(43),r(25),r(7),r(4),r(57),r(40),r(58);var o=r(0),n=r(21),l=(r(5),r(33),r(81),r(129));function c(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function d(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?c(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):c(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var m={layout:"default_guest",auth:!1,data:function(){return{signUpData:{first_name:"",email:"",password:"",password_confirmation:""},formData:{email:"",password:"",strategy:"customer"},error:null,errors:""}},methods:d(d({},Object(l.b)({fetchWishlistItems:"Web/Wishlist/fetchWishlistItems",fetchCartItems:"Web/Cart/fetchCartItems"})),{},{loginPassport:function(){var t=this;return Object(o.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.formData.email&&t.formData.password){e.next=5;break}t.formData.email||t.$toast.error(t.$t("email_is_required")),t.formData.password||t.$toast.error(t.$t("password_field_is_required")),e.next=8;break;case 5:return t.error=null,e.next=8,t.$auth.loginWith("customer",{data:t.formData}).then(Object(o.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$gates.setRoles(t.$auth.user.roles);case 2:return e.next=4,t.$gates.setPermissions(t.$auth.user.permissions);case 4:return e.next=6,t.fetchCartItems();case 6:t.$router.replace(t.localePath("/ProductOrder")),t.$toast.success(t.$t("you_have_been_logged_in"));case 8:case"end":return e.stop()}}),e)})))).catch((function(e){return t.error=e.response.data}));case 8:case"end":return e.stop()}}),e)})))()},continueAsGuest:function(){this.$router.replace(this.localePath("/ProductOrder"))}})},_=r(71),component=Object(_.a)(m,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"modal fade log-in-modal",attrs:{id:"DeleteItem23",tabindex:"-1","aria-labelledby":"exampleModalLabel","aria-hidden":"true"}},[r("div",{staticClass:"modal-dialog modal-dialog-centered modal-sm"},[r("div",{staticClass:"modal-content rounded"},[r("div",{staticClass:"modal-body text-center px-5"},[r("h3",{staticClass:"text-uppercase fw-bold fs-4 mb-4"},[t._v(t._s(this.$t("login_to_your_account")))]),t._v(" "),r("form",[t.error&&t.error.errors&&t.error.errors.email?r("span",{staticClass:"float-end"},[r("span",{staticClass:"text-danger"},[t._v(" "+t._s(t.error.errors.email[0])+" ")])]):t._e(),t._v(" "),r("div",{staticClass:"input-group mb-3",class:t.error&&t.error.errors&&t.error.errors.email?"error":""},[r("input",{directives:[{name:"model",rawName:"v-model",value:t.formData.email,expression:"formData.email"}],staticClass:"form-control shadow border-2",attrs:{type:"email",id:"exampleInputEmail1",required:"",placeholder:this.$t("form.login.user_name.placeholder")},domProps:{value:t.formData.email},on:{input:function(e){e.target.composing||t.$set(t.formData,"email",e.target.value)}}}),t._v(" "),r("div",{staticClass:"input-group-text"},[r("div",{staticClass:"text-primary"},[r("fa",{attrs:{icon:["fas","user"],"fixed-width":""}})],1)])]),t._v(" "),t.error&&t.error.errors&&t.error.errors.password?r("span",{staticClass:"float-end"},[r("span",{staticClass:"text-danger"},[t._v("\r\n                  "+t._s(t.error.errors.password[0])+"\r\n                ")])]):t._e(),t._v(" "),r("div",{staticClass:"input-group mb-4",class:t.error&&t.error.errors&&t.error.errors.password?"error":""},[r("input",{directives:[{name:"model",rawName:"v-model",value:t.formData.password,expression:"formData.password"}],staticClass:"form-control shadow border-2",attrs:{type:"password",id:"exampleInputPassword1",required:"",placeholder:this.$t("form.login.password.placeholder")},domProps:{value:t.formData.password},on:{input:function(e){e.target.composing||t.$set(t.formData,"password",e.target.value)}}}),t._v(" "),r("div",{staticClass:"input-group-text"},[r("div",{staticClass:"text-primary"},[r("fa",{attrs:{icon:["fas","unlock"],"fixed-width":""}})],1)])]),t._v(" "),r("div",{staticClass:"btn-wrap d-md-flex justify-content-between align-items-center flex-column"},[r("button",{staticClass:"btn bg-warning rounded py-2 px-5 fw-bold text-uppercase mb-md-0 mb-3",attrs:{type:"button","data-bs-dismiss":"modal"},on:{click:t.loginPassport}},[t._v("\r\n              "+t._s(this.$t("login.login"))+"\r\n            ")]),t._v(" "),r("div",{staticClass:"cont-guest mt-3"},[t._v("\r\n               "+t._s(this.$t("if_you_do_not_want_login"))+"\r\n              "),r("button",{staticClass:"p-0 m-0 ms-1 bg-transparent shadow-0 border-0 text-primary text-uppercase",attrs:{type:"button","data-bs-dismiss":"modal"},on:{click:t.continueAsGuest}},[t._v("\r\n               "+t._s(this.$t("continue_as_guest"))+"\r\n              ")])])])])])])])])}),[],!1,null,null,null);e.default=component.exports}}]);