<script setup lang="ts">

</script>

<template>
  <el-container>
    <el-header class="!p-0 ">
      <el-card>
        <HomeTabs />
      </el-card>
    </el-header>
    <el-main class="!p-0">
      <el-card class="m-b-2">
        <HomeWeeklyHotList />
      </el-card>
      <el-card>
        <HomeLikeList />
      </el-card>
    </el-main>
    <el-footer class="!p-0">
      <HomeWeeklyList />
    </el-footer>
  </el-container>
</template>

<style scoped>
:deep(.el-card__body){
  padding: 0;
}
</style>
