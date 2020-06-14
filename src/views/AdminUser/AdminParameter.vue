<template>
  <div>
    <b-container>
      <b-row class="my-1 mt-5">
        <b-col cols="12" sm="12" xs="3" md="3" lg="3" xl="2"  style="line-height:38px">
          <label for="input-default"> 账号最多下单数:</label>
        </b-col>
        <b-col cols="12" sm="12" xs="4" md="4" lg="4" xl="4">
          <b-form-input id="input-default" v-model="maxFrequency" placeholder="请输入最多下单数"></b-form-input>
        </b-col>
      </b-row>
    </b-container>
    <b-container>
      <b-row class="my-1 mt-5">
        <b-col cols="12" sm="12" xs="3" md="3" lg="3" xl="2" style="line-height:38px">
          <label for="input-default"> 最多购买机器数量:</label>
        </b-col>
        <b-col cols="12" sm="12" xs="4" md="4" lg="4" xl="4">
          <b-form-input id="input-default" v-model="maxMachines" placeholder="请输入最多购买机器数量"></b-form-input>
        </b-col>
      </b-row>
      <b-row>
        <b-col cols="12" sm="12" xs="3" md="3" lg="3" xl="2" style="line-height:38px">
          
        </b-col>
        <b-col cols="12" sm="12" xs="4" md="4" lg="4" xl="4">
          <b-button class="mt-5 tc" style="width:100%" variant="primary">确定</b-button>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
export default {
  data(){
    return{
      maxFrequency:null,
      maxMachines:null
    }
  }
}
</script>