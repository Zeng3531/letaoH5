<template>
    <div>
        <van-pull-refresh v-model="refreshing" @refresh="onRefresh">
            <van-list v-model="loading" :finished="finished" finished-text="没有更多了" @load="onLoad">
                <!-- 商品推荐 -->
                <div class="goodlist">
                    <!-- 引用goods组件 -->
                    <Goods>
                        <template #ending>
                            <div class="_footer">
                                <span class="_price">热卖中</span>
                                <span class="_buy">剩余1000</span>
                            </div>
                        </template>
                    </Goods>
                </div>
            </van-list>
        </van-pull-refresh>

    </div>
</template>
<script>
// 导入组件
// import Goods from "../components/Goods.vue";
// 导入接口
// import { fetchGoodList } from '../api/goodlist'

export default {
    data() {
        return {
            list: [],
            loading: false,
            finished: false,
            refreshing: false,
        };
    },
    methods: {
        onLoad() {
            setTimeout(() => {
                if (this.refreshing) {
                    this.list = [];
                    this.refreshing = false;
                }

                for (let i = 0; i < 10; i++) {
                    this.list.push(this.list.length + 1);
                }
                this.loading = false;

                if (this.list.length >= 40) {
                    this.finished = true;
                }
            }, 1000);
        },

        // dispalyYes({ data }) {
        //     // 跳转到
        //     this.$router.push(`/goodsDetail/${data.id}`)
        // },

        onRefresh() {
            // 清空列表数据
            this.finished = false;
            // 重新加载数据
            // 将 loading 设置为 true，表示处于加载状态
            this.loading = true;
            this.onLoad();
        },
    },
    // // 注册组件
    // components: {
    //     Goods
    // }
};

</script>
<style lang="scss" scoped>
.goodlist {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;


    ._footer {
        display: flex;
        justify-content: space-around;
        align-items: center;
        margin: 10px 0;

        ._buy {
            font-size: 14px;
            color: #999999;
        }

        ._price {
            color: #999999;
            font-size: 14px;
        }
    }
}
</style>