<template>
    <div id="home">
    <el-container>
      <el-header><web-nav></web-nav></el-header>
      <el-row><el-col :xs="22" :lg="22" :push="1" :md="24" :sm="24" :xm="24">
      <el-main>
        <div class="content">
<div class="content_1">
  <div class="dp_content" style="height: 30px;font-size: 18px"><h3
    style="margin: 0;padding-right: 10px;display: inline-block;line-height:
  30px;font-weight: 400">
    大片推荐</h3></div>
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
<!--     第二部分     -->
          <div class="content_2">
            <div class="dp_content" style="height: 30px;font-size: 18px"><h3
              style="margin: 0;padding-right: 10px;display: inline-block;line-height:
  30px;font-weight: 400">
              最新动作片</h3></div>
            <el-row :gutter="20">
              <el-col  v-for=" item in flim2" :key="item.id" :xl="3" :lg="3" :md="6" :sm="8" :xs="8">
                <el-card :body-style="{ padding: '0px' }">
                  <img :src="item.image"  class="image">
                  <div style="padding: 14px;line-height: 20px" >
                    <span>{{item.name}}</span>
                    <p style="margin-top: 5px;font-size: 12px;color: #999">{{item.performer}}</p>
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
                    <div class="must_new" style="padding-bottom: 15px">
                      <span  style="background-color: #ff4a4a;width: 18px;height: 18px;display: block;float: left;
font-size: 12px;margin-right: 10px;text-align: center;color: #FFFFFF;">1</span>
                      <div>{{flim[0].name}}</div>
                    </div>      <div class="must_new" style="padding-bottom: 15px">
                      <span  style="background-color: #ff7701;width: 18px;height: 18px;display: block;float: left;
font-size: 12px;margin-right: 10px;text-align: center;color: #FFFFFF;">2</span>
                      <div>{{flim[0].name}}</div>
                    </div>      <div class="must_new" style="padding-bottom: 15px">
                      <span  style="background-color: #ffb400;width: 18px;height: 18px;display: block;float: left;
font-size: 12px;margin-right: 10px;text-align: center;color: #FFFFFF;">3</span>
                      <div>{{flim[0].name}}</div>
                    </div>      <div class="must_new" style="padding-bottom: 15px">
                      <span  style="background-color: #eee;width: 18px;height: 18px;display: block;float: left;
font-size: 12px;margin-right: 10px;text-align: center;color: #333333;">4</span>
                      <div>{{flim[0].name}}</div>
                    </div>      <div class="must_new" style="padding-bottom: 15px">
                      <span  style="background-color: #eee;width: 18px;height: 18px;display: block;float: left;
font-size: 12px;margin-right: 10px;text-align: center;color: #333333;">5</span>
                      <div>{{flim[0].name}}</div>
                    </div>      <div class="must_new" style="padding-bottom: 15px">
                      <span  style="background-color: #eee;width: 18px;height: 18px;display: block;float: left;
font-size: 12px;margin-right: 10px;text-align: center;color: #333333;">6</span>
                      <div>{{flim[0].name}}</div>
                    </div>  <div class="must_new" style="padding-bottom: 15px">
                      <span  style="background-color: #eee;width: 18px;height: 18px;display: block;float: left;
font-size: 12px;margin-right: 10px;text-align: center;color: #333333;">7</span>
                      <div>{{flim[0].name}}</div>
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
              最新动作片</h3></div>
            <el-row :gutter="20">
              <el-col  v-for=" item in flim2" :key="item.id" :xl="3" :lg="3" :md="6" :sm="8" :xs="8">
                <el-card :body-style="{ padding: '0px' }">
                  <img :src="item.image"  class="image">
                  <div style="padding: 14px;line-height: 20px" >
                    <span>{{item.name}}</span>
                    <p style="margin-top: 5px;font-size: 12px;color: #999">{{item.performer}}</p>
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
                    <div class="must_new" style="padding-bottom: 15px">
                      <span  style="background-color: #ff4a4a;width: 18px;height: 18px;display: block;float: left;
font-size: 12px;margin-right: 10px;text-align: center;color: #FFFFFF;">1</span>
                      <div>{{flim[0].name}}</div>
                    </div>      <div class="must_new" style="padding-bottom: 15px">
                      <span  style="background-color: #ff7701;width: 18px;height: 18px;display: block;float: left;
font-size: 12px;margin-right: 10px;text-align: center;color: #FFFFFF;">2</span>
                    <div>{{flim[0].name}}</div>
                  </div>      <div class="must_new" style="padding-bottom: 15px">
                      <span  style="background-color: #ffb400;width: 18px;height: 18px;display: block;float: left;
font-size: 12px;margin-right: 10px;text-align: center;color: #FFFFFF;">3</span>
                    <div>{{flim[0].name}}</div>
                  </div>      <div class="must_new" style="padding-bottom: 15px">
                      <span  style="background-color: #eee;width: 18px;height: 18px;display: block;float: left;
font-size: 12px;margin-right: 10px;text-align: center;color: #333333;">4</span>
                    <div>{{flim[0].name}}</div>
                  </div>      <div class="must_new" style="padding-bottom: 15px">
                      <span  style="background-color: #eee;width: 18px;height: 18px;display: block;float: left;
font-size: 12px;margin-right: 10px;text-align: center;color: #333333;">5</span>
                    <div>{{flim[0].name}}</div>
                  </div>      <div class="must_new" style="padding-bottom: 15px">
                      <span  style="background-color: #eee;width: 18px;height: 18px;display: block;float: left;
font-size: 12px;margin-right: 10px;text-align: center;color: #333333;">6</span>
                    <div>{{flim[0].name}}</div>
                  </div>  <div class="must_new" style="padding-bottom: 15px">
                      <span  style="background-color: #eee;width: 18px;height: 18px;display: block;float: left;
font-size: 12px;margin-right: 10px;text-align: center;color: #333333;">7</span>
                    <div>{{flim[0].name}}</div>
                  </div>
                  </el-card>
                </div>
              </el-col>
            </el-row>
          </div>
<!--     第三     -->
          <div class="content_2">
            <div class="dp_content" style="height: 30px;font-size: 18px"><h3
              style="margin: 0;padding-right: 10px;display: inline-block;line-height:
  30px;font-weight: 400">
              最新动作片</h3></div>
            <el-row :gutter="20">
              <el-col  v-for=" item in flim2" :key="item.id" :xl="3" :lg="3" :md="6" :sm="8" :xs="8">
                <el-card :body-style="{ padding: '0px' }">
                  <img :src="item.image"  class="image">
                  <div style="padding: 14px;line-height: 20px" >
                    <span>{{item.name}}</span>
                    <p style="margin-top: 5px;font-size: 12px;color: #999">{{item.performer}}</p>
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
                    <div class="must_new" style="padding-bottom: 15px">
                      <span  style="background-color: #ff4a4a;width: 18px;height: 18px;display: block;float: left;
font-size: 12px;margin-right: 10px;text-align: center;color: #FFFFFF;">1</span>
                      <div>{{flim[0].name}}</div>
                    </div>      <div class="must_new" style="padding-bottom: 15px">
                      <span  style="background-color: #ff7701;width: 18px;height: 18px;display: block;float: left;
font-size: 12px;margin-right: 10px;text-align: center;color: #FFFFFF;">2</span>
                    <div>{{flim[0].name}}</div>
                  </div>      <div class="must_new" style="padding-bottom: 15px">
                      <span  style="background-color: #ffb400;width: 18px;height: 18px;display: block;float: left;
font-size: 12px;margin-right: 10px;text-align: center;color: #FFFFFF;">3</span>
                    <div>{{flim[0].name}}</div>
                  </div>      <div class="must_new" style="padding-bottom: 15px">
                      <span  style="background-color: #eee;width: 18px;height: 18px;display: block;float: left;
font-size: 12px;margin-right: 10px;text-align: center;color: #333333;">4</span>
                    <div>{{flim[0].name}}</div>
                  </div>      <div class="must_new" style="padding-bottom: 15px">
                      <span  style="background-color: #eee;width: 18px;height: 18px;display: block;float: left;
font-size: 12px;margin-right: 10px;text-align: center;color: #333333;">5</span>
                    <div>{{flim[0].name}}</div>
                  </div>      <div class="must_new" style="padding-bottom: 15px">
                      <span  style="background-color: #eee;width: 18px;height: 18px;display: block;float: left;
font-size: 12px;margin-right: 10px;text-align: center;color: #333333;">6</span>
                    <div>{{flim[0].name}}</div>
                  </div>  <div class="must_new" style="padding-bottom: 15px">
                      <span  style="background-color: #eee;width: 18px;height: 18px;display: block;float: left;
font-size: 12px;margin-right: 10px;text-align: center;color: #333333;">7</span>
                    <div>{{flim[0].name}}</div>
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
              最新动作片</h3></div>
            <el-row :gutter="20">
              <el-col  v-for=" item in flim2" :key="item.id" :xl="3" :lg="3" :md="6" :sm="8" :xs="8">
                <el-card :body-style="{ padding: '0px' }">
                  <img :src="item.image"  class="image">
                  <div style="padding: 14px;line-height: 20px" >
                    <span>{{item.name}}</span>
                    <p style="margin-top: 5px;font-size: 12px;color: #999">{{item.performer}}</p>
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
                    <div class="must_new" style="padding-bottom: 15px">
                      <span  style="background-color: #ff4a4a;width: 18px;height: 18px;display: block;float: left;
font-size: 12px;margin-right: 10px;text-align: center;color: #FFFFFF;">1</span>
                      <div>{{flim[0].name}}</div>
                    </div>      <div class="must_new" style="padding-bottom: 15px">
                      <span  style="background-color: #ff7701;width: 18px;height: 18px;display: block;float: left;
font-size: 12px;margin-right: 10px;text-align: center;color: #FFFFFF;">2</span>
                    <div>{{flim[0].name}}</div>
                  </div>      <div class="must_new" style="padding-bottom: 15px">
                      <span  style="background-color: #ffb400;width: 18px;height: 18px;display: block;float: left;
font-size: 12px;margin-right: 10px;text-align: center;color: #FFFFFF;">3</span>
                    <div>{{flim[0].name}}</div>
                  </div>      <div class="must_new" style="padding-bottom: 15px">
                      <span  style="background-color: #eee;width: 18px;height: 18px;display: block;float: left;
font-size: 12px;margin-right: 10px;text-align: center;color: #333333;">4</span>
                    <div>{{flim[0].name}}</div>
                  </div>      <div class="must_new" style="padding-bottom: 15px">
                      <span  style="background-color: #eee;width: 18px;height: 18px;display: block;float: left;
font-size: 12px;margin-right: 10px;text-align: center;color: #333333;">5</span>
                    <div>{{flim[0].name}}</div>
                  </div>      <div class="must_new" style="padding-bottom: 15px">
                      <span  style="background-color: #eee;width: 18px;height: 18px;display: block;float: left;
font-size: 12px;margin-right: 10px;text-align: center;color: #333333;">6</span>
                    <div>{{flim[0].name}}</div>
                  </div>  <div class="must_new" style="padding-bottom: 15px">
                      <span  style="background-color: #eee;width: 18px;height: 18px;display: block;float: left;
font-size: 12px;margin-right: 10px;text-align: center;color: #333333;">7</span>
                    <div>{{flim[0].name}}</div>
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
              <el-col  v-for=" item in flim2" :key="item.id" :xl="3" :lg="3" :md="6" :sm="8" :xs="8">
                <el-card :body-style="{ padding: '0px' }">
                  <img :src="item.image"  class="image">
                  <div style="padding: 14px;line-height: 20px" >
                    <span>{{item.name}}</span>
                    <p style="margin-top: 5px;font-size: 12px;color: #999">{{item.performer}}</p>
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
                    <div class="must_new" style="padding-bottom: 15px">
                      <span  style="background-color: #ff4a4a;width: 18px;height: 18px;display: block;float: left;
font-size: 12px;margin-right: 10px;text-align: center;color: #FFFFFF;">1</span>
                      <div>{{flim[0].name}}</div>
                    </div>      <div class="must_new" style="padding-bottom: 15px">
                      <span  style="background-color: #ff7701;width: 18px;height: 18px;display: block;float: left;
font-size: 12px;margin-right: 10px;text-align: center;color: #FFFFFF;">2</span>
                    <div>{{flim[0].name}}</div>
                  </div>      <div class="must_new" style="padding-bottom: 15px">
                      <span  style="background-color: #ffb400;width: 18px;height: 18px;display: block;float: left;
font-size: 12px;margin-right: 10px;text-align: center;color: #FFFFFF;">3</span>
                    <div>{{flim[0].name}}</div>
                  </div>      <div class="must_new" style="padding-bottom: 15px">
                      <span  style="background-color: #eee;width: 18px;height: 18px;display: block;float: left;
font-size: 12px;margin-right: 10px;text-align: center;color: #333333;">4</span>
                    <div>{{flim[0].name}}</div>
                  </div>      <div class="must_new" style="padding-bottom: 15px">
                      <span  style="background-color: #eee;width: 18px;height: 18px;display: block;float: left;
font-size: 12px;margin-right: 10px;text-align: center;color: #333333;">5</span>
                    <div>{{flim[0].name}}</div>
                  </div>      <div class="must_new" style="padding-bottom: 15px">
                      <span  style="background-color: #eee;width: 18px;height: 18px;display: block;float: left;
font-size: 12px;margin-right: 10px;text-align: center;color: #333333;">6</span>
                    <div>{{flim[0].name}}</div>
                  </div>  <div class="must_new" style="padding-bottom: 15px">
                      <span  style="background-color: #eee;width: 18px;height: 18px;display: block;float: left;
font-size: 12px;margin-right: 10px;text-align: center;color: #333333;">7</span>
                    <div>{{flim[0].name}}</div>
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
              <el-col  v-for=" item in flim2" :key="item.id" :xl="3" :lg="3" :md="6" :sm="8" :xs="8">
                <el-card :body-style="{ padding: '0px' }">
                  <img :src="item.image"  class="image">
                  <div style="padding: 14px;line-height: 20px" >
                    <span>{{item.name}}</span>
                    <p style="margin-top: 5px;font-size: 12px;color: #999">{{item.performer}}</p>
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
                    <div class="must_new" style="padding-bottom: 15px">
                      <span  style="background-color: #ff4a4a;width: 18px;height: 18px;display: block;float: left;
font-size: 12px;margin-right: 10px;text-align: center;color: #FFFFFF;">1</span>
                      <div>{{flim[0].name}}</div>
                    </div>      <div class="must_new" style="padding-bottom: 15px">
                      <span  style="background-color: #ff7701;width: 18px;height: 18px;display: block;float: left;
font-size: 12px;margin-right: 10px;text-align: center;color: #FFFFFF;">2</span>
                    <div>{{flim[0].name}}</div>
                  </div>      <div class="must_new" style="padding-bottom: 15px">
                      <span  style="background-color: #ffb400;width: 18px;height: 18px;display: block;float: left;
font-size: 12px;margin-right: 10px;text-align: center;color: #FFFFFF;">3</span>
                    <div>{{flim[0].name}}</div>
                  </div>      <div class="must_new" style="padding-bottom: 15px">
                      <span  style="background-color: #eee;width: 18px;height: 18px;display: block;float: left;
font-size: 12px;margin-right: 10px;text-align: center;color: #333333;">4</span>
                    <div>{{flim[0].name}}</div>
                  </div>      <div class="must_new" style="padding-bottom: 15px">
                      <span  style="background-color: #eee;width: 18px;height: 18px;display: block;float: left;
font-size: 12px;margin-right: 10px;text-align: center;color: #333333;">5</span>
                    <div>{{flim[0].name}}</div>
                  </div>      <div class="must_new" style="padding-bottom: 15px">
                      <span  style="background-color: #eee;width: 18px;height: 18px;display: block;float: left;
font-size: 12px;margin-right: 10px;text-align: center;color: #333333;">6</span>
                    <div>{{flim[0].name}}</div>
                  </div>  <div class="must_new" style="padding-bottom: 15px">
                      <span  style="background-color: #eee;width: 18px;height: 18px;display: block;float: left;
font-size: 12px;margin-right: 10px;text-align: center;color: #333333;">7</span>
                    <div>{{flim[0].name}}</div>
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
              <el-col  v-for=" item in flim2" :key="item.id" :xl="3" :lg="3" :md="6" :sm="8" :xs="8">
                <el-card :body-style="{ padding: '0px' }">
                  <img :src="item.image"  class="image">
                  <div style="padding: 14px;line-height: 20px" >
                    <span>{{item.name}}</span>
                    <p style="margin-top: 5px;font-size: 12px;color: #999">{{item.performer}}</p>
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
                    <div class="must_new" style="padding-bottom: 15px">
                      <span  style="background-color: #ff4a4a;width: 18px;height: 18px;display: block;float: left;
font-size: 12px;margin-right: 10px;text-align: center;color: #FFFFFF;">1</span>
                      <div>{{flim[0].name}}</div>
                    </div>      <div class="must_new" style="padding-bottom: 15px">
                      <span  style="background-color: #ff7701;width: 18px;height: 18px;display: block;float: left;
font-size: 12px;margin-right: 10px;text-align: center;color: #FFFFFF;">2</span>
                    <div>{{flim[0].name}}</div>
                  </div>      <div class="must_new" style="padding-bottom: 15px">
                      <span  style="background-color: #ffb400;width: 18px;height: 18px;display: block;float: left;
font-size: 12px;margin-right: 10px;text-align: center;color: #FFFFFF;">3</span>
                    <div>{{flim[0].name}}</div>
                  </div>      <div class="must_new" style="padding-bottom: 15px">
                      <span  style="background-color: #eee;width: 18px;height: 18px;display: block;float: left;
font-size: 12px;margin-right: 10px;text-align: center;color: #333333;">4</span>
                    <div>{{flim[0].name}}</div>
                  </div>      <div class="must_new" style="padding-bottom: 15px">
                      <span  style="background-color: #eee;width: 18px;height: 18px;display: block;float: left;
font-size: 12px;margin-right: 10px;text-align: center;color: #333333;">5</span>
                    <div>{{flim[0].name}}</div>
                  </div>      <div class="must_new" style="padding-bottom: 15px">
                      <span  style="background-color: #eee;width: 18px;height: 18px;display: block;float: left;
font-size: 12px;margin-right: 10px;text-align: center;color: #333333;">6</span>
                    <div>{{flim[0].name}}</div>
                  </div>  <div class="must_new" style="padding-bottom: 15px">
                      <span  style="background-color: #eee;width: 18px;height: 18px;display: block;float: left;
font-size: 12px;margin-right: 10px;text-align: center;color: #333333;">7</span>
                    <div>{{flim[0].name}}</div>
                  </div>
                  </el-card>
                </div>
              </el-col>
            </el-row>
          </div>
<!--     榜单部分     -->
          <div class="content_list">
            <el-row :gutter="20">
              <div>
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
          </div>

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
                    <div class="bg_div_image" >
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
      flim: [{ id: 1, name: '热血少年', performer: '黄子韬,张雪迎,刘宇', image: 'http://cn2.3days.cc/1571767207734264.jpeg' },
        { id: 2, name: '热血少年', performer: '黄子韬,张雪迎,刘宇', image: 'http://cn2.3days.cc/1571767207734264.jpeg' },
        { id: 3, name: '热血少年', performer: '黄子韬,张雪迎,刘宇', image: 'http://cn2.3days.cc/1571767207734264.jpeg' },
        { id: 4, name: '热血少年', performer: '黄子韬,张雪迎,刘宇', image: 'http://cn2.3days.cc/1571767207734264.jpeg' },
        { id: 5, name: '热血少年', performer: '黄子韬,张雪迎,刘宇', image: 'http://cn2.3days.cc/1571767207734264.jpeg' },
        { id: 6, name: '热血少年', performer: '黄子韬,张雪迎,刘宇', image: 'http://cn2.3days.cc/1571767207734264.jpeg' },
        { id: 7, name: '热血少年', performer: '黄子韬,张雪迎,刘宇', image: 'http://cn2.3days.cc/1571767207734264.jpeg' },
        { id: 8, name: '热血少年', performer: '黄子韬,张雪迎,刘宇', image: 'http://cn2.3days.cc/1571767207734264.jpeg' }],
      flim2: [{ id: 1, name: '热血少年', performer: '黄子韬,张雪迎,刘宇', image: 'http://cn2.3days.cc/1571767207734264.jpeg' },
        { id: 2, name: '热血少年', performer: '黄子韬,张雪迎,刘宇', image: 'http://cn2.3days.cc/1571767207734264.jpeg' },
        { id: 3, name: '热血少年', performer: '黄子韬,张雪迎,刘宇', image: 'http://cn2.3days.cc/1571767207734264.jpeg' },
        { id: 4, name: '热血少年', performer: '黄子韬,张雪迎,刘宇', image: 'http://cn2.3days.cc/1571767207734264.jpeg' },
        { id: 5, name: '热血少年', performer: '黄子韬,张雪迎,刘宇', image: 'http://cn2.3days.cc/1571767207734264.jpeg' },
        { id: 6, name: '热血少年', performer: '黄子韬,张雪迎,刘宇', image: 'http://cn2.3days.cc/1571767207734264.jpeg' }],
      //  电影榜单
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
    background-image: url('https://tu.tianzuida.com/pic/upload/vod/2019-11-26/201911261574759592.jpg');
    margin: 0;
    padding: 0;
    float: left;
  }
  .first_content_list_detail{
  }
  .bg_div_image{
    width: 100%; height: 100%; padding-top: 140%;
    background-image: url(http://imgwx3.2345.com/dypcimg/star/img/a/8/24330/photo_192x262.jpg?1509946884);
    background-repeat: no-repeat;
    background-size: 100% 100%;
    -moz-background-size: 100% 100%;text-align: right;
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
