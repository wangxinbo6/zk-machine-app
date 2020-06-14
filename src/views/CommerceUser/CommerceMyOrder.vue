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
                <b-button  style="width:100%;margin-top:10px" variant="primary">搜索</b-button>
            </b-col>
            </b-row>
        </b-container>
        </div>
        <div class="list">
        <b-container fluid >
            <b-row v-for="(item,index) in orderList" :key="index" style="pading:30px;margin-top:20px;line-height: 80px; border:1px solid #999;background:#fff;position: relative;" class="brow">
            <b-col cols="12" sm="12" xs="12" md="12" lg="12" xl="3">
                <b-img src="https://picsum.photos/1024/400/?image=41" class="img" fluid alt="Responsive image"></b-img>
            </b-col>
            <b-col cols="12" sm="12" xs="12" md="12" lg="12" xl="3"><p class="name">{{item.name}}</p></b-col>
            <b-col cols="12" sm="12" xs="6" md="6" lg="6" xl="2"><p class="num">数量：{{item.num}}</p></b-col>
            <b-col cols="12" sm="12" xs="6" md="6" lg="6" xl="2"><p class="sum">总价：{{item.sum}}</p></b-col>
            <b-col cols="12" sm="12" xs="12" md="12" lg="12" xl="2"><p class="state">状态：{{item.state}}</p></b-col>
            <b-col cols="12" sm="12" xs="12" md="12" lg="6" xl="6"><p>合同编号：</p>{{item.No}}</b-col>
            <b-col cols="12" sm="12" xs="12" md="12" lg="6" xl="6"><p>提交时间：</p>{{item.time}}</b-col>
            <a href="#" style="position:absolute;left:0;top:0;width:100%;height:100%"></a>
            </b-row>
        </b-container>
        </div>
        <div class="overflow-auto" style="margin:14px 0;">
        <b-pagination
            v-model="currentPage"
            :total-rows="rows"
            :per-page="perPage"
            aria-controls="my-table"
            align="center"
        ></b-pagination>
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
      file:null,
      file2:null,
      text:"",
      orderList:[
        {
          url:"https://picsum.photos/1024/400/?image=41",
          name:"第六代xx家庭健康药箱",
          num:"24",
          sum:"2400",
          state:"待审核",
          No:"xxxxxxxxxx2332",
          time:"2020-6-12  16：38"
        },{
          url:"https://picsum.photos/1024/400/?image=41",
          name:"冬瓜箱",
          num:"21",
          sum:"200",
          state:"已完成",
          No:"xxxxxxxxxx2332",
          time:"2020-6-12  16：38"
        },{
          url:"https://picsum.photos/1024/400/?image=41",
          name:"冬瓜箱",
          num:"21",
          sum:"200",
          state:"接洽中",
          No:"xxxxxxxxxx2332",
          time:"2020-6-12  16：38"
        }
      ]
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