<template>
    <el-menu class="vertical_menu" :router="true" :default-active="currentPath" :default-openeds="['1', '3']">
     <div class="logo">
      <img src="../assets/logo.svg" alt="oj admin"/>
    </div>
     <el-menu-item index="/dashboard"><i class="el-icon-house"></i>欢迎页</el-menu-item>
      <el-submenu index="1">
        <template slot="title"><i class="el-icon-message"></i>导航一</template>
          <el-menu-item index="/test">选项1</el-menu-item>
          <el-menu-item index="/meng">选项2</el-menu-item>
          <el-menu-item index="1-3">选项3</el-menu-item>
      </el-submenu>
      <el-submenu index="2">
        <template slot="title"><i class="el-icon-menu"></i>导航二</template>
          <el-menu-item index="2-1">选项1</el-menu-item>
          <el-menu-item index="2-2">选项2</el-menu-item>
          <el-menu-item index="2-3">选项3</el-menu-item>
      </el-submenu>
      <el-submenu index="3">
        <template slot="title"><i class="el-icon-setting"></i>导航三</template>
          <el-menu-item index="3-1">选项1</el-menu-item>
          <el-menu-item index="3-2">选项2</el-menu-item>
          <el-menu-item index="3-3">选项3</el-menu-item>
      </el-submenu>
    </el-menu>
</template>

<script>
  export default {
    name: 'SideMenu',
     data () {
      return {
        currentPath: ''
      }
    },
    mounted () {
      this.currentPath = this.$route.path
    }
  }
</script>


<style scoped lang="less">
  .vertical_menu {
    overflow: auto;
    width: 205px;
    height: 100%;
    position: fixed !important;
    z-index: 100;
    top: 0;
    bottom: 0;
    left: 0;
    .logo {
      margin: 20px 0;
      text-align: center;
      img {
        background-color: #fff;
        border-radius: 50%;
        border: 3px solid #fff;
        width: 75px;
        height: 75px;
      }
    }
  }
</style>