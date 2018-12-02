<template>
    <div>
        <div class="crumbs">
            <el-breadcrumb separator="/">
                <el-breadcrumb-item><i class="el-icon-bell"></i> 定员报警</el-breadcrumb-item>
            </el-breadcrumb>
        </div>
        <div class="container">
            <div class="form-box">
                <el-form ref="form" :model="form" label-width="150px">
                    <el-form-item label="日志存储地址">
                        <el-input v-model="form.Recordaddress"></el-input>
                    </el-form-item>
                    <el-form-item label="图片存储地址">
                        <el-input v-model="form.Pictureaddress"></el-input>
                    </el-form-item>
                    <el-form-item label="报警方式">
                        <el-select v-model="form.Reportway" placeholder="请选择">
                            <el-option key="zd" label="终端警报" value="1"></el-option>
                            <el-option key="pt" label="平台警报" value="2"></el-option>
                            <el-option key="zp" label="终端警报+平台警报" value="3"></el-option>
                        </el-select>
                    </el-form-item>
                    <el-form-item label="定时清理">
                        <el-select v-model="form.Cleantime" placeholder="请选择">
                            <el-option key="one" label="24小时" value="86400"></el-option>
                            <el-option key="two" label="48小时" value="172800"></el-option>
                            <el-option key="three" label="72小时" value="259200"></el-option>
                        </el-select>
                    </el-form-item>
                    <el-form-item>
                        <el-button type="primary" @click="onSubmit">提交</el-button>
                        <el-button>取消</el-button>
                    </el-form-item>
                </el-form>
            </div>
        </div>
    </div>
</template>

<script>
    import {
        addAlarm
    } from "./../../api/api";
    export default {
        data: function() {
            return {
                form: {
                    Recordaddress: '',
                    Pictureaddress: '',
                    Reportway: '1',
                    Cleantime: '86400',
                }
            }
        },
        methods: {
            onSubmit() {
                if (this.form.Recordaddress == '') {
                    this.$message({
                        message: '请输入日志存储地址',
                        type: 'warning'
                    })
                    return
                } else if (this.form.Pictureaddress == '') {
                    this.$message({
                        message: '请输入图片存储地址',
                        type: 'warning'
                    })
                    return
                }
                let params = {
                    record_address: this.form.Recordaddress,
                    picture_address: this.form.Pictureaddress,
                    report_way: this.form.Reportway,
                    clean_time: this.form.Cleantime
                }
                addAlarm(params).then(res => {
                    if (res == true) {
                        this.$message.success('提交成功！');
                    } else {
                        this.$message({
                            message: '提交失败！',
                            type: 'warning'
                        })
                    }
                })
                console.log(this.form)
            }
        }
    }
</script>