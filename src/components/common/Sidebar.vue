<template>
  <div class="sidebar">
    <!-- <el-menu
      :default-active="activeIndex"
      class="el-menu-demo"
      mode="horizontal"
      @select="handleSelect"
    >
      <el-menu-item index="1">处理中心</el-menu-item>
      <el-submenu index="2">
        <template slot="title">我的工作台</template>
        <el-menu-item index="2-1">选项1</el-menu-item>
        <el-menu-item index="2-2">选项2</el-menu-item>
        <el-menu-item index="2-3">选项3</el-menu-item>
      </el-submenu>
      <el-menu-item index="3">
        <a href="https://www.ele.me" target="_blank">订单管理</a>
      </el-menu-item>
    </el-menu> -->

    <el-menu class="el-menu-demo bg-img" :default-active="onRoutes" :collapse="collapse" mode="horizontal"
            text-color="#bfcbd9" active-text-color="#da9000" unique-opened router>
            <template v-for="item in items">
                <template v-if="item.subs">
                    <el-submenu :index="item.index" :key="item.index">
                        <template slot="title">
                            <i :class="item.icon"></i><span slot="title">{{ item.title }}</span>
                        </template>
                        <el-menu-item v-for="(subItem,i) in item.subs" :key="i" :index="subItem.index">
                            {{ subItem.title }}
                        </el-menu-item>
                    </el-submenu>
                </template>
                <template v-else>
                    <el-menu-item :index="item.index" :key="item.index">
                        <i :class="item.icon"></i><span slot="title">{{ item.title }}</span>
                    </el-menu-item>
                </template>
            </template>
    </el-menu>
  </div>
</template>

<script>
import bus from "../common/bus";
export default {
  data() {
    return {
      collapse: false,
      items: [
        {
          icon: "el-icon-setting",
          index: "dashboard",
          title: "系统首页"
        },
        {
          icon: "el-icon-search",
          index: "search",
          title: "终端查询"
        },
        {
          icon: "el-icon-view",
          index: "monitor",
          title: "监控溯源"
        },
        {
          icon: "el-icon-edit",
          index: "limit",
          title: "工坊定员"
        },
        {
          icon: "el-icon-bell",
          index: "alarm",
          title: "定员报警"
        }
        // {
        //     icon: 'el-icon-message',
        //     index: 'tabs',
        //     title: 'tab选项卡'
        // },
        // {
        //     icon: 'el-icon-date',
        //     index: '3',
        //     title: '表单相关',
        //     subs: [
        //         {
        //             index: 'form',
        //             title: '基本表单'
        //         },
        //         {
        //             index: 'editor',
        //             title: '富文本编辑器'
        //         },
        //         {
        //             index: 'markdown',
        //             title: 'markdown编辑器'
        //         },
        //         {
        //             index: 'upload',
        //             title: '文件上传'
        //         }
        //     ]
        // },
        
      ]
    };
  },
  computed: {
    onRoutes() {
      return this.$route.path.replace("/", "");
    }
  },
  created() {
    // 通过 Event Bus 进行组件间通信，来折叠侧边栏
    bus.$on("collapse", msg => {
      this.collapse = msg;
    });
  }
};
</script>

<style scoped>
.sidebar {
  /* display: block;
  position: absolute;
  left: 0;
  top: 70px;
  bottom: 0; */
  height: 80px;
  background-color: #1b4f92;
}
.bg-img {
    background: url(../../assets/sidebar_bg.png);
    
}

.sidebar-el-menu:not(.el-menu--collapse) {
  width: 250px;
}
.sidebar > ul {
  height: 100%;
  border: none;
  border-radius:5px 5px 0 0;
}
.sidebar > ul > li {
    height: 80px;
    line-height: 80px;
    border-radius:5px 5px 0 0;
}
</style>
