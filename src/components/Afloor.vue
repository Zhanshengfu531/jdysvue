<template>
  <div class="my-width">
    <div class="c-title">
      <img src="img/afloor/f836507210aef5be.jpg">
    </div>
    <div class="c-row">
      <div class="c-list" v-for="(item,index) of list" :key="index" @mouseenter="enter(index)" @mouseleave="leave">
        <a href="">
        <div class="c-img">
          <div class="c-show"></div>
          <img :src="`img/afloor/${item[0]}`" alt="">
        </div>
        <div class="p-info">
          <div class="p-title">{{item[1]}}</div>
          <div class="p-price">¥{{item[2]}}</div>
        </div>
        <div class="c-button" v-show="mack===index">立即购买</div>
        </a>
      </div>
    </div>
  </div>
</template>
<script>
export default {
    data() {
        return {
            list:[
                ["5b14fb1cN30365a38.jpg","稀奇艺术 威士忌酒杯玻璃杯男士洋酒杯子天使浮雕杯搭配精美礼物包装 单只装（男士威士忌）","198.00"],
                ["5b61c69bNf0809bac.jpg","白夜童话系列-晚安兔《贾晓鸥》 可米生活 艺术品摆件创意礼物雕塑客厅装饰家居玄关摆件礼品 写实色 中号","1260.00"],
                ["393ac478158b4d01.jpg","gogoodgoods 构得福禄双全茶盏对杯搭配精美礼物包装 2只装 福禄双全-茶杯套装","398.00"],
                ["5ab226aeN963ecfc9.jpg","白夜童话系列-猫将军《贾晓鸥》可米生活 家居摆件艺术品摆设客厅装饰品礼物雕塑办公室摆件节日礼品礼盒装 写实色 小号","399.00"],
                ["3985c6fbc5187beb.jpg","端木良锦官方旗舰店 樱粉木贴皮迷你口红包 520节日礼品生日礼物创意礼品女包口红包","3680.00"],
                ["bdb0c1e7a9ca1719.jpg","gogoodgoods 构得创意礼品工艺礼品黄铜萌猴子生肖香插 黄铜","980.00"],
                ["98b53b1ecd5892b3.jpg","gogoodgoods 构得“piggy猪”艺术品创意礼物家居摆件装饰品精美礼物包装 仔:5.4*4*3.8cm","280.00"],
                ["99e22b42ae05448e.jpg","gogoodgoods 构得“量子猪”艺术品创意礼物家居摆件装饰品精美礼物包装 粉色-桃花猪","99.00"],
            ],
            mack:null
        }
    },
    methods: {
        enter(i){
          this.mack=i;
        },
        leave(){
            this.mack=null;
        }
    },
};
</script>
<style  scoped>

.c-title {
  width: 100%;
  height: 200px;
}
.c-row {
  width: 100%;
  height: 700px;
}
.c-list {
  width: 25%;
  height: 350px;
  padding: 30px 40px;
  float: left;
  position: relative;
}
.c-list a{
  text-decoration: none;
}
.c-button{
    position: absolute;
    bottom: 0;
    background:rgb(177, 140, 86);
    color: #fff;
    width: 100% ;
    height: 45px;
    left: 0;
    line-height: 45px;
    font-size: 14px;
}
.c-img{
    width: 218px;
    height: 218px;
    overflow: hidden;
    position: relative;
}
.c-show{
    width: 218px;
    height: 218px;
    position:absolute;
    top: 0;
    left:0;
}
.c-show:hover{
    background: rgba(255, 255, 255, 0.2);
}
.c-img img{
    width: 218px;
    height: 218px;
}
.p-info{
    width: 218px;
    height: 70px;
}
.p-title{
    font-size: 14px;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      color: #282828;
}
.p-price{
    color: rgb(177, 140, 86);
    margin-top: 25px;
    margin-right: 5px;
    font-size: 16px;
    font-weight: 700;
}
</style>