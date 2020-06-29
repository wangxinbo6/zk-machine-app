<template>
  <div class="home">
    
    <div style="width:94% ;margin:0 auto;position:relative;" class="homeContent">
      <!--确认申请-->
      <b-container>
        <div @click="addShow=!addShow" style="
          position: absolute;
          top: 0px;
          right: 15px;
          z-index:5;
          padding: 0 10px 4px;
          background: #17a2b8;
          color: #fff;
          border-bottom-right-radius: 10px;
          border-bottom-left-radius: 10px;
          cursor: pointer;">商务申请
          <b-icon icon="chevron-double-down" aria-hidden="true" v-show="!addShow"></b-icon>
          <b-icon icon="chevron-double-up" aria-hidden="true" v-show="addShow"></b-icon>
        </div>
        <transition name="slide-fade">
          <b-row>
            <b-col sm="12" md="12" lg="3" xl="3">
              <div  class="pt-4 mb-3 addContent " v-if="addShow">
                <b-input-group size="sm" prepend="姓  名" class="mb-1">
                  <b-input v-model="add.name"></b-input>
                </b-input-group>
                <b-input-group size="sm" prepend="电  话" class="mb-1">
                  <b-input v-model="add.mobile"></b-input>
                </b-input-group>
                <b-input-group size="sm" prepend="密  码" class="mb-1">
                  <b-input v-model="add.password"></b-input>
                </b-input-group>
                <b-button size="sm" class="fr" variant="info" style="width:100px" @click="addSubmit">确认申请</b-button>
                <p class="clear"></p>
              </div>
            </b-col>
          </b-row>
          
        </transition>
      </b-container>

      <b-container style="padding-top:30px;">
        

        <div class="title">
          <p></p>
          <p>家庭药箱</p>
          <p></p>
          <div class="clear"></div>
        </div>
        <b-row style="padding:12px" >
          <b-col  gutter cols="12" sm="12" xs="6" md="4" lg="3" xl="3" v-for="(item,index) in shopList" :key="index" class="contents">
            <div class="tl card" style="margin-bottom:6px">
              <b-row style="padding:0;" >
                <b-col cols="4" sm="5" xs="12" md="12" lg="12" xl="12">
                  <b-img :src="item.url" fluid-grow alt="Responsive image" class="img"></b-img>
                </b-col>
                <b-col cols="8" sm="7" xs="12" md="12" lg="12" xl="12" class="shopText">
                  <p style="margin:10px;font-size:12px;height: 36px;" class="shopTextTitle">{{item.title}}</p>
                  <p style="margin:10px;color: #F41;"><i style="font-size:12px">￥</i>{{item.money}}</p>
                  <p style="margin:10px;font-size:12px">库存：{{item.num}} 台</p>
                
                  <b-button size="sm" variant="success">立即抢购</b-button>

                </b-col>
              </b-row>
            </div>
          </b-col>
        </b-row>
      </b-container>
      <!-- <div class="title">
        饮料机
      </div>
      <b-container fluid>
        <b-row style="padding:12px" >
          <b-col  gutter cols="6" sm="6" xs="6" md="4" lg="3" xl="2" v-for="(item,index) in shopList2" :key="index">
            <div class="tl card" style="margin-bottom:6px">
              <b-img :src="item.url" fluid="6" alt="Responsive image"></b-img>
              <p style="text-align:center">{{item.title}}</p>
              <p>库存：{{item.num}}</p>
              <p>售价：{{item.money}}</p>
            </div>
          </b-col>
        </b-row>
      </b-container> -->
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Navbar from "../components/Navbar/Navbar.vue";

export default {
  name: "Home",
  data(){
    return{
      addShow:false,
      slide: 0,
      sliding: null,
      add:{
        name:'11',
        password:'123',
        mobile:'333',
      },
      shopList:[
        {url:"https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=2574012528,4184940&fm=26&gp=0.jpg",title:"西瓜机西瓜机西瓜机西瓜机西瓜机西瓜机西瓜机西瓜机西瓜机西瓜机西瓜机西瓜机西瓜机西瓜机西瓜机西瓜机西瓜机西瓜机西瓜机西瓜机西瓜机西瓜机西瓜机西瓜机",num:"999",money:8700},
        {url:"https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=2574012528,4184940&fm=26&gp=0.jpg",title:"葡萄机",num:"10",money:96},
        {url:"https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=2574012528,4184940&fm=26&gp=0.jpg",title:"葡萄机",num:"10",money:96},
        {url:"https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=2574012528,4184940&fm=26&gp=0.jpg",title:"葡萄机",num:"10",money:96},
        {url:"https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=2574012528,4184940&fm=26&gp=0.jpg",title:"葡萄机",num:"10",money:96},
        {url:"https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=2574012528,4184940&fm=26&gp=0.jpg",title:"葡萄机",num:"10",money:96}
      ],
      shopList2:[
        {url:"https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=2574012528,4184940&fm=26&gp=0.jpg",title:"西瓜机",num:"999",money:8700},
        {url:"https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=2574012528,4184940&fm=26&gp=0.jpg",title:"葡萄机",num:"10",money:96},
        {url:"https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=2574012528,4184940&fm=26&gp=0.jpg",title:"葡萄机",num:"10",money:96},
        {url:"https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=2574012528,4184940&fm=26&gp=0.jpg",title:"葡萄机",num:"10",money:96},
        {url:"https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=2574012528,4184940&fm=26&gp=0.jpg",title:"葡萄机",num:"10",money:96},
        {url:"https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=2574012528,4184940&fm=26&gp=0.jpg",title:"葡萄机",num:"10",money:96}
      ]
    }
  },
  methods: {
    
    onSlideStart(slide) {
      this.sliding = true
    },
    onSlideEnd(slide) {
      this.sliding = false
    },
    addSubmit(){

    }

  },
  components: {
    Navbar
  }
};
</script>

<style lang="scss" scoped>
  .home{
    background-color: #fafafa;
  }
  .title{
    width: 100%;
    margin: 0 auto;
    padding: 12px;
    text-align: center;
    // border-bottom: 2px solid rgba(128, 128, 128, 0.39);
    font-size: 18px;
    font-weight: bold;
    P{
      display: inline-block;
      width: 33.3333333%;
      float: left;
      &:nth-child(1){
        border-bottom: 1px solid #ccc;
        height: 10px;
      }
      &:nth-child(3){
        border-bottom: 1px solid #ccc;
        height: 10px;
      }
    }
  }
  .card{
    border: none;
    &>p{
      padding:4px 10px;
    }
  }
  .shopText{
    letter-spacing: 0.8px;
    font-size: 18px;
    color: #3d3d3d;
    position: relative;
    .shopTextTitle{
      text-overflow: -o-ellipsis-lastline;
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      line-clamp: 2;
      -webkit-box-orient: vertical;
    }
    button{
      position: absolute;
      top: 56px;
      right: 25px;
      border-radius: 30px;
      background-color: #ffeded;
      border: 1px solid #FF0036;
      color: #FF0036;
    }
  }
  @media (max-width: 1200px) { 
    .row{
      padding: 0!important;
      margin: 0!important;
    }
    .col{
      padding: 0!important;
    }
    .container{
      padding: 0!important;;
    }
    .img{
      height: 100%;
      padding: 14px 0;
    }
    .shopText{
      padding-left: 0!important;
      margin-left: -10px;
    }
    .homeContent{
      width: 100%;
    }
    .contents{
      padding: 0 !important;
    }
  }
</style>