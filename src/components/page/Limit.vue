<template>
    <div>
        <div class="crumbs">
            <el-breadcrumb separator="/">
                <el-breadcrumb-item><i class="el-icon-edit"></i>工坊定员</el-breadcrumb-item>
            </el-breadcrumb>
        </div>
        <div class="container">
            <div class="form-box">
                <el-form ref="form" :model="form" label-width="150px">
                    <el-form-item label="工坊号">
                        <el-input v-model="form.Sid" disabled="disabled"></el-input>
                    </el-form-item>
                    <el-form-item label="工坊名称">
                        <el-input v-model="form.Factoryname"></el-input>
                    </el-form-item>
                    <el-form-item label="工坊额定人数">
                        <el-input v-model="form.Stationnum"></el-input>
                    </el-form-item>
                    <el-form-item label="工坊房间数目">
                        <el-input-number v-model="form.Roomnum" @change="handleChangeRoomnum" :min="1" :max="10" label="工坊房间数目"></el-input-number>
                        <!--@change="handleChange"-->
                    </el-form-item>
                    <el-form-item label="工坊房间">
                        <el-select v-model="value" placeholder="请选择" @change="handleChangeRoom">
                            <el-option v-for="item in Rooms" :key="item.label" :label="item.label" :value="item.label">
                            </el-option>
                        </el-select>
                    </el-form-item>
                    <el-form-item label="工坊房间额定人数">
                        <el-input-number v-model="form.RoomPersonNum" @change="handleChangePersonNum" :min="0" label="工坊房间额定人数"></el-input-number>
                    </el-form-item>
                    <el-form-item label="工位地址">
                        <el-input v-model="form.Station"></el-input>
                    </el-form-item>
                    <el-form-item label="工坊说明">
                        <el-input v-model="form.Stationexplain"></el-input>
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
        getFactoryBySid,postFactory
    } from "./../../api/api";
    export default {
        data: function() {
            return {
                form: {
                    Sid: '1',
                    Factoryname: '第三工坊',
                    Stationexplain: '第三工坊',
                    Station: '南京',
                    Roomnum: 1,
                    Stationnum: 0,
                    Room: [],
                    RoomPersonNum: 0
                },
                original_Roomnum: 0,
                Rooms: [],
                ObjRooms: {},
                value: "",
                RoomPersonNumValue: ""
            }
        },
        created() {
            this.getFactoryBySid();
        },
        methods: {
            handleChangePersonNum(value) {
                this.ObjRooms[this.RoomPersonNumValue] = value
            },
            handleChangeRoomnum(value) {
                if (value > this.Rooms.length) {
                    for (var i = this.Rooms.length + 1; i <= value; i++) {
                        let num = 'Room_' + i + '_num'
                        this.ObjRooms[num] = 0
                        this.Rooms.push({
                            label: num,
                            value: 0
                        })
                    }
                } else if (value < this.Rooms.length) {
                    this.$confirm('您正在做删除操作，当点击页面中"提交"按钮时执行该操作，是否继续？', '提示', {
                        confirmButtonText: '确定',
                        cancelButtonText: '取消',
                        type: 'warning'
                    }).then(() => {
                        if (value > 0) {
                            this.Rooms.pop()
                            delete this.ObjRooms['Room_' + ++value + '_num']
                        }
                        this.$message({
                            type: 'success',
                            message: '点击"提交"时执行操作!'
                        });
                    }).catch(() => {
                        this.$message({
                            type: 'info',
                            message: '已取消删除'
                        });
                        ++this.form.Roomnum
                        console.log(this.form.Roomnum)
                    })
                }
                this.original_Roomnum = value
                console.log(this.Rooms)
                console.log(this.ObjRooms)
            },
            handleChangeRoom(value) {
                this.form.RoomPersonNum = this.ObjRooms[value]
                this.RoomPersonNumValue = value
            },
            // onSubmit() {
            //     this.$message.success('提交成功！');
            // },
            getFactoryBySid() {
                let params = {
                    Sid: this.form.Sid
                }
                getFactoryBySid(params).then(res => {
                    if (res != null) {
                        this.form.Roomnum = res.Roomnum
                        this.original_Roomnum = res.Roomnum
                        this.form.Factoryname = res.Fcatoryname
                        this.form.Stationexplain = res.Stationexplain
                        this.form.Station = res.Station
                        this.form.Stationnum = res.Stationnum
                        for (let i = 1; i <= this.form.Roomnum; i++) {
                            let num = 'Room_' + i + '_num'
                            this.ObjRooms[num] = res[num]
                            this.Rooms.push({
                                label: num,
                                value: res[num]
                            })
                        }
                        console.log(this.ObjRooms)
                        console.log(this.form.Room)
                    }
                })
            },
            onSubmit() {

                let params = {
                    Sid : this.form.Sid,
                    Factoryname: this.form.Factoryname,
                    Stationnum: this.form.Stationnum,
                    Roomnum: this.form.Roomnum,
                    Station: this.form.Station,
                    Stationexplain: this.form.Stationexplain,
                    Rooms: this.ObjRooms
                }

                // let paramsObj = Object.assign(params, this.ObjRooms)
                console.log(params)
                postFactory(params).then((res) => {
                    console.log(res)
                })
            }
        }
    }
</script>