<template>
    <div id="home">
    <el-container>
      <el-header><web-nav></web-nav></el-header>
      <el-row><el-col :xl="22" :lg="22" :push="ajust_body_width()"  :md="24" :sm="24" :xs="24" >
      <el-main :style="{padding: body_padding}">
        <div class="content">
<div class="content_1">
  <div class="dp_content" style="height: 30px;font-size: 18px"><h3
    style="margin: 0;padding-right: 10px;display: inline-block;line-height:
  30px;font-weight: 400">
    大片推荐</h3></div>
  <el-row :gutter="20" >
    <el-col  v-for=" item in flim" :key="item.id" :xl="3" :lg="3" :md="6" :sm="8" :xs="8">
      <el-card :body-style="{ padding: '0px' }">
        <div class="bg_div_image" :style="{backgroundImage: 'url('+item.imgUrl+')'}"></div>
        <div style="padding: 14px;line-height: 20px" >
         <el-scrollbar class="page-component__scroll"> <span style="overflow: hidden;white-space: nowrap">{{item.videoName}}</span></el-scrollbar>
         <el-scrollbar class="page-component__scroll"><p style="margin-top: 5px;font-size: 12px;color: #999;white-space: nowrap">{{item.performer}}</p></el-scrollbar>
        </div>
      </el-card>
    </el-col>
  </el-row>
</div>
<!--     第二部分     -->
          <div class="content_2">
            <div class="dp_content" style="height: 30px;font-size: 18px"><h3
              style="margin: 0;padding-right: 10px;display: inline-block;line-height:
  30px;font-weight: 400">
              高分动作片</h3></div>
            <el-row :gutter="20">
              <el-col  v-for=" item in film_2" :key="item.id" :xl="3" :lg="3" :md="6" :sm="8" :xs="8">
                <el-card :body-style="{ padding: '0px' }">
                  <div class="bg_div_image" :style="{backgroundImage: 'url('+item.imgUrl+')'}"></div>
                  <div style="padding: 14px;line-height: 20px" >
                    <el-scrollbar class="page-component__scroll"><span style="white-space: nowrap">{{item.videoName}}</span></el-scrollbar>
                    <el-scrollbar class="page-component__scroll"><p style="margin-top: 5px;font-size: 12px;color: #999;white-space: nowrap">{{item.performer}}</p></el-scrollbar>
                  </div>
                </el-card>
              </el-col>
              <el-col :xl="6" :lg="6">
                <div style="position: relative;top: -34px">
                  <div id="title">
                    <div class="title_re">
                      <h3 style="margin: 0;padding: 0;padding-right: 10px">最新动作片</h3>
                      <a href="#">更多></a>
                    </div>
                  </div>
                  <el-card class="box-card">
                    <div class="must_new" style="padding-bottom: 15px" v-for="(item,index) in film_2n" :key="index">
                      <span :style="{backgroundColor: list_header_color[index], width: '18px', height: '18px',display: 'block',
                       float: 'left', fontSize: '12px', marginRight: '10px', textAlign: 'center', Color: list_color[index]}" >{{index+1}}</span>
                      <div>{{item.videoName}}</div>
                    </div>
                  </el-card>
                </div>
              </el-col>
            </el-row>
          </div>
<!--    第三      -->
          <div class="content_2">
            <div class="dp_content" style="height: 30px;font-size: 18px"><h3
              style="margin: 0;padding-right: 10px;display: inline-block;line-height:
  30px;font-weight: 400">
              高分喜剧片</h3></div>
            <el-row :gutter="20">
              <el-col  v-for=" item in film_3" :key="item.id" :xl="3" :lg="3" :md="6" :sm="8" :xs="8">
                <el-card :body-style="{ padding: '0px' }">
                  <div class="bg_div_image" :style="{backgroundImage: 'url('+item.imgUrl+')'}"></div>
                  <div style="padding: 14px;line-height: 20px" >
                    <el-scrollbar class="page-component__scroll"><span style="white-space: nowrap">{{item.videoName}}</span></el-scrollbar>
                   <el-scrollbar class="page-component__scroll"><p style="margin-top: 5px;font-size: 12px;color: #999;white-space: nowrap">{{item.performer}}</p></el-scrollbar>
                  </div>
                </el-card>
              </el-col>
              <el-col :xl="6" :lg="6">
                <div style="position: relative;top: -34px">
                  <div id="title">
                    <div class="title_re">
                      <h3 style="margin: 0;padding: 0;padding-right: 10px">最新喜剧片</h3>
                      <a href="#">更多></a>
                    </div>
                  </div>
                  <el-card class="box-card">
                    <div class="must_new" style="padding-bottom: 15px" v-for="(item,index) in film_3n" :key="index">
                      <span :style="{backgroundColor: list_header_color[index], width: '18px', height: '18px',display: 'block',
                       float: 'left', fontSize: '12px', marginRight: '10px', textAlign: 'center', Color: list_color[index]}" >{{index+1}}</span>
                      <div>{{item.videoName}}</div>
                    </div>
                  </el-card>
                </div>
              </el-col>
            </el-row>
          </div>
<!--      第四    -->
          <div class="content_2">
            <div class="dp_content" style="height: 30px;font-size: 18px"><h3
              style="margin: 0;padding-right: 10px;display: inline-block;line-height:
  30px;font-weight: 400">
              高分爱情片</h3></div>
            <el-row :gutter="20">
              <el-col  v-for=" item in film_4" :key="item.id" :xl="3" :lg="3" :md="6" :sm="8" :xs="8">
                <el-card :body-style="{ padding: '0px' }">
                  <div class="bg_div_image" :style="{backgroundImage: 'url('+item.imgUrl+')'}"></div>
                  <div style="padding: 14px;line-height: 20px" >
                  <el-scrollbar class="page-component__scroll"><span style="white-space: nowrap">{{item.videoName}}</span></el-scrollbar>
                   <el-scrollbar class="page-component__scroll"><p style="margin-top: 5px;font-size: 12px;color: #999;white-space: nowrap ">{{item.performer}}</p></el-scrollbar>
                  </div>
                </el-card>
              </el-col>
              <el-col :xl="6" :lg="6">
                <div style="position: relative;top: -34px">
                  <div id="title">
                    <div class="title_re">
                      <h3 style="margin: 0;padding: 0;padding-right: 10px">最新爱情片</h3>
                      <a href="#">更多></a>
                    </div>
                  </div>
                  <el-card class="box-card">
                    <div class="must_new" style="padding-bottom: 15px" v-for="(item,index) in film_4n" :key="index">
                      <span :style="{backgroundColor: list_header_color[index], width: '18px', height: '18px',display: 'block',
                       float: 'left', fontSize: '12px', marginRight: '10px', textAlign: 'center', Color: list_color[index]}" >{{index+1}}</span>
                      <div>{{item.videoName}}</div>
                    </div>
                  </el-card>
                </div>
              </el-col>
            </el-row>
          </div>
<!--     第五     -->
          <div class="content_2">
            <div class="dp_content" style="height: 30px;font-size: 18px"><h3
              style="margin: 0;padding-right: 10px;display: inline-block;line-height:
  30px;font-weight: 400">
              最新动作片</h3></div>
            <el-row :gutter="20">
              <el-col  v-for=" item in film_5" :key="item.id" :xl="3" :lg="3" :md="6" :sm="8" :xs="8">
                <el-card :body-style="{ padding: '0px' }">
                  <div class="bg_div_image" :style="{backgroundImage: 'url('+item.imgUrl+')'}"></div>
                  <div style="padding: 14px;line-height: 20px" >
                    <el-scrollbar class="page-component__scroll"><span style="white-space: nowrap">{{item.videoName}}</span></el-scrollbar>
                    <el-scrollbar class="page-component__scroll"><p style="margin-top: 5px;font-size: 12px;color: #999;white-space: nowrap ">{{item.performer}}</p></el-scrollbar>
                  </div>
                </el-card>
              </el-col>
              <el-col :xl="6" :lg="6">
                <div style="position: relative;top: -34px">
                  <div id="title">
                    <div class="title_re">
                      <h3 style="margin: 0;padding: 0;padding-right: 10px">最新动作片</h3>
                      <a href="#">更多></a>
                    </div>
                  </div>
                  <el-card class="box-card">
                    <div class="must_new" style="padding-bottom: 15px" v-for="(item,index) in film_5n" :key="index">
                      <span :style="{backgroundColor: list_header_color[index], width: '18px', height: '18px',display: 'block',
                       float: 'left', fontSize: '12px', marginRight: '10px', textAlign: 'center', Color: list_color[index]}" >{{index+1}}</span>
                      <div>{{item.videoName}}</div>
                    </div>
                  </el-card>
                </div>
              </el-col>
            </el-row>
          </div>
<!--      第六    -->
          <div class="content_2">
            <div class="dp_content" style="height: 30px;font-size: 18px"><h3
              style="margin: 0;padding-right: 10px;display: inline-block;line-height:
  30px;font-weight: 400">
              最新动作片</h3></div>
            <el-row :gutter="20">
              <el-col  v-for=" item in film_6" :key="item.id" :xl="3" :lg="3" :md="6" :sm="8" :xs="8">
                <el-card :body-style="{ padding: '0px' }">
                  <div class="bg_div_image" :style="{backgroundImage: 'url('+item.imgUrl+')'}"></div>
                  <div style="padding: 14px;line-height: 20px" >
                    <el-scrollbar class="page-component__scroll"><span style="white-space: nowrap">{{item.videoName}}</span></el-scrollbar>
                    <el-scrollbar class="page-component__scroll"><p style="margin-top: 5px;font-size: 12px;color: #999;white-space: nowrap ">{{item.performer}}</p></el-scrollbar>
                  </div>
                </el-card>
              </el-col>
              <el-col :xl="6" :lg="6">
                <div style="position: relative;top: -34px">
                  <div id="title">
                    <div class="title_re">
                      <h3 style="margin: 0;padding: 0;padding-right: 10px">最新动作片</h3>
                      <a href="#">更多></a>
                    </div>
                  </div>
                  <el-card class="box-card">
                    <div class="must_new" style="padding-bottom: 15px" v-for="(item,index) in film_6n" :key="index">
                      <span :style="{backgroundColor: list_header_color[index], width: '18px', height: '18px',display: 'block',
                       float: 'left', fontSize: '12px', marginRight: '10px', textAlign: 'center', Color: list_color[index]}" >{{index+1}}</span>
                      <div>{{item.videoName}}</div>
                    </div>
                  </el-card>
                </div>
              </el-col>
            </el-row>
          </div>
<!--      第七    -->
          <div class="content_2">
            <div class="dp_content" style="height: 30px;font-size: 18px"><h3
              style="margin: 0;padding-right: 10px;display: inline-block;line-height:
  30px;font-weight: 400">
              最新动作片</h3></div>
            <el-row :gutter="20">
              <el-col  v-for=" item in film_7" :key="item.id" :xl="3" :lg="3" :md="6" :sm="8" :xs="8">
                <el-card :body-style="{ padding: '0px' }">
                  <div class="bg_div_image" :style="{backgroundImage: 'url('+item.imgUrl+')'}"></div>
                  <div style="padding: 14px;line-height: 20px" >
                    <el-scrollbar class="page-component__scroll"><span style="white-space: nowrap">{{item.videoName}}</span></el-scrollbar>
                    <el-scrollbar class="page-component__scroll"><p style="margin-top: 5px;font-size: 12px;color: #999;white-space: nowrap ">{{item.performer}}</p></el-scrollbar>
                  </div>
                </el-card>
              </el-col>
              <el-col :xl="6" :lg="6">
                <div style="position: relative;top: -34px">
                  <div id="title">
                    <div class="title_re">
                      <h3 style="margin: 0;padding: 0;padding-right: 10px">最新动作片</h3>
                      <a href="#">更多></a>
                    </div>
                  </div>
                  <el-card class="box-card">
                    <div class="must_new" style="padding-bottom: 15px" v-for="(item,index) in film_7n" :key="index">
                      <span :style="{backgroundColor: list_header_color[index], width: '18px', height: '18px',display: 'block',
                       float: 'left', fontSize: '12px', marginRight: '10px', textAlign: 'center', Color: list_color[index]}" >{{index+1}}</span>
                      <div>{{item.videoName}}</div>
                    </div>
                  </el-card>
                </div>
              </el-col>
            </el-row>
          </div>
<!--     榜单部分     -->
         <!-- <div class="content_list">
            <el-row :gutter="20">
              <div>
              <el-col :xl="6" :lg="6" :md="12" :sm="12" :xm="24">
                <el-card class="box-card">
                <div slot="header" class="clearfix">
                  <span>电影总榜单</span>
                  <el-button style="float: right; padding: 3px 0" type="text">操作按钮</el-button>
                </div>
                  <div class="first_content_list clearfix" :style="{width: '300px', marginBottom: '10px', clear: 'both'}">
                    <a href="#" :style="{backgroundImage: 'url('+film_first[0].imgUrl+')'}"></a>
                    <div class="first_content_list_detail" style="float: left;margin-left: 10px">
                      <h4 ><a>{{film_first[0].videoName}}</a></h4>
                      <p><span>类型:</span>喜剧片<span>地区:</span>不详</p>
                      <p><span>主演</span>不详</p>
                    </div>
                  </div>
                  <div class="bottom_list">
                    <div v-for="item in flim_list" :key="item.id" class="text item" style="margin-top: 10px">
                      <span :style="{backgroundColor: list_header_color[item.id-1],width: '18px',height:'18px',display: 'block',float: 'left',
                      fontSize: '12px',marginRight: '10px',textAlign: 'center',Color: list_color[item.id-1]}">{{item.id}}</span>
                      <div>{{flim[0].name}}</div>
                    </div>
                  </div>
              </el-card>
              </el-col>
              <el-col :xl="6" :lg="6" :md="12" :sm="12" :xm="24">
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
                      <div>{{flim[0].name}}</div>
                    </div>
                  </div>
              </el-card>
              </el-col>
              <el-col :xl="6" :lg="6" :md="12" :sm="12" :xm="24">
                <el-card class="box-card">
                <div slot="header" class="clearfix">
                  <span>电影总榜单</span>
                  <el-button style="float: right; padding: 3px 0" type="text">操作按钮</el-button>
                </div>
                  <div class="first_content_list clearfix" :style="{width: '300px', marginBottom: '10px', clear: 'both'}">
                    <a href="#" :style="{backgroundImage: film_first.imgUrl}"></a>
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
                      <div>{{flim[0].name}}</div>
                    </div>
                  </div>
              </el-card>
              </el-col>
              <el-col :xl="6" :lg="6" :md="12" :sm="12" :xm="24">
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
                      <div>{{flim[0].name}}</div>
                    </div>
                  </div>
              </el-card>
              </el-col>
              </div>
            </el-row>
          </div>-->
<!--     明星列表     -->
          <div class="star_list">
            <el-card class="box-card">
              <div slot="header" class="clearfix">
                <h3 style="font-weight: 400">银幕巨星</h3>
                <el-button style="float: right; padding: 3px 0" type="text">操作按钮</el-button>
              </div>
              <el-row :gutter="20">
                <el-col :xs="12" :lg="3" :md="6" :sm="6" :xl="3" v-for="o in 8" :key="o">
                  <el-card :body-style="{ padding: '0px',margin: '0px', position: 'relative',top: '-20px'}">
<!--                    <img src="http://imgwx3.2345.com/dypcimg/star/img/a/8/24330/photo_192x262.jpg?1509946884" class="image" style="z-index: -1">-->
                    <div class="bg_div_image" style="background-image: url('http://imgwx3.2345.com/dypcimg/star/img/a/8/24330/photo_192x262.jpg?1509946884')">
                      <span style="color: #FFFFFF;font-size: 12px">演员</span>
                    </div>
                      <div style="padding: 14px;text-align: center">
                        <span>关晓彤</span>
                    </div>
                  </el-card>
                </el-col>
              </el-row>
            </el-card>
          </div>
      </div>
        <div><h3>友情链接</h3></div>
        <div>
          <div class="friend_link">
            <a href="#">新视觉影院</a>
            <a href="#">小飞影视</a>
            <a href="#">飞飞影视</a>
          </div>
        </div>
      </el-main>
      </el-col></el-row>
      <el-footer height="200"><web-footer>dasdasda</web-footer></el-footer>
    </el-container>
    </div>
</template>

<script>
// eslint-disable-next-line no-unused-vars
import header from '../components/Header'
import footer from '../components/footer'
export default {
  data () {
    return {
      currentDate: new Date(),
      sendRole: {},
      body_padding: '20px',
      film_temp: [{ id: 1, videoName: '热血少年', performer: '黄子韬,张雪迎,刘宇', imgUrl: 'http://cn2.3days.cc/1571767207734264.jpeg' }],
      body_width: document.body.clientWidth,
      flim: [{ id: 1, videoName: '热血少年', performer: '黄子韬,张雪迎,刘宇', imgUrl: 'http://cn2.3days.cc/1571767207734264.jpeg' },
        { id: 2, videoName: '热血少年', performer: '黄子韬,张雪迎,刘宇', imgUrl: 'http://cn2.3days.cc/1571767207734264.jpeg' },
        { id: 3, videoName: '热血少年', performer: '黄子韬,张雪迎,刘宇', imgUrl: 'http://cn2.3days.cc/1571767207734264.jpeg' },
        { id: 4, videoName: '热血少年', performer: '黄子韬,张雪迎,刘宇', imgUrl: 'http://cn2.3days.cc/1571767207734264.jpeg' },
        { id: 5, videoName: '热血少年', performer: '黄子韬,张雪迎,刘宇', imgUrl: 'http://cn2.3days.cc/1571767207734264.jpeg' },
        { id: 6, videoName: '热血少年', performer: '黄子韬,张雪迎,刘宇', imgUrl: 'http://cn2.3days.cc/1571767207734264.jpeg' },
        { id: 7, videoName: '热血少年', performer: '黄子韬,张雪迎,刘宇', imgUrl: 'http://cn2.3days.cc/1571767207734264.jpeg' },
        { id: 8, videoName: '热血少年', performer: '黄子韬,张雪迎,刘宇', imgUrl: 'http://cn2.3days.cc/1571767207734264.jpeg' }],
      film_2: [{ id: 1, videoName: '热血少年', performer: '黄子韬,张雪迎,刘宇', imgUrl: 'http://cn2.3days.cc/1571767207734264.jpeg' },
        { id: 2, videoName: '热血少年', performer: '黄子韬,张雪迎,刘宇', imgUrl: 'http://cn2.3days.cc/1571767207734264.jpeg' },
        { id: 3, videoName: '热血少年', performer: '黄子韬,张雪迎,刘宇', imgUrl: 'http://cn2.3days.cc/1571767207734264.jpeg' },
        { id: 4, videoName: '热血少年', performer: '黄子韬,张雪迎,刘宇', imgUrl: 'http://cn2.3days.cc/1571767207734264.jpeg' },
        { id: 5, videoName: '热血少年', performer: '黄子韬,张雪迎,刘宇', imgUrl: 'http://cn2.3days.cc/1571767207734264.jpeg' },
        { id: 6, videoName: '热血少年', performer: '黄子韬,张雪迎,刘宇', imgUrl: 'http://cn2.3days.cc/1571767207734264.jpeg' }],
      //  电影榜单
      flim_list: [{ id: 1, name: '热血少年', performer: '黄子韬,张雪迎,刘宇', image: 'http://cn2.3days.cc/1571767207734264.jpeg' },
        { id: 2, name: '热血少年', performer: '黄子韬,张雪迎,刘宇', image: 'http://cn2.3days.cc/1571767207734264.jpeg' },
        { id: 3, name: '热血少年', performer: '黄子韬,张雪迎,刘宇', image: 'http://cn2.3days.cc/1571767207734264.jpeg' },
        { id: 4, name: '热血少年', performer: '黄子韬,张雪迎,刘宇', image: 'http://cn2.3days.cc/1571767207734264.jpeg' },
        { id: 5, name: '热血少年', performer: '黄子韬,张雪迎,刘宇', image: 'http://cn2.3days.cc/1571767207734264.jpeg' },
        { id: 6, name: '热血少年', performer: '黄子韬,张雪迎,刘宇', image: 'http://cn2.3days.cc/1571767207734264.jpeg' },
        { id: 7, name: '热血少年', performer: '黄子韬,张雪迎,刘宇', image: 'http://cn2.3days.cc/1571767207734264.jpeg' }],
      list_header_color: ['#ff4a4a', '#ff7701', '#ffb400', '#eee', '#eee', '#eee', '#eee'],
      list_color: ['#FFFFFF', '#FFFFFF', '#FFFFFF', '#333333', '#333333', '#333333', '#333333'],
      film_3: [],
      film_4: [],
      film_5: [],
      film_6: [],
      film_7: [],
      film_2n: [],
      film_3n: [],
      film_4n: [],
      film_5n: [],
      film_6n: [],
      film_7n: []
      // filter_result: { sort: '最热', type: '全部', region: '全部', year: '全部', postage: '全部', currentPage: 0, pageSize: 8 },
      // film_first: []
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
    dp_recommend () {
      // eslint-disable-next-line no-undef
      axios({
        method: 'get',
        header: 'Content-Type": "application/json;charset=utf-8',
        url: '/pub/film/dpRecommend'
      }).then((res) => {
        this.flim = res.data
      })
    },
    checkGetMustNewFilm2 (type, sort, size) {
      this.sendRole.type = type
      this.sendRole.sort = sort
      this.sendRole.size = size
      // eslint-disable-next-line no-unused-vars
      console.log(this.sendRole)
      // eslint-disable-next-line no-undef
      axios.get('/pub/film/checkGetNew', {
        params: {
          type: type,
          sort: sort,
          size: size
        }
      }).then((res) => {
        // eslint-disable-next-line no-const-assign
        this.film_2 = res.data
      })
    },
    checkGetMustNewFilm3 (type, sort, size) {
      this.sendRole.type = type
      this.sendRole.sort = sort
      this.sendRole.size = size
      // eslint-disable-next-line no-unused-vars
      console.log(this.sendRole)
      // eslint-disable-next-line no-undef
      axios.get('/pub/film/checkGetNew', {
        params: {
          type: type,
          sort: sort,
          size: size
        }
      }).then((res) => {
        // eslint-disable-next-line no-const-assign
        this.film_3 = res.data
      })
    },
    checkGetMustNewFilm4 (type, sort, size) {
      this.sendRole.type = type
      this.sendRole.sort = sort
      this.sendRole.size = size
      // eslint-disable-next-line no-unused-vars
      console.log(this.sendRole)
      // eslint-disable-next-line no-undef
      axios.get('/pub/film/checkGetNew', {
        params: {
          type: type,
          sort: sort,
          size: size
        }
      }).then((res) => {
        // eslint-disable-next-line no-const-assign
        this.film_4 = res.data
      })
    },
    checkGetMustNewFilm5 (type, sort, size) {
      this.sendRole.type = type
      this.sendRole.sort = sort
      this.sendRole.size = size
      // eslint-disable-next-line no-unused-vars
      console.log(this.sendRole)
      // eslint-disable-next-line no-undef
      axios.get('/pub/film/checkGetNew', {
        params: {
          type: type,
          sort: sort,
          size: size
        }
      }).then((res) => {
        // eslint-disable-next-line no-const-assign
        this.film_5 = res.data
      })
    },
    checkGetMustNewFilm6 (type, sort, size) {
      this.sendRole.type = type
      this.sendRole.sort = sort
      this.sendRole.size = size
      // eslint-disable-next-line no-unused-vars
      console.log(this.sendRole)
      // eslint-disable-next-line no-undef
      axios.get('/pub/film/checkGetNew', {
        params: {
          type: type,
          sort: sort,
          size: size
        }
      }).then((res) => {
        // eslint-disable-next-line no-const-assign
        this.film_6 = res.data
      })
    },
    checkGetMustNewFilm7 (type, sort, size) {
      this.sendRole.type = type
      this.sendRole.sort = sort
      this.sendRole.size = size
      // eslint-disable-next-line no-unused-vars
      console.log(this.sendRole)
      // eslint-disable-next-line no-undef
      axios.get('/pub/film/checkGetNew', {
        params: {
          type: type,
          sort: sort,
          size: size
        }
      }).then((res) => {
        // eslint-disable-next-line no-const-assign
        this.film_7 = res.data
      })
    },
    checkGetMustNewFilm2_n (type, sort, size) {
      this.sendRole.type = type
      this.sendRole.sort = sort
      this.sendRole.size = size
      // eslint-disable-next-line no-unused-vars
      console.log(this.sendRole)
      // eslint-disable-next-line no-undef
      axios.get('/pub/film/checkGetNew', {
        params: {
          type: type,
          sort: sort,
          size: size
        }
      }).then((res) => {
        // eslint-disable-next-line no-const-assign
        this.film_2n = res.data
      })
    },
    checkGetMustNewFilm3_n (type, sort, size) {
      this.sendRole.type = type
      this.sendRole.sort = sort
      this.sendRole.size = size
      // eslint-disable-next-line no-unused-vars
      console.log(this.sendRole)
      // eslint-disable-next-line no-undef
      axios.get('/pub/film/checkGetNew', {
        params: {
          type: type,
          sort: sort,
          size: size
        }
      }).then((res) => {
        // eslint-disable-next-line no-const-assign
        this.film_3n = res.data
      })
    },
    checkGetMustNewFilm4_n (type, sort, size) {
      this.sendRole.type = type
      this.sendRole.sort = sort
      this.sendRole.size = size
      // eslint-disable-next-line no-unused-vars
      console.log(this.sendRole)
      // eslint-disable-next-line no-undef
      axios.get('/pub/film/checkGetNew', {
        params: {
          type: type,
          sort: sort,
          size: size
        }
      }).then((res) => {
        // eslint-disable-next-line no-const-assign
        this.film_4n = res.data
      })
    },
    checkGetMustNewFilm5_n (type, sort, size) {
      this.sendRole.type = type
      this.sendRole.sort = sort
      this.sendRole.size = size
      // eslint-disable-next-line no-unused-vars
      console.log(this.sendRole)
      // eslint-disable-next-line no-undef
      axios.get('/pub/film/checkGetNew', {
        params: {
          type: type,
          sort: sort,
          size: size
        }
      }).then((res) => {
        // eslint-disable-next-line no-const-assign
        this.film_5n = res.data
      })
    },
    checkGetMustNewFilm6_n (type, sort, size) {
      this.sendRole.type = type
      this.sendRole.sort = sort
      this.sendRole.size = size
      // eslint-disable-next-line no-unused-vars
      console.log(this.sendRole)
      // eslint-disable-next-line no-undef
      axios.get('/pub/film/checkGetNew', {
        params: {
          type: type,
          sort: sort,
          size: size
        }
      }).then((res) => {
        // eslint-disable-next-line no-const-assign
        this.film_6n = res.data
      })
    },
    checkGetMustNewFilm7_n (type, sort, size) {
      this.sendRole.type = type
      this.sendRole.sort = sort
      this.sendRole.size = size
      // eslint-disable-next-line no-unused-vars
      console.log(this.sendRole)
      // eslint-disable-next-line no-undef
      axios.get('/pub/film/checkGetNew', {
        params: {
          type: type,
          sort: sort,
          size: size
        }
      }).then((res) => {
        // eslint-disable-next-line no-const-assign
        this.film_7n = res.data
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
    this.dp_recommend()
    this.checkGetMustNewFilm2('动作', '最热', 6)
    this.checkGetMustNewFilm2_n('动作', '最新', 7)
    this.checkGetMustNewFilm3_n('喜剧', '最新', 7)
    this.checkGetMustNewFilm3('喜剧', '最热', 6)
    this.checkGetMustNewFilm4_n('爱情', '最新', 7)
    this.checkGetMustNewFilm4('爱情', '最热', 6)
    this.checkGetMustNewFilm5_n('恐怖', '最新', 7)
    this.checkGetMustNewFilm5('恐怖', '最热', 6)
    this.checkGetMustNewFilm6_n('武侠', '最新', 7)
    this.checkGetMustNewFilm6('武侠', '最热', 6)
    this.checkGetMustNewFilm7_n('科幻', '最新', 7)
    this.checkGetMustNewFilm7('科幻', '最热', 6)
    // this.getSrceem()
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
/* 视频列表配置 */
  .time {
    font-size: 13px;
    color: #999;
  }

  .bottom {
    margin-top: 13px;
    line-height: 12px;
  }

  .button {
    padding: 0;
    float: right;
  }

  .image {
    width: 100%;
    display: block;
    height: auto;
  }
  .clearfix:before,
  .clearfix:after {
    display: table;
    content: "";
  }

  .clearfix:after {
    clear: both
  }
  #dp_content{
    font-size: 12px;
    line-height: 20px;
  }
  /*第二部分*/
  .content_2{
    margin-top: 30px;
  }
  #title{
    padding: 10px;
    height: 30px;
    background-color: #FFF;
  }
  .title_re{
    width: 100%;
    height: 30px;
    position: relative;
    > h3{
    float: left;
      line-height: 30px;
      padding-right: 10px;
    }
    >a{
      float: right;
    }
  }
  #must_new{
  margin-bottom: 10px;
  }

  .first_content_list{
    width: 100%;
    height: auto;
    /*clear: both;*/
  }
  .first_content_list>a{
    display: block;
    width: 70px;
    height: 106px;
    margin: 0;
    padding: 0;
    float: left;
  }
  .first_content_list_detail{
  }
  .friend_link{
    color: #999;
    font-size: 12px;
    text-decoration: none;
  }
  .friend_link>a{
    float: left;
    margin-left: 20px;
    color: #999;
  }
</style>
