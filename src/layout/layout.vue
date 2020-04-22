<template>
    <div class="main">
        <el-container class="app-container-0">
          <el-header>
              <div class="el-row" gutter="24">
                  <div class="header-title">
                      <img src="./../assets/logo.png" class="logo-img" />
                      <span  v-show="showLeftMenu">后台管理系统</span>
                  </div>
                  <div class="toggle-left-menu-icon" @click="toggleLeftMenu">
                      <i class=" el-icon-menu" title="收缩左侧菜单"></i>
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
            <el-aside width="230px" v-show="showLeftMenu">Aside</el-aside>
            <el-container>
              <el-main>
                  MAIN
              </el-main>
                <el-footer height="40px"><strong>Copyright@2020 Sumile-ting. </strong> All right reserved.</el-footer>
            </el-container>
          </el-container>
        </el-container>
    </div>
</template>

<script>
    import screenfull from 'screenfull';
    export default {
        name: "layout",
        data() {
            return {
                showLeftMenu: true,
            }

        },
        methods: {
            toggleLeftMenu: function () {
                this.showLeftMenu = !this.showLeftMenu;
            },
            screen: function () {
                screenfull.toggle();
            }
        }
    }
</script>

<style scoped>

</style>