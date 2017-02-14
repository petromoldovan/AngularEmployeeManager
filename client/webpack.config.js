var path = require('path');

module.exports = {
    devtool: 'sourcemap',
    entry: path.resolve( __dirname + '/src' ),
    output: 'bundle.js',
    module: {
        loaders: [
            {test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader'},
            {test: /\.html$/, loader: 'raw-loader'},
            {test: /\.css$/, loader: 'style-loader!css-loader'},
            {test: /\.(ttf|otf|eot|svg|woff(2)?)$/, loader: 'url-loader'},
        ]
    },
    devServer: {
        inline: true,
        port: 3000
    },
}