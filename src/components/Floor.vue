<template>
    <div>
        <div class="my-width">
            <div class="mt">
               <div class="floor-title"><img :src="`img/floor/${rlist[0]}`" alt=""></div>
            </div>
            <div class="floor-content">
                <div class="floor-banner">
                  <a href="">
                      <div class="img-wrap">
                          <img :src="`img/floor/${rlist[1]}`" alt="">
                      </div>
                      <div class="banner-info">
                          <div class="p-title">{{rlist[2]}}</div>
                          <div class="p-text">{{rlist[3]}}</div>
                          <div class="p-arrow"></div>
                      </div>
                  </a>
                </div>
                <div class="floor-product" v-for="(item,index) of llist" :key="index"> 
                  <a href="">
                    <div class="img-wrap">
                        <img :src="`img/floor/${item[0]}`" alt="">
                    </div>
                    <div class="p-info">
                        <div class="p-name">{{item[1]}}</div>
                        <div class="p-price">¥{{item[2]}}</div>
                        <div class="p-arrow"></div>
                    </div>  
                  </a>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
           rlist:["5a200775N075b2263.png","5a30df0cN87617328.png","好色之道","调性的最佳养成方式"],
           llist:[
               ["1d7d03b8c32c28c7.jpg","现代简约北美式欧式莫奈名人油画《日出·印象》卧室玄关客厅走廊画廊酒吧办公室沙发背景墙装饰画挂画 典雅栗（偏金色） 58×74cm","1100.00"],
               ["1d7d03b8c32c28c7.jpg","现代简约北美式欧式莫奈名人油画《日出·印象》卧室玄关客厅走廊画廊酒吧办公室沙发背景墙装饰画挂画 典雅栗（偏金色） 58×74cm","1100.00"],
               ["1d7d03b8c32c28c7.jpg","现代简约北美式欧式莫奈名人油画《日出·印象》卧室玄关客厅走廊画廊酒吧办公室沙发背景墙装饰画挂画 典雅栗（偏金色） 58×74cm","1100.00"]
               ]   
        }
    },
}
</script>
<style scoped>
  .my-width{
      height: 530px;
  }
  .mt{
      height: 119px;
      width: 100%;

  }
  .floor-title{
      width: 221px;
      height: 27px;
      margin-top: 64px;
      float: left;
  }
  .floor-content{
      width: 100%;
      height: 312px;
     
  }
  .floor-banner{
      width: 468px;
      height: 312px;
      
      float: left;
      position: relative;
  }
  .floor-product{
      position: relative;
      width:224px;
      height: 312px;
      box-shadow: 0 1px 4px 0 rgba(0,0,0,.2);
      float: left;
      margin-left: 20px;
  }
  .floor-product a{
     text-decoration: none;
  }
  .img-wrap{
      width: 100%;
      height:224px;
      overflow: hidden;
  }
  .img-wrap img{
      width: 100%;
      height:100%;
      transition: all 1s;
  }
  .banner-info{
      padding: 0 20px;
      width: 428px;
      height: 138px;
      position: absolute;
      bottom: 0;
      left: 20px;
      background: #fff;
      text-align: left;
      box-shadow: 0 1px 4px 0 rgba(0,0,0,.2);
      
  }
  .p-info{
      width: 100%;
      height: 88px;
      padding: 0 20px;
      text-align: left;
      position: relative;
      overflow: hidden;
  }
  .p-title{
      width: 360px;
      height: 33px;
      line-height: 33px;
      font-size: 24px;
      font-weight: 700;
      margin-top: 25px;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      color: #282828;
  }
  .p-name{
      font-size: 18px;
      font-weight: 700;
      margin-top: 18px;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      color: #282828;
  }
  .p-text{
      height: 40px;
      line-height: 20px;
      font-size: 14px;
      color: #868686;
      margin-top: 22px;   
  }
  .p-price{
      font-size: 14px;
      color: #ad8954;
      margin-top: 7px;   
  }
  .p-arrow{
    position: absolute;
    width: 8px;
    height: 8px;
    top: 4px;
    right: 4px;
    background: url(../../public/img/floor/black-arrow.png)
  }
  .floor-banner:hover img{
      transform: scale(1.05)
  }
  .floor-banner:hover .banner-info{
      background: #282828;
  }
  .floor-banner:hover .p-arrow{
     background: url(../../public/img/floor/w-arrow.png)
  }
  .floor-banner:hover .p-title,.floor-banner:hover .p-text{
      color: #fff;
  }

  .floor-product:hover img{
      transform: scale(1.05)
  }
  .floor-product:hover .p-info{
      background: #282828;
  }
  .floor-product:hover .p-arrow{
     background: url(../../public/img/floor/w-arrow.png)
  }
  .floor-product:hover .p-name,.floor-product:hover .p-price{
      color: #fff;
  }

</style>