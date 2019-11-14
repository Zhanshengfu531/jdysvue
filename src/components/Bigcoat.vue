<template>
    <div class="my-width">
        <div class="b-coat" v-for="(item,index) of img" :key="index">
            <img :src="`img/coat/${item}`" alt="">
        </div>
        <div class="b-coat">
            <a href="">
                <img :src="`img/coat/${mimg[0]}`" alt="">
            </a>
        </div>
        <div class="b-coat">
            <a href="">
                <img :src="`img/coat/${mimg[1]}`" alt="">
            </a>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            img:["2d215e3aefd6637e.jpg","204e484e81765d7c.jpg","0d104598530bde01.jpg"],
            mimg:["310e7df61c0b713e.jpg","221cf6feb6679f7a.jpg"]
        }
    },
}
</script>
<style scoped>
  .b-coat{
      width: 100%;
  }
  .b-coat img{
      width: 100%;
  }
</style>