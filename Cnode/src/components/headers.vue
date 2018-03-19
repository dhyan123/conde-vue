<template>
  <div style="border-bottom:2px solid #eee;position:relative;z-index:99999 ">
    <Row>
        <i-col :xs="6" :sm="6" :md="6" :lg="6" >
         <h1 class="header-icon">
         <router-link to='/'>Vue</router-link>
         </h1>
        </i-col>
        <i-col :xs="0" :sm="0" :md="18" :lg="18" >
        <div class="menu">
         <Menu  :theme="theme1" active-key="1"  mode="horizontal" :name="name"  >
            <MenuItem name="1"><router-link to='/'> 首页</router-link></MenuItem>
             <MenuItem name="5">
            <div v-if="!this.$store.getters.islogin">
             <router-link to='/login'> 登录</router-link>
            </div>
            <div v-else="this.$store.state.userInfo">
             <router-link to='/login'> 登出</router-link>
            </div>
            </MenuItem>
           
         </Menu>
         </div>
        </i-col>
        <i-col :xs="6" :sm="6" :md="0" :lg="0" class="pho-icon" >

     <Dropdown>
        <a href="javascript:void(0)" class="icon"> 
            <Icon type="navicon" size="40"></Icon>
        </a>
        <Dropdown-menu slot="list">
            <Dropdown-item divided>
            <router-link to='/'> 首页</router-link>
            </Dropdown-item>
            <Dropdown-item >
             <div v-if="!this.$store.getters.islogin">
             <router-link to='/login'> 登录</router-link>
            </div>
            <div v-else="this.$store.state.userInfo">
             <router-link to='/login'> 登出</router-link>
            </div>
            </Dropdown-item>
           
        </Dropdown-menu>
    </Dropdown>
    </i-col>
    </Row>
          
  </div>
</template>
<script>
import axios from 'axios'
    export default {
       
        data () {
            return {
                 name:name,
                theme1: 'light',
                userContent:''
            }
        },
         methods:{
        logout(){
            localStorage.clear()
          window.location.reload()
          this.$router.replace({ path: '/' })
        }
    },
    beforeCreate(){
        if(localStorage.getItem("data")){
            this.$store.state.userInfo=JSON.parse(localStorage.data)
            axios.get('https://cnodejs.org/api/v1/user/' + this.$store.state.userInfo.loginname).then((response) => {
              this.userContent = response.data.data 
            })
        }
    },
    }
</script>

<style>
.header-icon{   
    text-align: center;
    cursor: pointer;
    margin: 0;
    padding-bottom:2px;
    line-height:56px;
  
}
.menu{
    float:right;
     text-align:right;
     height:59px
 }
 .pho-icon{
     float:right;
     margin-top:10px
 }
.ivu-row{
    z-index:99992 !important
}
.ivu-dropdown-item-divided{
   border-top:none  !important 
}
</style>
