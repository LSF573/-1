<template>
  <div>
    <Row class="header">
      <Col span="17">{{string.title}}</Col>
      <router-link to="/login">
        <Col span="3" class="back">{{string.login}}</Col>
      </router-link>
      <router-link to="/login">
        <Col span="4" class="back">{{string.register}}</Col>
      </router-link>
    </Row>
    <div></div>
      <Row class="head2">
        <Col span="9">{{string.city}}</Col>
        <Col span="15">{{string.city2}}</Col>
      </Row>
      <!-- 定位 {{locationCity}}-->
      <Row class="dwcity" >
        <Col span='22'>{{locationCity}}</Col>
        <Col span='2'>
          <!-- @click='location' -->
          <router-link :to="{'name':'searchCity','params':{'id':'32','title':locationCity}}">
           <span>></span>
          </router-link>
         </Col>
      </Row>
      <Row class="hotCity">
        <Row class="cityTitle">
          <Col span='24'>热门城市</Col>
        </Row>
        <Row>
          <template v-for="(item,index) in json">
            <router-link :key="index+'a'" :to="{'name':'searchCity','params':{'id':item.id,'title':item.name}}">
              <Col class="h-City" span="6" >{{item.name}}</Col>
            </router-link>
          </template>
        </Row>
      </Row>
      <!-- 所有城市组件 -->
      <ele></ele>
  </div>
</template>

<script>
import AllCity from './allcity'
export default {
  components:{'ele':AllCity},
  data() {
    return {
      string: {
        title: "饿了么",
        login: "登录|",
        register: "注册",
        city: "当前定位城市:",
        city2: "定位不准时请在城市列表中选择"
        
      },
      json: [],
      // datas: [],
      // datass: [],
      arr: [
        "A",
        "B",
        "C",
        "D",
        "E",
        "F",
        "G",
        "H",
        "J",
        "K",
        "L",
        "M",
        "N",
        "P",
        "Q",
        "R",
        "S",
        "T",
        "W",
        "X",
        "Y",
        "Z"
      ],
      locationCity:'',
      positionMsg:''
    }
  },
 
  created() {
    this.$Axios.get("https://elm.cangdu.org/v1/cities?type=hot").then(data => {
      // console.log(data)
      this.json = data.data
    })
    // this.$Axios.get("https://elm.cangdu.org/v1/cities?type=group").then(datas => {
    //     // console.log(datas.data)
    //     this.datas = datas.data
    // })
      
  },
  mounted(){
    var geolocation = new BMap.Geolocation();  
    let that=this;
    geolocation.getCurrentPosition(function(r){  
    if(this.getStatus() == BMAP_STATUS_SUCCESS){  
      //以指定的经度与纬度创建一个坐标点  
      var pt = new BMap.Point(r.point.lng,r.point.lat);  
      //创建一个地理位置解析器  
      var geoc = new BMap.Geocoder();  
      geoc.getLocation(pt, function(rs){//解析格式：城市，区县，街道  
          var addComp = rs.addressComponents; 
          that.locationCity=addComp.city
          console.log(addComp)
          console.log(addComp.city + ", " + addComp.district + ", " + addComp.street);
            that.positionMsg= addComp.city + ", " + addComp.district + ", " + addComp.street ;
      });   
    }else {  
        console.log('定位失败');  
      }          
      },{enableHighAccuracy: true})//指示浏览器获取高精度的位置，默认false 
    }
  }
  
</script>

<style>
/* body{
  background-color: #F9F9F9;
} */
.header {
  background-color: #287be2;
  color: white;
  padding: 15px 10px;
  font-size: 14px;
}
.head2 {
  padding: 10px 5px;
  font-size: 13px;
  border-bottom: 2px solid #f3f3f3;
}
.dwcity {
  padding: 10px 10px 0;
  font-size: 18px;
  color: #287be2;
}
.hotCity {
  margin: 10px 0;
  border: 1px solid #f3f3f3;
}
.cityTitle {
  padding: 8px 0px;
  border: 1px solid #f3f3f3;
  font-size: 14px;
}
.h-City {
  padding: 10px;
  border: 1px solid #f3f3f3;
  color: #3190e8;
  text-align: center;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.abc {
  color: #515a6e;
}
.allCity {
  position: relative;
}
.navigate {
  position: fixed;
  top: 150px;
  right: 0;
  font-size: 16px;
  z-index: 3;
}
.active {
  color: #3190e8;
}
/* 登录跳转 */
.back{
  color:white;
}
</style>
