<template>
  <div>
    <div class="title">基本信息</div>
    <div style="margin-top:20px">
      <b-container fluid>
        <b-row style="margin-bottom:16px">
          <b-col cols="3" sm="3" xs="3" md="3" lg="3" xl="5" style="line-height: 40px;text-align:right">
            <span>姓名</span> 
          </b-col>
          <b-col cols="9" sm="8" xs="8" md="6" lg="3" xl="2">
            <b-form-input v-model="name" readonly> </b-form-input>
          </b-col>
        </b-row>
        <b-row style="margin-bottom:16px"> 
          <b-col cols="3" sm="3" xs="3" md="3" lg="3" xl="5" style="line-height: 40px;text-align:right">
            性别 
          </b-col>
          <b-col cols="9" sm="8" xs="8" md="6" lg="3" xl="2" >
            <b-form-input v-model="sex" readonly> </b-form-input>
          </b-col>
        </b-row>
        <b-row style="margin-bottom:16px">
          <b-col cols="3" sm="3" xs="3" md="3" lg="3" xl="5" style="line-height: 40px;text-align:right">
            身份证号
          </b-col>
          <b-col cols="9" sm="8" xs="8" md="6" lg="3" xl="2">
            <b-form-input v-model="cardId" readonly></b-form-input>
          </b-col>
        </b-row>
        <b-row style="margin-bottom:16px">
          <b-col cols="3" sm="3" xs="3" md="3" lg="3" xl="5" style="line-height: 40px;text-align:right">
            所在城市
          </b-col>
          <b-col cols="9" sm="8" xs="8" md="6" lg="3" xl="2">
            <b-form-input v-model="city" readonly></b-form-input>
          </b-col>
        </b-row>
        <b-row style="margin-bottom:16px">
          <b-col cols="3" sm="3" xs="3" md="3" lg="3" xl="5" style="line-height: 40px;text-align:right">
            联系电话
          </b-col>
          <b-col cols="9" sm="8" xs="8" md="6" lg="3" xl="2">
            <b-form-input v-model="mobile" readonly></b-form-input>
          </b-col>
        </b-row>
      </b-container>
    </div>
  </div>
</template>
<script>
export default {
  data(){
    return{
      name:"啊啊啊",
      sex:"男",
      cardId:"123123123",
      city:"大连市",
      mobile:"139xxxxxxxxx"
    }
  },
 
}
</script>

<style lang="scss" scoped>
  .title{
    margin: 10vh 0 30px;
    font-size: 30px;
  }
  .custom-control{
    display: inline-block;
    margin-right: 8px;
  }
</style>