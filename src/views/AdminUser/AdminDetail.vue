<template>
  <div>
    <div class="list">
      <b-container  style="padding-top:20px;font-size:16px">
        <b-row>
          <b-col cols="12" sm="12" xs="12" md="12" lg="12" xl="3">
            <b-img :src="machine.url" style="height:100px;width:200px" class="img" fluid alt="Responsive image"></b-img>
          </b-col>
          <b-col cols="12" sm="12" xs="12" md="12" lg="12" xl="3"><p class="name">{{machine.name}}</p></b-col>
          <b-col cols="12" sm="12" xs="6" md="6" lg="6" xl="2"><p class="num">数量：{{machine.num}}</p></b-col>
          <b-col cols="12" sm="12" xs="6" md="6" lg="6" xl="4"><p class="sum tr">总价：￥{{machine.sum}}</p></b-col>
          <b-col cols="12" sm="12" xs="12" md="12" lg="12" xl="12" class="tr" >订单号：{{machine.No}}</b-col>
          <b-col cols="12" sm="12" xs="12" md="12" lg="12" xl="12" class="tr mt-2" >商务人员：{{machine.businessName}}</b-col>
          <b-col cols="12" sm="12" xs="12" md="12" lg="12" xl="12" class="tr mt-2" >  客户信息：{{machine.userName}} <a href="#">点击查看</a></b-col>
        </b-row>
      </b-container>
    </div>
    <b-container>
    <div class="screenshotTitle">
      
      <p class="fl">付款截图</p>
      <p class="clear"></p>
      
    </div>
    </b-container>
    <div>
      <div class="screenshotImgs">
        <b-container >
          <b-row>
            <b-col  v-for="(item,index) in imgs" :key="index" cols="6" sm="6" xs="6" md="4" lg="4" xl="3">
              <b-img :src="machine.url" style="margin-top:10px" class="img" fluid alt="Responsive image"></b-img>
            </b-col>
          </b-row>
        </b-container>
      </div>
    </div>
    <b-container>
    <div class="contractTitle">
      <p class="fl">合同照片</p>
      <p class="clear"></p>
    </div>
    </b-container>
    <div>
      <div class="contractImgs">
        <b-container >
          <b-row>
            <b-col  v-for="(item,index) in imgs2" :key="index" cols="6" sm="6" xs="6" md="4" lg="4" xl="3">
              <b-img  :src="machine.url" style="margin-top:10px" class="img" fluid alt="Responsive image"></b-img>
            </b-col>
          </b-row>
        </b-container>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data(){
    return{
      machine:{
        url:"https://picsum.photos/1024/400/?image=41",
        name:"xxxxxxxx机器",
        num:22,
        sum:222222,
        No:"xxxxxxxxxxx2123123123123",
        businessName:"xxx",
        userName:"李哈哈"
      },
      imgs:["https://picsum.photos/1024/400/?image=41","https://picsum.photos/1024/400/?image=41","https://picsum.photos/1024/400/?image=41","https://picsum.photos/1024/400/?image=41"],
      imgs2:["https://picsum.photos/1024/400/?image=41","https://picsum.photos/1024/400/?image=41","https://picsum.photos/1024/400/?image=41","https://picsum.photos/1024/400/?image=41"],
      text:"",
      file:null,
      file2:null,
    }
  }
}
</script>
<style lang="scss" scoped>
  .screenshotTitle,.contractTitle{
    padding: 10px;
    width: 100%;
    border-bottom: 1px solid #DFDFDF;
    margin-top: 20px;
  }
  .form-control-file{
    width: 64px;
    height: 26px;
    overflow: hidden;
  }
  .brow{
    p{
      display: inline-block;
    }
  }
  @media (max-width: 1200px) { 
    .list{
      text-align: left;
    }
    .submit>button{
      width: 100%!important;
    }
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