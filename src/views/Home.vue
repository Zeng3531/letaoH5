<template>
    <div class="homeContainer">
        <!--搜索框-->
        <van-sticky>
            <div class="search">
                <div class="imglogo">
                    <img src="../images/u=1576628480,3315417497&fm=253&fmt=auto&app=138&f=JPEG.webp" alt="">
                </div>
                <van-search class="input" background="#4fc08d" placeholder="请输入搜索关键词" shape="round" />
            </div>
        </van-sticky>
        <!-- 轮播图 -->
        <div class="swipe">
            <van-swipe class="my-swipe" :autoplay="3000" indicator-color="orange">
                <van-swipe-item v-for="item in lunboData" :key="item.img">
                    <img :src="item.img" alt="">
                </van-swipe-item>

            </van-swipe>
        </div>
        <!-- 宫格图 -->
        <div>
            <van-grid square>
                <van-grid-item v-for="item in gridData" :key="item.src" :to='item.to'>
                    <div class="my-grid-item">
                        <img :src="item.src" alt="">
                        <span class="text">{{ item.text }}</span>
                    </div>
                </van-grid-item>
            </van-grid>
        </div>
        <!-- 分割线 -->
        <div>
            <van-divider>recommend commodities</van-divider>
        </div>

        <!-- 商品推荐 -->
        <div class="goodlist">
            <!-- 引用goods组件 -->
            <Goods v-for="item in goodslist" :key="item.id" :data="item"/>

        </div>
        <!-- 回到顶部的组件 -->
        <BackTop :scrollTop="500"></BackTop>

    </div>

</template>

<script>
// 导入接口
// 获取轮播图数据
import { fetchLunbo, fetchRecommendGoods } from "../api/home.js";

//导入组件
import BackTop from "../components/BackTop.vue";
import Goods from '../components/Goods.vue'


export default {
    name: 'Home',
    data() {
        return {
            lunboData: [],

            // 显示的条数
            page: 1,
            limit: 10,
            gridData: [
                { src: 'https://www.nikestore.com.cn/prod%2FNIKEOUTLETS%2FDIP-gka5m9000s2m1e8lk2bc%2FUNEX%2F553558-701-%E5%88%97%E8%A1%A8%E5%9B%BE-1.png?etag=1657096886976', text: 'NAKE jay', to: "./goodlist" },
                { src: 'https://www.nikestore.com.cn/prod%2FNIKEOUTLETS%2FDIP-0ce72800g1jec5jb82bc%2FUNEX%2FCT0978-016-%E5%88%97%E8%A1%A8%E5%9B%BE-1.png?etag=1657047246160', text: 'NAKE jay', to: "./goodlist" },
                { src: 'https://www.nikestore.com.cn/prod%2FNIKEOUTLETS%2FDIP-0h162800gvrjok7l72bc%2FUNEX%2F555088-108-%E5%88%97%E8%A1%A8%E5%9B%BE-1.png?etag=1657044504545', text: 'NAKE jay', to: "./goodlist" },
                { src: 'https://www.nikestore.com.cn/prod%2FNIKEOUTLETS%2FDIP-giv6m9000s2m1u3vt2bc%2FUNEX%2FDJ4891-061-%E5%88%97%E8%A1%A8%E5%9B%BE-1.png?etag=1657135069206', text: 'NAKE jay', to: "./goodlist" },
                { src: 'https://www.nikestore.com.cn/prod%2FNIKEOUTLETS%2FDIP-0b1ke800gagl7n210tac%2FUNEX%2FCT0978-100-%E5%88%97%E8%A1%A8%E5%9B%BE-1.png?etag=1656357029773', text: 'NAKE jay', to: "./goodlist" },
                { src: 'https://www.nikestore.com.cn/prod%2FNIKEOUTLETS%2FDIP-gefc2800005hqnb7qcbc%2FUNEX%2FDX6042-111-%E5%88%97%E8%A1%A8%E5%9B%BE-1.png?etag=1658430393116', text: 'NAKE jay', to: "./goodlist" },
                { src: 'https://www.nikestore.com.cn/prod%2FNIKEOUTLETS%2FDIP-g6c9qe00g57nnvb7auac%2FUNEX%2FDV1717-100-%E5%88%97%E8%A1%A8%E5%9B%BE-1.png?etag=1656529872116', text: 'NAKE jay', to: "./goodlist" },
                { src: 'https://www.nikestore.com.cn/prod%2FNIKEOUTLETS%2FDIP-gqq31800005hqvevqabc%2FUNEX%2FDX6044-111-%E5%88%97%E8%A1%A8%E5%9B%BE-1.png?etag=1658171406472', text: 'NAKE jay', to: "./goodlist" },
            ],
            goodslist: [],

        }
    },
    // 创建前
    created() {
        this._fetchLunbo()
        this._fetchRecommendGoods()
    },

    // 挂载前
    methods: {
        async _fetchLunbo() {
            let data = await fetchLunbo()
            //赋值操作
            this.lunboData = data.message
            console.log(data);
        },

        // 获取我们的 推荐商品 
        async _fetchRecommendGoods() {
            let { message } = await fetchRecommendGoods(this.page, this.limit)
            this.goodslist = message
            console.log(message);
        },

        // dispalyYes({ data }) {
        //     // 跳转到商品的详情页面
        //     this.$router.push(`/goodsDetail${data.id}`)
        // },

    },

    // 定义组件
    components: {
        BackTop,
        Goods
    }
};
</script>

<style lang="scss" scoped>
@import"../asset/css/common.scss";


.homeContainer {
    font-size: 14px;
}

.search {
    display: flex;
    background-color: #00c392;

    .imglogo img {
        margin-top: 7px;
        margin-left: 5px;
        border-radius: 50px;
        width: 40px;
        height: 40px;
    }

    .input {
        flex: 1;

    }
}

.my-swipe .van-swipe-item {
    height: 200px;
    background-color: #2e3f3b;
    text-align: center;

    img {
        width: 100%;
        height: 100%;
    }
}

.van-grid {
    .my-grid-item {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        img {
            border-radius: 50%;
            width: 60%;

        }

        .text {
            color: #00c392;
            font-family: 'Courier New', Courier, monospace;
            font-weight: 800;
        }
    }
}

// 分割线
.van-divider {
    font-weight: 800;
    color: black;
}

// 商品列表
.goodlist {
    display: flex;
    flex-flow: wrap;
    justify-content: space-around;
    background-color: #f7f6f6;
}
</style>