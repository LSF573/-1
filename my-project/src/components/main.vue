<template>
    <div>
      <Row class="header">
        <Col span="17">
          <Icon type="ios-search-outline" />
        </Col>
        <router-link to="/login">
          <Col span="3" class="back">登录|</Col>
        </router-link>
        <router-link to="/login">
          <Col span="4" class="back">注册</Col>
        </router-link>
      </Row>
      <div>
          <div v-for="(item,index) in json" :key="index">
            <img :src="item.image_url" alt="">
          </div>
            
      </div>
    </div>
</template>

<script>
export default {
    data(){
        return{
            json:[]
        }
    },
    created(){
      this.$Axios.get("https://elm.cangdu.org/v2/index_entry").then(data => {
        this.json = data.data
        console.log(data);
      })
       
    }
}
</script>

<style>
body{
    font-size: 18px;
}
.header {
  background-color: #287be2;
  color: white;
  padding: 15px 10px;
  /* font-size: 16px; */
}
/* 登录跳转 */
.back{
  color:white;
}
</style>
