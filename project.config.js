const NODE_ENV = process.env.NODE_ENV || 'development'

module.exports = {
    env        : NODE_ENV,
    basePath   : __dirname,
    srcDir     : 'src',
    outDir     : 'dist',
    publicPath : './',
    sourceMap  : NODE_ENV == 'development' ? true : false,
    externals  : {},
    vendor     : ['react', 'react-dom', 'react-router-dom', 'react-loadable', 'redux', 'react-redux', 'crypto-js', 'js-cookie']
}
