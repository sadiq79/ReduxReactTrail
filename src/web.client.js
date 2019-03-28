const path = require('path');
const webConfig = require('./webConfig');
module.exports={
    entry:['./src/client/client.js','./src/assets/scss/styles.scss'],

    output:{
        filename: 'client.bundle.js',
        path:path.resolve(__dirname, 'build'),
        publicPath: '/build'
    },
    module: {
        rules: [
            {
                test: /\.js?$/,
                loader: 'babel-loader',
                exclude: '/node_modules/',
                options: {
                    presets: [
                        'react','stage-0',['env', {
                            target: { browsers:['last 2 versions']}
                        }]
                    ]
                }
            },
            {
                test:/\.scss$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: '[name].min.css',
                            outputPath: 'assests/css/'
                        }
                    },
                    {
                        loader: 'extract-loader'
                    },
                    {
                        loader: 'css-loader',
                        options: {
                            minimize:true,
                            url:true,
                            root:webConfig.siteURL
                        }
                    },
                    {
                        loader:'sass-loader'
                    }
                ]
            }
        ]
    }
};