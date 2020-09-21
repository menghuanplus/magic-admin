<template>
  <div class="container">

    <div>
      <side-menu></side-menu>
    </div>

    <div id="header">
      <div class="company">
        <span>管理后台</span>
      </div>
      <el-dropdown @command="handleCommand">
        <div class="cont-avatar">
          <img class="avatar" :src="userinfo.avatar ">
          <span style="font-size: 18px;">{{ userinfo.username }}<i class="el-icon-caret-bottom el-icon--right"></i></span>
        </div>

        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item command="logout">退出</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>

    <div class="content-app">
      <transition name="fadeInUp" mode="out-in">
        <router-view></router-view>
      </transition>
    </div>

  </div>
</template>

<script>
  import SideMenu from '@/components/SideMenu.vue'
  import PumpkinHttp from '@/utils/PumpkinHttp'
  import { mapGetters } from 'vuex'

  export default {
    components: {
      SideMenu
    },
    data() {
      return {
      }
    },
    beforeRouteEnter (to, from, next) {
      PumpkinHttp.ajax( process.env.VUE_APP_URL + "/api/profile","get").then(res => {
        if (!res.data.data || res.data.code == 401) {
          // not login
          next({name: 'login'})
        } else {
          next(vm => {
            vm.$store.commit("user/setUser", res.data.data.user)
          })
        }
      })
    },
    mounted() {

    },
    methods: {
      handleCommand(command) {
        if (command === 'logout') {
          localStorage.removeItem('Authorization');
          this.$router.push({name: 'login'})
        }
      }
    },
    computed: {
      ...mapGetters('user', {
        userinfo: 'user'
      })
    }
  };
</script>

<style lang="less">
  a {
    background-color: transparent;
  }

  a:active,
  a:hover {
    outline-width: 0
  }

  img {
    border-style: none
  }

  .container {
    overflow: auto;
    font-weight: 400;
    height: 100%;
    -webkit-font-smoothing: antialiased;
    background-color: #EDECEC;
    overflow-y: scroll;
    min-width: 1000px;
  }

  * {
    box-sizing: border-box;
  }

  #header {
    text-align: right;
    padding-left: 210px;
    padding-right: 30px;
    line-height: 50px;
    height: 50px;
    background: #F9FAFC;

    .screen-full {
      margin-right: 8px;
    }
  }

  .content-app {
    padding-top: 20px;
    padding-right: 10px;
    padding-left: 210px;
  }

  .footer {
    margin: 15px;
    text-align: center;
    font-size: small;
  }

  @keyframes fadeInUp {
    from {
      opacity: 0;
      transform: translate(0, 30px);
    }

    to {
      opacity: 1;
      transform: none;
    }
  }

  .fadeInUp-enter-active {
    animation: fadeInUp .8s;
  }

  .katex-editor {
    margin-right: 5px;
    /*font-size: 18px;*/
  }
  .cont-avatar {
    display: inline-flex;
    align-items: center;
  }
  .avatar {
    width: 35px;
    height: 35px;
    margin-right: 10px;
    border-radius: 50%;
  }
  .company {
    display:inline-flex;
    float: left;
    font-size: 18px;
    padding-left: 10px;
    color:#409EFF;
    font-weight:bold;
  }
</style>