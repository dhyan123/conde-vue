<template>
  <div class="center">
     
      <div  >
      <div class="info-top">
        <div class="top-title">
          <span v-show="this.$store.state.details.top">置顶</span>
          <span v-show="this.$store.state.details.good">精华</span>
          <span v-show="this.$store.state.details.tab === 'share'">分享</span>
          <span v-show="this.$store.state.details.tab === 'ask'">回答</span>
          <span v-show="this.$store.state.details.tab === 'job'">招聘</span>
          {{this.$store.state.details.title}}
        </div>
        <div class="change">
          <span>发布于：{{formatDate(this.$store.state.details.create_at)}}</span>
          <span>作者：{{this.$store.state.details.author.loginname}}</span>
          <span>{{this.$store.state.details.visit_count}}次浏览</span>
          <span>来自 {{this.$store.state.details.tab ==='share' ? '分享': this.$store.state.details.tab=== 'ask'? '回答' : '招聘'}}</span>
        </div>
      </div>
      <div v-html="this.$store.state.details.content"  ></div>
      <div class="panel">
        <div class="header-title"><span>{{this.$store.state.details.reply_count}}回复</span></div>
       <ul class="re-li"> 
          <li v-for="(item,index) in this.$store.state.details.replies" :key="index" >
            <div class="content-author">
              <div class="demo-avatar">
                  <Avatar :src="item.author.avatar_url" />
              </div>
              <div class="info">
                  <span>{{item.author.loginname}}</span>
                  <span>{{item.index+1}}</span>
                  <span>{{formatDate(item.create_at)}}</span>
              </div>
             
              <div class="action">
                <span @click="ups(item.id)">
                  <i v-if="!iconShow"><Icon type="ios-heart-outline"></Icon></i>
                  <i v-else><Icon type="ios-heart"></Icon></i>
                  {{item.ups.length}}</span>
              </div>
            </div>
            <div class="content-reoly" v-html="item.content">
            </div>
            
          </li>
        </ul>
        
      </div>

      </div>
  </div>
</template>


<script>
import axios from 'axios'
export default {
  
  data(){
    return {
       iconShow:false,
      commonText:'',
      currentNum:'',
      replyText:'',
      id:this.$route.params.id,
    }
  },
  created () {

  },

    methods:{
      formatDate(date){
          if(date){
            return  date.split('T').join(' ').split('.')[0]
          }
        }, 
         ups(upId){
         
          axios.post(`/api/v1/reply/${upId}/ups`,{
            accesstoken: this.$store.state.userInfo.token,
          }).then((response)=>{
           
           
            if(response.data.success){
              
              alert('点赞成功')
              window.parent.frames.location.reload()
            }
          })
        },
      
      
    },
     beforeCreate(){
      
      this.$store.dispatch('getDetailsAction',{id:this.$router.currentRoute.params.id})
     
  },
   
}
</script>

<style>
p{
  margin: 6px 0
}
.markdown-text{width:100%}
.markdown-text img{width:100%}
.center{width:80%; margin:0 auto}
.info-top{
    padding: 10px;
    border-radius: 3px 3px 0 0;
  }
  .top-title{
    font-size: 22px;
    font-weight: 700;
    margin: 8px 0;
    display: inline-block;
    vertical-align: bottom;
    width: 75%;
    line-height: 130%;
  }
  .top-title span{
    background: #80bd01;
    padding: 2px 4px;
    border-radius: 3px;
    -webkit-border-radius: 3px;
    -moz-border-radius: 3px;
    -o-border-radius: 3px;
    color: #fff;
    font-size: 12px;
  }
  .panel{text-align:left}
  .header-title{
     font-size: 14px;
     background:#eee;
     line-height:30px;
    margin-bottom:10px
  }
  .panel{text-indent:2em}
  .demo-avatar{float:left}
  .demo-avatar img{float:left}
  .info{float:left; margin-top:10px}
  .content-author .action{ float:right; margin-top:10px}
  .content-author{clear:both; margin-bottom:30px}
  .content-reoly{ line-height:20px; padding-top:10px}
  .re-li li{ padding:10px 0;border-bottom:1px solid #ddd}
  .rightInfo{ margin-top:10px; float:left}
</style>