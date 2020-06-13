<template>
  <div>
    <b-alert show variant="danger" dismissible>Danger Alert</b-alert>
    <div class="title">手机号变更</div>
    <div class="main">
      <b-input v-model="oldMobile" placeholder="原手机号" class="oldMobile" readonly></b-input>
      <b-input v-model="newMobile" placeholder="新手机号" class="newMobile" style="margin:20px 0"></b-input>
      <div style="position: relative;">
        <b-input v-model="messageCode" placeholder="请输入验证码" class="code"></b-input>
        <p style="position: absolute;top:6px; right:10px;color:blue">
          <span v-show="!timeShow" @click="start()">获取激活码</span>
          <i v-if="timeShow">{{time}} S</i>
        </p>
      </div>
      <b-button variant="primary" style="width:100%; margin-top:20px">立即修改</b-button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      oldMobile:"111111111",
      newMobile:"",
      messageCode: "",
      timeShow: false,
      time: 60
    };
  },
  methods: {
    start() {
      //定时器
      this.timeShow = true;
      clearInterval(timer);

      const timer = setInterval(() => {
        this.time--;
        if (this.time == 0) {
          this.timeShow = false;
          this.time = 60;
          clearInterval(timer);
        }
      }, 1000);
      timer;
    },
    timeClock() {}
  }
};
</script>

<style lang="scss" scoped>
.main {
  margin: 0 auto;
  width: 90%;
  max-width: 720px;
}
.oldMobile,
.newMobile,
.code {
  margin: 0 auto;
  max-width: 720px;
}
.code {
  margin: 20px 0;
}
.title {
  font-size: 30px;
  margin: 20vh 0 30px;
}
</style>