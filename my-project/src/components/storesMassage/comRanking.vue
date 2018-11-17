//  综合排序
<template>

  <div>
    <template v-for="(item,index) in CompanyData">
      <router-link :key="index" :to="{'name':'details','params':{'id':item.restaurant.id,'title':item.restaurant.name}}">
      <div class="elm-stores">
        <Row >
          <Col span="6">
              <img class="picture" v-if="item.restaurant.image_path.substr(-4)=='jpeg'" :src="'https://fuss10.elemecdn.com/'+item.restaurant.image_path.substr(0,1)+'/'+item.restaurant.image_path.substr(1,2)+'/'+item.restaurant.image_path.substr(3,item.restaurant.image_path.length-3)+'.'+item.restaurant.image_path.substr(-4)" alt="">
              <img class="picture" v-if="item.restaurant.image_path.substr(-3)=='png'" :src="'https://fuss10.elemecdn.com/'+item.restaurant.image_path.substr(0,1)+'/'+item.restaurant.image_path.substr(1,2)+'/'+item.restaurant.image_path.substr(3,item.restaurant.image_path.length-3)+'.'+item.restaurant.image_path.substr(-3)" alt="">
          </Col>
          <Col span="17">
              <Row>
              <!-- 第一行 -->
              <Col span="24">
                  <Col span="2">
                  </Col>
                  <Col span="21">
                  {{item.restaurant.name}}
                  </Col>
                  <Col span='1'>
                  <Icon type="ios-calculator-outline" />
                  </Col>
              </Col>
              <!-- 第二行 -->
              <Col span="24">
                  <Col span="7">
                  <Rate disabled v-model="item.restaurant.rating" />
                  </Col>
                  <Col span="3" class="sellCount">{{item.restaurant.rating}}</Col>
                  <Col span="11" class="sellCount">月售{{item.restaurant.recent_order_num}}单</Col>
              </Col>
              <!-- 第三行 -->
              <Col span="24">
                <Col span="15" v-if="index==1">
                  ￥{{item.restaurant.piecewise_agent_fee.rules[0].rules}}元起送  |  {{item.restaurant.piecewise_agent_fee.description}}
                </Col>
                <Col span="15" v-else>
                  ￥{{item.restaurant.piecewise_agent_fee.rules[0].price}}元起送  |  {{item.restaurant.piecewise_agent_fee.description}}
                </Col>
                <Col span="5" v-if="item.restaurant.distance > 1000">
                  {{(item.restaurant.distance/1000).toFixed(2)+'km'}}  |
                </Col>
                <Col span="4" v-else>
                  {{item.restaurant.distance+'m'}}  |
                </Col>
                <Col span="4">
                {{item.restaurant.order_lead_time}}分钟
                </Col>
              </Col>
              </Row>
          </Col>
        </Row>
       
        <!-- 优惠 -->
        <div>
          <div class="store-box" >
            <span class="text" v-for="(items,id) in item.restaurant.support_tags" :key='id'>{{items.text}}</span>
          </div>
          <Row>
            <Col span="19">
              <div class="store-box" v-for='(items,index) in item.restaurant.activities'>
                <p class="actives" v-if="index<2">
                  <span class="icon_name">{{items.icon_name}}</span>
                  <span>{{items.tips}}</span>
                </p>
              </div>
            </Col>
            <Col span="5" v-if="item.restaurant.activities.length>2">
              <span>{{item.restaurant.activities.length}}个活动</span>
              <Icon type="md-arrow-dropdown" />
            </Col>
          </Row>
        </div>
      </div>  
      </router-link>     
    </template>
  </div>
  
</template>

<script>
export default {
  data(){
    return{
      CompanyData:"",
      value1:''
    }
  },
  created(){
    this.$Axios.get("/store").then((data)=>{
      console.log(data.data.items);
      this.CompanyData=data.data.items
    })
  }
}
</script>

<style>
.elm-stores{
  padding:10px;
  border-bottom: 1px solid gainsboro;
}
.store-box{
    padding-left: 100px;
    width:300px;
    margin-bottom:10px;
}
.actives{
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.icon_name{
  background-color: #F07373;
  color:white;
  display: inline-block;
  padding:2px 3px;
  border-radius: 3px;
}
.text{
  border:1px solid gainsboro;
  padding:1px 5px;
  border-radius: 2px;
  margin-right: 5px;
}
/* .sellCount{ */
  /* vertical-align: bottom; */
/* } */
</style>
