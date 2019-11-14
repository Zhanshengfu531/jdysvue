<template>
    <div class="special">
       <div class="title"><img src="img/special/title.png" alt=""></div>
       <div class="my-width">
           <ul class="list">
               <li v-for="(item,index) of img" :key="index" :style="index===mark?'width:468px':'width:224px'">
                   <a href="">
                       <img :src="item[0]" :style="index===mark?'margin-left: 0':'margin-left: -122px'">
                       <div class="info" @mouseenter="enter(index)">
                           <div class="p-title">{{item[1]}}</div>
                           <div class="p-text">{{item[2]}}</div>
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
            img:[
               ["img/special/01.jpg","这里有一个“偷”女孩的小偷","偷走最好的年华，等到老的时候拿出来还给你。"],
               ["img/special/02.jpg","乐取真经","这样的唐僧和悟空你肯定没见过"],
               ["img/special/03.jpg","这个冬天，小王子陪你温暖过节","艺术是能够带给人精神力量的东西，这个冬天，就让我们的小王子陪你过个温暖的节日季。"],
               ["img/special/04.jpg","可米生活","在城市的钢筋丛林里，躁动不安的心灵变的疲惫不堪，白夜童话带你走进轻松惬意的童话世界。"],
            ],
            mark:0
        }
    },
    methods: {
        enter(i){
            this.mark=i
        }
    },
    
}
</script>
<style scoped>
  .special{
      width: 100%;
      height: 580px;
      margin: 0 auto;
      background: url(../../public/img/special/bg.png) no-repeat;
  }
  .title img{
      margin-top: 80px;
  }
  .list{
      width: 1220px;
      margin-left: -20px;
  }
  .list li{
      margin-top:32px;
      width: 224px;
      height: 320px;
      margin-left: 20px;
      overflow: hidden;
      float: left;
      position: relative;
      transition: all 0.5s;
  }
  .list li img{
      
      vertical-align: middle;
      margin-left: -122px;
      transition: all 0.5s;
  }
  .info{
      width: 100%;
      height: 320px;
      position: absolute;
      left: 0;
      top: 0;
      padding: 30px 20px;
      text-align: left;
      background: rgba(0, 0, 0, 0.4)
  }
  .p-title{
      height: 33px;
      color: #fff;
      font-size: 24px;
      font-weight: 700;
      overflow: hidden;
      margin-bottom: 10px;
  }
  .p-text{
      height: 40px;
      font-size:14px;
      color: #fff;
      overflow: hidden;
  }

</style>