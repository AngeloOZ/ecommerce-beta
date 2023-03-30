import Vue from 'vue'
import { decode, parsePath, withoutBase, withoutTrailingSlash, normalizeURL } from 'ufo'

import { getMatchedComponentsInstances, getChildrenComponentInstancesUsingFetch, promisify, globalHandleError, urlJoin, sanitizeComponent } from './utils'
import NuxtError from '..\\client\\layouts\\error.vue'
import NuxtLoading from './components/nuxt-loading.vue'

const _70dc1b32 = () => import('..\\client\\layouts\\admin_guest.vue'  /* webpackChunkName: "layouts/admin_guest" */).then(m => sanitizeComponent(m.default || m))
const _77068119 = () => import('..\\client\\layouts\\admin.vue'  /* webpackChunkName: "layouts/admin" */).then(m => sanitizeComponent(m.default || m))
const _b0fbf3b8 = () => import('..\\client\\layouts\\default_guest.vue'  /* webpackChunkName: "layouts/default_guest" */).then(m => sanitizeComponent(m.default || m))
const _6f6c098b = () => import('..\\client\\layouts\\default.vue'  /* webpackChunkName: "layouts/default" */).then(m => sanitizeComponent(m.default || m))
const _5814cf92 = () => import('..\\client\\layouts\\error_layout.vue'  /* webpackChunkName: "layouts/error_layout" */).then(m => sanitizeComponent(m.default || m))
const _36a46b17 = () => import('..\\client\\layouts\\vendor_guest.vue'  /* webpackChunkName: "layouts/vendor_guest" */).then(m => sanitizeComponent(m.default || m))
const _e4a43e84 = () => import('..\\client\\layouts\\vendor.vue'  /* webpackChunkName: "layouts/vendor" */).then(m => sanitizeComponent(m.default || m))

let resolvedLayouts = {}
const layouts = { "_admin_guest": _70dc1b32,"_admin": _77068119,"_default_guest": _b0fbf3b8,"_default": _6f6c098b,"_error_layout": _5814cf92,"_vendor_guest": _36a46b17,"_vendor": _e4a43e84 }

export default {
  render (h, props) {
    const loadingEl = h('NuxtLoading', { ref: 'loading' })

    const layoutEl = h(this.layout || 'nuxt')
    const templateEl = h('div', {
      domProps: {
        id: '__layout'
      },
      key: this.layoutName
    }, [layoutEl])

    const transitionEl = h('transition', {
      props: {
        name: 'layout',
        mode: 'out-in'
      },
      on: {
        beforeEnter (el) {
          // Ensure to trigger scroll event after calling scrollBehavior
          window.$nuxt.$nextTick(() => {
            window.$nuxt.$emit('triggerScroll')
          })
        }
      }
    }, [templateEl])

    return h('div', {
      domProps: {
        id: '__nuxt'
      }
    }, [
      loadingEl,

      transitionEl
    ])
  },

  data: () => ({
    isOnline: true,

    layout: null,
    layoutName: '',

    nbFetching: 0
    }),

  beforeCreate () {
    Vue.util.defineReactive(this, 'nuxt', this.$options.nuxt)
  },
  created () {
    // Add this.$nuxt in child instances
    this.$root.$options.$nuxt = this

    if (process.client) {
      // add to window so we can listen when ready
      window.$nuxt = this

      this.refreshOnlineStatus()
      // Setup the listeners
      window.addEventListener('online', this.refreshOnlineStatus)
      window.addEventListener('offline', this.refreshOnlineStatus)
    }
    // Add $nuxt.error()
    this.error = this.nuxt.error
    // Add $nuxt.context
    this.context = this.$options.context
  },

  async mounted () {
    this.$loading = this.$refs.loading
  },

  watch: {
    'nuxt.err': 'errorChanged'
  },

  computed: {
    isOffline () {
      return !this.isOnline
    },

    isFetching () {
      return this.nbFetching > 0
    },

    isPreview () {
      return Boolean(this.$options.previewData)
    },
  },

  methods: {
    refreshOnlineStatus () {
      if (process.client) {
        if (typeof window.navigator.onLine === 'undefined') {
          // If the browser doesn't support connection status reports
          // assume that we are online because most apps' only react
          // when they now that the connection has been interrupted
          this.isOnline = true
        } else {
          this.isOnline = window.navigator.onLine
        }
      }
    },

    async refresh () {
      const pages = getMatchedComponentsInstances(this.$route)

      if (!pages.length) {
        return
      }
      this.$loading.start()

      const promises = pages.map((page) => {
        const p = []

        // Old fetch
        if (page.$options.fetch && page.$options.fetch.length) {
          p.push(promisify(page.$options.fetch, this.context))
        }
        if (page.$fetch) {
          p.push(page.$fetch())
        } else {
          // Get all component instance to call $fetch
          for (const component of getChildrenComponentInstancesUsingFetch(page.$vnode.componentInstance)) {
            p.push(component.$fetch())
          }
        }

        if (page.$options.asyncData) {
          p.push(
            promisify(page.$options.asyncData, this.context)
              .then((newData) => {
                for (const key in newData) {
                  Vue.set(page.$data, key, newData[key])
                }
              })
          )
        }

        return Promise.all(p)
      })
      try {
        await Promise.all(promises)
      } catch (error) {
        this.$loading.fail(error)
        globalHandleError(error)
        this.error(error)
      }
      this.$loading.finish()
    },
    async errorChanged () {
      if (this.nuxt.err) {
        if (this.$loading) {
          if (this.$loading.fail) {
            this.$loading.fail(this.nuxt.err)
          }
          if (this.$loading.finish) {
            this.$loading.finish()
          }
        }

        let errorLayout = (NuxtError.options || NuxtError).layout;

        if (typeof errorLayout === 'function') {
          errorLayout = errorLayout(this.context)
        }

        await this.loadLayout(errorLayout)

        this.setLayout(errorLayout)
      }
    },

    setLayout (layout) {
      if (!layout || !resolvedLayouts['_' + layout]) {
        layout = 'default'
      }
      this.layoutName = layout
      let _layout = '_' + layout
      this.layout = resolvedLayouts[_layout]
      return this.layout
    },
    loadLayout (layout) {
      const undef = !layout
      const nonexistent = !(layouts['_' + layout] || resolvedLayouts['_' + layout])
      let _layout = '_' + ((undef || nonexistent) ? 'default' : layout)
      if (resolvedLayouts[_layout]) {
        return Promise.resolve(resolvedLayouts[_layout])
      }
      return layouts[_layout]()
        .then((Component) => {
          resolvedLayouts[_layout] = Component
          delete layouts[_layout]
          return resolvedLayouts[_layout]
        })
        .catch((e) => {
          if (this.$nuxt) {
            return this.$nuxt.error({ statusCode: 500, message: e.message })
          }
        })
    },
  },

  components: {
    NuxtLoading
  }
}
