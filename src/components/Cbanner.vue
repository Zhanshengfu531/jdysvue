<template>
  <div class="my-width">
    <div class="slideshow">
      <ul>
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
      </ul>
      <div class="bar">
        <span
          v-for="(item,index) of img"
          @mouseenter="enter(index)"
          @mouseleave="leave(index)"
          :key="index"
          :class="{'active':index===mark}"
        >{{index+1}}</span>
      </div>
        <div class="lb" @click="add"></div>
      <div class="rb" @click="reduce"></div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      timer: null,
      mark: 0,
      img: ["img/cbanner/01.jpg", "img/cbanner/02.jpg", "img/cbanner/03.jpg"]
    };
  },
  methods: {
    autoPlay() {
      this.mark++;
      if (this.mark === 3) {
        this.mark = 0;
      }
    },
    play() {
      this.timer = setInterval(this.autoPlay, 2500);
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
    },
    add(){
      if (this.mark === 0) {
        this.mark = 2; 
      }else{
        this.mark--;
      }
    },
    reduce(){
       this.mark++;
      if (this.mark === 3) {
        this.mark = 0; 
      }
    }
  },
  created() {
    this.play();
  }
};
</script>
<style scoped>
.my-width {
  height: 420px;
}
.slideshow {
  width: 1200px;
  height: 420px;
  overflow: hidden;
  position: relative;
}

img {
  width: 100%;
  height: 100%;
}

.bar {
  width: 100%;
  height: 17px;
  position: absolute;
  bottom: 20px;
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
.lb{
    cursor: pointer;
  position: absolute;
  font-size: 20px;
    color: #fff;
    width: 24px;
    height: 44px;
    line-height: 44px;
    top: 50%;
    margin-top: -22px;
    text-align: center;
    background: rgba(0, 0, 0, 0.3)
}
.rb{
    cursor: pointer;
  position: absolute;
  font-size: 20px;
    color: #fff;
    width: 24px;
    height: 44px;
    line-height: 44px;
    top: 50%;
    right: 0;
    margin-top: -22px;
    text-align: center;
    background: rgba(0, 0, 0, 0.3)
}
.lb::after{
   content: '<';
   
}
.rb::after{
   content: '>';
   
}
</style>