<template>
    <div class="my-width">
      <div class="title">
          <img src="img/works/title.png" alt="">
      </div>
      <ul class="nav">
          <li v-for="(item,index) of tte" :key="index" :class="{'show':index===mak}" @mouseenter="enter(index)">{{item}}
          <b class="nav-border" v-show="index===mak"></b>
          </li>
          
      </ul>
      <div class="warp">
          <ul v-for="(item,index) of img" :key="index" v-show="mak===index">
              <li v-for="(f,i) of item" :key="i" @mouseenter="enters(i)" @mouseleave="leave">
                  <a href=""><img :src="f[0]" alt="">
                  <div class="hove-warp" v-show="seen===i">
                      <div class="p-title">{{f[1]}}</div>
                      <div class="p-name">{{f[2]}}</div>
                      <div class="p-text">{{f[3]}}</div>
                      <div class="p-text">{{f[4]}}</div>
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
                [["img/works/01.png","现代简约北美式欧式梵高名人油画《红色的葡萄园》卧室玄关客厅走廊画廊酒吧办公室沙发背景墙装饰画挂画 宫廷金 80*65cm"],
                ["img/works/02.jpg","《蒙象册6》陆俨少 雅昌艺品 水墨画国画框画现代装饰画玄关卧室餐厅客厅沙发电视挂画"],["img/works/03.jpg","雅物匠心 边平山《平山画集选—花鸟卷》 《平山画集选—花鸟卷》"],["img/works/04.jpg","白夜童话系列-猫将军 ","贾晓鸥","雕塑摆件","19x13x8cm"],["img/works/05.jpg","《有明》","会飞","版画","13.5×13.5cm"]],
                [["img/works/06.jpg","现代简约新中式古典花卉齐白石国画水墨画《枇杷图》装饰画挂画卧室玄关客厅走廊画廊酒吧办公室沙发背景墙 茶褐色 47×47cm"],["img/works/07.jpg","稀奇艺术招财猪储蓄罐萌猪存钱罐生日礼物创意礼品摆件送儿童 恭喜发财"],["img/works/08.jpg","现代简约北美式欧式莫奈名人油画《喜鹊》沙发背景墙装饰画挂画卧室玄关客厅走廊画廊酒吧办公室 典雅栗（偏金色） 70×50cm"],["img/works/09.jpg","稀奇艺术折叠不伞原创两用晴雨遮阳伞创意礼物 绿伞-兔比比金伞头"],["img/works/10.jpg","可米生活 杨媛媛《末末Alina》孤独的小羊 桌面摆件生日礼物 限量版雕塑 粉色"]]
            ],
            tte:["热门HOT","新品NEW"],
            mak:0,
            seen:-1
            
        }
    },
    methods: {
        enter(i){
            this.mak=i
        },
        enters(e){
            this.seen=e;
        },
        leave(){
            this.seen=-1;
        }
    },
}
</script>
<style scoped>
 .my-width{
     height: 552px;
 }
 .title{
     width: 1200px;
     height: 128px;
 }
 .title img{
     margin-top:80px;
 }
 .nav{
     width: 100%;
     height: 50px;
     margin-top: 30px;
     border-bottom: 1px solid #dfdfdf;
 }
 .nav li{
     position: relative;
     width: 138px;
     height: 50px;
     margin-left: 286px;
     line-height: 50px;
     font-size: 18px;
     float: left;
     z-index: 1;
 }
 .nav-border{
    width: 16px;
    height: 3px;
    background: #282828;
    display: block;
    position: absolute;
    left: 50%;
    bottom: 0;
    margin-left: -8px;
}
 .show{
    border: 1px solid #dfdfdf;
    border-bottom: 1px solid #fff !important;
    font-weight:700;
 }
 .warp{
     width: 100%;
     height: 224px;
     margin-top: 20px;
     position: relative;
 }
 .warp ul{
     width: 1220px;
     height: 224px;
     margin-left: -20px;
     display: flex;
     position: absolute;
 }
 .warp ul li{
     width: 224px;
     height: 224px;
     margin-left: 20px;
     position: relative;
 }
 .warp ul li img{
     width: 224px;
     height: 224px;
 }
 .hove-warp{
     color: #fff;
     width: 224px;
     height: 224px;
     position: absolute;
     left: 0;
     top: 0;
     background:rgba(0, 0, 0, 0.5);
 }

 .p-title{
     display: inline-block;
     width: 198px;
     height: 25px;
     font-size: 18px;
     font-weight: 700;
     margin-top: 53px;
     line-height: 25px;
     overflow: hidden;
     text-overflow: ellipsis;
     white-space: nowrap;
 }
 .p-name{
     font-size: 14px;
     margin-top: 24px;

 }
 .p-text{
     font-size:14px;
     margin-top: 5px;
 }

</style>