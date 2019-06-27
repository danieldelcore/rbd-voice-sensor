module.exports = {
    mode: "production",
    entry: "./index.js",
    output: {
        library: "rbd-voice-sensor",
        libraryTarget: "commonjs",
        libraryExport: "default"
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: ["babel-loader"]
            }
        ]
    },
    externals: ["react"],
    devtool: "source-map"
};
