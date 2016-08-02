module.exports = {
  entry:[
    './src/index.js'
  ]
  ,module: {
    loaders: [{
      test: /\.jsx?$/
      ,exclude: '/node_modules/'
      ,loader: 'babel'
    }]
  }
  ,resolve: ['','.js','.jsx'] 
  ,output: {
    path: __dirname + '/dist/'
    ,publicPath: '/'
    ,filename: 'bundle.js'
  }
  ,devServer: {
    contentBase: './dist'
  }
}
