<template>
  <div id="play">
    <el-container>
      <el-header>
        <web-nav></web-nav>
      </el-header>
      <el-row>
        <el-col :xl="22" :lg="22" :push="ajust_body_width()" :md="24" :sm="24" :xs="24">
          <el-main>
            <el-row>
              <el-col :xl="19" :lg="19" :md="24" :sm="24" :xs="24">
                <el-select v-model="parse_url" placeholder="请选择" style="margin-top: 60px" size="mini" @change="changeSElect">
                  <el-option
                    v-for="item in options"
                    :key="item.label"
                    :label="item.label"
                    :value="item.value">
                  </el-option>
                </el-select>
           <iframe id="WANG" scrolling="no" allowfullscreen="true" frameborder = "0" width="100%" height="600px"
                      style="background: #000000"
                      :src="this.parse_url+ this.play_url">
              </iframe>
                <!--      上面为视频播放部分      -->
                <div class="video_letter">
                  <el-card class="box-card">
                    <h1  style="font-weight: 400">{{video_information.videoName}} &nbsp; <span style="font-size: 32px;color: #ff5c38">{{video_information.score}}</span></h1>
                    <p class="film_type_class"><span>{{video_information.region}}</span> <span>{{video_information.yearG}} &nbsp;</span>
                      <span v-for="item in video_information.videoCategories" :key="item.id">{{item.categorySubType}} &nbsp;</span></p>
                  </el-card>
                </div>
                <!--       以上为视频信息         -->
                <el-card class="box-card" style="margin-top: 30px">
                  <div class="option_head">
                    <h3 style="font-weight: 400"><i class="el-icon-notebook-2"></i>  剧集</h3>
                  </div>
                  <div>
                    <el-row ><el-col :xl="3" :lg="3" :md="4" :sm="6" :xs="6" v-for="item in video_information.episodes" :key="item.episodesNum">
                      <el-button size="small" @click="selectEpisodes(item)"  plain style="margin-top: 10px;width: 62.82px">第{{item.episodesNum}}集</el-button>
                    </el-col></el-row>
                  </div>
                </el-card>
                <!--       上面为选集部分       -->
                <el-card class="box-card intro_part" style="margin-top: 30px">
                  <div class="intro_head">
                    <h3 style="font-weight: 400"><i class="el-icon-notebook-2"></i>  剧情介绍</h3>
                  </div>
                  <div class="intro_detail_content">
                    <p><span :style="{display: simple_content}">显示内容</span>
                      <span :style="{display: detail_content}">细节内容</span>
                      <a :style="{display:simple_content}" href="javascript:;" @click="intro_detail_show()">详情<i class="el-icon-arrow-down"></i></a>
                    </p>
                  </div>
                </el-card>
                <!--        上面为剧情介绍部分        -->

                <div class="recommend_order_you">
                  <el-card class="box-card">
                    <div slot="header" class="clearfix">
                      <span>为你推荐</span>
                      <el-button @click="change_batch" style="float: right; padding: 3px 0" type="text">换一波</el-button>
                    </div>
                    <el-row :gutter="20">
                      <el-col :xl="4" :lg="4" :md="6" :sm="8" :xs="8" v-for="item in recommend_video" :key="item.id">
                        <el-card :body-style="{ padding: '0px',margin: '0px', position: 'relative',top: '-20px'}">
                          <router-link :to="{path: '/iPlayer', query: {id: item.id, category}}">
                            <div class="bg_div_image" :style="{backgroundImage: 'url('+ item.imgUrl + ')'}">
                            <span style="color: #FFFFFF;font-size: 12px">剧集</span>
                          </div>
                          </router-link>
                          <div style="padding: 14px;text-align: center">
                            <router-link :to="{path: '/iPlayer', query: {id: item.id,category: category}}">
                              <el-scrollbar class="page-component__scroll">
                              <span style="white-space: nowrap">{{item.videoName}}</span><br>
                              </el-scrollbar>
                            </router-link>
                            <el-scrollbar class="page-component__scroll">
                              <span style="white-space: nowrap">{{item.performer}}</span>
                            </el-scrollbar>
                          </div>
                        </el-card>
                      </el-col></el-row>
                  </el-card>
                </div>
                <!--         以上为推荐部分     -->
              </el-col>
              <el-col :xl="5" :lg="5" class="hidden-md-and-down">
                <div class="Recommended_list_2" style="margin-top: 25px">
                  <el-card class="box-card" shadow="never" :body-style="{padding: 0}">
                    <div slot="header" class="clearfix">
                      <span>最近热门</span>
                    </div>
                    <el-card class="box-card" v-for="item in high_score_video" :key="item.id" >
                      <el-row>
                        <el-col :xl="4" :lg="4">
                          <router-link :to="{path: '/iPlayer', query: {id : item.id,category: category}}">
                          <div style="display: block" class="bg_div_image" :style="{backgroundImage: 'url('+ item.imgUrl + ')'}"></div>
                          </router-link>
                        </el-col>
                        <el-col :xl="20" :lg="20">
                          <div  class="text item" style="margin-left: 20px">
                            <router-link :to="{path: '/iPlayer', query: {id : item.id,category: category}}">
                              <el-scrollbar class="page-component__scroll">
                              <span style="white-space: nowrap">{{item.videoName}}</span>
                              </el-scrollbar>
                            </router-link>
                            <el-scrollbar class="page-component__scroll">
                           <span style="white-space: nowrap;font-size: 12px;margin-top: 20px">{{item.performer}}</span>
                            </el-scrollbar>
                          </div>
                        </el-col>
                      </el-row>
                    </el-card>
                  </el-card>
                </div>
              </el-col>
            </el-row>
          </el-main>
        </el-col>
      </el-row>
      <el-footer height="200">
        <web-footer>ddfdsfs</web-footer>
      </el-footer>
    </el-container>
  </div>
</template>

<script>
// eslint-disable-next-line no-unused-vars
import header from '../components/Header'
// eslint-disable-next-line no-unused-vars
import footer from '../components/footer'
export default {
  data () {
    return {
      video_information: [],
      options: [{ label: '飞飞1号', value: 'http://jx.du2.cc/?url=' },
        { label: '飞飞2号', value: 'http://jx.618ge.com/?url=' },
        { label: '飞飞3号', value: 'http://vip.jlsprh.com/?url=' },
        { label: '飞飞4号', value: 'http://jx.598110.com/?url=' },
        { label: '飞飞5号', value: 'http://jx.idc126.net/jx/?url=' },
        { label: '飞飞6号', value: 'http://jx.drgxj.com/?url=' }],
      body_padding: '20px',
      body_width: document.body.clientWidth,
      flim_list: [{ id: 1, name: '热血少年', performer: '黄子韬,张雪迎,刘宇', image: 'http://cn2.3days.cc/1571767207734264.jpeg' }],
      value: 4.5,
      parse_url: 'http://jx.idc126.net/jx/?url=',
      font_size: '14px', // 字体大小改变
      simple_content: 'inline', // 简略剧情介绍
      detail_content: 'none', // 细节剧情介绍
      play_id: '',
      play_url: '',
      recommend_video: [],
      change_recommend: 0,
      high_score_video: [],
      category: ''
    }
  },
  methods: {
    ajust_body_width () {
      const width = this.body_width
      console.log(width)
      if (width < 922) {
        this.body_padding = 0 + 'px'
        this.font_size = '12px'
        return 0
      }
      this.body_padding = 20 + 'px'
      this.font_size = '14px'
      return 1
    },
    intro_detail_show () {
      this.simple_content = 'none'
      this.detail_content = 'inline'
    },
    changeSElect () {
      console.log(this.parse_url)
    },

    getPlay_id () {
      this.play_id = this.$route.query.id
    },
    getVideoPlayUrl () {
      // eslint-disable-next-line no-undef
      axios.get('/pub/video/findVideoPlay', {
        params: {
          id: this.play_id
        }
      }).then((res) => {
        this.video_information = res.data
        this.play_url = this.video_information.episodes[0].url
        console.log(this.video_information)
        this.category = this.video_information.videoCategories[0].categoryName
      })
    },
    selectEpisodes (item) {
      this.play_url = item.url
    },
    change_batch () {
      this.change_recommend = this.change_recommend + 12
      if (this.change_recommend > 48) {
        this.change_recommend = 0
      }
      this.getRecommendVideo()
    },
    get_high_score () {
      // eslint-disable-next-line no-undef
      axios.get('/pub/video/highScore', {
        params: {
          size: 12,
          category: this.$route.query.category
        }
      }).then((res) => {
        this.high_score_video = res.data
      })
    },
    getRecommendVideo () {
      // eslint-disable-next-line no-undef
      axios.get('/pub/video/recommend', {
        params: {
          index: this.change_recommend,
          category: this.$route.query.category
        }
      }).then((res) => {
        this.recommend_video = res.data
        console.log(res.data)
      })
    }
  },
  components: {
    // eslint-disable-next-line vue/no-unused-components
    'web-nav': header,
    // eslint-disable-next-line vue/no-unused-components
    'web-footer': footer
  },
  created () {
    this.getPlay_id()
    this.getVideoPlayUrl()
    this.getRecommendVideo()
    this.get_high_score()
  },
  watch: {
    $route () {
      this.play_id = this.$route.query.id
      this.getVideoPlayUrl()
      this.getRecommendVideo()
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
  .bg_div_image{
    width: 100%; height: 100%; padding-top: 140%;
    background-image: url(http://imgwx3.2345.com/dypcimg/star/img/a/8/24330/photo_192x262.jpg?1509946884);
    background-repeat: no-repeat;
    background-size: 100% 100%;
    -moz-background-size: 100% 100%;text-align: left;
  }
  .text-mute{
    color: #999999;
  }
  .line_space{
    display: inline-block;
    margin-left: 12px;
    margin-right: 12px;
    width: 1px;
    height: 14px;
    vertical-align: -2px;
  }
  /* 以下为为你推荐部分 */
  .recommend_order_you{
    margin-top: 30px;
  }
  .film_type_class>span{
    color: #888;
  }
</style>
