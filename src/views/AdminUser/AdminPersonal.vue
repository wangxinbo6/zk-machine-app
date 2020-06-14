<template>
  <div>
    <div class="title">基本信息</div>
    <div style="margin-top:20px">
      <b-container fluid>
        <b-row style="margin-bottom:16px">
          <b-col cols="3" sm="3" xs="3" md="3" lg="3" xl="5" style="line-height: 40px;text-align:right">
            <span v-show="show">姓名</span> <span v-show="!show">法人姓名</span>
          </b-col>
          <b-col cols="9" sm="8" xs="8" md="6" lg="3" xl="2">
            <b-form-input v-model="name"> </b-form-input>
          </b-col>
        </b-row>
        <b-row style="margin-bottom:16px"> 
          <b-col cols="3" sm="3" xs="3" md="3" lg="3" xl="5" style="line-height: 40px;text-align:right">
            性别 
          </b-col>
          <b-col cols="6" sm="9" xs="9" md="9" lg="9" xl="7" class="tl">
            <b-form-input v-model="sex"> </b-form-input>
          </b-col>
        </b-row>
        <b-row style="margin-bottom:16px">
          <b-col cols="3" sm="3" xs="3" md="3" lg="3" xl="5" style="line-height: 40px;text-align:right">
            身份证号
          </b-col>
          <b-col cols="9" sm="8" xs="8" md="6" lg="3" xl="2">
            <b-form-input v-model="cardId"></b-form-input>
          </b-col>
        </b-row>
        <b-row style="margin-bottom:16px">
          <b-col cols="3" sm="3" xs="3" md="3" lg="3" xl="5" style="line-height: 40px;text-align:right">
            省
          </b-col>
          <b-col cols="9" sm="8" xs="8" md="6" lg="3" xl="2">
            <b-form-input v-model="province"></b-form-input>
          </b-col>
        </b-row>
        <b-row style="margin-bottom:16px">
          <b-col cols="3" sm="3" xs="3" md="3" lg="3" xl="5" style="line-height: 40px;text-align:right">
            市
          </b-col>
          <b-col cols="9" sm="8" xs="8" md="6" lg="3" xl="2">
            <b-form-input v-model="city"></b-form-input>
          </b-col>
        </b-row>
        <b-row style="margin-bottom:16px">
          <b-col cols="3" sm="3" xs="3" md="3" lg="3" xl="5" style="line-height: 40px;text-align:right">
            区
          </b-col>
          <b-col cols="9" sm="8" xs="8" md="6" lg="3" xl="2">
            <b-form-input v-model="district"></b-form-input>
          </b-col>
        </b-row>
      </b-container>
    </div>
    {{selected}}
    {{name}}
    {{sexSelected}}
    {{cardId}}
    {{province}}
    {{city}}
    {{district}}
    {{show}}
  </div>
</template>
<script>
export default {
  data(){
    return{
      selected: 0,
      name:"",
      sexSelected:0,
      sex:"男",
     
      cardId:"",
      province:"",
      city:"",
      district:"",
      firmName:"",
      show:true,
      file:null,
      imgList:[
        {url:"http://img2.imgtn.bdimg.com/it/u=541185697,1864372801&fm=26&gp=0.jpg"},
        {url:"http://img2.imgtn.bdimg.com/it/u=541185697,1864372801&fm=26&gp=0.jpg"},
        {url:"http://img2.imgtn.bdimg.com/it/u=541185697,1864372801&fm=26&gp=0.jpg"},
        {url:"http://img2.imgtn.bdimg.com/it/u=541185697,1864372801&fm=26&gp=0.jpg"},
        {url:"http://img2.imgtn.bdimg.com/it/u=541185697,1864372801&fm=26&gp=0.jpg"}
      ]

    }
  },
  watch:{
    selected: function(newV, oldV) {
      //console.log(newV);
      if(newV == "qiye"){
        this.show = false
      }else{
        this.show = true
      }
    }
  
  }
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