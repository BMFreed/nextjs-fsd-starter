const deepmerge = require('deepmerge')

const featureSlicedConfig = require('./eslint/featureSlicedConfig')
const baseConfig = require('./eslint/baseConfig')
const nextConfig = require('./eslint/nextConfig')

module.exports = deepmerge(deepmerge(featureSlicedConfig, baseConfig), nextConfig)
