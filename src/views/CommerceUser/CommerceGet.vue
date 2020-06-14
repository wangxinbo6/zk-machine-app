<template>
  <div>
    <div style=" font-size:18px; margin:20px 0; margin-left:10px" class="tl">
      <a href="#">领取合同</a> | <a href="#">我的订单</a>
    </div>
    <b-card no-body>
      <div class="header">
        <b-container fluid>
          <b-row>
            <b-col cols="12" sm="12" xs="4" md="3" lg="3" xl="3">
              <b-form-input  v-model="text" placeholder="请输入合同编号" style="margin-top:10px"></b-form-input>
            </b-col>
            <b-col cols="12" sm="12" xs="3" md="2" lg="2" xl="1">
              <b-button  style="width:100%;margin-top:10px" variant="primary">核对</b-button>
            </b-col>
          </b-row>
        </b-container>
      </div>
      <div class="list">
        <b-container fluid style="padding-top:20px;font-size:16px">
          <b-row>
            <b-col cols="12" sm="12" xs="12" md="12" lg="12" xl="3">
              <b-img :src="machine.url" style="height:100px;width:200px" class="img" fluid alt="Responsive image"></b-img>
            </b-col>
            <b-col cols="12" sm="12" xs="12" md="12" lg="12" xl="3"><p class="name">{{machine.name}}</p></b-col>
            <b-col cols="12" sm="12" xs="6" md="6" lg="6" xl="2"><p class="num">数量：{{machine.num}}</p></b-col>
            <b-col cols="12" sm="12" xs="6" md="6" lg="6" xl="2"><p class="sum">总价：￥{{machine.sum}}</p></b-col>
            <b-col cols="12" sm="12" xs="12" md="12" lg="12" xl="2"><p class="submit"><b-button>提交</b-button></p></b-col>
            <b-col cols="12" sm="12" xs="12" md="12" lg="12" xl="12" >订单号：{{machine.No}}</b-col>
          </b-row>
        </b-container>
      </div>
      <div class="screenshotTitle">
        <p class="fl">付款截图</p>
        <p class="fr"><b-form-file size="sm" v-model="file" plain></b-form-file></p>
        <p class="clear"></p>
      </div>
      <div>
        <div class="screenshotImgs">
          <b-container fluid>
            <b-row>
              <b-col  v-for="(item,index) in imgs" :key="index" cols="6" sm="6" xs="6" md="4" lg="4" xl="3">
                <b-img  :src="machine.url" style="margin-top:10px" class="img" fluid alt="Responsive image"></b-img>
              </b-col>
            </b-row>
          </b-container>
        </div>
      </div>
      <div class="contractTitle">
        <p class="fl">合同照片</p>
        <p class="fr"><b-form-file v-model="file2" plain></b-form-file></p>
        <p class="clear"></p>
      </div>
      <div>
        <div class="contractImgs">
          <b-container fluid>
            <b-row>
              <b-col  v-for="(item,index) in imgs2" :key="index" cols="6" sm="6" xs="6" md="4" lg="4" xl="3">
                <b-img  :src="machine.url" style="margin-top:10px" class="img" fluid alt="Responsive image"></b-img>
              </b-col>
            </b-row>
          </b-container>
        </div>
      </div>
    </b-card>
  </div>
</template>
<script>
export default {
  data(){
    return{
      perPage: 3,
      currentPage: 1,
      rows: 10,
      machine:{
        url:"https://picsum.photos/1024/400/?image=41",
        name:"xxxxxxxx机器",
        num:22,
        sum:222222,
        No:"xxxxxxxxxxx2123123123123"
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