<!--
 * @Author: lifecodery7 3180349973@qq.com
 * @Date: 2024-07-23 02:21:26
 * @LastEditors: lifecodery7 3180349973@qq.com
 * @LastEditTime: 2024-07-27 22:07:55
 * @FilePath: \lifecodery-blog-vue\src\App.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
    <div>
      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/blog">blog</RouterLink>
      </nav>
    </div>
  <RouterView />
</template>

<style scoped>

</style>
