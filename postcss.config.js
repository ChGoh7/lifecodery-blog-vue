/*
 * @Author: lifecodery7 3180349973@qq.com
 * @Date: 2024-07-27 22:50:34
 * @LastEditors: lifecodery7 3180349973@qq.com
 * @LastEditTime: 2024-07-28 01:15:24
 * @FilePath: \lifecodery-blog-vue\postcss.config.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
let autoprefixer = require("autoprefixer");
export default {
  plugins: {
    tailwindcss: {},
    autoprefixer: { // 兼容市面所有版本浏览器
      browsers: ("> 0% ")
    },
    // 生产环境优化
    ...(process.env.NODE_ENV === 'production' ? { cssnano: {} } : {})
  },
}
