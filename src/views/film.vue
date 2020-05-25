<template>
  <div id="film">
    <el-container>
      <el-header>
        <web-nav></web-nav>
      </el-header>
      <el-row><el-col :xs="22" :lg="22" :push="1" :md="24" :sm="24" :xm="24">
      <el-main>
<!--    跑马灯    -->
        <div class="p_m_d" style="margin-top: 20px">
          <el-carousel :interval="5000" arrow="always">
            <el-carousel-item v-for="item in 4" :key="item">
              <h3>{{ item }}</h3>
            </el-carousel-item>
          </el-carousel>
        </div>
<!--   下拉菜单，巨幕     -->
        <div style="margin-top: 20px">
          <el-card class="box-card" :body-style="{width: '100%'}">
            <div slot="header" class="clearfix">
              <span>卡片名称</span>
              <el-button style="float: right; padding: 3px 0" type="text">操作按钮</el-button>
            </div>
          <div>
            <el-collapse accordion="false">
              <el-collapse-item>
                <template slot="title">
                  一致性 Consistency
                </template>
                <div>与现实生活一致：与现实生活的流程、逻辑保持一致，遵循用户习惯的语言和概念；</div>
                <div>在界面中一致：所有的元素和结构需保持一致，比如：设计样式、图标和文本、元素的位置等。</div>
              </el-collapse-item>
            </el-collapse>
          </div>
          </el-card>
        </div>
        <div class="video_result" style="margin-top: 20px">
            <el-row :gutter="20">
              <el-col  v-for=" item in flim" :key="item.id" :xl="3" :lg="3" :md="6" :sm="8" :xs="8">
                <el-card :body-style="{ padding: '0px' }">
                  <img :src="item.image" class="image">
                  <div style="padding: 14px;line-height: 20px" >
                    <span>{{item.name}}</span>
                    <p style="margin-top: 5px;font-size: 12px;color: #999">{{item.performer}}</p>
                  </div>
                </el-card>
              </el-col>
            </el-row>
          </div>
<!--     分页部分   -->
        <div>
          <div class="block" style="text-align: center;margin-top: 30px">
            <el-pagination
              @size-change="handleSizeChange"
              @current-change="handleCurrentChange"
              :current-page="currentPage4"
              :page-sizes="[100, 200, 300, 400]"
              :page-size="100"
              background
              layout="total, sizes, prev, pager, next, jumper"
              :total="400">
            </el-pagination>
          </div>
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
import footer from '../components/footer'
export default {
  data () {
    return {
      flim: [{ id: 1, name: '热血少年', performer: '黄子韬,张雪迎,刘宇', image: 'http://cn2.3days.cc/1571767207734264.jpeg' },
        { id: 2, name: '热血少年', performer: '黄子韬,张雪迎,刘宇', image: 'http://cn2.3days.cc/1571767207734264.jpeg' },
        { id: 3, name: '热血少年', performer: '黄子韬,张雪迎,刘宇', image: 'http://cn2.3days.cc/1571767207734264.jpeg' },
        { id: 4, name: '热血少年', performer: '黄子韬,张雪迎,刘宇', image: 'http://cn2.3days.cc/1571767207734264.jpeg' },
        { id: 5, name: '热血少年', performer: '黄子韬,张雪迎,刘宇', image: 'http://cn2.3days.cc/1571767207734264.jpeg' },
        { id: 6, name: '热血少年', performer: '黄子韬,张雪迎,刘宇', image: 'http://cn2.3days.cc/1571767207734264.jpeg' },
        { id: 7, name: '热血少年', performer: '黄子韬,张雪迎,刘宇', image: 'http://cn2.3days.cc/1571767207734264.jpeg' },
        { id: 8, name: '热血少年', performer: '黄子韬,张雪迎,刘宇', image: 'http://cn2.3days.cc/1571767207734264.jpeg' }]
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
</style>
