<template>
    <div>
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
                        <el-input v-model="form.name"></el-input>
                    </el-form-item>
                </el-col>
                <el-col :span="7">
                    <el-form-item label="房间号">
                        <el-input v-model="form.name"></el-input>
                    </el-form-item>
                </el-col>
                <el-col :span="6">
                    <el-form-item>
                        <el-button type="primary">搜索</el-button>
                        <!-- @click="onSubmit" -->
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
                    299
                </el-col>
            </el-row>
            <el-row>
                <el-col :span="8">
                    <div class="item text">房间号：</div>
                </el-col>
                <el-col :span="8">
                    299
                </el-col>
            </el-row>
            <el-row>
                <el-col :span="8">
                    <div class="item text">工坊实际人数：</div>
                </el-col>
                <el-col :span="8">
                    299
                </el-col>
            </el-row>
            <el-row>
                <el-col :span="8">
                    <div class="item text">工坊剩余可进人数：</div>
                </el-col>
                <el-col :span="8">
                    299
                </el-col>
            </el-row>
            </div>
            
        </el-card>
        <!-- </div> -->
    </div>
</template>

<script>
    export default {
        data() {
            return {
                form: {
                    name: ''
                }
            };
        }
    };
</script>

<style scoped>
.card-center{
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



