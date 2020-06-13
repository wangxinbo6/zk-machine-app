<template>
    <div class="bg">
      <b-container fluid style="padding-top:20px">
        <b-row >
          <b-col cols="12" sm="12" xs="8" md="8" lg="8" xl="8" >
            <b-img :src="meshine.url" style="width:100%; max-height:40vh;margin-bottom:14px" fluid alt="Responsive image"></b-img>
          </b-col>
          <b-col cols="12" sm="12" xs="4" md="4" lg="4" xl="4" style="margin-bottom:14px" >
            <div class="card tl">
              <div class="title">{{meshine.title}}</div>
              <div class="text">{{meshine.text}}</div>
              <div class="money">售价：￥<span>{{meshine.money}}</span></div>
            <div>
              <label for="sb-inline">数量：</label>
              <b-form-spinbutton id="sb-inline" v-model="num" :max="maxnum" inline></b-form-spinbutton>
            </div>
            <div style="font-size:16px;padding:20px 0">
              限购{{maxnum}}台
            </div>
            <div style="font-size:12px;padding:20px 0" class="sumMoney">
              总价：<i>￥{{num*meshine.money}}</i>
            </div>
            </div>
          </b-col>
        </b-row>
      </b-container>
      <div class="ground">
        <div>
          <div class="submit">提交申请</div>
        </div>
      </div>
    </div>
</template>
<script>
export default {
  data(){
    return{
      meshine:{
        url:"https://i01piccdn.sogoucdn.com/41178fba5af00a8f",
        title:"xxxxxxxxxxxxxxxxx",
        text:"xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
        money:3333
      },
      num:1,
      maxnum:20
    }
  }
}
</script>
<style lang="scss" scoped>
  .bg{
    padding-bottom: 64px;
  }
  .card{
    height: 100%;
    padding: 0 14px;
  }
  .title{
    padding: 20px 0;
    font-size: 30px;
    font-weight: bold;
  }
  .text{
    font-size: 16px;
  }
  .money{
    padding: 20px 0;
    font-size: 12px;
    span{
      font-size: 28px;
      color: #FF0036;
      font-weight: bold;
    }
  }
  .ground{
    width: 100vw;
    height: 60px;
    line-height: 60px;
    background: #17a2b8;
    position: fixed;
    bottom: 0;
    &>div{
      position: absolute;
      right: 0;
      top: 0;
    }
    .submit{
      height: 60px;
      display: inline-block;
      color: #E5511D;
      background-color: #fdf0e5!important;
      text-align: center;
      max-width: 180px;
      width: 40vw;
      background-color: #fff;
      &:hover{
        cursor: pointer;
      }
    }
    span{
      display: inline-block;
      width: 40vw;
      max-width: 200px;
      text-align: center;
      background-color: #fff;
    }
    
  }
  .sumMoney{
    i{
      font-size: 28px;
      color: #FF0036;
      font-weight: bold;
    }
  }

</style>