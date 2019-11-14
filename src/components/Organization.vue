<template>
    <div class="my-width">
      <div class="title"><img src="img/organization/title.png" alt=""></div>
      <div>
          <ul class="list">
              <li v-for="(item,index) of img" :key="index" @mouseenter="enter(index)" @mouseleave="leave">
                  <a href=""><img :src="item" alt="">
                  <div class="info" v-show="index===mark">
                      <div>MORE
                          <span>></span>
                       </div>
                  </div>
                  </a>
              </li>
          </ul>
      </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
           img:["img/organization/01.jpg","img/organization/02.jpg","img/organization/03.jpg","img/organization/04.jpg","img/organization/05.jpg",],
           mark:-1
        }
    },
    methods: {
        enter(i){
            this.mark=i
        },
        leave(){
            this.mark=-1;
        }
    },
}
</script>
<style scoped>
  .my-width{
      height: 271px;
  }
  .title img{
      margin-top: 80px;
  }
  .list{
      width:1220px;
      height: 100px;
      margin: 43px 0 0 -20px;
     overflow: hidden;
  }
  .list li{
      width:222px;
      height:98px;
      border:1px solid #dfdfdf;
      margin-left: 20px;
       float: left;
       box-sizing: content-box;
       position: relative;
  }
  .list li img{
      width:222px;
      height:98px;
  }
  .info{
    width:222px;
    height:98px; 
    position: absolute;
    background: rgba(0, 0, 0, 0.7);
     left: 0;
     top: 0;
     font-size: 18px;
     line-height: 100px;
     color: #fff;
  }
  .info span{
   font-weight: 700;
  }

</style>