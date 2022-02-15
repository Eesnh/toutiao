const path = require('path')
const themePath = path.join(__dirname, './src/theme.less')

module.exports = {
  css: {
    extract: true, // 是否使用css分离插件 ExtractTextPlugin
    sourceMap: false, // 开启 CSS source maps?
    requireModuleExtension: true,
    loaderOptions: {
      less: {
        javascriptEnabled: true,
        modifyVars: {
          /* less 变量覆盖，用于自定义主题 */
          red: '#1890FF',
          'nav-bar-background-color': '#ff00FF',
          hack: `true; @import "${themePath}";`
        }
      }
    }

  }

}

// module.exports = {

//   css: {
//     loaderOptions: {
//       less: {
//         modifyVars: {
//           // 可在此编写样式变量
//           'nav-bar-background-color': '#ee0a24',
//           // 也可以引入我们创建好的theme.less文件
//           hack: `true; @import "${themePath}";`
//         }
//       }
//     }
//   }

// }
