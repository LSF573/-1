 <template>
   <!-- 所有城市 -->
    <div class="allCity">
    <!-- 首字母导航 -->
        <div class="navigate">
        <template v-for="(item,index) in arr">
            <p @click="scrolls(item)" :key="index+'b'">{{item}}</p>
        </template>
        </div>
    <Row>
    <Col span="24" >
    <div v-for="(item,index) in arr" :ref="item" :key="index+'b'">
        <p class="cityTitle" v-if="index==0" id="index">{{item}}(按字母排序)</p>
        <p class="cityTitle" v-else id="index">{{item}}</p>
        <Row>
        <template v-for="(items,index) in datas[item]" >
          <router-link :key="index+'a'" :to="{'name':'searchCity','params':{'id':items.id,'title':items.name}}">
            <Col class="h-City abc" span="6">{{items.name}}</Col>
          </router-link>
        </template>
        </Row>
    </div>
    </Col>
    </Row>
    </div>
     
 </template>
 
 <script>
 export default {
   data(){
       return{
        arr: ["A","B",
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
       datas: []
       }
   },
   methods:{
    scrolls(num){
      // ref可以找到标签
      console.log(this.$refs[num])
      window.scrollTo(0,this.$refs[num][0].offsetTop)
    },
   
  },
   created(){
      this.$Axios.get("https://elm.cangdu.org/v1/cities?type=group").then(datas => {
        // console.log(datas.data)
        this.datas = datas.data
      })
   }
 }
 </script>
 
 <style>
 
 </style>
 