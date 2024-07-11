const path = require('path');

module.exports = {
    entry: './src/index.js', // Replace with your main entry file
    output: {
        path: path.resolve(__dirname, 'dist'), // Replace with your output directory
        filename: 'bundle.js', // Replace with your output bundle name
        publicPath: '/', // Base path for all assets
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader', 'postcss-loader'],
            },
            {
                test: /\.(png|jpg|gif|svg)$/,
                loader: 'file-loader',
                options: {
                    name: '[name].[ext]',
                    outputPath: 'assets/', // Adjust output path as needed
                },
            },
        ],
    },
};