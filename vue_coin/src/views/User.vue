<template>
  <div class="user">
    <div class="box" v-for="(user,index) in users" :key="index">
      <h2>{{user.first_name}}</h2>
      <img :src='user.avatar'>
    </div>
    <ul class="paging">
      <li v-for="(page, index) in totalPage" :key="index" @click="movePage(page)">{{page}}</li>
    </ul>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      users:null,
      totalPage:null,
      pageNum:1
    };
  },
  methods:{
    fetchData(pageNum){
      axios
        .get('https://reqres.in/api/users?page=' + pageNum)
        .then(res=>{
          this.users = res.data.data;
          this.totalPage = res.data.total_pages;
          console.log(this.users[0].avatar);
        })
        .catch(err=>{
          console.log(arr);
        });
    },
    movePage(page){
    this.fetchData(page);
  }
  },
  created(){
    this.fetchData(this.pageNum);
  }
};
</script>

<style>
* {
  box-sizing:border-box;
}
.user {
  width:1000px;
  height:700px;
  margin:0 auto;
}
.box {
  width:300px;
  height:300px;
  border:1px solid black;
  display:inline-block;
}
.box > img {
  width:128px;
  height:128px;
}
.paging {
  list-style:none;
}
.paging > li {
  width:15px; height:15px;
  border:1px solid coral;
  display:inline-block;
  margin-left:10px;
  cursor: pointer;
}
</style>

