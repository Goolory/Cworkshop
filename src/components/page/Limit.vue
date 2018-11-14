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
                    <el-form-item label="工位">
                        <el-select v-model="form.region" placeholder="请选择">
                            <el-option key="bbk" label="终端警报" value="bbk"></el-option>
                            <el-option key="xtc" label="平台警报" value="xtc"></el-option>
                            <el-option key="imoo" label="终端警报+平台警报" value="imoo"></el-option>
                        </el-select>
                    </el-form-item>
                    <el-form-item label="工位额定人数">
                        <el-select v-model="form.region" placeholder="请选择">
                            <el-option key="bbk" label="24小时" value="bbk"></el-option>
                            <el-option key="xtc" label="48小时" value="xtc"></el-option>
                            <el-option key="imoo" label="72小时" value="imoo"></el-option>
                        </el-select>
                    </el-form-item>
                    <el-form-item label="工位地址">
                        <el-input v-model="form.name"></el-input>
                    </el-form-item>
                    <el-form-item label="工位说明">
                        <el-input v-model="form.name"></el-input>
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
    export default {
        data: function() {
            return {
                options: [{
                        value: 'guangdong',
                        label: '广东省',
                        children: [{
                                value: 'guangzhou',
                                label: '广州市',
                                children: [{
                                        value: 'tianhe',
                                        label: '天河区'
                                    },
                                    {
                                        value: 'haizhu',
                                        label: '海珠区'
                                    }
                                ]
                            },
                            {
                                value: 'dongguan',
                                label: '东莞市',
                                children: [{
                                        value: 'changan',
                                        label: '长安镇'
                                    },
                                    {
                                        value: 'humen',
                                        label: '虎门镇'
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        value: 'hunan',
                        label: '湖南省',
                        children: [{
                            value: 'changsha',
                            label: '长沙市',
                            children: [{
                                value: 'yuelu',
                                label: '岳麓区'
                            }]
                        }]
                    }
                ],
                form: {
                    name: '',
                    region: '',
                    date1: '',
                    date2: '',
                    delivery: true,
                    type: ['步步高'],
                    resource: '小天才',
                    desc: '',
                    options: []
                }
            }
        },
        methods: {
            onSubmit() {
                this.$message.success('提交成功！');
            }
        }
    }
</script>