<template>
  <div class="home">
    <div>
      <b-carousel
        id="carousel-1"
        v-model="slide"
        :interval="4000"
        controls
        indicators
        background="#ababab"
        img-width="1024"
        img-height="120"
        style="text-shadow: 1px 1px 2px #333;"
        @sliding-start="onSlideStart"
        @sliding-end="onSlideEnd"
      >
        <!-- Text slides with image -->
        <b-carousel-slide
          caption="First slide"
          text="Nulla vitae elit libero, a pharetra augue mollis interdum."
          img-src="https://picsum.photos/1024/480/?image=52"
        ></b-carousel-slide>

        <!-- Slides with image only -->
        <b-carousel-slide img-src="https://picsum.photos/1024/480/?image=58"></b-carousel-slide>

      </b-carousel>

    </div>
    <div style="width:94% ;margin:0 auto">
      <div class="title">
        家庭药箱
      </div>
      <b-container fluid>
        <b-row style="padding:12px" >
          <b-col class="card" gutter cols="6" sm="6" xs="6" md="4" lg="3" xl="3" v-for="(item,index) in shopList" :key="index" style="margin-bottom:6px">
            <div class="tl">
              <b-img :src="item.url" fluid="6" alt="Responsive image"></b-img>
              <p style="text-align:center">{{item.title}}</p>
              <p>库存：{{item.num}}</p>
              <p>售价：{{item.money}}</p>
            </div>
          </b-col>
        </b-row>
      </b-container>
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
      slide: 0,
      sliding: null,
      shopList:[
        {url:"http://img2.imgtn.bdimg.com/it/u=111399773,3729640683&fm=26&gp=0.jpg",title:"西瓜机",num:"999",money:8700},
        {url:"http://img2.imgtn.bdimg.com/it/u=111399773,3729640683&fm=26&gp=0.jpg",title:"葡萄机",num:"10",money:96},
        {url:"http://img2.imgtn.bdimg.com/it/u=111399773,3729640683&fm=26&gp=0.jpg",title:"葡萄机",num:"10",money:96},
        {url:"http://img2.imgtn.bdimg.com/it/u=111399773,3729640683&fm=26&gp=0.jpg",title:"葡萄机",num:"10",money:96},
        {url:"http://img2.imgtn.bdimg.com/it/u=111399773,3729640683&fm=26&gp=0.jpg",title:"葡萄机",num:"10",money:96}
      ]
    }
  },
  methods: {
    onSlideStart(slide) {
      this.sliding = true
    },
    onSlideEnd(slide) {
      this.sliding = false
    }
  },
  components: {
    Navbar
  }
};
</script>

<style lang="scss" scoped>
  .title{
    width: 94%;
    margin: 0 auto;
    text-align: left;
    border-bottom: 2px solid rgba(128, 128, 128, 0.39);
  }
</style>