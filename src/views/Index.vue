<template>
  <div> 
   <my-header></my-header>
   <my-banner></my-banner> 
   <my-works></my-works>
   <my-special></my-special>
   <my-organization></my-organization>
   <my-artist></my-artist>
   <my-floor class="bg"></my-floor>
   <my-floor></my-floor>
   <my-floor class="bg"></my-floor>
   <my-floor></my-floor>
   <my-footer></my-footer>
  </div>
</template>

<script>
import MyBanner from "../components/Banner"
import MyWorks from "../components/Works"
import MySpecial from "../components/Special"
import MyOrganization from "../components/Organization"
import MyArtist from "../components/Artist"
import MyFloor from "../components/Floor"
export default {
  components:{
    "my-banner":MyBanner,
    "my-works":MyWorks,
    "my-special": MySpecial,
    "my-organization": MyOrganization,
    "my-artist": MyArtist,
    "my-floor": MyFloor,
    },

}
</script>
<style scoped>
.bg{
  background: #f3f4f8
}
</style>
