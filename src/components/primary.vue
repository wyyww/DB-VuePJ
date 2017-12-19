<template>
  <div class="content">
      <div class="article">
          <div class="screening" @click="resourceGet()">
            <div class="screening-hd">
              <div class="ui-slide-control">
                <span class="prev-btn">
                  <a href="">往前翻</a>
                </span>
                <span class="next-btn">
                  <a href="">往后翻</a>
                </span>
              </div>
              <div class="slide-tip">
                <span class="ui-slide-tip">5</span>
                /
                <span class="ui-slide-max">6</span>
              </div>
              <h2>
                正在热映
                <span><a href="#" >全部正在热映>></a></span>
                <span><a href="#" >即将上映>></a></span>
              </h2>
            </div>
            <div class="screening-bd">
              美丽的图片
            </div>
          </div>
      </div>
      <div class="slider">
        电影口碑
      </div>
  </div>
</template>
<script>
export default {
  name: "primary",
  data() {
    return {};
  },
  methods: {
    resourceGet() {
      var that = this;
      that.$http.jsonp("https://api.douban.com/v2/movie/in_theaters").then(
        response => {
          console.log(response);
        },
        response => {
          console.log("error" + response);
        }
      );
    }
  }
};
</script>

<style lang="less" scoped>
.content {
  position: relative;
  padding: 35px 15%;
  background-color: #fff;

  .article {
    background-color: #808080;
    width: 60%;
    float: left;
    margin-right: 8%;

    .screening {
      margin-bottom: 36px;

      h2 {
        font-size: 16px;
        color: #111;
        padding-bottom: 10px;
        border-bottom: 1px solid #eaeaea;
        margin-bottom: 18px;
      }

      .ui-slide-control {
        float: right;
        margin: 5px 0 0 15px;
      }
      .slide-tip {
        float: right;
        line-height: 30px;
        color: #666;
      }
    }
  }

  .slider {
    background-color: #f00;
    overflow: hidden;
  }
}
</style>
