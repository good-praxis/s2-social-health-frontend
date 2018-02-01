module.exports = {
    entry: "./src/index.js",
    output: {
        path: "public",
        filename: "bundle.js",
    },
    devServer: {
        inline: true,
        contentBase: './public',
        port: 80,
        host: "207.154.223.56"

    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /(node_modules)/,
                loader: ['babel'],
                query: {
                    presets: ['es2015', 'react', 'stage-0']
                }
            }
        ]
    }
}