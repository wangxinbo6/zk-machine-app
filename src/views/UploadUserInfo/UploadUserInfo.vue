<template>
  <div>
    <div class="title">填写资料</div>
    <div style="margin-top:20px">
      <b-container fluid>
        <b-row>
          <b-col cols="3" sm="3" xs="3" md="3" lg="3" xl="5" style="line-height:20px;text-align:right">
            信息
          </b-col>
          <b-col cols="6" sm="9" xs="9" md="9" lg="9" xl="7">
            <b-form-group name="radio-inline" style="text-align:left">
              <b-form-radio-group
                v-model="selected"
                :options="options"
                name="radio-inline"
              ></b-form-radio-group>
            </b-form-group>
          </b-col>
        </b-row>
        <b-row style="margin-bottom:16px">
          <b-col cols="3" sm="3" xs="3" md="3" lg="3" xl="5" style="line-height: 40px;text-align:right">
            <span v-show="show">姓名</span> <span v-show="!show">法人姓名</span>
          </b-col>
          <b-col cols="9" sm="8" xs="8" md="6" lg="3" xl="2">
            <b-form-input v-model="name"> </b-form-input>
          </b-col>
        </b-row>
        <b-row>
          <b-col cols="3" sm="3" xs="3" md="3" lg="3" xl="5" style="line-height: 20px;text-align:right">
            性别 
          </b-col>
          <b-col cols="6" sm="9" xs="9" md="9" lg="9" xl="7">
            <b-form-group name="radio-inline" style="text-align:left">
              <b-form-radio-group
                v-model="sexSelected"
                :options="sexOptions"
                name="radio-inline"
              ></b-form-radio-group>
            </b-form-group>
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
        <b-row style="margin-bottom:16px" v-show="!show">
          <b-col cols="3" sm="3" xs="3" md="3" lg="3" xl="5" style="line-height: 40px;text-align:right">
            企业名称
          </b-col>
          <b-col cols="9" sm="8" xs="8" md="6" lg="3" xl="2">
            <b-form-input v-model="firmName"></b-form-input>
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
        <b-row style="margin-bottom:16px" v-if="!show">
          <b-col cols="4" sm="3" xs="3" md="3" lg="3" xl="5" style="line-height: 58px;text-align:right">
            企业资质证书
          </b-col>
          <b-col cols="8" sm="8" xs="8" md="6" lg="3" xl="2">
            <b-form-file v-model="file" class="mt-3" plain></b-form-file>
          </b-col>
        </b-row>
        <b-row style="margin-bottom:16px;max-width:720px;margin:0 auto" v-if="!show">
          <b-col cols="12" sm="6" xs="6" md="6" lg="6" xl="6" v-for="(item,index) in imgList" :key="index">
            <img :src="item.url" class="img-thumbnail" style="margin-top:10px">
          </b-col>
          
        </b-row>
        <b-button variant="primary" style="margin-top:20px">确认上传</b-button>
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
      options: [
        { text: "个人", value: 0 },
        { text: "企业", value: 1 },
      ],
      name:"",
      sexSelected:0,
      sexOptions: [
        { text: "男", value: 0 },
        { text: "女", value: 1 },
      ],
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