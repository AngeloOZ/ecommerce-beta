(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{952:function(t,e,n){"use strict";n.r(e);n(43),n(25),n(57),n(40),n(58);var r=n(21),o=(n(7),n(4),n(129));function l(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function c(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?l(Object(source),!0).forEach((function(e){Object(r.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):l(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var d={components:{},created:function(){},data:function(){return{}},computed:c(c({},Object(o.c)({allSettings:"allDefaultSettings"})),{},{availableLocales:function(){var t=this;return this.$i18n.locales.filter((function(i){return i.code!==t.$i18n.locale}))}}),methods:{openSubMenu:function(t){this.$emit("show-navbar")},opensidebar:function(t){this.$emit("show-sidebar")}}},h=n(71),component=Object(h.a)(d,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.allSettings.general_settings&&t.allSettings.general_settings.logo?n("div",{staticClass:"header-mobile align-items-center header-mobile-fixed bg-gradient",attrs:{id:"tc_header_mobile"}},[n("nuxt-link",{staticClass:"brand-logo ",attrs:{to:t.localePath("/admin/dashboard")}},[n("img",{staticStyle:{height:"50px"},attrs:{alt:"Logo",src:"/backend"+t.allSettings.general_settings.logo_dark.original_media_path}})]),t._v(" "),n("div",{staticClass:"d-flex align-items-center"},[n("button",{staticClass:"btn p-0 ml-2",attrs:{id:"tc_header_mobile_topbar_toggle"},on:{click:function(e){return t.openSubMenu(e)}}},[n("span",{staticClass:"svg-icon svg-icon-xl"},[n("svg",{staticClass:"bi bi-person-fill",attrs:{width:"20px",height:"20px",viewBox:"0 0 16 16",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg"}},[n("path",{attrs:{"fill-rule":"evenodd",d:"M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"}})])])]),t._v(" "),n("button",{staticClass:"btn p-0 ",attrs:{id:"tc_aside_mobile_toggle"},on:{click:function(e){return t.opensidebar(e)}}},[n("svg",{staticClass:"bi bi-justify-right",attrs:{width:"20px",height:"20px",viewBox:"0 0 16 16",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg"}},[n("path",{attrs:{"fill-rule":"evenodd",d:"M6 12.5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5zm-4-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5zm0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5zm0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5z"}})])])])],1):t._e()}),[],!1,null,null,null);e.default=component.exports}}]);