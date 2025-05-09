const CopyPlugin = require("copy-webpack-plugin");
const path = require("path");
const HtmlPlugin = require("html-webpack-plugin");
const autoprefixer = require("autoprefixer");

const tailwindcss = require("tailwindcss");

module.exports = {
    mode: "development",
    devtool: "cheap-module-source-map",
    entry: {
        popup: path.resolve("src/popup/popup.tsx"),
    },
    module: {
        rules: [
            {
                use: "ts-loader",
                test: /\.tsx?$/,
                exclude: /node_modules/,
            },
            {
                use: [
                    "style-loader",
                    "css-loader",
                    {
                        loader: "postcss-loader",
                    },
                ],
                test: /\.css$/i,
            },
        ],
    },
    plugins: [
        new CopyPlugin({
            patterns: [
                { from: path.resolve("src/static/manifest.json"), to: path.resolve(__dirname, "dist") },
                {
                    from: path.resolve("src/static/icon.png"),
                    to: path.resolve(__dirname, "dist"),
                },
            ],
        }),
        new HtmlPlugin({
            title: "ReactJS Boilerplate",
            filename: "popup.html",
            chunks: ["popup"],
        }),
    ],

    resolve: {
        extensions: [".tsx", ".ts", ".js"],
    },
    output: {
        filename: "[name].js",
    },
};
