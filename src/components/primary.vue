<template>
  <div class="content">
      <div class="article">
          <div class="screening" >
            <div class="screening-hd">
              <div class="ui-slide-control">
                <span class="prev-btn">
                  <a href="" class="btn-prev"></a>
                </span>
                <span class="next-btn">
                  <a href="" class="btn-next"></a>
                </span>
              </div>
              <div class="slide-tip">
                <span class="ui-slide-tip">5</span>
                /
                <span class="ui-slide-max">6</span>
              </div>
              <h2>
                正在热映
                <span><a @click="moreMovie()" href="#" >全部正在热映》</a></span>
                <span><a @click="mv_l_w()" href="#" >即将上映》</a></span>
              </h2>
            </div>
            <div class="screening-bd">

                <ul class="ui-slide-content">
                  <li class="ui-slide-item" v-for="item in items" :key="item.id">
                    <ul class>
                      <li class="poster">
                        <a href="#"  >
                            <!-- <img src={{item.images.small}} /> -->
                        </a>
                      </li>
                      <li class="title">
                        <a href="#" >  {{item.title}}</a>
                       
                      </li>
                      <li class="rating">
                        <span class="rating-star"></span>
                        <span class="subject-rate">{{item.rating.average}}</span>
                      </li>
                      <li class="ticket_btn">
                        <span>
                          <a href="#" >选座购票</a>
                        </span>
                      </li>
                    </ul>
                  </li>
                </ul>

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
    return {
      items: []
    };
  },
  created: function() {
    var that = this;
    that.$http.jsonp("https://api.douban.com/v2/movie/in_theaters").then(
      response => {
        console.log(response.body.subjects);
        that.items = response.body.subjects;
      },
      response => {
        console.log("error" + response);
      }
    );
  },
  computed: {},
  methods: {}
};
</script>

<style lang="less" scoped>
.content {
  position: relative;
  padding: 35px 15%;
  background-color: #fff;

  .article {
    // background-color: #808080;
    width: 60%;
    float: left;
    margin-right: 8%;

    .screening {
      margin-bottom: 36px;
      .screening-hd {
        h2 {
          font-size: 16px;
          color: #111;
          font-weight: normal;
          padding-bottom: 10px;
          border-bottom: 1px solid #eaeaea;
          margin-bottom: 18px;

          span {
            margin-left: 10px;
            font-size: 13px;

            a:visited {
              color: #666699;
              text-decoration: none;
            }

            a:link {
              color: #37a;
              text-decoration: none;
            }
          }
        }

        .ui-slide-control {
          float: right;
          margin: 5px 0 0 15px;

          .btn-prev {
            display: block;
            float: left;
            width: 16px;
            height: 16px;
            margin-right: 5px;
            cursor: pointer;
            background: url("../../static/images/switch-to-left.png") no-repeat;
          }

          .btn-next {
            display: block;
            float: left;
            width: 16px;
            height: 16px;
            margin-right: 5px;
            cursor: pointer;
            background: url("../../static/images/switch-to-right.png") no-repeat;
          }
        }
        .slide-tip {
          float: right;
          line-height: 30px;
          color: #666;
          font-size: 12px;
        }
      }

      .screening-bd {
        overflow: hidden;
        position: relative;
        height: 270px;

        .ui-slide-content {
          position: absolute;
          white-space: nowrap;

          .ui-slide-item {
            font-size: 12px;
            text-align: center;
            margin-right: 25px;
            width: 115px;
            height: 270px;
            overflow: hidden;

            display: inline-block;
            vertical-align: top;
            letter-spacing: normal;
            word-spacing: normal;
          }
        }
      }
    }
  }

  .slider {
    background-color: #f00;
    overflow: hidden;
  }
}
</style>
