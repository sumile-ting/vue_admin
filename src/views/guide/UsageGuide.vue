<template>
    <div>
        <el-breadcrumb separator-class="el-icon-arrow-right">
          <el-breadcrumb-item :to="{ path: '/' }">指南</el-breadcrumb-item>
          <el-breadcrumb-item>快速上手</el-breadcrumb-item>
        </el-breadcrumb>
        <el-container>
            <el-main>
                 Usage Guide
            </el-main>
        </el-container>
    </div>

</template>

<script>
    export default {
        name: "UsageGuide"
    }
</script>

<style scoped>

</style>