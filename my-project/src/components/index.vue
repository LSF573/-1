<template>
  <div>
        <!-- 引入搜索 -->
    <indexSearch></indexSearch>
      <!-- 分类 -->
      <Carousel v-model="value2">
        <CarouselItem>
            <div class="demo-carousel">
              <div class="classify">
                <div class="ele-img" v-for="(item,index) in json" :key="index" v-if="index<10">
                  <img :src="'https://fuss10.elemecdn.com'+item.image_url" alt="">
                  <p>{{item.title}}</p>
                </div>
              </div>
            </div>
        </CarouselItem>
        <CarouselItem>
            <div class="demo-carousel">
              <div class="classify">
                <div class="ele-img" v-for="(item,index) in json" :key="index+'s'" v-if="index>10">
                  <img :src="'https://fuss10.elemecdn.com'+item.image_url" alt="">
                  <p>{{item.title}}</p>
                </div>
            </div>
            </div>
        </CarouselItem>
      </Carousel>
       <!-- 抢购 -->
        <Row>
            <Col class="elm-center1" span="12">
                <h3>品质套餐</h3>
                <p>搭配齐全吃得好</p>
                <p>立即抢购></p>
                <img src="https://fuss10.elemecdn.com/d/d4/16ff085900d62b8d60fa7e9c6b65dpng.png?imageMogr/format/webp/thumbnail/!240x160r/gravity/Center/crop/240x160/" alt="">
            </Col>
            <Col class="elm-center2" span="12">
                <h3>限量抢购</h3>
                <p>超值美味9.9元起</p>
                <span>442人</span><span>正在抢></span>
                <img src="https://fuss10.elemecdn.com/b/e1/0fa0ed514c093a7138b0b9a50d61fpng.png?imageMogr/format/webp/thumbnail/!240x160r/gravity/Center/crop/240x160/" alt="">
            </Col>
        </Row>
        <!-- 轮播图 -->
      <div class="carousel">
        <Carousel autoplay v-model="value3">
          <CarouselItem>
            <div class="demo-carousel">
              <img src="https://fuss10.elemecdn.com/6/5c/8fd61766106b4b1115ba272c00c9ajpeg.jpeg?imageMogr/format/webp/thumbnail/568x/" alt="">
            </div>
          </CarouselItem>
          <CarouselItem>
            <div class="demo-carousel">
              <img src="https://fuss10.elemecdn.com/4/e0/8981b215aeae8c5f36c55068619b9jpeg.jpeg?imageMogr/format/webp/thumbnail/568x/" alt="">
            </div>
          </CarouselItem>
          <CarouselItem>
            <div class="demo-carousel">
              <img src="https://fuss10.elemecdn.com/a/30/9fd00e1478b6f73743282495abb0cjpeg.jpeg?imageMogr/format/webp/thumbnail/568x/" alt="">
            </div>
          </CarouselItem>
        </Carousel>
      </div>
       <!--  -->
      <div>
        <p class="title">--推荐商家--</p>
         <!-- 排序 -->
         <!-- <Panel name="1">
            
            <p slot="content">史蒂夫·乔布斯（Steve Jobs），1955年2月24日生于美国加利福尼亚州旧金山，美国发明家、企业家、美国苹果公司联合创办人。</p>
        </Panel> -->
        <div class="sort">
          <div :class="{active:show==1}" @click="comRanking">综合排序
            <Icon type="md-arrow-dropdown" />
            <Panel name="1">
              <p slot="content">
                
              </p>
            </Panel>
            
          </div>
          <div :class="{active:show==2}" @click="distance">距离最近</div>
          <div :class="{active:show==3}" @click="quality">品质联盟</div>
          <div>筛选</div>
        </div>
        <div>
          <com-ranking v-if="show==1"></com-ranking>
          <short-distance v-if="show==2"></short-distance>
          <quality v-if="show==3"></quality>
        </div>
         <!-- <com-ranking></com-ranking> -->
         <!-- <short-distance></short-distance> -->
       </div>
    </div>
</template>

<script>
import indexSearch from './indexSearch'
import ComRanking from './storesMassage/comRanking'
import shortDistance from './storesMassage/shortDistance'
import quality from './storesMassage/quality'
export default {
  components:{
   'indexSearch':indexSearch,
   'ComRanking':ComRanking,
   'shortDistance':shortDistance,
   'quality':quality
  },
  data() {
    return {
      value2: 0,
      value3:0,
      json: [],
      value: "",
      CompanyData:"",
      show:1,
      color:"black"
    };
  },
  methods:{
    comRanking(){
      this.show=1
    },
    distance(){
      this.show=2
    },
    quality(){
      this.show=3
    }
  },
  created() {
    this.$Axios.get("https://elm.cangdu.org/v2/index_entry").then(data => {
      this.json = data.data;
    //   console.log(data);
    })
  }
};
</script>

<style>
body {
  font-size: 14px;
}
.classify {
  overflow: hidden;
  font-size: 16px;
  text-align: center;
}
.ele-img {
  float: left;
  margin: 10px;
}
.ele-img img {
  width: 60px;
  height: auto;
  float: right;
}
.elm-center1,
.elm-center2 {
  width: 192px;
  padding: 10px;
  background-color: #f8f8f8;
  margin-left: 10px;
}
.elm-center1 p,
.elm-center2 p {
  font-size: 14px;
}
.elm-center1 p:nth-child(3) {
  color: #af8260;
}
.elm-center1 img,
.elm-center2 img {
  width: 120px;
  float: right;
}
.elm-center2 span {
  font-size: 14px;
  color: red;
}
.elm-center1 img,
.elm-center2 img {
  width: 120px;
}
.carousel{
    margin: 5px 10px;
}

/* 推荐商家 */
.title{
  text-align: center;
  margin: 10px 0;
}
.sort{
  padding:20px 0;
  background-color: white;
  text-align: center;
  position: sticky;
  top:50px;
  display: flex;
  justify-content: space-around;
}
.picture{
  width: 80px;
}
.ivu-rate-star{
  margin-right: 0;
  font-size: 14px;
}

</style>
