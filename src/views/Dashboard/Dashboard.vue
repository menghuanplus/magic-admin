<template>
  <div >
    <el-card class="box-card" style="">
      <div class="welcome">
        Welcome {{ userinfo.username }}
      </div>
  </el-card>
  </div>
</template>

<script>
 import { mapGetters } from 'vuex'

  export default {
    name: 'Dashboard',
    data() {
      return {
      }
    },
    computed: {
      ...mapGetters('user', {
        userinfo: 'user'
      })
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
    width: 100% !important;
  }

  .welcome {
    text-align:center;
    width:100%;
    height: 600px;
    line-height:600px;
    font-size:50px;
    color:#409EFF
  ;
  }
</style>