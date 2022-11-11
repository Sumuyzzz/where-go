<script setup lang="ts">

</script>

<template>
  <el-container>
    <el-header p-0 h-90>
      <el-card>
        <HomeTabs />
      </el-card>
    </el-header>
    <el-main>Main</el-main>
    <el-footer>Footer</el-footer>
  </el-container>
</template>

<style scoped>
:deep(.el-card__body){
  padding: 0;
}
</style>
