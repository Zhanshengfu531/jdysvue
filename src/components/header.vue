<template>
  <div>
    <div class="header">
      <ul class="fl">
        <li>
          <span class="sy"></span>
          <a href="javascript:;">东京首页</a>
        </li>
        <li>
          <span class="dz"></span>
          <a href="javascript:;">福建</a>
        </li>
      </ul>
      <ul class="fr">
        <li>
          <a href="javascript:;">您好,请登录</a>
        </li>
        <li>
          <a href="javascript:;">免费注册</a>
        </li>
        <li class="spacer"></li>
        <li>
          <a href="javascript:;">我的订单</a>
        </li>
        <li class="spacer"></li>
        <li @mouseenter="enter" @mouseleave="leave" class="show">
          <a href="javascript:;">我的京东</a>
          <span></span>
          <div class="myjd" v-show="seen">
            <div class="myjd-a" v-for="(item,index) of myjd" :key="index">
              <div v-for="(f,i) of item" :key="i">
                <a href>{{f}}</a>
              </div>
            </div>
          </div>
        </li>
        <li class="spacer"></li>
        <li>
          <a href="javascript:;">京东会员</a>
        </li>
        <li class="spacer"></li>
        <li>
          <a href="javascript:;">企业采购</a>
          <span></span>
        </li>
        <li class="spacer"></li>
        <li>
          <a href="javascript:;">客户服务</a>
          <span></span>
        </li>
        <li class="spacer"></li>
        <li>
          <a href="javascript:;">网站导航</a>
          <span></span>
        </li>
        <li class="spacer"></li>
        <li>
          <a href="javascript:;">手机京东</a>
        </li>
      </ul>
    </div>
    <div class="nav">
      <a href="javascript:;" class="logo"></a>
      <ul >
        <li :data-i="1" @mouseenter="enters" @mouseleave="leaves">
           <router-link to="/index">首页</router-link>
          <b class="nav-borders" v-show="mack===1"></b>
        </li>
        <li :data-i="2" @mouseenter="enters" @mouseleave="leaves">
           <router-link to="/collections">艺藏</router-link>
          <b class="nav-borders" v-show="mack===2"></b>
        </li>
        <li :data-i="3" @mouseenter="enters" @mouseleave="leaves">
           <router-link to="/add">艺+</router-link>
          <b class="nav-borders" v-show="mack===3"></b>
        </li>
        <li :data-i="4" @mouseenter="enters" @mouseleave="leaves">
           <router-link to="/fun">艺趣</router-link>
          <b class="nav-borders" v-show="mack===4"></b>
        </li>
        <li :data-i="5" @mouseenter="enters" @mouseleave="leaves">
           <router-link to="/coat">艺咖</router-link>
          <b class="nav-borders" v-show="mack===5"></b>
        </li>
      </ul>
      <div class="put">
        <input type="text" placeholder="艺术品" />
        <div class="input-border" ></div>
        <a href>
          <span></span>
        </a>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      myjd: [
        ["待处理订单", "返修退换货", "降价商品"],
        ["消息", "我的问答", "我的关注"],
        ["我的京豆", "我的白条"],
        ["我的优惠券", "我的理财"]
      ],
      seen: false,
      mack:null
    }
  },
  methods: {
    enter() {
      this.seen = true;
    },
    leave() {
      this.seen = false;
    },
    enters(e) {
        var i=parseInt(e.target.dataset.i)
        this.mack=i
    },
    leaves(){
      this.mack=null;
    }
  }
};
</script>
<style>
@import url("../assets/css/header.css");
</style>