<template>
    <div>
        <Row class="header">
            <router-link to="/">
              <Col class="forword" span="10"><</Col>
            </router-link>
            <Col span="9">{{$route.params.title}}</Col>
            <Col span="5">切换城市</Col>
        </Row>
        <div class="searchs">
          <template>
            <Input class="search" placeholder="输入学校、商务楼、地址" v-model="value" />
          </template>
          <p class="pos">X</p>
          <button class="submit" @click="search">提交</button>
        </div>
        <div>
            <p class="searchH">搜索历史</p>
            <div>
                <template v-for="(item,index) in datas" >
                <div class="cityBox" :key="index" @click="save(index)">
                    <h4>{{item.name}}</h4>
                    <p class="addr">{{item.address}}</p>
                </div>
                </template>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  data () {
    return {
        value: '',
        datas:[]
    }
  },
  methods:{
      search(){
        this.$Axios.get("https://elm.cangdu.org/v1/pois?city_id="+this.$route.params.id+"&keyword="+this.value).then(datas => {
        // console.log(datas.data)
        this.datas = datas.data
        })
      },
      save(num){
          this.storage=this.datas[num];
          console.log(this.storage.address)
          window.localStorage["address"]=this.storage.address;
      }
  }
}
</script>

<style>
body{
    font-size: 18px;
    background-color: #F5F5F5;
}
 .header{
    background-color: #287BE2;
    color:white;
    padding:15px 10px;
    font-size:20px;
    
}
.forword{
    color:white;
}
.submit{
    border:none;
    background-color: #287BE2;
    display: block;
    width: 90%;
    margin: 10px auto;
    padding:5px 0;
    color:white;
    font-size:20px;
    border-radius: 3px;
}
.ivu-input{
    height:42px;
    font-size: 18px;
  
}
.searchs{
    position: relative;
    border-bottom: 1px solid #EBEBEB;
    background-color: white;
    padding-top:5px;
    margin-top:10px;
}
.search{
    width: 90%;
    display: block;
    margin: 20px auto;
    position: relative;
}
.pos{
    font-size: 18px;
    font-weight: 900;
    position: absolute;
    top:34px;
    right:39px;
} 
.searchH{
    padding-left: 20px;
}
.cityBox{
    padding:20px;
    background-color: white;
    border-top: 1px solid #EBEBEB;
}
.addr{
    font-size: 13px;
    color: #999999;
}
</style>
