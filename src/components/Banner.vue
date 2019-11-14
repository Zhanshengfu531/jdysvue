<template>
  <div class="slide">
    <div class="banbar">
      <div class="banmenu">
        <div class="banmenu-b" v-for="(item,index) of cate" :key="index">
          <a href>{{item[0]}}</a>
          <div class="banmenu-s">
            <a href v-for="(f,i) of item[1]" :key="i">{{f}}</a>
          </div>
        </div>
      </div>
      <div class="slideshow">
        <ul>
          <transition-group tag="ul" name="image">
            <li
              v-for="(item,index) of img"
              :key="index"
              v-show="index===mark"
              @mouseenter="enter(index)"
              @mouseleave="leave(index)"
            >
              <a href="#">
                <img :src="item" />
              </a>
            </li>
          </transition-group>
        </ul>
      </div>
      <div class="bar">
        <span
          v-for="(item,index) of img"
          @mouseenter="enter(index)"
          @mouseleave="leave(index)"
          :key="index"
          :class="{'active':index===mark}"
        >{{index+1}}</span>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      timer: null,
      mark: 0,
      img: [
        "img/banner/01.jpg",
        "img/banner/02.jpg",
        "img/banner/03.jpg",
        "img/banner/04.jpg",
        "img/banner/05.jpg"
      ],
      cate: [
        ["收藏艺术", ["油画", "版画", "水墨", "雕塑"]],
        ["装饰艺术", ["授权复刻", "艺术摆件"]],
        ["生活艺术", ["杯子", "背包", "丝巾雨伞"]],
        ["场景艺术", ["客厅", "卧室", "书房", "餐厅"]],
        ["大师艺术", ["莫奈", "梵高", "吴冠中"]]
      ],
    //   run: () => {
    //     this.timer = setInterval(() => {
    //       this.mark++;
    //       if (this.mark === 5) {
    //         this.mark = 0;
    //       }
    //     }, 2500);
    //   }
   };

  },
  
  methods: {
    autoPlay () {
      this.mark++;
      if (this.mark === 5) {
        this.mark = 0
      }
    },
    play () {
      this.timer = setInterval(this.autoPlay, 2500)
    },
    change(i) {
      this.mark = i;
    },
    enter(i) {
      this.mark = i;
      clearInterval(this.timer);
    },
    leave(i) {
      this.timer = setInterval(this.autoPlay, 2500);
    }
  },
  created() {
    this.play();
  },
};
</script>

<style scoped>
.slide {
  width: 100%;
  height: 420px;
  position: relative;
}
.slideshow {
  width: 1920px;
  height: 420px;
  margin: 0 auto;
  overflow: hidden;
  margin-left: -360px;
}
li {
  position: absolute;
}
img {
  width: 1920px;
  height: 420px;
}
.banbar {
  position: relative;
  width: 1200px;
  height: 420px;
  margin: 0 auto;
  text-align: center;
}
.bar {
  width: 115px;
  height: 17px;
  position: absolute;
  bottom: 20px;
  right: 0;
}
.bar span {
  width: 17px;
  height: 17px;
  margin-right: 6px;
  background: #fff;
  display: inline-block;
  font-size: 12px;
}
.active {
  background: #282828 !important;
  color: #fff;
}
.image-enter-active {
  opacity: 1 !important;
  transition: all 1s ease;
}
.image-leave-active {
  opacity: 0 !important;
  transition: all 1s ease;
}
.image-enter {
  opacity: 0 !important;
}
.image-leave {
  opacity: 1 !important;
}
.banmenu {
  position: absolute;
  left: 0;
  top: 0;
  width: 224px;
  height: 420px;
  background: rgba(0, 0, 0, 0.5);
  z-index: 1;
}
.banmenu-b {
  width: 224px;
  height: 50px;
  text-align: left;
  margin-top: 28px;
  padding-left: 20px;
}
.banmenu-b a {
  color: #fff;
  font-size: 16px;
  font-weight: 700;
}
.banmenu-s a {
  font-size: 14px;
  margin-right: 20px;
  font-weight: 500;
}
</style>