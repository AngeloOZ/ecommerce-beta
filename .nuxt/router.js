import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _0cfe2dda = () => interopDefault(import('..\\client\\pages\\AboutUs.vue' /* webpackChunkName: "pages/AboutUs" */))
const _1e00a318 = () => interopDefault(import('..\\client\\pages\\blog\\index.vue' /* webpackChunkName: "pages/blog/index" */))
const _7ee5a354 = () => interopDefault(import('..\\client\\pages\\brands.vue' /* webpackChunkName: "pages/brands" */))
const _583caab0 = () => interopDefault(import('..\\client\\pages\\cart.vue' /* webpackChunkName: "pages/cart" */))
const _fd05fc64 = () => interopDefault(import('..\\client\\pages\\checkout.vue' /* webpackChunkName: "pages/checkout" */))
const _c291ac26 = () => interopDefault(import('..\\client\\pages\\Compare.vue' /* webpackChunkName: "pages/Compare" */))
const _565153c8 = () => interopDefault(import('..\\client\\pages\\contact.vue' /* webpackChunkName: "pages/contact" */))
const _63d5e548 = () => interopDefault(import('..\\client\\pages\\customer\\index.vue' /* webpackChunkName: "pages/customer/index" */))
const _6f3bd72d = () => interopDefault(import('..\\client\\pages\\forgot-password.vue' /* webpackChunkName: "pages/forgot-password" */))
const _37c75691 = () => interopDefault(import('..\\client\\pages\\login.vue' /* webpackChunkName: "pages/login" */))
const _2ac15e4d = () => interopDefault(import('..\\client\\pages\\new-arrival-products.vue' /* webpackChunkName: "pages/new-arrival-products" */))
const _61e96562 = () => interopDefault(import('..\\client\\pages\\PrivacyPolicy.vue' /* webpackChunkName: "pages/PrivacyPolicy" */))
const _60fc9872 = () => interopDefault(import('..\\client\\pages\\ProductOrder.vue' /* webpackChunkName: "pages/ProductOrder" */))
const _5e78ccd1 = () => interopDefault(import('..\\client\\pages\\profile.vue' /* webpackChunkName: "pages/profile" */))
const _0bdc9572 = () => interopDefault(import('..\\client\\pages\\RefundPolicy.vue' /* webpackChunkName: "pages/RefundPolicy" */))
const _7224af3e = () => interopDefault(import('..\\client\\pages\\reset-password.vue' /* webpackChunkName: "pages/reset-password" */))
const _7a78d8c4 = () => interopDefault(import('..\\client\\pages\\Shop.vue' /* webpackChunkName: "pages/Shop" */))
const _0d7d68a0 = () => interopDefault(import('..\\client\\pages\\signup.vue' /* webpackChunkName: "pages/signup" */))
const _c8fce8f6 = () => interopDefault(import('..\\client\\pages\\sorry.vue' /* webpackChunkName: "pages/sorry" */))
const _63ed3e3a = () => interopDefault(import('..\\client\\pages\\stores.vue' /* webpackChunkName: "pages/stores" */))
const _142ec2a0 = () => interopDefault(import('..\\client\\pages\\template2.vue' /* webpackChunkName: "pages/template2" */))
const _5a435617 = () => interopDefault(import('..\\client\\pages\\TermCondition.vue' /* webpackChunkName: "pages/TermCondition" */))
const _764d8d60 = () => interopDefault(import('..\\client\\pages\\TermsAndConditions.vue' /* webpackChunkName: "pages/TermsAndConditions" */))
const _de603baa = () => interopDefault(import('..\\client\\pages\\verify_login.vue' /* webpackChunkName: "pages/verify_login" */))
const _53a85a0a = () => interopDefault(import('..\\client\\pages\\welcome.vue' /* webpackChunkName: "pages/welcome" */))
const _2654cb0d = () => interopDefault(import('..\\client\\pages\\WishList.vue' /* webpackChunkName: "pages/WishList" */))
const _7873eddb = () => interopDefault(import('..\\client\\pages\\admin\\about_us\\index.vue' /* webpackChunkName: "pages/admin/about_us/index" */))
const _0b45ab27 = () => interopDefault(import('..\\client\\pages\\admin\\admins\\index.vue' /* webpackChunkName: "pages/admin/admins/index" */))
const _27cdbc45 = () => interopDefault(import('..\\client\\pages\\admin\\alert_settings\\index.vue' /* webpackChunkName: "pages/admin/alert_settings/index" */))
const _1e5e7fa5 = () => interopDefault(import('..\\client\\pages\\admin\\api_protection_settings\\index.vue' /* webpackChunkName: "pages/admin/api_protection_settings/index" */))
const _7815d8f1 = () => interopDefault(import('..\\client\\pages\\admin\\application_banners\\index.vue' /* webpackChunkName: "pages/admin/application_banners/index" */))
const _db4fbc06 = () => interopDefault(import('..\\client\\pages\\admin\\application_parallax_banners\\index.vue' /* webpackChunkName: "pages/admin/application_parallax_banners/index" */))
const _02a1e642 = () => interopDefault(import('..\\client\\pages\\admin\\application_slider_images\\index.vue' /* webpackChunkName: "pages/admin/application_slider_images/index" */))
const _633a3e26 = () => interopDefault(import('..\\client\\pages\\admin\\attribute_values\\index.vue' /* webpackChunkName: "pages/admin/attribute_values/index" */))
const _595afe74 = () => interopDefault(import('..\\client\\pages\\admin\\attributes\\index.vue' /* webpackChunkName: "pages/admin/attributes/index" */))
const _d8514142 = () => interopDefault(import('..\\client\\pages\\admin\\brands\\index.vue' /* webpackChunkName: "pages/admin/brands/index" */))
const _571c248f = () => interopDefault(import('..\\client\\pages\\admin\\categories\\index.vue' /* webpackChunkName: "pages/admin/categories/index" */))
const _26d769c2 = () => interopDefault(import('..\\client\\pages\\admin\\cities\\index.vue' /* webpackChunkName: "pages/admin/cities/index" */))
const _2baabdb4 = () => interopDefault(import('..\\client\\pages\\admin\\clear.vue' /* webpackChunkName: "pages/admin/clear" */))
const _4d745fe1 = () => interopDefault(import('..\\client\\pages\\admin\\commissions\\index.vue' /* webpackChunkName: "pages/admin/commissions/index" */))
const _43a4b8b9 = () => interopDefault(import('..\\client\\pages\\admin\\contact_forms\\index.vue' /* webpackChunkName: "pages/admin/contact_forms/index" */))
const _2df2da5a = () => interopDefault(import('..\\client\\pages\\admin\\content_application_pages\\index.vue' /* webpackChunkName: "pages/admin/content_application_pages/index" */))
const _759142cb = () => interopDefault(import('..\\client\\pages\\admin\\content_pages\\index.vue' /* webpackChunkName: "pages/admin/content_pages/index" */))
const _68c43a55 = () => interopDefault(import('..\\client\\pages\\admin\\countries\\index.vue' /* webpackChunkName: "pages/admin/countries/index" */))
const _3a0e021c = () => interopDefault(import('..\\client\\pages\\admin\\coupons\\index.vue' /* webpackChunkName: "pages/admin/coupons/index" */))
const _0913c85c = () => interopDefault(import('..\\client\\pages\\admin\\currencies\\index.vue' /* webpackChunkName: "pages/admin/currencies/index" */))
const _01a7ba14 = () => interopDefault(import('..\\client\\pages\\admin\\customers\\index.vue' /* webpackChunkName: "pages/admin/customers/index" */))
const _5f49dd26 = () => interopDefault(import('..\\client\\pages\\admin\\dashboard.vue' /* webpackChunkName: "pages/admin/dashboard" */))
const _cd377046 = () => interopDefault(import('..\\client\\pages\\admin\\error_page.vue' /* webpackChunkName: "pages/admin/error_page" */))
const _35e1278d = () => interopDefault(import('..\\client\\pages\\admin\\facebook_settings\\index.vue' /* webpackChunkName: "pages/admin/facebook_settings/index" */))
const _12d53cae = () => interopDefault(import('..\\client\\pages\\admin\\faqs\\index.vue' /* webpackChunkName: "pages/admin/faqs/index" */))
const _497de180 = () => interopDefault(import('..\\client\\pages\\admin\\google_settings\\index.vue' /* webpackChunkName: "pages/admin/google_settings/index" */))
const _3b7fde8f = () => interopDefault(import('..\\client\\pages\\admin\\inventories\\index.vue' /* webpackChunkName: "pages/admin/inventories/index" */))
const _407532e4 = () => interopDefault(import('..\\client\\pages\\admin\\languages\\index.vue' /* webpackChunkName: "pages/admin/languages/index" */))
const _5104e1de = () => interopDefault(import('..\\client\\pages\\admin\\live_chat\\index.vue' /* webpackChunkName: "pages/admin/live_chat/index" */))
const _611e277c = () => interopDefault(import('..\\client\\pages\\admin\\login.vue' /* webpackChunkName: "pages/admin/login" */))
const _61dd4280 = () => interopDefault(import('..\\client\\pages\\admin\\main_settings\\index.vue' /* webpackChunkName: "pages/admin/main_settings/index" */))
const _0a14a207 = () => interopDefault(import('..\\client\\pages\\admin\\manufacturers\\index.vue' /* webpackChunkName: "pages/admin/manufacturers/index" */))
const _b0a322b6 = () => interopDefault(import('..\\client\\pages\\admin\\media\\index.vue' /* webpackChunkName: "pages/admin/media/index" */))
const _0039dc38 = () => interopDefault(import('..\\client\\pages\\admin\\news\\index.vue' /* webpackChunkName: "pages/admin/news/index" */))
const _2982c641 = () => interopDefault(import('..\\client\\pages\\admin\\news_categories\\index.vue' /* webpackChunkName: "pages/admin/news_categories/index" */))
const _0150baa2 = () => interopDefault(import('..\\client\\pages\\admin\\newsletters\\index.vue' /* webpackChunkName: "pages/admin/newsletters/index" */))
const _5cd5f11a = () => interopDefault(import('..\\client\\pages\\admin\\order_statuses\\index.vue' /* webpackChunkName: "pages/admin/order_statuses/index" */))
const _572faeb4 = () => interopDefault(import('..\\client\\pages\\admin\\orders\\index.vue' /* webpackChunkName: "pages/admin/orders/index" */))
const _c31b9c28 = () => interopDefault(import('..\\client\\pages\\admin\\parallax_banners\\index.vue' /* webpackChunkName: "pages/admin/parallax_banners/index" */))
const _203dc630 = () => interopDefault(import('..\\client\\pages\\admin\\payment_methods\\index.vue' /* webpackChunkName: "pages/admin/payment_methods/index" */))
const _da00d828 = () => interopDefault(import('..\\client\\pages\\admin\\payout_requests\\index.vue' /* webpackChunkName: "pages/admin/payout_requests/index" */))
const _2a6e72c5 = () => interopDefault(import('..\\client\\pages\\admin\\permissions\\index.vue' /* webpackChunkName: "pages/admin/permissions/index" */))
const _65234e42 = () => interopDefault(import('..\\client\\pages\\admin\\privacy_policy\\index.vue' /* webpackChunkName: "pages/admin/privacy_policy/index" */))
const _72a4cef2 = () => interopDefault(import('..\\client\\pages\\admin\\products\\index.vue' /* webpackChunkName: "pages/admin/products/index" */))
const _70f22800 = () => interopDefault(import('..\\client\\pages\\admin\\profile\\index.vue' /* webpackChunkName: "pages/admin/profile/index" */))
const _d9906ee0 = () => interopDefault(import('..\\client\\pages\\admin\\refund_policy\\index.vue' /* webpackChunkName: "pages/admin/refund_policy/index" */))
const _8476f27c = () => interopDefault(import('..\\client\\pages\\admin\\review_statuses\\index.vue' /* webpackChunkName: "pages/admin/review_statuses/index" */))
const _d70a3364 = () => interopDefault(import('..\\client\\pages\\admin\\reviews\\index.vue' /* webpackChunkName: "pages/admin/reviews/index" */))
const _09ee9591 = () => interopDefault(import('..\\client\\pages\\admin\\rider_payout_requests\\index.vue' /* webpackChunkName: "pages/admin/rider_payout_requests/index" */))
const _47de37f8 = () => interopDefault(import('..\\client\\pages\\admin\\rider_shipping\\index.vue' /* webpackChunkName: "pages/admin/rider_shipping/index" */))
const _4f76145c = () => interopDefault(import('..\\client\\pages\\admin\\riders\\index.vue' /* webpackChunkName: "pages/admin/riders/index" */))
const _7179be2c = () => interopDefault(import('..\\client\\pages\\admin\\roles\\index.vue' /* webpackChunkName: "pages/admin/roles/index" */))
const _434566e7 = () => interopDefault(import('..\\client\\pages\\admin\\seo_pages\\index.vue' /* webpackChunkName: "pages/admin/seo_pages/index" */))
const _424ad068 = () => interopDefault(import('..\\client\\pages\\admin\\settings\\index.vue' /* webpackChunkName: "pages/admin/settings/index" */))
const _10afa2ac = () => interopDefault(import('..\\client\\pages\\admin\\shipping_methods\\index.vue' /* webpackChunkName: "pages/admin/shipping_methods/index" */))
const _f4ef169a = () => interopDefault(import('..\\client\\pages\\admin\\slider_images\\index.vue' /* webpackChunkName: "pages/admin/slider_images/index" */))
const _2a1836de = () => interopDefault(import('..\\client\\pages\\admin\\social_login_settings\\index.vue' /* webpackChunkName: "pages/admin/social_login_settings/index" */))
const _332b2136 = () => interopDefault(import('..\\client\\pages\\admin\\sorry.vue' /* webpackChunkName: "pages/admin/sorry" */))
const _280ecd2e = () => interopDefault(import('..\\client\\pages\\admin\\states\\index.vue' /* webpackChunkName: "pages/admin/states/index" */))
const _92e87016 = () => interopDefault(import('..\\client\\pages\\admin\\static_banners\\index.vue' /* webpackChunkName: "pages/admin/static_banners/index" */))
const _7c39374a = () => interopDefault(import('..\\client\\pages\\admin\\store_settings\\index.vue' /* webpackChunkName: "pages/admin/store_settings/index" */))
const _0327aaad = () => interopDefault(import('..\\client\\pages\\admin\\tabs\\index.vue' /* webpackChunkName: "pages/admin/tabs/index" */))
const _3bb74ef7 = () => interopDefault(import('..\\client\\pages\\admin\\tax_classes\\index.vue' /* webpackChunkName: "pages/admin/tax_classes/index" */))
const _18c5a22a = () => interopDefault(import('..\\client\\pages\\admin\\tax_rates\\index.vue' /* webpackChunkName: "pages/admin/tax_rates/index" */))
const _f6ecfcba = () => interopDefault(import('..\\client\\pages\\admin\\term_condition\\index.vue' /* webpackChunkName: "pages/admin/term_condition/index" */))
const _ac6b9f9c = () => interopDefault(import('..\\client\\pages\\admin\\theme_settings\\index.vue' /* webpackChunkName: "pages/admin/theme_settings/index" */))
const _1067f23a = () => interopDefault(import('..\\client\\pages\\admin\\units\\index.vue' /* webpackChunkName: "pages/admin/units/index" */))
const _03052c3e = () => interopDefault(import('..\\client\\pages\\admin\\vendors\\index.vue' /* webpackChunkName: "pages/admin/vendors/index" */))
const _41c44062 = () => interopDefault(import('..\\client\\pages\\admin\\zones\\index.vue' /* webpackChunkName: "pages/admin/zones/index" */))
const _306da852 = () => interopDefault(import('..\\client\\pages\\customer\\orders\\index.vue' /* webpackChunkName: "pages/customer/orders/index" */))
const _d301939a = () => interopDefault(import('..\\client\\pages\\customer\\profile.vue' /* webpackChunkName: "pages/customer/profile" */))
const _5db9d55f = () => interopDefault(import('..\\client\\pages\\customer\\wallet.vue' /* webpackChunkName: "pages/customer/wallet" */))
const _28063b16 = () => interopDefault(import('..\\client\\pages\\seller\\clear.vue' /* webpackChunkName: "pages/seller/clear" */))
const _21f8335d = () => interopDefault(import('..\\client\\pages\\seller\\dashboard.vue' /* webpackChunkName: "pages/seller/dashboard" */))
const _71b1a29e = () => interopDefault(import('..\\client\\pages\\seller\\faqs\\index.vue' /* webpackChunkName: "pages/seller/faqs/index" */))
const _62aa9c24 = () => interopDefault(import('..\\client\\pages\\seller\\live_chat\\index.vue' /* webpackChunkName: "pages/seller/live_chat/index" */))
const _0d4c8632 = () => interopDefault(import('..\\client\\pages\\seller\\login.vue' /* webpackChunkName: "pages/seller/login" */))
const _245ec6b5 = () => interopDefault(import('..\\client\\pages\\seller\\media\\index.vue' /* webpackChunkName: "pages/seller/media/index" */))
const _247a5ad4 = () => interopDefault(import('..\\client\\pages\\seller\\orders\\index.vue' /* webpackChunkName: "pages/seller/orders/index" */))
const _17f4f312 = () => interopDefault(import('..\\client\\pages\\seller\\products\\index.vue' /* webpackChunkName: "pages/seller/products/index" */))
const _4cfcffe0 = () => interopDefault(import('..\\client\\pages\\seller\\profile\\index.vue' /* webpackChunkName: "pages/seller/profile/index" */))
const _b3150b44 = () => interopDefault(import('..\\client\\pages\\seller\\reviews\\index.vue' /* webpackChunkName: "pages/seller/reviews/index" */))
const _d4e664be = () => interopDefault(import('..\\client\\pages\\seller\\rider_payout_requests\\index.vue' /* webpackChunkName: "pages/seller/rider_payout_requests/index" */))
const _d6b01c30 = () => interopDefault(import('..\\client\\pages\\seller\\rider_shipping\\index.vue' /* webpackChunkName: "pages/seller/rider_shipping/index" */))
const _1cc0c07c = () => interopDefault(import('..\\client\\pages\\seller\\riders\\index.vue' /* webpackChunkName: "pages/seller/riders/index" */))
const _7e299212 = () => interopDefault(import('..\\client\\pages\\seller\\seo_pages\\index.vue' /* webpackChunkName: "pages/seller/seo_pages/index" */))
const _6fa2be58 = () => interopDefault(import('..\\client\\pages\\seller\\settings\\index.vue' /* webpackChunkName: "pages/seller/settings/index" */))
const _7106bb26 = () => interopDefault(import('..\\client\\pages\\seller\\sorry.vue' /* webpackChunkName: "pages/seller/sorry" */))
const _035581e5 = () => interopDefault(import('..\\client\\pages\\seller\\static_banners\\index.vue' /* webpackChunkName: "pages/seller/static_banners/index" */))
const _6dfa1d8c = () => interopDefault(import('..\\client\\pages\\seller\\store_settings\\index.vue' /* webpackChunkName: "pages/seller/store_settings/index" */))
const _5f582d02 = () => interopDefault(import('..\\client\\pages\\seller\\wallet\\index.vue' /* webpackChunkName: "pages/seller/wallet/index" */))
const _f5b7f712 = () => interopDefault(import('..\\client\\pages\\admin\\admins\\create.vue' /* webpackChunkName: "pages/admin/admins/create" */))
const _9b4ce026 = () => interopDefault(import('..\\client\\pages\\admin\\application_banners\\create.vue' /* webpackChunkName: "pages/admin/application_banners/create" */))
const _3f3f2f3e = () => interopDefault(import('..\\client\\pages\\admin\\application_parallax_banners\\create.vue' /* webpackChunkName: "pages/admin/application_parallax_banners/create" */))
const _794f2cbc = () => interopDefault(import('..\\client\\pages\\admin\\application_slider_images\\create.vue' /* webpackChunkName: "pages/admin/application_slider_images/create" */))
const _2bc1d158 = () => interopDefault(import('..\\client\\pages\\admin\\attribute_values\\create.vue' /* webpackChunkName: "pages/admin/attribute_values/create" */))
const _0c8dca6c = () => interopDefault(import('..\\client\\pages\\admin\\attributes\\create.vue' /* webpackChunkName: "pages/admin/attributes/create" */))
const _0ec8d73f = () => interopDefault(import('..\\client\\pages\\admin\\brands\\create.vue' /* webpackChunkName: "pages/admin/brands/create" */))
const _97c68fe2 = () => interopDefault(import('..\\client\\pages\\admin\\categories\\create.vue' /* webpackChunkName: "pages/admin/categories/create" */))
const _486bcd88 = () => interopDefault(import('..\\client\\pages\\admin\\cities\\create.vue' /* webpackChunkName: "pages/admin/cities/create" */))
const _58a6a925 = () => interopDefault(import('..\\client\\pages\\admin\\contact_forms\\create.vue' /* webpackChunkName: "pages/admin/contact_forms/create" */))
const _8fc688b8 = () => interopDefault(import('..\\client\\pages\\admin\\content_application_pages\\create.vue' /* webpackChunkName: "pages/admin/content_application_pages/create" */))
const _644b6153 = () => interopDefault(import('..\\client\\pages\\admin\\content_pages\\create.vue' /* webpackChunkName: "pages/admin/content_pages/create" */))
const _511149ee = () => interopDefault(import('..\\client\\pages\\admin\\countries\\create.vue' /* webpackChunkName: "pages/admin/countries/create" */))
const _2f668c22 = () => interopDefault(import('..\\client\\pages\\admin\\coupons\\create.vue' /* webpackChunkName: "pages/admin/coupons/create" */))
const _41198de2 = () => interopDefault(import('..\\client\\pages\\admin\\currencies\\create.vue' /* webpackChunkName: "pages/admin/currencies/create" */))
const _5b03d32a = () => interopDefault(import('..\\client\\pages\\admin\\customers\\create.vue' /* webpackChunkName: "pages/admin/customers/create" */))
const _6f86a3d0 = () => interopDefault(import('..\\client\\pages\\admin\\faqs\\create.vue' /* webpackChunkName: "pages/admin/faqs/create" */))
const _409bb5f0 = () => interopDefault(import('..\\client\\pages\\admin\\languages\\create.vue' /* webpackChunkName: "pages/admin/languages/create" */))
const _6033e997 = () => interopDefault(import('..\\client\\pages\\admin\\manufacturers\\create.vue' /* webpackChunkName: "pages/admin/manufacturers/create" */))
const _e9382530 = () => interopDefault(import('..\\client\\pages\\admin\\media\\mediaDetail.vue' /* webpackChunkName: "pages/admin/media/mediaDetail" */))
const _52eeab20 = () => interopDefault(import('..\\client\\pages\\admin\\media\\settings.vue' /* webpackChunkName: "pages/admin/media/settings" */))
const _2e8a4c9d = () => interopDefault(import('..\\client\\pages\\admin\\news_categories\\create.vue' /* webpackChunkName: "pages/admin/news_categories/create" */))
const _2eb5f586 = () => interopDefault(import('..\\client\\pages\\admin\\news\\create.vue' /* webpackChunkName: "pages/admin/news/create" */))
const _1350fdef = () => interopDefault(import('..\\client\\pages\\admin\\newsletters\\create.vue' /* webpackChunkName: "pages/admin/newsletters/create" */))
const _659c7ce4 = () => interopDefault(import('..\\client\\pages\\admin\\order_statuses\\create.vue' /* webpackChunkName: "pages/admin/order_statuses/create" */))
const _57885652 = () => interopDefault(import('..\\client\\pages\\admin\\parallax_banners\\create.vue' /* webpackChunkName: "pages/admin/parallax_banners/create" */))
const _4b143099 = () => interopDefault(import('..\\client\\pages\\admin\\permissions\\create.vue' /* webpackChunkName: "pages/admin/permissions/create" */))
const _36b9c317 = () => interopDefault(import('..\\client\\pages\\admin\\products\\create.vue' /* webpackChunkName: "pages/admin/products/create" */))
const _7fac63b5 = () => interopDefault(import('..\\client\\pages\\admin\\reports\\customers\\index.vue' /* webpackChunkName: "pages/admin/reports/customers/index" */))
const _38b06ab6 = () => interopDefault(import('..\\client\\pages\\admin\\reports\\orders\\index.vue' /* webpackChunkName: "pages/admin/reports/orders/index" */))
const _048cb6c6 = () => interopDefault(import('..\\client\\pages\\admin\\reports\\products\\index.vue' /* webpackChunkName: "pages/admin/reports/products/index" */))
const _773f22c4 = () => interopDefault(import('..\\client\\pages\\admin\\reports\\sales\\index.vue' /* webpackChunkName: "pages/admin/reports/sales/index" */))
const _22809c3c = () => interopDefault(import('..\\client\\pages\\admin\\review_statuses\\create.vue' /* webpackChunkName: "pages/admin/review_statuses/create" */))
const _22962e30 = () => interopDefault(import('..\\client\\pages\\admin\\reviews\\create.vue' /* webpackChunkName: "pages/admin/reviews/create" */))
const _580e0f2c = () => interopDefault(import('..\\client\\pages\\admin\\riders\\create.vue' /* webpackChunkName: "pages/admin/riders/create" */))
const _351b5bdc = () => interopDefault(import('..\\client\\pages\\admin\\roles\\create.vue' /* webpackChunkName: "pages/admin/roles/create" */))
const _4d1bc0b7 = () => interopDefault(import('..\\client\\pages\\admin\\seo_pages\\create.vue' /* webpackChunkName: "pages/admin/seo_pages/create" */))
const _533a6c6b = () => interopDefault(import('..\\client\\pages\\admin\\slider_images\\create.vue' /* webpackChunkName: "pages/admin/slider_images/create" */))
const _8a624316 = () => interopDefault(import('..\\client\\pages\\admin\\states\\create.vue' /* webpackChunkName: "pages/admin/states/create" */))
const _42a18169 = () => interopDefault(import('..\\client\\pages\\admin\\static_banners\\create.vue' /* webpackChunkName: "pages/admin/static_banners/create" */))
const _ecfc149e = () => interopDefault(import('..\\client\\pages\\admin\\tabs\\create.vue' /* webpackChunkName: "pages/admin/tabs/create" */))
const _56c2ab1c = () => interopDefault(import('..\\client\\pages\\admin\\tabs\\show.vue' /* webpackChunkName: "pages/admin/tabs/show" */))
const _62e6daa7 = () => interopDefault(import('..\\client\\pages\\admin\\tax_classes\\create.vue' /* webpackChunkName: "pages/admin/tax_classes/create" */))
const _27a2edd4 = () => interopDefault(import('..\\client\\pages\\admin\\tax_rates\\create.vue' /* webpackChunkName: "pages/admin/tax_rates/create" */))
const _244a9fc4 = () => interopDefault(import('..\\client\\pages\\admin\\units\\create.vue' /* webpackChunkName: "pages/admin/units/create" */))
const _f556b380 = () => interopDefault(import('..\\client\\pages\\admin\\vendors\\create.vue' /* webpackChunkName: "pages/admin/vendors/create" */))
const _1e78169c = () => interopDefault(import('..\\client\\pages\\admin\\zones\\create.vue' /* webpackChunkName: "pages/admin/zones/create" */))
const _27920840 = () => interopDefault(import('..\\client\\pages\\seller\\faqs\\create.vue' /* webpackChunkName: "pages/seller/faqs/create" */))
const _36d5f978 = () => interopDefault(import('..\\client\\pages\\seller\\media\\mediaDetail.vue' /* webpackChunkName: "pages/seller/media/mediaDetail" */))
const _9740d9b2 = () => interopDefault(import('..\\client\\pages\\seller\\products\\create.vue' /* webpackChunkName: "pages/seller/products/create" */))
const _30154eb5 = () => interopDefault(import('..\\client\\pages\\seller\\reports\\orders\\index.vue' /* webpackChunkName: "pages/seller/reports/orders/index" */))
const _28ad1254 = () => interopDefault(import('..\\client\\pages\\seller\\reports\\products\\index.vue' /* webpackChunkName: "pages/seller/reports/products/index" */))
const _112a288e = () => interopDefault(import('..\\client\\pages\\seller\\reports\\sales\\index.vue' /* webpackChunkName: "pages/seller/reports/sales/index" */))
const _4fee1c20 = () => interopDefault(import('..\\client\\pages\\seller\\reviews\\create.vue' /* webpackChunkName: "pages/seller/reviews/create" */))
const _6a08a33c = () => interopDefault(import('..\\client\\pages\\seller\\riders\\create.vue' /* webpackChunkName: "pages/seller/riders/create" */))
const _f7a01ab2 = () => interopDefault(import('..\\client\\pages\\seller\\seo_pages\\create.vue' /* webpackChunkName: "pages/seller/seo_pages/create" */))
const _e1e1f50e = () => interopDefault(import('..\\client\\pages\\seller\\static_banners\\create.vue' /* webpackChunkName: "pages/seller/static_banners/create" */))
const _1d500ad3 = () => interopDefault(import('..\\client\\pages\\admin\\addresses\\create\\_id.vue' /* webpackChunkName: "pages/admin/addresses/create/_id" */))
const _fa5ec21e = () => interopDefault(import('..\\client\\pages\\admin\\addresses\\customer\\_id.vue' /* webpackChunkName: "pages/admin/addresses/customer/_id" */))
const _70a608c5 = () => interopDefault(import('..\\client\\pages\\admin\\addresses\\edit\\_id.vue' /* webpackChunkName: "pages/admin/addresses/edit/_id" */))
const _11c98aec = () => interopDefault(import('..\\client\\pages\\admin\\addresses\\view\\_id.vue' /* webpackChunkName: "pages/admin/addresses/view/_id" */))
const _1c3f5b45 = () => interopDefault(import('..\\client\\pages\\admin\\admins\\edit\\_id.vue' /* webpackChunkName: "pages/admin/admins/edit/_id" */))
const _ba96e5ec = () => interopDefault(import('..\\client\\pages\\admin\\admins\\view\\_id.vue' /* webpackChunkName: "pages/admin/admins/view/_id" */))
const _264f940f = () => interopDefault(import('..\\client\\pages\\admin\\application_banners\\edit\\_id.vue' /* webpackChunkName: "pages/admin/application_banners/edit/_id" */))
const _a6767458 = () => interopDefault(import('..\\client\\pages\\admin\\application_banners\\view\\_id.vue' /* webpackChunkName: "pages/admin/application_banners/view/_id" */))
const _54ee771b = () => interopDefault(import('..\\client\\pages\\admin\\application_parallax_banners\\edit\\_id.vue' /* webpackChunkName: "pages/admin/application_parallax_banners/edit/_id" */))
const _4938ae40 = () => interopDefault(import('..\\client\\pages\\admin\\application_parallax_banners\\view\\_id.vue' /* webpackChunkName: "pages/admin/application_parallax_banners/view/_id" */))
const _468290e0 = () => interopDefault(import('..\\client\\pages\\admin\\application_slider_images\\edit\\_id.vue' /* webpackChunkName: "pages/admin/application_slider_images/edit/_id" */))
const _66107ab6 = () => interopDefault(import('..\\client\\pages\\admin\\application_slider_images\\view\\_id.vue' /* webpackChunkName: "pages/admin/application_slider_images/view/_id" */))
const _71a456c4 = () => interopDefault(import('..\\client\\pages\\admin\\attribute_values\\edit\\_id.vue' /* webpackChunkName: "pages/admin/attribute_values/edit/_id" */))
const _0fcceeee = () => interopDefault(import('..\\client\\pages\\admin\\attribute_values\\view\\_id.vue' /* webpackChunkName: "pages/admin/attribute_values/view/_id" */))
const _249f7fdc = () => interopDefault(import('..\\client\\pages\\admin\\attributes\\edit\\_id.vue' /* webpackChunkName: "pages/admin/attributes/edit/_id" */))
const _742571d7 = () => interopDefault(import('..\\client\\pages\\admin\\attributes\\view\\_id.vue' /* webpackChunkName: "pages/admin/attributes/view/_id" */))
const _40279906 = () => interopDefault(import('..\\client\\pages\\admin\\brands\\edit\\_id.vue' /* webpackChunkName: "pages/admin/brands/edit/_id" */))
const _66616542 = () => interopDefault(import('..\\client\\pages\\admin\\brands\\view\\_id.vue' /* webpackChunkName: "pages/admin/brands/view/_id" */))
const _3beae0ad = () => interopDefault(import('..\\client\\pages\\admin\\categories\\edit\\_id.vue' /* webpackChunkName: "pages/admin/categories/edit/_id" */))
const _7b3fdb1c = () => interopDefault(import('..\\client\\pages\\admin\\categories\\view\\_id.vue' /* webpackChunkName: "pages/admin/categories/view/_id" */))
const _f56b5740 = () => interopDefault(import('..\\client\\pages\\admin\\cities\\edit\\_id.vue' /* webpackChunkName: "pages/admin/cities/edit/_id" */))
const _0bbf8625 = () => interopDefault(import('..\\client\\pages\\admin\\cities\\view\\_id.vue' /* webpackChunkName: "pages/admin/cities/view/_id" */))
const _674d6052 = () => interopDefault(import('..\\client\\pages\\admin\\contact_forms\\edit\\_id.vue' /* webpackChunkName: "pages/admin/contact_forms/edit/_id" */))
const _52ce819c = () => interopDefault(import('..\\client\\pages\\admin\\contact_forms\\view\\_id.vue' /* webpackChunkName: "pages/admin/contact_forms/view/_id" */))
const _8ce88e10 = () => interopDefault(import('..\\client\\pages\\admin\\content_application_pages\\edit\\_id.vue' /* webpackChunkName: "pages/admin/content_application_pages/edit/_id" */))
const _4000eabd = () => interopDefault(import('..\\client\\pages\\admin\\content_application_pages\\view\\_id.vue' /* webpackChunkName: "pages/admin/content_application_pages/view/_id" */))
const _7c22fe2e = () => interopDefault(import('..\\client\\pages\\admin\\content_pages\\edit\\_id.vue' /* webpackChunkName: "pages/admin/content_pages/edit/_id" */))
const _4863b2ae = () => interopDefault(import('..\\client\\pages\\admin\\content_pages\\view\\_id.vue' /* webpackChunkName: "pages/admin/content_pages/view/_id" */))
const _6c66a373 = () => interopDefault(import('..\\client\\pages\\admin\\countries\\edit\\_id.vue' /* webpackChunkName: "pages/admin/countries/edit/_id" */))
const _1a485590 = () => interopDefault(import('..\\client\\pages\\admin\\countries\\view\\_id.vue' /* webpackChunkName: "pages/admin/countries/view/_id" */))
const _70692fba = () => interopDefault(import('..\\client\\pages\\admin\\coupons\\edit\\_id.vue' /* webpackChunkName: "pages/admin/coupons/edit/_id" */))
const _12433d02 = () => interopDefault(import('..\\client\\pages\\admin\\coupons\\view\\_id.vue' /* webpackChunkName: "pages/admin/coupons/view/_id" */))
const _1ea1d5fa = () => interopDefault(import('..\\client\\pages\\admin\\currencies\\edit\\_id.vue' /* webpackChunkName: "pages/admin/currencies/edit/_id" */))
const _b5d1f082 = () => interopDefault(import('..\\client\\pages\\admin\\currencies\\view\\_id.vue' /* webpackChunkName: "pages/admin/currencies/view/_id" */))
const _3813a89c = () => interopDefault(import('..\\client\\pages\\admin\\customers\\edit\\_id.vue' /* webpackChunkName: "pages/admin/customers/edit/_id" */))
const _6a6b5d77 = () => interopDefault(import('..\\client\\pages\\admin\\customers\\view\\_id.vue' /* webpackChunkName: "pages/admin/customers/view/_id" */))
const _71e65d68 = () => interopDefault(import('..\\client\\pages\\admin\\faqs\\edit\\_id.vue' /* webpackChunkName: "pages/admin/faqs/edit/_id" */))
const _4d820311 = () => interopDefault(import('..\\client\\pages\\admin\\faqs\\view\\_id.vue' /* webpackChunkName: "pages/admin/faqs/view/_id" */))
const _2bd5e9a8 = () => interopDefault(import('..\\client\\pages\\admin\\languages\\edit\\_id.vue' /* webpackChunkName: "pages/admin/languages/edit/_id" */))
const _708a3cf1 = () => interopDefault(import('..\\client\\pages\\admin\\languages\\view\\_id.vue' /* webpackChunkName: "pages/admin/languages/view/_id" */))
const _1808df7e = () => interopDefault(import('..\\client\\pages\\admin\\live_chat\\view\\_id.vue' /* webpackChunkName: "pages/admin/live_chat/view/_id" */))
const _ca103bb6 = () => interopDefault(import('..\\client\\pages\\admin\\manufacturers\\edit\\_id.vue' /* webpackChunkName: "pages/admin/manufacturers/edit/_id" */))
const _216d13ea = () => interopDefault(import('..\\client\\pages\\admin\\manufacturers\\view\\_id.vue' /* webpackChunkName: "pages/admin/manufacturers/view/_id" */))
const _51e5595f = () => interopDefault(import('..\\client\\pages\\admin\\news_categories\\edit\\_id.vue' /* webpackChunkName: "pages/admin/news_categories/edit/_id" */))
const _4f4ae9b8 = () => interopDefault(import('..\\client\\pages\\admin\\news_categories\\view\\_id.vue' /* webpackChunkName: "pages/admin/news_categories/view/_id" */))
const _2aa29bd6 = () => interopDefault(import('..\\client\\pages\\admin\\news\\edit\\_id.vue' /* webpackChunkName: "pages/admin/news/edit/_id" */))
const _9dd064ca = () => interopDefault(import('..\\client\\pages\\admin\\news\\view\\_id.vue' /* webpackChunkName: "pages/admin/news/view/_id" */))
const _3ffa4ecd = () => interopDefault(import('..\\client\\pages\\admin\\newsletters\\edit\\_id.vue' /* webpackChunkName: "pages/admin/newsletters/edit/_id" */))
const _7320fedc = () => interopDefault(import('..\\client\\pages\\admin\\newsletters\\view\\_id.vue' /* webpackChunkName: "pages/admin/newsletters/view/_id" */))
const _00f52090 = () => interopDefault(import('..\\client\\pages\\admin\\order_statuses\\edit\\_id.vue' /* webpackChunkName: "pages/admin/order_statuses/edit/_id" */))
const _f40abd06 = () => interopDefault(import('..\\client\\pages\\admin\\order_statuses\\view\\_id.vue' /* webpackChunkName: "pages/admin/order_statuses/view/_id" */))
const _196399ee = () => interopDefault(import('..\\client\\pages\\admin\\orders\\view\\_id.vue' /* webpackChunkName: "pages/admin/orders/view/_id" */))
const _b6de10ec = () => interopDefault(import('..\\client\\pages\\admin\\parallax_banners\\edit\\_id.vue' /* webpackChunkName: "pages/admin/parallax_banners/edit/_id" */))
const _2b06294f = () => interopDefault(import('..\\client\\pages\\admin\\parallax_banners\\view\\_id.vue' /* webpackChunkName: "pages/admin/parallax_banners/view/_id" */))
const _7230c9ce = () => interopDefault(import('..\\client\\pages\\admin\\payment_methods\\edit\\_id.vue' /* webpackChunkName: "pages/admin/payment_methods/edit/_id" */))
const _645f23e3 = () => interopDefault(import('..\\client\\pages\\admin\\permissions\\edit\\_id.vue' /* webpackChunkName: "pages/admin/permissions/edit/_id" */))
const _2a5754b0 = () => interopDefault(import('..\\client\\pages\\admin\\permissions\\view\\_id.vue' /* webpackChunkName: "pages/admin/permissions/view/_id" */))
const _7a70af86 = () => interopDefault(import('..\\client\\pages\\admin\\products\\edit\\_id\\index.vue' /* webpackChunkName: "pages/admin/products/edit/_id/index" */))
const _63a6ca6a = () => interopDefault(import('..\\client\\pages\\admin\\products\\view\\_id.vue' /* webpackChunkName: "pages/admin/products/view/_id" */))
const _7660f160 = () => interopDefault(import('..\\client\\pages\\admin\\review_statuses\\edit\\_id.vue' /* webpackChunkName: "pages/admin/review_statuses/edit/_id" */))
const _0653b9b6 = () => interopDefault(import('..\\client\\pages\\admin\\review_statuses\\view\\_id.vue' /* webpackChunkName: "pages/admin/review_statuses/view/_id" */))
const _4484aaec = () => interopDefault(import('..\\client\\pages\\admin\\reviews\\edit\\_id.vue' /* webpackChunkName: "pages/admin/reviews/edit/_id" */))
const _6a0c469e = () => interopDefault(import('..\\client\\pages\\admin\\reviews\\view\\_id.vue' /* webpackChunkName: "pages/admin/reviews/view/_id" */))
const _6df35870 = () => interopDefault(import('..\\client\\pages\\admin\\riders\\edit\\_id.vue' /* webpackChunkName: "pages/admin/riders/edit/_id" */))
const _172eeb96 = () => interopDefault(import('..\\client\\pages\\admin\\riders\\view\\_id.vue' /* webpackChunkName: "pages/admin/riders/view/_id" */))
const _42e1f978 = () => interopDefault(import('..\\client\\pages\\admin\\roles\\edit\\_id\\index.vue' /* webpackChunkName: "pages/admin/roles/edit/_id/index" */))
const _4a24d4e2 = () => interopDefault(import('..\\client\\pages\\admin\\roles\\view\\_id.vue' /* webpackChunkName: "pages/admin/roles/view/_id" */))
const _db0991f6 = () => interopDefault(import('..\\client\\pages\\admin\\seo_pages\\edit\\_id.vue' /* webpackChunkName: "pages/admin/seo_pages/edit/_id" */))
const _18f068ca = () => interopDefault(import('..\\client\\pages\\admin\\seo_pages\\view\\_id.vue' /* webpackChunkName: "pages/admin/seo_pages/view/_id" */))
const _44de6548 = () => interopDefault(import('..\\client\\pages\\admin\\shipping_methods\\edit\\_id.vue' /* webpackChunkName: "pages/admin/shipping_methods/edit/_id" */))
const _6958d1e6 = () => interopDefault(import('..\\client\\pages\\admin\\shipping_methods\\view\\_id.vue' /* webpackChunkName: "pages/admin/shipping_methods/view/_id" */))
const _84ab025e = () => interopDefault(import('..\\client\\pages\\admin\\slider_images\\edit\\_id.vue' /* webpackChunkName: "pages/admin/slider_images/edit/_id" */))
const _441fb096 = () => interopDefault(import('..\\client\\pages\\admin\\slider_images\\view\\_id.vue' /* webpackChunkName: "pages/admin/slider_images/view/_id" */))
const _716d5887 = () => interopDefault(import('..\\client\\pages\\admin\\states\\edit\\_id.vue' /* webpackChunkName: "pages/admin/states/edit/_id" */))
const _103aeb68 = () => interopDefault(import('..\\client\\pages\\admin\\states\\view\\_id.vue' /* webpackChunkName: "pages/admin/states/view/_id" */))
const _4a6e6113 = () => interopDefault(import('..\\client\\pages\\admin\\static_banners\\edit\\_id.vue' /* webpackChunkName: "pages/admin/static_banners/edit/_id" */))
const _5e38da50 = () => interopDefault(import('..\\client\\pages\\admin\\static_banners\\view\\_id.vue' /* webpackChunkName: "pages/admin/static_banners/view/_id" */))
const _4c6a27cb = () => interopDefault(import('..\\client\\pages\\admin\\tabs\\edit\\_id.vue' /* webpackChunkName: "pages/admin/tabs/edit/_id" */))
const _5a414ce0 = () => interopDefault(import('..\\client\\pages\\admin\\tabs\\view\\_id.vue' /* webpackChunkName: "pages/admin/tabs/view/_id" */))
const _9ecad1d6 = () => interopDefault(import('..\\client\\pages\\admin\\tax_classes\\edit\\_id.vue' /* webpackChunkName: "pages/admin/tax_classes/edit/_id" */))
const _370fc8da = () => interopDefault(import('..\\client\\pages\\admin\\tax_classes\\view\\_id.vue' /* webpackChunkName: "pages/admin/tax_classes/view/_id" */))
const _29d3ce70 = () => interopDefault(import('..\\client\\pages\\admin\\tax_rates\\edit\\_id.vue' /* webpackChunkName: "pages/admin/tax_rates/edit/_id" */))
const _718b4a8d = () => interopDefault(import('..\\client\\pages\\admin\\tax_rates\\view\\_id.vue' /* webpackChunkName: "pages/admin/tax_rates/view/_id" */))
const _ac1c3e50 = () => interopDefault(import('..\\client\\pages\\admin\\units\\edit\\_id.vue' /* webpackChunkName: "pages/admin/units/edit/_id" */))
const _3067129d = () => interopDefault(import('..\\client\\pages\\admin\\units\\view\\_id.vue' /* webpackChunkName: "pages/admin/units/view/_id" */))
const _379a78dc = () => interopDefault(import('..\\client\\pages\\admin\\vendors\\edit\\_id.vue' /* webpackChunkName: "pages/admin/vendors/edit/_id" */))
const _83e0aabe = () => interopDefault(import('..\\client\\pages\\admin\\vendors\\view\\_id.vue' /* webpackChunkName: "pages/admin/vendors/view/_id" */))
const _1aaadb00 = () => interopDefault(import('..\\client\\pages\\admin\\zones\\edit\\_id.vue' /* webpackChunkName: "pages/admin/zones/edit/_id" */))
const _bdbfe676 = () => interopDefault(import('..\\client\\pages\\admin\\zones\\view\\_id.vue' /* webpackChunkName: "pages/admin/zones/view/_id" */))
const _17368188 = () => interopDefault(import('..\\client\\pages\\seller\\faqs\\edit\\_id.vue' /* webpackChunkName: "pages/seller/faqs/edit/_id" */))
const _7ad9f101 = () => interopDefault(import('..\\client\\pages\\seller\\faqs\\view\\_id.vue' /* webpackChunkName: "pages/seller/faqs/view/_id" */))
const _e9ca4f5e = () => interopDefault(import('..\\client\\pages\\seller\\live_chat\\view\\_id.vue' /* webpackChunkName: "pages/seller/live_chat/view/_id" */))
const _2a6264f9 = () => interopDefault(import('..\\client\\pages\\seller\\orders\\view\\_id.vue' /* webpackChunkName: "pages/seller/orders/view/_id" */))
const _55b4a44d = () => interopDefault(import('..\\client\\pages\\seller\\products\\edit\\_id\\index.vue' /* webpackChunkName: "pages/seller/products/edit/_id/index" */))
const _2676405a = () => interopDefault(import('..\\client\\pages\\seller\\products\\view\\_id.vue' /* webpackChunkName: "pages/seller/products/view/_id" */))
const _20129208 = () => interopDefault(import('..\\client\\pages\\seller\\reviews\\edit\\_id.vue' /* webpackChunkName: "pages/seller/reviews/edit/_id" */))
const _766be8c1 = () => interopDefault(import('..\\client\\pages\\seller\\reviews\\view\\_id.vue' /* webpackChunkName: "pages/seller/reviews/view/_id" */))
const _b5f0eb40 = () => interopDefault(import('..\\client\\pages\\seller\\riders\\edit\\_id.vue' /* webpackChunkName: "pages/seller/riders/edit/_id" */))
const _2b7cbc25 = () => interopDefault(import('..\\client\\pages\\seller\\riders\\view\\_id.vue' /* webpackChunkName: "pages/seller/riders/view/_id" */))
const _299a7f15 = () => interopDefault(import('..\\client\\pages\\seller\\seo_pages\\edit\\_id.vue' /* webpackChunkName: "pages/seller/seo_pages/edit/_id" */))
const _9fe09e4c = () => interopDefault(import('..\\client\\pages\\seller\\seo_pages\\view\\_id.vue' /* webpackChunkName: "pages/seller/seo_pages/view/_id" */))
const _46e9a303 = () => interopDefault(import('..\\client\\pages\\seller\\static_banners\\edit\\_id.vue' /* webpackChunkName: "pages/seller/static_banners/edit/_id" */))
const _65425670 = () => interopDefault(import('..\\client\\pages\\seller\\static_banners\\view\\_id.vue' /* webpackChunkName: "pages/seller/static_banners/view/_id" */))
const _408c2851 = () => interopDefault(import('..\\client\\pages\\admin\\products\\edit\\_id\\step2.vue' /* webpackChunkName: "pages/admin/products/edit/_id/step2" */))
const _409a3fd2 = () => interopDefault(import('..\\client\\pages\\admin\\products\\edit\\_id\\step3.vue' /* webpackChunkName: "pages/admin/products/edit/_id/step3" */))
const _967accac = () => interopDefault(import('..\\client\\pages\\admin\\roles\\edit\\_id\\permissions.vue' /* webpackChunkName: "pages/admin/roles/edit/_id/permissions" */))
const _590db73e = () => interopDefault(import('..\\client\\pages\\seller\\products\\edit\\_id\\step2.vue' /* webpackChunkName: "pages/seller/products/edit/_id/step2" */))
const _58f1883c = () => interopDefault(import('..\\client\\pages\\seller\\products\\edit\\_id\\step3.vue' /* webpackChunkName: "pages/seller/products/edit/_id/step3" */))
const _228e37ff = () => interopDefault(import('..\\client\\pages\\customer\\orders\\_id.vue' /* webpackChunkName: "pages/customer/orders/_id" */))
const _1c4a01d0 = () => interopDefault(import('..\\client\\pages\\blog\\_slug.vue' /* webpackChunkName: "pages/blog/_slug" */))
const _c1784b42 = () => interopDefault(import('..\\client\\pages\\page\\_slug\\index.vue' /* webpackChunkName: "pages/page/_slug/index" */))
const _1d371e43 = () => interopDefault(import('..\\client\\pages\\product\\_slug.vue' /* webpackChunkName: "pages/product/_slug" */))
const _1417d86c = () => interopDefault(import('..\\client\\pages\\set-password\\_user.vue' /* webpackChunkName: "pages/set-password/_user" */))
const _49ae0c51 = () => interopDefault(import('..\\client\\pages\\store\\_slug\\index.vue' /* webpackChunkName: "pages/store/_slug/index" */))
const _5151a54c = () => interopDefault(import('..\\client\\pages\\store\\_slug\\reviews.vue' /* webpackChunkName: "pages/store/_slug/reviews" */))
const _7b8e3b7a = () => interopDefault(import('..\\client\\pages\\verify-email\\_id\\_hash.vue' /* webpackChunkName: "pages/verify-email/_id/_hash" */))
const _6e1fb37a = () => interopDefault(import('..\\client\\pages\\index.vue' /* webpackChunkName: "pages/index" */))
const _fc95bdb6 = () => interopDefault(import('..\\client\\pages\\_ProcessingPayment\\_query.vue' /* webpackChunkName: "pages/_ProcessingPayment/_query" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/AboutUs",
    component: _0cfe2dda,
    name: "AboutUs"
  }, {
    path: "/blog",
    component: _1e00a318,
    name: "blog"
  }, {
    path: "/brands",
    component: _7ee5a354,
    name: "brands"
  }, {
    path: "/cart",
    component: _583caab0,
    name: "cart"
  }, {
    path: "/checkout",
    component: _fd05fc64,
    name: "checkout"
  }, {
    path: "/Compare",
    component: _c291ac26,
    name: "Compare"
  }, {
    path: "/contact",
    component: _565153c8,
    name: "contact"
  }, {
    path: "/customer",
    component: _63d5e548,
    name: "customer"
  }, {
    path: "/forgot-password",
    component: _6f3bd72d,
    name: "forgot-password"
  }, {
    path: "/login",
    component: _37c75691,
    name: "login"
  }, {
    path: "/new-arrival-products",
    component: _2ac15e4d,
    name: "new-arrival-products"
  }, {
    path: "/PrivacyPolicy",
    component: _61e96562,
    name: "PrivacyPolicy"
  }, {
    path: "/ProductOrder",
    component: _60fc9872,
    name: "ProductOrder"
  }, {
    path: "/profile",
    component: _5e78ccd1,
    name: "profile"
  }, {
    path: "/RefundPolicy",
    component: _0bdc9572,
    name: "RefundPolicy"
  }, {
    path: "/reset-password",
    component: _7224af3e,
    name: "reset-password"
  }, {
    path: "/Shop",
    component: _7a78d8c4,
    name: "Shop"
  }, {
    path: "/signup",
    component: _0d7d68a0,
    name: "signup"
  }, {
    path: "/sorry",
    component: _c8fce8f6,
    name: "sorry"
  }, {
    path: "/stores",
    component: _63ed3e3a,
    name: "stores"
  }, {
    path: "/template2",
    component: _142ec2a0,
    name: "template2"
  }, {
    path: "/TermCondition",
    component: _5a435617,
    name: "TermCondition"
  }, {
    path: "/TermsAndConditions",
    component: _764d8d60,
    name: "TermsAndConditions"
  }, {
    path: "/verify_login",
    component: _de603baa,
    name: "verify_login"
  }, {
    path: "/welcome",
    component: _53a85a0a,
    name: "welcome"
  }, {
    path: "/WishList",
    component: _2654cb0d,
    name: "WishList"
  }, {
    path: "/admin/about_us",
    component: _7873eddb,
    name: "admin-about_us"
  }, {
    path: "/admin/admins",
    component: _0b45ab27,
    name: "admin-admins"
  }, {
    path: "/admin/alert_settings",
    component: _27cdbc45,
    name: "admin-alert_settings"
  }, {
    path: "/admin/api_protection_settings",
    component: _1e5e7fa5,
    name: "admin-api_protection_settings"
  }, {
    path: "/admin/application_banners",
    component: _7815d8f1,
    name: "admin-application_banners"
  }, {
    path: "/admin/application_parallax_banners",
    component: _db4fbc06,
    name: "admin-application_parallax_banners"
  }, {
    path: "/admin/application_slider_images",
    component: _02a1e642,
    name: "admin-application_slider_images"
  }, {
    path: "/admin/attribute_values",
    component: _633a3e26,
    name: "admin-attribute_values"
  }, {
    path: "/admin/attributes",
    component: _595afe74,
    name: "admin-attributes"
  }, {
    path: "/admin/brands",
    component: _d8514142,
    name: "admin-brands"
  }, {
    path: "/admin/categories",
    component: _571c248f,
    name: "admin-categories"
  }, {
    path: "/admin/cities",
    component: _26d769c2,
    name: "admin-cities"
  }, {
    path: "/admin/clear",
    component: _2baabdb4,
    name: "admin-clear"
  }, {
    path: "/admin/commissions",
    component: _4d745fe1,
    name: "admin-commissions"
  }, {
    path: "/admin/contact_forms",
    component: _43a4b8b9,
    name: "admin-contact_forms"
  }, {
    path: "/admin/content_application_pages",
    component: _2df2da5a,
    name: "admin-content_application_pages"
  }, {
    path: "/admin/content_pages",
    component: _759142cb,
    name: "admin-content_pages"
  }, {
    path: "/admin/countries",
    component: _68c43a55,
    name: "admin-countries"
  }, {
    path: "/admin/coupons",
    component: _3a0e021c,
    name: "admin-coupons"
  }, {
    path: "/admin/currencies",
    component: _0913c85c,
    name: "admin-currencies"
  }, {
    path: "/admin/customers",
    component: _01a7ba14,
    name: "admin-customers"
  }, {
    path: "/admin/dashboard",
    component: _5f49dd26,
    name: "admin-dashboard"
  }, {
    path: "/admin/error_page",
    component: _cd377046,
    name: "admin-error_page"
  }, {
    path: "/admin/facebook_settings",
    component: _35e1278d,
    name: "admin-facebook_settings"
  }, {
    path: "/admin/faqs",
    component: _12d53cae,
    name: "admin-faqs"
  }, {
    path: "/admin/google_settings",
    component: _497de180,
    name: "admin-google_settings"
  }, {
    path: "/admin/inventories",
    component: _3b7fde8f,
    name: "admin-inventories"
  }, {
    path: "/admin/languages",
    component: _407532e4,
    name: "admin-languages"
  }, {
    path: "/admin/live_chat",
    component: _5104e1de,
    name: "admin-live_chat"
  }, {
    path: "/admin/login",
    component: _611e277c,
    name: "admin-login"
  }, {
    path: "/admin/main_settings",
    component: _61dd4280,
    name: "admin-main_settings"
  }, {
    path: "/admin/manufacturers",
    component: _0a14a207,
    name: "admin-manufacturers"
  }, {
    path: "/admin/media",
    component: _b0a322b6,
    name: "admin-media"
  }, {
    path: "/admin/news",
    component: _0039dc38,
    name: "admin-news"
  }, {
    path: "/admin/news_categories",
    component: _2982c641,
    name: "admin-news_categories"
  }, {
    path: "/admin/newsletters",
    component: _0150baa2,
    name: "admin-newsletters"
  }, {
    path: "/admin/order_statuses",
    component: _5cd5f11a,
    name: "admin-order_statuses"
  }, {
    path: "/admin/orders",
    component: _572faeb4,
    name: "admin-orders"
  }, {
    path: "/admin/parallax_banners",
    component: _c31b9c28,
    name: "admin-parallax_banners"
  }, {
    path: "/admin/payment_methods",
    component: _203dc630,
    name: "admin-payment_methods"
  }, {
    path: "/admin/payout_requests",
    component: _da00d828,
    name: "admin-payout_requests"
  }, {
    path: "/admin/permissions",
    component: _2a6e72c5,
    name: "admin-permissions"
  }, {
    path: "/admin/privacy_policy",
    component: _65234e42,
    name: "admin-privacy_policy"
  }, {
    path: "/admin/products",
    component: _72a4cef2,
    name: "admin-products"
  }, {
    path: "/admin/profile",
    component: _70f22800,
    name: "admin-profile"
  }, {
    path: "/admin/refund_policy",
    component: _d9906ee0,
    name: "admin-refund_policy"
  }, {
    path: "/admin/review_statuses",
    component: _8476f27c,
    name: "admin-review_statuses"
  }, {
    path: "/admin/reviews",
    component: _d70a3364,
    name: "admin-reviews"
  }, {
    path: "/admin/rider_payout_requests",
    component: _09ee9591,
    name: "admin-rider_payout_requests"
  }, {
    path: "/admin/rider_shipping",
    component: _47de37f8,
    name: "admin-rider_shipping"
  }, {
    path: "/admin/riders",
    component: _4f76145c,
    name: "admin-riders"
  }, {
    path: "/admin/roles",
    component: _7179be2c,
    name: "admin-roles"
  }, {
    path: "/admin/seo_pages",
    component: _434566e7,
    name: "admin-seo_pages"
  }, {
    path: "/admin/settings",
    component: _424ad068,
    name: "admin-settings"
  }, {
    path: "/admin/shipping_methods",
    component: _10afa2ac,
    name: "admin-shipping_methods"
  }, {
    path: "/admin/slider_images",
    component: _f4ef169a,
    name: "admin-slider_images"
  }, {
    path: "/admin/social_login_settings",
    component: _2a1836de,
    name: "admin-social_login_settings"
  }, {
    path: "/admin/sorry",
    component: _332b2136,
    name: "admin-sorry"
  }, {
    path: "/admin/states",
    component: _280ecd2e,
    name: "admin-states"
  }, {
    path: "/admin/static_banners",
    component: _92e87016,
    name: "admin-static_banners"
  }, {
    path: "/admin/store_settings",
    component: _7c39374a,
    name: "admin-store_settings"
  }, {
    path: "/admin/tabs",
    component: _0327aaad,
    name: "admin-tabs"
  }, {
    path: "/admin/tax_classes",
    component: _3bb74ef7,
    name: "admin-tax_classes"
  }, {
    path: "/admin/tax_rates",
    component: _18c5a22a,
    name: "admin-tax_rates"
  }, {
    path: "/admin/term_condition",
    component: _f6ecfcba,
    name: "admin-term_condition"
  }, {
    path: "/admin/theme_settings",
    component: _ac6b9f9c,
    name: "admin-theme_settings"
  }, {
    path: "/admin/units",
    component: _1067f23a,
    name: "admin-units"
  }, {
    path: "/admin/vendors",
    component: _03052c3e,
    name: "admin-vendors"
  }, {
    path: "/admin/zones",
    component: _41c44062,
    name: "admin-zones"
  }, {
    path: "/customer/orders",
    component: _306da852,
    name: "customer-orders"
  }, {
    path: "/customer/profile",
    component: _d301939a,
    name: "customer-profile"
  }, {
    path: "/customer/wallet",
    component: _5db9d55f,
    name: "customer-wallet"
  }, {
    path: "/seller/clear",
    component: _28063b16,
    name: "seller-clear"
  }, {
    path: "/seller/dashboard",
    component: _21f8335d,
    name: "seller-dashboard"
  }, {
    path: "/seller/faqs",
    component: _71b1a29e,
    name: "seller-faqs"
  }, {
    path: "/seller/live_chat",
    component: _62aa9c24,
    name: "seller-live_chat"
  }, {
    path: "/seller/login",
    component: _0d4c8632,
    name: "seller-login"
  }, {
    path: "/seller/media",
    component: _245ec6b5,
    name: "seller-media"
  }, {
    path: "/seller/orders",
    component: _247a5ad4,
    name: "seller-orders"
  }, {
    path: "/seller/products",
    component: _17f4f312,
    name: "seller-products"
  }, {
    path: "/seller/profile",
    component: _4cfcffe0,
    name: "seller-profile"
  }, {
    path: "/seller/reviews",
    component: _b3150b44,
    name: "seller-reviews"
  }, {
    path: "/seller/rider_payout_requests",
    component: _d4e664be,
    name: "seller-rider_payout_requests"
  }, {
    path: "/seller/rider_shipping",
    component: _d6b01c30,
    name: "seller-rider_shipping"
  }, {
    path: "/seller/riders",
    component: _1cc0c07c,
    name: "seller-riders"
  }, {
    path: "/seller/seo_pages",
    component: _7e299212,
    name: "seller-seo_pages"
  }, {
    path: "/seller/settings",
    component: _6fa2be58,
    name: "seller-settings"
  }, {
    path: "/seller/sorry",
    component: _7106bb26,
    name: "seller-sorry"
  }, {
    path: "/seller/static_banners",
    component: _035581e5,
    name: "seller-static_banners"
  }, {
    path: "/seller/store_settings",
    component: _6dfa1d8c,
    name: "seller-store_settings"
  }, {
    path: "/seller/wallet",
    component: _5f582d02,
    name: "seller-wallet"
  }, {
    path: "/admin/admins/create",
    component: _f5b7f712,
    name: "admin-admins-create"
  }, {
    path: "/admin/application_banners/create",
    component: _9b4ce026,
    name: "admin-application_banners-create"
  }, {
    path: "/admin/application_parallax_banners/create",
    component: _3f3f2f3e,
    name: "admin-application_parallax_banners-create"
  }, {
    path: "/admin/application_slider_images/create",
    component: _794f2cbc,
    name: "admin-application_slider_images-create"
  }, {
    path: "/admin/attribute_values/create",
    component: _2bc1d158,
    name: "admin-attribute_values-create"
  }, {
    path: "/admin/attributes/create",
    component: _0c8dca6c,
    name: "admin-attributes-create"
  }, {
    path: "/admin/brands/create",
    component: _0ec8d73f,
    name: "admin-brands-create"
  }, {
    path: "/admin/categories/create",
    component: _97c68fe2,
    name: "admin-categories-create"
  }, {
    path: "/admin/cities/create",
    component: _486bcd88,
    name: "admin-cities-create"
  }, {
    path: "/admin/contact_forms/create",
    component: _58a6a925,
    name: "admin-contact_forms-create"
  }, {
    path: "/admin/content_application_pages/create",
    component: _8fc688b8,
    name: "admin-content_application_pages-create"
  }, {
    path: "/admin/content_pages/create",
    component: _644b6153,
    name: "admin-content_pages-create"
  }, {
    path: "/admin/countries/create",
    component: _511149ee,
    name: "admin-countries-create"
  }, {
    path: "/admin/coupons/create",
    component: _2f668c22,
    name: "admin-coupons-create"
  }, {
    path: "/admin/currencies/create",
    component: _41198de2,
    name: "admin-currencies-create"
  }, {
    path: "/admin/customers/create",
    component: _5b03d32a,
    name: "admin-customers-create"
  }, {
    path: "/admin/faqs/create",
    component: _6f86a3d0,
    name: "admin-faqs-create"
  }, {
    path: "/admin/languages/create",
    component: _409bb5f0,
    name: "admin-languages-create"
  }, {
    path: "/admin/manufacturers/create",
    component: _6033e997,
    name: "admin-manufacturers-create"
  }, {
    path: "/admin/media/mediaDetail",
    component: _e9382530,
    name: "admin-media-mediaDetail"
  }, {
    path: "/admin/media/settings",
    component: _52eeab20,
    name: "admin-media-settings"
  }, {
    path: "/admin/news_categories/create",
    component: _2e8a4c9d,
    name: "admin-news_categories-create"
  }, {
    path: "/admin/news/create",
    component: _2eb5f586,
    name: "admin-news-create"
  }, {
    path: "/admin/newsletters/create",
    component: _1350fdef,
    name: "admin-newsletters-create"
  }, {
    path: "/admin/order_statuses/create",
    component: _659c7ce4,
    name: "admin-order_statuses-create"
  }, {
    path: "/admin/parallax_banners/create",
    component: _57885652,
    name: "admin-parallax_banners-create"
  }, {
    path: "/admin/permissions/create",
    component: _4b143099,
    name: "admin-permissions-create"
  }, {
    path: "/admin/products/create",
    component: _36b9c317,
    name: "admin-products-create"
  }, {
    path: "/admin/reports/customers",
    component: _7fac63b5,
    name: "admin-reports-customers"
  }, {
    path: "/admin/reports/orders",
    component: _38b06ab6,
    name: "admin-reports-orders"
  }, {
    path: "/admin/reports/products",
    component: _048cb6c6,
    name: "admin-reports-products"
  }, {
    path: "/admin/reports/sales",
    component: _773f22c4,
    name: "admin-reports-sales"
  }, {
    path: "/admin/review_statuses/create",
    component: _22809c3c,
    name: "admin-review_statuses-create"
  }, {
    path: "/admin/reviews/create",
    component: _22962e30,
    name: "admin-reviews-create"
  }, {
    path: "/admin/riders/create",
    component: _580e0f2c,
    name: "admin-riders-create"
  }, {
    path: "/admin/roles/create",
    component: _351b5bdc,
    name: "admin-roles-create"
  }, {
    path: "/admin/seo_pages/create",
    component: _4d1bc0b7,
    name: "admin-seo_pages-create"
  }, {
    path: "/admin/slider_images/create",
    component: _533a6c6b,
    name: "admin-slider_images-create"
  }, {
    path: "/admin/states/create",
    component: _8a624316,
    name: "admin-states-create"
  }, {
    path: "/admin/static_banners/create",
    component: _42a18169,
    name: "admin-static_banners-create"
  }, {
    path: "/admin/tabs/create",
    component: _ecfc149e,
    name: "admin-tabs-create"
  }, {
    path: "/admin/tabs/show",
    component: _56c2ab1c,
    name: "admin-tabs-show"
  }, {
    path: "/admin/tax_classes/create",
    component: _62e6daa7,
    name: "admin-tax_classes-create"
  }, {
    path: "/admin/tax_rates/create",
    component: _27a2edd4,
    name: "admin-tax_rates-create"
  }, {
    path: "/admin/units/create",
    component: _244a9fc4,
    name: "admin-units-create"
  }, {
    path: "/admin/vendors/create",
    component: _f556b380,
    name: "admin-vendors-create"
  }, {
    path: "/admin/zones/create",
    component: _1e78169c,
    name: "admin-zones-create"
  }, {
    path: "/seller/faqs/create",
    component: _27920840,
    name: "seller-faqs-create"
  }, {
    path: "/seller/media/mediaDetail",
    component: _36d5f978,
    name: "seller-media-mediaDetail"
  }, {
    path: "/seller/products/create",
    component: _9740d9b2,
    name: "seller-products-create"
  }, {
    path: "/seller/reports/orders",
    component: _30154eb5,
    name: "seller-reports-orders"
  }, {
    path: "/seller/reports/products",
    component: _28ad1254,
    name: "seller-reports-products"
  }, {
    path: "/seller/reports/sales",
    component: _112a288e,
    name: "seller-reports-sales"
  }, {
    path: "/seller/reviews/create",
    component: _4fee1c20,
    name: "seller-reviews-create"
  }, {
    path: "/seller/riders/create",
    component: _6a08a33c,
    name: "seller-riders-create"
  }, {
    path: "/seller/seo_pages/create",
    component: _f7a01ab2,
    name: "seller-seo_pages-create"
  }, {
    path: "/seller/static_banners/create",
    component: _e1e1f50e,
    name: "seller-static_banners-create"
  }, {
    path: "/admin/addresses/create/:id?",
    component: _1d500ad3,
    name: "admin-addresses-create-id"
  }, {
    path: "/admin/addresses/customer/:id?",
    component: _fa5ec21e,
    name: "admin-addresses-customer-id"
  }, {
    path: "/admin/addresses/edit/:id?",
    component: _70a608c5,
    name: "admin-addresses-edit-id"
  }, {
    path: "/admin/addresses/view/:id?",
    component: _11c98aec,
    name: "admin-addresses-view-id"
  }, {
    path: "/admin/admins/edit/:id?",
    component: _1c3f5b45,
    name: "admin-admins-edit-id"
  }, {
    path: "/admin/admins/view/:id?",
    component: _ba96e5ec,
    name: "admin-admins-view-id"
  }, {
    path: "/admin/application_banners/edit/:id?",
    component: _264f940f,
    name: "admin-application_banners-edit-id"
  }, {
    path: "/admin/application_banners/view/:id?",
    component: _a6767458,
    name: "admin-application_banners-view-id"
  }, {
    path: "/admin/application_parallax_banners/edit/:id?",
    component: _54ee771b,
    name: "admin-application_parallax_banners-edit-id"
  }, {
    path: "/admin/application_parallax_banners/view/:id?",
    component: _4938ae40,
    name: "admin-application_parallax_banners-view-id"
  }, {
    path: "/admin/application_slider_images/edit/:id?",
    component: _468290e0,
    name: "admin-application_slider_images-edit-id"
  }, {
    path: "/admin/application_slider_images/view/:id?",
    component: _66107ab6,
    name: "admin-application_slider_images-view-id"
  }, {
    path: "/admin/attribute_values/edit/:id?",
    component: _71a456c4,
    name: "admin-attribute_values-edit-id"
  }, {
    path: "/admin/attribute_values/view/:id?",
    component: _0fcceeee,
    name: "admin-attribute_values-view-id"
  }, {
    path: "/admin/attributes/edit/:id?",
    component: _249f7fdc,
    name: "admin-attributes-edit-id"
  }, {
    path: "/admin/attributes/view/:id?",
    component: _742571d7,
    name: "admin-attributes-view-id"
  }, {
    path: "/admin/brands/edit/:id?",
    component: _40279906,
    name: "admin-brands-edit-id"
  }, {
    path: "/admin/brands/view/:id?",
    component: _66616542,
    name: "admin-brands-view-id"
  }, {
    path: "/admin/categories/edit/:id?",
    component: _3beae0ad,
    name: "admin-categories-edit-id"
  }, {
    path: "/admin/categories/view/:id?",
    component: _7b3fdb1c,
    name: "admin-categories-view-id"
  }, {
    path: "/admin/cities/edit/:id?",
    component: _f56b5740,
    name: "admin-cities-edit-id"
  }, {
    path: "/admin/cities/view/:id?",
    component: _0bbf8625,
    name: "admin-cities-view-id"
  }, {
    path: "/admin/contact_forms/edit/:id?",
    component: _674d6052,
    name: "admin-contact_forms-edit-id"
  }, {
    path: "/admin/contact_forms/view/:id?",
    component: _52ce819c,
    name: "admin-contact_forms-view-id"
  }, {
    path: "/admin/content_application_pages/edit/:id?",
    component: _8ce88e10,
    name: "admin-content_application_pages-edit-id"
  }, {
    path: "/admin/content_application_pages/view/:id?",
    component: _4000eabd,
    name: "admin-content_application_pages-view-id"
  }, {
    path: "/admin/content_pages/edit/:id?",
    component: _7c22fe2e,
    name: "admin-content_pages-edit-id"
  }, {
    path: "/admin/content_pages/view/:id?",
    component: _4863b2ae,
    name: "admin-content_pages-view-id"
  }, {
    path: "/admin/countries/edit/:id?",
    component: _6c66a373,
    name: "admin-countries-edit-id"
  }, {
    path: "/admin/countries/view/:id?",
    component: _1a485590,
    name: "admin-countries-view-id"
  }, {
    path: "/admin/coupons/edit/:id?",
    component: _70692fba,
    name: "admin-coupons-edit-id"
  }, {
    path: "/admin/coupons/view/:id?",
    component: _12433d02,
    name: "admin-coupons-view-id"
  }, {
    path: "/admin/currencies/edit/:id?",
    component: _1ea1d5fa,
    name: "admin-currencies-edit-id"
  }, {
    path: "/admin/currencies/view/:id?",
    component: _b5d1f082,
    name: "admin-currencies-view-id"
  }, {
    path: "/admin/customers/edit/:id?",
    component: _3813a89c,
    name: "admin-customers-edit-id"
  }, {
    path: "/admin/customers/view/:id?",
    component: _6a6b5d77,
    name: "admin-customers-view-id"
  }, {
    path: "/admin/faqs/edit/:id?",
    component: _71e65d68,
    name: "admin-faqs-edit-id"
  }, {
    path: "/admin/faqs/view/:id?",
    component: _4d820311,
    name: "admin-faqs-view-id"
  }, {
    path: "/admin/languages/edit/:id?",
    component: _2bd5e9a8,
    name: "admin-languages-edit-id"
  }, {
    path: "/admin/languages/view/:id?",
    component: _708a3cf1,
    name: "admin-languages-view-id"
  }, {
    path: "/admin/live_chat/view/:id?",
    component: _1808df7e,
    name: "admin-live_chat-view-id"
  }, {
    path: "/admin/manufacturers/edit/:id?",
    component: _ca103bb6,
    name: "admin-manufacturers-edit-id"
  }, {
    path: "/admin/manufacturers/view/:id?",
    component: _216d13ea,
    name: "admin-manufacturers-view-id"
  }, {
    path: "/admin/news_categories/edit/:id?",
    component: _51e5595f,
    name: "admin-news_categories-edit-id"
  }, {
    path: "/admin/news_categories/view/:id?",
    component: _4f4ae9b8,
    name: "admin-news_categories-view-id"
  }, {
    path: "/admin/news/edit/:id?",
    component: _2aa29bd6,
    name: "admin-news-edit-id"
  }, {
    path: "/admin/news/view/:id?",
    component: _9dd064ca,
    name: "admin-news-view-id"
  }, {
    path: "/admin/newsletters/edit/:id?",
    component: _3ffa4ecd,
    name: "admin-newsletters-edit-id"
  }, {
    path: "/admin/newsletters/view/:id?",
    component: _7320fedc,
    name: "admin-newsletters-view-id"
  }, {
    path: "/admin/order_statuses/edit/:id?",
    component: _00f52090,
    name: "admin-order_statuses-edit-id"
  }, {
    path: "/admin/order_statuses/view/:id?",
    component: _f40abd06,
    name: "admin-order_statuses-view-id"
  }, {
    path: "/admin/orders/view/:id?",
    component: _196399ee,
    name: "admin-orders-view-id"
  }, {
    path: "/admin/parallax_banners/edit/:id?",
    component: _b6de10ec,
    name: "admin-parallax_banners-edit-id"
  }, {
    path: "/admin/parallax_banners/view/:id?",
    component: _2b06294f,
    name: "admin-parallax_banners-view-id"
  }, {
    path: "/admin/payment_methods/edit/:id?",
    component: _7230c9ce,
    name: "admin-payment_methods-edit-id"
  }, {
    path: "/admin/permissions/edit/:id?",
    component: _645f23e3,
    name: "admin-permissions-edit-id"
  }, {
    path: "/admin/permissions/view/:id?",
    component: _2a5754b0,
    name: "admin-permissions-view-id"
  }, {
    path: "/admin/products/edit/:id",
    component: _7a70af86,
    name: "admin-products-edit-id"
  }, {
    path: "/admin/products/view/:id?",
    component: _63a6ca6a,
    name: "admin-products-view-id"
  }, {
    path: "/admin/review_statuses/edit/:id?",
    component: _7660f160,
    name: "admin-review_statuses-edit-id"
  }, {
    path: "/admin/review_statuses/view/:id?",
    component: _0653b9b6,
    name: "admin-review_statuses-view-id"
  }, {
    path: "/admin/reviews/edit/:id?",
    component: _4484aaec,
    name: "admin-reviews-edit-id"
  }, {
    path: "/admin/reviews/view/:id?",
    component: _6a0c469e,
    name: "admin-reviews-view-id"
  }, {
    path: "/admin/riders/edit/:id?",
    component: _6df35870,
    name: "admin-riders-edit-id"
  }, {
    path: "/admin/riders/view/:id?",
    component: _172eeb96,
    name: "admin-riders-view-id"
  }, {
    path: "/admin/roles/edit/:id",
    component: _42e1f978,
    name: "admin-roles-edit-id"
  }, {
    path: "/admin/roles/view/:id?",
    component: _4a24d4e2,
    name: "admin-roles-view-id"
  }, {
    path: "/admin/seo_pages/edit/:id?",
    component: _db0991f6,
    name: "admin-seo_pages-edit-id"
  }, {
    path: "/admin/seo_pages/view/:id?",
    component: _18f068ca,
    name: "admin-seo_pages-view-id"
  }, {
    path: "/admin/shipping_methods/edit/:id?",
    component: _44de6548,
    name: "admin-shipping_methods-edit-id"
  }, {
    path: "/admin/shipping_methods/view/:id?",
    component: _6958d1e6,
    name: "admin-shipping_methods-view-id"
  }, {
    path: "/admin/slider_images/edit/:id?",
    component: _84ab025e,
    name: "admin-slider_images-edit-id"
  }, {
    path: "/admin/slider_images/view/:id?",
    component: _441fb096,
    name: "admin-slider_images-view-id"
  }, {
    path: "/admin/states/edit/:id?",
    component: _716d5887,
    name: "admin-states-edit-id"
  }, {
    path: "/admin/states/view/:id?",
    component: _103aeb68,
    name: "admin-states-view-id"
  }, {
    path: "/admin/static_banners/edit/:id?",
    component: _4a6e6113,
    name: "admin-static_banners-edit-id"
  }, {
    path: "/admin/static_banners/view/:id?",
    component: _5e38da50,
    name: "admin-static_banners-view-id"
  }, {
    path: "/admin/tabs/edit/:id?",
    component: _4c6a27cb,
    name: "admin-tabs-edit-id"
  }, {
    path: "/admin/tabs/view/:id?",
    component: _5a414ce0,
    name: "admin-tabs-view-id"
  }, {
    path: "/admin/tax_classes/edit/:id?",
    component: _9ecad1d6,
    name: "admin-tax_classes-edit-id"
  }, {
    path: "/admin/tax_classes/view/:id?",
    component: _370fc8da,
    name: "admin-tax_classes-view-id"
  }, {
    path: "/admin/tax_rates/edit/:id?",
    component: _29d3ce70,
    name: "admin-tax_rates-edit-id"
  }, {
    path: "/admin/tax_rates/view/:id?",
    component: _718b4a8d,
    name: "admin-tax_rates-view-id"
  }, {
    path: "/admin/units/edit/:id?",
    component: _ac1c3e50,
    name: "admin-units-edit-id"
  }, {
    path: "/admin/units/view/:id?",
    component: _3067129d,
    name: "admin-units-view-id"
  }, {
    path: "/admin/vendors/edit/:id?",
    component: _379a78dc,
    name: "admin-vendors-edit-id"
  }, {
    path: "/admin/vendors/view/:id?",
    component: _83e0aabe,
    name: "admin-vendors-view-id"
  }, {
    path: "/admin/zones/edit/:id?",
    component: _1aaadb00,
    name: "admin-zones-edit-id"
  }, {
    path: "/admin/zones/view/:id?",
    component: _bdbfe676,
    name: "admin-zones-view-id"
  }, {
    path: "/seller/faqs/edit/:id?",
    component: _17368188,
    name: "seller-faqs-edit-id"
  }, {
    path: "/seller/faqs/view/:id?",
    component: _7ad9f101,
    name: "seller-faqs-view-id"
  }, {
    path: "/seller/live_chat/view/:id?",
    component: _e9ca4f5e,
    name: "seller-live_chat-view-id"
  }, {
    path: "/seller/orders/view/:id?",
    component: _2a6264f9,
    name: "seller-orders-view-id"
  }, {
    path: "/seller/products/edit/:id",
    component: _55b4a44d,
    name: "seller-products-edit-id"
  }, {
    path: "/seller/products/view/:id?",
    component: _2676405a,
    name: "seller-products-view-id"
  }, {
    path: "/seller/reviews/edit/:id?",
    component: _20129208,
    name: "seller-reviews-edit-id"
  }, {
    path: "/seller/reviews/view/:id?",
    component: _766be8c1,
    name: "seller-reviews-view-id"
  }, {
    path: "/seller/riders/edit/:id?",
    component: _b5f0eb40,
    name: "seller-riders-edit-id"
  }, {
    path: "/seller/riders/view/:id?",
    component: _2b7cbc25,
    name: "seller-riders-view-id"
  }, {
    path: "/seller/seo_pages/edit/:id?",
    component: _299a7f15,
    name: "seller-seo_pages-edit-id"
  }, {
    path: "/seller/seo_pages/view/:id?",
    component: _9fe09e4c,
    name: "seller-seo_pages-view-id"
  }, {
    path: "/seller/static_banners/edit/:id?",
    component: _46e9a303,
    name: "seller-static_banners-edit-id"
  }, {
    path: "/seller/static_banners/view/:id?",
    component: _65425670,
    name: "seller-static_banners-view-id"
  }, {
    path: "/admin/products/edit/:id?/step2",
    component: _408c2851,
    name: "admin-products-edit-id-step2"
  }, {
    path: "/admin/products/edit/:id?/step3",
    component: _409a3fd2,
    name: "admin-products-edit-id-step3"
  }, {
    path: "/admin/roles/edit/:id?/permissions",
    component: _967accac,
    name: "admin-roles-edit-id-permissions"
  }, {
    path: "/seller/products/edit/:id?/step2",
    component: _590db73e,
    name: "seller-products-edit-id-step2"
  }, {
    path: "/seller/products/edit/:id?/step3",
    component: _58f1883c,
    name: "seller-products-edit-id-step3"
  }, {
    path: "/customer/orders/:id",
    component: _228e37ff,
    name: "customer-orders-id"
  }, {
    path: "/blog/:slug",
    component: _1c4a01d0,
    name: "blog-slug"
  }, {
    path: "/page/:slug",
    component: _c1784b42,
    name: "page-slug"
  }, {
    path: "/product/:slug?",
    component: _1d371e43,
    name: "product-slug"
  }, {
    path: "/set-password/:user?",
    component: _1417d86c,
    name: "set-password-user"
  }, {
    path: "/store/:slug",
    component: _49ae0c51,
    name: "store-slug"
  }, {
    path: "/store/:slug?/reviews",
    component: _5151a54c,
    name: "store-slug-reviews"
  }, {
    path: "/verify-email/:id?/:hash?",
    component: _7b8e3b7a,
    name: "verify-email-id-hash"
  }, {
    path: "/",
    component: _6e1fb37a,
    name: "index"
  }, {
    path: "/:ProcessingPayment/:query?",
    component: _fc95bdb6,
    name: "ProcessingPayment-query"
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config._app && config._app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}
