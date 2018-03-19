<template>
  <div>
    <Row>
    <i-col :xs="0" :sm="0" :md="5" :lg="5"  >
          <Menu :theme="theme2" mode="vertical" active-name="1">
           <MenuItem  name="1" > <div @click="all">全部</div></MenuItem>
           <MenuItem name="2" ><div @click="good">精华</div></MenuItem>
          <MenuItem name="3" ><div @click="ask">问答</div></MenuItem>
          <MenuItem name="4" ><div @click="share">分享</div></MenuItem>
          <MenuItem name="5" ><div @click="job">招聘</div></MenuItem>
          <MenuItem name="6" ><div @click="ces">客户端测试</div></MenuItem>
        </Menu>
    </i-col>  

    <i-col :xs="24" :sm="24" :md="0" :lg="0"  >
         <Menu :theme="theme2" mode="horizontal" active-name="1">
          <MenuItem  name="1" > <div @click="all">全部</div></MenuItem>
           <MenuItem name="2" ><div @click="good">精华</div></MenuItem>
          <MenuItem name="3" ><div @click="ask">问答</div></MenuItem>
          <MenuItem name="4" ><div @click="share">分享</div></MenuItem>
          <MenuItem name="5" ><div @click="job">招聘</div></MenuItem>
          <MenuItem name="6" ><div @click="ces">客户端测试</div></MenuItem>
        </Menu>
    </i-col>  
     <i-col :xs="24" :sm="24" :md="19" :lg="19">
       <articl-list  />
     </i-col>  
    </Row> 
          
  </div>
</template>
<script>

import ArticlList from './ariticl-list'
    export default {
        data () {
            return {
                theme2: 'light'
            }
        },
        components:{  
          ArticlList
        },
        methods:{
             all(){
             this.$store.commit('changeMenu',{tab:'all',good:false})
              this.$store.dispatch('getListAction')
            },
             good(){   
              this.$store.commit('changeMenu',{tab:'good',good:true})
               this.$store.dispatch('getListAction')
            },
             ask(){
              this.$store.commit('changeMenu',{tab:'ask',good:false})
              this.$store.dispatch('getListAction')
            },
             share(){
              this.$store.commit('changeMenu',{tab:'share',good:false})
              this.$store.dispatch('getListAction')
            },
            job(){
              this.$store.commit('changeMenu',{tab:'job',good:false})
              this.$store.dispatch('getListAction')
            },
            ces(){
              this.$store.commit('changeMenu',{tab:'dev'})
              this.$store.dispatch('getListAction')
            },
        },
        
     mounted(){
    
    this.$store.dispatch('getListAction')
  }
      
       
    }
</script>
<style>
.articl-list{
  line-height:60px;
  border-bottom:1px solid #ddd
}
.ivu-col{
  z-index:1
}
</style>


