<template>
  <div id="tv">
    <el-container>
      <el-header>
        <web-nav></web-nav>
      </el-header>
      <el-row><el-col :xl="22" :lg="22" :push="ajust_body_width()" :md="24" :sm="24" :xs="24">
        <el-main :style="{padding: body_padding}">
          <!--    跑马灯    -->
          <div class="p_m_d" style="margin-top: 20px">
            <el-carousel :interval="5000" arrow="always" height="500px">
              <el-carousel-item v-for="item in carousel_image" :key="item.id">
                <img :src="item.image">
              </el-carousel-item>
            </el-carousel>
          </div>
          <!--   下拉菜单，巨幕     -->
          <div style="margin-top: 20px" class="filter_part">
            <el-card class="box-card">
              <el-scrollbar class="page-component__scroll">
                <div class="select_video_category"  :style="{transform: 'translate3d('+left_move+'px,0,0)'}" >
                  <span class="text-mute" :style="{fontSize: font_size,marginRight: '15px'}">排序</span>
                  <el-radio-group v-model="filter_result.sort" size="small" @change="changemy" >
                    <el-radio-button class="radio-but sub"   boder="false" style="margin: 0 10px"  :label="item"  v-for="(item,index) in video_filter.sort" :key="index">{{item}}</el-radio-button>
                  </el-radio-group>
                </div>
              </el-scrollbar>
              <el-scrollbar class="page-component__scroll">
                <div class="select_video_category"  :style="{transform: 'translate3d('+left_move+'%,0,0)'}">
                  <span class="text-mute" :style="{fontSize: font_size,marginRight: '15px'}">类型</span>
                  <el-radio-group v-model="filter_result.type" size="small" @change="changemy" >
                    <el-radio-button class="radio-but sub"   boder="false" style="margin: 0 10px"  :label="item"  v-for="(item,index) in video_filter.type" :key="index">{{item}}</el-radio-button>
                  </el-radio-group>
                </div>
              </el-scrollbar>
              <el-scrollbar class="page-component__scroll">
                <div  style="margin-top: 20px;white-space: nowrap">
                  <span class="text-mute" :style="{fontSize: font_size,marginRight: '15px'}">地区</span>
                  <el-radio-group v-model="filter_result.region" size="small" @change="changemy" >
                    <el-radio-button class="radio-but sub"   boder="false" style="margin: 0 10px"  :label="item"  v-for="(item,index) in video_filter.region" :key="index">{{item}}</el-radio-button>
                  </el-radio-group>
                </div>
              </el-scrollbar>
              <el-scrollbar class="page-component__scroll">
                <div  style="margin-top: 20px;white-space: nowrap">
                  <span class="text-mute" :style="{fontSize: font_size,marginRight: '15px'}">年份</span>
                  <el-radio-group v-model="filter_result.year" size="small" @change="changemy" >
                    <el-radio-button class="radio-but sub"   boder="false" style="margin: 0 10px"  :label="item"  v-for="(item,index) in video_filter.year" :key="index">{{item}}</el-radio-button>
                  </el-radio-group>
                </div>
              </el-scrollbar>
              <el-scrollbar class="page-component__scroll">
                <div  style="margin-top: 20px;white-space: nowrap">
                  <span class="text-mute" :style="{fontSize: font_size,marginRight: '15px'}">资费</span>
                  <el-radio-group v-model="filter_result.postage" size="small" @change="changemy" >
                    <el-radio-button class="radio-but sub"   boder="false" style="margin: 0 10px"  :label="item"  v-for="(item,index) in video_filter.postage" :key="index">{{item}}</el-radio-button>
                  </el-radio-group>
                </div>
              </el-scrollbar>
            </el-card>
          </div>
          <!--     以上为筛选部分   -->
          <div class="video_result" style="margin-top: 20px">
            <el-row :gutter="20">
              <el-col  v-for=" item in flim" :key="item.id" :xl="3" :lg="3" :md="6" :sm="8" :xs="8">
                <el-card :body-style="{ padding: '0px' }">
                  <div class="bg_div_image" :style="{backgroundImage: 'url('+item.imgUrl+')'}">

                  </div>
                  <div style="padding: 14px;line-height: 20px" >
                    <el-scrollbar class="page-component__scroll"><span style="white-space: nowrap">{{item.videoName}}</span></el-scrollbar>
                    <el-scrollbar class="page-component__scroll"><p style="margin-top: 5px;font-size: 12px;color: #999;white-space: nowrap">{{item.performer}}</p></el-scrollbar>
                  </div>
                </el-card>
              </el-col>
            </el-row>
          </div>
          <!--     分页部分   -->
          <div>
            <el-row><el-col :xl="24" :lg="24"  :md="24" :sm="24" :xs="24">
              <div class="block" style="text-align: center;margin-top: 30px">
                <el-pagination
                  @size-change="handleSizeChange"
                  @current-change="handleCurrentChange"
                  :current-page="currentPageWeb"
                  :page-sizes="[24, 48, 64, 128]"
                  :page-size="pageSize"
                  background
                  layout="total, prev, pager, next, jumper"
                  :total="200">
                </el-pagination>
              </div>
            </el-col></el-row>
          </div>
        </el-main>
      </el-col></el-row>
      <el-footer height="200">
        <web-footer>dasdasdas</web-footer>
      </el-footer>
    </el-container>
  </div>
</template>

<script>
// eslint-disable-next-line no-unused-vars
import header from '../components/Header'
import Footer from '../components/footer'
export default {
  data () {
    return {
      currentPageWeb: 1,
      pageSize: 48,
      filter_result: { category: '电视剧', sort: '最热', type: '全部', region: '全部', year: '全部', postage: '全部', currentPage: 0, pageSize: 48 },
      flim: [{ id: 1, videoName: '热血少年', performer: '黄子韬,张雪迎,刘宇', imgUrl: 'http://cn2.3days.cc/1571767207734264.jpeg' },
        { id: 2, videoName: '热血少年', performer: '黄子韬,张雪迎,刘宇', imgUrl: 'http://cn2.3days.cc/1571767207734264.jpeg' },
        { id: 3, videoName: '热血少年', performer: '黄子韬,张雪迎,刘宇', imgUrl: 'http://cn2.3days.cc/1571767207734264.jpeg' },
        { id: 4, videoName: '热血少年', performer: '黄子韬,张雪迎,刘宇', imgUrl: 'http://cn2.3days.cc/1571767207734264.jpeg' },
        { id: 5, videoName: '热血少年', performer: '黄子韬,张雪迎,刘宇', imgUrl: 'http://cn2.3days.cc/1571767207734264.jpeg' },
        { id: 6, videoName: '热血少年', performer: '黄子韬,张雪迎,刘宇', imgUrl: 'http://cn2.3days.cc/1571767207734264.jpeg' },
        { id: 7, videoName: '热血少年', performer: '黄子韬,张雪迎,刘宇', imgUrl: 'http://cn2.3days.cc/1571767207734264.jpeg' },
        { id: 8, videoName: '热血少年', performer: '黄子韬,张雪迎,刘宇', imgUrl: 'http://cn2.3days.cc/1571767207734264.jpeg' }],
      video_filter: {
        sort: ['最新', '最热', '好评', '口碑好评', '高分好评', '豆瓣高分'],
        type: ['全部', '爱情', '古装', '剧情', '网络剧', '犯罪', '科幻', '偶像', '喜剧', '战争', '武侠', '警匪', '魔幻', '家庭', '都市', '悬疑'],
        region: ['全部', '内地', '韩国', '中国香港', '中国台湾', '日本', '美国', '泰国', '英国', '新加坡', '其他'],
        year: ['全部', '2020', '2019', '2018', '2017', '2016', '2015', '2014', '2013-2011', '2010-2006', '2005-2000', '90年代', '80年代', '其它'],
        postage: ['全部', '免费', '付费']
      },
      carousel_image: [{ image: require('../assets/image/pm01.jpg'), id: 1 },
        { image: require('../assets/image/pm02.jpg'), id: 2 },
        { image: require('../assets/image/pm03.jpg'), id: 3 },
        { image: require('../assets/image/pm04.jpg'), id: 4 }],
      body_padding: '20px',
      body_width: document.body.clientWidth,
      font_size: '14px', // 字体大小改变,
      left_move: '0'
    }
  },
  methods: {
    handleCurrentChange (conn) {
      this.filter_result.currentPage = (conn - 1) * this.pageSize
      console.log(conn)
      this.getSrceem()
    },
    // eslint-disable-next-line camelcase
    handleSizeChange (change_size) {
      this.filter_result.pageSize = this.pageSize
      console.log(change_size)
      this.getSrceem()
    },
    changemy () {
      this.getSrceem()
    },
    ajust_body_width () {
      const width = this.body_width
      if (width < 922) {
        this.body_padding = 0 + 'px'
        this.font_size = '12px'
        return 0
      }
      this.body_padding = 20 + 'px'
      this.font_size = '14px'
      return 1
    },
    swiperleft (data) {
      console.log(data)
      this.left_move = -50
    },
    swiperright () {
      this.left_move = 0
    },
    getSrceem () {
      // eslint-disable-next-line no-undef
      axios({
        method: 'post',
        url: 'pub/video/screen',
        header: 'Content-Type": "application/json;charset=utf-8',
        data: JSON.stringify(this.filter_result)
      }).then((res) => {
        this.flim = res.data
        console.log(res.data)
      })
    }
  },
  components: {
    // eslint-disable-next-line vue/no-unused-components
    'web-nav': header,
    // eslint-disable-next-line vue/no-unused-components
    'web-footer': Footer
  },
  created () {
    this.getSrceem(1)
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
    height: auto;
  }
  /*以上为容器布局*/
  .el-carousel__item h3 {
    color: #475669;
    font-size: 18px;
    opacity: 0.75;
    line-height: 300px;
    margin: 0;
  }

  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }

  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }
  /* 以上为跑马灯 */

  .text {
    font-size: 14px;
  }

  .item {
    margin-bottom: 18px;
  }

  .clearfix:before,
  .clearfix:after {
    display: table;
    content: "";
  }
  .clearfix:after {
    clear: both
  }

  .box-card {
    width: 100%;
  }
  /* 以上为卡片布局 */
  .el-radio-button__inner{
    border: none;
  }
  .text-mute{
    color: #999999;
  }
  .select_video_category{
    margin-top: 20px;
    transition: all 0.4s linear;
    white-space: nowrap;
  }
  /* 以上为筛选部分 */
  .bg_div_image{
    width: 100%; height: 100%; padding-top: 140%;
    background-image: url(http://imgwx3.2345.com/dypcimg/star/img/a/8/24330/photo_192x262.jpg?1509946884);
    background-repeat: no-repeat;
    background-size: 100% 100%;
    -moz-background-size: 100% 100%;text-align: right;
  }
</style>
