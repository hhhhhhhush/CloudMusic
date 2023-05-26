<template>
    <div class="iconList">
        <div class="iconItem">
            <svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-fanjutuijian"></use>
            </svg>
            <p>每日推荐</p>
        </div>
        <div class="iconItem">
            <svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-airec"></use>
            </svg>
            <p>私人FM</p>
        </div>
        <div class="iconItem">
            <svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-gedan"></use>
            </svg>
            <p>歌单</p>
        </div>
        <div class="iconItem">
            <svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-paihangbang"></use>
            </svg>
            <p>排行榜</p>
        </div>
    </div>
</template>

<script>
export default {
    name: "iconlist"
}
</script>

<style lang="less" scoped>
.iconList{
    width: 7.5rem;
    display: flex;
    justify-content: space-between;
    padding: 0.4rem;
    .iconItem{
        display: flex;
        flex-direction: column;
        align-items: center;
        .icon{
            width: 1.2rem;
            height: 1.2rem;
        }
        span{
            font-size: 0.26rem;
        }
    }
}

</style>
