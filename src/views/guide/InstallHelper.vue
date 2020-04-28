<template>
    <div>
        <el-breadcrumb separator-class="el-icon-arrow-right">
          <el-breadcrumb-item :to="{ path: '/' }">指南</el-breadcrumb-item>
          <el-breadcrumb-item>安装</el-breadcrumb-item>
        </el-breadcrumb>
        <el-container>
            <el-main>
                 Install Helper
            </el-main>
        </el-container>

    </div>

</template>

<script>
    export default {
        name: "InstallHelper"
    }
</script>

<style scoped>

</style>