<template>
    <div>
        <b-alert show variant="danger" dismissible>Danger Alert</b-alert>
        <div class="title">登录页</div>
        <div class="main">
            <div style="position: relative;">
                <b-input v-model="mobile" placeholder="请输入手机号" class="mobile"></b-input>
                <p style="position: absolute;top:6px; right:10px;color:blue">
                    <span v-show="!timeShow" @click="start()">获取激活码</span>
                    <i v-if="timeShow">{{time}} S</i>
                </p>
            </div>
            
            <b-input v-model="messageCode" placeholder="请输入短信验证码" class="code"></b-input>
            <b-input v-model="password" type="password" max="16" placeholder="请输入密码 8-16位" class="password"></b-input>
            <b-input v-model="confirmPassword" type="password" placeholder="再次确认密码 8-16位" class="password" style="margin-top:20px"></b-input>
            <b-button variant="primary" style="width:100%; margin-top:20px">提交</b-button>
        </div>
    </div>
</template>

<script>
export default {
  data(){
    return{
      mobile:"",
      messageCode:'',
      password:"",
      confirmPassword:"", //确认密码
      timeShow:false,
      time:60
    }
  },
  methods:{
    start(){//定时器
      this.timeShow = true
      clearInterval(timer)
      
      const timer= setInterval(() => {
        this.time--
        if(this.time == 0){
          this.timeShow = false
          this.time = 60
          clearInterval(timer)
        }
      }, 1000);
      timer
    },
    timeClock(){
      
    }
  }
}
</script>

<style lang="scss" scoped>
  .main{
    margin:0 auto;
    width: 90%;
    max-width: 720px;
  }
  .password , .mobile, .code{
    margin:0 auto;
    max-width: 720px;
  }
  .code{
    margin: 20px 0;
  }
  .title{
    font-size: 30px;
    margin:20vh 0 30px;

  }
</style>