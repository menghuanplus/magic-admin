<template>
  <div>
    <div class="login"><span>欢迎登录后台</span></div>
    <div id="wx_qrcode"></div>
  </div>
</template>
<script>
  import PumpkinHttp from '../../utils/PumpkinHttp'
  export default {
    methods: {
      getStaffInfo(code) {
        let data = {
          code: code
        }
        PumpkinHttp.ajax(this.$apiUrl + '/api/login', 'post', {data}).then(res => {
          if (res.data.code == 1) {
            localStorage.setItem('Authorization', res.data.data.token);
            this.$router.push({name: 'dashboard'})
          } else {
            this.$router.push({name: 'login'})
            //错误信息
          }
        }, () => {
          this.$router.push({name: 'login'})
        })
      },
    },
    mounted() {
      if(this.$route.query.code) {
        this.getStaffInfo(this.$route.query.code)
      }

      window.WwLogin({
        id: 'wx_qrcode', // 登录页面显示二维码的容器id
        appid: process.env.VUE_APP_QYWX_APPID, // 企业微信的CorpID，在企业微信管理端查看
        agentid: process.env.VUE_APP_QYWX_AGENTID, // 授权方的网页应用id，在具体的网页应用中查看
        redirect_uri: encodeURIComponent(document.location.origin + '/login'), // 重定向的地址，需要进行encode
      })
    },
    watch: {
    }
  }
</script>

<style lang="less" scoped>
  #wx_qrcode {
    /*box-shadow: 0 0px 8px 0 rgba(0, 0, 0, 0.06), 0 1px 0px 0 rgba(0, 0, 0, 0.02);*/
    -webkit-border-radius: 5px;
    border-radius: 5px;
    -moz-border-radius: 5px;
    background-clip: padding-box;
    margin: 140px auto;
    width: 365px;
    padding: 35px 35px 15px 35px;
    background: #fff;
    border: 1px solid #eaeaea;
    box-shadow: 0 0 25px #cac6c6;

    .title {
      margin: 0px auto 40px auto;
      text-align: center;
      color: #505458;
    }

    .remember {
      margin: 0px 0px 35px 0px;
    }
  }

  .login {
    margin: 0 auto;
    width: 300px;
    font-size: 25px;
    padding-top: 100px;
    height: 100px;
    line-height: 100px;
    //color: #505458;
    color:#409EFF
  }
</style>