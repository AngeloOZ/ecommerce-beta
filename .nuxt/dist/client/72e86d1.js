(window.webpackJsonp=window.webpackJsonp||[]).push([[102],{1446:function(t,e,r){"use strict";r.r(e);r(43),r(25),r(7),r(4),r(57),r(40),r(58);var c=r(21),l=r(0),o=(r(5),r(129));function n(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function v(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?n(Object(source),!0).forEach((function(e){Object(c.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):n(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var _={components:{},fetch:function(){var t=this;return Object(l.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.allFooterData){e.next=3;break}return e.next=3,t.fetchFooterData();case 3:case"end":return e.stop()}}),e)})))()},data:function(){return{appName:"Multivendor",formData:{email:""}}},computed:Object(o.c)({allFooterData:"Web/General/allFooterData",allDefaultSettings:"allDefaultSettings"}),methods:v(v({},Object(o.b)({fetchFooterData:"Web/General/fetchFooterData"})),{},{add_email:function(){var t=this;return Object(l.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$webService.addNewsletterEmail({email:t.formData.email}).then(function(){var e=Object(l.a)(regeneratorRuntime.mark((function e(r){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:0==r.success?t.$toast.error(t.$t("subscription_email_already_exists_message")):(t.formData.email="",t.$toast.success(t.$t("subscription_email_added_message")));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()).catch(function(){var e=Object(l.a)(regeneratorRuntime.mark((function e(r){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:r.response.data.errors&&(t.error=r.response.data.errors,t.error.email&&t.$toast.error(t.error.email[0]));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}());case 2:case"end":return e.stop()}}),e)})))()}})},m=_,C=r(71),component=Object(C.a)(m,(function(){var t=this,e=t.$createElement,c=t._self._c||e;return c("Footer",{staticClass:"pt-5"},[c("div",{staticClass:"footer_layout_four"},[c("div",{staticClass:"container"},[c("div",{staticClass:"row py-5"},[c("div",{staticClass:"col col-12 col-lg-4"},[c("div",{staticClass:"footer-logo "},[c("a",{attrs:{href:""}},[c("img",{staticClass:"img-fluid mb-3",attrs:{src:r(725),alt:""}})]),t._v(" "),c("p",[t._v("Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis in\n              termapol.")]),t._v(" "),c("p",[c("a",{attrs:{href:""}},[t._v(t._s(t.allFooterData.contactDetails.contact_number)+" - "+t._s(t.allFooterData.contactDetails.contact_email))])])])]),t._v(" "),c("div",{staticClass:"col col-md-3 col-lg-2"},[c("h4",{staticClass:"mb-3"},[t._v("Information")]),t._v(" "),c("ul",{staticClass:"unlisted ps-0"},[c("li",{staticClass:"mb-2"},[c("nuxt-link",{attrs:{to:"/contact"}},[t._v(t._s(t.$t("contact_us")))])],1),t._v(" "),c("li",{staticClass:"mb-2"},[c("nuxt-link",{attrs:{to:"/aboutus"}},[t._v(t._s(t.$t("about_us")))])],1),t._v(" "),c("li",[c("nuxt-link",{attrs:{to:"/termcondition"}},[t._v(t._s(t.$t("term_condition")))])],1),t._v(" "),c("li",[c("nuxt-link",{attrs:{to:"/refundpolicy"}},[t._v(t._s(t.$t("refund_policy")))])],1),t._v(" "),c("li",[c("nuxt-link",{attrs:{to:"/privacypolicy"}},[t._v(t._s(t.$t("privacy_policy")))])],1)])]),t._v(" "),c("div",{staticClass:"col col-md-3 col-lg-2"},[c("h4",{staticClass:"mb-3"},[t._v("Account")]),t._v(" "),c("ul",{staticClass:"unlisted ps-0"},[c("li",{staticClass:"mb-2"},[c("a",{attrs:{href:""}},[t._v("Dashboard")])]),t._v(" "),c("li",{staticClass:"mb-2"},[c("a",{attrs:{href:""}},[t._v("My Orders")])]),t._v(" "),c("li",{staticClass:"mb-2"},[c("a",{attrs:{href:""}},[t._v("My Wishlist")])]),t._v(" "),c("li",{staticClass:"mb-2"},[c("a",{attrs:{href:""}},[t._v("Account details")])]),t._v(" "),c("li",{staticClass:"mb-2"},[c("a",{attrs:{href:""}},[t._v("Track My Orders")])])])]),t._v(" "),c("div",{staticClass:"col col-md-3 col-lg-2"},[c("h4",{staticClass:"mb-3"},[t._v("Shop")]),t._v(" "),c("ul",{staticClass:"unlisted ps-0"},[c("li",{staticClass:"mb-2"},[c("a",{attrs:{href:""}},[t._v("Affiliate")])]),t._v(" "),c("li",{staticClass:"mb-2"},[c("a",{attrs:{href:""}},[t._v("Bestsellers")])]),t._v(" "),c("li",{staticClass:"mb-2"},[c("a",{attrs:{href:""}},[t._v("Discount")])]),t._v(" "),c("li",{staticClass:"mb-2"},[c("a",{attrs:{href:""}},[t._v("Latest Products")])]),t._v(" "),c("li",{staticClass:"mb-2"},[c("a",{attrs:{href:""}},[t._v("Sale Products")])])])]),t._v(" "),t.allFooterData.categories.length>0?c("div",{staticClass:"col col-md-3 col-lg-2"},[c("h4",{staticClass:"mb-3"},[t._v("Categories")]),t._v(" "),c("ul",{staticClass:"unlisted ps-0"},t._l(t.allFooterData.categories,(function(e){return c("li",{staticClass:"mb-2"},[c("nuxt-link",{attrs:{to:{path:"/shop",query:{category:e.slug}}}},[t._v(t._s(e.name))])],1)})),0)]):t._e()])]),t._v(" "),c("div",{staticClass:"pb-5"},[c("div",{staticClass:"container"},[c("div",{staticClass:"row"},[c("div",{staticClass:"col-12"},[c("div",{staticClass:"categories d-flex align-items-center mb-3"},[c("h4",{staticClass:"me-3"},[t._v("Consumer Electric:")]),t._v(" "),c("a",{staticClass:"me-3"},[t._v("TV Television")]),t._v(" "),c("a",{staticClass:"me-3"},[t._v("Air Condition")]),t._v(" "),c("a",{staticClass:"me-3"},[t._v("Refrigator")]),t._v(" "),c("a",{staticClass:"me-3"},[t._v("Washing Machine")]),t._v(" "),c("a",{staticClass:"me-3"},[t._v("Audio Speaker")]),t._v(" "),c("a",{staticClass:"me-3 after-none"},[t._v("Security Camera")])])])]),t._v(" "),c("div",{staticClass:"row"},[c("div",{staticClass:"col-12"},[c("div",{staticClass:"categories d-flex align-items-center mb-3"},[c("h4",{staticClass:"me-3"},[t._v("Clothing & Apparel:")]),t._v(" "),c("a",{staticClass:"me-3"},[t._v("Men T-shirt")]),t._v(" "),c("a",{staticClass:"me-3"},[t._v("Dresses")]),t._v(" "),c("a",{staticClass:"me-3"},[t._v("Men's Sneaker")]),t._v(" "),c("a",{staticClass:"me-3"},[t._v("Leather Backpack")]),t._v(" "),c("a",{staticClass:"me-3"},[t._v("Watches")]),t._v(" "),c("a",{staticClass:"me-3"},[t._v("Boots")]),t._v(" "),c("a",{staticClass:"me-3"},[t._v("Rayban")]),t._v(" "),c("a",{staticClass:"me-3 after-none"},[t._v("Formal Shirts")])])])]),t._v(" "),c("div",{staticClass:"row"},[c("div",{staticClass:"col-12"},[c("div",{staticClass:"categories d-flex align-items-center mb-3"},[c("h4",{staticClass:"me-3"},[t._v("Home, Garden & Kitchen:")]),t._v(" "),c("a",{staticClass:"me-3"},[t._v("Sofa")]),t._v(" "),c("a",{staticClass:"me-3"},[t._v("Chair")]),t._v(" "),c("a",{staticClass:"me-3"},[t._v("Bed Room")]),t._v(" "),c("a",{staticClass:"me-3"},[t._v("Living Room")]),t._v(" "),c("a",{staticClass:"me-3"},[t._v("Cookware")]),t._v(" "),c("a",{staticClass:"me-3"},[t._v("Utensil")]),t._v(" "),c("a",{staticClass:"me-3"},[t._v("Blender")]),t._v(" "),c("a",{staticClass:"me-3"},[t._v("Decor")]),t._v(" "),c("a",{staticClass:"me-3"},[t._v("Library")]),t._v(" "),c("a",{staticClass:"me-3 after-none"},[t._v("Wayfarer")])])])]),t._v(" "),c("div",{staticClass:"row"},[c("div",{staticClass:"col-12"},[c("div",{staticClass:"categories d-flex align-items-center mb-3"},[c("h4",{staticClass:"me-3"},[t._v("Health & Beauty:")]),t._v(" "),c("a",{staticClass:"me-3"},[t._v("Skin Care")]),t._v(" "),c("a",{staticClass:"me-3"},[t._v("Body Shower")]),t._v(" "),c("a",{staticClass:"me-3"},[t._v("Bed Room")]),t._v(" "),c("a",{staticClass:"me-3"},[t._v("Makeup")]),t._v(" "),c("a",{staticClass:"me-3"},[t._v("Cookware")]),t._v(" "),c("a",{staticClass:"me-3"},[t._v("Hair Care")]),t._v(" "),c("a",{staticClass:"me-3"},[t._v("Lipstick")]),t._v(" "),c("a",{staticClass:"me-3 after-none"},[t._v("Perfume")])])])]),t._v(" "),c("div",{staticClass:"row"},[c("div",{staticClass:"col-12"},[c("div",{staticClass:"categories d-flex align-items-center mb-3"},[c("h4",{staticClass:"me-3"},[t._v("Jewelry & Watches:")]),t._v(" "),c("a",{staticClass:"me-3"},[t._v("Necklace")]),t._v(" "),c("a",{staticClass:"me-3"},[t._v("Pendant")]),t._v(" "),c("a",{staticClass:"me-3"},[t._v("Diamond Ring")]),t._v(" "),c("a",{staticClass:"me-3"},[t._v("Silver Earing")]),t._v(" "),c("a",{staticClass:"me-3"},[t._v("Leather Watcher")]),t._v(" "),c("a",{staticClass:"me-3"},[t._v("Rolex")]),t._v(" "),c("a",{staticClass:"me-3"},[t._v("Gucci")]),t._v(" "),c("a",{staticClass:"me-3"},[t._v("Australian Opal")]),t._v(" "),c("a",{staticClass:"me-3"},[t._v("Ammolite")]),t._v(" "),c("a",{staticClass:"me-3 after-none"},[t._v("Sun Pyrite")])])])]),t._v(" "),c("div",{staticClass:"row"},[c("div",{staticClass:"col-12"},[c("div",{staticClass:"categories d-flex align-items-center mb-3"},[c("h4",{staticClass:"me-3"},[t._v("Computer & Technologies:")]),t._v(" "),c("a",{staticClass:"me-3"},[t._v("Laptop")]),t._v(" "),c("a",{staticClass:"me-3"},[t._v("iMac")]),t._v(" "),c("a",{staticClass:"me-3"},[t._v("Smartphone")]),t._v(" "),c("a",{staticClass:"me-3"},[t._v("Tablet")]),t._v(" "),c("a",{staticClass:"me-3"},[t._v("Apple")]),t._v(" "),c("a",{staticClass:"me-3"},[t._v("Asus")]),t._v(" "),c("a",{staticClass:"me-3"},[t._v("Drone")]),t._v(" "),c("a",{staticClass:"me-3"},[t._v("Wireless Speaker")]),t._v(" "),c("a",{staticClass:"me-3"},[t._v("Game Controller")]),t._v(" "),c("a",{staticClass:"me-3 after-none"},[t._v("Sun Pyrite")])])])])])]),t._v(" "),c("div",{staticClass:"container"},[c("div",{staticClass:"payment-method py-5"},[c("div",{staticClass:"container"},[c("div",{staticClass:"row align-items-center"},[c("div",{staticClass:"col-md-4"},[c("p",{staticClass:"mb-0"},[t._v(" "+t._s(this.allDefaultSettings.general_settings.copyright_text))])]),t._v(" "),c("div",{staticClass:"col-md-4"},[c("p",{staticClass:"my-2 payment-logo-width"},[c("a",{attrs:{href:""}},[c("img",{staticClass:"img-fluid pe-2",attrs:{src:r(745),alt:""}})]),t._v(" "),c("a",{attrs:{href:""}},[c("img",{staticClass:"img-fluid pe-2",attrs:{src:r(747),alt:""}})]),t._v(" "),c("a",{attrs:{href:""}},[c("img",{staticClass:"img-fluid pe-2",attrs:{src:r(748),alt:""}})]),t._v(" "),c("a",{attrs:{href:""}},[c("img",{staticClass:"img-fluid pe-2",attrs:{src:r(746),alt:""}})])])]),t._v(" "),c("div",{staticClass:"col-md-4"},[c("ul",{staticClass:"footer-list ps-0"},[c("li",{staticClass:"pe-3"},[c("a",{attrs:{href:""}},[t._v("\n                    privacy policy\n                  ")])]),t._v(" "),c("li",{staticClass:"pe-3 before-left"},[c("a",{attrs:{href:""}},[t._v("\n                    Terms and Conditions\n                  ")])]),t._v(" "),c("li",{staticClass:"before-left"},[c("a",{attrs:{href:""}},[t._v("\n                    Returns Policy\n                  ")])])])])])])])])])])}),[],!1,null,"7557bd68",null);e.default=component.exports},725:function(t,e,r){t.exports=r.p+"img/nictus-logo.5250864.png"},745:function(t,e,r){t.exports=r.p+"img/paypal-logo.613487b.png"},746:function(t,e,r){t.exports=r.p+"img/stripe-logo.1982025.png"},747:function(t,e,r){t.exports=r.p+"img/mastercard-logo.f85deb6.png"},748:function(t,e,r){t.exports=r.p+"img/visa-logo.b9dd4de.png"}}]);