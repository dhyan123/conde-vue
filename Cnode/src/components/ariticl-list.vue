<template>
  <div >
     <div class="articl-list" v-for="item in this.$store.state.list">
        <Row type="flex">
          <i-col :xs="3" :sm="3" :md="2" :lg="2"><Avatar icon="person" :src='item.author.avatar_url'  /> </i-col>
          <i-col :xs="4" :sm="4" :md="2" :lg="2">
          <Tag checkable :color="getTabColor(item)" >
           {{getTab(item) }}
          </Tag>
        </i-col>
        <i-col :xs="14" :sm="14" :md="14" :lg="14"><router-link :to="{ name: 'details', params: { id: item.id }}">{{item.title}}</router-link></i-col>
        <i-col :xs="0" :sm="0" :md="5" :lg="5"">发表时间：{{formatDate(item.create_at)}}</i-col>
        </Row>
       
     </div>
     <div class="page">
      <Page  @on-change="change" ></Page>
     </div>
     
  </div>
                   
                  
                   
                
               
            
</template>

<script>
import Page from './page'
 export default {
     components:{
        Page  
     },
       methods:{
        getTab:(details)=>{
      if(details.good == true )return '精华';
    if(details.tab==='share')return '分享';
    if(details.tab==='ask') return '问答';
    if(details.tab==='job') return '招聘';
     if(details.tab==='dev') return '客户端测试';
     else return all;
  },
   getTabColor:(item)=>{
    if(item.good == true )return 'red';
    if(item.tab==='share' )return 'magenta';
    if(item.tab==='ask') return 'green';
   if(item.tab==='dev') return '#999';
      if(item.tab==='job') return '#46ddf1';
    else return red
  },
        change: function (page) {
              this.$store.dispatch('getListAction', {
                pageNum: page
            })
        },
         formatDate(date){
          if(date){
            return  date.split('T')[0]
          }
        }, 

        
      },
    }
</script>
<style>
.page{margin:20px}
</style>