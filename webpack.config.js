const CopyPlugin = require("copy-webpack-plugin");
const path = require("path");
const HtmlPlugin = require("html-webpack-plugin");

module.exports = {
    mode: "development",
    devtool: "cheap-module-source-map",
    entry: {
        popup: path.resolve("src/popup/popup.jsx"),
        options: path.resolve("src/options/options.jsx"),
        background: path.resolve("src/background/background.js"),
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/, // handle both .js and .jsx
                exclude: /node_modules/,
                use: "babel-loader",
            },
            {
                test: /\.css$/i,
                use: ["style-loader", "css-loader"],
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: "asset/resource",
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
                {
                    from: path.resolve("src/static/banner.png"),
                    to: path.resolve(__dirname, "dist"),
                },
            ],
        }),
        ...getHtmlPlugins(["popup", "options"]),
    ],
    optimization: {
        splitChunks: {
            chunks: "all",
        },
    },

    resolve: {
        extensions: [".js", ".jsx"],
    },
    output: {
        filename: "[name].js",
    },
};
function getHtmlPlugins(chunks) {
    return chunks.map(
        (chunk) =>
            new HtmlPlugin({
                title: `${chunk} Page`,
                filename: `${chunk}.html`,
                chunks: [chunk],
            })
    );
}
