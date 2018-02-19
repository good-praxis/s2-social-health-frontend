module.exports = {
    entry: ["babel-polyfill", "./src/index.js"],
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
                test: /\.(js|jsx)$/,
                exclude: /(node_modules)/,
                loader: ['babel'],
                query: {
                    presets: ['es2015', 'react', 'stage-0']
                }
            },
            {
              test: /\.(jpe?g|png|gif)$/i,   //to support eg. background-image property
              loader:"file-loader",
              query:{
                name:'[name].[ext]',
                outputPath:'images/'
                //the images will be emmited to public/assets/images/ folder
                //the images will be put in the DOM <style> tag as eg. background: url(assets/images/image.png);
              }
            },
            {
              test: /\.(woff(2)?|ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,    //to support @font-face rule
              loader: "url-loader",
              query:{
                limit:'10000',
                name:'[name].[ext]',
                outputPath:'fonts/'
                //the fonts will be emmited to public/assets/fonts/ folder
                //the fonts will be put in the DOM <style> tag as eg. @font-face{ src:url(assets/fonts/font.ttf); }
              }
            },
            {
              test: /\.css$/,
              loaders: ["style-loader","css-loader"]
            }
        ]
    }
}
