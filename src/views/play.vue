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
          <div class="play_part" style="margin-top: 60px">
            <Xgplayer :config="config" @player="Player = $event"/>
            <div class="play_film_detail">
              <h1 style="font-weight: 400"><a>电影名</a></h1>
              <p :style="{fontSize: font_size}"><span class="text-mute">类型：</span><a href="#">导演名</a><span class="line_space"></span>
                <span class="text-mute">地区：</span>不详<span class="line_space"></span>
                <span class="text-mute">年份：</span>2017</p>
            </div>
          </div>
              <!--      上面为视频播放部分      -->
              <el-card class="box-card" style="margin-top: 30px">
                <div class="option_head">
                  <h3 style="font-weight: 400"><i class="el-icon-notebook-2"></i>  剧集</h3>
                </div>
               <div>
                 <el-row ><el-col :xl="3" :lg="3" :md="4" :sm="6" :xs="6" v-for="item in 42" :key="item">
                   <el-button size="small"  plain style="margin-top: 10px;width: 62.82px">第{{item}}集</el-button>
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
                    <el-button style="float: right; padding: 3px 0" type="text">换一波</el-button>
                  </div>
            <el-row :gutter="20">
              <el-col :xl="4" :lg="4" :md="6" :sm="8" :xs="8" v-for="item in flim_list" :key="item.id">
              <el-card :body-style="{ padding: '0px',margin: '0px', position: 'relative',top: '-20px'}">
                <!--                    <img src="http://imgwx3.2345.com/dypcimg/star/img/a/8/24330/photo_192x262.jpg?1509946884" class="image" style="z-index: -1">-->
                <div class="bg_div_image" >
                  <span style="color: #FFFFFF;font-size: 12px">演员</span>
                </div>
                <div style="padding: 14px;text-align: center">
                  <span>电影名</span><br>
                  <span>演员名</span>
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
                   <el-button style="float: right; padding: 3px 0" type="text">操作按钮</el-button>
                 </div>
                 <el-card class="box-card" v-for="item in flim_list" :key="item.id" >
                   <el-row>
                     <el-col :xl="4" :lg="4">
                   <a style="display: block" class="bg_div_image"></a>
                     </el-col>
                     <el-col :xl="20" :lg="20">
                   <div  class="text item" style="margin-left: 20px">
                     <a>{{item.name}}</a>
                     <el-rate
                       v-model="value"
                       disabled
                       show-score
                       text-color="#ff9900"
                       score-template="{value}">
                     </el-rate>
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
import Xgplayer from 'xgplayer-vue'
// eslint-disable-next-line no-unused-vars
import header from '../components/Header'
// eslint-disable-next-line no-unused-vars
import footer from '../components/footer'
export default {
  data () {
    return {
      config: {
        id: 'vs',
        url: 'http://api.jiexi.la/?url=https://v.youku.com/v_show/id_XNDE3MDE0MzIwOA==.html',
        playsinline: true,
        whitelist: [''],
        width: '600',
        height: '337',
        poster: 'https://t8.baidu.com/it/u=3571592872,3353494284&fm=79&app=86&size=h300&n=0&g=4n&f=jpeg?sec=1591597070&t=53c19e5fa312620dec66b721696734f0',
        autoplay: true,
        fluid: true,
        playbackRate: [0.5, 1, 1.5, 2],
        playNext: {
          urlList: [
            'url1',
            'url2',
            'url3'
          ]
        },
        danmu: {
          comments: [{
            duration: 15000,
            id: '2',
            start: 3000,
            txt: '长弹幕长弹幕长弹幕',
            mode: 'top'
          },
          {
            duration: 15000,
            id: '3',
            start: 4000,
            txt: '长弹幕长弹幕长弹幕',
            mode: 'bottom'
          },
          {
            duration: 15000,
            id: '4',
            start: 5000,
            txt: '长弹幕长弹幕长弹幕',
            mode: 'scroll'
          },
          {
            duration: 15000,
            id: '5',
            start: 8000,
            txt: '长弹幕长弹幕长弹幕',
            mode: 'scroll'
          }],
          area: { start: 0, end: 1 },
          closeDefaultBtn: false,
          defaultOff: false,
          panel: true
        },
        progressDot: [
          {
            time: 3,
            text: 'text1'
          },
          {
            time: 5,
            text: 'text2'
          },
          {
            time: 32,
            text: 'text3'
          },
          {
            time: 36,
            text: 'text4'
          }
        ],
        thumbnail: {
          pic_num: 44,
          width: 160,
          height: 90,
          col: 10,
          row: 10,
          urls: [
            '//s1.pstatp.com/cdn/expire-1-M/byted-player-videos/1.0.0/xgplayer-demo.mp4'
          ]
        },
        screenShot: true,
        download: true,
        pip: true,
        keyShortcut: 'on',
        closeVideoClick: true,
        closeVideoDblclick: true,
        closeVideoTouch: true,
        'x5-video-player-type': 'h5',
        'x5-video-player-fullscreen': 'true',
        'x5-video-orientation': 'landscape'
      },
      Player: null,
      body_padding: '20px',
      body_width: document.body.clientWidth,
      flim_list: [{ id: 1, name: '热血少年', performer: '黄子韬,张雪迎,刘宇', image: 'http://cn2.3days.cc/1571767207734264.jpeg' },
        { id: 2, name: '热血少年', performer: '黄子韬,张雪迎,刘宇', image: 'http://cn2.3days.cc/1571767207734264.jpeg' },
        { id: 3, name: '热血少年', performer: '黄子韬,张雪迎,刘宇', image: 'http://cn2.3days.cc/1571767207734264.jpeg' },
        { id: 4, name: '热血少年', performer: '黄子韬,张雪迎,刘宇', image: 'http://cn2.3days.cc/1571767207734264.jpeg' },
        { id: 5, name: '热血少年', performer: '黄子韬,张雪迎,刘宇', image: 'http://cn2.3days.cc/1571767207734264.jpeg' },
        { id: 7, name: '热血少年', performer: '黄子韬,张雪迎,刘宇', image: 'http://cn2.3days.cc/1571767207734264.jpeg' },
        { id: 8, name: '热血少年', performer: '黄子韬,张雪迎,刘宇', image: 'http://cn2.3days.cc/1571767207734264.jpeg' },
        { id: 9, name: '热血少年', performer: '黄子韬,张雪迎,刘宇', image: 'http://cn2.3days.cc/1571767207734264.jpeg' },
        { id: 10, name: '热血少年', performer: '黄子韬,张雪迎,刘宇', image: 'http://cn2.3days.cc/1571767207734264.jpeg' },
        { id: 11, name: '热血少年', performer: '黄子韬,张雪迎,刘宇', image: 'http://cn2.3days.cc/1571767207734264.jpeg' },
        { id: 12, name: '热血少年', performer: '黄子韬,张雪迎,刘宇', image: 'http://cn2.3days.cc/1571767207734264.jpeg' },
        { id: 13, name: '热血少年', performer: '黄子韬,张雪迎,刘宇', image: 'http://cn2.3days.cc/1571767207734264.jpeg' }],
      value: 4.5,
      font_size: '14px', // 字体大小改变
      simple_content: 'inline', // 简略剧情介绍
      detail_content: 'none' // 细节剧情介绍
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
    }
  },
  components: {
    // eslint-disable-next-line vue/no-unused-components
    Xgplayer,
    // eslint-disable-next-line vue/no-unused-components
    'web-nav': header,
    // eslint-disable-next-line vue/no-unused-components
    'web-footer': footer
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
</style>
