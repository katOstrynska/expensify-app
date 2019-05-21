// entry -> output
//entry - where webpack should start (for us it's app.js in src folder)

const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = (env) => {
    const isProduction = env === 'production';
    const CSSExtract = new MiniCssExtractPlugin();
    return {
        entry: './src/app.js',
        output: {
            path: path.join(__dirname, 'public', 'dist'),
            filename: 'bundle.js'
        },
        module: {
            rules: [{
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: [
                            '@babel/preset-env'
                        ]
                    }
                }
            }, {
                test: /\.s?css$/,
                use: [{
                    loader: MiniCssExtractPlugin.loader
                  }, {
                      loader: "css-loader",
                      options: {
                          sourceMap: true
                      }
                  } , {
                    loader: "sass-loader",
                    options: {
                        sourceMap: true
                    }
                  }
                ]
            }]
        },
        plugins: [
            CSSExtract
        ],
        devtool: isProduction ? 'source-map' : 'inline-source-map',
        devServer: {
            contentBase: path.join(__dirname, 'public'),
            historyApiFallback: true,
            publicPath: '/dist/'
        },
        mode: 'development'
    };
};