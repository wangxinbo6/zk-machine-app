<template>
  <div>
    <div>
      <b-container>
        <a href="#">
          <p class="tl" style="font-size:18px; margin: 20px 0">设置参数></p> 
        </a>
      </b-container>
    </div>
    <div>
    <b-container>
      <b-row>
        <b-col cols="12" sm="12" xs="12" md="12" lg="12" xl="3" style="margin-top:10px; text-align: left;">
          <b-form-radio-group
            id="btn-radios-2"
            v-model="selected"
            :options="options"
            buttons
            button-variant="outline-primary"
            size="sm"
            name="radio-btn-outline"
          ></b-form-radio-group>
        </b-col>
        
        <b-col cols="12" sm="12" xs="12" md="12" lg="12" xl="9" style="margin-top:10px">
          <b-input-group>
            <b-form-input type="text" size="sm" ></b-form-input>
            <b-input-group-append>
              <b-button size="sm" variant="outline-secondary">Button</b-button>
            </b-input-group-append>
          </b-input-group>
        </b-col>
        
      </b-row>
    </b-container>
    </div>
    <div class="list">
      <b-container >
        <b-row v-for="(item,index) in orderList" :key="index" style="pading:30px;margin-top:20px;line-height: 80px; border:1px solid #999;background:#fff" class="brow">
          <b-col cols="12" sm="12" xs="12" md="12" lg="12" xl="3" class="imgContent">
            <b-img src="https://picsum.photos/1024/400/?image=41" class="img" fluid alt="Responsive image"></b-img>
          </b-col>
          <b-col cols="12" sm="12" xs="12" md="12" lg="12" xl="9">
            <b-row>
            <b-col cols="12" sm="12" xs="12" md="12" lg="12" xl="3"><p class="name">{{item.name}}</p></b-col>
            <b-col cols="12" sm="12" xs="6" md="6" lg="6" xl="3"><p class="num">数量：{{item.num}}</p></b-col>
            <b-col cols="12" sm="12" xs="6" md="6" lg="6" xl="3"><p class="sum">总价：{{item.sum}}</p></b-col>
            <b-col cols="12" sm="12" xs="12" md="12" lg="12" xl="3"><p class="state">状态：{{item.state}}</p></b-col>
            <b-col cols="12" sm="12" xs="12" md="12" lg="6" xl="6"><p>合同编号3：</p>{{item.No}}</b-col>
            <b-col cols="12" sm="12" xs="12" md="12" lg="6" xl="6"><p>提交时间：</p>{{item.time}}</b-col>
            </b-row>
          </b-col>
         
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
  </div>
</template>
<script>
export default {
  data(){
    return{
      selected: 'radio1',
      options: [
        { text: '全部订单', value: 'radio1' },
        { text: '接洽中', value: 'radio2' },
        { text: '待审核', value: 'radio3', disabled: false },
        { text: '已完成', value: 'radio4' }
      ],
      perPage: 3,
      currentPage: 1,
      rows: 10,
      text2:"",
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
  .brow{
    p{
      display: inline-block;
    }
  }
  .img{
    width: 100%;
    height:100%;
  }
  .imgContent{
    padding: 0;
  }
  @media (max-width: 1200px) { 
    .list{
      text-align: left;
    }
    .submit>button{
      width: 100%!important;
    }
    .imgContent{
      padding: 0;
    }
    .img{
      width: 100vw!important;
      height: auto!important;
    }
    .brow{
      line-height: 30px!important;
     
      width: 90%;
      margin: 0 auto;
      P{
        padding: 6px 20px;
        border-bottom: 1px solid #fcfcfc;
      }
    }
    
  }
</style>