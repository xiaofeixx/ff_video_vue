<template>
    <div id="Footer">
      <el-row>
        <el-col :xl="24" :lg="24" :md="24" :sm="24" :xs="24">
      <p>小飞电影网站所有视频和图片均来自互联网收集而来，版权归原创者所有，
        本网站只提供web页面服务，并不提供资源存储，也不参与录制、上传<br>
        若本站收录的节目无意侵犯了贵司版权，请发邮件至1346574090@qq.com（我们会在3个工作日内删除侵权内容，谢谢。）
      </p>
      <a>作者：小飞</a>
          <p>菲菲电影网(网址)</p>
        </el-col>
      </el-row>
    </div>
</template>

<script>
export default {
  name: 'Footer'
}
</script>

<style lang="less" scoped>
#footer{
  color: #333;
  font-size: 14px;
}
#footer p{
    margin: 0;
  }
</style>
