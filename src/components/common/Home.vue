<template>
    <div class="wrapper">
        <v-head></v-head>
        
        <!-- <div class="content-box" :class="{'content-collapse':true}"> -->
            <!-- <div class="content"> -->
            <!-- <v-tags></v-tags> -->
            <div class="content">
                <v-sidebar></v-sidebar>
                <transition name="move" mode="out-in">
                    <keep-alive>
                        <router-view></router-view>
                    </keep-alive>
                </transition>
            </div>
        </div>
    <!-- </div> -->
</template>

<script>
    import vHead from './Header.vue';
    import vSidebar from './Sidebar.vue';
    import vTags from './Tags.vue';
    import bus from '../common/bus';
    export default {
        data(){
            return {
                collapse: false
            }
        },
        components:{
            vHead, vSidebar, vTags
        },
        created(){
            bus.$on('collapse', msg => {
                this.collapse = msg;
            })
        }
    }
</script>
<style scoped>
.content {
    padding: 5% 20% 0 20%;
    background: url(../../assets/background_image.png);
    height: 100%;
    min-width: 800px;

    overflow-y: scroll;
}
</style>
