<template>
  <div class="hello" id="hello">
    <div>
        <Navbar></Navbar>
        <!-- <keep-alive>
          <router-view :key="$route.fullPath" v-if="$route.meta.keepAlive"></router-view>
        </keep-alive>
        <router-view v-if="!$route.meta.keepAlive"></router-view> -->
        <router-view></router-view>
    </div>
  </div>
</template>

<script>
import Navbar from "../components/Navbar/Navbar.vue";
//import dash from "./adminTem/Dash.vue"
//import Cookies from 'js-cookie'


export default {
  name: "HelloWorld",
  data() {
    return {
      msg: "hellow xin bo 信息安全双重保障",
      phone: true
    };
  },
  created() {
    // if (this.$store.state.count == true) {
    //   this.phone = true;
    //   console.log("1" + this.phone);
    // } else {
    //   this.phone = false;
    //   console.log("0" + this.phone);
    // }
    // console.log("store" + this.$store.state.count);
    //console.log('是吗'+Cookies.get('phone'));
    //console.log('是吗'+this.store.state.count);
  },
  mounted() {
    // console.log(Cookies.get('name'),Cookies.get('token'),Cookies.get('mobile'),Cookies.get('roles'));
    // console.log(Cookies.get('phone'));
    // 2020.4.15 工作于此，思路在手机端隐藏左侧栏
    // if(Cookies.get('phone'))
  },

  components: {
    //局部注册组件
    Navbar,
    //dash
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
h1,
h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.slidebar {
  position: fixed;
  top: 61px;
  left: 0;
  height: calc(100vh - 61px);
  // min-height: calc(_"(100% - 50px)");
  z-index: 4000;
}
.dash {
  position: absolute;
  left: 12.5%;
  top: 61px;
  padding: 20px;
}
.dashMenuClose {
  left: 0;
  width: 100%;
  transition: 0.3s all;
}
.Navbar {
  position: fixed;
  z-index: 3;
}
.phone {
  left: 0 !important;
}
.menu {
  display: block;
  transition: all 0.3s ease-in;
}
.menuClose {
  display: none !important;
  //left: -14vw;
  transition: all 0.3s ease-in;
}
.phoneTop {
  top: 121px;
}
.el-menu-item i{
  background-color: #fff!important;
}

</style>
