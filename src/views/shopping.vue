<template>
    <div id="app">
            <q-header/>
            <tabs/>
            <router-view></router-view>
    </div>
</template>

<script>
<<<<<<< HEAD
import qHeader from '@/components/Header'
import Tabs from '@/components/Tab'
=======
import qHeader from '@/components/jin/Header';
import Tabs from '@/components/jin/Tab';
>>>>>>> 0119a583ba909db42517beb8f16a80881130bf80
// import foter from '@/public/foter'
export default {
    components:{
        qHeader,
        Tabs,
    }
}
</script>
<style lang="scss" scoped>
</style>
