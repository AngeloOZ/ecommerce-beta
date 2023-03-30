const middleware = {}

middleware['admin'] = require('..\\client\\middleware\\admin.js')
middleware['admin'] = middleware['admin'].default || middleware['admin']

middleware['customer'] = require('..\\client\\middleware\\customer.js')
middleware['customer'] = middleware['customer'].default || middleware['customer']

middleware['defaultLanguageCurrency'] = require('..\\client\\middleware\\defaultLanguageCurrency.js')
middleware['defaultLanguageCurrency'] = middleware['defaultLanguageCurrency'].default || middleware['defaultLanguageCurrency']

middleware['onlyMultiVendor'] = require('..\\client\\middleware\\onlyMultiVendor.js')
middleware['onlyMultiVendor'] = middleware['onlyMultiVendor'].default || middleware['onlyMultiVendor']

middleware['onlyMultiVendorSeller'] = require('..\\client\\middleware\\onlyMultiVendorSeller.js')
middleware['onlyMultiVendorSeller'] = middleware['onlyMultiVendorSeller'].default || middleware['onlyMultiVendorSeller']

middleware['permission'] = require('..\\client\\middleware\\permission.js')
middleware['permission'] = middleware['permission'].default || middleware['permission']

middleware['vendor'] = require('..\\client\\middleware\\vendor.js')
middleware['vendor'] = middleware['vendor'].default || middleware['vendor']

export default middleware
