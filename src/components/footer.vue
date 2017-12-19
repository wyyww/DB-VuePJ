<template>
  <div class="footer">
      <div class="footer-extra">
          <span class="fleft">
                © 2005－2017 douban.com, all rights reserved 北京豆网科技有限公司
          </span>
          <a href="#" style="display:none" ></a>
         <span class="fright">
             <a href="#" >关于豆瓣 .</a>
             <a href="#">在豆瓣工作 . </a>
             <a href="#">联系我们 . </a>
            <a href="#">免责声明 . </a>
            <a href="#">帮助中心 . </a>
            <a href="#">移动应用 . </a>
            <a href="#">豆瓣广告 . </a>
         </span>
      </div>
  </div>
</template>



<script>
export default {};
</script>

<style lang="less" scoped>
.footer {
  position: fixed;
  bottom: 0;
  font-size: 12px;
  width: 70%;
  margin: 0 15%;
  padding: 5px 0;
  border-top: dotted #808080 1px;

  .fleft {
    color: #808080;
    text-decoration: none;
    float: left;
    cursor: pointer;
  }

  .fright {
    float: right;
    a {
      cursor: pointer;
    }
    a:visited {
      color: #666699;
      text-decoration: none;
    }
    a:link {
      color: #37a;
      text-decoration: none;
    }
    a:hover{
        background-color: #37a;
    }
  }
}
</style>


