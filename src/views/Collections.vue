<template>
    <div>
       <my-header></my-header>
       <my-cbanner></my-cbanner>
       <my-cfloor></my-cfloor>
       <my-cfloor></my-cfloor>
       <my-cfloor></my-cfloor>
       <my-cfloor></my-cfloor>
       <my-cfloor></my-cfloor>
       <div class="my-height"></div>
       <my-footer></my-footer>
    </div>
</template>
<script>
import MyCbanner from "../components/Cbanner"
import MyCfloor from "../components/Cfloor"

export default {
    components:{
    "my-cfloor":MyCfloor,
    "my-cbanner":MyCbanner,
    },
}
</script>
<style scoped>
 .my-height{
     width:1200px;
     height:100px;
 }
</style>
