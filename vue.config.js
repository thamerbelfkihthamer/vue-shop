const webpack = require('webpack')
module.exports = {
    runtimeCompiler: true,
    configureWebpack: {
        plugins: [
            new webpack.ProvidePlugin({
                $: 'jquery',
                jquery: 'jquery',
                'window.jQuery': 'jquery',
                jQuery: 'jquery'
            })
        ]
    },
}
