// tidak digunakan namun, webpack.proj.js dan webpack.dev.js berasal dari sini


const path = require("path");
const HtmlWebpackPlugin = require ("html-webpack-plugin");
 
module.exports = {
    entry: "./src/index.js",
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "bundle.js"
    },
    mode: "production",
    module: {
        rules: [
            /* style and css loader */
            {
                test: /\.css$/,
                use: [
                    {
                        loader: "style-loader"
                    },
                    {
                        loader: "css-loader"
                    }
                ]
            },
            /* babel loader */
            {
                test: /\.js$/,
                exclude: "/node_modules/",
                use: [
                    {
                        loader: "babel-loader",
                        options: {
                            presets: ["@babel/preset-env"]
                        }
                    }
                ]
            }
        ]
    },

    plugins : [
        /*HTML plugin*/
        new HtmlWebpackPlugin({
            template : "./src/template.html",
            filename : "index.html"
        })
    ]
}