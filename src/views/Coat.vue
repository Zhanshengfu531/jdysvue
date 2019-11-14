<template>
    <div>
      <my-header></my-header>  
      <my-bigcoat></my-bigcoat>
      <my-coatfloor></my-coatfloor>
      <my-coatfloor></my-coatfloor>
      <my-coatfloor></my-coatfloor>
      <my-coatfloor></my-coatfloor>
      <my-coatfloor></my-coatfloor>
      <my-coatfloor></my-coatfloor>
      <div class="my-height"></div>
       <my-footer></my-footer>  
    </div>
</template>
<script>
import MyBigcoat from "../components/Bigcoat"
import MyCoatfloor from "../components/Coatfloor"
export default {
   components:{
    "my-bigcoat":MyBigcoat,
    "my-coatfloor":MyCoatfloor,
    }, 
}
</script>
<style scoped>
  .my-height{
     width:1200px;
     height:100px;
  }
</style>