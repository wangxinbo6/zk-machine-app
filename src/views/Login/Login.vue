<template>
    <div>
        <b-alert show variant="danger" dismissible>Danger Alert</b-alert>
        <div class="title">登录页</div>
        <div class="main">
            <b-input v-model="mobile" placeholder="请输入手机号" class="mobile"></b-input>
            <b-input v-model="password" type="password" placeholder="请输入密码" class="password"></b-input>
            <b-button variant="primary" style="width:100%;">登录</b-button>
            <div style="padding:10px 16px; font-size:14px">
              <p class="fl">
                <router-link to="/resetpassword">
                  忘记密码
                </router-link>
              </p>
              <p class="fr">
                <router-link to="/register">
                  新用户注册
                </router-link>
              </p>
              
            </div>
        </div>
    </div>
</template>

<script>
export default {
  data(){
    return{
      mobile:"",
      password:""
    }
  },
  methods:{

  }
}
</script>

<style lang="scss" scoped>
  .main{
    margin:0 auto;
    width: 90%;
    max-width: 720px;
  }
  .password , .mobile{
    margin:0 auto;
    max-width: 720px;
  }
  .password{
    margin: 20px 0;
  }
  .title{
    font-size: 30px;
    margin:20vh 0 30px;
  }
</style>