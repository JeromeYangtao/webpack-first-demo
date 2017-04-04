module.exports = {
    entry: './app/app.js',
    output: {
        filename: './public/bundle.js'
    },
    module: {
        loaders: [{
            test: /\.js[x]?$/,
            exclude: /node_modules/,
            loader: 'babel-loader?presets[]=es2015&presets[]=react'
        }, ]
    }
}