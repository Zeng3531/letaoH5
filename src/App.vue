<template>
    <div class="app">
        <van-nav-bar :title="title" left-text="返回" right-text="搜索" v-show="isShownabar" @click-left="$router.back()" />
        <router-view></router-view>
    </div>
</template>

<script>
export default {
    methods: {
        routerChange({ name }) {
            this.$router.push({
                name
            })
        },
    },
    data() {
        return {
            isShownabar: true,
        }
    },

    watch: {
        '$route': {
            handler: function (newRoute, oldRoute) {
                // 是主页的则隐藏navbar,否则显示
                // 拿到子路由的属性
                let { isMainPage } = newRoute.meta;
                this.title = this.title
                if (isMainPage) {
                    this.isShownabar = false
                } else {
                    this.isShownabar = true
                }
            },
            // 立即执行
            immediate: true
        }

    }
}
</script>
<style lang="scss">
* {
    box-sizing: border-box;
}

.app {
    min-width: 320px;
    max-width: 750px;
    margin: 0 auto;
}

.wrapper {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
}

.block {
    width: 120px;
    height: 120px;
    background-color: #fff;
}

html {
    scroll-behavior: smooth;
}
</style>

