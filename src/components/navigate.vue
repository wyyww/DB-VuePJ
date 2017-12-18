
<template>
    <div class="navigate">
        <div class="header">
            <ul class="header-left">
                <li>豆瓣</li><li>读书</li><li>电影</li><li>音乐</li><li>同城</li><li>小组</li><li>阅读</li> <li>FM</li><li>市集</li><li>更多</li>
            </ul>
            <ul class="header-right">
                <li>下载豆瓣客户端</li><li>登录</li><li>注册</li>   
            </ul>
        </div>
        <div class="retrieve">
            <div class = "movie-search">
                <div class="nav-logo">
                     <a  href="https://movie.douban.com">
                        <img src="../../static/images/logo.png"/>
                     </a>
                </div>
                <div class="nav-search">
                    <form action="http://www.wglyy.me">
                        <fieldset>
                            <legend>搜索</legend>
                            <label for="inp-query"></label>
                            <div class="inp">
                                <input id="inp-query" name="search_text" size="20" maxlength="60" placeholder="搜索电影、电视剧、综艺、影人" autocomplete="off" />
                            </div>
                            <div class="inp-btn">
                                <input type="submit" value="搜索" />
                            </div>
                        </fieldset>
                    </form>
                </div>
            </div>
            <div class="nav-items">
                <ul>
                    <li><a href="#" > 影讯&购票</a></li>
                    <li><a href="#" >选电影</a></li>
                    <li><a href="#" >排行榜</a></li>
                    <li><a href="#" >分类</a></li>
                    <li><a href="#" >影评</a></li>
                    <li><a href="#" >2017年度榜单</a></li>
                    <li><a href="#" >2017观影报告</a></li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
</script>

<style lang="less" scoped>
.navigate {
  .header {
    background-color: #545652;
    height: 28px;
    position: relative;
    color: #fff;
    font-size: 12px;
    overflow: hidden;

    .header-left {
      float: left;
      li {
        padding: 5px 12px;
        float: left;
      }
    }

    .header-right {
      float: right;
      li {
        padding: 5px 10px;
        float: left;
      }
    }
  }

  .retrieve {
    padding: 15px 15%;
    background-color: #f0f3f5;
    position: relative;
    overflow: hidden;

    .movie-search {
      padding: 10px 0;
      .nav-logo {
        float: left;
        padding-right: 30px;
        img {
          width: 120px;
          height: 33px;
        }
      }
    }
    .nav-search {
      border: none;
      width: 882px;
      height: 34px;
      padding-top: 10px;

      fieldset {
        border: none;
        padding: 0;
        margin: 0;
        position: static;
        legend {
          display: none;
        }
      }
      div.inp {
        border: none;
        width: 470px;
        float: left;
        input {
          width: 100%;
          text-align: left;
          padding: 3px 0 3px 10px;
          background-color: #fff;
          outline: none;
        }
      }

      div.inp-btn {
        position: relative;
        left: -1px;
        width: 50px;
        height: 50px;
        zoom: 1;
        overflow: hidden;
        input {
          background: url(//img3.doubanio.com/dae/accounts/resources/321e246/movie/assets/nav_mv_bg.png?s=1)
            no-repeat 0 -40px;
        }
      }
    }
  }

  .nav-items {
    border: none;
    font-size: 15px;
    color: #2277aa;

    ul li {
      float: left;
      padding: 10px 20px;

      a {
        text-align: center;
        text-decoration: none;
      }

      a:hover{
          background-color:#2277aa;
      }
    }
  }
}
</style>