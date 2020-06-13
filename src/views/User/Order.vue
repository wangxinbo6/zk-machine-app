<template>
    <div class="bg">
      <div class="title">我的订单</div>
      <div>
        <b-container fluid >
          <b-row v-for="(item,index) in orderList" :key="index" style="pading:30px;margin-top:20px;line-height: 80px; border:1px solid #999;background:#fff" class="brow">
            <b-col cols="12" sm="12" xs="12" md="12" lg="12" xl="3">
              <b-img src="https://picsum.photos/1024/400/?image=41" class="img" fluid alt="Responsive image"></b-img>
            </b-col>
            <b-col cols="12" sm="12" xs="12" md="12" lg="12" xl="3"><p class="name">{{item.name}}</p></b-col>
            <b-col cols="12" sm="12" xs="6" md="6" lg="6" xl="2"><p class="num">数量：{{item.num}}</p></b-col>
            <b-col cols="12" sm="12" xs="6" md="6" lg="6" xl="2"><p class="sum">总价：{{item.sum}}</p></b-col>
            <b-col cols="12" sm="12" xs="12" md="12" lg="12" xl="2"><p class="state">状态：{{item.state}}</p></b-col>
          </b-row>
        </b-container>
      </div>
    </div>
</template>

<script>
export default {
  data(){
    return{
      orderList:[
        {
          url:"https://picsum.photos/1024/400/?image=41",
          name:"第六代xx家庭健康药箱",
          num:"24",
          sum:"2400",
          state:"已审核"
        },{
          url:"https://picsum.photos/1024/400/?image=41",
          name:"冬瓜箱",
          num:"21",
          sum:"200",
          state:"已完成"
        }
      ]
    }
  }
}
</script>
<style lang="scss" scoped>
  .bg{
    background-color: #EEF1F8;
    min-height: 100vh;
  }
  .img{
    width: 200px;
    height: 80px;
  }
  @media (max-width: 1200px) { 
    .img{
      width: 100vw!important;
      height: auto!important;
    }
    .brow{
      line-height: 30px!important;
      padding: 10px;
      P{
        padding: 6px 20px;
        border-bottom: 1px solid #fcfcfc;
      }
    }
  }
</style>