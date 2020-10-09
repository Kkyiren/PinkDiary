<template>
    <div class="shop">
        <!-- <rounter-view></rounter-view> -->
        <header>
            <div class="top">
                <div class="left">
                    <img src="../assets/images/粉粉-商店_slices/返回.png" alt="" />
                </div>
                <div class="center">商店</div>
                <div class="right">
                    <img src="../assets/images/粉粉-商店_slices/分享图标.png" alt="" />
                    <img src="../assets/images/粉粉-商店_slices/拍照图标.png" alt="" />
                </div>
            </div>
            <input type="text" class="bottom" placeholder="搜索宝贝">
            <!-- <van-search
            v-model="value"
            placeholder="搜索宝贝"
            input-align="center"
            shape="round"
            background="#FFB6D6"
            /> -->
        </header>
        <main>
            <van-sidebar v-model="activeKey" @change="onChange">
                <van-sidebar-item title="热门推荐" />
                <van-sidebar-item title="潮流女装" />
                <van-sidebar-item title="潮流男装" />
                <van-sidebar-item title="母婴健康" />
                <van-sidebar-item title="内衣配饰" />
                <van-sidebar-item title="电脑办公" />
                <van-sidebar-item title="手机数码" />
                <van-sidebar-item title="图书音像" />
                <van-sidebar-item title="家用电器" />
                <van-sidebar-item title="家具器材" />
                <van-sidebar-item title="居家生活" />
                <van-sidebar-item title="医药百货" />
                <van-sidebar-item title="进口食品" />
            </van-sidebar>
            <div class="article">
                <h6>热门推荐</h6>
                <img src="../assets/images/粉粉-商店_slices/手机banner.png" alt="" />
                <ul>
                    <li>
                        <img src="../assets/images/粉粉-商店_slices/图层 2.png" alt="" />
                        <p>华为</p>
                    </li>
                    <li>
                        <img src="../assets/images/粉粉-商店_slices/智能手环.png" alt="" />
                        <p>智能手环</p>
                    </li>
                    <li>
                        <img src="../assets/images/粉粉-商店_slices/单反相机图.png" alt="" />
                        <p>单反相机</p>
                    </li>
                    <li>
                        <img src="../assets/images/粉粉-商店_slices/创意手环图.png" alt="" />
                        <p>创意手环</p>
                    </li>
                    <li>
                        <img src="../assets/images/粉粉-商店_slices/小米耳机图.png" alt="" />
                        <p>小米耳机</p>
                    </li>
                    <li>
                        <img src="../assets/images/粉粉-商店_slices/DV摄像机图.png" alt="" />
                        <p>DV摄像机</p>
                    </li>
                    <li>
                        <img src="../assets/images/粉粉-商店_slices/照相机图.png" alt="" />
                        <p>照相机</p>
                    </li>
                    <li>
                        <img src="../assets/images/粉粉-商店_slices/魔音耳机图.png" alt="" />
                        <p>魔音耳机</p>
                    </li>
                    <li>
                        <img src="../assets/images/粉粉-商店_slices/vivo图.png" alt="" />
                        <p>vivo手机</p>
                    </li>
                    <li>
                        <img src="../assets/images/粉粉-商店_slices/图.png" alt="" />
                        <p>音箱</p>
                    </li>
                    <li>
                        <img src="../assets/images/粉粉-商店_slices/充电器图.png" alt="" />
                        <p>充电器</p>
                    </li>
                    <li>
                        <img src="../assets/images/粉粉-商店_slices/创意手环图.png" alt="" />
                        <p>智能手环</p>
                    </li>
                    <li>
                        <img src="../assets/images/粉粉-商店_slices/话筒.png" alt="" />
                        <p>话筒</p>
                    </li>
                    <li>
                        <img src="../assets/images/粉粉-商店_slices/U盘.png" alt="" />
                        <p>U盘</p>
                    </li>
                    <li>
                        <img src="../assets/images/粉粉-商店_slices/图层 3 拷贝.png" alt="" />
                        <p>移动硬盘</p>
                    </li>
                </ul>
            </div>
        </main>
    </div>
</template>

<script>
    export default{
        data(){
            return{
                value:'',
                activeKey:''
            }
        },
        methods:{
            onChange(){ 
            }
        }
    }
</script>

<style lang="stylus">
    header 
        width 375px
        height 101px
        background #FFB6D6
        padding  0 18px
        .top
            width 100%
            height 44px
            color #fff
            display flex
            justify-content space-between
            align-items center
            .left>img
                width 23px
                height 18px
            .center
                font-size 18px
                margin-left 13%
            .right
                width 70px
                display flex
                justify-content space-between
                img
                    width 23px
                    height 23px
        .bottom
            width 100%
            height 37px
            font-size 14px
            font-weight Medium
            border none 
            border-radius 18px   
            margin 10px 0  
            text-align center

    main
        position fixed
        top 101px
        left 0
        // right 0
        // bottom 0
        background #fff
        display flex
        z-index 120
        .van-sidebar-item--select::before 
            width 4px
            height 95px
            background-color #FF6C8C
        .article
            flex 1
            flex-wrap wrap
            align-content flex-start
            // background #0f0
            padding  10px 15px 0 10px
            h6
                font-size 12px
                font-weight bold
                margin-bottom 10px
            img 
                width 274px
                height 98px
                margin-bottom 10px
            ul
                list-style none
                display flex
                flex-wrap wrap
                align-content flex-start
                li
                    width 33.33%
                    height 100px
                    display flex
                    flex-direction column
                    justify-content center
                    align-items center
                    margin-bottom 10px 
                    img 
                        width 50px
                        height 50px
                    p
                        font-size 12px
                        font-weight bold
                        color #525252
                        
</style>