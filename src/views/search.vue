<template>
<div id="search">
  <el-container>
    <el-header><web-nav></web-nav></el-header>
    <el-row><el-col :xs="22" :lg="22" :push="ajust_body_width()" :md="24" :sm="24" :xm="24">
      <el-main :style="{padding: body_padding}">
        <el-row :gutter="20">
    <el-col :xl="17" :lg="17" :md="24" :sm="24" :xs="24">
      <h3>搜索结果</h3>
        <div class="search_item" v-for="(item, index) in flim_list" :key="index" style="margin-top: 20px;line-height: 140%">
          <el-card :body-style="{ padding: '0px' }">
<!--            <img src="http://cn2.3days.cc/1571767207734264.jpeg" class="image" style="float: left;width: 30%">-->
           <el-row :gutter="20">
             <el-col :xl="4" :lg="4" :md="4" :sm="4" :xs="9" >
            <div class="bg_div_image" :style="{backgroundImage: 'url('+item.img_url+')'}"></div>
             </el-col>
             <el-col :xl="20" :lg="20" :md="20" :sm="20" :xs="15">
            <div class="film_detail"  >
              <h3 style="margin: 20px 0 10px" ><a>{{item.video_name}}</a></h3>
             <p><span class="text-mute">导演：</span>{{item.director}}</p>
             <p><span class="text-mute">演员：</span>{{item.performer}}</p>
             <p class="hidden-sm-and-down"><span class="text-mute">地区：</span>{{item.region}}</p>
              <p><el-button @click="go_play(item)" type="warning" size="small">点击播放</el-button>
<!--                <el-button size="small">查看详情</el-button>-->
              </p>
            </div>
           </el-col>
           </el-row>
          </el-card>
        </div>
    </el-col>
        </el-row>
      </el-main>
    </el-col></el-row>
    <el-footer height="200"><web-footer>asdasd</web-footer></el-footer>
  </el-container>
</div>
</template>

<script>
import header from '../components/Header'
import footer from '../components/footer'
export default {
  data () {
    return {
      body_padding: '20px',
      pageNo: 0,
      pageSize: 20,
      content: '',
      body_width: document.body.clientWidth,
      flim_list: [{ id: 1, video_name: '热血少年', performer: '黄子韬,张雪迎,刘宇', img_url: 'http://cn2.3days.cc/1571767207734264.jpeg' }],
      list_header_color: ['#ff4a4a', '#ff7701', '#ffb400', '#eee', '#eee', '#eee', '#eee'],
      list_color: ['#FFFFFF', '#FFFFFF', '#FFFFFF', '#333333', '#333333', '#333333', '#333333']
    }
  },
  methods: {
    ajust_body_width () {
      const width = this.body_width
      console.log(width)
      if (width < 922) {
        this.body_padding = 0 + 'px'
        return 0
      }
      this.body_padding = 20 + 'px'
      return 1
    },
    getSearchResult () {
      const content = this.$route.query.content
      // eslint-disable-next-line no-undef
      axios.get('pub/video/search', {
        params: {
          keywords: content,
          pageNo: this.pageNo,
          pageSize: this.pageSize
        }
      }).then((res) => {
        this.flim_list = res.data
        console.log(this.flim_list)
      })
    },
    go_play (item) {
      if (!item.category) {
        this.$router.push({
          path: '/film_player',
          query: {
            id: item.id
          }
        })
      } else {
        this.$router.push({
          path: '/iPlayer',
          query: {
            id: item.id,
            category: item.category
          }
        })
      }
    }
  },
  components: {
    // eslint-disable-next-line vue/no-unused-components
    'web-nav': header,
    // eslint-disable-next-line vue/no-unused-components
    'web-footer': footer
  },
  created () {
    this.getSearchResult()
  },
  watch: {
    $route () {
      this.getSearchResult()
    }
  }
}
</script>

<style lang="less" scoped>
  .el-header{
    background-color: #ffffff;
    color: #333;
    text-align: center;
    line-height: 60px;
  }
  .el-footer{
    background-color: #f8f8f8;
    color: #333;
    text-align: center;
    line-height: 50px;
  }
  .el-main {
    background-color: #ffff;
    color: #333;
  }
  .image {
    width: 100%;
    display: block;
  }
  .bottom {
    margin-top: 13px;
    line-height: 12px;
  }

  .button {
    padding: 0;
    float: right;
  }
  .clearfix:before,
  .clearfix:after {
    display: table;
    content: "";
  }

  .clearfix:after {
    clear: both
  }
  .text-mute{
    color: #999999;
  }
  .film_detail>p{
    font-size: 14px;
    margin: 10px 0 0;
  }
  .bg_div_image{
    width: 100%; height: 100%; padding-top: 140%;
    background-image: url(http://imgwx3.2345.com/dypcimg/star/img/a/8/24330/photo_192x262.jpg?1509946884);
    background-repeat: no-repeat;
    background-size: 100% 100%;
    -moz-background-size: 100% 100%;text-align: left;
  }

  .first_content_list>a{
    display: block;
    width: 70px;
    height: 106px;
    background-image: url('https://tu.tianzuida.com/pic/upload/vod/2019-11-26/201911261574759592.jpg');
    margin: 0;
    padding: 0;
    float: left;
  }
</style>
