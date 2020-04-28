<template>
  <div>
        <el-container>
            <el-main>
                <router-view></router-view>
            </el-main>

        </el-container>

    </div>
</template>

<script>
// @ is an alias to /src
//import pages from '@/components/HelloWorld.vue'

export default {
  name: 'home',
  components: {

  }
}
</script>
<style scoped>
    main.el-main {
        padding: 0px;
    }
</style>
