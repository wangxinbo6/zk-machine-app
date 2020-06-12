<template>
  <div>
    <b-navbar toggleable="lg" type="dark" variant="info">
      <b-navbar-brand href="#">NavBar</b-navbar-brand>
      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
      <b-collapse id="nav-collapse" is-nav right>
        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto" style="font-size:16px">
          <b-navbar-nav>
            <b-nav-item><router-link to="/home">首页</router-link></b-nav-item>
          </b-navbar-nav>
          <b-navbar-nav>
            <b-nav-item><router-link to="/order">我的订单</router-link></b-nav-item>
          </b-navbar-nav>
          <b-nav-item-dropdown right>
            <!-- Using 'button-content' slot -->
            <template v-slot:button-content>
              <em>User</em>
            </template>
            <b-dropdown-item href="#">账户设置</b-dropdown-item>
            <b-dropdown-item href="#">登录</b-dropdown-item>
            <b-dropdown-item href="#">退出</b-dropdown-item>
          </b-nav-item-dropdown>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
export default {
  data(){
    return{

    }
  }
}
</script>

<style lang="scss" scoped>
  .navbar-collapse{
    text-align: left;
  }
</style>