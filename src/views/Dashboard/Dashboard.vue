<template>
  <div >
    <el-card class="box-card" style="text-align:center; width:100%;height: 600px; line-height:600px; font-size:100px; color:#409EFF
;">
      <div>
        Welcome {{ username }}
      </div>
  </el-card>
  </div>
</template>

<script>
  export default {
    name: 'Dashboard',
    data() {
      return {
        username: "王小虎"
      }
    }
  }
</script>


<style>
  .text {
    font-size: 14px;
  }

  .item {
    padding: 18px 0;
  }

  .box-card {
    width: 480px;
  }
</style>