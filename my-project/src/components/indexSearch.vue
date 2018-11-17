<template>
    <!-- 主页搜索 -->
    <div class="header">
      <Row>
        <Col span="2">
          <Icon type="ios-pin-outline" />
        </Col>
        <Col span="10" class="location">{{$route.params.title}}</Col>
      </Row>
      <div class="elm-search">
        <Input v-model="value" placeholder="搜索饿了么商家、商品名称" style="width: 300px" />
        <Button type="warning">搜索</Button>
      </div>
    </div>
</template>

<script>
export default {
data(){
    return{
        value:''
    }
}
}
</script>

<style>
.header {
  background-color: #287be2;
  color: white;
  padding: 15px 10px;
  /* font-size: 16px; */
}
.ivu-input {
  width: 100%;
  height: 43px;
  line-height: 1.5;
  padding: 4px 29px;
  font-size: 16px;
  margin: 0 auto;
}
.ivu-btn {
  font-size: 16px;
}
.location{
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    font-size: 18px;
}
.elm-search{
  position: sticky;
  top:0;
}
</style>
