<script setup>
import MyBlog from '../../components/blog/MyBlog.vue'
import {onMounted, ref} from 'vue'
const blog  = ref({
    title:'文章1',
    content:'lifecodery7写文章',
    author:"lifecodery",
    viewCount:20,
    createTime: new Date().toLocaleDateString(),
    updateTime:''
})

const blog2 = ref({
    title:'文章2',
    content:'lifecodery写文章',
    author:"lifecodery",
    viewCount:20,
    createTime: new Date().toLocaleDateString(),
    updateTime:''
})
</script>
<template>
    <div>
        <MyBlog :blog="blog"></MyBlog>
        <MyBlog :blog="blog2"></MyBlog>
    </div>
</template>
<style lang="scss" scoped>

</style>