<template>
    <ul>
        <li v-for="(item,index) in tablist"
        :key="index"
        :class="{active:activeIndex===index}"
        @click="tabsChange(index,item.url)">
        {{item.title}}
        <div class="underLine" v-if="activeIndex===index"></div>
        </li>
    </ul>
</template>
<script>
export default {
    data(){
        return{
            tablist:[
                {
                    title:'精选',
                    url:'/choose'
                },
                 {
                    title:'电器',
                    url:'/Electrical'
                },
                 {
                    title:'手机',
                    url:'/phone'
                },
                 {
                    title:'女装',
                    url:'/close'
                },
                 {
                    title:'电脑',
                    url:'/Computer'
                },
                 {
                    title:'美妆',
                    url:'/beauty'
                },
            ],
            activeIndex:0
        }
    },
            methods:{
                tabsChange(i,url){
                    this.activeIndex= i;
                    this.$router.push(url)
                }
            }
}
</script>>

<style lang="stylus" scoped>
    ul{
        display: flex;
        justify-content: space-around;
        padding-top: 10px;
    }
    li{
        width: 36px;
        height: 18px;
        font-size: 13px;
        font-family: PingFang;
        color: #FFFFFF;
        text-align: center;
    }
    .active{
        font-size: 18px;
        font-weight: bold;
    }
    .underLine{
        width: 16px;
        height: 2px;
        background: #FBF7F8;
        border-radius: 1px;
        margin-left: 10px;
        margin-top: 3px;
    }
</style>