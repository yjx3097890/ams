const absolutePath = require('../../others/utils').absolutePath;
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

module.exports = {
  entry: {
      index: absolutePath('front/src/entries/index/module.ts'),
  },
  plugins: [
      new HtmlWebpackPlugin({  //自动 注入生成的 script 和 link 标签。使用output的 publicPath 和 filename
          template: absolutePath('front/src/app.html'),
          title: '综合档案管理应用系统',
          filename: 'index.html',
          chunks: ['index', 'vendor', 'polyfills']
      })
  ]
};
