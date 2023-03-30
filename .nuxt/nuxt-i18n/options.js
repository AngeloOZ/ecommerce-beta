

export const Constants = {
  COMPONENT_OPTIONS_KEY: "nuxtI18n",
  STRATEGIES: {"PREFIX":"prefix","PREFIX_EXCEPT_DEFAULT":"prefix_except_default","PREFIX_AND_DEFAULT":"prefix_and_default","NO_PREFIX":"no_prefix"},
}
export const nuxtOptions = {
  isUniversalMode: false,
  trailingSlash: undefined,
}
export const options = {
  vueI18n: {},
  vueI18nLoader: false,
  locales: [{"code":"bn","file":"bn.js","iso":"bn-BN","name":"Bangali"},{"code":"hi","file":"hi.js","iso":"hi-HI","name":"Hindi"},{"code":"es","file":"es.js","iso":"es-ES","name":"spanish"},{"code":"ar","file":"ar.js","iso":"ar-AR","name":"arabic"},{"code":"en","file":"en.js","iso":"en-US","name":"English"}],
  defaultLocale: "en",
  defaultDirection: "ltr",
  routesNameSeparator: "___",
  defaultLocaleRouteNameSuffix: "default",
  sortRoutes: true,
  strategy: "no_prefix",
  lazy: true,
  langDir: "C:\\wamp64\\www\\Nictus\\client\\lang",
  rootRedirect: null,
  detectBrowserLanguage: {"alwaysRedirect":false,"cookieCrossOrigin":false,"cookieDomain":null,"cookieKey":"i18n_redirected","cookieSecure":false,"fallbackLocale":"","onlyOnNoPrefix":false,"onlyOnRoot":true,"useCookie":true},
  differentDomains: false,
  seo: true,
  baseUrl: "",
  vuex: {"moduleName":"i18n","syncLocale":false,"syncMessages":false,"syncRouteParams":true},
  parsePages: true,
  pages: {},
  skipSettingLocaleOnNavigate: false,
  beforeLanguageSwitch: () => null,
  onBeforeLanguageSwitch: () => {},
  onLanguageSwitched: () => null,
  fallbackLocale: "en",
  normalizedLocales: [{"code":"bn","file":"bn.js","iso":"bn-BN","name":"Bangali"},{"code":"hi","file":"hi.js","iso":"hi-HI","name":"Hindi"},{"code":"es","file":"es.js","iso":"es-ES","name":"spanish"},{"code":"ar","file":"ar.js","iso":"ar-AR","name":"arabic"},{"code":"en","file":"en.js","iso":"en-US","name":"English"}],
  localeCodes: ["bn","hi","es","ar","en"],
}

export const localeMessages = {
  'bn.js': () => import('../..\\client\\lang\\bn.js' /* webpackChunkName: "lang-bn.js" */),
  'hi.js': () => import('../..\\client\\lang\\hi.js' /* webpackChunkName: "lang-hi.js" */),
  'es.js': () => import('../..\\client\\lang\\es.js' /* webpackChunkName: "lang-es.js" */),
  'ar.js': () => import('../..\\client\\lang\\ar.js' /* webpackChunkName: "lang-ar.js" */),
  'en.js': () => import('../..\\client\\lang\\en.js' /* webpackChunkName: "lang-en.js" */),
}
