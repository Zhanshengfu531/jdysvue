<template>
  <div class="my-width">
    <div class="title">
      <img src="img/artist/5a2006b3Nc6e7e591.png" alt />
    </div>
    <div class="wrap">
      <div class="artist-nav">
        <div class="p-btn p-pre" @click="change(1)">
          <i></i>
        </div>
        <div class="nav-wrap">
          <ul :style="`top:${num*72}px`">
            <li v-for="(item,index) of list" :key="index"  @click="mov(index)">
              <a href="javascript:;">
                <div class="nav-show" v-show="-(num)!==index"></div>
                <img :src="`img/artist/${item[0][0]}`" alt />
              </a>
            </li>
            <li v-for="index of 3" :key="index-10"  @click="move(index)">
              <a href="javascript:;">
                <div></div>
                <img :src="`img/artist/${list[index-1][0][0]}`" alt />
              </a>
            </li>
          </ul>
        </div>
        <div class="p-btn p-next" @click="change(-1)">
          <i></i>
        </div>
        <div class="p-num">
          <span>{{-(num)+1}}</span>/
          <span>{{list.length}}</span>
        </div>
      </div>
      <div class="artist-list">
        <div class="artist-item" v-for="(item,index) of list" :key="index" :style="`top:${num*352}px`">
          <div class="artist-box">
            <a href="javascript:;">
              <img :src="`img/artist/${item[0][0]}`">
              <div class="artist-info">
                <div class="p-name">{{item[0][1]}}</div>
                <div class="p-text">
                  <span>{{item[0][2]}}</span>件作品
                  <span class="p-info">{{item[0][3]}}</span>
                </div>
              </div>
            </a>
          </div>
          <ul class="artist-produ">
            <li v-for="(f,i) of item[1]" :key="i">
              <a href="javascript:;">
                <div class="img-warp">
                <img :src="`img/artist/${f[0]}`" alt />
                </div>
                <div class="p-name">{{f[1]}}</div>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      list: [
        [
          ["5a28f541Ndae37c11.jpg", "贾晓鸥", "44", "油画"],
          [
            [
              "1d7d03b8c32c28c7.jpg",
              "现代简约北美式欧式莫奈名人油画《日出·印象》卧室玄关客厅走廊画廊酒吧办公室沙发背景墙装饰画挂画 典雅栗（偏金色） 58×74cm"
            ],
            [
              "5bb085a9N336e0ee1.jpg",
              "墨斗鱼 彭向雨原创艺术品《无题1》客厅玄关卧室餐厅沙发背景墙装饰画 挂画 现代油画 礼物礼品"
            ],
            [
              "1d7d03b8c32c28c7.jpg",
              "现代简约北美式欧式莫奈名人油画《日出·印象》卧室玄关客厅走廊画廊酒吧办公室沙发背景墙装饰画挂画 典雅栗（偏金色） 58×74cm"
            ]
          ]
        ],
        [
          ["5bff8c6dN8b0fca1b.jpg", "黄玉龙", "7", "雕塑"],
          [
            [
              "1d7d03b8c32c28c7.jpg",
              "现代简约北美式欧式莫奈名人油画《日出·印象》卧室玄关客厅走廊画廊酒吧办公室沙发背景墙装饰画挂画 典雅栗（偏金色） 58×74cm"
            ],
            [
              "5bb085a9N336e0ee1.jpg",
              "墨斗鱼 彭向雨原创艺术品《无题1》客厅玄关卧室餐厅沙发背景墙装饰画 挂画 现代油画 礼物礼品"
            ],
            ["5a563e92N7177c8e6.jpg", "马的肖像4"]
          ]
        ],
        [
          ["5b867258Nd37b7a36.jpg", "贾晓鸥", "44", "油画"],
          [
            [
              "1d7d03b8c32c28c7.jpg",
              "现代简约北美式欧式莫奈名人油画《日出·印象》卧室玄关客厅走廊画廊酒吧办公室沙发背景墙装饰画挂画 典雅栗（偏金色） 58×74cm"
            ],
            [
              "5bb085a9N336e0ee1.jpg",
              "墨斗鱼 彭向雨原创艺术品《无题1》客厅玄关卧室餐厅沙发背景墙装饰画 挂画 现代油画 礼物礼品"
            ],
            [
              "1d7d03b8c32c28c7.jpg",
              "现代简约北美式欧式莫奈名人油画《日出·印象》卧室玄关客厅走廊画廊酒吧办公室沙发背景墙装饰画挂画 典雅栗（偏金色） 58×74cm"
            ]
          ]
        ],
        [
          ["5aafdba3N2ef91f03.jpg", "黄玉龙", "7", "雕塑"],
          [
            [
              "1d7d03b8c32c28c7.jpg",
              "现代简约北美式欧式莫奈名人油画《日出·印象》卧室玄关客厅走廊画廊酒吧办公室沙发背景墙装饰画挂画 典雅栗（偏金色） 58×74cm"
            ],
            [
              "5bb085a9N336e0ee1.jpg",
              "墨斗鱼 彭向雨原创艺术品《无题1》客厅玄关卧室餐厅沙发背景墙装饰画 挂画 现代油画 礼物礼品"
            ],
            ["5a563e92N7177c8e6.jpg", "马的肖像4"]
          ]
        ],
        [
          ["425aeba8e266ca36.jpg", "贾晓鸥", "44", "油画"],
          [
            [
              "1d7d03b8c32c28c7.jpg",
              "现代简约北美式欧式莫奈名人油画《日出·印象》卧室玄关客厅走廊画廊酒吧办公室沙发背景墙装饰画挂画 典雅栗（偏金色） 58×74cm"
            ],
            [
              "5bb085a9N336e0ee1.jpg",
              "墨斗鱼 彭向雨原创艺术品《无题1》客厅玄关卧室餐厅沙发背景墙装饰画 挂画 现代油画 礼物礼品"
            ],
            [
              "1d7d03b8c32c28c7.jpg",
              "现代简约北美式欧式莫奈名人油画《日出·印象》卧室玄关客厅走廊画廊酒吧办公室沙发背景墙装饰画挂画 典雅栗（偏金色） 58×74cm"
            ]
          ]
        ],
        [
          ["0a4ef3ced16ad77e.jpg", "黄玉龙", "7", "雕塑"],
          [
            [
              "1d7d03b8c32c28c7.jpg",
              "现代简约北美式欧式莫奈名人油画《日出·印象》卧室玄关客厅走廊画廊酒吧办公室沙发背景墙装饰画挂画 典雅栗（偏金色） 58×74cm"
            ],
            [
              "5bb085a9N336e0ee1.jpg",
              "墨斗鱼 彭向雨原创艺术品《无题1》客厅玄关卧室餐厅沙发背景墙装饰画 挂画 现代油画 礼物礼品"
            ],
            ["5a563e92N7177c8e6.jpg", "马的肖像4"]
          ]
        ]
      ],
      num: 0
    };
  },
  methods: {
    change(i) {
      if (i == 1 && this.num == 0) {
        this.num = -5;
      } else if (i == -1 && this.num == -5) {
        this.num = 0;
      } else {
        this.num += i;
      }
    },
    mov(e){  
       this.num=-(e)
    },
    move(e){
       this.num=-(e-1)
    }
  }
};
</script>
<style scoped>
.my-width {
  height: 630px;
}
.title img {
  margin-top: 80px;
}
.wrap {
  width: 100%;
  height: 352px;
  margin-top: 50px;
  position: relative;
}
.artist-nav {
  width: 70px;
  height: 342px;
  float: left;
}

.p-btn {
  width: 70px;
  height: 26px;
}
.p-btn:hover {
  border: 1px solid #dfdfdf;
}
.p-btn i {
  width: 19px;
  height: 11px;
  background: #ddd;
  display: inline-block;
}
.nav-wrap {
  width: 70px;
  height: 196px;
  overflow: hidden;
  position: relative;
}
.nav-wrap ul {
  position: absolute;
  transition: all 1s;
}
.nav-show{
  width: 70px;
  height: 52px;
  background: rgba(240, 239, 239, 0.5);
  position:absolute;
  top: 0;
  left:0;
}
.nav-show:hover{
  background: rgba(240, 239, 239, 0);
}
.nav-wrap li {
  margin-bottom: 20px;
  position: relative;
}
.nav-wrap img {
  width: 70px;
  height: 52px;
}
.p-pre {
  margin-top: 30px;
  margin-bottom: 12px;
}
.p-pre i {
  background: url(../../public/img/artist/prev.png) no-repeat;
}
.p-next {
  margin-top: 12px;
}
.p-next i {
  background: url(../../public/img/artist/next.png) no-repeat;
}
.p-num {
  font-size: 12px;
  margin-top: 22px;
}
.artist-list {
  width: 1110px;
  height: 352px;
  float: right;
  overflow: hidden;
  position: absolute;
  right: 0;
}
.artist-item {
  width: 1110px;
  height: 352px;
  position: relative;
  transition: all 0.5s;
}
.artist-box {
  width: 468px;
  height: 352px;
  position: relative;
  
  text-align: center;
  overflow: hidden;
  
}
.artist-box img{
  width: 468px;
  height: 352px;
  transition:all 1s 
}
.artist-box img:hover{
  transform: scale(1.1);
}
.artist-produ {
  position: absolute;
  width: 732px;
  height: 270px;
  right: 0;
  top: 41px;
}
.artist-produ li {
  margin-left: 20px;
  width: 224px;
  height: 270px;
  background: #f3f4f8;
  padding: 20px 22px;
  float: left;
}
.img-warp{
  width: 180px;
  height: 180px;
  overflow: hidden;
}
.artist-produ li img {
  width: 180px;
  height: 180px;
  background: #fff;
  transition: all 0.5s
}
.artist-produ li img:hover {
  transform: scale(1.05)
}
.artist-produ .p-name {
  height: 25px;
  margin-top: 22px;
  font-size: 18px;
  color: #282828;
}
.p-name {
  overflow: hidden;
  font-weight: 700;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.artist-info {
  position: absolute;
  left: 20px;
  top: 261px;
  width: 264px;
  height: 25px;
  text-align: left;
  color: #fff;
}
.artist-info .p-name {
  font-size: 24px;
  color: #fff;
  line-height: 33px;
  height: 33px;
}
.p-text {
  font-size: 14px;
  margin-top: 12px;
}
.p-info {
  margin-left: 10px;
  padding-left: 10px;
  border-left: 1px solid #fff;
}
</style>