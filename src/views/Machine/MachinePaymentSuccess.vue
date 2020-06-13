<template>
    <div class="bg">
      <b-container fluid style="padding-top:20px">
        <b-row >
          <b-col cols="12" sm="12" xs="8" md="8" lg="8" xl="8" >
            <b-img :src="meshineOrder.url" style="width:100%; max-height:40vh;margin-bottom:14px" fluid alt="Responsive image"></b-img>
          </b-col>
          <b-col cols="12" sm="12" xs="4" md="4" lg="4" xl="4" style="margin-bottom:14px" >
            <div class="card tl">
              <div class="title">{{meshineOrder.title}}</div>
              <div class="text">{{meshineOrder.text}}</div>
              <div class="money">单价：￥<span>{{meshineOrder.money}}</span></div>
            <div>
              <label for="sb-inline">数量：{{meshineOrder.num}}</label>
            </div>
            <div style="font-size:12px;padding:20px 0" class="sumMoney">
              总价：￥<i>{{meshineOrder.num*meshineOrder.money}}</i>
            </div>
            </div>
          </b-col>
          <b-col cols="12" sm="12" xs="12" md="12" lg="12" xl="12" class="tl" style="font-size:1rem">
            <p style="margin-bottom:10px">合同编号：{{meshineOrder.No}}</p>
            <p style="color:rgb(255, 45, 84)">温馨提示：请联系您的商务人员提供合同编号签订正式合同。</p>
          </b-col>
        </b-row>
      </b-container>
     
    </div>
</template>
<script>
export default {
  data(){
    return{
      meshineOrder:{
        url:"https://i01piccdn.sogoucdn.com/41178fba5af00a8f",
        title:"xxxxxxxxxxxxxxxxx",
        text:"xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
        money:3333,
        num:1,
        No:"XYY2006110279"
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
  
  .sumMoney{
    i{
      font-size: 28px;
      color: #FF0036;
      font-weight: bold;
    }
  }

</style>