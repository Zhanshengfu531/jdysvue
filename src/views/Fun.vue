<template>
    <div>
       <my-header></my-header>
       <div class="my-width">
          <my-flist v-for="(item,index) of list" :key="index"></my-flist>
       </div> 
       <div class="my-height"></div>
       <my-footer></my-footer>
    </div>
</template>

<script>
import MyFlist from "../components/flist"
export default {
    data() {
        return {
            list:["","","","","","","","","","","","","","","","","","","","","","","","","","","","","","",]
        }
    },
    components:{
    "my-flist": MyFlist,
    },
}
</script>
<style scoped>
     .my-height{
     width:1200px;
     height:100px;
 }
 .my-width{
    overflow: hidden;
 }
</style>