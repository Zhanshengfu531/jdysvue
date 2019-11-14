<template>
  <div class="my-width">
    <div class="c-title">
      <img src="img/cfloor/ae1e02b487683016.png">
    </div>
    <div class="c-row">
      <div class="c-list" v-for="(item,index) of list" :key="index" @mouseenter="enter(index)" @mouseleave="leave">
        <a href="">
        <div class="c-img">
          <div class="c-show"></div>
          <img :src="`img/cfloor/${item[0]}`" alt="">
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
                ["huaping.jpg","观瓷艺术 李雨花《别处》系列 陶瓷骨瓷茶具套装 家用陶瓷茶壶茶杯茶叶罐花瓶陶瓷花瓶摆件 办公室礼品 花器","685.00"],
                ["qiqiugou.jpg","杰夫昆斯 艺术品 气球狗  波普艺术  品红色 授权限量发行Balloon Dog 雕塑 摆件 礼品","96672.00"],
                ["youhua.jpg","艾米李畫廊 马丹限量签名版画《暖丘》系列 客厅装饰画壁画挂画简约现代油画 随风1 限量199版 装裱尺寸高75×宽83cm","2499.00"],
                ["13dc5a4e396ca647.jpg","gogoodgoods RAN.Life构得然艺术品雕塑客厅装饰品树脂摆件创意摆设礼品礼盒 黑天使","6980.00"],
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
.my-width {
  height: 420px;
}
.c-title {
  width: 100%;
  height: 70px;
  margin-top: 60px;
}
.c-row {
  width: 100%;
  height: 350px;
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
    text-align: left;
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