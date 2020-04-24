<template>
    <div>
        <el-menu class="el-menu-vertical-demo" router :collapse="onlyShowIcon" :collapse-transition="false" :default-active="activeMenu">
            <template v-for="item in asideNames" >
                 <el-submenu :index="item.url" :key="item.url" v-if="item.children && item.children.length">
                    <template slot="title">
                      <i :class="item.icon"></i>
                      <span>{{item.title}}</span>
                    </template>
                     <template v-for="subItem in item.children" >
                         <el-submenu :index="subItem.url" :key="subItem.url" v-if="subItem.children && subItem.children.length">
                             <span slot="title">{{subItem.title}}</span>
                         </el-submenu>
                        <el-menu-item v-else :index="subItem.url" :key="subItem.url">
                            <span slot="title">{{subItem.title}}</span>
                        </el-menu-item>
                    </template>

                 </el-submenu>
                <el-menu-item v-else :index="item.url" :key="item.url">
                    <i :class="item.icon"></i>
                    <span>{{item.title}}</span>
                </el-menu-item>
            </template>

        </el-menu>
    </div>
    
</template>

<script>
    export default {
        name: "SideMenu",
        props: {
            onlyShowIcon: Boolean,
            mainPath: String
        },
        data() {
            return {
                leftMenus: this.MENUS.MAIN_MENUS,
                activeMenu: ''
            }
        },
        computed: {
            asideNames: function () {
                return this.leftMenus.find(item => item.name == this.mainPath).menus;
            }
        },
        mounted() {
            this.activeMenu = this.$route.path;
            if(this.activeMenu == '/') {
                this.activeMenu = this.asideNames[0].url;
            }
        }
    }
</script>

<style scoped>
.el-menu-vertical-demo {
    text-align: left;
}
</style>