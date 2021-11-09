const path = require("path");
const webpack = require("webpack");
const { merge } = require("webpack-merge");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const modeConfiguration = env => require(`./build-utils/webpack.${env}`)(env);

module.exports = ({ mode } = { mode: "production" }) => {
    console.log(`mode is: ${mode}`);

    return merge({
        mode,
        entry: "./src/index.js",
        devServer: {
            hot: true,
            open: true
        },
        output: {
            publicPath: "/",
            path: path.resolve(__dirname, "build"),
            filename: "bundle.js"
        },
        module: {
            rules: [
                {
                    test: /\.(js|jsx)$/,
                    exclude: /node_modules/,
                    loader: "babel-loader"
                },
                {
                    test: /\.jpg$/,
                    exclude: /(node_modules)/,
                    loader: 'file-loader'
                },
                {
                    test: /\.png$/,
                    exclude: /(node_modules)/,
                    loader: 'file-loader'
                },
                {
                    test: /\.webp$/,
                    exclude: /(node_modules)/,
                    loader: 'file-loader'
                },
                {
                    test: /\.svg$/,
                    exclude: /(node_modules)/,
                    use: [
                        {
                            loader: 'svg-url-loader',
                            options: {
                                limit: 10000,
                            },
                        },
                    ],
                }
            ]
        },

        plugins: [
            new HtmlWebpackPlugin({
                template: "./public/index.html"
            }),
            new webpack.HotModuleReplacementPlugin()
        ],
    },
        modeConfiguration(mode)
    );
};