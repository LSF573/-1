<template>
    <div>
        <Row class="header">
          <router-link to="/">
            <Col span='10' class="back"><</Col>
          </router-link>
            <Col span='14'>重置密码</Col>
        </Row>
        <div>
          <Row class="list">
            <Col span='24'>
              <input type="text" placeholder="账号" v-model="number">
            </Col> 
          </Row>
          <Row class="list">
            <Col span='24'>
              <input type="text" placeholder="旧密码" v-model="oldPass">
            </Col> 
          </Row>
          <Row class="list">
            <Col span='24'>
              <input type="text" placeholder="请输入新密码" v-model="newPass">
            </Col> 
          </Row>
          <Row class="list">
            <Col span='24'>
              <input type="text" placeholder="请确认密码" v-model="confirm">
            </Col>
          </Row>
          <Row class="list">
            <!-- <Col span='4'>验证码</Col>  -->
            <Col span='14'>
              <input type="text" placeholder="验证码">
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
            <button class="btn" @click='sendReset'>确认修改</button>
     </div>
        
    </div>
</template>

<script>
export default {
  data (){
    return{
        json:[],
        number:'',
        oldPass:'',
        confirm:'',
        newPass:"",
    }
  },
  created(){
    this.$Axios.post('https://elm.cangdu.org/v1/captchas').then(data => {
        console.log(data.data)
        this.json=data.data

    })
  },
  methods:{
      change(){
         this.$Axios.post('https://elm.cangdu.org/v1/captchas').then(data => {
          console.log(data.data)
          this.json=data.data
        })
      },
      sendReset(){
         this.$ajax.ajax({
            type:'post',
            url:'/Api/mmm',
            data:{
              user:this.number,
              oldPass:this.oldPass,
              newPass:this.newPass,
              confirm:this.confirm
            }
        }).then((data)=>{
          console.log(data);
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
       margin-top:20px;
   }
   .back{
    color:white;
   }
</style>
