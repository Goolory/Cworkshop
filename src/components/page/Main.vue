<template>
  <div class="el_cont">
    <div class="high-size">查询系统</div>
    <div class="shadwon">
      <div class="mb_bg">
        <div class="tim">
          <i class="el-icon-search" style="margin-right:5px"></i>终端查询
        </div>
        <el-form ref="form" :model="form" label-width="80px" style="padding-left: 10%;">
          <el-col :span="8">
            <el-form-item label="工坊号">
              <el-input v-model="form.Sid" style="width:200px"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item label="房间号">
              <el-input v-model="form.Roomid" style="width:200px"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item>
              <el-button type="primary" @click="onSubmit">搜索</el-button>
            </el-form-item>
          </el-col>
        </el-form>
        <!-- </el-card> -->
        <!-- <el-card shadow="hover" class="search-card"> -->
        <!-- <div>
      <span>工坊信息</span>
        </div>-->
<div class="gfxx"><i class="el-icon-document" style="margin-right:5px"></i>工坊信息</div>
        <table class="table" cellpadding="0" cellspacing="0">
          <tr>
            <th>工坊号：</th>
            <th>房间号：</th>
            <th>房间名：</th>
            <th>额定人数：</th>
            <th>实际人数</th>
          </tr>
          <tr align="center">
            <td>{{Sid}}</td>
            <td>{{Roomid}}</td>
            <td>{{Roomname}}</td>
            <td>{{Stationnum}}</td>
            <td>{{Realitynum}}</td>
          </tr>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
import { searchRoom } from "./../../api/api";
export default {
  data() {
    return {
      form: {
        Sid: "",
        Roomid: ""
      },
      Sid: "0",
      Roomid: "0",
      Roomname: "<房间名>",
      Stationnum: "0",
      Realitynum: "0"
    };
  },
  methods: {
    search: function() {},
    onSubmit: function() {
      if (this.form.Sid == "") {
        this.$message({
          message: "请输入工坊号",
          type: "warning"
        });
        return;
      } else if (this.form.Roomid == "") {
        this.$message({
          message: "请输入房间号",
          type: "warning"
        });
        return;
      }
      let params = {
        Sid: this.form.Sid,
        Roomid: this.form.Roomid
      };
      searchRoom(params).then(res => {
        if (res != "") {
          this.Sid = this.form.Sid;
          this.Roomid = this.form.Roomid;
          this.Stationnum = res[0];
          this.Realitynum = res[1];
          this.Roomname = res[2];
        } else {
          this.$message({
            message: "查询位置不存在",
            type: "warning"
          });
        }
      });
    }
  }
};
</script>

<style scoped>
.table {
  width: 100%;
  padding: 0px 10% 0 10%;
  border: none;
}

.table th {
  background-color: #bbe1f9;
  line-height: 40px;
  color: #222222;
}
.table td {
  line-height: 60px;
  border-bottom: 1px solid #65adef;
}
.shadwon {
  /* background-color: #6f9dd6; */
}
.mb_bg {
  background: url(../../assets/mb_bg.png);
  height: 475px;
  margin-top: 40px;
  box-shadow: 0px 0px 10px 10px #6f9dd6;
  background-size: 100% 100%;
}
.gfxx{
    color: #000;
  line-height: 100px;
  font-size: 20px;
  padding-left: 10%;
      margin-top: 80px;
}
.tim {
  color: #000;
  line-height: 100px;
  font-size: 20px;
  padding-left: 10%;
}
.high-size {
  font-family: "Helvetica Neue", Helvetica, "PingFang SC", "Hiragino Sans GB",
    "Microsoft YaHei", "微软雅黑", Arial, sans-serif;
  font-size: 36px;
  line-height: 1.7;
  color: #fff;
  margin-left: -100px;
}
.el_cont {
  height: 100%;
  background: url(../../assets/background_image.png);
  background-size: 100% 100%;
  padding: 80px 20%;
}
.card-center {
  margin-left: 20%;
  margin-top: 30px;
}
.search-card {
  margin-top: 20px;
}
.text {
  font-size: 14px;
}
.item {
  margin-bottom: 18px;
  padding-left: 80px;
}
.clearfix:before,
.clearfix:after {
  display: table;
  content: "";
}
.clearfix:after {
  clear: both;
}
</style>



