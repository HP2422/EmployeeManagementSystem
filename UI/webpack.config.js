const path = require('path');
module.exports = {
    mode: 'development',

    //entry: './src/App.jsx',
    entry: { app: ['./src/App.jsx'] },
    output: {
        //filename: 'server.bundle.js',
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'public'),
    },
    resolve: {
        alias: {
            components: path.resolve(__dirname, 'src/components'),
        },
        extensions: ['.js', '.jsx'],
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: [
                            ['@babel/preset-env', {
                                targets: {
                                    ie: '11',
                                    edge: '15',
                                    safari: '10',
                                    firefox: '50',
                                    chrome: '49',
                                },
                            }],
                            '@babel/preset-react',
                        ],
                    },
                },
            },
        ],
    },
    optimization: {
        splitChunks: {
            name: 'vendor',
            chunks: 'all',
        },
    },
};