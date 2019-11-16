<template>
  <div>
    <div class="w">
      <a href class="logo"></a>
      <span class="login-w">欢迎登录</span>
      <div class="r-flo">
        <a href="javascript:;">登录页面调查问卷</a>
      </div>
    </div>
    <div class="hint">
        <p>依据《网络安全法》，为保障您的账户安全和正常使用，请尽快完成手机号验证！ 新版<a href="">《京东隐私政策》</a>已上线，将更有利于保护您的个人隐私。</p>
    </div>
    <div class="login-banner">
        <div class="w">
            <div class="login-from">
               <p>京东不会以任何理由要求您转账汇款，谨防诈骗。</p>
               <div class="login-tab">
                   <div class="login-tab-l">
                       <a href="">扫码登录</a>
                   </div>
                   <div class="login-tab-r">
                       <a href="" style="color:red;font-weight:700">账号登录</a>
                   </div>
               </div>
               <div class="login-box">
                   <div class="msg-error" v-show="msgerr">
                       <b></b>{{error}}
                   </div>
                   <div class="input-n">
                       <label for="loginname"></label>
                       <input type="text" id="loginname" placeholder="邮箱/用户名/登录手机" v-model="uname" >
                       <span class="clear_btn" v-show="show" @click="clear"></span>
                   </div>
                   <div class="input-p">
                       <label for="loginpass"></label>
                       <input type="password" id="loginpass" placeholder="密码" v-model="upwd">
                       <span class="clear_btn" v-show="show1" @click="clear1"></span>
                   </div>
                   <div class="foget"><a href="javascript:;">忘记密码</a></div>
                   <a href="javascript:;" class="login-btn" @click="tologin">登&nbsp;&nbsp;录</a>
               </div>
               <div class="coagent">
                   <ul>
                       <li><a href="javascript:;"><b class="qq-icon"></b><span>QQ</span></a></li>
                       <li><a href="javascript:;"><b class="wx-icon"></b><span>微信</span></a></li>
                       <li class="regist-link"><router-link to="/reg"><b></b>立即注册</router-link></li>
                   </ul>
               </div>
            </div>
        </div>
    </div>
  </div>
</template>
<script>
export default {
    data() {
        return {
            msgerr:false,
            uname:"",
            upwd:"",
            show:false,
            show1:false,
            error:""
        }
    },
    methods: {
        clear(){
           if(this.uname!==""){
               this.uname="";
           }
        },
        clear1(){
           if(this.upwd!==""){
               this.upwd="";
           }
        },
        tologin(){
           if(this.uname==""||this.upwd==""){
              this.msgerr=true;
              this.error="请输入用户名或密码"
          }
          //发送ajax请求
      var url = "login";
      var obj = { uname: this.uname, upwd: this.upwd };
      this.axios.get(url, { params: obj })
        .then(res => {
          console.log(res);
          if(res.data.code===1){
              this.$router.push("/")
          }else{
              this.msgerr=true;
              this.error="用户名或密码错误"
          }
        })
        .catch(err => {
          console.log(err);
        });
        },
    },
    watch:{
        uname(){
            if(this.uname!==""){
                this.show=true
            }else{
              this.show=false
            }
        },
        pwd(){
            if(this.pwd!==""){
                this.show1=true
            }else{
              this.show1=false
            }
        },
        
    }
}
</script>
<style scoped>
  .w{
      width: 1000px;
      margin: 0 auto;
      overflow: hidden;
  }
  .logo {
  float: left;
  width: 190px;
  height: 80px;
  background: url(../../public/img/header/logo.png) no-repeat;
}
.login-w {
  float: left;
  margin-top: 25px;
  font-size: 24px;
  color: #333;
}
.r-flo {
  float: right;
  margin-top: 45px;
  font-size: 14px;
}
.r-flo a {
  color: #999;
}
.hint{
    padding: 10px 0;
    background: #fff8f0;  
}
.hint p{
    font-size: 12px;
    color: #999;  
}
.hint a{
    color: red;  
}
.login-banner{
    width: 100%;
    height: 475px;
    background: #e93854;
}
.login-banner .w{
    background: url(../../public/img/login/5aa68632Nd7790d0c.png) no-repeat;
    height: 475px;
}
.login-from{
    width: 346px;
    background: #fff;
    float: right;
    margin-top: 10px;
}
.login-from p{
    font-size: 12px;
    color: #999;  
    background: #fff8f0;
    padding: 10px;
}
.login-tab{
    height: 54px;
    font-size: 18px;
    border-bottom: 1px solid #eee;
}
.login-tab a{
    color: #999;
    text-decoration: none;
}
.login-tab-l,.login-tab-r{
    float: left;
    width: 173px;
    line-height: 54px;
}
.login-box{
    width: 346px;
    padding: 15px 20px;
    position: relative;
}
.input-n,.input-p{
    width: 304px;
    height:38px;
    border: 1px solid #bdbdbd;
    margin-top: 20px;
    position: relative;
}
.login-box label{
    width: 36px;
    height:36px;
    background: url(../../public/img/login/pwd-icons-new.png) no-repeat;
    float: left;
    border-right: 1px solid #bdbdbd;
}
.input-n label{
    background: url(../../public/img/login/pwd-icons-new.png) no-repeat;
}
.input-p label{
    background: url(../../public/img/login/pwd-icons-new.png) no-repeat;
    background-position: -48px 0px;
}
.login-box input{
    float: left;
    border: none;
    width: 260px;
    height:36px;
    font-size: 14px;
    outline:none;
    padding-left: 10px;
}
.foget,.login-btn{
    margin-top: 20px;
}
.foget a{
    font-size: 12px;
    color: #666;
    float: right;
}
.foget a:hover{
    color: red;
}
.login-box .login-btn{
    width: 100%;
    height: 31px;
    background: #e2231a;
    color: #fff;
    font-size: 20px;
    line-height: 31px;
    display: inline-block;
    text-decoration: none;
}

.coagent{
    line-height: 50px;
    padding: 0 20px;
    border-top: 1px solid #f4f4f4;
    background: #fcfcfc;
    margin-top: 15px;

}
.coagent li{
    float: left;  
    position: relative; 
}
.coagent li:first-child{
    margin-right: 20px; 
}
.coagent .regist-link{
    float: right;
}
.coagent .regist-link a{
    color: red;
}
.coagent .regist-link b{
     width: 19px;
    height: 19px;
    background: url(../../public/img/login/pwd-icons-new.png) no-repeat;
    background-position: -103px -74px;
    display: inline-block; 
}
.coagent li a{
    color: #666;
    padding-left: 20px;
}
.coagent span{
    font-size: 12px;
}
.coagent b{
    margin-right: 5px;
    position:absolute;
    top:16px;
    left: 0;
}
.qq-icon{
    width: 19px;
    height: 19px;
   background: url(../../public/img/login/QQ-weixin.png) no-repeat;
   display: inline-block;  
}
.wx-icon{
    width: 19px;
    height: 19px;
   background: url(../../public/img/login/QQ-weixin.png) no-repeat;
   background-position: -19px 0px;
   display: inline-block;  
}
.login-box .clear_btn{
   width: 19px;
    height: 19px;
   background: url(../../public/img/login/pwd-icons-new.png) no-repeat;
   background-position: -104px 0px; 
   display: inline-block; 
   position: absolute;
   right: 5px;
   top:12px;
}
.msg-error{
    width: 304px;
    height: 23px;
    font-size: 12px;
    color: #e4393c;
    background: #ffebeb;
    border: 1px solid #faccc6;
    line-height: 23px;
    position: relative;
    text-align: left;
    padding-left: 35px;
    position: absolute;
    top: 6px;
}
.msg-error b{
    width: 19px;
    height: 19px;
    background: url(../../public/img/login/pwd-icons-new.png) no-repeat;
    background-position: -103px -47px;
    display: inline-block; 
    position: absolute;
    left: 10px;
}
</style>