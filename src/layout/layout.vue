<template>
    <div class="main">
        <el-container class="app-container-0">
          <el-header>
              <div class="el-row" gutter="24">
                  <div class="header-title" v-bind:class="{ 'width-64': !showLeftMenu }">
                      <img src="./../assets/logo.png" class="logo-img" />
                      <span  v-show="showLeftMenu">后台管理系统</span>
                  </div>
                  <div class="toggle-left-menu-icon" @click="toggleLeftMenu">
                      <i class=" el-icon-menu" title="收缩左侧菜单"></i>
                  </div>
                  <div class="header-menu">
                      <el-menu mode="horizontal"
                               background-color="rgba(255, 255, 255, 0)"
                               text-color="#ffffff"
                               @select="handleSelect"
                               active-text-color="#ffffff"
                               :default-active="'/' + mainPath"
                               router
                                >
                          <el-menu-item v-for="(item, index) in topMenuItems" :index="'/' + item.name" :key="index">
                                {{ item.title }}
                          </el-menu-item>
                      </el-menu>
                  </div>
                  <div class="user-info pull-right">
                        <el-menu mode="horizontal">
                            <el-menu-item index="1" @click="screen">
                                <div >
                                    <i class=" el-icon-full-screen"></i>
                                </div>
                            </el-menu-item>
                             <el-submenu index="2" popper-class="userInfo-dropdown-menu">
                                 <template slot="title">Admin</template>
                                 <el-menu-item index="2-1">
                                     <i class="fa fa-user"> </i> 个人中心
                                 </el-menu-item>
                                 <el-menu-item index="2-2">
                                     <i class="fa fa-sign-out"> </i> 退出系统
                                 </el-menu-item>
                             </el-submenu>
                        </el-menu>
                  </div>

              </div>
          </el-header>
          <el-container>
            <el-aside width="230px" v-bind:class="{ 'width-64': !showLeftMenu }">
                <SideMenu :only-show-icon="!showLeftMenu" :main-path="mainPath"></SideMenu>
            </el-aside>
            <el-container>
              <el-main>
                  <router-view></router-view>
              </el-main>
                <el-footer height="40px"><strong>Copyright@2020 Sumile-ting. </strong> All right reserved.</el-footer>
            </el-container>
          </el-container>
        </el-container>
    </div>
</template>

<script>
    import screenfull from 'screenfull';
    import SideMenu from "./LayoutSideMenu";
    export default {
        name: "layout",
        components: {SideMenu},
        data() {
            return {
                showLeftMenu: true,
                mainPath: '',
                topMenuItems: this.MENUS.MAIN_MENUS
            }

        },
        methods: {
            toggleLeftMenu: function () {
                this.showLeftMenu = !this.showLeftMenu;
            },
            screen: function () {
                screenfull.toggle();
            },
            handleSelect: function (path) {
                this.mainPath = path.substring(1);
            }
        },
        beforeMount() {
            let path = this.$route.path.split('/')[1];
            this.mainPath = path;
        }
    }
</script>

<style scoped>
    .width-64 {
        width: 64px !important;
    }
    .header-menu {
        float: left;
        width: 70%;
        display: flex;
        justify-content: center;
        font-weight: bold;
    }

    .header-menu .el-menu-item {
        font-size: 1rem;
    }

    .header-menu .el-menu-item:hover, .header-menu .el-menu-item.is-active {
        background-color: #0079d9 !important;
    }

    main.el-main {
        padding: 0px;
    }
</style>