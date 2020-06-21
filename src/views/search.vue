<template>
<div id="search">
  <el-container>
    <el-header><web-nav></web-nav></el-header>
    <el-row><el-col :xs="22" :lg="22" :push="ajust_body_width()" :md="24" :sm="24" :xm="24">
      <el-main :style="{padding: body_padding}">
        <el-row :gutter="20">
    <el-col :xl="17" :lg="17" :md="24" :sm="24" :xs="24">
      <h3>搜索结果</h3>
        <div class="search_item" v-for="o in 4" :key="o" style="margin-top: 20px;line-height: 140%">
          <el-card :body-style="{ padding: '0px' }">
<!--            <img src="http://cn2.3days.cc/1571767207734264.jpeg" class="image" style="float: left;width: 30%">-->
           <el-row :gutter="20">
             <el-col :xl="4" :lg="4" :md="4" :sm="4" :xs="9" >
            <div class="bg_div_image"></div>
             </el-col>
             <el-col :xl="20" :lg="20" :md="20" :sm="20" :xs="15">
            <div class="film_detail"  >
              <h3 style="margin: 20px 0 10px" ><a>电影名</a></h3>
             <p><span class="text-mute">导演：</span>导演名</p>
             <p><span class="text-mute">导演：</span>导演名</p>
             <p class="hidden-sm-and-down"><span class="text-mute">导演：</span>导演名<span class="text-mute">地区：</span>地区名<span class="hidden-md-and-down text-mute">年份:</span>2020年</p>
              <p><el-button type="warning" size="small">点击播放</el-button><el-button size="small">查看详情</el-button></p>
            </div>
           </el-col>
           </el-row>
          </el-card>
        </div>
    </el-col>
          <el-col  :xl="7" :lg="7" >
        <div class="Recommended_list_1" style="margin-top: 25px">
          <el-card class="box-card">
            <div slot="header" class="clearfix">
              <span>电影总榜单</span>
              <el-button style="float: right; padding: 3px 0" type="text">操作按钮</el-button>
            </div>
            <div class="first_content_list clearfix" :style="{width: '300px', marginBottom: '10px', clear: 'both'}">
              <a href="#" ></a>
              <div class="first_content_list_detail" style="float: left;margin-left: 10px">
                <h4 ><a>特警小飞龙</a></h4>
                <p><span>类型:</span>喜剧片<span>地区:</span>不详</p>
                <p><span>主演</span>不详</p>
              </div>
            </div>
            <div class="bottom_list">
              <div v-for="item in flim_list" :key="item.id" class="text item" style="margin-top: 10px">
                      <span :style="{backgroundColor: list_header_color[item.id-1],width: '18px',height:'18px',display: 'block',float: 'left',
                      fontSize: '12px',marginRight: '10px',textAlign: 'center',Color: list_color[item.id-1]}">{{item.id}}</span>
                <div>{{item.name}}</div>
              </div>
            </div>
          </el-card>
        </div>
            <div class="Recommended_list_2" style="margin-top: 25px">
              <el-card class="box-card">
                <div slot="header" class="clearfix">
                  <span>电影总榜单</span>
                  <el-button style="float: right; padding: 3px 0" type="text">操作按钮</el-button>
                </div>
                <div class="first_content_list clearfix" :style="{width: '300px', marginBottom: '10px', clear: 'both'}">
                  <a href="#" ></a>
                  <div class="first_content_list_detail" style="float: left;margin-left: 10px">
                    <h4 ><a>特警小飞龙</a></h4>
                    <p><span>类型:</span>喜剧片<span>地区:</span>不详</p>
                    <p><span>主演</span>不详</p>
                  </div>
                </div>
                <div class="bottom_list">
                  <div v-for="item in flim_list" :key="item.id" class="text item" style="margin-top: 10px">
                      <span :style="{backgroundColor: list_header_color[item.id-1],width: '18px',height:'18px',display: 'block',float: 'left',
                      fontSize: '12px',marginRight: '10px',textAlign: 'center',Color: list_color[item.id-1]}">{{item.id}}</span>
                    <div>{{item.name}}</div>
                  </div>
                </div>
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
      body_width: document.body.clientWidth,
      flim_list: [{ id: 1, name: '热血少年', performer: '黄子韬,张雪迎,刘宇', image: 'http://cn2.3days.cc/1571767207734264.jpeg' },
        { id: 2, name: '热血少年', performer: '黄子韬,张雪迎,刘宇', image: 'http://cn2.3days.cc/1571767207734264.jpeg' },
        { id: 3, name: '热血少年', performer: '黄子韬,张雪迎,刘宇', image: 'http://cn2.3days.cc/1571767207734264.jpeg' },
        { id: 4, name: '热血少年', performer: '黄子韬,张雪迎,刘宇', image: 'http://cn2.3days.cc/1571767207734264.jpeg' },
        { id: 5, name: '热血少年', performer: '黄子韬,张雪迎,刘宇', image: 'http://cn2.3days.cc/1571767207734264.jpeg' },
        { id: 6, name: '热血少年', performer: '黄子韬,张雪迎,刘宇', image: 'http://cn2.3days.cc/1571767207734264.jpeg' },
        { id: 7, name: '热血少年', performer: '黄子韬,张雪迎,刘宇', image: 'http://cn2.3days.cc/1571767207734264.jpeg' }],
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
    }
  },
  components: {
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
