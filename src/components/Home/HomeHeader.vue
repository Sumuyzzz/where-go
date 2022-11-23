<script setup lang="ts">
import { useRoute } from 'vue-router'
import router from '@/router'
const route = useRoute()
const jumpSearchPage = () => {
  router.push({
    name: 'search',
  })
}
</script>

<template>
  <div class="h-full bg-cyan-500 flex  text-white text-sm items-center justify-between ">
    <div class=" flex-1 flex justify-center">
      <div class="i-material-symbols-arrow-back-ios-rounded " />
    </div>

    <div class=" w-17/20">
      <el-input placeholder="输入城市/景点/游玩主题" @focus="jumpSearchPage">
        <template #prefix>
          <div class="i-material-symbols-search" />
        </template>
      </el-input>
    </div>
    <div class="flex items-center flex-1 justify-center">
      <span>广州</span>
      <div class="i-material-symbols-arrow-drop-down h-6 w-6 " />
    </div>
  </div>
</template>

<style scoped>

</style>
