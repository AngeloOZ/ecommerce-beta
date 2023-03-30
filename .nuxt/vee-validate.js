import Vue from 'vue'
import VeeValidate from 'vee-validate'

Vue.use(VeeValidate, {})

export default ({ app }, inject) => {
  app.validator = VeeValidate.Validator
}
