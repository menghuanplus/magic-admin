<template>
  <div>
    <Penel :title="title">
        <div slot="header">
          <el-form>
            <el-form-item label="用户id :" label-width="120px" style="display: inline-block;margin: 8px 0 0 0;">
              <el-input v-model="userID" clearable prefix-icon="el-icon-search" placeholder="请填写要搜索id"></el-input>
            </el-form-item>
            <el-form-item label-width="60px" style="display: inline-block;margin: 8px 0 0 0;">
              <el-button type="primary" @click="getSolutions()">搜索</el-button>
            </el-form-item>
          </el-form>

        </div>
      <el-table
          :data="userList"
          stripe
          style="width: 100%">
        <el-table-column
            prop="id"
            label="id"
            width="180">
        </el-table-column>
        <el-table-column
            prop="username"
            label="姓名"
            width="180">
        </el-table-column>
        <el-table-column
            prop="mobile"
            label="电话">
        </el-table-column>
      </el-table>

      <el-pagination
          style="float: right;margin-top: 20px; margin-right: 20px;"
          background
          layout="prev, pager, next"
          @current-change="currentChange"
          :page-size="pageSize"
          :total="total">
      </el-pagination>

    </Penel>
  </div>
</template>

<script>
import PumpkinHttp from '../../utils/PumpkinHttp'

export default {
  name: "Test",
  data() {
    return {
      total: 4,//总条数
      currentPage: 1, //当前页面
      pageSize: 1, //每页显示数量
      userList : [],
      title: '用户列表',
      userID: ""
    }
  },
  mounted() {
    this.getUserList()
  },
  methods: {
    getUserList(page = 1) {
      //查询列表api
      let params = {}
      params.offset = (page - 1) * this.pageSize
      params.pageSize = this.pageSize
      PumpkinHttp.ajax(this.$apiUrl + "/api/userList", "get", { params }).then(res => {
        if (res.data.code == 200) {
          this.userList = res.data.data.userList
        } else {
          //错误信息
        }
      }, () => {

      })
    },
    currentChange(page) {
      this.currentPage = page
      this.getUserList(page)
    }
  }
}
</script>