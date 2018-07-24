#开发环境插件依赖
##webpack4主插件
```
webpack  
webpack-cli  
webpack-dev-server  
```
##babel主插件
```
babel-core                              //ES6转译ES5  
babel-loader  
babel-preset-env  
babel-preset-stage-0 
```
##babel插件
```
babel-preset-react  
css-loader 
less 
less-loader  
style-loader  
file-loader url-loader                  //图片引用  
postcss-loader autoprefixer             //添加CSS3前缀  
.babelrc 中的presets                    // 从右向左解析
```
##webpack插件
extract-text-webpack-plugin             //拆分css  
clean-webpack-plugin                    //打包前清除打包文件夹下的文件