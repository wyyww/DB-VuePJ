<template>
  <div class="content">
      <div class="section">
        电影
      </div>
      <div class="slider" @click="resourceGet()">
        电影口碑
      </div>
  </div>
</template>
<script>

export default{
  name:"primary",
  data(){
    return{

    }
  },
  methods:{
    resourceGet(){
      var that = this;
      that.$http.jsonp('https://api.douban.com/v2/movie/in_theaters')
       .then(response =>{
         console.log(response);
       },response=>{
         console.log("error" + response);
       })

    }
  }
}


</script>

<style lang="less" scoped>
.content {
  position: relative;
  padding: 35px 15%;
  background-color: #fff;

  .section {
    background-color: #808080;
    width: 60%;
    float: left;
    margin-right: 8%;
    border:1px solid #fff;
   
  }

  .slider{
    background-color: #f00;
    overflow: hidden;
  }
}
</style>
