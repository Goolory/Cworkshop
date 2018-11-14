<template>
    <div class="table">
        <div class="crumbs">
            <el-breadcrumb separator="/">
                <el-breadcrumb-item><i class="el-icon-view"></i> 监控溯源</el-breadcrumb-item>
            </el-breadcrumb>
        </div>
        <div class="container">
            <div class="habdle-box">
                <!-- <el-button type="primary" icon="delete" class="handle-del mr10" @click="delAll">批量删除</el-button> -->
                <!-- <el-select v-model="select_cate" placeholder="筛选省份" class="handle-select mr10">
                    <el-option key="1" label="广东省" value="广东省"></el-option>
                    <el-option key="2" label="湖南省" value="湖南省"></el-option>
                </el-select> -->
                <!-- <el-input v-model="select_word" placeholder="筛选关键词" class="handle-input mr10"></el-input> -->
                <!-- <el-button type="primary" icon="search" @click="search">搜索</el-button> -->
            </div>
            <el-table v-loading="loading" :data="data" border style="width: 100%" ref="multipleTable" @selection-change="handleSelectionChange">
                <el-table-column type="selection" width="55">选择</el-table-column>
                <el-table-column prop="Rid" label="日志ID" width="70">
                </el-table-column>
                <el-table-column prop="Roomid" label="工坊号" sortable width="100">
                </el-table-column>
                <el-table-column prop="Stationnum" label="额定人数" width="80">
                </el-table-column>
                <el-table-column prop="Realitynum" label="实际人数" width="80">
                </el-table-column>
                <el-table-column prop="Reportway" label="报警方式" :formatter="formatterReportWay">
                </el-table-column>
                <el-table-column prop="Time" label="时间" width="120">
                </el-table-column>
                <el-table-column prop="Pictureaddress" label="截图地址" > <!--:formatter="formatter"-->
                </el-table-column>
                <el-table-column prop="Reporeexplain" label="报警说明" >
                </el-table-column>
                <el-table-column label="操作" width="180">
                    <template slot-scope="scope">
                        <el-button size="small" @click="handleEdit(scope.$index, scope.row)">截图查询</el-button>
                        <!-- <el-button size="small" type="danger" @click="handleDelete(scope.$index, scope.row)">删除</el-button> -->
                    </template>
                </el-table-column>
            </el-table>
            <div class="pagination">
                <el-pagination @current-change="handleCurrentChange" layout="prev, pager, next" :total="total">
                </el-pagination>
            </div>
        </div>
    </div>
</template>

<script>
import { AllReport } from "./../../api/api";
export default {
  data() {
    return {
      data: [],
      total: 0,
      select_word: "",
      loading: true
    };
  },
  created() {
    this.getAllReportList();
  },
  methods: {
    getAllReportList: function() {
      AllReport().then(res => {
        if (res != null) {
          for (var key in res) {
            let d = {};
            d["Rid"] = key;
            for (var k in res[key]) {
                
              d[k] = res[key][k];
            }
            this.data.push(d)
            this.total = this.data.length
            this.loading = false
          }
        } else {
          this.$message.error("错了哦，这是一条错误消息");
        }
        console.log(this.data)
      });
    },
    handleCurrentChange: function() {
      console.log(handleCurrentChange);
    },
    handleSelectionChange: function() {
      console.log(handleSelectionChange);
    },
    formatterReportWay: function(row, column) {
        if (row.Reportway == '1') {
            return '终端警报'
        } else if (row.Reportway == '2') {
            return '平台警报'
        } else if (row.Reportway == '3') {
            return '终端警报+平台警报'
        }
    }
  } 
  
};
</script>
<style scoped>
.handle-box {
  margin-bottom: 20px;
}
.handle-select {
  width: 120px;
}

.handle-input {
  width: 300px;
  display: inline-block;
}
.del-dialog-cnt {
  font-size: 16px;
  text-align: center;
}
</style>


