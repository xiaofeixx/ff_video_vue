<template>
    <div id="header">
      <!-- 导航栏开发-->
          <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect" router>
           <el-row :gutter="0" id="serach_hidden">
             <el-col :xl="4" :lg="3" :md="4" :sm="6" :xs="6" :span="2">
               <el-menu-item index="#" disabled>
               <div class="block" >
                 <el-image
                   style="height: 50px"
                   :src="url"></el-image>
               </div>
             </el-menu-item></el-col>
             <el-col :xl="2" :lg="2" :md="2" class="hidden-sm-and-down">
               <el-menu-item index="/" >首页</el-menu-item></el-col>
             <el-col :xl="2" :lg="2" :md="2" class="hidden-sm-and-down"> <el-menu-item index="/film" >电影</el-menu-item></el-col>
             <el-col :xl="2" :lg="2" :md="2" class="hidden-sm-and-down"> <el-menu-item index="/tv">电视剧</el-menu-item></el-col>
             <el-col :xl="2" :lg="2" :md="2" class="hidden-sm-and-down"><el-menu-item index="/cartoon" >动漫</el-menu-item></el-col>
             <el-col :xl="2" :lg="2" :md="2" class="hidden-sm-and-down" ><el-menu-item index="/variety">综艺</el-menu-item></el-col>
             <el-col :xl="2" :lg="2"  class="hidden-md-and-down"> <el-menu-item index="/child" >少儿</el-menu-item></el-col>
             <el-col :xl="2" :lg="2" :md="2" :sm="3" :xs="4"><el-menu-item ><a target="_blank">
               <el-dropdown @command="handleCommand">
  <span class="el-dropdown-link">
    频道<i class="el-icon-arrow-down el-icon--right"></i>
  </span>
                 <el-dropdown-menu slot="dropdown">
                   <el-card class="box-card" :body-style="{width: cardWidth}">
                    <el-row :gutter="20">
                      <el-col :xl="4" :lg="4" :md="4" :sm="6" :xs="6"><el-dropdown-item command="a"><el-button>电影</el-button></el-dropdown-item></el-col>
                      <el-col :xl="4" :lg="4" :md="4" :sm="6" :xs="6"><el-button>电视剧</el-button></el-col>
                      <el-col :xl="4" :lg="4" :md="4" :sm="6" :xs="6"><el-button>电视剧</el-button></el-col>
                      <el-col :xl="4" :lg="4" :md="4" :sm="6" :xs="6"><el-button>电视剧</el-button></el-col>
                      <el-col :xl="4" :lg="4" :md="4" :sm="6" :xs="6"><el-button>电视剧</el-button></el-col>
                      <el-col :xl="4" :lg="4" :md="4" :sm="6" :xs="6"><el-button>电视剧</el-button></el-col>
                      <el-col :xl="4" :lg="4" :md="4" :sm="6" :xs="6"><el-button>电视剧</el-button></el-col>
                      <el-col :xl="4" :lg="4" :md="4" :sm="6" :xs="6"><el-button>电视剧</el-button></el-col>
                      <el-col :xl="4" :lg="4" :md="4" :sm="6" :xs="6"><el-button>电视剧</el-button></el-col>
                      <el-col :xl="4" :lg="4" :md="4" :sm="6" :xs="6"><el-button>电视剧</el-button></el-col>
                      <el-col :xl="4" :lg="4" :md="4" :sm="6" :xs="6"><el-button>电视剧</el-button></el-col>
                      <el-col :xl="4" :lg="4" :md="4" :sm="6" :xs="6"><el-button>电视剧</el-button></el-col>
                    </el-row>
                   </el-card>
                 </el-dropdown-menu>
               </el-dropdown>
             </a></el-menu-item></el-col>
             <el-col :xl="4" :lg="4" :md="4" :sm="7" class="hidden-xs-only">
               <el-menu-item style="background-color: #FFFFFF">
                 <el-input
                   placeholder="请输入资源信息"
                   suffix-icon="el-icon-search"
                 >
                 </el-input>
               </el-menu-item>
             </el-col>
             <el-col :xl="1" :lg="1" :md="1" :sm="2" :xs="2" class="tu"> <el-menu-item  style="background-color: #FFFFFF"><i  class="el-icon-time"></i></el-menu-item></el-col>
             <el-col :xl="1" :lg="1" :md="1" :sm="2" :xs="2" class="tu">   <el-menu-item style="background-color: #FFFFFF" ><i class="el-icon-s-comment"></i></el-menu-item></el-col>
             <el-col :xl="1" :lg="1" :md="1" :sm="2" :xs="2" class="tu">  <el-menu-item  style="background-color: #FFFFFF" >
               <i class="el-icon-s-custom" @click="dialogFormVisible = true"></i></el-menu-item></el-col>
             <el-col :xs="2" class="hidden-sm-and-up tu"><el-menu-item index="14" ><i class="el-icon-search"></i></el-menu-item></el-col>
           </el-row>
          </el-menu>
<!--   登录页面   -->
      <div>
        <el-dialog title="用户登录" :visible.sync="dialogFormVisible" :width="dialogWidth" :center="true">
        <el-form :model="form" >
          <el-form-item label="用户名" :label-width="formLabelWidth">
            <el-input v-model="form.name" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="密码" :label-width="formLabelWidth">
            <el-input v-model="form.name"  autocomplete="off"></el-input>
          </el-form-item>
        </el-form>
        <div slot="footer" class="dialog-footer" style="text-align: center">
          <el-button @click="dialogFormVisible = false">注 册</el-button>
          <el-button type="primary" @click="dialogFormVisible = false">登 录</el-button>
        </div>
        </el-dialog>
      </div>
    </div>
</template>

<script>
export default {
  name: 'Header',
  data () {
    return {
      activeIndex: '',
      dialogWidth: 0,
      cardWidth: 0,
      url: require('../assets/image/logo1.png'),
      gridData: [{
        date: '2016-05-02',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        date: '2016-05-04',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        date: '2016-05-01',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        date: '2016-05-03',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }],
      dialogTableVisible: false,
      dialogFormVisible: false,
      form: {
        name: '',
        region: '',
        date1: '',
        date2: '',
        delivery: false,
        type: [],
        resource: '',
        desc: ''
      },
      formLabelWidth: '120px'
    }
  },
  created () {
    this.setDialogWidth()
  },
  methods: {
    handleCommand (command) {
      alert(command)
    },
    setDialogWidth () {
      console.log(document.body.clientWidth)
      var val = document.body.clientWidth
      const def = 400 // 默认宽度
      if (val < def) {
        this.dialogWidth = '100%'
        this.cardWidth = '100%'
      } else {
        this.dialogWidth = def + 'px'
        this.cardWidth = (def + 100) + 'px'
      }
    },
    handleSelect (index, indexPath) {
      this.activeIndex = index
      console.log(this.activeIndex)
      // this.$router.push(index)
    }
  }
}
</script>

<style lang="less" scoped>
  .el-header {
    background-color: #B3C0D1;
    color: #333;
    text-align: center;
    line-height: 60px;
  }
  .el-main {
    background-color: #E9EEF3;
    color: #333;
    text-align: center;
    line-height: 160px;
  }
  .tu{
    float: right;
  }
  #serach_hidden{

  }
</style>
