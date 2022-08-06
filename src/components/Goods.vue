<template>
    <div class="goodlist">
        <div class="item" v-for="item in goodslist" :key="item.id" >
            <div class="imgWrap flex-center">
                <img :src="item.img_url" alt="">
            </div>
            <div>
                <span class="title">{{ item.title }}</span>
            </div>
            <!-- 价格 -->
            <div class="price">
                <span class="price-m">&yen;{{ item.title }}</span>
                <span class="group">{{ item.buy }}</span>
            </div>
        </div>
    </div>

</template>

<script>


export default {
    data() {
        return {

        }
    },
    name: 'Goods',
    // props: ["data"],
    methods: {

        // // 子通信父
        // display(event) {
        //     //触发父绑定的事件
        //     this.$emit('goClick', { event, data: this.data })
        // }
    },
}

</script>

<style lang="scss" scoped>
.item {
    width: 50%;

    .imgWrap {

        img {
            width: 100%;
        }
    }

    .title {
        // /*1.先强制一行内显示文本*/
        // white-space: nowrap;
        // /*2.超出的部分隐藏*/
        // overflow: hidden;
        // /*3.文字用省略号替代超出的部分*/
        // text-overflow: ellipsis;
        font-weight: 800;
        font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
    }

    .price {
        display: flex;
        justify-content: space-between;

        .price-m {
            font-weight: 800;
            color: red;
        }

        .group {
            margin-right: 20px;
            color: rgb(137, 132, 132);
        }
    }
}
</style>