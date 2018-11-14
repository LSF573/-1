<template>
    <div>
        <Row class="header">
          <router-link to="/">
            <Col span='10' class="back"><</Col>
          </router-link>
          <Col span='14'>密码登录</Col>
        </Row>
        <div>
          <Row class="list">
            <Col span='24'>
              <input type="text" placeholder="账号" v-model="userName">
            </Col> 
          </Row>
          <Row class="list">
            <Col span='18'>
              <input type="text" placeholder="密码" v-model="password">
            </Col>
            <Col span='4'>
              <template>
                <i-Switch size="large">
                  <span slot="open">abc</span>
                  <span slot="close">***</span>
                </i-Switch>
              </template>
            </Col> 
          </Row>
          <Row class="list">
            <!-- <Col span='4'>验证码</Col>  -->
            <Col span='14'>
              <input type="text" placeholder="验证码" v-model="catpcha">
            </Col>
            <Col span='7'>
              <img :src="json.code" alt="">
            </Col>
          <Col span='3'>
           <Row>
               <Col span="24" class="ch">看不清</Col>
               <p class="change ch" @click="change">换一张</p>
           </Row>
          </Col>
          </Row>
        </div>
            <p class="massage">温馨提示：未注册过的账号，登录时将自动注册</p>
            <p class="massage">注册过的用户可凭账号密码登录</p>
            <button class="btn" @click="send">登录</button>
            <router-link to='/reset'>
              <p class="ch ele-p">重置密码？</p>
            </router-link>
     </div>
        
    </div>
</template>

<script>
export default {
  data (){
    return{
        json:[],
        catpcha:"",
       userName:'',
       password:''
    }
  },
  
  created(){
    this.$Axios.post('https://elm.cangdu.org/v1/captchas').then(data => {
        // console.log(data.data)
        this.json=data.data
    })
  },
  methods:{
      change(){
         this.$Axios.post('https://elm.cangdu.org/v1/captchas').then(data => {
          // console.log(data.data)
          this.json=data.data
        })
      },
      send(){
         this.$ajax.ajax({
            type:'post',
            url:'/Api/mmm',
            data:{
              user:this.userName,
              pass:this.password
            }
        }).then((data)=>{
          console.log(111);
        })
      }
  },
}
</script>

<style>
/* .body{
    background-color: #F2F2F2;
} */
/* .html{
    background-color: gainsboro;
} */
   .header{
      background-color: #287BE2;
      color:white;
      padding:15px 10px;
      font-size:18px;
   }
   .list{
       padding: 5px 10px;
       border-bottom: 1px solid gainsboro;
   }
   .list input{
       padding: 10px 10px;
       font-size:16px;
       border:none;
       outline: none;
   }
   .change{
       color:#287BE2;
   }
   .ch{
       font-size: 16px;
   }
   .ele-p{
     margin: 10px;
     text-align: right;
   }
   .massage{
       color:red;
       font-size: 15px;
       margin: 5px 5px 10px;
   }

   .btn{
       display: block;
       border:none;
       background-color: #42D552;
       padding:14px 170px;
       border-radius: 3px;
       color:white;
       margin: 0 auto;
       font-size: 18px;
   }
   .back{
     color:white;
   }
</style>
