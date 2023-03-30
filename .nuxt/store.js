import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const VUEX_PROPERTIES = ['state', 'getters', 'actions', 'mutations']

let store = {};

(function updateModules () {
  store = normalizeRoot(require('..\\client\\store\\index.js'), 'store/index.js')

  // If store is an exported method = classic mode (deprecated)

  // Enforce store modules
  store.modules = store.modules || {}

  resolveStoreModules(require('..\\client\\store\\AboutUs.js'), 'AboutUs.js')
  resolveStoreModules(require('..\\client\\store\\Addresses.js'), 'Addresses.js')
  resolveStoreModules(require('..\\client\\store\\Admins.js'), 'Admins.js')
  resolveStoreModules(require('..\\client\\store\\alert.js'), 'alert.js')
  resolveStoreModules(require('..\\client\\store\\ApplicationBanners.js'), 'ApplicationBanners.js')
  resolveStoreModules(require('..\\client\\store\\ApplicationParallaxBanners.js'), 'ApplicationParallaxBanners.js')
  resolveStoreModules(require('..\\client\\store\\ApplicationSliderImages.js'), 'ApplicationSliderImages.js')
  resolveStoreModules(require('..\\client\\store\\Attributes.js'), 'Attributes.js')
  resolveStoreModules(require('..\\client\\store\\AttributeValues.js'), 'AttributeValues.js')
  resolveStoreModules(require('..\\client\\store\\Brands.js'), 'Brands.js')
  resolveStoreModules(require('..\\client\\store\\Categories.js'), 'Categories.js')
  resolveStoreModules(require('..\\client\\store\\Cities.js'), 'Cities.js')
  resolveStoreModules(require('..\\client\\store\\Commissions.js'), 'Commissions.js')
  resolveStoreModules(require('..\\client\\store\\ContactForms.js'), 'ContactForms.js')
  resolveStoreModules(require('..\\client\\store\\ContentApplicationPages.js'), 'ContentApplicationPages.js')
  resolveStoreModules(require('..\\client\\store\\ContentPages.js'), 'ContentPages.js')
  resolveStoreModules(require('..\\client\\store\\Countries.js'), 'Countries.js')
  resolveStoreModules(require('..\\client\\store\\Coupons.js'), 'Coupons.js')
  resolveStoreModules(require('..\\client\\store\\Currencies.js'), 'Currencies.js')
  resolveStoreModules(require('..\\client\\store\\Customers.js'), 'Customers.js')
  resolveStoreModules(require('..\\client\\store\\Faqs.js'), 'Faqs.js')
  resolveStoreModules(require('..\\client\\store\\General.js'), 'General.js')
  resolveStoreModules(require('..\\client\\store\\Inventories.js'), 'Inventories.js')
  resolveStoreModules(require('..\\client\\store\\Languages.js'), 'Languages.js')
  resolveStoreModules(require('..\\client\\store\\Manufacturers.js'), 'Manufacturers.js')
  resolveStoreModules(require('..\\client\\store\\Media.js'), 'Media.js')
  resolveStoreModules(require('..\\client\\store\\NewsCategories.js'), 'NewsCategories.js')
  resolveStoreModules(require('..\\client\\store\\Newses.js'), 'Newses.js')
  resolveStoreModules(require('..\\client\\store\\Newsletters.js'), 'Newsletters.js')
  resolveStoreModules(require('..\\client\\store\\Orders.js'), 'Orders.js')
  resolveStoreModules(require('..\\client\\store\\OrderStatuses.js'), 'OrderStatuses.js')
  resolveStoreModules(require('..\\client\\store\\ParallaxBanners.js'), 'ParallaxBanners.js')
  resolveStoreModules(require('..\\client\\store\\PaymentMethods.js'), 'PaymentMethods.js')
  resolveStoreModules(require('..\\client\\store\\PayoutRequests.js'), 'PayoutRequests.js')
  resolveStoreModules(require('..\\client\\store\\Permissions.js'), 'Permissions.js')
  resolveStoreModules(require('..\\client\\store\\PrivacyPolicy.js'), 'PrivacyPolicy.js')
  resolveStoreModules(require('..\\client\\store\\Products.js'), 'Products.js')
  resolveStoreModules(require('..\\client\\store\\RefundPolicy.js'), 'RefundPolicy.js')
  resolveStoreModules(require('..\\client\\store\\Reviews.js'), 'Reviews.js')
  resolveStoreModules(require('..\\client\\store\\ReviewStatuses.js'), 'ReviewStatuses.js')
  resolveStoreModules(require('..\\client\\store\\RiderPayoutRequests.js'), 'RiderPayoutRequests.js')
  resolveStoreModules(require('..\\client\\store\\Riders.js'), 'Riders.js')
  resolveStoreModules(require('..\\client\\store\\Roles.js'), 'Roles.js')
  resolveStoreModules(require('..\\client\\store\\SeoPages.js'), 'SeoPages.js')
  resolveStoreModules(require('..\\client\\store\\Settings.js'), 'Settings.js')
  resolveStoreModules(require('..\\client\\store\\ShippingMethods.js'), 'ShippingMethods.js')
  resolveStoreModules(require('..\\client\\store\\SliderImages.js'), 'SliderImages.js')
  resolveStoreModules(require('..\\client\\store\\States.js'), 'States.js')
  resolveStoreModules(require('..\\client\\store\\StaticBanners.js'), 'StaticBanners.js')
  resolveStoreModules(require('..\\client\\store\\TaxClasses.js'), 'TaxClasses.js')
  resolveStoreModules(require('..\\client\\store\\TaxRates.js'), 'TaxRates.js')
  resolveStoreModules(require('..\\client\\store\\TermCondition.js'), 'TermCondition.js')
  resolveStoreModules(require('..\\client\\store\\ThemeSettings.js'), 'ThemeSettings.js')
  resolveStoreModules(require('..\\client\\store\\Units.js'), 'Units.js')
  resolveStoreModules(require('..\\client\\store\\Vendors.js'), 'Vendors.js')
  resolveStoreModules(require('..\\client\\store\\Zones.js'), 'Zones.js')
  resolveStoreModules(require('..\\client\\store\\Seller\\Orders.js'), 'Seller/Orders.js')
  resolveStoreModules(require('..\\client\\store\\Seller\\Products.js'), 'Seller/Products.js')
  resolveStoreModules(require('..\\client\\store\\Seller\\Reviews.js'), 'Seller/Reviews.js')
  resolveStoreModules(require('..\\client\\store\\Seller\\RiderPayoutRequests.js'), 'Seller/RiderPayoutRequests.js')
  resolveStoreModules(require('..\\client\\store\\Seller\\Riders.js'), 'Seller/Riders.js')
  resolveStoreModules(require('..\\client\\store\\Web\\Cart.js'), 'Web/Cart.js')
  resolveStoreModules(require('..\\client\\store\\Web\\General.js'), 'Web/General.js')
  resolveStoreModules(require('..\\client\\store\\Web\\Wishlist.js'), 'Web/Wishlist.js')

  // If the environment supports hot reloading...
})()

// createStore
export const createStore = store instanceof Function ? store : () => {
  return new Vuex.Store(Object.assign({
    strict: (process.env.NODE_ENV !== 'production')
  }, store))
}

function normalizeRoot (moduleData, filePath) {
  moduleData = moduleData.default || moduleData

  if (moduleData.commit) {
    throw new Error(`[nuxt] ${filePath} should export a method that returns a Vuex instance.`)
  }

  if (typeof moduleData !== 'function') {
    // Avoid TypeError: setting a property that has only a getter when overwriting top level keys
    moduleData = Object.assign({}, moduleData)
  }
  return normalizeModule(moduleData, filePath)
}

function normalizeModule (moduleData, filePath) {
  if (moduleData.state && typeof moduleData.state !== 'function') {
    console.warn(`'state' should be a method that returns an object in ${filePath}`)

    const state = Object.assign({}, moduleData.state)
    // Avoid TypeError: setting a property that has only a getter when overwriting top level keys
    moduleData = Object.assign({}, moduleData, { state: () => state })
  }
  return moduleData
}

function resolveStoreModules (moduleData, filename) {
  moduleData = moduleData.default || moduleData
  // Remove store src + extension (./foo/index.js -> foo/index)
  const namespace = filename.replace(/\.(js|mjs)$/, '')
  const namespaces = namespace.split('/')
  let moduleName = namespaces[namespaces.length - 1]
  const filePath = `store/${filename}`

  moduleData = moduleName === 'state'
    ? normalizeState(moduleData, filePath)
    : normalizeModule(moduleData, filePath)

  // If src is a known Vuex property
  if (VUEX_PROPERTIES.includes(moduleName)) {
    const property = moduleName
    const propertyStoreModule = getStoreModule(store, namespaces, { isProperty: true })

    // Replace state since it's a function
    mergeProperty(propertyStoreModule, moduleData, property)
    return
  }

  // If file is foo/index.js, it should be saved as foo
  const isIndexModule = (moduleName === 'index')
  if (isIndexModule) {
    namespaces.pop()
    moduleName = namespaces[namespaces.length - 1]
  }

  const storeModule = getStoreModule(store, namespaces)

  for (const property of VUEX_PROPERTIES) {
    mergeProperty(storeModule, moduleData[property], property)
  }

  if (moduleData.namespaced === false) {
    delete storeModule.namespaced
  }
}

function normalizeState (moduleData, filePath) {
  if (typeof moduleData !== 'function') {
    console.warn(`${filePath} should export a method that returns an object`)
    const state = Object.assign({}, moduleData)
    return () => state
  }
  return normalizeModule(moduleData, filePath)
}

function getStoreModule (storeModule, namespaces, { isProperty = false } = {}) {
  // If ./mutations.js
  if (!namespaces.length || (isProperty && namespaces.length === 1)) {
    return storeModule
  }

  const namespace = namespaces.shift()

  storeModule.modules[namespace] = storeModule.modules[namespace] || {}
  storeModule.modules[namespace].namespaced = true
  storeModule.modules[namespace].modules = storeModule.modules[namespace].modules || {}

  return getStoreModule(storeModule.modules[namespace], namespaces, { isProperty })
}

function mergeProperty (storeModule, moduleData, property) {
  if (!moduleData) {
    return
  }

  if (property === 'state') {
    storeModule.state = moduleData || storeModule.state
  } else {
    storeModule[property] = Object.assign({}, storeModule[property], moduleData)
  }
}
