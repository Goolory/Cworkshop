<template>
<el-container class="el_cont">
    <el-header ><div class="high-size">查询系统</div></el-header>
    <el-main>
        
        <div class="crumbs">
            <el-breadcrumb separator="/">
                <el-breadcrumb-item><i class="el-icon-search"></i> 终端查询</el-breadcrumb-item>
            </el-breadcrumb>
        </div>
        <!-- <div class="container"> -->
        <el-card shadow="hover">
            <el-form ref="form" :model="form" label-width="80px">
                <el-col :span="7">
                    <el-form-item label="工坊号">
                        <el-input v-model="form.Sid"></el-input>
                    </el-form-item>
                </el-col>
                <el-col :span="7">
                    <el-form-item label="房间号">
                        <el-input v-model="form.Roomid"></el-input>
                    </el-form-item>
                </el-col>
                <el-col :span="6">
                    <el-form-item>
                        <el-button type="primary" @click="onSubmit">搜索</el-button>
                    </el-form-item>
                </el-col>
            </el-form>
        </el-card>
        <el-card shadow="hover" class="search-card">
            <div slot="header" class="clearfix">
                <span>工坊信息</span>
            </div>
            <div class="card-center">
                <el-row>
                    <el-col :span="8">
                        <div class="item text">工坊号：</div>
                    </el-col>
                    <el-col :span="8">
                        {{Sid}}
                    </el-col>
                </el-row>
                <el-row>
                    <el-col :span="8">
                        <div class="item text">房间号：</div>
                    </el-col>
                    <el-col :span="8">
                        {{Roomid}}
                    </el-col>
                </el-row>
                <el-row>
                    <el-col :span="8">
                        <div class="item text">房间名：</div>
                    </el-col>
                    <el-col :span="8">
                        {{Roomname}}
                    </el-col>
                </el-row>
                <el-row>
                    <el-col :span="8">
                        <div class="item text">额定人数：</div>
                    </el-col>
                    <el-col :span="8">
                        {{Stationnum}}
                    </el-col>
                </el-row>
                <el-row>
                    <el-col :span="8">
                        <div class="item text">实际人数</div>
                    </el-col>
                    <el-col :span="8">
                        {{Realitynum}}
                    </el-col>
                </el-row>
            </div>
        </el-card>
        <!-- </div> -->
    </el-main>
    </el-container>
</template>

<script>
    import {
        searchRoom
    } from "./../../api/api";
    export default {
        data() {
            return {
                form: {
                    Sid: '',
                    Roomid: ''
                },
                Sid: '0',
                Roomid: '0',
                Roomname: '<房间名>',
                Stationnum: '0',
                Realitynum: '0'
            };
        },
        methods: {
            search: function() {},
            onSubmit: function() {
                if (this.form.Sid == '') {
                    this.$message({
                        message: '请输入工坊号',
                        type: 'warning'
                    })
                    return
                } else if (this.form.Roomid == '') {
                    this.$message({
                        message: '请输入房间号',
                        type: 'warning'
                    })
                    return
                }
                let params = {
                    Sid: this.form.Sid,
                    Roomid: this.form.Roomid,
                }
                searchRoom(params).then(res => {
                    if (res != "") {
                        this.Sid = this.form.Sid
                        this.Roomid = this.form.Roomid
                        this.Stationnum = res[0]
                        this.Realitynum = res[1]
                        this.Roomname = res[2]
                    } else {
                       this.$message({
                        message: '查询位置不存在',
                        type: 'warning'
                    }) 
                    }
                })
            },
        }
    };
</script>

<style scoped>
.high-size{
    font-family: "Helvetica Neue",Helvetica,"PingFang SC","Hiragino Sans GB","Microsoft YaHei","微软雅黑",Arial,sans-serif;
    font-size: 36px;
    line-height:1.7 
}
.el_cont{
    /* margin-top: 20px; */
    margin: 10px 10% 0 10%;
    
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
        clear: both
    }
</style>



