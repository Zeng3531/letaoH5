<template>
    <div>
        <!-- 三个tabbar路由的父组件 -->
        <router-view></router-view>
        <van-tabbar v-model="active" active-color="orange" inactive-color="#00c392">
            <van-tabbar-item icon="home-o" dot to="/home/index">首页</van-tabbar-item>
            <van-tabbar-item icon="friends-o" badge="30" to="/home/shopcar">订单列表</van-tabbar-item>
            <van-tabbar-item icon="setting-o" to="/home/user">设置</van-tabbar-item>
        </van-tabbar>

    </div>
</template>

<script>

export default {
    data() {
        return {
            // 控制谁高亮显示
            active: 1
        }
    },
    watch: {
        '$route': {
            handler: function (newRoute, oldRoute) {
                let { name } = newRoute.meta
                // 映射关系
                const nameMap = {
                    'home': 0,
                    'shopcar': 1,
                    'user': 2
                }
                let active = nameMap[name]
                // 设置激活默认
                this.active = active
            },
            // 立即执行
            immediate: true

        }

    }
}
</script>

<style lang="scss" scoped>
.van-tabbar{
    font-weight: 800;
}
</style>