const path = require('path')
const webpackNodeExternals = require('webpack-node-externals');
const CopyWebpackPlugin = require('copy-webpack-plugin')

module.exports ={
    target:'node',
    entry:'./src/index.js',
    output: {
        filename:'bundle.js',
        path:path.resolve(__dirname,'build'),
        publicPath: '/build'
    },
    module: {
        rules: [
            {
                test:/\.js?$/,
                loader: 'babel-loader',
                exclude: '/node_modules/',
                options: {
                    presets: [
                        'react', 'stage-0',['env',{
                            target:{
                                browsers: ['last 2 versions']}
                            
                        }]
                    ]
                }
            },
        ]
    },
    plugins: [
        new CopyWebpackPlugin([
            {from: 'src/assets/graphics', to: 'assets/graphics'},
            {from: 'src/assests/email_templates', to: 'assests/email_templates'}
        ])
    ],
    externals: [webpackNodeExternals()]
};