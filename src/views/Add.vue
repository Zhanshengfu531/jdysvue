<template>
    <div>
       <my-header></my-header>
       <my-cbanner></my-cbanner>
       <my-afloor></my-afloor>
       <my-afloor></my-afloor>
       <my-afloor></my-afloor>
       <my-afloor></my-afloor>
       <div class="my-height"></div>
       <my-footer></my-footer>
    </div>
</template>
<script>

import MyCbanner from "../components/Cbanner"
import MyAfloor from "../components/Afloor"

export default {
    components:{
    "my-cbanner":MyCbanner,
    "my-afloor":MyAfloor,
    },
}
</script>
<style scoped>
   .my-height{
     width:1200px;
     height:100px;
 }
</style>