const CopyPlugin = require("copy-webpack-plugin");
const path = require("path");
const HtmlPlugin = require("html-webpack-plugin");
module.exports = {
    mode: "development",
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
        ],
    },
    plugins: [
        new CopyPlugin({
            patterns: [
                { from: path.resolve("src/assets/manifest.json"), to: path.resolve(__dirname, "dist") },
                {
                    from: path.resolve("src/assets/icon.png"),
                    to: path.resolve(__dirname, "dist"),
                },
            ],
        }),
        new HtmlPlugin({
            title: "ReactJS Boilerplate",
            filename: "popup.html",
        }),
    ],

    resolve: {
        extensions: [".tsx", ".ts", ".js"],
    },
    output: {
        filename: "index.js",
    },
};
