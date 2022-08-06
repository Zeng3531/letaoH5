<template>
    <div class="BackTop">
        <slot>
            <img v-show="isShow" @click="goTop"
                src="https://img2.baidu.com/it/u=1247228008,1174398215&fm=253&fmt=auto&app=138&f=GIF?w=400&h=300"
                alt="">
        </slot>
    </div>
</template>

<script>

export default {
    props: {
        scrollTop: {
            type: Number,
            default: 800
        }
    },
    data() {
        return {
            isShow: false
        }
    },
    mounted() {
        //绑定滚动事件 
        document.addEventListener('scroll', (e) => {
            let scrollTop = document.documentElement.scrollTop || document.body.scrollTop
            console.log(scrollTop);
            if (scrollTop > this.scrollTop) {
                this.isShow = true
            } else {
                this.isShow = false
            }
        })
    },
    methods: {
        goTop() {
            document.documentElement.scrollTop = document.body.scrollTop = 0
        }
    },
    // destroyed() {
    //     //解绑滚动事件
    //     document.removeEventListener('scroll',this.scrollTop)
    // },
}
</script>

<style lang="scss" scoped>
.BackTop {
    position: fixed;
    right: 5px;
    bottom: 100px;
    width: 100px;
    height: 100px;

    img {
        width: 60%;
        border-radius: 60%;
    }
}
</style>