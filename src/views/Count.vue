<template>
    <div class="count">
        <p>{{count}}</p>
        <div class="button">
            <van-button type="primary" @click="plus">+</van-button>
            <van-button type="warning" @click="minus">-</van-button>
        </div>
    </div>
</template>
<script>
    // import { ref } from 'Vue';
    import { reactive } from 'vue';
    export default {
        name: 'Count',
        setup () {

            // 初始化数据
            const state = reactive({
                count: 0
            })

            return {
                state
            }
        }
    }
</script>
<style lang="less" scoped>
    @import '@/assets/style/fn.less';
    .title {
        display: flex;
        position: relative;

        &:after {
            .setTopLine()
        }

        h1 {
            color: @colorPrimary;
            font-size: 0.48rem;
        }
    }
</style>