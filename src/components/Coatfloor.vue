<template>
    <div class="my-width">
       <div class="img-name"><a href=""><img :src="`img/coat/${coatlist}`" alt=""></a></div>
       <div class="c-row">
           <div class="c-list" v-for="(item,index) of list" :key="index">
               <a href="">
               <div class="c-img">
                   <img :src="`img/coat/${item.img}`" alt="">
                   <div class="c-show"></div>
               </div>
               <div class="c-info">
                   <div class="p-title">{{item.title}}</div>
                   <div class="p-price">¥{{item.price}}</div>
               </div>
               </a>
           </div>
       </div> 
    </div>
</template>
<script>
export default {
    data() {
        return {
            coatlist:"0e11bf2eb1d18a71.jpg",
            list:[
                {img:"5a25f819Ne0201d2b.jpg",title:"Hi艺术 李伟&知音《当阳光洒进每一个角落》PU/铸铜 限量版签名雕塑 PU藏蓝色 16×14×35cm",price:2600.00},
                {img:"5a25483fNc8add4c8.jpg",title:"Hi艺术 李伟&刘知音《王子》PU/铸铜 限量版签名雕塑 PU黑色 16×14×35cm",price:3000.00},
                {img:"5a260000N69f6d8fa.jpg",title:"Hi艺术 李伟&刘知音《小星星》PU/铸铜 限量版签名雕塑 PU浅蓝色 16×14×35cm",price:3000.00},
                {img:"5a254833N226e8277.jpg",title:"Hi艺术 李伟&刘知音《王子》PU/铸铜 限量版签名雕塑 PU白色 16×14×35cm",price:3000.00},
            ]
        }
    },
}
</script>
<style scoped>
  .my-width{
      height: 270px;
      margin-top: 20px;
  }
  .img-name{
      width: 230px;
      height: 270px;
      overflow: hidden;
      margin-right: 10px;
      float: left;
  }
  .img-name img{
      width: 230px;
      height: 270px;
  }
  .c-row{
      width: 960px;
      height: 257px;
      float: left;
  }
  .c-list{
      width: 230px;
      height: 257px;
      padding: 20px 35px;
      margin-left: 10px;
      overflow: hidden;
      float: left;
  }
  .c-list a{
      text-decoration: none;
  }
  .c-img{
      width: 160px;
      height: 160px;
      overflow: hidden;
      position: relative;
  }
  .c-show{
      width: 160px;
      height: 160px;
      position: absolute;
      left: 0;
      top: 0;
  }
  .c-show:hover{
      background: rgba(255, 255, 255, 0.2)
  }
  .c-img img{
      width: 160px;
      height: 160px;
  }
  .c-info{
    color: rgb(40, 40, 40);
    margin-top: 10px;
  }
  .p-title{
      font-size: 14px;
      
      text-overflow: ellipsis;
      white-space: nowrap;
      overflow: hidden;
  }
  .p-price{
    margin-top: 5px;
    margin-right: 5px;
    font-size: 16px;
    font-weight: 700;
  }
</style>