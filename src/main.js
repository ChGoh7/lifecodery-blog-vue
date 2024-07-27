/*
 * @Author: lifecodery7 3180349973@qq.com
 * @Date: 2024-07-23 02:21:26
 * @LastEditors: lifecodery7 3180349973@qq.com
 * @LastEditTime: 2024-07-28 01:18:46
 * @FilePath: \lifecodery-blog-vue\src\main.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import './assets/css/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')