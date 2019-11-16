<template>
  <div>
    <div class="r-header">
      <div class="my-width">
        <a href class="logo"></a>
        <span>欢迎注册</span>
        <div class="r-flo">
          已有账号？
          <router-link to="/login">请登录></router-link>
        </div>
      </div>
    </div>
    <div class="my-width">
      <div class="wrap">
        <div class="from-item">
          <label for>用&nbsp;&nbsp;户&nbsp;&nbsp;名</label>
          <input
            type="text"
            placeholder="您的账户名和登录名"
            v-model="uname"
            @focus="uwin"
            @blur="ulost"
            ref="id"
          />
          <b class="b-status" v-show="show"></b>
        </div>
        <div class="input-tip">
          <span :style="ustyle">{{tishi.tishi1}}</span>
        </div>
        <div class="from-item">
          <label for>用户密码</label>
          <input
            type="password"
            placeholder="建议使用两种或两种以上字符组合"
            v-model="upwd"
            @focus="pwin"
            @blur="plost"
          />
          <b class="b-status" v-show="show1"></b>
        </div>
        <div class="input-tip">
          <span :style="pstyle">{{tishi.tishi2}}</span>
        </div>
        <div class="from-item">
          <label for>确认密码</label>
          <input
            type="password"
            placeholder="请再次输入密码"
            v-model="upwd1"
            @focus="tpwin"
            @blur="tplost"
          />
          <b class="b-status" v-show="show2"></b>
        </div>
        <div class="input-tip">
          <span :style="tpstyle">{{tishi.tishi3}}</span>
        </div>
        <div class="from-item">
          <label for>用户手机</label>
          <input type="text" placeholder="请输入手机号" v-model="phone" @focus="phwin" @blur="phlost" />
          <b class="b-status" v-show="show3"></b>
        </div>
        <div class="input-tip">
          <span :style="phstyle">{{tishi.tishi4}}</span>
        </div>
        <button class="btn" @click="register">立即注册</button>
      </div>
    </div>
    <div class="from-foot">
      <div class="links">
        <a href>关于我们</a>|
        <a href>联系我们</a>|
        <a href>人才招聘</a>|
        <a href>商家入驻</a>|
        <a href>广告服务</a>|
        <a href>手机京东</a>|
        <a href>友情链接</a>|
        <a href>销售联盟</a>|
        <a href>京东社区</a>|
        <a href>京东公益</a>|
        <a href>English Site</a>
      </div>
      <div class="copyright">Copyright©2004-2019 京东JD.com 版权所有</div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      ustyle: {
        color: ""
      },
      pstyle: {
        color: ""
      },
      tpstyle: {
        color: ""
      },
      phstyle: {
        color: ""
      },
      show: false,
      show1: false,
      show2: false,
      show3: false,
      uname: "",
      upwd: "",
      upwd1: "",
      phone: "",
      tishi: {
        tishi1: "",
        tishi2: "",
        tishi3: "",
        tishi4: ""
      }
    };
  },
  methods: {
    uwin() {
      if (this.uname == "") {
        this.ustyle.color = "";
        this.tishi.tishi1 =
          "建议使用字母、数字和符号两种及以上的组合，8-20个字符";
      }
    },
    ulost() {
      var ua = /^[a-zA-Z0-9_-]{4,20}$/;
      if (this.uname == "") {
        this.tishi.tishi1 = "";
      } else if (!ua.test(this.uname)) {
        this.ustyle.color = "#f91";
        this.tishi.tishi1 = "长度只能在4-20个字符之间";
      } else {
        this.tishi.tishi1 = "";
        this.show = true;
      }
    },
    pwin() {
      if (this.upwd == "") {
        this.pstyle.color = "";
        this.tishi.tishi2 = "支持英文、数字、“-”、“_”的组合，4-20个字符";
      }
    },
    plost() {
      var pa = /^[a-zA-Z0-9_-]{8,20}$/;
      if (this.upwd == "") {
        this.tishi.tishi2 = "";
      } else if (!pa.test(this.upwd)) {
        this.pstyle.color = "#f91";
        this.tishi.tishi2 = "长度只能在8-20个字符之间";
      } else {
        this.tishi.tishi2 = "";
        this.show1 = true;
      }
    },
    tpwin() {
      if (this.upwd1 == "") {
        this.tpstyle.color = "";
        this.tishi.tishi3 = "请再次输入密码";
      }
    },
    tplost() {
      if (this.upwd1 == "") {
        this.tishi.tishi3 = "";
      }
      if (this.upwd !== this.upwd1) {
        this.tpstyle.color = "#f91";
        this.tishi.tishi3 = "两次密码输入不一致";
      } else if (this.upwd1 !== "") {
        this.tishi.tishi3 = "";
        this.show2 = true;
      }
    },
    phwin() {
      if (this.phone == "") {
        this.phstyle.color = "";
        this.tishi.tishi4 = "手机符号为11位";
      }
    },
    phlost() {
      var ph = /^[1][3,4,5,7,8][0-9]{9}$/;
      if (this.phone == "") {
        this.tishi.tishi4 = "";
      } else if (!ph.test(this.phone)) {
        this.phstyle.color = "#f91";
        this.tishi.tishi4 = "格式不正确";
      } else {
        this.tishi.tishi4 = "";
        this.show3 = true;
      }
    },
    register() {
      if (this.show && this.show1 && this.show2 && this.show3) {
        var url = "reg";
        var obj = { uname: this.uname, upwd: this.upwd, phone: this.phone };
        this.axios.get(url,{params:obj}).then(res=>{
          console.log(res)
          if(res.data.code===-1){
            this.ustyle.color = "#f91";
            this.tishi.tishi1 = res.data.msg;
            this.show = false;
          }else{
             alert("注册成功")
             this.$router.push("/login")
          }
        })
      } else {
        this.$refs.id.focus();
        if (this.uname == "") {
          this.ustyle.color = "#f91";
          this.tishi.tishi1 = "请输入用户名";
        }
      }
    }
  },
  watch: {
    uname() {
      this.show = false;
      this.ustyle.color = "";
      this.tishi.tishi1 =
        "建议使用字母、数字和符号两种及以上的组合，8-20个字符";
    },
    upwd() {
      this.show1 = false;
      this.pstyle.color = "";
      this.tishi.tishi2 = "支持英文、数字、“-”、“_”的组合，8-20个字符";
    },
    phone() {
      this.show3 = false;
      this.phstyle.color = "";
      this.tishi.tishi4 = "手机符号为11位";
    },
    upwd1() {
      this.show2 = false;
    }
  }
};
</script>
<style scoped>
.show {
  color: #f91;
}
.r-header {
  height: 110px;
  box-shadow: 0px 3px 10px #ddd;
}
.logo {
  float: left;
  width: 190px;
  height: 80px;
  background: url(../../public/img/header/logo.png) no-repeat;
  margin-top: 20px;
}
.r-header span {
  float: left;
  margin-top: 44px;
  font-size: 24px;
  color: #333;
}
.r-flo {
  float: right;
  margin-top: 55px;
  font-size: 16px;
  color: #999;
}
.r-flo a {
  color: red;
}
.wrap {
  width: 400px;
  margin: 80px auto 186px;
}
.from-item {
  width: 400px;
  border: 1px solid #ddd;
  height: 52px;
  text-align: left;
  position: relative;
}
.from-item label {
  float: left;
  width: 87px;
  height: 50px;
  line-height: 50px;
  margin-bottom: 0;
  font-size: 14px;
  margin-left: 20px;
}
.from-item input {
  border: none;
  width: 190px;
  height: 46px;
  padding: 16px 0 11px 20px;
  font-size: 14px;
  display: inline-block;
  outline: none;
}
.input-tip {
  color: #c5c5c5;
  height: 32px;
  font-size: 12px;
  padding-top: 5px;
  text-align: left;
}
.btn {
  width: 400px;
  height: 50px;
  background: #e2231a;
  color: #fff;
}
.from-foot {
  width: 1200px;
  margin: 0 auto 30px;
}
.links {
  font-size: 12px;
  color: #999;
  padding: 30px 0 15px 0;
  border-top: 1px solid #999;
}
.links a {
  margin: 10px;
  color: #999;
}
.copyright {
  font-size: 12px;
  color: #999;
}
.b-status {
  width: 19px;
  height: 19px;
  background: url(../../public/img/login/icon.png) no-repeat;
  background-position: 2px -116px;
  display: inline-block;
  position: absolute;
  right: 10px;
  top: 15px;
}
</style>