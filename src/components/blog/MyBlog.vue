<!--
 * @Author: lifecodery7 3180349973@qq.com
 * @Date: 2024-07-27 21:50:15
 * @LastEditors: lifecodery7 3180349973@qq.com
 * @LastEditTime: 2024-07-28 01:21:38
 * @FilePath: \lifecodery-blog-vue\src\components\blog\MyBlog.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<script setup>
import {ref} from 'vue'
const props = defineProps({
    blog:{
        type:Object,
        required:true
    }
})
const  myblog = ref(props.blog)
</script>
<template>
    <div>
        <article class="p-6 max-w-sm mx-auto bg-white rounded-xl shadow-lg flex items-center space-x-4">
            <div class="my-blog-hd shrink-0">
                <h3 class="h-12 w-12">{{ myblog.title }}</h3>
                <span>作者：{{ myblog.author }}</span>
                <span>{{myblog.createTime}}</span>
                <span>{{myblog.updateTime===''?'':'更新时间'+myblog.updateTime}}</span>
            </div>
            <div class="my-blog-bd">
                <section class="text-slate-500">
                   {{myblog.content}}
                </section>
            </div>
        </article>
    </div>
</template>
<style  scoped>
</style>