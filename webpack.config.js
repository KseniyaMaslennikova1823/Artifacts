const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

let htmlPageNames = ['page2', 'page3'];
let multipleHtmlPlugins = htmlPageNames.map(name => {
  return new HtmlWebpackPlugin({
    template: `./${name}.html`,
    filename: `${name}.html`,
    chunks: ['main']
  })
});


module.exports = {
    mode: 'development',
    entry: './src/js/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    module: {
        rules: [
          {
            test: /\.(scss|css)$/, // Регулярное выражение для обработки файлов с расширением .css, .scss
            use: ['style-loader', 'css-loader', 'sass-loader'], // Загрузчики, используемые для обработки CSS/Sass - файлов
          },
        ],
      },
    plugins: [
        new HtmlWebpackPlugin({
          filename: 'index.html',
          template: 'index.html',
          chunks: ['main']
        })
      ],


    devServer: {
        port: 8080,
        hot: "only",
        static: {
          directory: path.join(__dirname, './'), // Каталог для статики
          serveIndex: true,
        },
        open: true, // Автоматически открывать браузер
      }, 
}