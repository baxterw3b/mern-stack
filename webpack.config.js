const path = require('path');

module.exports = {
    entry: './app/src/app.js',
    output: {
        path: path.resolve(__dirname, 'app/public'),
        filename: 'bundle.js'
    },
    module: {
        rules: [
          {
            test: /\.js$/,
            exclude: /(node_modules|bower_components)/,
            use: {
              loader: 'babel-loader'
            }
          }
        ]
    },
    devServer: {
        contentBase: path.join(__dirname, "app/public"),
        compress: true,
        port: 8080,
        historyApiFallback: true
    },
    devtool: 'cheap-eval-source-map'

}
